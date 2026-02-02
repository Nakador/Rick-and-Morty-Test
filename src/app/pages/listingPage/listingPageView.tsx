import React, { memo, useCallback } from 'react';
import type { Character, CharacterFilter } from '../../services/api/api';
import { Backdrop } from '../../../designSystem/atoms/backdrop/backdrop';
import { ErrorPage } from '../../../designSystem/organisms/errorPage/errorPage';
import { Pagination } from '../../../designSystem/molecules/pagination/pagination';
import { CharacterCard } from '../../../designSystem/organisms/characterCard/characterCard';
import { Grid } from './listingPage.styles';
import { EmptyState } from '../../../designSystem/molecules/emptyState/emptyState';
import type { AutocompleteOption } from '../../../designSystem/molecules/autocomplete/autocomplete';

export interface ListingPageViewProps {
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

export const ListingPageView: React.FC<ListingPageViewProps> = memo(({ 
  page, 
  data, 
  isLoading, 
  isFetching, 
  error, 
  sortedCharacters, 
  onPageChange,
  onClearFilters
}) => {
  const handlePrevPage = useCallback(() => onPageChange(page - 1), [onPageChange, page]);
  const handleNextPage = useCallback(() => onPageChange(page + 1), [onPageChange, page]);

  if (error && !isLoading) {
    if (error.message === "There is nothing here" || error.message.includes("404")) {
       return (
        <EmptyState 
          message="Look, Morty, they aren't on the list, they're probably in the shrimp dimension or something"
          actionLabel="clean the filters"
          onAction={onClearFilters}
        />
       );
    }
    return <ErrorPage message={error.message} />;
  }

  return (
    <>
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
    </>
  );
});

ListingPageView.displayName = 'ListingPageView';
