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

// Checkbox Example
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// Checkbox Example End

//Slider Example
const marks = [
  {
    value: 10,
    label: "10€",
  },
  {
    value: 50,
    label: "50€",
  },
  {
    value: 75,
    label: "75€",
  },
  {
    value: 100,
    label: "100€",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

//Slider example End

export default function GettingStarted() {
  // Checkbox Example
  const [checked, setChecked] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChangeCheckbox = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };
  // Checkbox Example End

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "Vordefinniertespasswort",
    password2: "Vordefinniertespasswort",
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
    <NavBar>
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Defaults</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <TitleBox
            title={"Defaults"}
            effort={1}
            effectiveness={50}
            efficiency={1}
          ></TitleBox>
          {/** 1 Theoretische Erklärung */}
          {/** auf K 3.4.1 nehmen + von */}
          <Typography gutterBottom>
            {" "}
            Die gängigste Form von Nudges, die in vielen verschiedenen
            Bereichen, wie in der Verhaltensökonomik [vgl. 1], Psychologie [vgl.
            2], Jura [vgl. 3] oder Medizin [vgl. 4], bereits erforscht und
            verwendet wird, nennt sich „Defaults“. In der Psychologie wird sie
            auch unter den Begriff Status Quo [vgl. 2] gefasst. Dieser Nudge
            funktioniert dank der Tatsache, dass Menschen den Weg des
            niedrigsten Widerstandes wählen [vgl. 5]. Der Weg des niedrigsten
            Widerstandes ist in einer Entscheidungsumgebung die Option, die
            gewählt wird, wenn sich der Nutzer entscheidet nichts zu wählen und
            die Wahl dem Entscheidungsarchitekten überlässt [vgl. 6]. Dies
            können verschiedene Opt-In oder Opt-Out Entscheidungen bei der Wahl
            zwischen wenigen Alternativen [vgl. 4], aber auch Empfehlungen bei
            einer Wahl von vielen Alternativen sein [vgl. 2]. Durch empirische
            Untersuchungen wurde bewiesen, dass sich bei einer Wahl zwischen
            mehreren Alternativen bei einer steigenden Anzahl an Alternativen
            der „Nudging“-Effekt verstärkt und somit auch die Tendenz zu einer
            „Default“-Entscheidung [vgl. 2]. Die Stärke von „Defaults“ liegt in
            der Unvermeidbarkeit [vgl. 6]. Jeder Entscheidungsarchitekt muss
            sich somit die Frage stellen, wie das Ergebnis aussehen wird, wenn
            sich der Nutzer entscheidet nichts zu tun [vgl. 6].{" "}
          </Typography>
          <Typography gutterBottom>
            Da „Defaults“ mit gängigen Web-Elementen wie „Radio Buttons,
            „Checkboxen“, Schieberegeln, oder vordefinierten Eingabe-Feldern
            umgesetzt werden können, kann dieser Nudge auf fast jede Website,
            die eine Nutzer-Eingabe benötigt, angewendet werden. Es gibt bereits
            viele empirisch bewiesene Forschungen und Beispiele, die diesen
            Nudge Mechanismus bestätigen [vgl. 3, 4, vgl. 7–11]. Die Beispiele,
            die auch im Web umgesetzt werden können, beziehen sich auf
            Voreinstellungen von UI Komponenten, bzw. eine Vorauswahl von
            Alternativen, die ausgewählt werden können [vgl. 12]. Für eine
            Umsetzung von Opt-In oder Opt-Out Politiken eignen sich „Checkboxen“
            und für eine Vorauswahl von mehreren Elementen eignen sich „Radio
            Buttons“ sowie Schieberegeln [vgl. 12]. Um komplexere Entscheidung
            zu unterstützen, wie Passwortauswahl, eignen sich vordefinierbare
            Text-Felder [vgl. 9].{" "}
          </Typography>
          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            Da Defaults auf mehreren verschiedenen Wegen und mit verschiedenen
            UI Elementen umgesetzt werden können, werden anschließend mehrere
            Beispiele aufgeführt:{" "}
          </Typography>
          <Typography gutterBottom>
            Das <BoldTypo>erste</BoldTypo> Beispiel wird sich mit dem UI Element
            „Checkbox“ beschäftigen. Dieses Beispiel orientiert sich an Mobile
            Square App, die dank vorausgewähltem Trinkgeld (Opt-Out) bei einer
            Bezahlmethode, das gegebene Trinkgeld innerhalb eines Jahres
            verdoppelt hat [vgl. 13]. Solch eine Opt-Out Methode wird
            Beispielweise auch bei Newslettern bei den meisten Webseiten mit
            Newslettern angewendet. Somit wird dieses Beispiel als eine
            vorangekreuzte „Checkbox“ dargestellt.{" "}
          </Typography>
          <Example link="https://codesandbox.io/s/defaults1checkboxen-0x8se?file=/index.js">
            {" "}
            <Typography variant={"h6"}>Ihr Essen kostet insgesamt: </Typography>
            <Typography display="inline">Netto: </Typography>
            <Typography display="inline">10€</Typography>
            <br />
            <Typography display="inline">MwST. (19%): </Typography>
            <Typography display="inline">11,9€</Typography>
            <br />
            <Typography>
              Insgesamt:{" "}
              {checked.checkedA ? (
                <BoldTypo display="inline" className={classes.typoGreen}>
                  13,09€
                </BoldTypo>
              ) : (
                <BoldTypo display="inline">11,9€</BoldTypo>
              )}
            </Typography>
            <Typography display="inline">Tipp? (10%): </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.checkedA}
                  onChange={handleChangeCheckbox}
                  name="checkedA"
                  color="primary"
                />
              }
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={checked.checkedA}
                  onChange={handleChangeCheckbox}
                  name="checkedA"
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.checkedA}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  name="checkedA"
                  onChange={handleChangeCheckbox}
                  style={{ color: red[600] }}
                />
              }
            />
            <Button style={{ display: "block" }} variant="contained">
              Bezahlen
            </Button>
          </Example>
          https://material-ui.com/components/checkboxes/ ; Verschiedene Farben,
          da es Emotionen Wecken könnte (Visualisation, Welt von Social Norms)
          <Typography gutterBottom>
            Das zweite Beispiel bezieht sich auf Schieberegeln und
            vordefinierbare Textfelder. Wie [6] in deren Beispiel mit Spenden
            erklären (siehe Anchoring ={">"} Link auf Biases??), beziehen sich
            Menschen bei einer Entscheidung auf einen initialen Wert und passen
            diesen nach deren Urteil an [vgl. 6]. Somit wird mit einer
            Voreinstellung von Schieberegeln oder vordefiniertem Text in
            Texteingabe-Feldern die Chance erhöht, dass der Nutzer auch bei
            einem ähnlichen Wert landet. Somit können z.B. Spenden erhöht
            werden, in dem ein höherer Wert eingestellt wird [vgl. 6].{" "}
          </Typography>
          <Example>
            {" "}
            <Typography variant={"h6"}>
              Wie viel möchten Sie spenden?
              <MoodIcon
                style={{ marginLeft: "6px", color: "green" }}
              ></MoodIcon>
            </Typography>
            <Slider
              defaultValue={75}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              valueLabelDisplay="auto"
              marks={marks}
              className={classes.inputsMargin}
            />
            <Button style={{ display: "block" }} variant="contained">
              Spenden
            </Button>
          </Example>
          <Typography gutterBottom style={{ marginTop: 12, marginBottom: 12 }}>
            Alternative mit einem Textfeld:
          </Typography>
          <Example>
            {" "}
            <Typography variant={"h6"}>
              Wie viel möchten Sie spenden?
              <MoodIcon
                style={{ marginLeft: "6px", color: "green" }}
              ></MoodIcon>
              <FormControl className={classes.inputsMargin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Betrag
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={"75"}
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
              </FormControl>
            </Typography>
            <Button style={{ display: "block" }} variant="contained">
              Spenden
            </Button>
          </Example>
          https://material-ui.com/components/slider/;
          https://material-ui.com/components/text-fields/;
          https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03;
          der letzte Link sagt, dass man den Filled variant, oder OUtlined
          benutzen soll (research); die Spannweite ist nur von 0-100 als
          default, sonst muss man selber die Werte berechnen. Je mehr man fragt,
          desto mehr bekommt man in der Regel (THaler?)
          <Typography gutterBottom>
            Das dritte Beispiel bezieht sich auch auf vordefinierte
            Text-Eingaben, diesmal jedoch im Kontext von Passwort Management.
            Dieses Beispiel wurde von Studien von [9] inspiriert, indem als
            „Default“ Einstellung ein automatisch generiertes Passwort bei der
            Erstellung eines Kontos vorlag [vgl. 9].{" "}
          </Typography>
          <Example>
            <Typography variant={"h6"}>
              Erstellen Sie bitte ein Passwort
            </Typography>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Passwort
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
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Passwort bitte wiederholen
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
          <Typography gutterBottom>
            Das letzte Beispiel bezieht sich auf Entscheidungen mit mehreren
            Antwortmöglichkeiten. Es funktioniert ähnlich wie das erste
            Beispiel. Eine oder mehrere Antworten, in Form von „Checkboxen“ oder
            „Radio Buttons“, werden vorausgewählt und somit wird die Chance
            erhöht, dass der Nutzer diese auch tatsächlich wählt [vgl. 14].{" "}
          </Typography>{" "}
          <Typography gutterBottom>
            Alle erwähnten Beispiele von Defaults werden mit dem
            Standart-UI-Framework dieser Guideline, Material UI, umgesetzt
            werden, da es alle benötigte Elemente und deren Voreinstellung
            unterstützt [vgl. 15–18].{" "}
          </Typography>{" "}
          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Anschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [19]:
            Was ist eine angemessene Standardauswahl oder ein angemessener Wert
            und warum? Wie einfach können die Nutzer aus der Entscheidung
            austreten (opt-out)? Auf unethische und gesetzwidrige Richtlinien
            achten.{" "}
          </Typography>
          {/** 2 Beispiele */}
          <Typography variant="body1" color="secondary">
            Automatisch Passwörter vorschlagen als Default
          </Typography>
          {/** Example Passwörter */}
          {/** 3 Design Empfehlungen, Literatur..  */}
          <Typography variant="body1" color="initial">
            Dies ist nur ein Umsetzungsbeispiel, der keinen Sicherheitsmasnahmen
            Entspricht. Für eigene Implementierung in öffentlichen oder internen
            Applikationen folgen sie bitte Sicherheitsmaßnahmen.
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
