import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { FaCheck, FaPlus } from "react-icons/fa";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Click Me",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "large",
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded Button",
    rounded: true,
  },
};

export const IconButton: Story = {
  args: {
    icon: <FaCheck />,
    variant: "icon",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: "Add",
    icon: <FaPlus />,
  },
};
