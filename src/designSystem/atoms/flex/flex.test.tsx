import { render, screen } from '@testing-library/react';

import { Flex } from './flex';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: Flex Component', () => {
  describe('Scenario: Rendering Children', () => {
    test('Given children elements, When the Flex component is rendered, Then the children should be visible', () => {
      const content = 'Flex Items';

      const { container } = render(<Flex>{content}</Flex>, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  describe('Scenario: Applying Layout Properties', () => {
    test('Given gap, align, and justify props, When the Flex component is rendered, Then it should apply the corresponding flexbox styles', () => {
      const gap = '15px';
      const align = 'center';
      const justify = 'space-between';
      const id = 'styled-flex';

      render(
        <Flex gap={gap} align={align} justify={justify} id={id} />,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId(id);
      expect(element).toHaveStyle({
        display: 'flex',
        gap,
        'align-items': align,
        'justify-content': justify
      });
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Flex component is rendered, Then it should have the correct id and test-id', () => {
      const customId = 'custom-flex';

      render(<Flex id={customId} />, { wrapper: TestWrapper });

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
    });
  });
});
