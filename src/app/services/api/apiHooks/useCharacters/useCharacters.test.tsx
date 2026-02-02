
import { renderHook, waitFor } from '@testing-library/react';

import { useCharacters } from './useCharacters';
import { TestWrapper } from '../../../testshelper/TestWrapper';
import { getCharacters } from '../../api';
import { mockCharactersResponse } from '../../../mocks/apimocks';


jest.mock('../../api', () => ({
  getCharacters: jest.fn(),
}));

describe('Feature: useCharacters Hook', () => {
  describe('Scenario: Fetching with Filters', () => {
    test('Given filter params, When the hook runs, Then it calls the API with those params and returns the list', async () => {
      const params = { name: 'Rick', page: 1 };

      (getCharacters as jest.Mock).mockResolvedValue({
        status: 200,
        data: mockCharactersResponse,
      });

      const { result } = renderHook(() => useCharacters(params), {
        wrapper: (props) => <TestWrapper {...props} includeQueryClient />,
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(mockCharactersResponse);
      expect(getCharacters).toHaveBeenCalledWith(params);
    });
  });
});
