import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabMenu from './TabMenu';

export default {
<<<<<<< HEAD
	title: 'COMPONENTS/TabMenu',
	component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = (args) => (
	<TabMenu {...args} />
=======
	title: '컴포넌트/탭메뉴',
	component: TabMenu,
	// argTypes: {
	// 	data: { type: 'string' },
	// },
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = ({ data, ...args }: any) => (
	<TabMenu {...args}>
		{data.map(({ id, value, alert }: any) => (
			<button {...args} value={value} alertkey={id}></button>
		))}
		<div></div>
	</TabMenu>
>>>>>>> de07985c6335f6e2ee666d0e225454cae73e90be
);

export const Primary = Template.bind({});
Primary.args = {
	data: [
<<<<<<< HEAD
		{ id: 1, value: '신용카드', alert: true },
		{ id: 2, value: '직불카드', alert: false },
		{ id: 3, value: '현금영수증', alert: false },
		{ id: 4, value: '제로페이', alert: false },
	],
	components: [],
=======
		{ id: 1, value: '일반공제', alert: true },
		{ id: 2, value: '추가공제', alert: false },
	],
>>>>>>> de07985c6335f6e2ee666d0e225454cae73e90be
};
