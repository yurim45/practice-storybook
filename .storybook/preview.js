import React from 'react';
import GlobalStyles from '../packages/bends/src/shared/GlobalStyles';
import { addDecorator } from '@storybook/react';

addDecorator((story) => (
	<div style={{ width: '375px', padding: '0 20px' }}>
		<GlobalStyles />
		{story()}
	</div>
));

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

// export const decorators = [
// 	(Story) => (
// 		<ThemeProvider theme={theme}>
// 			<GlobalStyle />
// 			<Story />
// 		</ThemeProvider>
// 	),
// ];
