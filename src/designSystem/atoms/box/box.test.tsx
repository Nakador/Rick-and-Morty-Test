import { render, screen } from '@testing-library/react';

import { Box } from './box';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: Box Component', () => {
  describe('Scenario: Rendering Content', () => {
    test('Given content within a Box, When the component is rendered, Then the content should be visible', () => {
      const content = 'Content';

      const { container } = render(<Box>{content}</Box>, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  describe('Scenario: Applying Layout Styles', () => {
    test('Given padding and margin props, When the Box is rendered, Then it should apply the specified styles', () => {
      const padding = '10px';
      const margin = '20px';
      const id = 'styled-box';

      render(<Box padding={padding} margin={margin} id={id} />, { wrapper: TestWrapper });

      const element = screen.getByTestId(id);
      expect(element).toHaveStyle({
        padding,
        margin
      });
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Box is rendered, Then it should have the correct id and test-id', () => {
      const customId = 'custom-box';

      render(<Box id={customId} />, { wrapper: TestWrapper });

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
    });
  });
});
