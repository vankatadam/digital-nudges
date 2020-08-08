import Head from "next/head";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavBar from "../components/Navigation-bar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: purple[500],
    },
    third: {
      main: "#FFFFFF",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(135deg, black, white)",
  },
  blackSquare: {
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    top: 0,
    width: 300,
    height: 300,
    zIndex: -1,
  },
  digital: {
    color: "#ffffff",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <NavBar home={true}>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Digital Nudges</title>
          </Head>
          {/*<div className={classes.blackSquare}></div>*/}
          <Typography variant="h3" className={classes.digital}>
            Digital
          </Typography>
          <Typography variant="h3" color="secondary">
            Nudges
          </Typography>
        </ThemeProvider>
      </div>{" "}
    </NavBar>
  );
}
