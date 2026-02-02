import { render, screen, act } from '@testing-library/react';

import { ListingPage } from './listingPage';
import * as useCharactersHook from '../../services/api/apiHooks/useCharacters/useCharacters';
import * as useCharacterFiltersHook from '../../hooks/useCharacterFilters/useCharacterFilters';
import { TestWrapper } from '../../services/testshelper/TestWrapper';
import { mockCharactersResponse } from '../../services/mocks/apimocks';
import { ApiError } from '../../utils/error/errors';
import userEvent from '@testing-library/user-event';


jest.mock('../../services/api/apiHooks/useCharacters');
jest.mock('../../hooks/useCharacterFilters');

describe('Feature: ListingPage', () => {
  const mockFilters = {
    filters: { name: '', status: '', gender: '' },
    page: 1,
    sort: '',
    setFilter: jest.fn(),
    setSort: jest.fn(),
    setPage: jest.fn(),
    clearFilters: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Scenario: Loading state - Given a list of characters, When the data is being fetched, Then it should show the backdrop visualizer', () => {
    jest.spyOn(useCharacterFiltersHook, 'useCharacterFilters').mockReturnValue(mockFilters);
    (useCharactersHook.useCharacters as jest.Mock).mockReturnValue({
      isLoading: true,
      isFetching: true,
      isError: false,
      data: undefined,
      error: null,
    });

    render(<ListingPage />, { wrapper: TestWrapper });
    // Assuming Backdrop uses the accessible accessible role/name we saw earlier
    expect(screen.getByRole('img', { name: /rick loading/i })).toBeInTheDocument();
  });

  test('Scenario: Success state - Given a list of characters, When the data is successfully fetched, Then it should display the character cards', () => {
    jest.spyOn(useCharacterFiltersHook, 'useCharacterFilters').mockReturnValue(mockFilters);
    (useCharactersHook.useCharacters as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockCharactersResponse,
      error: null,
    });

    render(<ListingPage />, { wrapper: TestWrapper });
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
  });

  test('Scenario: Error state - Given an API error, When the page loads, Then it should display the error page', () => {
     jest.spyOn(useCharacterFiltersHook, 'useCharacterFilters').mockReturnValue(mockFilters);
    const mockError = new ApiError('Failed to fetch characters', 500);
    (useCharactersHook.useCharacters as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      data: undefined,
      error: mockError,
    });

    render(<ListingPage />, { wrapper: TestWrapper });
    expect(screen.getByText('Failed to fetch characters')).toBeInTheDocument();
  });

  test('Scenario: Pagination - Given multiple pages, When "Next" is clicked, Then setPage should be called', async () => {
    const user = userEvent.setup();
    jest.spyOn(useCharacterFiltersHook, 'useCharacterFilters').mockReturnValue(mockFilters);
    (useCharactersHook.useCharacters as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        ...mockCharactersResponse,
        info: { ...mockCharactersResponse.info, next: 'url', pages: 2 }
      },
      error: null,
    });

    render(<ListingPage />, { wrapper: TestWrapper });
    
    const nextButton = screen.getByRole('button', { name: /next/i });
    await user.click(nextButton);

    expect(mockFilters.setPage).toHaveBeenCalledWith(2);
  });

  test('Scenario: Filtering - Given the ListingPage, When user types in search input, Then setFilter should be called', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    jest.spyOn(useCharacterFiltersHook, 'useCharacterFilters').mockReturnValue(mockFilters);
    (useCharactersHook.useCharacters as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: mockCharactersResponse,
      error: null,
    });

    render(<ListingPage />, { wrapper: TestWrapper });

    const input = screen.getByRole('textbox', { name: /search by name/i });
    await user.type(input, 'Rick');
    

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockFilters.setFilter).toHaveBeenCalledWith('name', 'Rick');
    
    jest.useRealTimers();
  });
});
