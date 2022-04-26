import React from 'react';
import styled from 'styled-components';
import { IconAdd } from '@components/icons';
import { flex, title03 } from '../../../styles/variable';

type SubPageProps = {
	title: string;
};

const SubPageTitle = ({ title }: SubPageProps) => {
	return (
		<SubMain>
			<h2>{title}</h2>
			<IconWrapper>
				<IconAdd />
				<span>추가</span>
			</IconWrapper>
		</SubMain>
	);
};

export default SubPageTitle;

const SubMain = styled.div`
	width: 375px;
	height: 52px;
	background: ${({ theme }) => theme.colors.white};

	h2 {
		${title03()};
		width: 245px;
		margin: auto;
		padding: 14px 4px;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

const IconWrapper = styled.button`
	${flex()};
	position: relative;
	top: -40px;
	right: -315px;
	color: ${({ theme }) => theme.colors.txtGreen};
	font-weight: 400;
	font-size: 14px;
	line-height: 1.8;
	letter-spacing: -0.2px;

	span {
		padding: 4px;
	}
`;