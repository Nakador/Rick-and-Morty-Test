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
    render(
      <Autocomplete 
        value="Ap" 
        onChange={handleChange} 
        options={mockOptions} 
      />,
      { wrapper: TestWrapper }
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Ap' } });

    expect(screen.getByTestId('suggestions-list')).toBeInTheDocument();
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(
      <Autocomplete 
        value="" 
        onChange={handleChange} 
        options={mockOptions} 
      />,
      { wrapper: TestWrapper }
    );

    const input = screen.getByRole('textbox');
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

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    const option = screen.getByText('Apple');
    fireEvent.click(option);

    expect(handleSelect).toHaveBeenCalledWith(mockOptions[0]);
    expect(handleChange).toHaveBeenCalledWith('Apple');
    expect(screen.queryByTestId('suggestions-list')).not.toBeInTheDocument();
  });

  it('does not show suggestions if no match found', () => {
    render(
      <Autocomplete 
        value="Zzz" 
        onChange={() => {}} 
        options={mockOptions} 
      />,
      { wrapper: TestWrapper }
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);

    expect(screen.queryByTestId('suggestions-list')).not.toBeInTheDocument();
  });
});
