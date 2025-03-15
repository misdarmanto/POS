import { Meta, StoryFn } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta;

const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  children: "Heading 1",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
  children: "This is a caption text.",
};
