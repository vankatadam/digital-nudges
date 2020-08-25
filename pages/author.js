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
          <Typography variant="h3" style={{}}>
            Author:
          </Typography>
          <Grid
            spacing={1}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs>
              <Avatar alt="Avatar" src="/avatar.jpg">
                Mooin
              </Avatar>
            </Grid>
            <Grid item xs>
              Moinssssssssssssssssssssssssssssssss
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>{" "}
    </NavBar>
  );
}
