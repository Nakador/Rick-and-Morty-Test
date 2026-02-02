import { render, screen } from '@testing-library/react';

import { Text } from './text';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: Text Component', () => {
  describe('Scenario: Default Rendering', () => {
    test('Given children text, When the Text component is rendered without props, Then it should render as a paragraph by default', () => {
      const content = 'Hello World';

      const { container } = render(<Text>{content}</Text>, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
      const element = screen.getByText(content);
      expect(element.tagName).toBe('P');
    });
  });

  describe('Scenario: Polymorphic Rendering', () => {
    test('Given an "as" prop set to "h1", When the Text component is rendered, Then it should render as an h1 element', () => {
      const tag = 'h1';
      const content = 'Heading Title';

      render(<Text as={tag}>{content}</Text>, { wrapper: TestWrapper });

      const element = screen.getByRole('heading', { level: 1 });
      expect(element).toHaveTextContent(content);
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When the Text component is rendered, Then it should have the correct test-id', () => {
      const customId = 'custom-text';

      render(<Text id={customId}>Custom ID</Text>, { wrapper: TestWrapper });

      const element = screen.getByTestId(customId);
      expect(element).toBeInTheDocument();
    });
  });

  describe('Scenario: Applying Styles', () => {
    test('Given the ellipsis prop, When the Text component is rendered, Then it should apply the ellipsis CSS styles', () => {
      const id = 'ellipsis-text';

      render(
        <Text ellipsis id={id}>
          Long Text
        </Text>,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId(id);
      expect(element).toHaveStyle({
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
        overflow: 'hidden',
      });
    });
  });
});
