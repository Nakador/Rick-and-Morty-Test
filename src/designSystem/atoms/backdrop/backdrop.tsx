import React from 'react';
import { Overlay, LoaderContainer, RickHead } from './backdrop.styles';
const rickAsset = '/assets/rick-svgrepo-com.svg';

type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

export const Backdrop: React.FC<BackdropProps> = ({ id = 'backdrop-id', ...props }) => {
  return (
    <Overlay id={id} data-testid={id} {...props}>
      <LoaderContainer>
        <RickHead src={rickAsset} alt="Rick Loading" />
      </LoaderContainer>
    </Overlay>
  );
};
