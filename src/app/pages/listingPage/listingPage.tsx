import { memo, useMemo, useCallback, type FC } from 'react';

import { useCharacters } from '../../services/api/apiHooks/useCharacters/useCharacters';
import { useCharacterFilters } from '../../hooks/useCharacterFilters/useCharacterFilters';
import { sortCharacters } from '../../utils/sorting/sorting';
import { CharacterCard } from '../../../designSystem/organisms/characterCard/characterCard';
import { FilterBar } from '../../../designSystem/organisms/filterBar/filterBar';
import { Pagination } from '../../../designSystem/molecules/pagination/pagination';
import { Backdrop } from '../../../designSystem/atoms/backdrop/backdrop';
import { ErrorPage } from '../../../designSystem/organisms/errorPage/errorPage';
import type { Character, CharacterFilter } from '../../services/api/api';
import { Grid, PageContainer, EmptyStateContainer, EmptyStateMessage, ClearFilterLink, EmptyStateImage } from './listingPage.styles';
import { isEmpty } from '../../utils/typeGuards/typeGuards';
import type { AutocompleteOption } from '../../../designSystem/molecules/autocomplete/autocomplete';

const emptyStateAsset = "/assets/rick-morty-empty-state.png";

interface ListingPageViewProps {
  filters: CharacterFilter;
  page: number;
  sort: string;
  data: { info?: { pages: number; prev: string | null; next: string | null }; results?: Character[] } | undefined;
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
  sortedCharacters: Character[];
  onFilterChange: (key: keyof CharacterFilter, value: string) => void;
  onSortChange: (sort: string) => void;
  onPageChange: (page: number) => void;
  onClearFilters: () => void;
  autocompleteOptions?: AutocompleteOption[];
}

export const ListingPageView: FC<ListingPageViewProps> = memo(({ 
  filters, 
  page, 
  sort, 
  data, 
  isLoading, 
  isFetching, 
  error, 
  sortedCharacters, 
  onFilterChange, 
  onSortChange, 
  onPageChange,
  onClearFilters,
  autocompleteOptions
}) => {
  const handlePrevPage = useCallback(() => onPageChange(page - 1), [onPageChange, page]);
  const handleNextPage = useCallback(() => onPageChange(page + 1), [onPageChange, page]);

  if (error && !isLoading) {
    if (error.message === "There is nothing here" || error.message.includes("404")) {
       return (
        <PageContainer id={"listing-page"}>
          <FilterBar 
            filter={filters}
            onFilterChange={onFilterChange}
            sort={sort}
            onSortChange={onSortChange}
            autocompleteOptions={autocompleteOptions}
          />
           <EmptyStateContainer>
             <EmptyStateImage src={emptyStateAsset} alt="No characters found" />
             <EmptyStateMessage>
               Look, Morty, they aren't on the list, they're probably in the shrimp dimension or something <br/>
               Try to <ClearFilterLink onClick={onClearFilters}>clean the filters</ClearFilterLink>
             </EmptyStateMessage>
           </EmptyStateContainer>
        </PageContainer>
       );
    }
    return <ErrorPage message={error.message} />;
  }

  return (
    <PageContainer id={"listing-page"}>
      <FilterBar 
        filter={filters}
        onFilterChange={onFilterChange}
        sort={sort}
        onSortChange={onSortChange}
        autocompleteOptions={autocompleteOptions}
      />

      {isFetching && <Backdrop />}
      
      {!isLoading && !error && (
        <>
          <Grid>
            {sortedCharacters.map((char: Character, index: number) => (
              <CharacterCard 
                key={char.id} 
                character={char} 
                priority={index < 8}
              />
            ))}
          </Grid>
          
          <Pagination 
            currentPage={page}
            totalPages={data?.info?.pages || 1}
            onPrev={handlePrevPage}
            onNext={handleNextPage}
            hasPrev={Boolean(data?.info?.prev)}
            hasNext={Boolean(data?.info?.next)}
          />
        </>
      )}
    </PageContainer>
  );
});

export const ListingPage: FC = () => {
  const { 
    filters, 
    page, 
    sort, 
    setFilter, 
    setSort, 
    setPage,
    clearFilters
  } = useCharacterFilters();
    

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
      id: c.id
    }));
  }, [sortedCharacters]);

  return (
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
  );
};
