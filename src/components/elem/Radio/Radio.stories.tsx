import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
	title: '컴포넌트/Radio',
	component: Radio,
	argTypes: {
		title: { type: 'string' },
<<<<<<< HEAD
		disabled: {
			type: 'boolean',
			control: { type: 'boolean' },
		},
=======
>>>>>>> de07985c6335f6e2ee666d0e225454cae73e90be
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
<<<<<<< HEAD
	title: '거주자여부',
=======
	title: '타이틀영역',
	data: [
		{ value: 'Y', text: '예' },
		{ value: 'N', text: '아니오' },
	],
>>>>>>> de07985c6335f6e2ee666d0e225454cae73e90be
};
