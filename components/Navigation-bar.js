import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextareaAutosize } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import theme from "../src/theme";
import styles from "./backdropFilter.module.css";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "black",
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "black",
    fontSize: "1rem",
  },
  a: {
    color: "black",
    fontSize: "1rem",
  },
  menuButton: {
    //marginRight: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    marginLeft: theme.spacing(0.01),
    flex: 0,
    padding: 0,
    /* //was for hiding the nav bar three lines button
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },*/
    justifyContent: "left",
  },
  menuIcon: { fontSize: 25 },
  menuButtonDiv: {
    flex: 1,
  },
  titleDiv: {
    flex: 2,
    textAlign: "center",
  },
  titleDigital: {
    color: "white",
    display: "inline-block",
    textAlign: "right",
  },
  titleNudges: { display: "inline-block" },
  flexHack: { flex: 1, alignSelf: "right" },
  toolbar2: {
    background: "black",
    flexGrow: 1,
    justifyContent: "center",

    minHeight: 48,
    [theme.breakpoints.up("sm")]: {
      minHeight: 56,
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavigationBar(props) {
  const { window } = props;
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
    <Link href={href} as={hrefAs} prefetch>
      <a className={className} onClick={handleDrawerToggle}>
        {children}
      </a>
    </Link>
  );

  const drawer = (
    <div className={classes.drawer}>
      <List>
        <ListItem component={ButtonLink} className={classes.a} href="/index">
          Home
        </ListItem>
        <Divider variant="middle" />

        <ListItem
          component={ButtonLink}
          href="/getting-started"
          className={classes.a}
        >
          Getting started
        </ListItem>

        <ListItem
          component={ButtonLink}
          href="/design-cycle"
          className={classes.a}
        >
          Design Cycle
        </ListItem>
        <ListItem component={ButtonLink} href="/biases" className={classes.a}>
          Biases
        </ListItem>

        {/* Home, Getting Started are not in separate list, tahts why Cycle and Nudges have bigger space between */}

        <ListItem component={ButtonLink} href="/nudges" className={classes.a}>
          Nudges
        </ListItem>
        <ListItem
          component={ButtonLink}
          href="/nudges/defaults"
          className={classes.nested}
        >
          Defaults
        </ListItem>
        <ListItem
          component={ButtonLink}
          href="/nudges/positioning"
          className={classes.nested}
        >
          Positioning
        </ListItem>
        <ListItem
          component={ButtonLink}
          href="/nudges/adding-inferior-alternatives"
          className={classes.nested}
        >
          Adding Inferior Alternatives
        </ListItem>
        <ListItem
          component={ButtonLink}
          href="/nudges/visualisation"
          className={classes.nested}
        >
          Visualisation
        </ListItem>
        <ListItem
          component={ButtonLink}
          href="/nudges/make-ressources-scarce"
          className={classes.nested}
        >
          Make Ressources Scarce
        </ListItem>

        <ListItem component={ButtonLink} href="/author" className={classes.a}>
          Author
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* md oder lg?*/}
        <Container
          maxWidth={props.home ? "xl" : "md"}
          styles={{ background: "white" }}
        >
          {props.middle && props.home == "true" ? (
            ""
          ) : (
            <HideOnScroll {...props}>
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar2}>
                  <div className={classes.menuButtonDiv}>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      className={classes.menuButton}
                    >
                      <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                  </div>
                  <div className={classes.titleDiv}>
                    <Link href="/index">
                      <a className={classes.a}>
                        <Typography
                          className={classes.titleDigital}
                          variant="h5"
                          noWrap
                        >
                          Digital
                        </Typography>
                        <Typography
                          className={classes.titleNudges}
                          variant="h5"
                          noWrap
                          color="secondary"
                        >
                          Nudges
                        </Typography>
                      </a>
                    </Link>
                  </div>
                  <div className={classes.flexHack}></div>
                </Toolbar>
              </AppBar>
            </HideOnScroll>
          )}
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            {/*
        <Hidden xlUp implementation="css">*/}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
            {/*</Hidden> */}

            {/* was for the left nav bar whole time showed
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        */}
          </nav>
          <main
            className={styles.container}
            style={
              props.middle == "true"
                ? {
                    padding: 16,
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    /* bring your own prefixes */
                    transform: "translate(-50%, -50%)",
                  }
                : { padding: 16 }
            }
          >
            {props.middle == "true" ? "" : <div className={classes.toolbar} />}
            {props.children}
          </main>
        </Container>
      </ThemeProvider>
    </div>
  );
}
