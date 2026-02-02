import type { CharactersResponse } from '../api/api';
import { rickMock, mortyMock } from './charactermocks';

export const mockCharactersResponse: CharactersResponse = {
  info: { count: 2, pages: 1, next: null, prev: null },
  results: [rickMock, mortyMock],
};
