import type { Meta, StoryObj } from '@storybook/react-vite';
import { Backdrop } from './backdrop';

const meta = {
  title: 'Atoms/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
} satisfies Meta<typeof Backdrop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'backdrop-id',
  },
};
