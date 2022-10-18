import createSagaMiddleware from 'redux-saga';
import { all, ForkEffect } from 'redux-saga/effects';
import { configureStore } from '@reduxjs/toolkit';
import { windowSlice } from './redux/WindowSlice';
import { themeSlice } from './redux/ThemeSlice';

const reducers = {
	window: windowSlice.slice.reducer,
	theme: themeSlice.slice.reducer,
};

const watchers: ForkEffect[] = [];

const sagas = function* root(): Generator {
	yield all(watchers);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: { ...reducers },
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);
