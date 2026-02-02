import styled from 'styled-components';
import { Text } from '../../atoms/text/text';

export const LayoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.xl};
`;

export const Header = styled.header`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;

export const HeaderCenter = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  align-items: center;
  flex: 1;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex: 2;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: ${(props) => props.theme.fontWeights.black};
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;
