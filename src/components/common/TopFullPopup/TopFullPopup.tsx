import React, { useState } from 'react';
import styled from 'styled-components';
import icons from '@components/icons/index';
import { flex, title03 } from '../../../styles/variable';

type SubMainTopProps = {
	title: string;
};

const TopFullPopup = ({ title }: SubMainTopProps) => {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<SubMain>
			<button>
				<icons.Close />
			</button>
			<button className="title" onClick={() => setOpen(!open)}>
				<h2>{title}</h2>
			</button>
		</SubMain>
	);
};

export default TopFullPopup;

const SubMain = styled.div`
	${flex()};
	width: 375px;
	height: 52px;
	padding: 0 40px 0 20px;
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
