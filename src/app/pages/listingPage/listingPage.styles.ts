import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  gap: ${props => props.theme.spacing.md};
`;

export const EmptyStateImage = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const EmptyStateMessage = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
  width: 40rem;
`;

export const ClearFilterLink = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.lg};
  padding: 0;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
