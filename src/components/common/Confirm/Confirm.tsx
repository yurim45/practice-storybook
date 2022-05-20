import { flex, title05 } from '@styles/variable';
import React, { ReactNode, TouchEvent } from 'react';
import styled, { css } from 'styled-components';

type ConfirmProps = {
	children: ReactNode;
	isOpen: boolean;
	variant: 'default' | 'warning';
	onTouchedOkHandler: (e: TouchEvent<HTMLButtonElement>) => void;
	onTouchedCancelHandler: (e: TouchEvent<HTMLButtonElement>) => void;
	okButtonLabel?: string;
	cancelButtonLabel?: string;
};

const Confirm = ({
	variant,
	children,
	isOpen,
	okButtonLabel = '확인',
	cancelButtonLabel = '취소',
	onTouchedOkHandler,
	onTouchedCancelHandler,
}: ConfirmProps) => {
	if (!isOpen) return null;
	return (
		<StWrapper>
			<div>
				<StMain>{children}</StMain>
				<StStack>
					<StCalcelButton onTouchEnd={onTouchedCancelHandler} variant={variant}>
						{cancelButtonLabel}
					</StCalcelButton>
					<StOkButton onTouchEnd={onTouchedOkHandler} variant={variant}>
						{okButtonLabel}
					</StOkButton>
				</StStack>
			</div>
		</StWrapper>
	);
};
export default Confirm;

const StWrapper = styled.div`
	${flex()};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 0 30px;
	z-index: 100; // [WillFix]: z-index를 변수화해서 관리
`;

const StStack = styled.div`
	${flex()};
`;

const StMain = styled.main`
	width: 100%;
	background-color: var(--white);
	padding: 28px 20px;
	border-radius: 10px 10px 0 0;
`;

const StOkButton = styled.button<Pick<ConfirmProps, 'variant'>>`
	width: 100%;
	height: 50px;

	${({ variant }) =>
		variant === 'default' &&
		css`
			border-radius: 0 0 10px 0;
			background-color: var(--compo-primary);
			color: var(--white);
		`};

	${({ variant }) =>
		variant === 'warning' &&
		css`
			border-radius: 0 0 0 10px;
			background-color: #eef1f1;
			color: #89949e;
		`};

	/* font */
	${title05()}
`;

const StCalcelButton = styled.button<Pick<ConfirmProps, 'variant'>>`
	width: 100%;
	height: 50px;
	background-color: #959f9d;

	${({ variant }) =>
		variant === 'default' &&
		css`
			border-radius: 0 0 0 10px;
		`};

	${({ variant }) =>
		variant === 'warning' &&
		css`
			border-radius: 0 0 10px 0;
		`};

	/* font */
	${title05()}
	color: var(--white);
`;
