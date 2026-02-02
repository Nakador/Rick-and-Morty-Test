import type { DefaultTheme } from 'styled-components';

const sharedTheme = {
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2.5rem',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    sm: '0 4px 6px rgba(0, 0, 0, 0.3)',
    md: '0 8px 16px rgba(0, 0, 0, 0.4)',
    text: '2px 2px 0px rgba(0,0,0,0.2)',
  },
};

export const darkTheme: DefaultTheme = {
  ...sharedTheme, 
  colors: {
    primary: '#97ce4c',
    secondary: '#e89ac7',
    background: '#202329',
    cardBackground: '#3c3e44',
    text: '#ffffff',
    textSecondary: '#d1d1d1',
    textInverse: '#000000',
    onPrimary: '#ffffff',
    accent: '#ff9800',
    border: '#555555',
    error: '#d63d2e',
    status: {
      alive: '#55cc44',
      dead: '#d63d2e',
      unknown: '#9e9e9e',
    },
  },
};

export const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    primary: '#97ce4c',
    secondary: '#e89ac7',
    background: '#ffffff',
    cardBackground: '#f0f2f5',
    text: '#333333',
    textSecondary: '#555555',
    textInverse: '#ffffff',
    onPrimary: '#ffffff',
    accent: '#ff9800',
    border: '#e0e0e0',
    error: '#d32f2f',
    status: {
      alive: '#2e7d32',
      dead: '#d32f2f',
      unknown: '#9e9e9e',
    },
  },
};

export const theme = darkTheme;
