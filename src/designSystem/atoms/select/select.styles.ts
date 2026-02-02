import styled from 'styled-components';

export const StyledSelect = styled.select<{ $width?: string }>`
  appearance: base-select;
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.radii.xl};
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
  width: ${props => props.$width || '10rem'};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
    



  @supports (appearance: base-select) {
    &,
  &::picker(select) {
      appearance: base-select;
      border-radius: ${props => props.theme.radii.xl};
    }

    option {
      border-radius: ${props => props.theme.radii.xl};
    }
  }

`;
