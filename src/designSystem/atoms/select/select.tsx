import React from 'react';
import { StyledSelect } from './select.styles';
import { type SelectHTMLAttributes } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  width?: string;
}

export const Select: React.FC<SelectProps> = ({ options, id = 'select-id', width, ...props }) =>  (
  <StyledSelect id={id} data-testid={id} {...props} $width={width}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );

