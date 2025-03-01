import type { Meta, StoryObj } from "@storybook/react";
import Credit from "../../../../lib/components/article/components/Credit";

const meta = {
  title: "Article/Components/Credit",
  component: Credit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
    content: { control: "text" },
  },
} satisfies Meta<typeof Credit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    content: "Example caption",
    style: {},
  },
};
