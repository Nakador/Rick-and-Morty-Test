import React from 'react';
import { StyledBox } from './box.styles';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: string;
  margin?: string;
  id?: string;
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({ 
  padding, 
  margin, 
  id = 'box-component', 
  children, 
  ...props 
}) => {
  return (
    <StyledBox
      $padding={padding}
      $margin={margin}
      id={id}
      data-testid={id}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
