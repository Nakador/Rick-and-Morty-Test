import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.md};
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: ${props => props.theme.spacing.sm};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.text};
    border-radius: ${props => props.theme.radii.xl};
  }
`;

export const SuggestionItem = styled.li`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary}20; /* 20% opacity */
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;
