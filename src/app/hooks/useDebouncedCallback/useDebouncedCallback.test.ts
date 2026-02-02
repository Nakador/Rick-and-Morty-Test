import { renderHook, act } from '@testing-library/react';

import { useDebouncedCallback } from './useDebouncedCallback';

describe('Feature: useDebouncedCallback Hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Scenario: Debouncing Execution', () => {
    test('Given a callback and delay, When triggered multiple times within delay, Then it only executes once', () => {
      const callback = jest.fn();
      const delay = 500;
      
      const { result } = renderHook(() => useDebouncedCallback(callback, delay));


      act(() => {
        result.current('first');
        result.current('second');
        result.current('third');
      });

      expect(callback).not.toHaveBeenCalled();


      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith('third');
    });

    test('Given a callback and delay, When triggered after prejestous delay finishes, Then it executes again', () => {
      const callback = jest.fn();
      const delay = 500;
      
      const { result } = renderHook(() => useDebouncedCallback(callback, delay));


      act(() => {
        result.current('A');
      });
      
      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(callback).toHaveBeenCalledWith('A');


      act(() => {
        result.current('B');
      });
      
      act(() => {
        jest.advanceTimersByTime(delay);
      });

      expect(callback).toHaveBeenCalledTimes(2);
      expect(callback).toHaveBeenCalledWith('B');
    });
  });
});
