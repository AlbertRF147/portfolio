// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  typography: {
    body1: {
      fontSize: '1.3rem',
      '@media (max-width: 600px)': {
        fontSize: '1.1rem'
      }
    },
    h4: {
      '@media (max-width: 600px)': {
        fontSize: '2rem'
      }
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#FF1053',
      light: '#FF826B',
      dark: '#B24531',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2196F3',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#B2B2B2',
      contrastText: '#FF1053',
    },
    background: {
      default: '#FFA400',
      paper: '#FAFAFF',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00171F',
      disabled: '#777777',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#383838',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
