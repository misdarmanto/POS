import { StoryFn, Meta } from "@storybook/react";
import Layout from "../layout/Layout";

export default {
  title: "components/layout",
  component: Layout,
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = (args) => (
  <Layout {...args}>
    <div style={{ padding: "20px", background: "#f5f5f5", height: "100vh" }}>
      <h2>Content Area</h2>
      <p>This is where your main content goes.</p>
    </div>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
