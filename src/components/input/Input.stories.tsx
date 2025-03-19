import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "../input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState("");

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Name",
  placeholder: "Enter your name",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: "Email",
  placeholder: "Enter your email",
  fullWidth: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Password",
  placeholder: "Enter your password",
  error: true,
  helperText: "Password is required",
};
