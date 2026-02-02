import React, { useState, useRef, useMemo, useEffect } from 'react';
import type { InputProps } from '../../atoms/input/input';
import { Input } from '../../atoms/input/input';
import { Wrapper, SuggestionsList, SuggestionItem } from './autocomplete.styles';
import { isEmpty } from '../../../app/utils/typeGuards/typeGuards';

export interface AutocompleteOption {
  value: string;
  label: string;
}

export interface AutocompleteProps extends Omit<InputProps, 'onChange' | 'onSelect'> {
  
  value: string;
  
  onChange: (value: string) => void;
  
  options: AutocompleteOption[];
  
  onSelect?: (option: AutocompleteOption) => void;
  
  filterFunction?: (options: AutocompleteOption[], query: string) => AutocompleteOption[];
  
  className?: string;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({ 
  options, 
  value, 
  onChange, 
  onSelect, 
  filterFunction,
  id = 'autocomplete-input',
  className,
  ...props 
}) => {
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

  const handleSelectOption = (option: AutocompleteOption) => {
    onChange(option.label);
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
          {filteredOptions.map((option) => (
            <SuggestionItem
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </Wrapper>
  );
};
