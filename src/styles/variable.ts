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

export const title01 = () => css`
	font-weight: 700;
	font-size: 19px;
	line-height: 140%;
	letter-spacing: -0.2px;
	color: #000000;
`;

export const title02 = () => css`
	font-weight: 700;
	font-size: 17px;
	line-height: 145%;
	letter-spacing: -0.2px;
	color: #000000;
`;

export const title03 = () => css`
	font-weight: 600;
	font-size: 15px;
	line-height: 150%;
	letter-spacing: -0.2px;
	color: #000000;
`;

export const textbody = () => css`
	color: ${({ theme }) => theme.colors.txt555};
`;

export const textDesc = () => css`
	color: ${({ theme }) => theme.colors.txt777};
`;

export const textDisabled = () => css`
	color: ${({ theme }) => theme.colors.txt999};
`;

export const inputStyle = () => css`
	width: 335px;
	height: 46px;
	padding: 12px;
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.txt333};
	font-size: 14px;
	font-weight: 500;
	border: 1px solid ${({ theme }) => theme.colors.borderColor};
	border-radius: 8px;

	::placeholder {
		color: ${({ theme }) => theme.colors.txt999};
		font-size: 14px;
		font-weight: 400;
		letter-spacing: -0.2px;
	}

	:focus {
		border: 1.5px solid ${({ theme }) => theme.colors.txtGreen};
	}
`;
