// Recursive helper for finding path parameters in the absence of wildcards
import { generatePath } from 'react-router';
import { PathsWithParams } from '../Routes';

export type _PathParam<Path extends string> =
	// split path into individual path segments
	Path extends `${infer L}/${infer R}`
		? _PathParam<L> | _PathParam<R>
		: // find params after `:`
		Path extends `${string}:${infer Param}`
		? Param
		: // otherwise, there aren't any params present
		  never;

export type PathParam<Path extends string> =
	// check if path is just a wildcard
	Path extends '*'
		? '*'
		: // look for wildcard at the end of the path
		Path extends `${infer Rest}/*`
		? '*' | _PathParam<Rest>
		: // look for params in the absence of wildcards
		  _PathParam<Path>;

type Params<Path extends string> = {
	[key in PathParam<Path>]: string;
};

export type PathParams<Path extends string> = keyof Params<Path> extends undefined ? undefined : Params<Path>;
