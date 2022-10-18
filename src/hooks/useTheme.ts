import { Theme } from '../models/ThemeModel';
import { useAppSelector } from '../redux/ReduxTypes';
import { useMemo } from 'react';

export const useTheme = (): Theme => {
	return useAppSelector((state) => state.theme);
};

type StylesParams<F extends (theme: Theme, ...args: any[]) => any> = F extends (theme: Theme, ...args: infer P) => any ? P : never;

export function useStyles<F extends (theme: Theme, ...args: any[]) => any>(styles: F, ...args: StylesParams<F>): ReturnType<F> {
	const theme = useTheme();
	return useMemo(() => styles(theme, ...args), [theme, ...args]);
}
