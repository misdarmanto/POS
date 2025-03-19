import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Drawer from "./Drawer";

export default {
  title: "Components/Drawer",
  component: Drawer,
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["left", "right", "top", "bottom"],
    },
  },
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Drawer</button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        <p>Drawer Content</p>
      </Drawer>
    </div>
  );
};

export const Left = Template.bind({});
Left.args = { position: "left" };

export const Right = Template.bind({});
Right.args = { position: "right" };

export const Top = Template.bind({});
Top.args = { position: "top" };

export const Bottom = Template.bind({});
Bottom.args = { position: "bottom" };
