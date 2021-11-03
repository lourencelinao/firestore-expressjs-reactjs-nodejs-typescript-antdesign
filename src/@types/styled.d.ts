import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      dark_45: string;
      dark_50: string;
      primary_50: string;
      primary_100: string;
      primary_200: string;
      primary_300: string;
      primary_400: string;
      primary_500: string;
      primary_600: string;
      primary_700: string;
      primary_900: string;
      success: string;
      error: string;
      backgroundColor: string;
      white: string;
    };
    fontFamilies: {
      regular: string;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    fontSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      body1: string;
      body2: string;
      buttonSize: string;
      caption: string;
    };
    shadows: {
      elevation1: string;
      elevation2: string;
      elevation3: string;
      elevation4: string;
    };
    extras: {
      maxWidth: string;
    };
  }
}
