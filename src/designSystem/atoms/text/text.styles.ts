import styled, { css } from 'styled-components';

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type TextWeight = '400' | '500' | '600' | '700' | '900';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextColor = 'text' | 'textSecondary' | 'primary' | 'accent' | 'textInverse' | 'error';

export interface StyledTextProps {
  $size?: TextSize;
  $weight?: TextWeight;
  $align?: TextAlign;
  $color?: TextColor;
  $ellipsis?: boolean;
}

export const StyledText = styled.span<StyledTextProps>`
  margin: 0;
  font-size: ${props => props.theme.fontSizes[props.$size || 'md']};
  font-weight: ${props => props.$weight || '400'};
  text-align: ${props => props.$align || 'left'};
  color: ${props => props.theme.colors[props.$color || 'text']};
  
  ${props => props.$ellipsis && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;
