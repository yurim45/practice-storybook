import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabMenu from './TabMenu';

export default {
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
);

export const Primary = Template.bind({});
Primary.args = {
	data: [
		{ id: 1, value: '일반공제', alert: true },
		{ id: 2, value: '추가공제', alert: false },
	],
};
