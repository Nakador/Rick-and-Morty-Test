import styled from 'styled-components';
import { Autocomplete } from '../../molecules/autocomplete/autocomplete';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.cardBackground};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radii.xl};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  width: 100%;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: auto;
    flex: 1;
  }
`;


export const StyledAutocomplete = styled(Autocomplete)`
  flex: 1;
  width: 100%;
`;

export const FiltersWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    width: auto;
  }
`;

export const ToggleButton = styled.button`
  display: block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.radii.sm};
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
