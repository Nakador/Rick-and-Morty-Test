import { type ReactNode } from 'react';
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import { ErrorPage } from '../../../designSystem/organisms/errorPage/errorPage';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const message = error instanceof Error ? error.message : 'Unknown error occurred';
  return <ErrorPage message={message} onReset={resetErrorBoundary} />;
};

export const ErrorBoundaryProvider = ({ children, fallback }: Props) => {
  const logError = (error: unknown, info: { componentStack?: string | null }) => {
    console.error('Uncaught error:', error, info);
  };

  return (
    <ErrorBoundary
      FallbackComponent={fallback ? () => <>{fallback}</> : ErrorFallback}
      onError={logError}
    >
      {children}
    </ErrorBoundary>
  );
};
