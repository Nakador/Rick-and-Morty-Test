import { renderHook, act } from '@testing-library/react';

import { useCharacterFilters } from './useCharacterFilters';
import { TestWrapper } from '../../services/testshelper/TestWrapper';

const scrollToMock = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: scrollToMock, writable: true });

describe('Feature: useCharacterFilters Hook', () => {
  beforeEach(() => {
    scrollToMock.mockClear();
    window.history.pushState({}, '', '/');
  });

  describe('Scenario: Initial State', () => {
    test('Given no URL params, When hook renders, Then it returns default empty filters', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: TestWrapper,
      });

      expect(result.current.filters).toEqual({
        name: '',
        status: '',
        gender: '',
      });
      expect(result.current.page).toBe(1);
      expect(result.current.sort).toBe('');
    });

    test('Given URL params, When hook renders, Then it initializes state from params', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: (props) => (
          <TestWrapper {...props} initialEntries={['/?name=Rick&status=alive&page=2&sort=name']} />
        ),
      });

      expect(result.current.filters).toEqual({
        name: 'Rick',
        status: 'alive',
        gender: '',
      });
      expect(result.current.page).toBe(2);
      expect(result.current.sort).toBe('name');
    });
  });

  describe('Scenario: Setting Filters', () => {
    test('Given initial state, When setFilter is called, Then it updates the specific filter and resets page to 1', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.setFilter('name', 'Morty');
      });

      expect(result.current.filters.name).toBe('Morty');
      expect(result.current.page).toBe(1);
    });

    test('Given existing filters, When a filter is cleared, Then it removes the param', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.setFilter('status', 'dead');
      });
      expect(result.current.filters.status).toBe('dead');

      act(() => {
        result.current.setFilter('status', '');
      });

      expect(result.current.filters.status).toBe('');
    });
  });

  describe('Scenario: Pagination', () => {
    test('Given current page, When setPage is called, Then page updates and window scrolls to top', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.setPage(3);
      });

      expect(result.current.page).toBe(3);
      expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  describe('Scenario: Sorting', () => {
    test('Given initial sort, When setSort is called, Then sort state updates', () => {
      const { result } = renderHook(() => useCharacterFilters(), {
        wrapper: TestWrapper,
      });

      act(() => {
        result.current.setSort('species');
      });

      expect(result.current.sort).toBe('species');

      act(() => {
        result.current.setSort('');
      });
      expect(result.current.sort).toBe('');
    });
  });
});
