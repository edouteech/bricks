import type { Meta, StoryObj } from '@storybook/react';

import SocialIcons from './SocialIcons';

const meta: Meta<typeof SocialIcons> = {
    title: "Components/SocialIcons",
    component: SocialIcons,
    tags: ['autodocs'],
    argTypes: {
      name: {
        control: {
          type: "select",
          options: ["google", "facebook", "apple"],
        },
      },
      size: {
        control: "number",
        defaultValue: "32",
      },
      color: {
        control: "color",
      },
    },
  };
  
  export default meta;

type Story = StoryObj<typeof SocialIcons>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Google: Story = {
  args: {
    name: "google",
    size: 24,
    color: "#DB4437",
  },
};


export const Facebook: Story = {
    args: {
      name: "facebook",
      size: 24,
      color: "#1877f2",
    },
};


export const Apple: Story = {
    args: {
      name: "apple",
      size: 24,
      color: "#000000",
    },
};