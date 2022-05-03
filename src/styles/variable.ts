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
	font-size: 21px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const title02 = () => css`
	font-weight: 700;
	font-size: 19px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const title03 = () => css`
	font-weight: 700;
	font-size: 17px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const title04 = () => css`
	font-weight: 700;
	font-size: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const title05 = () => css`
	font-weight: 600;
	font-size: 15px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const title06 = () => css`
	font-weight: 600;
	font-size: 14px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const body01 = () => css`
	font-weight: 400;
	font-size: 15px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const body02 = () => css`
	font-weight: 400;
	font-size: 14px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const body03 = () => css`
	font-weight: 400;
	font-size: 13px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
`;

export const body04 = () => css`
	font-weight: 500;
	font-size: 15px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.colors.black};
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
