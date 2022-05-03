import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopFullPopup from './TopFullPopup';

export default {
	title: '컴포넌트/TopFullPopup',
	component: TopFullPopup,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof TopFullPopup>;

const Template: ComponentStory<typeof TopFullPopup> = (args) => (
	<TopFullPopup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
};
