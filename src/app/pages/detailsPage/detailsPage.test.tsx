import { render, screen } from '@testing-library/react';

import { DetailsPage } from './detailsPage';
import { TestWrapper } from '../../services/testshelper/TestWrapper';
import { createMockQueryResult } from '../../services/mocks/mockhelpers';
import * as useCharacterHook from '../../services/api/apiHooks/useCharacter/useCharacter';

jest.mock('../../services/api/apiHooks/useCharacter/useCharacter', () => ({
  useCharacter: jest.fn(),
}));
import { ApiError } from '../../utils/error/errors';
import type { Character } from '../../services/api/api';

import { rickMock } from '../../services/mocks/charactermocks';

describe('Feature: DetailsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Scenario: Loading state', () => {
    test('Given a character ID, When the page is loading, Then it should show the backdrop visualizer', () => {
      (useCharacterHook.useCharacter as jest.Mock).mockReturnValue(createMockQueryResult<Character>({
        isLoading: true,
        data: undefined,
        error: null,
        status: 'pending',
        fetchStatus: 'fetching',
      }));

      render(<DetailsPage />, { wrapper: TestWrapper });

      expect(screen.getByRole('img', { name: /rick loading/i })).toBeInTheDocument();
    });
  });

  describe('Scenario: Success state', () => {
    test('Given a valid character ID, When the data is fetched, Then it should display the character details card', () => {
      (useCharacterHook.useCharacter as jest.Mock).mockReturnValue(createMockQueryResult<Character>({
        isLoading: false,
        data: rickMock,
        error: null,
        status: 'success',
      }));

      render(<DetailsPage />, { wrapper: TestWrapper });

      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('← Back to Listing')).toBeInTheDocument();
      

      // But verify 'Rick Sanchez' is likely a heading, so we could check that too
      // expect(screen.getByRole('heading', { level: 1, name: 'Rick Sanchez' })).toBeInTheDocument();
      // Keeping it simple and robust for now
      expect(screen.getByTestId('character-details-1')).toBeInTheDocument();
    });
  });

  describe('Scenario: Error state - 404', () => {
    test('Given an invalid character ID, When the fetch returns a 404, Then it should show character not found message', () => {
      (useCharacterHook.useCharacter as jest.Mock).mockReturnValue(createMockQueryResult<Character>({
        isLoading: false,
        data: undefined,
        error: new ApiError('Not Found', 404),
        isError: true,
        status: 'error',
      }));

      render(<DetailsPage />, { wrapper: TestWrapper });

      expect(screen.getByText('Character not found 404')).toBeInTheDocument();
    });
  });

  describe('Scenario: Error state - Generic', () => {
    test('Given a network error, When communication fails, Then it should show the error message', () => {
      (useCharacterHook.useCharacter as jest.Mock).mockReturnValue(createMockQueryResult<Character>({
        isLoading: false,
        data: undefined,
        error: new Error('Network error'),
        isError: true,
        status: 'error',
      }));

      render(<DetailsPage />, { wrapper: TestWrapper });

      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });
});
