import { Meta, StoryFn } from "@storybook/react";
import SideBar from "./SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
} as Meta<typeof SideBar>;

const Template: StoryFn<typeof SideBar> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  activeItem: "Home",
};
