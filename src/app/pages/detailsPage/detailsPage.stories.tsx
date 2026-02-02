import type { Meta, StoryObj } from '@storybook/react-vite';
import { DetailsPageView } from './detailsPage';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { rickMock } from '../../services/mocks/charactermocks';

const meta = {
  title: 'Pages/DetailsPage',
  component: DetailsPageView,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof DetailsPageView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    isLoading: true,
    error: null,
    character: undefined,
  },
};

export const Success: Story = {
  args: {
    isLoading: false,
    error: null,
    character: rickMock,
  },
};

export const ErrorState: Story = {
  args: {
    isLoading: false,
    error: new Error('Failed to fetch data'),
    character: undefined,
  },
};
