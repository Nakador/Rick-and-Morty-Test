import React from 'react';
import type { Preview } from '@storybook/react-vite'
import { ThemeProviderWrapper } from '../src/app/providers/themeProvider/ThemeContext';
import { GlobalStyles } from '../src/designSystem/styles/globalstyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <ThemeProviderWrapper>
          <GlobalStyles />
          <Story />
        </ThemeProviderWrapper>
      </QueryClientProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;