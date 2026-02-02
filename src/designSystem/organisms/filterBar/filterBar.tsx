import { useState, useEffect, memo } from 'react';
import type { AutocompleteOption } from '../../molecules/autocomplete/autocomplete';
import type { CharacterFilter } from '../../../app/services/api/types';
import { Container, StyledAutocomplete, SearchWrapper, FiltersWrapper, ToggleButton } from './filterBar.styles';
import { Select } from '../../atoms/select/select';
import { statusOptions, genderOptions, sortOptions } from './consts';
import { useDebouncedCallback } from '../../../app/hooks/useDebouncedCallback/useDebouncedCallback';
import { CharacterAvatar, CharacterInfo, CharacterName, CharacterMeta } from '../../molecules/autocomplete/autocomplete.styles';
import { StatusDot } from '../../molecules/statusBadge/statusBadge.styles';

export interface FilterBarProps {
  filter: CharacterFilter;
  onFilterChange: (key: keyof CharacterFilter, value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  autocompleteOptions?: AutocompleteOption[];
  id?: string;
}

const defaultDebounceTime = 500;

export const FilterBar: React.FC<FilterBarProps> = memo(({ 
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
    <Container id={id} data-testid={id}>
      <SearchWrapper>
        <StyledAutocomplete 
          aria-label="Search by name"
          placeholder="Search by name..." 
          options={autocompleteOptions}
          value={localSearch}
          onChange={handleSearchChange}
          renderOption={(option: any) => (
            <>
              <CharacterAvatar src={option.image} alt={option.label} />
              <CharacterInfo>
                <CharacterName>{option.label}</CharacterName>
                <CharacterMeta>
                  <StatusDot status={option.status} />
                  {option.status} • {option.species}
                </CharacterMeta>
              </CharacterInfo>
            </>
          )}
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
          id="filter-status"
          aria-label="Filter by status"
          value={filter.status || ''} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange('status', e.target.value)}
          options={statusOptions}
        />

        <Select 
          id="filter-gender"
          aria-label="Filter by gender"
          value={filter.gender || ''} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onFilterChange('gender', e.target.value)}
          options={genderOptions}
        />

        <Select 
          id="sort-order"
          aria-label="Sort characters"
          value={sort} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSortChange(e.target.value)}
          options={sortOptions}
        />
      </FiltersWrapper>
    </Container>
  );
});
