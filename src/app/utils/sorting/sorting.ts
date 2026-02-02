import type { Character } from '../../services/api/api';
import { isEmpty } from '../../utils/typeGuards/typeGuards';

export const sortCharacters = (characters: Character[], sortOrder: string): Character[] => {
  if (isEmpty(sortOrder)) return characters;

  return [...characters].sort((a, b) => {
    if (sortOrder === 'asc') return a.name.localeCompare(b.name);
    if (sortOrder === 'desc') return b.name.localeCompare(a.name);
    return 0;
  });
};
