import React from 'react';
import { StyledFlex } from './flex.styles';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string;
  align?: string;
  justify?: string;
  wrap?: string;
  direction?: string;
  id?: string;
  children?: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({ 
  gap, 
  align, 
  justify, 
  wrap, 
  direction,
  id = 'flex-component', 
  children, 
  ...props 
}) => {
  return (
    <StyledFlex
      $gap={gap}
      $align={align}
      $justify={justify}
      $wrap={wrap}
      $direction={direction}
      id={id}
      {...props}
    >
      {children}
    </StyledFlex>
  );
};
