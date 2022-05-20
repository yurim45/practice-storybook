import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Help',
  component: Icons.Help,
  argTypes: {
    width: { type: 'number', description: '가로 사이즈를 숫자로 입력하세요' },
  },
} as ComponentMeta<typeof Icons.Help>;

const Template: ComponentStory<typeof Icons.Help> = (args) => (
  <Icons.Help {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 20,
};
