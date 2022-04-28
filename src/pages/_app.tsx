import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '@data/reducers';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import GlobalStyle from '@styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
	const store = createStore(rootReducer, applyMiddleware(thunk));

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />;
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
