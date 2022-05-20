import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/AddCommon',
  component: Icons.AddCommon,
} as ComponentMeta<typeof Icons.AddCommon>;

const Template: ComponentStory<typeof Icons.AddCommon> = (args) => (
  <Icons.AddCommon />
);

export const Primary = Template.bind({});
Primary.args = {};
