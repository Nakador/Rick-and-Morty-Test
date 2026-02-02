import styled from 'styled-components';
import { Autocomplete } from '../../molecules/autocomplete/autocomplete';
import { Button } from '../../atoms/button/button';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${props => props.theme.colors.cardBackground} 0%, ${props => props.theme.colors.background} 100%);
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.md};
  border: 1px solid ${props => props.theme.colors.border};

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

export const ToggleButton = styled(Button)`
  display: block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.onPrimary};
  border: none;
  cursor: pointer;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
