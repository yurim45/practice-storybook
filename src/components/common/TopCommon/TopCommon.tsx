import React, { useState } from 'react';
import styled from 'styled-components';
import { IconSearch, IconTopMenu } from '@components/icons';
import { flex, title03 } from '../../../styles/variable';

type SubMainTopProps = {
	title: string;
};

const TopCommon = ({ title }: SubMainTopProps) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<SubMain>
			<button>
				<IconTopMenu on={true} />
			</button>
			<button className="title" onClick={() => setOpen(!open)}>
				<h2>{title}</h2>
			</button>
			<button>
				<IconSearch width={24} color="black" />
			</button>
		</SubMain>
	);
};

export default TopCommon;

const SubMain = styled.div`
	${flex()};
	width: 375px;
	height: 52px;
	padding: 0 20px;
	background: ${({ theme }) => theme.colors.white};

	.title {
		width: 245px;
		height: 52px;
		margin: auto;
		padding: 12px 4px;
		${title03()};
		line-height: 0.5;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
