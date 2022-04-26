import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "컴포넌트/버튼",
  component: Button,
  argTypes: {
    // backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "버튼",
};
