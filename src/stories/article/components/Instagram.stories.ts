import type { Meta, StoryObj } from "@storybook/react";
import Instagram from "../../../../lib/components/article/components/Instagram";

const meta = {
  title: "Article/Components/Instagram",
  component: Instagram,
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
      videoID: {
        options: ["reel", "tv"],
        control: "select",
        table: {
          defaultValue: { summary: "default" },
          type: { summary: "reel | tv" },
        },
      },
    },
  },
} satisfies Meta<typeof Instagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InstagramStory: Story = {
  name: "Instagram Reel",
  args: {
    id: "CF-123123123",
    component: "instagram",
    params: {
      videoID: "DF0noGoiBEA",
      type: "reel",
    },
  },
};
