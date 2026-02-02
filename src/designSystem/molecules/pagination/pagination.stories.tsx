import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './pagination';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    hasNext: { control: 'boolean' },
    hasPrev: { control: 'boolean' },
    id: { control: 'text' },
  },
  args: {
    onNext: () => {},
    onPrev: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// ... stories ...
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    hasNext: true,
    hasPrev: false,
    id: 'pagination-default',
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    hasNext: true,
    hasPrev: true,
    id: 'pagination-middle',
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    hasNext: false,
    hasPrev: true,
    id: 'pagination-last',
  },
};
