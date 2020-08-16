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

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

//Efficiency

function createData(name, source, effectivity) {
  return { name, source, effectivity };
}

const rows = [
  createData(
    "Wasser Qualitätsmanagement",
    "Bateman et al. 2008, S. 121–123",
    "39%"
  ),
  createData("E-Shopping", "Fasolo et al. 2006, S. 804–805", "70%"),
  createData("Gesunde Ernährung", "Lee et al. 2011, S. 331–332", "12%"),
  createData(
    "Informations-Darstellung",
    "Dimara et al. 2017, S. 474–478",
    "9,5%"
  ),
  createData("", "Durchschnittliche Effizienz: ", "32,6%"),
];

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <NavBar>
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Adding Inferior Alternatives</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <TitleBox
            title={"Adding Inferior Alternatives"}
            effort={1}
            effectiveness={53}
            efficiency={1}
          ></TitleBox>

          <Typography gutterBottom>
            {" "}
            „Adding Inferior Alternatives“ Nudge basiert auf dem „Decoy Effect“,
            einem kognitivem Bias, [vgl. 1, 2], der in manchen Literaturquellen
            auch unter dem Begriff „Attraction Effect“ [vgl. 3, 4] oder
            „Asymmetric Dominance Effect“ zu finden ist [vgl. 3]. Dieser Effekt
            zeigt eine inkonsistente Wahl, wenn zwei gute Produkte, beide aus
            anderen Gründen gut, präsentiert werden und ein schlechteres
            Produkt, das als ein „decoy“ agiert [vgl. 2–4]. Dieser Effekt kann
            genutzt werden, wenn in der Regel drei Produkte angezeigt werden,
            und ein Produkt im Gegensatz zu einem Konkurrenzprodukt, bevorzugt
            werden soll [vgl. 4].{" "}
          </Typography>
          <Typography gutterBottom>
            Ein passendes Beispiel kommt aus dem Bereich Online-Shopping [vgl.
            4]: In dieser Forschung wurde „Decoy Effect“ bei einer Auswahl von
            Laptops nachgewiesen. In der ersten Phase wurden nur zwei Produkte A
            und B zur Auswahl angeboten. Nach der erste Auswahlrunde hat sich
            die erste Testgruppe für das Produkt A mit 65% und für das Produkt B
            mit 35% entschieden. Nachdem ein „Decoy“ Produkt C hinzugefügt
            wurde, der in allen Kategorien schlechter als B war, aber mit einem
            vergleichbaren Preis als B und günstiger als C, wurde die zweite
            Testgruppe zur Auswahl gelassen. Dies führte zu einer Wahl von
            Produkt B in 69% und C von 31%.
          </Typography>
          <Typography gutterBottom>
            Aus dieser Studie wurde ersichtlich, dass anhand „Decoy Effect“ im
            Bereich E-Shopping ein bestimmtes Produkt vor einem anderen
            bevorzugt werden kann. Dies hat jedoch ein paar Regeln, die beachtet
            werden müssen, die auch in dieser Studie beobachtet wurden [vgl. 4]:
            Die Produkte A und B müssen beide gleichwertig visuell dargestellt
            werden oder das bevorzugte Produkt B besser als A. Das „Decoy“
            Produkt muss in allen Bereichen schlechter als B aber trotzdem in
            etwas besser als C sein (wie in diesem Fall der Preis) und immer
            noch z.B. anhand des Preises mit B vergleichbar sein. Durch eine
            bessere Visuelle Darstellung, wie beispielweise Animationen von
            Produkt B, kann der „Decoy Effect“ leicht verstärkt werden.{" "}
          </Typography>
          <Typography gutterBottom>
            {" "}
            „Decoy“ Produkte und deren Eigenschaften wie Bilder, Beschriftungen
            und Preis, können leicht mit Material UI umgesetzt werden.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            Wie erwähnt, erfolgt die Umsetzung von „Adding Inferior
            Alternatives“ Nudge mithilfe von einem „Decoy“ Element [vgl. 8–10].
            Bei der Erstellung dieses Elements sollte beachtet werden, dass das
            „Decoy“ Element in allen wichtigen Faktoren schlechter ist als das
            Element, das bevorzugt werden soll [vgl. 9]. Falls es ein
            Konkurrenzprodukt gibt, sollte das „Decoy“ Element mindestens bei
            einem wichtigen Faktor besser als das Konkurrenz Element sein [vgl.
            9]. Falls diese Regeln beachtet werden, sollte der erwünschte Effekt
            erzielt werden und zwar eine erhöhte Wahl des bevorzugten Produktes
            [vgl. 9].{" "}
          </Typography>
          <Typography gutterBottom>
            Als Beispiel wird das in der Forschung von Fasolo et al. aufgeführte
            Beispiel mit Laptops genommen, da es aus der Umgebung eines online
            E-shops stamm und somit perfekt zu dieser Guideline, die ein Fokus
            auf webbasierte Technologien setzt, passt. Dieses Beispiel ist ein
            Vergleich zwischen drei Laptops [vgl. 9]: Der erste Laptop A wird
            die Konkurrenz darstellen, Laptop B das erwünschte Produkt und
            Laptop C wird den „Decoy“ darstellen. Laptop B wird für die Zwecke
            einer Verstärkung des Effektes als eine Animation angezeigt. Der
            „Decoy“ Laptop wird die Regeln verfolgen, also die aufgeführte
            Laptopspezifikationen werden geringer als bei dem Laptop B sein und
            das Laptop C wird günstiger als Laptop A sein.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Abschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [1]:
            Kann das System eine Reihe unterschiedlicher, minderwertiger
            alternativen Optionen präsentieren? Wie kann der „Decoy“ die
            gewünschte Alternative fördern? Kann das System auf maximal drei bis
            vier Elementen, zwischen denen entschieden wird, verringert werden?{" "}
          </Typography>
          <Typography gutterBottom></Typography>
          <hr />
          <Typography variant={"h4"}>Effektivität</Typography>
          <hr />
          <TableContainer component={Paper}>
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
          <Typography gutterBottom>
            Die Effektivität stellt bei „Inferior Alternatives“-Studien die
            prozentuelle Erhöhung der Auswahlrate von der gewünschten/gezielten
            Alternative im Vergleich zu der Auswahlrate ohne der Anwendung von
            diesem Nudge, genauso, wie bei beiden vorherigen Nudges, dar (siehe
            K 3.4.1 und 3.4.2).{" "}
          </Typography>
          <Typography gutterBottom>
            Die Effektivität der Studie von 3 wurde als ein Durchschnitt deren
            vier Untersuchungen berechnet. Genauso wurde auch ein Durchschnitt
            aus beiden Experimenten von 4 berechnet.{" "}
          </Typography>
          <Typography gutterBottom>
            Die Studien zeigen, dass „Inferior Alternatives“ Nudge im Vergleich
            zu vorherigen zwei Nudges schlechter abschneidet. Somit wird dieser
            Nudge mit der durchschnittlichen Effektivität von 32,6% in die
            Effizienzklasse mittel angeordnet.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Referencen</Typography>
          <hr />
          <Typography></Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
