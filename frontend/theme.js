// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61', // Your primary color
    },
    secondary: {
      main: '#4caf50', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;

