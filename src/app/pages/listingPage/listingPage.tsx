import { useMemo, type FC } from 'react';

import { useCharacters } from '../../services/api/apiHooks/useCharacters/useCharacters';
import { useCharacterFilters } from '../../hooks/useCharacterFilters/useCharacterFilters';
import { sortCharacters } from '../../utils/sorting/sorting';
import { FilterBar } from '../../../designSystem/organisms/filterBar/filterBar';
import { PageContainer } from './listingPage.styles';
import { isEmpty } from '../../utils/typeGuards/typeGuards';
import type { Character } from '../../services/api/api';
import { ListingPageView } from './listingPageView';

export const ListingPage: FC = () => {
  const { filters, page, sort, setFilter, setSort, setPage, clearFilters } = useCharacterFilters();

  const { data, isLoading, error, isFetching } = useCharacters({ page, ...filters });

  const sortedCharacters = useMemo(() => {
    if (isEmpty(data?.results)) return [];

    return sortCharacters(data!.results!, sort);
  }, [data, sort]);

  const autocompleteOptions = useMemo(() => {
    if (!sortedCharacters) return [];
    // We map all characters to options.
    // If strict name uniqueness is required we might need to reduce, but for rich display, showing duplicates with different avatars is better.
    return sortedCharacters.map((c: Character) => ({
      value: c.name,
      label: c.name,
      image: c.image,
      status: c.status,
      species: c.species,
      id: c.id,
    }));
  }, [sortedCharacters]);

  return (
    <PageContainer id={'listing-page'}>
      <FilterBar
        filter={filters}
        onFilterChange={setFilter}
        sort={sort}
        onSortChange={setSort}
        autocompleteOptions={autocompleteOptions}
      />

      <ListingPageView
        filters={filters}
        page={page}
        sort={sort}
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
        sortedCharacters={sortedCharacters}
        onFilterChange={setFilter}
        onSortChange={setSort}
        onPageChange={setPage}
        onClearFilters={clearFilters}
        autocompleteOptions={autocompleteOptions}
      />
    </PageContainer>
  );
};
