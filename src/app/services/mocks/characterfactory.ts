import type { Character } from '../api/api';

export const createMockCharacter = (overrides?: Partial<Character>): Character => {
  return {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    image: '/assets/rick-svgrepo-com.svg',
    episode: [],
    url: '',
    created: '',
    ...overrides,
  };
};
