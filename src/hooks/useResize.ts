import { useAppDispatch, useAppSelector } from '../redux/ReduxTypes';
import { useEffect } from 'react';
import { windowSlice } from '../redux/WindowSlice';

export const useResize = (): { width: number; height: number } => {
	return useAppSelector((state) => state.window);
};

export const useWindowDimensionsChange = (): void => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		return window.addEventListener('resize', () => {
			dispatch(
				windowSlice.actions.resize({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			);
		});
	}, [dispatch]);
};
