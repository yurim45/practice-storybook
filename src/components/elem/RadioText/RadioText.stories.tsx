import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioText from './RadioText';

export default {
	title: '컴포넌트/RadioText',
	component: RadioText,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof RadioText>;

const Template: ComponentStory<typeof RadioText> = (args) => (
	<RadioText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
	data: [
		{ value: 'Y', text: '예' },
		{ value: 'N', text: '아니오' },
	],
};
