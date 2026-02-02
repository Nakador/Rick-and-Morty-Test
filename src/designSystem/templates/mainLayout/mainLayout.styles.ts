import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

export const Header = styled.header`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
