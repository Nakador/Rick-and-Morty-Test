import { rickMock } from '../../../app/services/mocks/charactermocks';

import { render, screen } from '@testing-library/react';
import { CharacterCard } from './characterCard';
import { TestWrapper } from '../../../app/services/testshelper/TestWrapper';



describe('Feature: CharacterCard Organism', () => {
  describe('Scenario: Rendering character details', () => {
    test('Given a character object, When the card is rendered, Then it should display the name and location', () => {
      render(<CharacterCard character={rickMock} />, { wrapper: TestWrapper });

      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
      expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument();
    });
  });

  describe('Scenario: Identification', () => {
    test('Given a character, When the card is rendered, Then it should have a default id based on the character id', () => {
      render(<CharacterCard character={rickMock} />, { wrapper: TestWrapper });

      const element = screen.getByTestId('character-card-1');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'character-card-1');
    });

    test('Given a custom id, When the card is rendered, Then it should use the custom id', () => {
      render(<CharacterCard character={rickMock} id="custom-card-id" />, { wrapper: TestWrapper });

      const element = screen.getByTestId('custom-card-id');
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute('id', 'custom-card-id');
    });
  });
});
