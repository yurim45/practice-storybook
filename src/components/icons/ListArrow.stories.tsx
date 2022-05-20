import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/ListArrow',
  component: Icons.ListArrow,
} as ComponentMeta<typeof Icons.ListArrow>;

const Template: ComponentStory<typeof Icons.ListArrow> = () => (
  <Icons.ListArrow />
);

export const Primary = Template.bind({});
Primary.args = {};
