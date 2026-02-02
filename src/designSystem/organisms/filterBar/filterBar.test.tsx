import { render, screen, act } from '@testing-library/react';

import { FilterBar } from './filterBar';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: FilterBar Organism', () => {
  describe('Scenario: Search by name', () => {
    test('Given a FilterBar, When user types in search input, Then onFilterChange should be called with name', async () => {
      jest.useFakeTimers();
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      const onFilterChange = jest.fn();
      
      render(
        <FilterBar 
          filter={{ name: '', status: '', gender: '' }} 
          onFilterChange={onFilterChange}
          sort="" 
          onSortChange={jest.fn()} 
        />,
        { wrapper: TestWrapper }
      );

      const input = screen.getByRole('textbox', { name: /search by name/i });
      await user.type(input, 'Rick');


      act(() => {
        jest.advanceTimersByTime(500);
      });
      
      expect(onFilterChange).toHaveBeenCalledWith('name', 'Rick');
      jest.useRealTimers();
    });
  });

  describe('Scenario: Filter by status', () => {
    test('Given a FilterBar, When user selects a status, Then onFilterChange should be called with status', async () => {
      const user = userEvent.setup();
      const onFilterChange = jest.fn();
      render(
        <FilterBar 
          filter={{ name: '', status: '', gender: '' }} 
          onFilterChange={onFilterChange}
          sort="" 
          onSortChange={jest.fn()} 
        />,
        { wrapper: TestWrapper }
      );


      const filterButton = screen.getByRole('button', { name: /filters/i });
      await user.click(filterButton);

      const select = screen.getByRole('combobox', { name: /filter by status/i });
      await user.selectOptions(select, 'Alive');

      expect(onFilterChange).toHaveBeenCalledWith('status', 'Alive');
    });
  });

  describe('Scenario: Filter by gender', () => {
    test('Given a FilterBar, When user selects a gender, Then onFilterChange should be called with gender', async () => {
      const user = userEvent.setup();
      const onFilterChange = jest.fn();
      render(
        <FilterBar 
          filter={{ name: '', status: '', gender: '' }} 
          onFilterChange={onFilterChange}
          sort="" 
          onSortChange={jest.fn()} 
        />,
        { wrapper: TestWrapper }
      );

      const filterButton = screen.getByRole('button', { name: /filters/i });
      await user.click(filterButton);
      
      const select = screen.getByRole('combobox', { name: /filter by gender/i });
      await user.selectOptions(select, 'Female');

      expect(onFilterChange).toHaveBeenCalledWith('gender', 'Female');
    });
  });

  describe('Scenario: Sorting', () => {
    test('Given a FilterBar, When user selects a sort option, Then onSortChange should be called', async () => {
      const user = userEvent.setup();
      const onSortChange = jest.fn();
      render(
        <FilterBar 
          filter={{ name: '', status: '', gender: '' }} 
          onFilterChange={jest.fn()}
          sort="" 
          onSortChange={onSortChange} 
        />,
        { wrapper: TestWrapper }
      );

      const filterButton = screen.getByRole('button', { name: /filters/i });
      await user.click(filterButton);

      const select = screen.getByRole('combobox', { name: /sort characters/i });
      await user.selectOptions(select, 'asc');

      expect(onSortChange).toHaveBeenCalledWith('asc');
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When rendered, Then it should have the correct id attribute', () => {
      render(
        <FilterBar 
          filter={{ name: '', status: '', gender: '' }} 
          onFilterChange={jest.fn()}
          sort="" 
          onSortChange={jest.fn()} 
          id="my-filter-bar"
        />,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId('my-filter-bar');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'my-filter-bar');
    });
  });
});
