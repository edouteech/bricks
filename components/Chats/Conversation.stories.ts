import type { Meta, StoryObj } from '@storybook/react';
import Conversation, { ConversationProps } from "./Conversation";

const meta: Meta = {
  title: "Components/Conversation",
  component: Conversation,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: "text",
    },
    imageSrc: {
      control: "text",
    },
    imageAlt: {
      control: "text",
    },
    message: {
      control: "text",
    },
    messageCount: {
      control: "number",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Conversation>;

export const Male: Story = {
    args: {
        name: "John Doe",
        imageSrc: "http://xsgames.co/randomusers/assets/avatars/male/0.jpg",
        imageAlt: "Profile picture",
        message: "This is a sample message",
        messageCount: 5,
    },
};

export const Female: Story = {
    args: {
        name: "John Doe",
        imageSrc: "http://xsgames.co/randomusers/assets/avatars/female/0.jpg",
        imageAlt: "Profile picture",
        message: "This is a sample message",
        messageCount: 5,
    },
};