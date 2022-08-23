import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions = {
  palette: {
    type: 'dark',
    mode: 'dark',
    primary: {
      main: '#000000',
      light: '#dfdfec',
      dark: '#e2e3e8',
    },
    secondary: {
      main: '#c62828',
    },
    background: {
      default: '#010102',
    },
    error: {
      main: '#ff1200',
    },
    warning: {
      main: '#eaa43d',
    },
    info: {
      main: '#65b8ff',
    },
    success: {
      main: '#4bc54e',
    },
    text: {
      primary: '#ffffff',
    },
  },
};

const theme=createTheme(themeOptions);
export default theme