import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/ArrowSmall',
  component: Icons.ArrowSmall,
} as ComponentMeta<typeof Icons.ArrowSmall>;

const Template: ComponentStory<typeof Icons.ArrowSmall> = (args) => (
  <Icons.ArrowSmall />
);

export const Primary = Template.bind({});
Primary.args = {};
