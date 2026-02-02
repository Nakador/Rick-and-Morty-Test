import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
  },
};
