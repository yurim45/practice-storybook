import { flex, title04 } from '@styles/variable';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
	title?: string;
	left?: string | ReactNode;
	right?: string | ReactNode;
};

const Header = ({ title, left, right }: HeaderProps) => {
	return (
		<Inner>
			{left ? <Left>{left}</Left> : <span></span>}
			<Title>{title}</Title>
			{right ? <Right>{right}</Right> : <span></span>}
		</Inner>
	);
};

export default Header;

const Inner = styled.header`
	${flex('space-between')};
	width: 100%;
	height: 52px;
	background: var(--white);
	border-bottom: 1px solid #f5f5f5;

	span {
		width: 20%;
	}
`;

const Left = styled.button`
	width: 20%;
	height: 52px;
	padding: 15px 10px;
`;

const Right = styled.button`
	width: 20%;
	height: 52px;
	padding: 15px 10px;
	color: var(--compo-primary);
	font-size: 15px;
	line-height: 0;
`;

const Title = styled.h2`
	display: inline-block;
	height: 52px;
	padding: 12px 4px;
	${title04()};
	text-align: center;
	line-height: 1.8;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
