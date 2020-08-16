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
  createData("Gesunde Ernährung", "Lee et al. 2011, S. 328–332", "92%"),
  createData(
    "Auswahl eines sicheren WiFis",
    "Turland et al. 2015, S. 199",
    "14%"
  ),
  createData("Ersparnisse", "Madrian und Shea 2001, S. 1160", "132%"),
  createData("", "Durchschnittliche Effizienz: ", "85,1%"),
];

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <NavBar>
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Positioning</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <TitleBox
            title={"Positioning"}
            effort={1}
            effectiveness={53}
            efficiency={1}
          ></TitleBox>
          <Typography gutterBottom>
            Eine weitere einfach umsetzbare, aber trotz dessen eine häufige Art
            von Nudges in Webseiten, ist „Positioning“ [vgl. 1]. Dieser Nudge
            basiert, ähnlich wie „Defaults“, auf dem Status-Quo Bias [vgl. 1],
            sowie in den meisten Beispielen zu diesem Nudge auch auf der
            Anchoring Heuristik [vgl. 2]. Die Funktionsweise dieses Nudges hängt
            von der Anordnung der Elemente in einer Auflistung, beispielweise
            von verschiedenen Produkten, ab [vgl. 1]. Wie 2 bewiesen haben,
            hängt die Wahl des Nutzers von dem ersten Element in der Auflistung,
            dieses dient als ein Anker, sowie der Anordnung, die nach diesem
            Element folgt ab [vgl. 2]. Wenn die Elemente nach der Qualität
            sortiert wurden und das erste Element die höchste Qualität hat,
            werden die andere Elemente mit dem ersten verglichen [vgl. 2]. Dies
            hat zur Folge, dass im Durchschnitt Produkte mit einer höheren
            Qualität ausgewählt werden [vgl. 2]. Dies gilt auch für den Preis
            [vgl. 2]. Da die Produkte mit dem Anker verglichen werden, sehen die
            Nutzer eine niedrigere Qualität oder einen höheren Preis als ein
            Verlust und somit kommt auch der Loss Aversion Bias zum Einsatz
            [vgl. 2].{" "}
          </Typography>
          <Typography gutterBottom>
            Eine Anordnung von Elementen kann auch im Bereich der IT-Sicherheit
            angewendet werden [vgl. 3]. Eine reine Anordnung von verfügbaren
            Wi-Fis, sicherste Wi-Fis wurden als erste angezeigt, führte zu einer
            Erhöhung der Auswahl von sicheren Netzwerken um 6,6% [vgl. 3].
            Dieser Effekt konnte durch eine Visuelle Darstellung, wie grüne
            Farben für sichere Netzwerke und rote Farben für unsichere
            Netzwerke, um weitere 21,7% verstärk werden [vgl. 3]. Der Effekt der
            visuellen Darstellungen wird im Nudge „Visualisation“ behandelt.{" "}
          </Typography>
          <Typography gutterBottom>
            Um dieses Effekt zu einem großen Teil zu vermeiden, da eine Auswahl
            von einer Anordnung notwendig ist, und somit dem Nutzer eine freiere
            Wahl überlassen, können die Elemente in Gitter Anordnungen
            aufgelistet werden [vgl. 4].{" "}
          </Typography>
          <Typography gutterBottom>
            Dieser Nudge ist sehr eng mit dem „Hiding“ Nudge verbunden und daher
            wird der „Hiding“ Nudge zur Vereinfachung in den „Positioning“ Nudge
            aufgenommen. Der „Hiding“ Nudge funktioniert auch dank einer
            Veränderung der Anordnung von Elementen, nur mit einem umgekehrten
            Ziel als der des „Positioning“ und zwar, mit einer verringerten
            Auswahl-Quote eines bestimmten Elementes [vgl. 1]. Dies kann
            beispielweise im Healthcare Sektor nützlich sein, da man dadurch den
            Verkauf von ungesundem Essen verringern kann [vgl. 5].{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            Wie erwähnt, erfolgt die Umsetzung von „Positioning“ Nudge mit Hilfe
            von Listen, Gitter-Listen und zusätzlichen Elementen wie Ikonen zur
            Unterstützung. Das Ziel solcher Implementierung ist entweder eine
            Erhöhung der Wahl bestimmten Produktklassen, wie beispielweise
            Produkte mit einer hohen Qualität, das Verringern einer Wahl von
            bestimmten Produkten, wie ungesunde Ernährungsprodukte, oder die
            Vermeidung dieser Effekte und eine Erhöhung der freien Wahl des
            Nutzers [vgl. 2–5].{" "}
          </Typography>
          <Typography gutterBottom>
            Das erste Beispiel wird ein grundlegendes Beispiel inspiriert von 2
            sein [vgl. 2]. In diesem Beispiel wird die Anordnung der Elemente
            verändert, je nachdem welche Elemente bevorzugt werden. Dies kann
            eine Anordnung anhand der Qualität sein [vgl. 2], aber es können
            auch zuerst bevorzugte oder empfohlene Produkte, wie bei Amazon
            [vgl. 6], angezeigt werden.{" "}
          </Typography>
          <Typography gutterBottom>
            Das zweite Beispiel beschäftigt sich mit der Verstärkung dieses
            Effektes im ersten Beispiel [vgl. 3]. Dies wird anhand von einer
            visuellen Darstellung in Form von gefärbten Ikonen, beispielweise in
            Farben zwischen grün (das bevorzugte Element) und rot, erreicht
            [vgl. 3].{" "}
          </Typography>
          <Typography gutterBottom>
            Das dritte Beispiel bezieht sich auf eine Verringerung der Wahl
            eines bestimmten Elements. Dies wird ähnlich wie im Beispiel eins
            erreicht, nur umgekehrt angewendet [vgl. 5]. Somit werden die
            unerwünschten Elemente an das Ende den Listen eingefügt [vgl. 5].{" "}
          </Typography>
          <Typography gutterBottom>
            Das letzte Beispiel beschäftigt sich mit einer Erhöhung der freien
            Wahl für den Nutzer und somit einer Verringerung dieses
            „Positioning“ Effektes. Dies wird dank einer Auflistung in einer
            alternativen Form von Listen und zwar in einer Gitter Form [vgl. 4].{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography>
            Abschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [1]:
            Wie kann die gewünschte Alternative mehr auffallen und wie kann die
            andere Alternative weniger zugänglich werden? Wie kann das System
            klar und verständlich angeben, was gefördert wird und warum?
            Alternativen, die oben oder links platziert sind, werden eher
            ausgewählt und als wertvoller wahrgenommen.{" "}
          </Typography>
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
          <Typography variant="body1" color="initial">
            Die Effektivität stellt bei „Positioning“-Studien die prozentuelle
            Erhöhung der Auswahl-rate von der gewünschten/gezielten Alternative
            im Vergleich zu der Auswahlrate ohne der Anwendung von diesem Nudge,
            genauso, wie es bei „Default“ Nudges dar. Die Effektivität der
            Studie von Lee et al. 2011, S. 328–332 wurde als ein Durchschnitt
            deren beiden Untersuchungen, einem E-shop Experiment mit gesunden
            und unge-sunden Snacks sowie mit einer Reorganisierung des Angebots
            von verschiedenen Snacks, die von einem Roboter angeboten wurden,
            berechnet. Die zwei Studien zeigen, dass „Positioning“ Nudge in
            unterschiedlichen Kontexten mit unterschiedlichen Ergebnissen
            verbunden ist. Trotzt den unterschiedlichen Ergebnis-sen zeigt die
            durchschnittliche Effektivität, dass „Positioning“ Nudges eine hohe
            Er-folgsrate aufweisen können und daher werden sie mit der
            durchschnittlichen Effektivi-tät von 53% in die Effizienzklasse hoch
            angeordnet. Da die Effektivität zu diesem Nudge nur in zwei Studien
            auffindbar war und zusätzlich mit zwei stark abweichenden
            Effektivitätszahlen, soll bei eigener Implementierung ein starker
            Fokus auf das Testen dieses Nudges gelegt werden, da die
            Effektivität stärker als bei anderen Nudges die-ser Studie abweichen
            kann.
          </Typography>

          <hr />
          <Typography variant={"h4"}>Referencen</Typography>
          <hr />
          <Typography gutterBottom>
            1. Caraban A, Karapanos E, Gonçalves D et al. (2019) 23 Ways to
            Nudge. In: Brewster S, Fitzpatrick G, Cox A et al. (eds) CHI 2019:
            Proceedings of the 2019 CHI Conference on Human Factors in Computing
            Systems : May 4-9, 2019, Glasgow, Scotland, UK. The Association for
            Computing Machinery, New York, New York, pp 1–15
          </Typography>
          <Typography gutterBottom>
            2. Cai S, Xu Y (2008) Designing Product Lists for E-commerce: The
            Effects of Sorting on Consumer Decision Making. International
            Journal of Human-Computer Interaction 24: 700–721.
            https://doi.org/10.1080/10447310802335730
          </Typography>
          <Typography gutterBottom>
            3. Turland J, Coventry L, Jeske D et al. (2015) Nudging towards
            security. In: Lawson S, Dickinson P (eds) British HCI 2015:
            Proceedings of the British HCI Conference 2015 : July 13-17, 2015,
            Lincoln, Lincolnshire, UK. Association for Computing Machinery, New
            York, New York, pp 193–201
          </Typography>
          <Typography gutterBottom>
            4. Kammerer Y, Gerjets P (2014) The Role of Search Result Position
            and Source Trustworthiness in the Selection of Web Search Results
            When Using a List or a Grid Interface. International Journal of
            Human-Computer Interaction 30: 177–191.
            https://doi.org/10.1080/10447318.2013.846790
          </Typography>
          <Typography gutterBottom>
            5. Lee MK, Kiesler S, Forlizzi J (2011) Mining behavioral economics
            to design persuasive technology for healthy choices. In: Tan D,
            Fitzpatrick G, Gutwin C et al. (eds) Conference proceedings and
            extended abstracts / the 29th Annual CHI Conference on Human Factors
            in Computing Systems: CHI 2011, Vancouver, BC, May 7 - 12, 2011.
            ACM, New York, NY, pp 325–334
          </Typography>
          <Typography gutterBottom>
            6. Amazon.com Inc. (2020) Amazon.com. https://www.amazon.com/.
            Accessed 05 Jul 2020
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
