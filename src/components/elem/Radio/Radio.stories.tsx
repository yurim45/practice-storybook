import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
	title: '컴포넌트/Radio',
	component: Radio,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
	data: [
		{ value: 'Y', text: '예' },
		{ value: 'N', text: '아니오' },
	],
};
