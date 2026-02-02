
import React from 'react';
import { Container, StyledImage, Message, ActionButton } from './emptyState.styles';

export interface EmptyStateProps {
  imageSrc?: string;
  message: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

const defaultAsset = "/assets/rick-morty-empty-state.png";

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  imageSrc = defaultAsset, 
  message, 
  actionLabel, 
  onAction 
}) => {
  return (
    <Container>
      <StyledImage src={imageSrc} alt="Empty state" />
      <Message>
        {message}
        {actionLabel && onAction && (
          <>
            <br />
            Try to <ActionButton onClick={onAction}>{actionLabel}</ActionButton>
          </>
        )}
      </Message>
    </Container>
  );
};
