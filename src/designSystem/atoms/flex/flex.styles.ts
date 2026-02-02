import styled from 'styled-components';

export interface StyledFlexProps {
  $gap?: string;
  $align?: string;
  $justify?: string;
  $wrap?: string;
  $direction?: string;
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  gap: ${props => props.$gap || '0'};
  align-items: ${props => props.$align || 'stretch'};
  justify-content: ${props => props.$justify || 'flex-start'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};
  flex-direction: ${props => props.$direction || 'row'};
`;
