import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./stack";

export default {
  component: Stack,
  title: "stack",
  args: {
    recursive: false,
    space: "var(--s0)",
    // splitAfter: 1,
  },
  argTypes: {
    recursive: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    // splitAfter: {
    //   control: { type: "number" },
    //   defaultValue: undefined,
    // },
    space: {
      control: { type: "text" },
      defaultValue: "var(--s1)",
    },
  },
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <div>A</div>
      <div>B</div>
      <div>
        <div>C</div>
        <div>D</div>
      </div>
    </Stack>
  ),
};
