import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterBar } from './filterBar';

const meta = {
  title: 'Organisms/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    onFilterChange: () => {},
    onSortChange: () => {},
    filter: { name: '', status: '', gender: '' },
    sort: '',
  },
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFilters: Story = {
  args: {
    filter: { name: 'Rick', status: 'Alive', gender: 'Male' },
    sort: 'asc',
  },
};
