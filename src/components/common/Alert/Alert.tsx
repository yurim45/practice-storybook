import React, { ReactNode, TouchEvent } from 'react';
import styled from 'styled-components';
import { flex, title05 } from '@styles/variable';

type AlertProps = {
	children: ReactNode;
	isOpen: boolean;
	onTouchButtonHandler: (e: TouchEvent<HTMLButtonElement>) => void;
	buttonLabel?: string;
};

const Alert = ({
	children,
	isOpen,
	onTouchButtonHandler,
	buttonLabel = '확인',
}: AlertProps) => {
	if (!isOpen) return null;
	return (
		<StWrapper>
			<StStack>
				<StMain>{children}</StMain>
				<StButton onTouchEnd={onTouchButtonHandler}>{buttonLabel}</StButton>
			</StStack>
		</StWrapper>
	);
};

export default Alert;

const StWrapper = styled.div`
	${flex()};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	padding: 0 30px;
	z-index: 100; // [WillFix]: z-index를 변수화해서 관리
`;

const StMain = styled.main`
	width: 100%;
	background-color: var(--white);
	padding: 28px 20px;
	border-radius: 10px 10px 0 0;
`;

const StButton = styled.button`
	width: 100%;
	height: 50px;
	background-color: var(--compo-primary);
	border-radius: 0 0 10px 10px;

	/* font */
	${title05()}
	color: var(--white);
`;

const StStack = styled.div`
	${flex()};
`;
