import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "18px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "grey",
        },
      },
    },
  },
});

export default theme;
