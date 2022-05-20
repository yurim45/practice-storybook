import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/CheckBig',
  component: Icons.CheckBig,
  argTypes: {
    on: {
      type: 'boolean',
      description: '',
    },
  },
} as ComponentMeta<typeof Icons.CheckBig>;

const Template: ComponentStory<typeof Icons.CheckBig> = (args) => (
  <Icons.CheckBig {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  on: true,
};
