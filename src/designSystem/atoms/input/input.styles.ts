import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  border-radius: ${props => props.theme.radii.xl};
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;
