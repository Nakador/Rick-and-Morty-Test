import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: ${props => props.theme.fontSizes.lg};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
