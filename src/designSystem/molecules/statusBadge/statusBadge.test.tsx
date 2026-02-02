import { render, screen } from '@testing-library/react';

import { StatusBadge } from './statusBadge';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: StatusBadge Component', () => {
  describe('Scenario: Rendering Information', () => {
    test('Given status and species, When the component is rendered, Then formatted text should be visible', () => {
      const status = 'Alive';
      const species = 'Human';

      const { container } = render(<StatusBadge status={status} species={species} />, {
        wrapper: TestWrapper,
      });

      expect(container).toBeInTheDocument();
      expect(screen.getByText(`${status} - ${species}`)).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the component is rendered, Then it should have the correct id and test-id', () => {
      const customId = 'my-badge';
      const status = 'Dead';
      const species = 'Alien';

      render(<StatusBadge id={customId} status={status} species={species} />, {
        wrapper: TestWrapper,
      });

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', customId);
    });
  });
});
