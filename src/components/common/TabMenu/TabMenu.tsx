import { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import { theme } from '@styles/theme';
import icons from '@components/icons/index';
import { flex } from '@styles/variable';
=======
import { theme } from '../../../styles/theme';
import { IconAlert } from '@components/icons';
import { flex } from '../../../styles/variable';
>>>>>>> de07985c6335f6e2ee666d0e225454cae73e90be

type TabProps = {
	data: { id: number; value: string; alert: boolean }[];
	components?: any;
};

const TabMenu = ({ data, components }: TabProps) => {
	const [tab, setTab] = useState(1);

	return (
		<div>
			{data?.map(({ id, value, alert }) => (
				<Tab
					key={id}
					active={id === tab}
					length={data?.length}
					onClick={() => setTab(id)}
				>
					<Text>
						{alert && <icons.Alert />}
						{value}
					</Text>
				</Tab>
			))}
			<div>{components[tab]}</div>
		</div>
	);
};

export default TabMenu;

const Tab = styled.button<{ active: boolean; length: number }>`
	width: ${({ length }) => `${100 / length}%`};
	height: 50px;
	padding: 16px auto 19px;
	background: #fff;
	color: ${({ active, theme }) =>
		active ? theme.colors.txtGreen : theme.colors.txt555};
	font-weight: ${({ active }) => (active ? 600 : 400)};
	font-size: 15px;
	line-height: 100%;
	letter-spacing: -0.2px;
	border-bottom: ${({ active }) =>
		active && `2px solid ${theme.colors.txtGreen}`};
`;

const Text = styled.div`
	${flex()};
`;
