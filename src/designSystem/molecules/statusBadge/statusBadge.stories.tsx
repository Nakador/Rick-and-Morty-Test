import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from './statusBadge';

const meta = {
  title: 'Molecules/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'text' },
    species: { control: 'text' },
    id: { control: 'text' },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alive: Story = {
  args: {
    status: 'Alive',
    species: 'Human',
    id: 'status-alive',
  },
};

export const Dead: Story = {
  args: {
    status: 'Dead',
    species: 'Alien',
    id: 'status-dead',
  },
};

export const Unknown: Story = {
  args: {
    status: 'unknown',
    species: 'Robot',
    id: 'status-unknown',
  },
};
