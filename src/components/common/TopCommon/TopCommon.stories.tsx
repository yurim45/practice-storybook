import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TopCommon from './TopCommon';

export default {
	title: '컴포넌트/TopCommon',
	component: TopCommon,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof TopCommon>;

const Template: ComponentStory<typeof TopCommon> = (args) => (
	<TopCommon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
};
