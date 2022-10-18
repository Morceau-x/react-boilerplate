import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultTheme, Theme } from '../models/ThemeModel';

const initialState: Theme = defaultTheme;

const name: 'theme' = 'theme';

const slice = createSlice({
	name,
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => action.payload,
	},
});

export const themeSlice = {
	slice,
	actions: {
		setTheme: slice.actions.setTheme,
	},
};
