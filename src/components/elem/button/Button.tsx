import { flex } from '@styles/variable';
import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
	label?: string | React.ReactNode;
	size?: 'small' | 'full';
	style?: 'default' | 'except'; // 디폴트, 제외
	type?: 'submit' | 'button';
	disabled?: boolean;
	onClick?: () => void;
};

const Button = ({ label, type = 'button', ...props }: ButtonProps) => {
	return (
		<Inner type={type} {...props}>
			{label}
		</Inner>
	);
};

export default Button;

const Inner = styled.button<ButtonProps>`
	width: ${(props) => (props.size === 'small' ? '80px' : '100%')};
	height: ${(props) => (props.size === 'small' ? '30px' : '55px')};
	border-radius: ${(props) => (props.size === 'small' ? '16px' : '10px')};
	background: ${(props) =>
		props.style === 'except' ? '#EEF1F1' : `var(${'--primary'})`};
	color: ${(props) =>
		props.style === 'except' ? '#7C8986' : `var(${'--white'})`};
	font-weight: ${(props) => (props.size === 'small' ? `500` : '700')};
	font-size: ${(props) => (props.size === 'small' ? `15px` : '16px')};
	line-height: 1.5;
	letter-spacing: -0.2px;

	:active {
		background: ${(props) =>
			props.style === 'except' ? '#D2D2D2' : `var(${'--primary'})`};
		color: ${(props) =>
			props.style === 'except' ? '#7C8986' : `var(${'--white'})`};
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

const Label = styled.span``;
