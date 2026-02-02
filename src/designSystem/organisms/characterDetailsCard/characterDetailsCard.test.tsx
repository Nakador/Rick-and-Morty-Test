import { render, screen } from '@testing-library/react';

import { CharacterDetailsCard } from './characterDetailsCard';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';
import { rickMock } from '../../../app/services/mocks/charactermocks';



describe('Feature: CharacterDetailsCard Organism', () => {
  describe('Scenario: Rendering detailed info', () => {
    test('Given a character, When details card is rendered, Then all info rows should be visible', () => {
      render(<CharacterDetailsCard character={rickMock} />, { wrapper: TestWrapper });

      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Gender')).toBeInTheDocument();
      expect(screen.getByText('Male')).toBeInTheDocument();
      expect(screen.getByText('Origin')).toBeInTheDocument();
      expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
      expect(screen.getByText('Last Known Location')).toBeInTheDocument();
      expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument();
      expect(screen.getByText('0 episodes')).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a custom id, When rendered, Then it should have the correct id attribute', () => {
      render(<CharacterDetailsCard character={rickMock} id="details-view" />, { wrapper: TestWrapper });

      const element = screen.getByTestId('details-view');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'details-view');
    });
  });
});
