import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["contained", "outlined", "text"] },
    color: {
      control: "radio",
      options: ["primary", "secondary", "success", "warning", "danger", "info"],
    },
    size: { control: "radio", options: ["small", "medium", "large"] },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryContained: Story = {
  args: {
    variant: "contained",
    color: "primary",
    size: "medium",
    children: "Primary",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    variant: "outlined",
    color: "secondary",
    size: "medium",
    children: "Secondary",
  },
};

export const SuccessText: Story = {
  args: {
    variant: "text",
    color: "success",
    size: "medium",
    children: "Success",
  },
};
