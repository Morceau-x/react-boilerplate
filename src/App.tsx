import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import { createRoot } from 'react-dom/client';
import { Logger } from './Logger';
import { useWindowDimensionsChange } from './hooks/useResize';
import { Translation } from './ui/components/Translation';
import { injectGlobal } from '@emotion/css';
import { Fonts } from './assets/fonts/Fonts';
import { AppRoutes } from './Routes';
import { CustomBrowserRouter } from './ui/components/CustomBrowserRouter';
import { useAppDispatch } from './redux/ReduxTypes';
import { TestSlice } from './redux/Test';

const App: React.FC = () => {
    useWindowDimensionsChange();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(TestSlice.actions.actionUsedBySaga({ value: 'example' }));
    }, []);

    return (
        <Translation>
            <CustomBrowserRouter>
                <AppRoutes />
            </CustomBrowserRouter>
        </Translation>
    );
};

const rootElement = document.getElementById('app');

if (rootElement) {
    createRoot(rootElement, {
        onRecoverableError: Logger.warnValueDebug('App'),
        identifierPrefix: 'react',
    }).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

injectGlobal`
	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: local('Roboto'), local('Roboto-Regular'), url(${Fonts.Roboto.Regular}) format('truetype');;
	}

	@font-face {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: local('Roboto Bold'), local('Roboto-Bold'), url(${Fonts.Roboto.Bold}) format('truetype');;
	}

	body {
		font-family: 'Roboto', 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #fafafa;
		color: rgba(0, 0, 0, 0.87);
		overflow: hidden;
	}
`;

export const test =
    process.env.NODE_ENV === 'test'
        ? {
              rootElement,
              App,
          }
        : {};
