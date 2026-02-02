import React, { useState, useEffect } from 'react';
import type { AutocompleteOption } from '../../molecules/autocomplete/autocomplete';
import type { CharacterFilter } from '../../../app/services/api/types';
import { Container, StyledAutocomplete, SearchWrapper, FiltersWrapper, ToggleButton } from './filterBar.styles';
import { Select } from '../../atoms/select/select';
import { statusOptions, genderOptions, sortOptions } from './consts';
import { useDebouncedCallback } from '../../../app/hooks/useDebouncedCallback/useDebouncedCallback';

export interface FilterBarProps {
  filter: CharacterFilter;
  onFilterChange: (key: keyof CharacterFilter, value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  autocompleteOptions?: AutocompleteOption[];
  id?: string;
}

const defaultDebounceTime = 500;

export const FilterBar: React.FC<FilterBarProps> = React.memo(({ 
  filter, 
  onFilterChange,
  sort,
  onSortChange,
  autocompleteOptions = [],
  id = 'filter-bar'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [localSearch, setLocalSearch] = useState(filter.name || '');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalSearch(filter.name || '');
  }, [filter.name]);

  const debouncedUpdate = useDebouncedCallback((value: string) => {
    onFilterChange('name', value);
  }, defaultDebounceTime);

  const handleSearchChange = (value: string) => {
    setLocalSearch(value);
    debouncedUpdate(value);
  };

  return (
    <Container id={id}>
      <SearchWrapper>
        <StyledAutocomplete 
          placeholder="Search by name..." 
          options={autocompleteOptions}
          value={localSearch}
          onChange={handleSearchChange}
        />
        <ToggleButton 
          type="button" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Hide' : 'Filters'}
        </ToggleButton>
      </SearchWrapper>
      
      <FiltersWrapper $isOpen={isExpanded} aria-hidden={!isExpanded}>
        <Select 
          aria-label="Filter by status"
          value={filter.status || ''} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange('status', e.target.value)}
          options={statusOptions}
        />

        <Select 
          aria-label="Filter by gender"
          value={filter.gender || ''} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange('gender', e.target.value)}
          options={genderOptions}
        />

        <Select 
          aria-label="Sort characters"
          value={sort} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSortChange(e.target.value)}
          options={sortOptions}
        />
      </FiltersWrapper>
    </Container>
  );
});
