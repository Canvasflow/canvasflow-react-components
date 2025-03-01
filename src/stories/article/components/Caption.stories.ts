import type { Meta, StoryObj } from "@storybook/react";
import Caption from "../../../../lib/components/article/components/Caption";

const meta = {
  title: "Article/Components/Caption",
  component: Caption,
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
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    content: "Example caption",
    style: {},
  },
};
