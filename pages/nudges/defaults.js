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
}));

export default function GettingStarted() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "Vordefinniertespasswort",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Head>
        <title>Defaults</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Typography variant="h5">Defaults</Typography>

      <Typography variant="body1" color="initial">
        Automatisch Passwörter vorschlagen als Default
      </Typography>
      {/** Example Passwörter */}
      <Example>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Example>
      <Typography variant="body1" color="initial">
        Dies ist nur ein Umsetzungsbeispiel, der keinen Sicherheitsmasnahmen
        Entspricht. Für eigene Implementierung in öffentlichen oder internen
        Applikationen folgen sie bitte Sicherheitsmaßnahmen.
      </Typography>
    </div>
  );
}
