import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BottomUp from './BottomUp';
import { Button } from '@components/elem';

export default {
	title: 'COMPONENTS/BottomUp',
	component: BottomUp,
	argTypes: {
		children: {
			description: 'children을 넣어주세요.',
		},
		setIsOpen: {
			description: '',
		},
	},
} as ComponentMeta<typeof BottomUp>;

const Template: ComponentStory<typeof BottomUp> = (args) => (
	<BottomUp {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: (
		<div style={{ padding: 26 }}>
			<p
				style={{
					padding: 26,
					textAlign: 'center',
					fontWeight: '700',
					fontSize: '19px',
					lineHeight: 1.5,
				}}
			>
				카카오톡 앱에서 인증 완료후 <br />
				인증 완료 버튼을 눌러주세요
			</p>
			<Button variant="bigLong" label="동의하고 인증하기" />
		</div>
	),
	setIsOpen: () => console.log('='),
};
