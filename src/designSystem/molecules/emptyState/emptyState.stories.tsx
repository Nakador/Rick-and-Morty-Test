import type { Meta, StoryObj } from '@storybook/react-vite';
import { EmptyState } from './emptyState';

const meta = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    actionLabel: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: 'There is nothing here',
  },
};

export const WithAction: Story = {
  args: {
    message: 'There is nothing here. Maybe try cleaning the filters?',
    actionLabel: 'Clean filters',
    onAction: () => alert('Action clicked!'),
  },
};

export const CustomImage: Story = {
  args: {
    message: 'No results found',
    imageSrc: 'https://via.placeholder.com/150',
  },
};
