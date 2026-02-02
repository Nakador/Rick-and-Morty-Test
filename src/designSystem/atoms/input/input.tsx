import React from 'react';
import { StyledInput } from './input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ id='input-id', ...props }) => <StyledInput id={id} {...props} />;
