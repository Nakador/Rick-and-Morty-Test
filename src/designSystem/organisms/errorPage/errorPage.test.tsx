import { render, screen } from '@testing-library/react';

import { ErrorPage } from './errorPage';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import userEvent from '@testing-library/user-event';

describe('Feature: ErrorPage Organism', () => {
  describe('Scenario: Rendering error info', () => {
    test('Given an error message, When the page is rendered, Then it should display the message', () => {
      const message = "Dimension conflict detected";
      render(<ErrorPage message={message} />, { wrapper: TestWrapper });

      expect(screen.getByText(message)).toBeInTheDocument();
      expect(screen.getByText('The Microverse is Dead!')).toBeInTheDocument();
    });
  });

  describe('Scenario: Interaction', () => {
    test('Given an onReset handler, When the reload button is clicked, Then onReset should be called', async () => {
      const user = userEvent.setup();
      const onReset = jest.fn();
      render(<ErrorPage onReset={onReset} />, { wrapper: TestWrapper });

      // Assuming the reload text is inside a button
      const reloadButton = screen.getByRole('button', { name: /try to jiggle the handle/i });
      await user.click(reloadButton);
      expect(onReset).toHaveBeenCalled();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When rendered, Then it should have the correct id attribute', () => {
      render(<ErrorPage id="custom-error" />, { wrapper: TestWrapper });

      const element = screen.getByTestId('error-page');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'custom-error');
    });
  });
});
