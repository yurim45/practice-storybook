import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Close',
  component: Icons.Close,
} as ComponentMeta<typeof Icons.Close>;

const Template: ComponentStory<typeof Icons.Close> = (args) => <Icons.Close />;

export const Primary = Template.bind({});
Primary.args = {};
