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
    "Auswahl von verschiedenen Gütern",
    "Mittone und Savadori 2009, S. 460",
    "50,2%"
  ),
  createData("Online Retail", "Park et al. 2019, S. 28–29", "14,8%"),
  createData("", "Durchschnittliche Effizienz: ", "32,5%"),
];

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
          <Typography gutterBottom>
            „Make Resources Scarce” Nudge basiert auf dem “Scarcity Bias” [vgl.
            1]. “Scarcity Bias” beschreibt die Neigung zu einer Überbewertung
            von Elementen, über die gedacht wird, dass die in der Zukunft nur in
            einer geringen Menge oder gar nicht verfügbar sein werden [vgl. 2].
            Diese Überbewertung findet auch bei Sachen statt, die nicht
            unbedingt von den Menschen gebraucht werden und vor der Realisierung
            der geringen Verfügbarkeit, waren diese Elemente auch oft nicht
            gewollt [vgl. 1].{" "}
          </Typography>
          <Typography gutterBottom>
            Die Umsetzung dieses Nudges wird durch eine Reduzierung der
            wahrgenommenen Verfügbarkeit eines Artikels umgesetzt [1].
            Beispielweise wurde dies in einer Smartwatch App benutzt, in der die
            physische Aktivität nur von der letzten Stunde angezeigt wurde und
            somit waren das Feedback und die Zeit die knappe Ressource [vgl. 3].
            Dies führte die Nutzer dazu, dass eine physische Aktivität mehrmals
            am Tag durchgeführt wurde [vgl. 3]. In webbasierten Umgebungen
            befindet sich dieser Nudge in jedem größeren E-Shop wie Amazon oder
            Ebay [vgl. 4, 5]. Dieser Nudge wird in Form einer Anzeige einen
            geringeren Verfügbarkeit von Produkten, die absichtlich zur
            Verstärkung des Effektes aus dem Kontext hervorgehoben werden und
            mit Worten, die das Gefühl einen geringen Verfügbarkeit noch
            verstärken, wie „nur noch x Produkte verfügbar“ kennengezeichnet
            [vgl. 4, 5].{" "}
          </Typography>
          <Typography gutterBottom>
            Dieser Nudge, in Bezug auf eine geringe Mengen Verfügbarkeit,
            funktioniert am besten bei Elementen oder Produkten, die
            zeitkritisch sind oder die ablaufen können [vgl. 6, 7]. Dies können
            beispielsweise Hotelzimmer, Flugzeugtickets, oder einmalige
            Sammelobjekte sein [vgl. 6, 7]. Zusätzlich wurde bei der Studie von
            6 im Bereich „Online Retail“ ein positiver Effekt dieses Nudges nur
            bei den unteren 51% meistverkauften Artikeln gemessen. Dies weißt
            darauf hin, dass dieser Nudge neben zeitkritischen Produkten, ein
            Effekt auf nicht oft verkaufte Artikel hat [6].{" "}
          </Typography>
          <Typography gutterBottom>
            Im Gegensatz dazu funktioniert dieser Nudge nicht, bis hin zu
            negativen Effekten (bis zu 17,6% Verringerung der Verkaufsquote),
            bei beständigen, haltbaren Sachen wie Küchengeräten da der Eindruck
            entsteht, dass diese Ware geringerwertig sind und der Verkäufer
            diese als ungewünschte Restware schnell verkaufen muss [vgl. 6, 7].
            Zusätzlich, wie im Oberen Abschnitt erwähnt, weißt die Studie von 6
            darauf hin, dass dieser Nudge bei oft verkauften Artikeln, zumindest
            im Bereich „Online Retail“, nicht funktioniert.{" "}
          </Typography>
          <Typography gutterBottom>
            Die Umsetzung dieses Nudges auf Webseiten erfolgt mit Hilfe von
            Text, Datenbankabfragen in Bezug auf verfügbare Artikel, oder einer
            graphischen Darstellung in Form von Bildern. Diese Funktionen können
            mit Hilfe vom reinen JavaScript und dem Reactjs Frameworks erfolgen.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            In webbasierten Umgebungen befindet sich dieser Nudge in den
            gängigsten E-Shops, sowie in den meisten Flugtickets Vermittlern
            Webseiten aus dessen das aufgeführte Beispiel in das Guideline
            entnommen wird [vgl. 4, 5, vgl. 8].{" "}
          </Typography>
          <Typography gutterBottom>
            Das erste Beispiel ist von einem limitierten Angebot bei Amazon. In
            diesem Beispiel sind mehrere Nudges, wie es für Amazon üblich ist
            [vgl. 9], vorhanden und zur Verdeutlichung bereits erwähnten Nudges
            von vorherigen Kapitel, werden auch diese kurz erwähnt. Zuerst wird
            eine Empfehlung von Amazon angezeigt, die zu einer Hervorhebung
            dient (vgl. 9), ein großer Rabatt, sowie eine Darstellung, wie viel
            man insgesamt gespart hat. Daneben wird visuell dargestellt, welche
            Energieeffizienzklasse dieser Fernseher hat, sowie Positionierung
            von den wichtigsten Informationen auf gut sichtbaren Stellen, die
            zusätzlich mit einer Schriftgröße, Schriftstärke und Schriftfarbe
            hervorgehoben werden. Das wichtige Element für „Make Resources
            Scarce“ Nudge besteht in dem limitierten Angebot. Dies ist zuerst
            auf der Homepage hervorgehoben, da Limitierte Angebote angezeigt
            werden, sowie auf der tatsächlichen Produktpage, auf der die Zeit
            angegeben wird, in der das Angebot abläuft und die Preise zu deren
            normalen Preisen umgestellt werden. Die Zeitliche Beschränkung wird
            das erste Beispiel in der Guideline sein. Es wird also ein Produkt
            dargestellt, das eine Zeitliche Beschränkung hat.{" "}
          </Typography>
          <Typography gutterBottom>
            Das zweite Beispiel ist ein Produktangebot bei E-Bay. Hierbei
            werden, wie bei Amazon, auch viele ähnliche Nudges angewendet. Der
            Unterschied zu dem Angebot von Amazon ist in einer anderen Art von
            „Make Resources Scarce“ Nudge. Es besteht keine Zeitbeschränkung,
            aber ein Hinweis darauf, dass nur eine begrenzte Anzahl an Waren
            verfügbar ist, sowie Angaben zu verkauften Artikeln, die auch darauf
            hinweisen, dass dieses Produkt oft verkauft wird und somit schnell
            ausverkauft werden kann.{" "}
          </Typography>
          <Typography gutterBottom>
            Das dritte Beispiel ist eine Kombination aus den beiden vorherigen
            Beispielen. Dieses Beispiel orientiert sich am Flugticketverkauf bei
            Lufthansa. In diesem Fall ist das limitierte Angebot durch ein
            Flugdatum begrenzt, sowie einem Limit bei Flugplätzen. Zusätzlich
            wird zu einem bestimmten Preis nur eine begrenzte Anzahl an Tickets
            verkauft.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Abschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [1]:
            Wie kann das System die wünschenswerte Alternative als knappe
            Ressource darstellen und das Gefühl hervorrufen, dass etwas verpasst
            wird, wenn die Alternative nicht verfolgt wird? Ist die Verwendung
            von Text, Bildern oder Visualisierungen angemessener? Der Verwendung
            der Sprache, die impliziert, dass das Publikum das Ergebnis bereits
            erreicht oder die Alternative ausgewählt hat, kann ein Gefühl der
            Eigenverantwortung auslösen und wiederum die Motivation der Benutzer
            erhöhen, einen Verlust zu vermeiden.{" "}
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
          <Typography variant="body1" color="initial">
            Gleich wie bei „Positioning“ Nudge muss berücksichtigt werden, dass
            die Effektivität, durch die begrenzte Anzahl an Studien mit
            unterschiedlichen Ergebnissen, stark abweichen kann. Zusätzlich
            müssen bei diesem Nudge, wie in oberen Abschnitten erklärt,
            Anwendungseinschränkungen berücksichtigt werden, da dieser Nudge bei
            einem anwenden in falschen Situationen bis zu einen negativen
            Effizienz führen kann [6]. Die Studien, trotz den
            Anwendungseinschränkungen, zeigen dass „Make ressources scarce“ mit
            der durchschnittlichen Effektivität von 32,5% in die Effizienzklasse
            mittel angeordnet werden kann.
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
            2. Mittone L, Savadori L (2009) The Scarcity Bias. Applied
            Psychology 58: 453–468.
            https://doi.org/10.1111/j.1464-0597.2009.00401.x
          </Typography>
          <Typography gutterBottom>
            3. Gouveia R, Pereira F, Karapanos E et al. (2016) Exploring the
            design space of glanceable feedback for physical activity trackers.
            In: Lukowicz P, Krüger A, Bulling A et al. (eds) Proceedings of the
            2016 ACM International Joint Conference on Pervasive and Ubiquitous
            Computing. ACM, New York, NY, USA, pp 144–155
          </Typography>
          <Typography gutterBottom>
            4. eBay Inc. (2020) eBay. https://www.ebay.de/. Accessed 13 Jul 2020
          </Typography>
          <Typography gutterBottom>
            5. Amazon.com Inc. (2020) Amazon.com. https://www.amazon.com/.
            Accessed 05 Jul 2020
          </Typography>
          <Typography gutterBottom>
            6. Park S, Rabinovich E, Tang CS et al. (2019) The Impact of
            Disclosing Inventory-Scarcity Messages on Purchase Frequencies and
            Daily Sales in Online Retailing. SSRN Journal: 1–44.
            https://doi.org/10.2139/ssrn.3447624
          </Typography>
          <Typography gutterBottom>
            7. Tang CS (2020) ‘Only 2 Left in Stock! Order Now!’ But Does That
            Really Work? The Wall Street Journal
          </Typography>
          <Typography gutterBottom>
            8. Lufthansa (2020) Lufthansa Homepage.
            https://www.lufthansa.com/de/en/homepage. Accessed 15 Jul 2020
          </Typography>
          <Typography gutterBottom>
            9. Mills S (2020) Amazon is Changing How it Nudges in Response to
            Coronavirus. The Startup
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
