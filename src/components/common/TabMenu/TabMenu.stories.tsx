import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabMenu from './TabMenu';

export default {
	title: 'COMPONENTS/TabMenu',
	component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = (args) => (
	<TabMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	data: [
		{ id: 1, value: '신용카드', alert: true },
		{ id: 2, value: '직불카드', alert: false },
		{ id: 3, value: '현금영수증', alert: false },
		{ id: 4, value: '제로페이', alert: false },
	],
	components: [],
};
