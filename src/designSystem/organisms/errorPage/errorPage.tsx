import React from 'react';
import { Container, Title, ErrorMessage, ReloadButton } from './errorPage.styles';
import { Text } from '../../atoms/text/text';

export interface ErrorPageProps {
  message?: string;
  onReset?: () => void;
  id?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({ message, onReset, id = 'error-page' }) => {
  const handleReload = () => {
    if (onReset) {
      onReset();
    } else {
      window.location.reload();
    }
  };

  return (
    <Container id={id} data-testid={id}>
      <Title>Oops!</Title>
      <Text as="h1" size="xxl" weight="900" color="primary">
        The Microverse is Dead!
      </Text>
      <ErrorMessage size="lg">
        {message ||
          "Something went wrong in this dimension. We're working on fixing the space-time continuum."}
      </ErrorMessage>
      <ReloadButton onClick={handleReload}>Try to Jiggle the Handle (Reload)</ReloadButton>
    </Container>
  );
};
