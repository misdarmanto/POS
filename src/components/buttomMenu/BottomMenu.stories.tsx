import { Meta, StoryFn } from "@storybook/react";
import BottomMenu from "../buttomMenu";
import { IoHome, IoTime, IoPerson } from "react-icons/io5";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/BottomMenu",
  component: BottomMenu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ paddingBottom: "60px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
} as Meta<typeof BottomMenu>;

const menuItems = [
  { name: "Home", path: "/", icon: <IoHome size={24} /> },
  { name: "History", path: "/history", icon: <IoTime size={24} /> },
  { name: "Profile", path: "/profile", icon: <IoPerson size={24} /> },
];

const Template: StoryFn<typeof BottomMenu> = (args) => <BottomMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: menuItems,
};
