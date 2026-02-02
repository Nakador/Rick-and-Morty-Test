import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EmptyState } from './emptyState';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: EmptyState Component', () => {
  describe('Scenario: Default Rendering', () => {
    it('Given a message, When the component is rendered, Then the message and default image should be visible', () => {
      const message = 'Nothing to see here';
      render(<EmptyState message={message} />, { wrapper: TestWrapper });

      expect(screen.getByText(message)).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        expect.stringContaining('rick-morty-empty-state.png')
      );
    });
  });

  describe('Scenario: Custom Image Rendering', () => {
    it('Given a message and custom image source, When the component is rendered, Then the custom image should be displayed', () => {
      const message = 'Empty';
      const customSrc = 'custom-image.png';
      render(<EmptyState message={message} imageSrc={customSrc} />, { wrapper: TestWrapper });

      expect(screen.getByRole('img')).toHaveAttribute('src', customSrc);
    });
  });

  describe('Scenario: User Interaction', () => {
    it('Given an action label and handler, When the user clicks the action button, Then the handler should be called', async () => {
      const message = 'With action';
      const actionLabel = 'Retry';
      const handleAction = jest.fn();
      const user = userEvent.setup();

      render(<EmptyState message={message} actionLabel={actionLabel} onAction={handleAction} />, {
        wrapper: TestWrapper,
      });

      const button = screen.getByRole('button', { name: actionLabel });
      expect(button).toBeInTheDocument();

      await user.click(button);
      expect(handleAction).toHaveBeenCalledTimes(1);
    });

    it('Given a message without action props, When the component is rendered, Then no action button should be shown', () => {
      const message = 'No action';
      render(<EmptyState message={message} actionLabel="Hidden" />, { wrapper: TestWrapper });

      // Should pass because onAction is undefined
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
  });
});
