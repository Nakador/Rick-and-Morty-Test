import { render, screen } from '@testing-library/react';

import { ImageAtom } from './image';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: Image Component', () => {
  describe('Scenario: Default Rendering', () => {
    test('Given a source and alt text, When the Image is rendered, Then it should be in the document', () => {
      const src = 'test.jpg';
      const alt = 'test';

      const { container } = render(<ImageAtom src={src} alt={alt} />, { wrapper: TestWrapper });

      expect(container).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification and Attributes', () => {
    test('Given a custom id and source, When the Image is rendered, Then it should have the correct attributes', () => {
      const customId = 'my-image';
      const src = 'test.jpg';
      const alt = 'test';

      render(<ImageAtom id={customId} src={src} alt={alt} />, { wrapper: TestWrapper });

      const image = screen.getByTestId(customId);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('id', customId);
      expect(image).toHaveAttribute('src', src);
    });
  });

  describe('Scenario: Sizing', () => {
    test('Given width and height props, When the Image is rendered, Then it should apply the specified dimensions', () => {
      const width = 100;
      const height = 100;
      const id = 'sized-image';

      render(<ImageAtom id={id} src="test.jpg" alt="test" width={width} height={height} />, {
        wrapper: TestWrapper,
      });

      const image = screen.getByTestId(id);
      expect(image).toHaveStyle({ width: '100px', height: '100px' });
    });
  });
});
