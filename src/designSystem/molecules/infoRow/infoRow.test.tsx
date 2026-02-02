import { render, screen } from '@testing-library/react';

import { InfoRow } from './infoRow';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: InfoRow Component', () => {
  describe('Scenario: Rendering Content', () => {
    test('Given a label and a string value, When the component is rendered, Then both should be visible', () => {
      const label = 'Species';
      const value = 'Human';

      const { container } = render(<InfoRow label={label} value={value} />, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });

    test('Given a label and a ReactNode value, When the component is rendered, Then the custom node should be visible', () => {
      const label = 'Origin';
      const value = <span>Earth</span>;

      render(<InfoRow label={label} value={value} />, { wrapper: TestWrapper });

      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByTestId('custom-value')).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the component is rendered, Then it should have the correct id and test-id attributes', () => {
      const customId = 'my-info-row';
      const label = 'Gender';
      const value = 'Male';

      render(
        <InfoRow id={customId} label={label} value={value} />,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', customId);
    });
  });
});
