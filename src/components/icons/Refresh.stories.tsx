import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Refresh',
  component: Icons.Refresh,
} as ComponentMeta<typeof Icons.Refresh>;

const Template: ComponentStory<typeof Icons.Refresh> = (args) => (
  <Icons.Refresh />
);

export const Primary = Template.bind({});
Primary.args = {};
