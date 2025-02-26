import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "../../../../lib/components/article/components/Image";

const meta = {
  title: "Article/Components/Image",
  component: Image,
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
    lang: {
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
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageStory: Story = {
  args: {
    id: "CF-123123123",
    component: "image",
    imageclip: "none",
    imageurl:
      "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
    devices: {
      tablet: "on",
      phone: "on",
      desktop: "on",
    },
  },
};
