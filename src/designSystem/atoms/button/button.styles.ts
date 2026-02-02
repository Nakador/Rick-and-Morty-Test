import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${(props) => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  background-color: ${(props) => props.theme.colors.cardBackground};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: ${(props) => props.theme.radii.xl};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.md};
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textInverse};
  }
`;
