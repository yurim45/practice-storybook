import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/TopMenu',
  component: Icons.TopMenu,
  argTypes: {
    on: {
      type: 'boolean',
      description: '',
    },
  },
} as ComponentMeta<typeof Icons.TopMenu>;

const Template: ComponentStory<typeof Icons.TopMenu> = (args) => (
  <Icons.TopMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  on: true,
};
