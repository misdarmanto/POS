import { Meta, StoryFn } from "@storybook/react";
import ProductCard from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as Meta;

const Template: StoryFn<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: "https://source.unsplash.com/260x160/?product",
  title: "Cool Sneakers",
  price: "$79.99",
  onAddToCart: () => alert("Added to cart!"),
};
