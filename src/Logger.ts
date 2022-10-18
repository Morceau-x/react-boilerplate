import { AppDomain } from './utils/Basics';

const isDebugMode = (): boolean => process.env.NODE_ENV === 'development';

export type LoggerSpecs = {
	log: (domain: AppDomain, ...values: any[]) => void;
	warn: (domain: AppDomain, ...values: any[]) => void;
	error: (domain: AppDomain, ...values: any[]) => void;
	logValue: (domain: AppDomain, ...values: any[]) => (value: any) => void;
	warnValue: (domain: AppDomain, ...values: any[]) => (value: any) => void;
	errorValue: (domain: AppDomain, ...values: any[]) => (value: any) => void;

	logDebug: (domain: AppDomain, ...values: any[]) => void;
	warnDebug: (domain: AppDomain, ...values: any[]) => void;
	errorDebug: (domain: AppDomain, ...values: any[]) => void;
	logValueDebug: (domain: AppDomain, ...values: any[]) => (value: any) => void;
	warnValueDebug: (domain: AppDomain, ...values: any[]) => (value: any) => void;
	errorValueDebug: (domain: AppDomain, ...values: any[]) => (value: any) => void;
};

class ConsoleLogger implements LoggerSpecs {
	log = (domain: AppDomain, ...values: any[]): void => console.log(domain, ...values);
	warn = (domain: AppDomain, ...values: any[]): void => console.warn(domain, ...values);
	error = (domain: AppDomain, ...values: any[]): void => console.error(domain, ...values);
	logValue =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) =>
			console.log(domain, ...values, value);
	warnValue =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) =>
			console.log(domain, ...values, value);
	errorValue =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) =>
			console.log(domain, ...values, value);

	logDebug = (domain: AppDomain, ...values: any[]): void => {
		isDebugMode() ? console.log(domain, ...values) : null;
	};
	warnDebug = (domain: AppDomain, ...values: any[]): void => {
		isDebugMode() ? console.warn(domain, ...values) : null;
	};
	errorDebug = (domain: AppDomain, ...values: any[]): void => {
		isDebugMode() ? console.error(domain, ...values) : null;
	};
	logValueDebug =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) => {
			isDebugMode() ? console.log(domain, ...values, value) : null;
		};
	warnValueDebug =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) => {
			isDebugMode() ? console.warn(domain, ...values, value) : null;
		};
	errorValueDebug =
		(domain: AppDomain, ...values: any[]): ((value: any) => void) =>
		(value: any) => {
			isDebugMode() ? console.error(domain, ...values, value) : null;
		};
}

export const Logger: LoggerSpecs = new ConsoleLogger();
