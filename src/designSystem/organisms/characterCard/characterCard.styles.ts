import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.md};
  }
`;

export const Content = styled.div`
  padding: ${props => props.theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;
