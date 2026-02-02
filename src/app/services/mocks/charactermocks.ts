import { createMockCharacter } from './characterfactory';

export const rickMock = createMockCharacter({
  id: 1,
  name: 'Rick Sanchez',
  origin: { name: 'Earth (C-137)', url: '' },
  location: { name: 'Citadel of Ricks', url: '' },
});

export const mortyMock = createMockCharacter({
  id: 2,
  name: 'Morty Smith',
  status: 'Alive',
  species: 'Human',
});
