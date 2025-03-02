import type { Meta, StoryObj } from "@storybook/react";
import Text from "../../../../lib/components/article/components/Text";

const meta = {
  title: "Article/Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    lang: {
      table: {
        disable: true,
      },
    },
    isSelected: {
      table: {
        disable: true,
      },
    },
    originArticle: {
      table: {
        disable: true,
      },
    },
    onSelectArticle: {
      table: {
        disable: true,
      },
    },
    isDebug: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "cf-123123123",
    component: "text1",
    text: '<a href="/article/123123">Random</a>',
    devices: {
      tablet: "on",
      phone: "on",
      desktop: "on",
    },
    isSelected: true,
    isDebug: true,
    onSelectArticle: (targetArticleId, elementId) => {
      console.log(`TARGET ARTICLE: `, targetArticleId);
      console.log(`ELEMENT: `, elementId);
    },
  },
};
