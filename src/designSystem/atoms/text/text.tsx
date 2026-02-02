import React from 'react';
import { StyledText } from './text.styles';
import { type TextVariant, type TextSize, type TextWeight, type TextAlign, type TextColor } from './text.styles';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  color?: TextColor;
  ellipsis?: boolean;
  id?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  as = 'p', 
  size, 
  weight, 
  align, 
  color, 
  ellipsis, 
  id = 'text-id', 
  children, 
  ...props 
}) => {
  return (
    <StyledText
      as={as as React.ElementType}
      $size={size}
      $weight={weight}
      $align={align}
      $color={color}
      $ellipsis={ellipsis}
      id={id}
      data-testid={id}
      {...props}
    >
      {children}
    </StyledText>
  );
};
