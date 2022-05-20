import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
	title: 'Elements/Select',
	component: Select,
	argTypes: {
		title: { type: 'string' },
		data: {
			description:
				'{id: number, value: string, name: string} 형태의 배열로 입력해주세요.',
		},
		placeholder: { type: 'string', description: '힌트 텍스트를 입력하세요.' },
		iconHelp: {
			type: 'boolean',
			control: { type: 'boolean' },
			description: '도움말 여부를 입력하세요.',
		},
		iconStar: {
			type: 'boolean',
			control: { type: 'boolean' },
			description: '필수값 여부를 입력하세요.',
		},
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀',
	iconStar: true,
	placeholder: '연금 종류를 선택해주세요.',
	data: [
		{ id: 1, value: 'string', name: '국민연금보험료공제(대상금액)' },
		{ id: 2, value: 'string', name: '공무원연금(대상금액)' },
		{ id: 3, value: 'string', name: '군인연금(대상금액)' },
	],
};

export const iconHelpSelect = Template.bind({});
iconHelpSelect.args = {
	title: '타이틀',
	iconHelp: true,
	isDisabled: true,
};
