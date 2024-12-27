import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "../../../../lib/components/article/components/Anchor";

const meta = {
  title: "Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const World: Story = {
  args: {
    name: "Hello World 🌍!",
  },
};
