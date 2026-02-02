import { render, screen } from '@testing-library/react';

import { MainLayout } from './mainLayout';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';

describe('Feature: MainLayout Template', () => {
  describe('Scenario: Rendering layout', () => {
    test('Given a title and children, When the layout is rendered, Then it should show the title and content', () => {
      render(
        <MainLayout title="Test Page">
          <div>Content Content</div>
        </MainLayout>,
        { wrapper: TestWrapper }
      );

      // Assuming title uses a heading
      expect(screen.getByRole('heading', { level: 1, name: 'Test Page' })).toBeInTheDocument();
      expect(screen.getByText('Content Content')).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When rendered, Then it should have the correct id attribute', () => {
      render(
        <MainLayout title="Test" id="custom-layout">
          <div>Content</div>
        </MainLayout>,
        { wrapper: TestWrapper }
      );

      const element = screen.getByTestId('custom-layout');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'custom-layout');
    });
  });
});
