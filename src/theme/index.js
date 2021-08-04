import { typographyVariants } from './typographyVariants';
import { breakpoints } from './breakpoints';

export const colors = {
  modes: {
    light: {
      title: 'light',

      primary: {
        color: '#D7385E',
        contrastText: '#fff',
      },

      secondary: {
        color: '#FB7B6B',
        contrastText: '#fff',
      },

      background: {
        color: '#fff',
        contrastText: '#070C0E',
      },

      borders: {
        color: '#F1F1F1',
      },

      tertiary: {
        color: '#88989E',
        mainColor: '#070C0E',
      },

      error: {
        color: '#ED4032',

      },

      warning: {
        color: '#F77228',
      },
    },

    dark: {
      title: 'dark',

      primary: {
        color: '#F27895',
        contrastText: '#fff',
      },

      secondary: {
        color: '#FFA59A',
        contrastText: '#fff',
      },

      background: {
        color: '#030506',
        contrastText: '#FFFFFF',
      },

      borders: {
        color: '#181F22',
      },

      tertiary: {
        color: '#FFFFFF',
        mainColor: '#D5D5D5',
      },

      error: {
        color: '#EB5C50',

      },

      warning: {
        color: '#FB9E6B',
      },
    },
  },
};

export default {
  // colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: '\'Rubik\', sans-serif',
  transition: '200ms ease-in-out',
};
