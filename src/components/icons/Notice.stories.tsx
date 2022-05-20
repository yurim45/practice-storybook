import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Notice',
  component: Icons.Notice,
} as ComponentMeta<typeof Icons.Notice>;

const Template: ComponentStory<typeof Icons.Notice> = (args) => (
  <Icons.Notice />
);

export const Primary = Template.bind({});
Primary.args = {};
