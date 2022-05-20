import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Alert',
  component: Icons.Alert,
} as ComponentMeta<typeof Icons.Alert>;

const Template: ComponentStory<typeof Icons.Alert> = () => <Icons.Alert />;

export const Primary = Template.bind({});
Primary.args = {};
