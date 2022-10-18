import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Store';
import { Action, AnyAction, Dispatch } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const name = 'global';

export const globalActions = {
	appStart: createAction(`${name}/appStart`),
	appIsReady: createAction(`${name}/appIsReady`),
	appNotReadyAnymore: createAction(`${name}/appNotReadyAnymore`),
	neverTriggered: createAction(`${name}/neverTriggered`),
};

export type State = ReturnType<typeof store.getState>;
export const useAppSelector = <TSelected = unknown>(
	selector: (state: State) => TSelected,
	equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected => useSelector<State, TSelected>(selector, equalityFn);
export const useAppDispatch = <A extends Action = AnyAction>(): Dispatch<A> => useDispatch<typeof store.dispatch>();
