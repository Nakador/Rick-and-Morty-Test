import styled from 'styled-components';
import { ImageAtom } from '../../atoms/image/image';
import { Text } from '../../atoms/text/text';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${props => props.theme.zIndices.dropdown};
  margin: 4px 0 0;
  padding: 0;
  list-style: none;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.md};
  max-height: 200px;
  overflow-y: auto;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    width: 14rem;
  }
`;

export const SuggestionItem = styled.li`
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.md}`};
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  transition: background-color 0.2s ease;
  display: flex;
  

  &:hover {
    background-color: ${props => props.theme.colors.primary}20; /* 20% opacity */
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

export const CharacterAvatar = styled(ImageAtom)`
  width: calc(${props => props.theme.spacing.xl} + ${props => props.theme.spacing.sm});
  height: calc(${props => props.theme.spacing.xl} + ${props => props.theme.spacing.sm});
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.theme.colors.border};
  
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterName = styled(Text)`
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
`;

export const CharacterMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.fontSizes.sm};
`;
