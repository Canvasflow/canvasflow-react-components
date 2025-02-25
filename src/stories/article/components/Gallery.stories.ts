import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../../../../lib/components/article/components/Gallery";

const meta = {
  title: "Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {

    id: {
      table: {
        disable: true
      }
    },
    component: {
      table: {
        disable: true
      }
    },
    role: {
      options: ["default", "mosaic"],
      control: { type: "select", },
    },
    autoplay: {
      options: ["on", "off"],
      control: { type: "select", }
    },
    captionenabled: {
      options: ["on", "off"],
      control: { type: "select", }
    },
    creditenabled: {
      options: ["on", "off"],
      control: { type: "select", }
    },
    "control-speed": {
      options: ["slow", "medium", "fast", "vfast"],
      control: { type: "select", }
    },
    animation: {
      options: ["fade", "slide", "cube", "coverflow", "flip"],
      control: { type: "select", }
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "id123",
    index: 0,
    component: "gallery",
    role: "default",
    animation: "cube",
    autoplay: "on",
    caption: "caption test",
    captionenabled: "on",
    credit: "credit test",
    creditenabled: "on",
    direction: "horizontal",
    images: [
      {
        imageurl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/BLANK.jpg",
        caption: "first image test",
      },
      {
        imageurl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/BLANK.jpg",
        caption: "second image test",
      },
      {
        imageurl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/BLANK.jpg",
        caption: "third image test",
      },
      {
        imageurl:
          "https://upload.wikimedia.org/wikipedia/commons/a/ab/BLANK.jpg",
        caption: "fourth image test",
      },
    ],
    "control-speed": "fast",
    devices: {
      tablet: "on",
      phone: "on",
      desktop: "on",
    },
  },
};
