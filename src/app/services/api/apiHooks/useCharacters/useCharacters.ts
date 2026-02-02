import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getCharacters } from '../../api';
import type { CharactersResponse, CharacterFilter } from '../../api';
import { ApiError } from '../../../../utils/error/errors';

interface UseCharactersParams extends CharacterFilter {
  page?: number;
}

const fetchCharacters = async (params: UseCharactersParams): Promise<CharactersResponse> => {
  const response = await getCharacters(params);

  if (response.status !== 200 || !response.data) {
    throw new ApiError(response.statusMessage || 'Failed to fetch characters', response.status);
  }

  return response.data as CharactersResponse;
};

export const useCharacters = (params: UseCharactersParams) => {
  return useQuery<CharactersResponse>({
    queryKey: ['characters', params],
    queryFn: () => fetchCharacters(params),
    placeholderData: keepPreviousData,
    staleTime: 500,
  });
};
