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
import { orange } from "@material-ui/core/colors";
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

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import SignalWifi4BarLockIcon from "@material-ui/icons/SignalWifi4BarLock";
import SignalWifi1BarLockIcon from "@material-ui/icons/SignalWifi1BarLock";
import SignalWifi3BarIcon from "@material-ui/icons/SignalWifi3Bar";

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
  root: {
    width: "100%",
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
  createData("Delboeuf’s Illusion", "Hollinworth et al. 2013, S. 1333", "10%"),
  createData(
    "Auswahl eines sicheren WiFis",
    "Turland et al. 2015, S. 199",
    "53,3%"
  ),
  createData(
    "Hoher und geringer Kontrast",
    "Adams et al. 2015, 724-723",
    "46%"
  ),
  createData("Leistung der Spieler", "Colusso et al. 2016, S. 3022", "80%"),

  createData("", "Durchschnittliche Effizienz: ", "47,33%"),
];

function Healthiness(props) {
  return (
    <Tooltip title={props.value + " g"}>
      {props.value < 10 ? (
        <FavoriteIcon style={{ color: green[500] }} />
      ) : props.value < 20 ? (
        <FavoriteBorderIcon style={{ color: orange[500] }} />
      ) : (
        <SentimentVeryDissatisfiedIcon style={{ color: red[500] }} />
      )}
    </Tooltip>
  );
}
function HealthinessKcal(props) {
  return (
    <Tooltip title={props.value + " kcal"}>
      {props.value < 125 ? (
        <FavoriteIcon style={{ color: green[500] }} />
      ) : props.value < 250 ? (
        <FavoriteBorderIcon style={{ color: orange[500] }} />
      ) : (
        <SentimentVeryDissatisfiedIcon style={{ color: red[500] }} />
      )}
    </Tooltip>
  );
}

//Example 2

