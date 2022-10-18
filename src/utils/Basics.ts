export type AppDomain = 'App' | 'I18n' | 'Auth' | 'I/O';

export class AppError extends Error {
	constructor(readonly domain: AppDomain, message: string) {
		super(message);
	}
}

export const identity = <T>(a: T): T => a;

export type Optional<T, U extends keyof T> = {
	[P in U]?: T[P];
} & {
	[P in keyof Omit<T, U>]: T[P];
};
