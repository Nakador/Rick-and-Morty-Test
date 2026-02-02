
import { sortCharacters } from './sorting';
import type { Character } from '../../services/api/api';

describe('Feature: Character Sorting', () => {
  const characters: Character[] = [
    { id: 1, name: 'Morty', status: 'Alive' } as Character,
    { id: 2, name: 'Rick', status: 'Alive' } as Character,
    { id: 3, name: 'Beth', status: 'Alive' } as Character,
  ];

  describe('Scenario: Ascending Sort', () => {
    test('Given a list of characters, When sorted "asc", Then they should be ordered A-Z by name', () => {
      const sorted = sortCharacters(characters, 'asc');
      expect(sorted.map(c => c.name)).toEqual(['Beth', 'Morty', 'Rick']);
    });
  });

  describe('Scenario: Descending Sort', () => {
    test('Given a list of characters, When sorted "desc", Then they should be ordered Z-A by name', () => {
      const sorted = sortCharacters(characters, 'desc');
      expect(sorted.map(c => c.name)).toEqual(['Rick', 'Morty', 'Beth']);
    });
  });

  describe('Scenario: No Sort', () => {
    test('Given a list of characters, When sort order is empty, Then the order should remain unchanged', () => {
      const sorted = sortCharacters(characters, '');
      expect(sorted).toEqual(characters);
    });
  });
});
