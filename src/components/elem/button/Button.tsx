import React, { MouseEvent, TouchEvent } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
	variant?: 'bigShort' | 'bigLong' | 'smallTypeA' | 'smallTypeB';
	label: string | React.ReactNode;
	isDisabled?: boolean;
	type?: 'submit' | 'button';

	//event
	onTouchEnd?: (e: TouchEvent<HTMLButtonElement>) => void;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
	isDisabled,
	variant = 'bigShort',
	type = 'button',
	...rest
}: ButtonProps) => {
	return (
		<Inner {...rest} type={type} variant={variant} disabled={isDisabled}>
			{rest.label}
		</Inner>
	);
};

export default Button;

const Inner = styled.button<ButtonProps>`
	letter-spacing: -0.2px;
	background-color: var(--compo-primary);
	color: var(--white);

	${({ variant }) => {
		switch (variant) {
			case 'bigLong':
				return css`
					width: 100%;
					height: 55px;
					font-size: 17px;
					font-weight: 700;
					line-height: 24.65px;
					border-radius: 10px;
				`;

			case 'bigShort':
				return css`
					width: 100%;
					height: 50px;
					font-size: 17px;
					font-weight: 700;
					line-height: 24.65px;
					border-radius: 10px;
				`;

			case 'smallTypeA':
				return css`
					min-width: 80px;
					height: 30px;
					font-size: 15px;
					border-radius: 17px;
					padding: 4px 27px;
					line-height: 21.75px;
				`;

			case 'smallTypeB':
				return css`
					min-width: 80px;
					height: 30px;
					font-size: 15px;
					border-radius: 17px;
					padding: 4px 27px;
					line-height: 21.75px;

					/* specific */
					background-color: #eef1f1 !important;
					color: #7c8986 !important;
				`;

			default:
				break;
		}
	}}

	:active {
		background-color: var(--compo-primary-press);
		${({ variant }) => {
			return (
				variant === 'smallTypeB' &&
				css`
					background-color: #d2d2d2 !important;
				`
			);
		}}
	}

	:disabled {
		background-color: #dbdbdb;
		color: #a5a5a5;

		${({ variant }) => {
			return (
				variant === 'smallTypeB' &&
				css`
					background-color: #eef1f1 !important;
					color: #c3c8cc !important;
				`
			);
		}}
	}
`;
