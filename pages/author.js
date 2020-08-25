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
import Avatar from "@material-ui/core/Avatar";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();
  return (
    <NavBar middle="true">
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Author</title>
          </Head>

          <Grid
            spacing={1}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Avatar
                alt="Avatar"
                src="/avatar.jpeg"
                style={{ height: 64, width: 64, marginRight: 16 }}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h6">Adam Vankat</Typography>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <a
                      href="https://github.com/vankatadam"
                      style={{ color: "black" }}
                    >
                      <GitHubIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.linkedin.com/in/adam-vankat-458774150"
                      style={{ color: "black" }}
                    >
                      <LinkedInIcon />
                    </a>
                  </Grid>
                  <Grid item>
                    <a
                      href="https://www.xing.com/profile/Adam_Vankat"
                      style={{ color: "black" }}
                    >
                      <img
                        src="/xing.svg"
                        height="22"
                        style={{ filter: "brightness(0) saturate(100%)" }}
                      />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>{" "}
    </NavBar>
  );
}
