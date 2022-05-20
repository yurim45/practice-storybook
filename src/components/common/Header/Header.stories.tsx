import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import icons from '@components/icons';

const withForm = (story: () => JSX.Element) => (
	<div style={{ width: '375px' }}>{story()}</div>
);

export default {
	title: 'COMPONENTS/Header',
	// decorators: [withForm],
	component: Header,
	argTypes: {
		title: { type: 'string' },
	},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	title: '타이틀영역',
	left: (
		<>
			<icons.BackArrow />
			<icons.Home />
		</>
	),
	right: <icons.Notice />,
};

export const SubPageTitle = Template.bind({});
SubPageTitle.args = {
	title: '타이틀영역',
	right: (
		<>
			<icons.Add width={11} />
			추가
		</>
	),
};

export const TopCommon = Template.bind({});
TopCommon.args = {
	title: '타이틀영역',
	left: <icons.TopMenu on={true} />,
	right: <icons.Search width={24} color="black" />,
};
