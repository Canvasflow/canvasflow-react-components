import type { Meta, StoryObj } from "@storybook/react";
import Advert from "../../../../lib/components/article/components/Advert";

const meta = {
  title: "Article/Components/Advert",
  component: Advert,
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
    imageurl: { control: "text" },
  },
} satisfies Meta<typeof Advert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageStory: Story = {
  args: {
    id: "CF-123123123",
    component: "advert",
    imageurl:
      "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
  },
};
