import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextInput from './TextInput';

const withForm = (story: () => JSX.Element) => <form>{story()}</form>;

export default {
	title: '컴포넌트/TextInput',
	component: TextInput,
	decorators: [withForm],
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀',
};
