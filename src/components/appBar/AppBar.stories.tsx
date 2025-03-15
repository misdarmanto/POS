import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppBar from "./AppBar";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "dark", "transparent", "bordered"],
    },
  },
} as Meta<typeof AppBar>;

const Template: StoryFn<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "https://via.placeholder.com/100x40?text=Logo",
  links: [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ],
  variant: "default",
};

export const DarkMode = Template.bind({});
DarkMode.args = { ...Default.args, variant: "dark" };

export const Transparent = Template.bind({});
Transparent.args = { ...Default.args, variant: "transparent" };

export const Bordered = Template.bind({});
Bordered.args = { ...Default.args, variant: "bordered" };
