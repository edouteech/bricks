import type { Meta, StoryObj } from '@storybook/react';

import InputIcons from './InputIcons';
import { FaEnvelope, FaLock } from "react-icons/fa";

const meta: Meta<typeof InputIcons> = {
    title: "Components/InputIcons",
    component: InputIcons,
    tags: ['autodocs'],
    argTypes: {
        inputType: {
            control: {
                type: "select",
                options: ["text", "email", "password", "date"],
            },
        },
        icon: {
            control: {
                type: "select",
                options: {
                    Envelope: FaEnvelope,
                    Lock: FaLock,
                },
            },
        },
        value: {
            control: "string",
        },
    },
  };
  
  export default meta;

type Story = StoryObj<typeof InputIcons>;

export const EmailInput: Story = {
    args: {
        icon: FaEnvelope,
        inputType: 'email',
        placeholder: 'Email address',
        value: 'mail@mail.com',
    },
};
  
export const PasswordInput: Story = {
    args: {
        icon: FaLock,
        inputType: 'password',
        placeholder: 'Password',
        value: 'password',
    },
};
  
export const DateInput: Story = {
    args: {
        icon: FaLock,
        inputType: 'date',
        placeholder: 'Email address',
        value: '',
    },
};
  