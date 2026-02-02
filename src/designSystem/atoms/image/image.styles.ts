import styled from 'styled-components';

export interface StyledImageProps {
  width?: string | number;
  height?: string | number;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) =>
    typeof props.width === 'number' ? `${props.width}px` : props.width || '100%'};
  height: ${(props) =>
    typeof props.height === 'number' ? `${props.height}px` : props.height || 'auto'};
  object-fit: cover;
  display: block;
`;
