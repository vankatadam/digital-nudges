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
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { deepPurple } from "@material-ui/core/colors";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
  table: {
    minWidth: 650,
  },
}));

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography component="span" {...props} />);

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

//Efficiency

function createData(name, source, effectivity) {
  return { name, source, effectivity };
}

const rows = [
  createData(
    "Organ-Spenderraten",
    "Johnson und Goldstein 2003, S. 1338–1339",
    "55,5%"
  ),
  createData("Datenschutzeinstellungen", "Bellman et al. 2001, S. 26", "48%"),
  createData("Ersparnisse", "Madrian und Shea 2001, S. 1160", "132%"),
  createData(
    "Installierung von Smart Grids",
    "Ölander und Thøgersen 2014, S. 351",
    "33%"
  ),
  createData("Gesunde Ernährung", "Lee et al. 2011, S. 328–332", "157%"),
  createData("", "Durchschnittliche Effizienz: ", "85,1%"),
];

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

  //Radio Buttons

  const [valueRadio, setValueRadio] = React.useState("premium");

  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
  };

  //For Text Input
  const [valuesInput, setValuesInput] = React.useState({
    amount: "75",
  });

  const handleChangeInput = (prop) => (event) => {
    setValuesInput({ ...valuesInput, [prop]: event.target.value });
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
            effectiveness={85.1}
            efficiency={3}
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
            die Wahl dem Entscheidungsarchitekten überlässt [vgl. 6]. Wie im
            Kapitel 1.1 in gezeigten Beispielen erwähnt, können dies
            verschiedene Opt-In oder Opt-Out Entscheidungen bei der Wahl
            zwischen wenigen Alternativen [vgl. 4] aber auch Empfehlungen bei
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
            Beispiele aufgeführt{" "}
          </Typography>
          <Typography gutterBottom>
            Das erste Beispiel wird sich mit dem UI Element „Checkbox“
            beschäftigen. Dieses Beispiel orientiert sich an der Mobile Square
            App, die dank vorausgewähltem Trinkgeld (Opt-Out) bei einer
            Bezahlmethode, das gegebene Trinkgeld innerhalb eines Jahres
            verdoppelt hat [vgl. 13]. Solch eine Opt-Out Methode wird
            beispielweise auch bei Newslettern bei den meisten Webseiten mit
            Newslettern angewendet. Somit wird dieses Beispiel als eine
            vorangekreuzte „Checkbox“ dargestellt. Mit Material UI können
            „Checkboxen“ leicht verändert und voreingestellt werden [vgl. 14].
            Für eine Voreinstellung gibt es ein Eigenschaftsfeld mit dem Namen
            „checked“, das auf „true“ gesetzt werden kann. Mit dem Feld „color“
            können Farben verändert werden. Diese Farben sind jedoch nur zwei
            grundlegende Farben des gewählten Themas, plus ein paar
            vordefinierten Farben, wie z.B. rot für den Wert „error“. Andere
            Farben müssen mit normalem CSS oder mit „withStyles“ [vgl. 15]
            geändert werden. „WithStyles“ dient in Material-UI, unter anderen,
            zu einer Veränderung der grundlegenden Eigenschaften der
            Komponenten, wie in diesem Fall „Checkboxen“. Somit können auch
            unterschiedliche Farben für unterschiedliche Zustände der
            „Checkboxen“ (angekreuzt/nicht angekreuzt) definiert werden. In dem
            unten gezeigten Beispiel sind dies zwei unterschiedliche Farbtöne
            von grün für angekreuzte und nicht angekreuzte Checkbox. Eine
            weitere Variante von Veränderung der Checkboxen ist eine andere
            Ikone. Die Ikone kann über das Eigenschaftsfeld „icon“ und
            „checkedIcon“ verändert werden [vgl. 16], in dem eine
            Ikonen-Komponente, die auch leicht von Material UI importiert werden
            kann [vgl. 17], an diese Eigenschaftsfelder übergegeben wird. Mit
            solchen verstellbaren „Checkboxen“, wie beispielsweise mit einem
            Herz oder Farbe, kann der Effekt von „Defaults“ verstärkt werden .{" "}
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
          <Typography gutterBottom>
            Das zweite Beispiel bezieht sich auf Schieberegeln und
            vordefinierbare Textfelder. Wie 6 in deren Beispiel mit Spenden
            erklären, beziehen sich Menschen bei einer Entscheidung auf einen
            initialen Wert und passen diesen nach deren Urteil an [vgl. 6].
            Somit wird mit einer Voreinstellung von Schieberegeln oder
            vordefiniertem Text in Texteingabe-Feldern die Chance erhöht, dass
            der Nutzer auch bei einem ähnlichen Wert landet. Somit können z.B.
            Spenden erhöht werden, in dem ein höherer Wert eingestellt wird
            [vgl. 6]. Material-UI bietet für diese Beispiele (siehe Beispiele
            unten) veränderbare Schieberegeln, sowie Eingabefelder [vgl. 18,
            19]. Es gibt ein breites Spektrum an verschiedenen Schieberegeln zur
            Auswahl. Um den Effekt von „Anchoring“ zu verstärken, wurde die
            Variante mit vordefinierbaren Checkpoints gewählt . Das gleiche
            Beispiel wurde mit vordefinierbaren Eingabefeldern umgesetzt, sodass
            zuerst die Eingabe von dem Nutzer gelöscht werden muss, damit ein
            neuer Wert eingegeben werden kann . Somit wird dem Nutzer ein Anker
            gesetzt und die Wahrscheinlichkeit erhöht, dass sein neuer Wert nah
            an den gewählten vordefinierten Wert liegt.{" "}
          </Typography>
          <Example link="https://codesandbox.io/s/defaults2slider-5wg65?file=/index.js">
            {" "}
            <Typography variant={"h6"}>
              Wie viel möchten Sie spenden?
              <MoodIcon
                style={{ marginLeft: "6px", color: deepPurple[400] }}
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
          <Example link="https://codesandbox.io/s/defaults3customfield-27zu0?file=/index.js">
            {" "}
            <Typography variant={"h6"}>
              Wie viel möchten Sie spenden?
              <MoodIcon
                style={{ marginLeft: "6px", color: deepPurple[400] }}
              ></MoodIcon>
              <FormControl className={classes.inputsMargin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Betrag
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  value={valuesInput.amount}
                  onChange={handleChangeInput("amount")}
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
          <Typography gutterBottom>
            Das dritte Beispiel bezieht sich auch auf vordefinierte
            Text-Eingaben, diesmal jedoch im Kontext von Passwort Management.
            Dieses Beispiel wurde von Studien von 9 inspiriert, indem als
            „Default“ Einstellung ein automatisch generiertes Passwort bei der
            Erstellung eines Kontos vorlag [vgl. 9]. Dies wird mit der gleichen
            Komponente „Input“ wie in der Abbildung 11 gelöst. An diese
            Komponente wird je nachdem, ob das Passwort gezeigt werden soll oder
            nicht, ein Wert (in React nennt man diese Werte „Properities“,
            abgekürzt mit „Props“) „text“ oder „password“ übergegeben.
            Zusätzliche muss zu diesem Feld eine Ikone erstellt werden, die beim
            Anklicken einen „Handler“ aufruft, der diese „Properity“ verändert.
            Das vordefinierte Passwort (sollte später in der Produktion nach
            Sicherheitsstandarts generiert werden) wird über ein „useState“ von
            React gespeichert und an die „Input“ Komponente übergeben, sodass
            ein Standardfeld vorliegt.{" "}
          </Typography>
          <Example link="https://codesandbox.io/s/great-currying-rjio2?file=/index.js">
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
            <Button
              style={{ display: "block", marginTop: "12px" }}
              variant="contained"
            >
              Passwort erstellen
            </Button>
          </Example>
          <Typography gutterBottom>
            Das letzte Beispiel bezieht sich auf Entscheidungen mit mehreren
            Antwortmöglichkeiten. Es funktioniert ähnlich wie das erste
            Beispiel. Eine Antwort, in Form von „Radio Buttons“, wird
            vorausgewählt und somit wird die Chance erhöht, dass der Nutzer
            diese auch tatsächlich wählt [vgl. 20]. Der Standartwert von
            Material UI Checkboxen kann über „useState“ und einem Handler
            eingestellt werden. Zusätzlich dazu können einstellbare Komponenten
            über die Felder „control“ und „label“ eingestellt werden [vgl. 21].
            Über das Feld „control“ können eigene Ikonen mit verschiedenen
            Farben für die „Checkboxen“ gewählt werden und über das Feld „label“
            können eigene Beschriftungen mit verschiedenen Fonts, Farben, etc.
            eingestellt werden (siehe Beispiel unten).{" "}
          </Typography>{" "}
          <Example link="https://codesandbox.io/s/defaults4checkbox-rtwrk?file=/index.js">
            <Typography variant={"h6"}>
              Wählen Sie das Abo, das Ihren Bedürfnissen am besten entspricht:
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="Abonnement"
                name="Abonnements"
                value={valueRadio}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="basis"
                  control={<Radio />}
                  label="Basis"
                />
                <FormControlLabel
                  value="premium"
                  control={<Radio />}
                  label={<BoldTypo color="secondary">Premium</BoldTypo>}
                />
                <FormControlLabel
                  value="standard"
                  control={<Radio />}
                  label="Standard"
                />
              </RadioGroup>
            </FormControl>
            <Button
              style={{ display: "block", marginTop: "12px" }}
              variant="contained"
            >
              Abo Wählen
            </Button>
          </Example>
          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Anschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [26]:
            Was ist eine angemessene Standardauswahl oder ein angemessener Wert
            und warum? Wie einfach können die Nutzer aus der Entscheidung
            austreten (opt-out)? Auf unethische und gesetzwidrige Richtlinien
            achten.{" "}
          </Typography>
          {/** 2 Beispiele */}
          <hr />
          <Typography variant={"h4"}>Effektivität</Typography>
          <hr />
          <TableContainer
            component={Paper}
            style={{ marginTop: 8, marginBottom: 8 }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Studien Art</TableCell>
                  <TableCell align="right">Quelle</TableCell>
                  <TableCell align="right">Effektivität</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.source}</TableCell>
                    <TableCell align="right">{row.effectivity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" color="initial" gutterBottom>
            Die Effektivität stellt bei „Defaults“-Studien die prozentuelle
            Erhöhung der Auswahlra-te von der gewünschten/gezielten Alternative
            im Vergleich zu der Auswahlrate ohne der Anwendung von diesem Nudge,
            dar. Beispielsweise war die Auswahlrate ohne Nudges bei der Studie
            von Ölander und Thøgersen 2014 60%, und die Auswahlrate mit Nudges,
            in diesem Fall ein Opt-out, war sie 80%. Somit war die Effektivität
            33,3%, da die Auswahlrate um 33,3% erhöht wurde. Die Effektivität
            der Studie von Johnson und Goldstein 2003 wurde als ein Durchschnitt
            deren beiden Untersuchungen, einem Online-Experiment und einer
            Analyse der realen Organ-Spenderraten zwischen 1991 und 2001 Daten,
            berechnet. Die Studien zeigen, dass „Default“ Nudge in vielen
            unterschiedlichen Kontexten mit vielen unterschiedlichen Ergebnissen
            angewendet werden kann. Trotzt den unter-schiedlichen Ergebnissen
            zeigt die durchschnittliche Effektivität, dass Default Nudges eine
            hohe Erfolgsrate aufweisen können und daher werden sie mit der
            durchschnittli-chen Effektivität von 85,1% in die Effizienzklasse
            hoch angeordnet.
          </Typography>
          <Typography>
            Der Aufwand von „Defaults“ liegt hauptsächlich in dem
            Planungsaufwand, da die Umsetzung von den tatsächlichen Beispielen
            sehr schnell erfolgen kann. Mit einer kurzen Einarbeitung in
            Material-UI, kann jedes einzelne Beispiel unter einer Stunde
            umgesetzt werden, da Material-UI genügend eigene ähnliche Beispiele
            mit Code-Umsetzungen bereitstellt. Daher kann deren Code-Umsetzung
            übernommen werden und in die eigene Umgebung mit Anpassungen
            integriert werden. Mit dem Aufwand unter eine Stunde werden
            „Defaults“ in die Kategorie niedrig eingeordnet. Da die Effektivität
            von „Defaults“ hoch ist und der Aufwand klein ist, werden „Defaults“
            in die Effizienzklasse hoch eingestuft.
          </Typography>
          <hr />
          <Typography variant={"h4"}>Referencen</Typography>
          <hr />
          <Typography gutterBottom>
            1. Cartwright E (2011) Behavioral economics. Routledge advanced
            texts in economics and finance, vol 16. Routledge, London, New York
            NY
          </Typography>
          <Typography gutterBottom>
            2. Kahneman D, Knetsch JL, Thaler RH (1991) Anomalies: The Endowment
            Effect, Loss Aversion, and Status Quo Bias. Journal of Economic
            Perspectives 5: 193–206. https://doi.org/10.1257/jep.5.1.193
          </Typography>
          <Typography gutterBottom>
            3. Barnet ER (1992) The Sound of Silence: Default Rules and
            Contractual Consent. Virginia Law Review 78: 821–911
          </Typography>
          <Typography gutterBottom>
            4. Johnson EJ, Goldstein D (2003) Medicine. Do defaults save lives?
            Science 302: 1338–1339. https://doi.org/10.1126/science.1091721
          </Typography>
          <Typography gutterBottom>
            5. Thaler RH, Sunstein CR, Balz JP (2013) Choice Architecture. In:
            Shafir E (ed) The Behavioral Foundations of Public Policy. Princeton
            University Press, Princeton, pp 428–439
          </Typography>
          <Typography gutterBottom>
            6. Thaler RH, Sunstein CR (2009) Nudge: Improving decisions about
            health, wealth, and happiness, Rev. and expanded ed., with a new
            afterword and a new chapter. Penguin, New York, NY
          </Typography>
          <Typography gutterBottom>
            7. Al-Ameen MN, Wright M, Scielzo S (2015) Towards Making Random
            Passwords Memorable. In: Kim J (ed) CHI 2015 crossings: CHI 2015 ;
            proceedings of the 33rd Annual CHI Conference on Human Factors in
            Computing Systems ; April 18 - 23, 2015, Seoul, Republic of Korea.
            ACM, New York, NY, pp 2315–2324
          </Typography>
          <Typography gutterBottom>
            8. Egebark J, Ekström M (2016) Can indifference make the world
            greener? Journal of Environmental Economics and Management 76: 1–13.
            https://doi.org/10.1016/j.jeem.2015.11.004
          </Typography>
          <Typography gutterBottom>
            9. Kankane S, DiRusso C, Buckley C (2018) Can We Nudge Users Toward
            Better Password Management? In: Mandryk R, Hancock M (eds) Extended
            abstracts of the 2018 CHI Conference on Human Factors in Computing
            Systems. ACM Press, Montreal, pp 1–6
          </Typography>
          <Typography gutterBottom>
            10. Lehmann BA, Chapman GB, Franssen FME et al. (2016) Changing the
            default to promote influenza vaccination among health care workers.
            Vaccine 34: 1389–1392. https://doi.org/10.1016/j.vaccine.2016.01.046
          </Typography>
          <Typography gutterBottom>
            11. Wu L, Cirimele J, Bassen J et al. (2013) Head-mounted and
            multi-surface displays support emergency medical teams. In: Bruckman
            A (ed) Proceedings of the 2013 conference on Computer supported
            cooperative work companion. ACM, New York, NY, p 279
          </Typography>
          <Typography gutterBottom>
            12. Weinmann M, Schneider C, vom Brocke J (2016) Digital Nudging.
            Bus Inf Syst Eng 58: 433–436.
            https://doi.org/10.1007/s12599-016-0453-1
          </Typography>
          <Typography gutterBottom>
            13. Carr A (2013) How Square Register’s UI Guilts You Into Leaving
            Tips. Fast Company
          </Typography>
          <Typography gutterBottom>
            14. Material-UI (2020) Checkbox React component.
            https://material-ui.com/components/checkboxes/. Accessed 07 Feb 2020
          </Typography>
          <Typography gutterBottom>
            15. Material-UI (2020) TypeScript.
            https://material-ui.com/guides/typescript/#usage-of-withstyles.
            Accessed 21 Aug 2020
          </Typography>
          <Typography gutterBottom>
            16. Material-UI (2020) Checkbox API.
            https://material-ui.com/api/checkbox/. Accessed 21 Aug 2020
          </Typography>
          <Typography gutterBottom>
            17. Material-UI (2020) Material Icons.
            https://material-ui.com/components/material-icons/. Accessed 05 Jul
            2020
          </Typography>
          <Typography gutterBottom>
            18. Material-UI (2020) Slider React component.
            https://material-ui.com/components/slider/. Accessed 07 Jan 2020
          </Typography>
          <Typography gutterBottom>
            19. Material-UI (2020) Text Field React component.
            https://material-ui.com/components/text-fields/. Accessed 04 Jul
            2020
          </Typography>
          <Typography gutterBottom>
            20. Schneider C, Weinmann M, vom Brocke J (2018) Digital nudging:
            guiding online user choices through interface design. Commun ACM 61:
            67–73. https://doi.org/10.1145/3213765
          </Typography>
          <Typography gutterBottom>
            21. Material-UI (2020) Radio buttons React component.
            https://material-ui.com/components/radio-buttons/. Accessed 07 Feb
            2020
          </Typography>
          <Typography gutterBottom>
            22. Bellman S, Johnson EJ, Lohse GL (2001) On site: to opt-in or
            opt-out?: it depends on the question. Commun ACM 44: 25–27.
            https://doi.org/10.1145/359205.359241
          </Typography>
          <Typography gutterBottom>
            23. Madrian BC, Shea DF (2001) The Power of Suggestion: Inertia in
            401(k) Participation and Savings Behavior. The Quarterly Journal of
            Economics 116: 1149–1187. https://doi.org/10.1162/003355301753265543
          </Typography>
          <Typography gutterBottom>
            24. Ölander F, Thøgersen J (2014) Informing Versus Nudging in
            Environmental Policy. J Consum Policy 37: 341–356.
            https://doi.org/10.1007/s10603-014-9256-2
          </Typography>
          <Typography gutterBottom>
            25. Lee MK, Kiesler S, Forlizzi J (2011) Mining behavioral economics
            to design persuasive technology for healthy choices. In: Tan D,
            Fitzpatrick G, Gutwin C et al. (eds) Conference proceedings and
            extended abstracts / the 29th Annual CHI Conference on Human Factors
            in Computing Systems: CHI 2011, Vancouver, BC, May 7 - 12, 2011.
            ACM, New York, NY, pp 325–334
          </Typography>
          <Typography gutterBottom>
            26. Caraban A, Karapanos E, Gonçalves D et al. (2019) 23 Ways to
            Nudge. In: Brewster S, Fitzpatrick G, Cox A et al. (eds) CHI 2019:
            Proceedings of the 2019 CHI Conference on Human Factors in Computing
            Systems : May 4-9, 2019, Glasgow, Scotland, UK. The Association for
            Computing Machinery, New York, New York, pp 1–15
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
