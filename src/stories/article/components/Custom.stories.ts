import type { Meta, StoryObj } from "@storybook/react";
import { Custom } from "../../../../lib/components/article/components/Custom";

const meta = {
  title: "Custom",
  component: Custom,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
  },
} satisfies Meta<typeof Custom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "cf-123123123",
    component: "custom",
    content: "<h1>Random</h1>",
    devices: {
      tablet: "on",
      phone: "on",
      desktop: "on",
    },
  },
};
