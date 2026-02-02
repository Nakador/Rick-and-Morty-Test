import { renderHook, waitFor } from '@testing-library/react';

import { useCharacter } from './useCharacter';
import { TestWrapper } from '../../../testshelper/TestWrapper';
import { getCharacter } from '../../api';
import { ApiError } from '../../../../utils/error/errors';
import { rickMock } from '../../../mocks/charactermocks';


jest.mock('../../api', () => ({
  getCharacter: jest.fn(),
}));

describe('Feature: useCharacter Hook', () => {
  describe('Scenario: Successful Fetch', () => {
    test('Given a valid character ID, When the hook runs, Then it returns the character data', async () => {
      (getCharacter as jest.Mock).mockResolvedValue({
        status: 200,
        data: rickMock,
      });

      const { result } = renderHook(() => useCharacter('1'), {
        wrapper: (props: { children: React.ReactNode }) => <TestWrapper {...props} includeQueryClient />,
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(rickMock);
      expect(getCharacter).toHaveBeenCalledWith(1);
    });
  });

  describe('Scenario: Error Handling', () => {
    test('Given an invalid character ID or API failure, When the fetch fails, Then it returns an error', async () => {
      const errorMessage = 'Character not found';

      (getCharacter as jest.Mock).mockResolvedValue({
        status: 404,
        statusMessage: errorMessage,
        data: null,
      });

      const { result } = renderHook(() => useCharacter('999'), {
        wrapper: (props: { children: React.ReactNode }) => <TestWrapper {...props} includeQueryClient />,
      });

      await waitFor(() => expect(result.current.isError).toBe(true));

      expect(result.current.error).toBeInstanceOf(ApiError);
      expect(result.current.error?.message).toBe(errorMessage);
    });
  });
});
