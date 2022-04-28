import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
	title: '컴포넌트/SearchInput',
	component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
	// <SearchInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
