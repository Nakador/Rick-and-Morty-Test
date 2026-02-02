import type { Meta, StoryObj } from '@storybook/react-vite';
import type { CharacterFilter } from '../../services/api/api';
import { ListingPageView } from './listingPageView';
import { MemoryRouter } from 'react-router-dom';

import { rickMock, mortyMock } from '../../services/mocks/charactermocks';
import { mockCharactersResponse } from '../../services/mocks/apimocks';

const meta = {
  title: 'Pages/ListingPage',
  component: ListingPageView,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    filters: {} as CharacterFilter,
    page: 1,
    sort: '',
    onFilterChange: () => {},
    onSortChange: () => {},
    onPageChange: () => {},
    onClearFilters: () => {},
    sortedCharacters: [],
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof ListingPageView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    isLoading: true,
    isFetching: true,
    error: null,
    data: undefined,
  },
};

export const Success: Story = {
  args: {
    isLoading: false,
    isFetching: false,
    error: null,
    data: { ...mockCharactersResponse, results: [rickMock, mortyMock] },
    sortedCharacters: [rickMock, mortyMock],
  },
};
