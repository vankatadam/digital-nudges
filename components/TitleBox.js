import theme from "../src/theme";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    [theme.breakpoints.up("sm")]: {
      border: "2px solid black",
    },
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
    boxShadow: "3px 3px 8px 3px rgba(0, 0, 0, 0.1)",
  },
  title: {
    flex: 1,
    alignSelf: "center",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  divider: {
    width: 1,
    [theme.breakpoints.up("sm")]: {
      width: 1,
    },
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    marginRight: 4,
  },
}));

export default function TitleBox(props) {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              variant={matches ? "h3" : "h4"}
              color="secondary"
              className={classes.title}
            >
              {props.title}
            </Typography>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid item>
            {/*props.effort <= 5 ? "1" : props.effort <= 10 ? "2" : "3"*/}

            {/* Aufwand*/}
            <Grid item>
              <Grid item>
                <Typography style={{ display: "inline-block", marginRight: 4 }}>
                  Aufwand:
                </Typography>
                {props.effort <= 1 && (
                  <>
                    <Typography
                      style={{
                        color: "green",
                        display: "inline-block",
                      }}
                    >
                      {"< 1 Std"}
                    </Typography>
                  </>
                )}
                {props.effort <= 2 && props.effort > 1 && (
                  <>
                    <Typography
                      style={{ color: "orange", display: "inline-block" }}
                    >
                      {"1 - 2 Std"}
                    </Typography>
                  </>
                )}
                {props.effort > 2 && (
                  <>
                    <Typography
                      style={{ color: "red", display: "inline-block" }}
                    >
                      {"> 3 Std"}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>

            {/* Effektivität*/}
            <Grid item>
              <Grid
                item
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <Typography style={{ display: "inline-block", marginRight: 4 }}>
                  Effektivität:
                </Typography>
                {props.effectiveness <= 25 && (
                  <>
                    <Typography
                      style={{
                        color: "red",
                        display: "inline-block",
                      }}
                    >
                      {"Gering"}
                    </Typography>
                  </>
                )}
                {props.effectiveness <= 50 && props.effectiveness > 25 && (
                  <>
                    <Typography
                      style={{ color: "orange", display: "inline-block" }}
                    >
                      {"Mittel"}
                    </Typography>
                  </>
                )}
                {props.effectiveness > 50 && (
                  <>
                    <Typography
                      style={{ color: "green", display: "inline-block" }}
                    >
                      {"Hoch"}
                    </Typography>
                  </>
                )}
              </Grid>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography>
                  Durchschnittlich: {props.effectiveness}%
                </Typography>
              </Popover>
            </Grid>
            {/* Effizienz*/}
            <Grid item>
              <Grid item>
                <Typography style={{ display: "inline-block", marginRight: 4 }}>
                  Effizienz:
                </Typography>
                {props.efficiency <= 1 && (
                  <>
                    <Typography
                      style={{
                        color: "red",
                        display: "inline-block",
                      }}
                    >
                      {"Gering"}
                    </Typography>
                  </>
                )}
                {props.efficiency <= 2 && props.efficiency > 1 && (
                  <>
                    <Typography
                      style={{ color: "orange", display: "inline-block" }}
                    >
                      {"Mittel"}
                    </Typography>
                  </>
                )}
                {props.efficiency > 2 && (
                  <>
                    <Typography
                      style={{ color: "green", display: "inline-block" }}
                    >
                      {"Hoch"}
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
