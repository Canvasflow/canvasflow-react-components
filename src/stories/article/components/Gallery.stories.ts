import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../../../../lib/components/article/components/Gallery";

const meta = {
  title: "Article/Components/Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Canvasflow Gallery Component",
      },
    },
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
    index: {
      table: {
        disable: true,
      },
    },
    lang: {
      table: {
        disable: true,
      },
    },
    role: {
      options: ["default", "mosaic"],
      control: "select",
      table: {
        defaultValue: { summary: "default" },
        type: { summary: "default | mosaic" },
      },
    },
    autoplay: {
      options: ["on", "off"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "on" },
        type: { summary: "on | off" },
      },
    },
    captionenabled: {
      options: ["on", "off"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "on" },
        type: { summary: "on | off" },
      },
    },
    creditenabled: {
      options: ["on", "off"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "on" },
        type: { summary: "on | off" },
      },
    },
    direction: {
      options: ["horizontal", "vertical"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "horizontal" },
        type: { summary: "horizontal | vertical" },
      },
    },
    "control-speed": {
      options: ["slow", "medium", "fast", "vfast"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "slow | medium | fast | vfast" },
      },
    },
    animation: {
      options: ["fade", "slide", "cube", "coverflow", "flip"],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "fade" },
        type: { summary: "fade | slide | cube | coverflow | flip" },
      },
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "CF-123",
    index: 0,
    component: "gallery",
    role: "default",
    direction: "horizontal",
    animation: "fade",
    autoplay: "off",
    "control-speed": "medium",
    captionenabled: "off",
    caption: "caption test",
    creditenabled: "off",
    credit: "credit test",
    devices: {
      "tablet": "on",
      "phone": "on",
      "desktop": "on"
    },
    images: [
      {
        imageurl: "https://placehold.co/600x400",
        caption: "first image test",
      },
      {
        imageurl: "https://placehold.co/600x400",
        caption: "second image test",
      },
      {
        imageurl:
          "https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg",
        caption: "third image test",
      },
    ],
  },
};
