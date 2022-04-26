import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
	label?: string;
	width?: number;
	color?: string;
	bgColor: string;
	radius?: number;
	onClick?: () => void;
};

const Button = ({ label, ...props }: ButtonProps) => {
	return (
		<Inner type="button" {...props}>
			{label}
		</Inner>
	);
};

const Inner = styled.button<ButtonProps>`
	padding: 12px;
	width: ${({ width }) => (width ? `${width}px` : '100%')};
	border-radius: ${({ radius }) => (radius ? `${radius}px` : '0px')};
	background-color: ${({ bgColor, theme }) =>
		bgColor ? theme.colors[bgColor] : '#00C092'};
	color: ${({ color, theme }) => (color ? theme.colors[color] : '#ffffff')};
`;

export default Button;
