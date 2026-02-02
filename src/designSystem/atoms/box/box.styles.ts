import styled from 'styled-components';

export interface StyledBoxProps {
  $padding?: string;
  $margin?: string;
}

export const StyledBox = styled.div<StyledBoxProps>`
  padding: ${(props) => props.$padding || '0'};
  margin: ${(props) => props.$margin || '0'};
`;
