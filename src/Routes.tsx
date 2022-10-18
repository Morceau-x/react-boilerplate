import React, { useMemo } from 'react';
import { generatePath, useRoutes } from 'react-router';
import { PathParams } from './utils/RoutesUtils';
import { useParams } from 'react-router-dom';
import { Home } from './ui/pages/Home';
import { Game } from './ui/pages/Game';

export type PathsWithParams = {
	[Path in keyof typeof appPaths]: PathParams<Path>;
};

type AppRoutesType = {
	[Path in keyof PathsWithParams]: (params: PathsWithParams[Path]) => React.ReactNode;
};

const appPaths = {
	'/home': undefined,
	'/game/:width/:height/:bombs': undefined,
	'': undefined,
};

const appRoutesRenderers: AppRoutesType = {
	'/home': () => <Home />,
	'/game/:width/:height/:bombs': (params) => <Game {...params} />,
	'': () => <Home />,
};

type AppRouteProps = { children: (params: any) => React.ReactNode };

const AppRoute: React.FC<AppRouteProps> = ({ children }) => {
	const params = useParams();
	return <>{children(params)}</>;
};

export const AppRoutes: React.FC = () => {
	useParams();
	const routesObject = useMemo(
		() => Object.entries(appRoutesRenderers).map(([key, render]) => ({ path: key, element: <AppRoute>{render}</AppRoute> })),
		[]
	);
	return useRoutes(routesObject);
};

export const generateAppPath = <K extends keyof PathsWithParams>(path: K, params: PathsWithParams[K]): string => {
	return generatePath(path, params);
};
