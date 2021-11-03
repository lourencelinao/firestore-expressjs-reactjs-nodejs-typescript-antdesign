/* eslint-disable no-magic-numbers */
import { rem } from 'polished';

const colors = {
  primary: '#1F2933',

  // gray
  dark_45: '#F9F9F9',
  dark_50: '#E5E5E5',

  // cool grey
  primary_50: '#F5F7FA',
  primary_100: '#E4E7E5',
  primary_200: '#CBD2D9',
  primary_300: '#9AA5B1',
  primary_400: '#7B8794',
  primary_500: '#616E7C',
  primary_600: '#52606D',
  primary_700: '#3E4C59',
  primary_900: '#1F2933',

  success: '#28B025',
  error: '#EB5757',

  // background-color
  backgroundColor: '#F5F7FA',

  // extras
  white: '#FFFFFF',
};

const fontFamilies = {
  regular: "'Rubik', sans-serif",
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const fontSizes = {
  h1: rem('38px'),
  h2: rem('30px'),
  h3: rem('24px'),
  h4: rem('18px'),
  h5: rem('16px'),
  h6: rem('14px'),
  body1: rem('14px'),
  body2: rem('12px'),
  buttonSize: rem('14px'),
  caption: rem('12px'),
};

const shadows = {
  elevation1: '0px 2px 4px rgba(147, 156, 174, 0.24)',
  elevation2: '0px 4px 8px rgba(147, 156, 174, 0.24)',
  elevation3: '0px 8px 16px rgba(147, 156, 174, 0.24)',
  elevation4: '0 0 0 2px rgb(24 144 255 / 20%)',
};

const extras = {
  maxWidth: '1200px',
};

const defaultTheme = {
  colors,
  extras,
  fontFamilies,
  fontSizes,
  fontWeights,
  shadows,
};

export default defaultTheme;
