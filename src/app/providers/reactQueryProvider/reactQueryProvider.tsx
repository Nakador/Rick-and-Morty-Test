import React, { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000 ,
    },
  },
});

interface ReactQueryProviderProps {
  children: ReactNode;
}

export const ReactQueryProvider: React.FC<ReactQueryProviderProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
);

