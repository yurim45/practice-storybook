import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubPageTitle from './SubPageTitle';

export default {
	title: '컴포넌트/내역 및 하위 페이지',
	component: SubPageTitle,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof SubPageTitle>;

const Template: ComponentStory<typeof SubPageTitle> = (args) => (
	<SubPageTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
};
