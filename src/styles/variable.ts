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

export const container = () => css`
	min-width: 600px;
	max-width: 800px;
	background-color: ${({ theme }) => theme.colors.white};

	@media ${({ theme }) => theme.desktop} {
		width: 700px;
	}
`;

export const title = () => css`
	margin: 10px 0;
	font-size: 18px;
	font-weight: 800;

	@media ${({ theme }) => theme.desktop} {
		margin: 0;
		padding: 10px 0 20px;
		font-size: 16px;
		text-align: center;
		border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderColor};
	}
`;

export const inputContainer = () => css`
	${flex('flex-start', 'center')};
	margin: 5px;
	/* min-width: 435px; */

	@media ${({ theme }) => theme.desktop} {
		${flex('center', 'flex-start', 'column')};
		min-width: 105px;
		margin: 5px 10px;
	}
`;

export const subContainer = () => css`
	margin-top: 49px;
	background-color: '#E5E5E5';
	border-radius: 12px;
`;

export const subContainerInnder = () => css`
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 13px;
`;

export const inputStyle = () => css`
	min-width: 250px;
	max-width: 335px;
	height: 46px;
	margin: 0 10px;
	padding: 12px;
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.borderColor};
	border-radius: 8px;
	::placeholder {
		color: ${({ theme }) => theme.colors.txt999};
		letter-spacing: -0.2px;
	}

	:focus {
		border: 1.5px solid ${({ theme }) => theme.colors.txtGreen};
	}

	@media ${({ theme }) => theme.tablet} {
		min-width: 335px;
	}
`;

export const footer = () => css`
	padding: 20px;
`;

export const label = () => css`
	min-width: 80px;
	font-weight: bold;

	@media ${({ theme }) => theme.desktop} {
		margin: 12px 15px;
	}
`;

export const scrollView = () => css`
	max-height: 100px;
	overflow-y: scroll;
`;

export const wrapper = () => css`
	${flex('flex-start', 'center')};

	@media ${({ theme }) => theme.tablet} {
		${flex('center', 'center', 'column')};
	}
`;

export const footerStyle = () => css`
	${flex('flex-end', 'fcenter')};
	padding: 5px 10px;
`;

export const footerInner = () => css`
	${flex('center', 'fcenter')};
	padding-right: 30px;
`;
