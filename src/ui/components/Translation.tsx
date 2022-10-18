import React, { PropsWithChildren } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { TranslationLoadingPage } from '../pages/TranslationLoadingPage';
import { i18nInstance } from '../../I18n';

export type TranslationProps = PropsWithChildren<{}>;

export const Translation: React.FC<TranslationProps> = ({ children }) => {
	return (
		<I18nextProvider i18n={i18nInstance}>
			{(() => {
				const language = useTranslation();
				return language.ready ? children : <TranslationLoadingPage />;
			})()}
		</I18nextProvider>
	);
};
