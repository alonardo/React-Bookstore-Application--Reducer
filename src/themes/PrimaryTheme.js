
import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    mode: 'light',
    primary: {
      main: '#434ee0',
    },
    secondary: {
      main: '#4ff757',
    },
    background: {
      default: '#a3a9ff',
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
  },
};

const theme=createTheme(themeOptions);
export default theme