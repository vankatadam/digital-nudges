import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Example from "../../components/Examples";
import NavBar from "../../components/Navigation-bar";
import theme from "../../src/theme";
import { ThemeProvider } from "@material-ui/styles";
import TitleBox from "../../components/TitleBox";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import MoodIcon from "@material-ui/icons/Mood";
import Slider from "@material-ui/core/Slider";

//Quellen:
//Passwort:
//https://material-ui.com/components/text-fields/
//https://codesandbox.io/s/q3xj3?file=/demo.js:1319-1512
// not used, maybe later :https://www.npmjs.com/package/react-password-with-generator

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "30ch",
  },
  typoGreen: {
    fontWeight: 500,
    color: green[600],
  },
  inputsMargin: {
    marginTop: 18,
    marginBottom: 32,
    display: "block",
  },
}));

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography {...props} />);

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <NavBar>
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Make Ressources Scarce</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <TitleBox
            title={"Make Ressources Scarce"}
            effort={1}
            effectiveness={53}
            efficiency={1}
          ></TitleBox>

          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom></Typography>

          <hr />
          <Typography variant={"h4"}>Referencen</Typography>
          <hr />
          <Typography></Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
