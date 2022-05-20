import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Star',
  component: Icons.Star,
  argTypes: {
    color: {
      control: 'color',
      description: '필수 입력값에 사용되는 아이콘입니다.',
    },
  },
} as ComponentMeta<typeof Icons.Star>;

const Template: ComponentStory<typeof Icons.Star> = (args) => (
  <Icons.Star {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
