import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Confirm from './Confirm';

export default {
	title: 'COMPONENTS/Confirm',
	component: Confirm,
	argTypes: {},
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => {
	return (
		<>
			<Confirm {...args}>{args.children}</Confirm>
		</>
	);
};

export const Primary = Template.bind({});
Primary.args = {
	variant: 'default',
	isOpen: true,
	children: '내용을 입력해주세요',
	okButtonLabel: '확인',
	cancelButtonLabel: '취소',
};
