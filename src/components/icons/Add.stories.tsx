import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Add',
  component: Icons.Add,
  argTypes: {
    width: {
      type: 'number',
      description: '가로 사이즈를 숫자로 입력하세요',
    },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Icons.Add>;

const Template: ComponentStory<typeof Icons.Add> = (args) => (
  <Icons.Add {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 20,
};
