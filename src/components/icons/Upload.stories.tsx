import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Upload',
  component: Icons.Upload,
  argTypes: {
    color: {
      control: 'color',
      description: '',
    },
  },
} as ComponentMeta<typeof Icons.Upload>;

const Template: ComponentStory<typeof Icons.Upload> = (args) => (
  <Icons.Upload {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
