import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
	title: '컴포넌트/Radio',
	component: Radio,
	argTypes: {
		title: { type: 'string' },
		disabled: {
			type: 'boolean',
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '거주자여부',
};
