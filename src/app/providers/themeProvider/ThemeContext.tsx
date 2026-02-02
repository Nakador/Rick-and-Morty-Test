import React, { useState, useEffect, type ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider, type DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../../../designSystem/styles/theme';

import { ThemeContext, type ThemeMode } from './ThemeContextDefinition';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setThemeMode((prevMode: ThemeMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme: DefaultTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
