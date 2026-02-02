import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      cardBackground: string;
      text: string;
      textSecondary: string;
      textInverse: string;
      onPrimary: string;
      accent: string;
      border: string;
      error: string;
      status: {
        alive: string;
        dead: string;
        unknown: string;
      };
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      sm: string;
      md: string;
      text: string;
    };
  }
}
