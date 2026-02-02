import { useQuery } from '@tanstack/react-query';
import { getCharacter } from '../../api';
import type { Character } from '../../api';
import { ApiError } from '../../../../utils/error/errors';

const fetchCharacter = async (id: number): Promise<Character> => {
  const response = await getCharacter(id);
  
  if (response.status !== 200 || !response.data) {
    throw new ApiError(response.statusMessage || 'Failed to fetch character', response.status);
  }
  
  return response.data as Character;
};


export const useCharacter = (id: string | undefined) => {
  return useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(Number(id)),
    enabled: !!id,
    staleTime: 5000,
  });
};
