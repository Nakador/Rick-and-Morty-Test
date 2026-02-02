import React from 'react';
import { StyledImage } from './image.styles';
import { type StyledImageProps } from './image.styles';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, StyledImageProps {}

export const ImageAtom: React.FC<ImageProps> = ({ id='image-id', ...props }) =>  <StyledImage id={id} data-testid={id} {...props} />;

