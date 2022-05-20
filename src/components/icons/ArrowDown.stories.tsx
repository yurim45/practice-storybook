import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/ArrowDown',
  component: Icons.ArrowDown,
} as ComponentMeta<typeof Icons.ArrowDown>;

const Template: ComponentStory<typeof Icons.ArrowDown> = () => (
  <Icons.ArrowDown />
);

export const Primary = Template.bind({});
Primary.args = {};
