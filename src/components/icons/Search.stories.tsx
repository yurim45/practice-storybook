import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from '../../src';

export default {
  title: 'icons/Search',
  component: Icons.Search,
  argTypes: {
    width: {
      type: 'number',
    },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Icons.Search>;

const Template: ComponentStory<typeof Icons.Search> = (args) => (
  <Icons.Search {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  width: 20,
};
