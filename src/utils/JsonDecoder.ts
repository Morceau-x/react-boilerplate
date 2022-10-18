import { DecoderFunction } from 'typescript-json-decoder';
import { AppError } from './Basics';
import { Err, Ok, ResultType } from './Result';

export class JsonDecoderError extends AppError {
	override name = 'JsonDecoderError';

	constructor(message: string) {
		super('I/O', message);
	}
}

export const jsonDecode = <D>(decoder: DecoderFunction<D>, value: any): ResultType<D, JsonDecoderError> => {
	try {
		return Ok(decoder(value));
	} catch (e) {
		if (e instanceof Error) {
			return Err(new JsonDecoderError(e.message));
		} else {
			return Err(new JsonDecoderError('Unknwon error while decoding'));
		}
	}
};
