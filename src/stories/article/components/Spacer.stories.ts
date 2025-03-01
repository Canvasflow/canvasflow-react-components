import type { Meta, StoryObj } from "@storybook/react";
import Spacer from "../../../../lib/components/article/components/Spacer";

const meta = {
  title: "Article/Components/Spacer",
  component: Spacer,
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
    margin: {
      options: [
        "margin-1",
        "margin-20",
        "margin-50",
        "margin-75",
        "margin-100",
      ],
      control: { type: "select" },
      table: {
        defaultValue: { summary: "margin-50" },
        type: {
          summary: "margin-1 | margin-20 | margin-50 | margin-75 | margin-100",
        },
      },
    },
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
  args: {
    id: "CF-123",
    component: "spacer",
    margin: "margin-1",
    devices: {
      tablet: "on",
      phone: "on",
      desktop: "on",
    },
  },
};
