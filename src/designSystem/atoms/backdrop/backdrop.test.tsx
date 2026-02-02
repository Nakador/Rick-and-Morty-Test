import { render, screen } from '@testing-library/react';

import { Backdrop } from './backdrop';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: Backdrop Component', () => {
  describe('Scenario: Default Rendering', () => {
    test('Given no props, When the Backdrop is rendered, Then it should be in the document', () => {
      render(<Backdrop />, { wrapper: TestWrapper });

      expect(screen.getByRole('img', { name: /rick loading/i })).toBeInTheDocument();
      expect(screen.getByTestId('backdrop-id')).toBeInTheDocument();
    });
  });
});
