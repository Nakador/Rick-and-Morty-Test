import { render, screen } from '@testing-library/react';

import { Select } from './select';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
];

describe('Feature: Select Component', () => {
  describe('Scenario: Rendering Options', () => {
    test('Given a list of options, When the Select component is rendered, Then all options should be visible', () => {
      // Note: In standard HTML selects, options are technically "visible" in the DOM but might not be visible to user until clicked.
      // RTL checks document presence.
      render(<Select options={options} />, { wrapper: TestWrapper });

      expect(screen.getByRole('combobox')).toBeInTheDocument();
      // Check for options if possible. Default HTML select options are accessible via display value or role 'option'.
      // Note: getByRole('option') might require iterating or queryAllByRole.
      expect(screen.getByRole('option', { name: 'One' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Two' })).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Select component is rendered, Then it should have the correct id and test-id attributes', () => {
      const customId = 'my-select';
      render(<Select id={customId} options={options} />, { wrapper: TestWrapper });

      const select = screen.getByTestId(customId);
      expect(select).toBeInTheDocument();
      expect(select).toHaveAttribute('id', customId);
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given available options, When a user selects an option, Then the select value should be updated accordingly', async () => {
      const user = userEvent.setup();
      const id = 'select-test';
      render(<Select id={id} options={options} />, { wrapper: TestWrapper });

      const select = screen.getByRole('combobox');
      await user.selectOptions(select, '2');

      expect(select).toHaveValue('2');
    });
  });
});
