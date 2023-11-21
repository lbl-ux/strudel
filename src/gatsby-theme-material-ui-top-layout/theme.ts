import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#0143CF',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#D6B5FF'
      },
      info: {
        main: '#180333'
      },
      success: {
        main: '#0143CF'
      },
      warning: {
        main: '#D6B5FF'
      },
      error: {
        main: '#FF4D4D'
      }
    },
    components: {
      // Name of the component
      MuiButtonBase: {
        defaultProps: {
          // The props to change the default for.
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
});

export default theme;