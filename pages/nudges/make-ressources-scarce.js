import React, { useEffect, useState } from "react";
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
import { blueGrey } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";

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
import { Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

import Countdown from "react-countdown";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FlightIcon from "@material-ui/icons/Flight";
import Divider from "@material-ui/core/Divider";

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
})((props) => <Typography component="span" {...props} />);
//3 Example
const flights = [
  {
    time: "15:50 - 17:10",
    firstFlight: "FRA - VIE, 0 Stopp(s)",
    secondFlight: "",
    eco: "274,44 €",
    ecoAvail: "nur noch 7 Tickets zu diesem Preis",
    bus: "508,44 €",
    busAvail: "",
  },
  {
    time: "20:00 - 21:25",
    firstFlight: "FRA - VIE, 0 Stopp(s)",
    secondFlight: "",
    eco: "294,44 €",
    ecoAvail: "",
    bus: "488,47 €",
    busAvail: "nur noch 2 Tickets zu diesem Preis",
  },
  {
    time: "14:00 - 19:30",
    firstFlight: "FRA - HAM, 1 Stopp(s)",
    secondFlight: "HAM - VIE",
    eco: "596,07 €",
    ecoAvail: "",
    bus: "719,07 €",
    busAvail: "nur noch 2 Tickets zu diesem Preis",
  },
  {
    time: "14:00 - 20:20",
    firstFlight: "FRA - STR, 1 Stopp(s)",
    secondFlight: "STR - VIE",
    eco: "521,15 €",
    ecoAvail: "nur noch 9 Tickets zu diesem Preis",
    bus: "722,15 €",
    busAvail: "",
  },
  {
    time: "15:15 - 20:20",
    firstFlight: "FRA - MUC, 1 Stopp(s)",
    secondFlight: "MUC - VIE",
    eco: "334,95 €",
    ecoAvail: "",
    bus: "571,95 €",
    busAvail: "nur noch 3 Tickets zu diesem Preis",
  },
];

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
            effectiveness={32.5}
            efficiency={2}
          ></TitleBox>
          <Typography gutterBottom>
            <BoldTypo> „Make Resources Scarce” Nudge</BoldTypo> basiert auf dem{" "}
            <BoldTypo> “Scarcity Bias”</BoldTypo> [vgl. 1]. Der “Scarcity Bias”
            beschreibt die <BoldTypo>Neigung zu einer Überbewertung</BoldTypo>{" "}
            von Elementen, von denen angenommen wird, dass sie{" "}
            <BoldTypo>in der Zukunft nur in einer geringen Menge</BoldTypo> oder
            gar nicht verfügbar sein werden [vgl. 2]. Diese Überbewertung findet
            auch bei Sachen statt, die nicht unbedingt von den Menschen
            gebraucht werden und bei der Realisierung der geringen
            Verfügbarkeit, waren diese Elemente auch oft nicht gewollt [vgl. 1].{" "}
          </Typography>
          <Typography gutterBottom>
            Die Umsetzung dieses Nudges wird durch eine{" "}
            <BoldTypo>Reduzierung der wahrgenommenen Verfügbarkeit</BoldTypo>{" "}
            eines Artikels umgesetzt [1]. Beispielweise wurde dies in einer
            <BoldTypo> Smartwatch App</BoldTypo> benutzt, in der die physische
            Aktivität nur von der letzten Stunde angezeigt wurde und somit waren
            das Feedback und die
            <BoldTypo> Zeit die knappe Ressource</BoldTypo> [vgl. 3]. Dies
            führte die Nutzer dazu, dass eine physische Aktivität mehrmals am
            Tag durchgeführt wurde [vgl. 3]. In webbasierten Umgebungen befindet
            sich dieser Nudge in jedem größeren E-Shop wie{" "}
            <BoldTypo>Amazon oder Ebay</BoldTypo>
            [vgl. 4, 5]. Dieser Nudge tritt in Form einer Anzeige mit der
            <BoldTypo>
              {" "}
              Kennzeichnung von geringer Verfügbarkeit von Produkten
            </BoldTypo>
            , die absichtlich zur Verstärkung des Effektes aus dem Kontext
            hervorgehoben werden und mit Worten, die das Gefühl einen geringen
            Verfügbarkeit noch verstärken, wie{" "}
            <BoldTypo> „nur noch x Produkte verfügbar“</BoldTypo>, auf [vgl. 4,
            5].{" "}
          </Typography>
          <Typography gutterBottom>
            Dieser Nudge, in Bezug auf eine{" "}
            <BoldTypo> geringe Mengenverfügbarkeit</BoldTypo>, funktioniert am
            besten bei Elementen oder Produkten, die{" "}
            <BoldTypo> zeitkritisch</BoldTypo> sind oder ablaufen können [vgl.
            6, 7]. Dies können beispielsweise{" "}
            <BoldTypo>
              Hotelzimmer, Flugzeugtickets oder einmalige Sammelobjekte
            </BoldTypo>{" "}
            sein [vgl. 6, 7]. Zusätzlich wurde bei der Studie von 6 im Bereich
            „Online Retail“ ein positiver Effekt dieses Nudges nur bei den
            unteren 51% meistverkauften Artikeln gemessen. Dies weißt darauf
            hin, dass dieser Nudge neben zeitkritischen Produkten, einen Effekt
            auf nicht oft verkaufte Artikel hat [6].{" "}
          </Typography>
          <Typography gutterBottom>
            Im Gegensatz dazu <BoldTypo> funktioniert</BoldTypo> dieser Nudge{" "}
            <BoldTypo> nicht </BoldTypo>und erzielt zum Teil sogar{" "}
            <BoldTypo> negative Effekte</BoldTypo> (bis zu 17,6% Verringerung
            der Verkaufsquote), bei beständigen, haltbaren Sachen wie
            Küchengeräten, da der Eindruck entsteht, dass diese Ware
            geringwertig ist und der Verkäufer diese als ungewünschte Restware
            schnell verkaufen muss [vgl. 6, 7]. Zusätzlich, wie im oberen
            Abschnitt erwähnt, weist die Studie von 6 darauf hin, dass dieser
            Nudge <BoldTypo> bei oft verkauften Artikeln</BoldTypo>, zumindest
            im Bereich „Online Retail“, <BoldTypo> nicht funktioniert</BoldTypo>
            .{" "}
          </Typography>
          <Typography gutterBottom>
            Die Umsetzung dieses Nudges auf Webseiten erfolgt mit Hilfe von
            Text, Datenbankabfragen in Bezug auf verfügbare Artikel oder einer
            graphischen Darstellung in Form von Bildern. Diese Funktionen können
            mit Hilfe vom reinen JavaScript und dem Reactjs Frameworks erfolgen.{" "}
          </Typography>
          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            In webbasierten Umgebungen befindet sich dieser Nudge in den
            gängigsten <BoldTypo> E-Shops</BoldTypo>, sowie auf den meisten
            <BoldTypo> Flugtickets-Vermittler-Webseiten</BoldTypo> aus welchen
            das aufgeführte Beispiel für die Guideline entnommen wird [vgl. 4,
            5, vgl. 8].{" "}
          </Typography>
          <Typography gutterBottom>
            Das <BoldTypo>erste Beispiel</BoldTypo> ist von einem{" "}
            <BoldTypo> limitierten Angebot bei Amazon</BoldTypo>
            inspiriert worden. In diesem Beispiel sind{" "}
            <BoldTypo> mehrere Nudges</BoldTypo>, wie es für Amazon üblich ist
            [vgl. 9], vorhanden und zur Verdeutlichung von bereits erwähnten
            Nudges von vorherigen Nudges, werden auch diese kurz erwähnt. Zuerst
            wird eine <BoldTypo> Empfehlung von Amazon</BoldTypo> angezeigt, die
            als Hervorhebung dient (vgl. 9), ein großer{" "}
            <BoldTypo> Rabatt</BoldTypo>, sowie eine Darstellung, wie viel man
            insgesamt <BoldTypo> gespart</BoldTypo> hat. Daneben werden die
            <BoldTypo> Energieeffizienzklasse</BoldTypo> des Fernsehers visuell
            dargestellt und die
            <BoldTypo>wichtigsten Informationen</BoldTypo> auf{" "}
            <BoldTypo>gut sichtbaren Stellen</BoldTypo>, die zusätzlich mit
            einer Schriftgröße, Schriftstärke und Schriftfarbe hervorgehoben
            werden, positioniert. Das wichtige Element für „Make Resources
            Scarce“ Nudge besteht in dem{" "}
            <BoldTypo>limitierten Angebot</BoldTypo>. Dies ist zuerst auf der
            Homepage hervorgehoben, da limitierte Angebote angezeigt werden,
            sowie auf der tatsächlichen Produktpage, auf der die Zeit angegeben
            wird, in der das Angebot abläuft und die Preise zu den jeweiligen
            normalen Preisen umgestellt werden. Die zeitliche Beschränkung wird
            das erste Beispiel in der Guideline sein. Es wird also ein Produkt
            dargestellt, das eine zeitliche Beschränkung hat. Dieses Beispiel
            wurde mit Hilfe von{" "}
            <BoldTypo>
              „Grids“, unterschiedlichen „Typography“ Stylen, Energieetiketten
            </BoldTypo>{" "}
            umgesetzt [vgl. 10–12]. Zusätzlich wurde das Framework
            „react-countdown“ eingebunden, um die Umsetzung des Countdowns zu
            erleichtern [vgl. 13].{" "}
          </Typography>
          <Example
            maxWidth="700"
            link="https://codesandbox.io/s/scarce1amazon-sg9gt"
          >
            <Grid container justify="space-between" direction="row">
              <Grid item>
                <img src="/tv.jpg" height="275" alt="tv" />
              </Grid>
              <Grid item style={{ width: 275 }}>
                <Typography variant="h5">Ultra TV (4K Ultra HD)</Typography>
                <Typography color="textSecondary" variant="body2">
                  von Ultra Inc.
                </Typography>
                <Typography>2600 Bewertungen</Typography>
                <Typography
                  style={{
                    color: orange[500],
                    backgroundColor: blueGrey[500],
                    textAlign: "center",
                  }}
                >
                  Amazon's Wahl
                </Typography>
                <hr />
                <Typography
                  color="textSecondary"
                  variant="body2"
                  display="inline"
                >
                  Vorher:{" "}
                </Typography>
                <Typography
                  style={{ textDecoration: "line-through" }}
                  display="inline"
                  variant="body2"
                >
                  999.99€
                </Typography>
                <Typography style={{ textDecoration: "none" }}>
                  Tagesdeal:{" "}
                  <Typography color="error" display="inline">
                    479.99€
                  </Typography>
                  <Typography
                    display="inline"
                    color="primary"
                    style={{ fontWeight: 500 }}
                  >
                    {" "}
                    + FREIE Lieferung
                  </Typography>
                </Typography>
                <Typography
                  color="error"
                  display="inline"
                  style={{ margin: 0 }}
                >
                  Endet in:{" "}
                </Typography>
                <Countdown date={Date.now() + 70000000} daysInHours={true} />
                <br />
                <Typography display="inline">
                  Du sparst:{" "}
                  <Typography display="inline" color="error">
                    519.01€ (52%)
                  </Typography>
                </Typography>

                <br />
                <img src="/Aplusplusplus.jpg" height="16" alt="a+++" />
                <CardActionArea>
                  <Typography style={{ color: blue[700] }}>
                    FREIER Amazon Support
                  </Typography>
                </CardActionArea>
                <Typography></Typography>
              </Grid>
            </Grid>
          </Example>
          <Typography gutterBottom>
            Das <BoldTypo> zweite Beispiel</BoldTypo> bezieht sich auf ein
            Produktangebot bei <BoldTypo> E-Bay</BoldTypo>. Hierbei werden, wie
            bei Amazon, auch viele ähnliche Nudges angewendet. Der Unterschied
            zu dem Angebot von Amazon liegt in einer anderen Art von einem „Make
            Resources Scarce“ Nudge. Es besteht keine Zeitbeschränkung, aber ein
            Hinweis darauf, dass nur eine <BoldTypo> begrenzte Anzahl</BoldTypo>{" "}
            an Waren verfügbar ist, sowie Angaben zu verkauften Artikeln, die
            auch darauf <BoldTypo> hinweisen</BoldTypo>, dass dieses Produkt{" "}
            <BoldTypo> oft verkauft wird</BoldTypo> und somit schnell
            ausverkauft werden kann. Dieses Beispiel wurde mit Hilfe von{" "}
            <BoldTypo>
              „Grids“, unterschiedlichen „Typography“ Stylen und einen
              Material-UI Ikone
            </BoldTypo>{" "}
            umgesetzt [vgl. 11, 12, vgl. 14].{" "}
          </Typography>
          <Example link="https://codesandbox.io/s/naughty-allen-sngwi?file=/index.js">
            <Grid container justify="center" direction="row">
              <Grid item style={{ textAlign: "center" }}>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  display="inline"
                >
                  {" "}
                  Sparen sie bis zu
                </Typography>
                <BoldTypo style={{ color: red[500] }}> 70%</BoldTypo>{" "}
                <CardActionArea style={{ display: "inline", marginBottom: 4 }}>
                  <Typography
                    style={{ color: blue[500] }}
                    variant="body2"
                    display="inline"
                  >
                    {" "}
                    Alle rabatfähige Artikel aufrufen
                  </Typography>
                </CardActionArea>
              </Grid>
              <Grid item>
                <img
                  src="/shoe.jpg"
                  height="275"
                  style={{ boxShadow: "3px 3px 8px 3px rgba(0, 0, 0, 0.1)" }}
                  alt="shoe"
                />
              </Grid>
              <Grid item style={{ width: 275 }}>
                <Typography variant="h5">Sammler Sneakers</Typography>
                <Typography color="error">(Limited Edition)</Typography>
                <Typography color="textSecondary" variant="body2">
                  von Rainbow
                </Typography>
                <Typography>2600 Bewertungen</Typography>
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <WhatshotIcon
                      fontSize="small"
                      color="error"
                      display="inline"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      color="error"
                      variant="body2"
                      style={{}}
                      diplay="inline"
                    >
                      In letzter Stunde 7 verkauft!
                    </Typography>
                  </Grid>
                </Grid>
                <hr />
                <Typography variant="body2" color="textSecondary">
                  Begrenzte Stückzahl verfügbar
                </Typography>

                <Typography variant="body1" color="error">
                  1.139 verkauft!
                </Typography>
                <CardActionArea style={{ marginBottom: 4 }}>
                  <Typography variant="body2" style={{ color: blue[500] }}>
                    Bewertungen ansehen
                  </Typography>
                </CardActionArea>

                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{
                    backgroundColor: grey[200],
                    padding: 4,
                    paddingBottom: 8,
                  }}
                >
                  <BoldTypo variant="h6">EUR 59,59</BoldTypo>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    display="inline"
                    style={{ marginLeft: 6, marginRight: 6 }}
                  >
                    UVP:{" "}
                  </Typography>
                  <Typography
                    style={{ textDecoration: "line-through" }}
                    display="inline"
                    variant="body2"
                  >
                    259,99€
                  </Typography>

                  <br />
                  <Button
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: blue[500],
                      marginBottom: 6,
                    }}
                  >
                    Sofort kaufen
                  </Button>
                  <Button
                    variant="contained"
                    style={{ color: "white", backgroundColor: blue[300] }}
                  >
                    In den Warenkorb
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Example>
          <Typography gutterBottom>
            Das <BoldTypo> dritte Beispiel</BoldTypo> ist eine{" "}
            <BoldTypo> Kombination</BoldTypo> aus den beiden vorherigen
            Beispielen. Dieses Beispiel orientiert sich am Flugticketverkauf bei
            Lufthansa. In diesem Fall ist das{" "}
            <BoldTypo>limitierte Angebot durch ein Flugdatum begrenzt</BoldTypo>
            , sowie einem <BoldTypo>Limit bei Flugplätzen</BoldTypo>. Zusätzlich
            wird <BoldTypo>zu einem bestimmten Preis</BoldTypo> nur eine{" "}
            <BoldTypo>begrenzte Anzahl an Tickets</BoldTypo> verkauft. Dieses
            Beispiel wurde genau wie das Beispiel in der Abbildung oben mit
            Hilfe von{" "}
            <BoldTypo>
              „Grids“, unterschiedlichen „Typography“ Stylen und Material-UI
              Ikonen
            </BoldTypo>{" "}
            umgesetzt [vgl. 11, 12, vgl. 14].{" "}
          </Typography>
          <Example
            maxWidth="900"
            link="https://codesandbox.io/s/lucid-fast-7cgsy?file=/index.js"
          >
            {flights.map((flight) => (
              <Paper style={{ margin: 8 }} key={flight.time}>
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item>
                    <FlightIcon />
                  </Grid>
                  <Grid item direction="column">
                    <Grid item>
                      <BoldTypo>{flight.time}</BoldTypo>
                    </Grid>
                    <Grid item>
                      <Typography>{flight.firstFlight}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{flight.secondFlight}</Typography>
                    </Grid>
                  </Grid>

                  <Divider orientation="vertical" flexItem="true" />

                  <Grid item direction="column">
                    <CardActionArea>
                      <Grid item>
                        <Typography style={{ color: green[500] }}>
                          Economy Class:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{flight.eco}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color="error">{flight.ecoAvail}</Typography>
                      </Grid>
                    </CardActionArea>
                  </Grid>
                  <Divider orientation="vertical" flexItem="true" />
                  <Grid item direction="column">
                    <CardActionArea>
                      <Grid item>
                        <Typography style={{ color: blue[500] }}>
                          Business Class:
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{flight.bus}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography color="error">{flight.busAvail}</Typography>
                      </Grid>
                    </CardActionArea>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Example>
          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Abschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [1]:
            Wie kann das System die wünschenswerte Alternative als{" "}
            <BoldTypo>knappe Ressource</BoldTypo> darstellen und das Gefühl
            hervorrufen, dass etwas verpasst wird, wenn die Alternative nicht
            verfolgt wird? Ist die Verwendung von Text, Bildern oder
            Visualisierungen angemessener? Der Verwendung der Sprache, die
            impliziert, dass das Publikum das Ergebnis bereits erreicht oder die
            Alternative ausgewählt hat, kann ein{" "}
            <BoldTypo>Gefühl der Eigenverantwortung</BoldTypo> auslösen und
            wiederum die Motivation der Benutzer erhöhen, einen Verlust zu
            vermeiden.{" "}
          </Typography>
          <Typography gutterBottom></Typography>
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
          <Typography variant="body1" color="initial">
            Genau wie bei dem „Positioning“ Nudge muss berücksichtigt werden,
            dass die Effektivität durch die begrenzte Anzahl an Studien mit
            unterschiedlichen Ergebnissen, stark abweichen kann. Zusätzlich
            müssen bei diesem Nudge, wie in oberen Abschnitten erklärt,
            Anwendungseinschränkungen berücksichtigt werden, da dieser Nudge
            beim Anwenden in falschen Situationen sogar zu einer negativen
            Effizienz führen kann [6]. Die Studien zeigen, trotz der
            Anwendungseinschränkungen, dass „Make ressources scarce“ mit der
            durchschnittlichen Effektivität von <BoldTypo> 32,5%</BoldTypo> in
            der <BoldTypo>Effektivitätsklasse mittig</BoldTypo> angeordnet
            werden kann.
          </Typography>
          <Typography>
            Der „Make Resources Scarce“ Nudge ist mit Hilfe von „Grids“ und
            vordefinierten Countern leicht umzusetzen. Falls die Kennzahlen, wie
            verfügbare Produkte im Lager, verfügbar sind, können diese aus der
            Datenbank abgefragt werden und in den Beispielen gerendert werden
            werden. Daher wird dieser Nudge in die{" "}
            <BoldTypo>Aufwandsklasse niedrig</BoldTypo>
            eingestuft. Trotz dem niedrigen Aufwand in der Umsetzung, sollte der
            Planungsaufwand nicht unterschätzt werden, da dieser Nudge bei
            falschen Planung auch negative Effekte erzielen kann [vgl. 6, 7].
          </Typography>
          <Typography>
            Da dieser Nudge in der Effektivitätsklasse mittel ist, und der
            Aufwand niedrig ist, wird die daraus abgeleitete{" "}
            <BoldTypo>Effizienzklasse Mittel</BoldTypo> sein.
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
          <Typography gutterBottom>
            10. The Publications Office of the European Union (2020) EUR-Lex -
            32014R0518.
            https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=CELEX:32014R0518.
            Accessed 22 Aug 2020
          </Typography>
          <Typography gutterBottom>
            11. Material-UI (2020) Grid React component.
            https://material-ui.com/components/grid/#grid. Accessed 05 Jul 2020
          </Typography>
          <Typography gutterBottom>
            12. Material-UI (2020) Typography.
            https://material-ui.com/components/typography/#typography. Accessed
            22 Aug 2020
          </Typography>
          <Typography gutterBottom>
            13. ndresx (2020) react-countdown.
            https://www.npmjs.com/package/react-countdown. Accessed 22 Aug 2020
          </Typography>
          <Typography gutterBottom>
            14. Material-UI (2020) Material Icons.
            https://material-ui.com/components/material-icons/. Accessed 05 Jul
            2020
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
