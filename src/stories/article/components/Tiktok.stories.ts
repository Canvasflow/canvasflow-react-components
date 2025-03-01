import type { Meta, StoryObj } from "@storybook/react";
import { TikTok } from "../../../../lib/components/article/components/TikTok";

const meta = {
  title: "Article/Components/TikTok",
  component: TikTok,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    component: {
      table: {
        disable: true,
      },
    },
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
    id: "cf-123123",
    component: "tiktok",
    params: {
      username: "@vibra_musical",
      videoID: "7367054920157039905",
    },
  },
};
