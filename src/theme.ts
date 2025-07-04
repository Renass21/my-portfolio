import { createTheme, responsiveFontSizes } from "@mui/material";
// @ts-expect-error: No type definitions for this font package
import '@fontsource/bungee-outline';
// @ts-expect-error: No type definitions for this font package
import '@fontsource/bungee-shade'
// @ts-expect-error: No type definitions for this font package
import '@fontsource/monofett';
// @ts-expect-error: No type definitions for this font package
import '@fontsource/bungee-inline';

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
      '"Bungee Inline"',
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
     body1: {
      fontFamily: '"Bungee Inline", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 300,
     },
     body2: {
      fontFamily: '"Bungee Inline", sans-serif',
      fontSize: '1rem',
      fontWeight: 200,
     },
     button: {
      fontFamily: '"Bungee Inline", sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
     }
  },
});

theme = responsiveFontSizes(theme)

export default theme;