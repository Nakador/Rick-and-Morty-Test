import { render, screen } from '@testing-library/react';

import { Button } from './button';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: Button Component', () => {
  describe('Scenario: Default Rendering', () => {
    test('Given children text, When the Button is rendered, Then it should be in the document', () => {
      const text = 'Click Me';

      const { container } = render(<Button>{text}</Button>, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
    });

    test('Given no custom id, When the Button is rendered, Then it should have a default test-id', () => {
      render(<Button>Click Me</Button>, { wrapper: TestWrapper });

      const button = screen.getByTestId('button-id');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Button is rendered, Then it should have the correct id and test-id attributes', () => {
      const customId = 'my-button';

      render(<Button id={customId}>Click Me</Button>, { wrapper: TestWrapper });

      const button = screen.getByTestId(customId);
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('id', customId);
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given an onClick handler, When the Button is clicked, Then the handler should be called', async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>, { wrapper: TestWrapper });

      const button = screen.getByRole('button', { name: /click me/i });
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
