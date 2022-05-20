import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
	title: 'COMPONENTS/Alert',
	component: Alert,
	argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
	return <Alert {...args}>{args.children}</Alert>;
};

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	buttonLabel: '확인',
	children: '내용을 입력해주세요',
};
