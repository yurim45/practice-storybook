import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Home',
  component: Icons.Home,
} as ComponentMeta<typeof Icons.Home>;

const Template: ComponentStory<typeof Icons.Home> = (args) => <Icons.Home />;

export const Primary = Template.bind({});
Primary.args = {};
