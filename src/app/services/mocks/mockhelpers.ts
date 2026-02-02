import type { UseQueryResult } from '@tanstack/react-query';

export const createMockQueryResult = <TData, TError = Error>(
  overrides: Partial<UseQueryResult<TData, TError>> = {}
): UseQueryResult<TData, TError> => {
  const defaults: Partial<UseQueryResult<TData, TError>> = {
    data: undefined,
    error: null,
    isError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isLoading: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    status: 'success',
    fetchStatus: 'idle',
    refetch: jest.fn(),
    dataUpdatedAt: Date.now(),
    errorUpdatedAt: 0,
    failureCount: 0,
    failureReason: null,
    errorUpdateCount: 0,
    isInitialLoading: false,
    isPaused: false,
  };

  return { ...defaults, ...overrides } as unknown as UseQueryResult<TData, TError>;
};
