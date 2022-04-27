import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
	label?: string;
	size?: 'small' | 'full';
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
	width: ${({ size }) => (size === 'small' ? `${80}px` : '100%')};
	height: ${({ size }) => (size === 'small' ? '30px' : '55px')};
	border-radius: ${({ radius }) => (radius ? `${radius}px` : '0px')};
	background-color: ${({ bgColor, theme }) =>
		bgColor ? theme.colors[bgColor] : '#00C092'};
	color: ${({ color, theme }) => (color ? theme.colors[color] : '#ffffff')};
	font-weight: ${({ size }) => (size === 'small' ? `400` : '600')};
	font-size: ${({ size }) => (size === 'small' ? `14px` : '16px')};
	line-height: 0.5;
	letter-spacing: -0.2px;
`;

export default Button;
