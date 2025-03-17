import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue } from "@mui/material/colors";

let theme = createTheme({
  palette: {    
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: blue[500],
    },
  },
});

theme = responsiveFontSizes(theme)

export default theme;