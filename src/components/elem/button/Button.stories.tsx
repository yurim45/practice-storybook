import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
	title: 'Elements/Button',
	component: Button,
	argTypes: {
		label: { type: 'string' },
		type: {
			options: ['submit', 'button'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'full'],
			control: { type: 'radio' },
			description: 'full: 화면 가로 사이즈, small: 네 글자 사이즈 ',
		},
		style: {
			options: ['default', 'except'],
			control: { type: 'radio' },
			description: 'default: 기본 primary 버튼, except: 부정 버튼',
		},
		disabled: {
			type: 'boolean',
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: '버튼',
	style: 'default',
};
