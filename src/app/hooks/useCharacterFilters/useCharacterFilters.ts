import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { CharacterFilter } from '../../services/api/api';
import { isEmpty } from '../../utils/typeGuards/typeGuards';

export const useCharacterFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: CharacterFilter = {
    name: searchParams.get('name') || '',
    status: searchParams.get('status') || '',
    gender: searchParams.get('gender') || '',
  };

  const page = Number(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || '';

  const setFilter = useCallback(
    (key: keyof CharacterFilter, value: string) => {
      const newParams = new URLSearchParams(searchParams);
      if (!isEmpty(value)) {
        newParams.set(key as string, value);
      } else {
        newParams.delete(key as string);
      }
      newParams.set('page', '1');
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  const setSort = useCallback(
    (value: string) => {
      const newParams = new URLSearchParams(searchParams);
      if (isEmpty(value)) {
        newParams.delete('sort');
      } else {
        newParams.set('sort', value);
      }
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  const setPage = useCallback(
    (newPage: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', newPage.toString());
      setSearchParams(newParams);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [searchParams, setSearchParams]
  );

  const clearFilters = useCallback(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('name');
    newParams.delete('status');
    newParams.delete('gender');
    newParams.set('page', '1');
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  return {
    filters,
    page,
    sort,
    setFilter,
    setSort,
    setPage,
    clearFilters,
  };
};