const wlanData = [
  {
    name: "5ma1",
    securityLevel: 1,
  },
  {
    name: "90sf",
    securityLevel: 1,
  },
  {
    name: "m4z7",
    securityLevel: 2,
  },
  {
    name: "h41l",
    securityLevel: 2,
  },
  {
    name: "83hi",
    securityLevel: 3,
  },
  {
    name: "7n4c",
    securityLevel: 3,
  },
];

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <NavBar>
      <ThemeProvider theme={theme}>
        <div>
          <Head>
            <title>Visualisation</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <TitleBox
            title={"Visualisation"}
            effort={1}
            effectiveness={53}
            efficiency={1}
          ></TitleBox>
          <Typography gutterBottom>
            Der ursprüngliche Nudge von 1 wurde als „Deceptive Visualisation“
            bezeichnet, da der Fokus hauptsächlich auf visuelle Täuschungen
            gelegt wurde [vgl. 1]. In dieser Guideline wird dieser Nudge um
            visuelle Darstellungen erweitert, die nicht nur als eine visuelle
            Täuschung dargestellt sind und daher wurde der Name zu
            „Visualisation“ abgekürzt. Der „Visualisation“ Nudge basiert auf
            Salienz [vgl. 1]. Salienz bedeutet, dass sich Menschen mit einer
            höheren Wahrscheinlichkeit auf die Elemente konzentrieren, die
            hervorgehoben sind, und die ignorieren, die es nicht sind [vgl. 2].
            Dieser Nudge nutzt diese Tatsache aus, um die Wahrnehmung der Nutzer
            zu verändern und um den Fokus auf gewünschte Elemente zu setzen
            [vgl. 1]. „Visualisation“ Nudge besitz viele Ähnlichkeiten mit einem
            ursprünglichen grundlegenden Nudge von Thaler et al. mit dem Namen
            Incentives (siehe Kapitel 2.1.5.6.).{" "}
          </Typography>
          <Typography gutterBottom>
            Dieser Nudge kann, wie bereits erwähnt, als eine visuelle Täuschung
            umgesetzt werden [vgl. 1]. Dies wäre beispielweise eine gezielte
            Beleuchtung der Mitte von einem Teller, um damit die Portion größer
            aussehend zu lassen und somit das Gefühl geben, dass mehr gegessen
            wurde, als es in der Realität ist [vgl. 3].{" "}
          </Typography>
          <Typography gutterBottom>
            In den Digitalen Umgebungen, können dies visuelle Verdeutlichungen
            von bestimmten Elementen sein, die eine bestimmte Tatsache
            hervorheben [vgl. 1, vgl. 3, 4]. Dies können beispielweise visuelle
            Verdeutlichungen von „Buttons“ für ältere Nutzer sein, damit das
            Ziel schneller auffällt und größer aussieht und somit die „point and
            click“ Aufgaben schneller und effizienter erledigt werden können
            [vgl. 4]. Im Bereich Healtcare können dies „Healthy Labels“ sein,
            die visuell zeigen, wie bestimmte Ware gesund sind und somit wird
            erzielt, dass gesündere Ware gekauft werden [vgl. 5]. Im
            Energiesektor sind dies Energieetiketten, die mit
            Farbenverdeutlichen, wie energieeffizient bestimmte Geräte sind
            [vgl. 6]. Im Bereich der IT-Sicherheit, wie bereits im Kapitel 3.4.2
            erwähnt, kann dies eine farbige Darstellung von sicheren und
            unsicheren Netzwerken sein.{" "}
          </Typography>
          <Typography gutterBottom>
            Die meiste Nudges versuchen in einen oder anderen Weise die
            Wahrnehmung der Nutzer zu verändern, wie Beispielsweise
            „Positioning“ Nudge (siehe Kapitel 3.4.2) mit einer Veränderung der
            Anordnung von Elementen, oder „Adding Inferior Alternatives“ Nudge
            mit einem Hinzufügen von „decoy“ Alternativen (siehe Kapitel 3.4.3).
            „Visualisation“ Nudge unterscheidet sich im Gegensatz zu anderen
            Nudges, indem der Fokus auf die reine visuelle Darstellung gesetzt
            wird. Dies wäre Beispielsweise, wie in oberen Absätzen erklärt, eine
            alternative Darstellung von bereits bestehenden Informationen, wie
            Energieetiketten, die neben einander in verschiedenen Farbtönen
            angezeigt werden, oder eine Darstellung von „Buttons“ rund um die
            ein Kreis gezeichnet wird, damit sie besser zu sehen sind, oder eine
            Darstellung von sicheren Netzwerken in grünen Farben und von
            unsicheren Netzwerken in roten.{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            Wie erwähnt, erfolgt die Umsetzung von „Visualisation“ Nudge dank
            der Tatsache, dass Menschen einen Fokus auf hervorgehobene Elemente
            setzen [vgl. 2]. In webbasierten Umgebungen können verschiedene
            Elemente hervorgehoben werden, oder visuell statt nur textuell
            leicht dargestellt werden. Daher werden folgende passende Beispiele
            umgesetzt:{" "}
          </Typography>
          <Typography gutterBottom>
            Das erste Beispiel bezieht sich auf „Healthy Labels“ [vgl. 5, vgl.
            9]. Das Ziel von „Healthy Labels“ ist eine erhöhte Konzentration der
            Nutzer auf wichtige Informationen bei Lebensmitteletiketten und eine
            Hervorhebung, welche enthaltene Nährwerte zu einer gesunden
            Ernährung führen könnten [vgl. 5]. Ein anderes Ziel ist eine
            Erleichterung bei dem Ignorieren von Marketing-Aspekten, das in
            vielen Fällen die wichtige Informationen über einer ungesunden
            Ernährung versteckt [vgl. 5]. Solche Umsetzung eignet sich nicht nur
            für Etiketten in einem Lebensmittelgeschäft, aber auch für
            Online-Shops, die Lebensmittel verkaufen, da eine Verdeutlichung
            durch verschiedene Ikonen oder Hervorhebungen von verschiedenen
            Elementen leicht umsetzbar sind. In diesem Beispiel wird die
            Variante mit drei farbigen Ikonen umgesetzt, um zu verdeutlichen,
            welche Ernährung gesund ist.{" "}
          </Typography>
          <Example
            maxWidth="900"
            link="https://codesandbox.io/s/visualisation1healthiness-6c8vq?file=/index.js"
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="/peanut.jpg"
                    title="imageProductC"
                    height="240"
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Geröstete Erdnüsse
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      kcal/100g: <HealthinessKcal value="630" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Fett/100g: <Healthiness value="53" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Zucker/100g: <Healthiness value="3.6" />
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      Erfahre mehr
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="/ceaser.jpg"
                    title="imageProductC"
                    height="240"
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Caesar Salat
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      kcal/100g: <HealthinessKcal value="44" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Fett/100g: <Healthiness value="2.1" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Zucker/100g: <Healthiness value="2.1" />
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      Erfahre mehr
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="/burger.jpg"
                    title="imageProductC"
                    height="240"
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Burger
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      kcal/100g: <HealthinessKcal value="303" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Fett/100g: <Healthiness value="14" />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      Zucker/100g: <Healthiness value="5" />
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      Erfahre mehr
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Example>
          <Typography gutterBottom>
            Das zweite Beispiel bezieht sich auf das Gebiet der IT-Sicherheit
            mit der Studie von 7. Ziel von dieser Studie war eine Erhöhung der
            Auswahlrate von sicheren Netzwerken. Dies wurde anhand von
            verschiedenen Nudges versucht, unter deren „Visualisation“ Nudge zu
            finden war [vgl. 7]. „Visualisation“ Nudge hat eine hohe
            Erfolgsrate, im Vergleich zu anderen Nudges, von 53,3%, daher wurde
            dieses Beispiel zusätzlich zu dem Beispiel „Healthy Labels“ gewählt,
            auch wenn die Umsetzung sehr ähnlich ist. Die sicherste Wi-Fis
            werden als grüne Ikonen angezeigt, die mittle sichere als
            Orangene/Gelbe und die unsichere als rote Ikonen. Da dieser Nudge am
            besten im Zusammenspiel mit „Positioning“ Nudge funktioniert, werden
            diese zusammen angewendet. Daher werden die sicherste Wi-Fis oben
            positioniert und die unsicheren unten, da eine Anordnung gewählt
            werden muss.{" "}
          </Typography>
          <Example>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              {wlanData.map((singleWlan) => (
                <Grid item key={singleWlan.name}>
                  {singleWlan.securityLevel <= 1 ? (
                    <div>
                      <Grid container direction="row">
                        <Grid item>
                          <Typography>{singleWlan.name}</Typography>
                          <Typography>{singleWlan.name}</Typography>
                        </Grid>
                        <Grid item>
                          <SignalWifi4BarLockIcon
                            style={{ color: green[600], display: "inline" }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  ) : singleWlan.securityLevel <= 2 ? (
                    <div>
                      <Typography>{singleWlan.name}</Typography>{" "}
                      <SignalWifi1BarLockIcon style={{ color: orange[600] }} />
                    </div>
                  ) : (
                    <div>
                      <Typography>{singleWlan.name}</Typography>{" "}
                      <SignalWifi3BarIcon style={{ color: red[600] }} />
                    </div>
                  )}
                </Grid>
              ))}
            </Grid>
          </Example>
          <Typography gutterBottom>
            Das dritte Beispiel bezieht sich auf Energieetiketten.
            Energieetiketten verdeutlichen die Informationen über
            Energieeffizienz und somit wird der Nutzer zu einem
            umweltfreundlicheren Verhalten aufgefordert [vgl. 6, vgl. 10].
            Dieses Beispiel wird mit Bildern umgesetzt, die von der Europäische
            Union online zur Verfügung stehen [11].{" "}
          </Typography>

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
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
            Die Effektivität der Studie von [3] wurde im Vergleich zu einem
            Standartzustand berechnet. Da eine Auswahl zwischen der gleichen
            Mahlzeit, aber mit unterschiedlichen Licht-Kontrasten stattgefunden
            hat, wäre die Prozentuelle Auswahl von zwei gleichen Mahlzeiten,
            ohne jeder Anwendung von Nudges, genau 50%. Daher wurde die
            Abweichung von diesem Wert berechnet. Dies war eine Abweichung
            zwischen den Werten 50% und 73%, falls eine Erhöhung erwünscht war
            und den Werten 50% und 27% falls eine Verringerung erwünscht war. In
            beiden Fällen ist die Abweichung 23% und daher war die Berechnete
            Effizienz 50/23 = 0,46 {"=>"} 46%.
          </Typography>
          <Typography gutterBottom>
            Dieser Nudge, auch wenn nah an der Grenze zu einer hohen
            Effizienzklasse, wird mit der durchschnittlichen Effektivität von
            47,33% in die Effizienzklasse mittel angeordnet.{" "}
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
            2. Juskan M (2018) Sound change, priming, salience: Producing and
            perceiving variation in Liverpool English. Language variation, vol
            3. Language Science Press, Berlin
          </Typography>
          <Typography gutterBottom>
            3. Adams AT, Costa J, Jung MF et al. (2015) Mindless Computing:
            Designing Technologies to Subtly Influence Behavior. Proc ACM Int
            Conf Ubiquitous Comput 2015: 719–730.
            https://doi.org/10.1145/2750858.2805843
          </Typography>
          <Typography gutterBottom>
            4. Hollinworth N, Hwang F, Field DT (2013) Using Delboeuf's illusion
            to improve point and click performance for older adults. In: Mackay
            W, Brewster S, Mackay WE (eds) CHI 2013: Extended abstracts of the
            31st Annual CHI Conference on Human Factors in Computing Systems :
            27 April - 2 May 2013, Paris, France. ACM, [Place of publication not
            identified], pp 1329–1334
          </Typography>
          <Typography gutterBottom>
            5. Cioffi CE, Levitsky DA, Pacanowski CR et al. (2015) A nudge in a
            healthy direction. The effect of nutrition labels on food purchasing
            behaviors in university dining facilities. Appetite 92: 207–216.
            https://doi.org/10.1016/j.appet.2015.04.053
          </Typography>
          <Typography gutterBottom>
            6. Ölander F, Thøgersen J (2014) Informing Versus Nudging in
            Environmental Policy. J Consum Policy 37: 341–356.
            https://doi.org/10.1007/s10603-014-9256-2
          </Typography>
          <Typography gutterBottom>
            7. Turland J, Coventry L, Jeske D et al. (2015) Nudging towards
            security. In: Lawson S, Dickinson P (eds) British HCI 2015:
            Proceedings of the British HCI Conference 2015 : July 13-17, 2015,
            Lincoln, Lincolnshire, UK. Association for Computing Machinery, New
            York, New York, pp 193–201
          </Typography>
          <Typography gutterBottom>
            8. Colusso L, Hsieh G, Munson SA (2016) Designing Closeness to
            Increase Gamers' Performance. In: #chi4good: CHI 2016 : San Jose,
            CA, USA, May 7-12 : proceedings : the 34th Annual CHI Conference on
            Human Factors in Computing Systems : San Jose Convention Center. The
            Association for Computing Machinery, New York, New York, pp
            3020–3024
          </Typography>
          <Typography gutterBottom>
            9. Thorndike AN, Sonnenberg L, Riis J et al. (2012) A 2-phase
            labeling and choice architecture intervention to improve healthy
            food and beverage choices. Am J Public Health 102: 527–533.
            https://doi.org/10.2105/AJPH.2011.300391
          </Typography>
          <Typography gutterBottom>
            10. Mirsch T, Lehrer C, Jung R (2017) Digital Nudging: Altering User
            Behavior in Digital Environments. In: Proceedings der 13.
            Internationalen Tagung Wirtschaftsinformatik (WI 2017), St. Gallen,
            Switzerland, pp 634–648
          </Typography>
          <Typography gutterBottom>
            11. Directorate-General for Communication (2020) Energy Label
            Generator.
            https://ec.europa.eu/energy/topics/energy-efficiency/energy-label-and-ecodesign/energy-label-generator_en.
            Accessed 11 Jul 2020
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
