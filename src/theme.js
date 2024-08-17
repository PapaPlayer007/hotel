import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    secondary: {
      main: '#f48fb1', // Pink
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d', // Slightly lighter dark background
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#b0bec5', // Light grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default darkTheme;
