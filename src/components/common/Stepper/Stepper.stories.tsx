import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Stepper from './Stepper';

export default {
	title: '컴포넌트/Stepper',
	component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
	<Stepper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	data: [
		{ id: 1, value: '세대주 여부' },
		{ id: 2, value: '부양가족 확인' },
		{ id: 3, value: '종전근무지' },
	],
	components: [],
};
