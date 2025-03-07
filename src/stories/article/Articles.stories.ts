import type { Meta, StoryObj } from "@storybook/react";
import Articles from "../../../lib/components/article/Articles";

const meta = {
  title: "Articles",
  component: Articles,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    articles: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Articles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ArticleStory: Story = {
  name: "Articles Story",
  args: {
    articles: [],
    styles: [],
    index: 0,
    lang: "en",
  },
};
