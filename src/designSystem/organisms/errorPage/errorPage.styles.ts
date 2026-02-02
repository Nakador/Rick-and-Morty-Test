import styled from 'styled-components';
import { Text } from '../../atoms/text/text';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  items-align: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  min-height: 60vh;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: ${props => props.theme.colors.error};
`;

export const ErrorMessage = styled(Text)`
  margin-top: 1rem;
`;


export const ReloadButton = styled.button`
  margin-top: ${props => props.theme.spacing.xl};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.text};
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: ${props => props.theme.radii.md};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
