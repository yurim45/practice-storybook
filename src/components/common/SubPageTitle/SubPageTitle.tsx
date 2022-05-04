import React from 'react';
import styled from 'styled-components';
import { IconAdd } from '@components/icons';
import { flex, title03 } from '../../../styles/variable';

type SubPageProps = {
	title: string;
	onClick?: () => void;
};

const SubPageTitle = ({ title, onClick }: SubPageProps) => {
	return (
		<SubMain>
			<h2>{title}</h2>
			<AddBtn type="button" onClick={onClick}>
				<IconAdd />
				<span>추가</span>
			</AddBtn>
		</SubMain>
	);
};

export default SubPageTitle;

const SubMain = styled.div`
	${flex()};
	width: 375px;
	height: 52px;
	padding: 0 20px 0 60px;
	background: ${({ theme }) => theme.colors.white};

	h2 {
		${title03()};
		width: 200px;
		height: 52px;
		margin: auto;
		padding: 0 10px;
		text-align: center;
		line-height: 2.5;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

const AddBtn = styled.button`
	color: ${({ theme }) => theme.colors.txtGreen};
	font-weight: 400;
	font-size: 14px;
	letter-spacing: -0.2px;

	span {
		padding: 4px;
	}
`;
