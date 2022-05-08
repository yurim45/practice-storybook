import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
	label?: string;
	type?: 'submit' | 'button';
	size?: 'small' | 'full';
	style?: 'default' | 'except'; // 디폴트, 제외
	disabled?: boolean;
	onClick?: () => void;
};

const Button = ({
	label,
	style = 'default',
	type = 'button',
	...props
}: ButtonProps) => {
	return (
		<Inner style={style} type={type} {...props}>
			{label}
		</Inner>
	);
};

export default Button;

const Inner = styled.button<ButtonProps>`
	padding: 12px;
	width: ${(props) => (props.size === 'small' ? '80px' : '100%')};
	height: ${(props) => (props.size === 'small' ? '30px' : '55px')};
	border-radius: ${(props) => (props.size === 'small' ? '16px' : '10px')};
	background: ${({ style }) =>
		style === 'except' ? '#EEF1F1' : `var(${'--primary'})`};
	color: ${({ style }) =>
		style === 'except' ? '#7C8986' : `var(${'--white'})`};
	font-weight: ${(props) => (props.size === 'small' ? `500` : '700')};
	font-size: ${(props) => (props.size === 'small' ? `15px` : '16px')};
	line-height: 0.5;
	letter-spacing: -0.2px;

	:active {
		background: ${({ style }) =>
			style === 'except' ? '#D2D2D2' : `var(${'--primary'})`};
		color: ${({ style }) =>
			style === 'except' ? '#7C8986' : `var(${'--white'})`};
	}

	:disabled {
		background: ${(props) =>
			props.style === 'except'
				? `var(${'--white'})`
				: props.size === 'small'
				? '#DBDBDB'
				: '#DBDBDB'};
		color: ${(props) =>
			props.style === 'except'
				? '#C3C8CC'
				: props.size === 'small'
				? `var(${'--white'})`
				: '#A5A5A5'};
	}
`;
