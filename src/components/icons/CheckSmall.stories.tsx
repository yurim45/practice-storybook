import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/CheckSmall',
  component: Icons.CheckSmall,
  argTypes: {
    on: { type: 'boolean', description: '' },
    width: { type: 'number', description: '가로 사이즈를 숫자로 입력하세요' },
  },
} as ComponentMeta<typeof Icons.CheckSmall>;

const Template: ComponentStory<typeof Icons.CheckSmall> = (args) => (
  <Icons.CheckSmall {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  on: true,
  width: 20,
};
