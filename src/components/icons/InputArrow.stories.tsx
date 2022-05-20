import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/InputArrow',
  component: Icons.InputArrow,
  argTypes: {
    color: { control: 'color' },
    direction: {
      options: ['up', 'down'],
      control: { type: 'radio' },
      description: "'up' 또는 'down'으로 방향을 입력하세요. ",
    },
  },
} as ComponentMeta<typeof Icons.InputArrow>;

const Template: ComponentStory<typeof Icons.InputArrow> = (args) => (
  <Icons.InputArrow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  direction: 'up',
};
