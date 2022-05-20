import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Check from './Check';

export default {
	title: 'Elements/Check',
	component: Check,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
	data: [
		{
			value: '1',
			text: '기본공제',
		},
		{ value: '2', text: '한부모공제' },
		{ value: '3', text: '경로우대공제' },
		{ value: '4', text: '부녀자공제' },
	],
};
