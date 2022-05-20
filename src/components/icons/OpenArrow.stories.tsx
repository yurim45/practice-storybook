import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/OpenArrow',
  component: Icons.OpenArrow,
  argTypes: {
    open: {
      type: 'boolean',
      description: '',
    },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Icons.OpenArrow>;

const Template: ComponentStory<typeof Icons.OpenArrow> = (args) => (
  <Icons.OpenArrow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: true,
};
