import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Select from "../select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: StoryFn = (args) => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Select
      options={[]}
      {...args}
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Choose an option",
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};
