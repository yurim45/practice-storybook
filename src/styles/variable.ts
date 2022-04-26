import { css } from 'styled-components';

export const flex = (
	justify = 'center',
	align = 'center',
	direction = 'row'
) => css`
	display: flex;
	justify-content: ${justify};
	align-items: ${align};
	flex-direction: ${direction};
`;
