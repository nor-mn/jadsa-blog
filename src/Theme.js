import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33eb91",
      main: "#00e676",
      dark: "#00a152",
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
