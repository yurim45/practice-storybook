import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
import icons from '../../icons/index';

export default {
	title: 'Elements/Input',
	component: Input,
	argTypes: {
		title: { type: 'string' },
		type: {
			options: ['text', 'date', 'email', 'password'],
			control: { type: 'radio' },
			description: '기본값은 text 입니다.',
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
		prefix: {
			description: '아이콘을 컴포넌트 형태로 입력하세요.',
		},
		border: {
			options: ['full', 'bottom'],
			control: { type: 'radio' },
			description: '기본값은 full 입니다.',
		},
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀',
	placeholder: '입력 대기_플레이스 홀더',
	iconStar: true,
};

export const iconHelpInput = Template.bind({});
iconHelpInput.args = {
	title: '타이틀',
	placeholder: '입력 대기_플레이스 홀더',
	iconHelp: true,
};

export const Search = Template.bind({});
Search.args = {
	prefix: <icons.Search color="#C5C5C5" width={18} />,
	placeholder: '검색어를 입력하세요.',
};

export const Password = Template.bind({});
Password.args = {
	title: '비밀번호',
	placeholder: '비밀번호를 입력하세요',
	type: 'password',
	border: 'bottom',
};
