import React from 'react';
import styled from 'styled-components';
import { IconBackArrow, IconHome, IconAdd } from '@components/icons';
import { flex, title03 } from '../../../styles/variable';

type SubMainTopProps = {
	title: string;
};

const TopSubMain = ({ title }: SubMainTopProps) => {
	return (
		<SubMain>
			<button>
				<IconBackArrow />
			</button>
			<button>
				<IconHome />
			</button>
			<button className="title">
				<h2>{title}</h2>
			</button>
			<AddBtn>
				<IconAdd />
				<span>추가</span>
			</AddBtn>
		</SubMain>
	);
};

export default TopSubMain;

const SubMain = styled.div`
	${flex()};
	width: 375px;
	height: 52px;
	padding: 0 20px;
	background: ${({ theme }) => theme.colors.white};

	.title {
		width: 150px;
		height: 52px;
		margin: auto;
		${title03()};
		padding: 0 10px 0 0;
		line-height: 0.5;
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
