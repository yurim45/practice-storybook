import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Anchor from './Anchor';

export default {
	title: '컴포넌트/Anchor',
	component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: [
		{ value: '1', text: '일반' },
		{ value: '2', text: '전통시장' },
		{ value: '3', text: '대중교통' },
		{ value: '4', text: '도서 공연' },
	],
};
