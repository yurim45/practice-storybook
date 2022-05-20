import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/BackArrow',
  component: Icons.BackArrow,
} as ComponentMeta<typeof Icons.BackArrow>;

const Template: ComponentStory<typeof Icons.BackArrow> = () => (
  <Icons.BackArrow />
);

export const Primary = Template.bind({});
Primary.args = {};
