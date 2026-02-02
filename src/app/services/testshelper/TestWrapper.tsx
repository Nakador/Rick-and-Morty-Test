import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ThemeProviderWrapper } from '../../providers/themeProvider/ThemeContext';
import { MemoryRouter } from 'react-router-dom';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

interface TestWrapperProps {
  children: React.ReactNode;
  includeQueryClient?: boolean;
}

export const TestWrapper = ({ children, includeQueryClient = false, initialEntries }: TestWrapperProps & { initialEntries?: string[] }) => {
  const content = (
    <ThemeProviderWrapper>
      <MemoryRouter initialEntries={initialEntries}>
        {children}
      </MemoryRouter>
    </ThemeProviderWrapper>
  );

  if (includeQueryClient) {
    return (
      <QueryClientProvider client={queryClient}>
        {content}
      </QueryClientProvider>
    );
  }

  return content;
};


