import React from 'react';
import { StyledButton } from './button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, id='button-id', ...props }) => (
    <StyledButton id={id} {...props}>
      {children}
    </StyledButton>
  );

