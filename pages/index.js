import Head from "next/head";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NavBar from "../components/Navigation-bar";
import theme from "../src/theme";
import { Grid } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundImage: "linear-gradient(135deg, black, white)",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <NavBar home={false} middle="true">
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Digital Nudges</title>
          </Head>
          <Grid
            spacing={1}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Fade in="true" {...{ timeout: 5000 }}>
                <Typography style={{ fontSize: "6rem" }} variant="h1">
                  Digital
                </Typography>
              </Fade>
              <Fade
                in="true"
                {...{ timeout: 5000 }}
                style={{ transitionDelay: "500ms" }}
              >
                <Typography
                  style={{ fontSize: "6rem" }}
                  variant="h1"
                  color="secondary"
                >
                  Nudges
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs>
              <Fade
                in="true"
                {...{ timeout: 5000 }}
                style={{ transitionDelay: "1500ms" }}
              >
                <Typography variant="h4">
                  Entdecke neue Gestaltungsmöglichkeiten
                  <Link href="/getting-started">
                    <Button style={{ marginTop: 16 }} variant="outlined">
                      Getting Started
                    </Button>
                  </Link>
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item></Grid>
          </Grid>
          {/*<div className={classes.blackSquare}></div>*/}
        </ThemeProvider>
      </div>{" "}
    </NavBar>
  );
}
