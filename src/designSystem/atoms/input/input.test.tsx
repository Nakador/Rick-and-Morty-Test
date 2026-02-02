import { render, screen } from '@testing-library/react';

import { Input } from './input';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: Input Component', () => {
  describe('Scenario: Default Rendering', () => {
    test('Given a placeholder, When the Input is rendered, Then it should be in the document', () => {
      const placeholder = 'Enter text';

      const { container } = render(<Input placeholder={placeholder} />, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Input is rendered, Then it should have the correct id and test-id attributes', () => {
      const customId = 'my-input';

      render(<Input id={customId} />, { wrapper: TestWrapper });

      const input = screen.getByTestId(customId);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('id', customId);
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given an empty input, When the user types text, Then the input value should reflect the typed text', async () => {
      const user = userEvent.setup();
      const id = 'input-test';
      const text = 'Hello World';
      render(<Input id={id} />, { wrapper: TestWrapper });

      const input = screen.getByRole('textbox');
      await user.type(input, text);

      expect(input).toHaveValue(text);
    });
  });
});
