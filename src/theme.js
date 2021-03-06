import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { deepPurple } from "@material-ui/core/colors";
import { green } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: deepPurple[400],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "transparent",
    },
    "#global": {
      body: {
        minHeight: "100%",
        background: "url(public/background.jpg) no-repeat center center fixed",
        webkitBackgroundSize: "cover",
        backgroundSize: "cover",
      },
    },
  },
});

export default theme;
