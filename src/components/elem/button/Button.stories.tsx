import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import icons from '@components/icons';
export default {
	title: 'Elements/Button',
	component: Button,
	argTypes: {
		label: {
			type: 'string',
			description:
				'아이콘을 추가할 수 있습니다. 예시: <><icons.Add color="#fff" />추가</>',
		},
		type: {
			options: ['submit', 'button'],
			control: { type: 'radio' },
		},
		variant: {
			options: ['bigShort', 'bigLong', 'smallTypeA', 'smallTypeB'],
			control: { type: 'radio' },
			description: 'full: 화면 가로 사이즈, small: 네 글자 사이즈 ',
		},
		isDisabled: {
			type: 'boolean',
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ ...args }) => (
	<Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	label: '버튼',
	variant: 'bigLong',
	isDisabled: false,
};

export const smallTypeA = Template.bind({});
smallTypeA.args = {
	label: '버튼',
	variant: 'smallTypeA',
};

export const smallTypeB = Template.bind({});
smallTypeB.args = {
	label: '제외',
	variant: 'smallTypeB',
};

export const AddBtn = Template.bind({});
AddBtn.args = {
	label: (
		<>
			<icons.Add color="#fff" width={11} />
			추가
		</>
	),
	variant: 'smallTypeA',
};
