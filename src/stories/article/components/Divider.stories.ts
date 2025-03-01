import type { Meta, StoryObj } from "@storybook/react";
import Divider from "../../../../lib/components/article/components/Divider";

const meta = {
    title: "Article/Components/Divider",
    component: Divider,
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
        style: { control: "text" },
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentStory: Story = {
    args: {
        id: "CF-123",
        component: "divider",
        style: 'none',
        devices: {
            "tablet": "on",
            "phone": "on",
            "desktop": "on"
        },
    },
};
