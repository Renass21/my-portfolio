import { createTheme, responsiveFontSizes } from "@mui/material";

import '@fontsource/bungee-outline';
import '@fontsource/bungee-shade'
import '@fontsource/monofett';

let theme = createTheme({
  palette: {    
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    
    fontFamily: [
      '"Bungee Shade"',
      '"Bungee Outline"',
      'cursive',
      'Roboto',
      'sans-serif'
    ].join(','),

    h2: {
      fontFamily: '"Bungee Shade", cursive',
      fontSize: '3.2rem',
      fontWeight: 400,
    },
    // Se quisesse que outra variante usasse Bungee Outline por padrão:
    h3: {
      fontFamily: '"Monofett", cursive',
      fontSize: '2.7rem',
      fontWeight: 300,
     },
  },
});

theme = responsiveFontSizes(theme)

export default theme;