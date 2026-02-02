import React, { useState, useRef, useMemo, useEffect } from 'react';
import type { InputProps } from '../../atoms/input/input';
import { Input } from '../../atoms/input/input';
import { Wrapper, SuggestionsList, SuggestionItem } from './autocomplete.styles';
import { isEmpty } from '../../../app/utils/typeGuards/typeGuards';

export interface AutocompleteOption {
  value: string;
  label: string;
  id?: string | number;
  [key: string]: unknown;
}

export interface AutocompleteProps<T extends AutocompleteOption = AutocompleteOption> extends Omit<InputProps, 'onChange' | 'onSelect'> {
  value: string;
  onChange: (value: string) => void;
  options: T[];
  onSelect?: (option: T) => void;
  filterFunction?: (options: T[], query: string) => T[];
  renderOption?: (option: T) => React.ReactNode;
  getOptionLabel?: (option: T) => string;
  className?: string;
}

export const Autocomplete = <T extends AutocompleteOption = AutocompleteOption>({ 
  options, 
  value, 
  onChange, 
  onSelect, 
  filterFunction,
  renderOption,
  getOptionLabel,
  id = 'autocomplete-input',
  className,
  ...props 
}: AutocompleteProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = useMemo(() => {
    if (filterFunction) {
      return filterFunction(options, value);
    }
    return options.filter(option => 
      option.label.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, options, filterFunction]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setIsOpen(true);
  };

  const handleSelectOption = (option: T) => {
    const label = getOptionLabel ? getOptionLabel(option) : option.label;
    onChange(label);
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  const handleFocus = () => {
    if (value && !isEmpty(filteredOptions)) {
      setIsOpen(true);
    }
  };

  return (
    <Wrapper ref={wrapperRef} className={className}>
      <Input
        id={id}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        autoComplete="off"
        {...props}
      />
      {isOpen && !isEmpty(filteredOptions) && (
        <SuggestionsList data-testid="suggestions-list">
          {filteredOptions.map((option, index) => (
            <SuggestionItem
              key={option.id ? String(option.id) : `${option.value}-${index}`}
              onClick={() => handleSelectOption(option)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {renderOption ? renderOption(option) : (getOptionLabel ? getOptionLabel(option) : option.label)}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </Wrapper>
  );
};
