import type { Meta, StoryObj } from "@storybook/react";
import { TikTok } from "../../../../lib/components/article/components/TikTok";

const meta = {
  title: "TikTok",
  component: TikTok,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    params: {
      username: { control: "text" },
      videoID: { control: "text" },
    },
  },
} satisfies Meta<typeof TikTok>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "test",
    params: {
      username: "@vibra_musical",
      videoID: "7367054920157039905",
    },
  },
};
