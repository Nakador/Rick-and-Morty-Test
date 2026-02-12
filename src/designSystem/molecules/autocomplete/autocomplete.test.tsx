import { render, screen, fireEvent } from '@testing-library/react';

import { Autocomplete } from './autocomplete';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

const mockOptions = [
  { value: '1', label: 'Apple' },
  { value: '2', label: 'Banana' },
  { value: '3', label: 'Cherry' },
];

describe('Autocomplete', () => {
  it('renders input field correctly', () => {
    render(
      <Autocomplete
        value=""
        onChange={() => {}}
        options={mockOptions}
        placeholder="Test placeholder"
      />,
      { wrapper: TestWrapper }
    );

    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('displays suggestions when typing matches options', () => {
    const handleChange = jest.fn();
    render(<Autocomplete value="Ap" onChange={handleChange} options={mockOptions} />, {
      wrapper: TestWrapper,
    });

    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Ap' } });

    expect(screen.getByTestId('suggestions-list')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<Autocomplete value="" onChange={handleChange} options={mockOptions} />, {
      wrapper: TestWrapper,
    });

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'a' } });

    expect(handleChange).toHaveBeenCalledWith('a');
  });

  it('calls onSelect and closes suggestions when an option is clicked', () => {
    const handleSelect = jest.fn();
    const handleChange = jest.fn();
    render(
      <Autocomplete
        value="Ap"
        onChange={handleChange}
        onSelect={handleSelect}
        options={mockOptions}
      />,
      { wrapper: TestWrapper }
    );

    const input = screen.getByRole('combobox');
    fireEvent.focus(input);

    const option = screen.getByText('Apple');
    fireEvent.click(option);

    expect(handleSelect).toHaveBeenCalledWith(mockOptions[0]);
    expect(handleChange).toHaveBeenCalledWith('Apple');
    expect(screen.queryByTestId('suggestions-list')).not.toBeInTheDocument();
  });

  it('does not show suggestions if no match found', () => {
    render(<Autocomplete value="Zzz" onChange={() => {}} options={mockOptions} />, {
      wrapper: TestWrapper,
    });

    const input = screen.getByRole('combobox');
    fireEvent.focus(input);

    expect(screen.queryByTestId('suggestions-list')).not.toBeInTheDocument();
  });

  describe('Keyboard Navigation & ARIA', () => {
    it('has correct ARIA attributes when closed', () => {
      render(<Autocomplete value="" onChange={() => {}} options={mockOptions} id="test-acc" />, {
        wrapper: TestWrapper,
      });

      const input = screen.getByRole('combobox');
      expect(input).toHaveAttribute('aria-expanded', 'false');
      expect(input).toHaveAttribute('aria-haspopup', 'listbox');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');
      expect(input).toHaveAttribute('aria-controls', 'test-acc-listbox');
    });

    it('navigates suggestions with arrow keys', () => {
      const handleChange = jest.fn();
      render(<Autocomplete value="A" onChange={handleChange} options={mockOptions} id="test-acc" />, {
        wrapper: TestWrapper,
      });

      const input = screen.getByRole('combobox');
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'A' } });

      expect(input).toHaveAttribute('aria-expanded', 'true');

      // ArrowDown to first item
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      const options = screen.getAllByRole('option');
      expect(options[0]).toHaveAttribute('aria-selected', 'true');
      expect(input).toHaveAttribute('aria-activedescendant', 'test-acc-option-0');

      // ArrowDown to next (since there's only one 'A' in mockOptions, it might just stay or loop)
      // Actually mockOptions has Apple, Banana, Cherry. 'A' matches Apple and Banana.
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(options[1]).toHaveAttribute('aria-selected', 'true');
      expect(input).toHaveAttribute('aria-activedescendant', 'test-acc-option-1');

      // Enter to select
      fireEvent.keyDown(input, { key: 'Enter' });
      expect(handleChange).toHaveBeenCalledWith('Banana');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('closes on Escape key', () => {
      render(<Autocomplete value="A" onChange={() => {}} options={mockOptions} />, {
        wrapper: TestWrapper,
      });

      const input = screen.getByRole('combobox');
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: 'A' } });

      expect(screen.getByRole('listbox')).toBeInTheDocument();

      fireEvent.keyDown(input, { key: 'Escape' });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });
});
