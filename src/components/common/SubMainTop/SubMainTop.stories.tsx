import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubMainTop from './SubMainTop';

export default {
	title: '컴포넌트/SubMainTop',
	component: SubMainTop,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof SubMainTop>;

const Template: ComponentStory<typeof SubMainTop> = (args) => (
	<SubMainTop {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
};
