import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/AlertBell',
  component: Icons.AlertBell,
  argTypes: {
    on: { type: 'boolean', description: '알림 여부를 입력하세요' },
  },
} as ComponentMeta<typeof Icons.AlertBell>;

const Template: ComponentStory<typeof Icons.AlertBell> = (args) => (
  <Icons.AlertBell {...args} />
);

export const Primary = Template.bind({});
Primary.args = { on: true };
