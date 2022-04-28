import React from 'react';
import styled from 'styled-components';
import { IconAdd } from '@components/icons';
import { title03 } from '../../../styles/variable';

type SubPageProps = {
	title: string;
	onClick?: () => void;
};

const SubPageTitle = ({ title, onClick }: SubPageProps) => {
	return (
		<SubMain>
			<h2>{title}</h2>
			<AddBton type="button" onClick={onClick}>
				<IconAdd />
				<span>추가</span>
			</AddBton>
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
		width: 249px;
		height: 52px;
		margin: auto;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 2.1;
	}
`;

const AddBton = styled.button`
	position: relative;
	top: -35px;
	right: -315px;
	color: ${({ theme }) => theme.colors.txtGreen};
	font-weight: 400;
	font-size: 14px;
	letter-spacing: -0.2px;

	span {
		padding: 4px;
	}
`;
