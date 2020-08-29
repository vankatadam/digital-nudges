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

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
            effectiveness={32.6}
            efficiency={2}
          ></TitleBox>
          <Typography gutterBottom>
            {" "}
            <BoldTypo>„Adding Inferior Alternatives“</BoldTypo> Nudge{" "}
            <BoldTypo> basiert</BoldTypo> auf dem{" "}
            <BoldTypo> „Decoy Effect“</BoldTypo>, einem kognitivem Bias, [vgl.
            1, 2], der in manchen Literaturquellen auch unter dem Begriff
            <BoldTypo>„Attraction Effect“</BoldTypo> [vgl. 3, 4] oder{" "}
            <BoldTypo> „Asymmetric Dominance Effect“</BoldTypo>
            zu finden ist [vgl. 3]. Dieser Effekt zeigt eine{" "}
            <BoldTypo>inkonsistente Wahl</BoldTypo>, wenn{" "}
            <BoldTypo>zwei gute Produkte</BoldTypo>, beide aus anderen Gründen
            gut, präsentiert werden und ein
            <BoldTypo>schlechteres Produkt</BoldTypo>, das{" "}
            <BoldTypo>als ein „Decoy“ agiert</BoldTypo> [vgl. 2–4]. Dieser
            Effekt kann genutzt werden, wenn in der Regel drei Produkte
            angezeigt werden, und <BoldTypo>ein Produkt</BoldTypo> im Gegensatz
            zu einem Konkurrenzprodukt, <BoldTypo>bevorzugt</BoldTypo> werden
            soll [vgl. 4].{" "}
          </Typography>
          <Typography gutterBottom>
            Ein passendes Beispiel kommt aus dem Bereich Online-Shopping [vgl.
            4]: In dieser Forschung wurde der „Decoy Effect“ bei einer Auswahl
            von Laptops nachgewiesen. In der ersten Phase wurden nur zwei
            Produkte A und B zur Auswahl angeboten. Nach der erste Auswahlrunde
            entschied sich die erste Testgruppe für das{" "}
            <BoldTypo>Produkt A mit 65% und für das Produkt B mit 35%</BoldTypo>
            .{" "}
            <BoldTypo>Nachdem ein „Decoy“ Produkt C hinzugefügt wurde</BoldTypo>
            , das in allen Kategorien schlechter als B, aber mit einem
            vergleichbaren Preis zu B und günstiger als C war, wurde die zweite
            Testgruppe zur Auswahl gelassen. Dies führte zu einer Wahl von
            <BoldTypo> Produkt B von 69% und C von 31%</BoldTypo>.
          </Typography>
          <Typography gutterBottom>
            Aus dieser Studie wurde ersichtlich, dass anhand des „Decoy Effects“
            im Bereich E-Shopping ein bestimmtes Produkt einem anderen bevorzugt
            werden kann. Dies hat jedoch <BoldTypo> ein paar Regeln</BoldTypo>,
            die beachtet werden müssen und auch in dieser Studie beobachtet
            wurden [vgl. 4]: Die
            <BoldTypo> Produkte A und B</BoldTypo> müssen beide{" "}
            <BoldTypo> gleichwertig visuell dargestellt</BoldTypo>
            werden oder das bevorzugte Produkt B besser als A. Das{" "}
            <BoldTypo> „Decoy“ Produkt</BoldTypo> muss in{" "}
            <BoldTypo> allen Bereichen schlechter als B</BoldTypo> aber trotzdem{" "}
            <BoldTypo> in etwas besser als C</BoldTypo> sein (wie in diesem Fall
            der Preis) und immer noch z.B. anhand des Preises mit B vergleichbar
            sein. Durch eine bessere Visuelle Darstellung, wie beispielweise
            <BoldTypo> Animationen</BoldTypo> bei Produkt B, kann der{" "}
            <BoldTypo>„Decoy Effect“ leicht verstärkt</BoldTypo>
            werden.{" "}
          </Typography>
          <hr />
          <Typography variant={"h4"}>Konkrete Beispiele</Typography>
          <hr />
          <Typography gutterBottom>
            Wie erwähnt, erfolgt die <BoldTypo>Umsetzung</BoldTypo> von „Adding
            Inferior Alternatives“ Nudge mit Hilfe von einem{" "}
            <BoldTypo> „Decoy“ Element</BoldTypo>
            [vgl. 2–4]. Bei der Erstellung dieses Elements sollte beachtet
            werden, dass das <BoldTypo> „Decoy“ Element</BoldTypo> in allen
            wichtigen Faktoren
            <BoldTypo> schlechter</BoldTypo> ist als das Element, das bevorzugt
            werden soll [vgl. 4]. Falls es ein Konkurrenzprodukt gibt, sollte
            das{" "}
            <BoldTypo>
              „Decoy“ Element mindestens bei einem wichtigen Faktor besser als
              das Konkurrenz Element sein
            </BoldTypo>{" "}
            [vgl. 4]. Falls diese Regeln beachtet werden, sollte der erwünschte
            Effekt erzielt werden und zwar eine erhöhte Wahl des bevorzugten
            Produktes [vgl. 4].{" "}
          </Typography>
          <Typography gutterBottom>
            Als Beispiel wird das in der Forschung von Fasolo et al. aufgeführte
            <BoldTypo> Beispiel mit Laptops</BoldTypo> genommen, da es aus der
            Umgebung eines online E-shops stamm und somit perfekt zu dieser
            Guideline, die einen Fokus auf webbasierte Technologien setzt,
            passt. Dieses Beispiel ist ein Vergleich zwischen drei Laptops [vgl.
            4]: Der erste <BoldTypo>Laptop A</BoldTypo> wird die{" "}
            <BoldTypo> Konkurrenz </BoldTypo>darstellen,{" "}
            <BoldTypo> Laptop B</BoldTypo> das
            <BoldTypo> erwünschte Produkt</BoldTypo> und{" "}
            <BoldTypo> Laptop C</BoldTypo> wird den{" "}
            <BoldTypo> „Decoy“</BoldTypo> darstellen. Der „Decoy“ Laptop wird
            die aufgestellten Regeln verfolgen. Dies heißt, dass die{" "}
            <BoldTypo> aufgeführte Laptopspezifikationen geringer</BoldTypo> als
            bei dem Laptop B werden und das Laptop C{" "}
            <BoldTypo> günstiger als Laptop A</BoldTypo> sein wird. Dieses
            Beispiel wurde mit Hilfe von Material-UI „Grids“ und „Cards“
            umgesetzt [vgl. 5, 6]. Über die „CardMedia“ Komponente können Bilder
            eingefügt werden, die sich automatisch an die Karte anpassen [vgl.
            6].{" "}
          </Typography>
          <Example
            maxWidth="900"
            link="https://codesandbox.io/s/inferior1comparelist-mbdnn?file=/index.js"
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/imageProductA.jpg"
                      title="imageProductA"
                      height="240"
                      component="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Laptop A
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        RAM: 8GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        CPU: 3900MHz
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Kerne: 6
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        GPU: 6GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        Festplatte: 1TB SSD
                      </Typography>
                      <Typography variant="body2" color="primary" component="p">
                        1799 €
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zum Warenkorb hinzufügen
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/imageProductB.jpg"
                      title="imageProductB"
                      height="240"
                      component="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Laptop B
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        RAM: 8GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        CPU: 3400MHz
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Kerne: 6
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        GPU: 4GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        Festplatte: 512GB SSD
                      </Typography>
                      <Typography
                        variant="body2"
                        color="secondary"
                        component="p"
                      >
                        999 €
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zum Warenkorb hinzufügen
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/imageProductC.jpg"
                      title="imageProductC"
                      height="240"
                      component="img"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Laptop C
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        RAM: 6GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        CPU: 2900MHz
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Kerne: 3
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        GPU: 3 GB
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        gutterBottom
                      >
                        Festplatte: 512 HDD
                      </Typography>
                      <Typography variant="body2" color="primary" component="p">
                        949 €
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Zum Warenkorb hinzufügen
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Example>

          <hr />
          <Typography variant={"h4"}>Design Berücksichtigungen</Typography>
          <hr />
          <Typography gutterBottom>
            Abschließend werden mehrere Design-Berücksichtigungen und
            Fragestellungen zu diesem Nudge von Caraban et al. aufgeführt [1]:
            Kann das System eine Reihe unterschiedlicher,{" "}
            <BoldTypo>
              minderwertiger Alternativ- Optionen präsentieren
            </BoldTypo>
            ? Wie kann der „Decoy“ die
            <BoldTypo> gewünschte Alternative fördern</BoldTypo>? Kann das
            System auf <BoldTypo> maximal drei bis vier</BoldTypo> Elementen,
            zwischen denen entschieden wird, verringert werden?{" "}
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
          <Typography gutterBottom>
            Die Effektivität stellt bei „Inferior Alternatives“-Studien die
            prozentuelle Erhöhung der Auswahlrate von der gewünschten
            Alternative im Vergleich zu der Auswahlrate ohne der Anwendung von
            diesem Nudge, genauso, wie bei beiden vorherigen Nudges, dar.{" "}
          </Typography>
          <Typography gutterBottom>
            Die Effektivität der Studie von 3 wurde als ein Durchschnitt der
            vier Untersuchungen berechnet. Genauso wurde auch ein Durchschnitt
            aus beiden Experimenten von 4 berechnet.{" "}
          </Typography>
          <Typography gutterBottom>
            Die Studien zeigen, dass der „Inferior Alternatives“ Nudge im
            Vergleich zu den vorherigen zwei Nudges schlechter abschneidet.
            Somit wird dieser Nudge mit der durchschnittlichen Effektivität von
            <BoldTypo>
              {" "}
              32,6% in der Effizienzklasse im mittleren Abschnitt
            </BoldTypo>{" "}
            angeordnet.{" "}
          </Typography>
          <Typography gutterBottom>
            Da Material-UI Grids und Cards leicht zu erstellen sind, liegt der
            Aufwand in der reinen Umsetzung unter eine Stunde. Der
            Planungsaufwand ist hierbei hoch, da die Produkte manuell für einen
            Vergleich ausgewählt werden müssen. Da nur der reine
            <BoldTypo> Umsetzungsaufwand</BoldTypo> gemessen wird, wird der
            „Adding Inferior Alternatives” Nudge in der Klasse{" "}
            <BoldTypo> niedrig</BoldTypo> eingestuft.
          </Typography>
          <Typography gutterBottom>
            Da die Effektivitätsklasse bei „Adding Inferior Alternatives“ Nudge
            mittelhoch ist und der Aufwand niedrig ist, wird die{" "}
            <BoldTypo> Effizienz als mittelgroß</BoldTypo> eingeschätzt.
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
            2. Bateman IJ, Munro A, Poe GL (2008) Decoy Effects in Choice
            Experiments and Contingent Valuation: Asymmetric Dominance. Land
            Economics 84: 115–127. https://doi.org/10.3368/le.84.1.115
          </Typography>
          <Typography gutterBottom>
            3. Dimara E, Bezerianos A, Dragicevic P (2017) The Attraction Effect
            in Information Visualization. IEEE Trans Vis Comput Graph 23:
            471–480. https://doi.org/10.1109/TVCG.2016.2598594
          </Typography>
          <Typography gutterBottom>
            4. Fasolo B, Misuraca R, McClelland GH et al. (2006) Animation
            attracts: The attraction effect in an on-line shopping environment.
            Psychol Mark 23: 799–811. https://doi.org/10.1002/mar.20134
          </Typography>
          <Typography gutterBottom>
            5. Material-UI (2020) Grid React component.
            https://material-ui.com/components/grid/#grid. Accessed 05 Jul 2020
          </Typography>
          <Typography gutterBottom>
            6. Material-UI (2020) Card React component.
            https://material-ui.com/components/cards/. Accessed 10 Jul 2020
          </Typography>
          <Typography gutterBottom>
            7. Lee MK, Kiesler S, Forlizzi J (2011) Mining behavioral economics
            to design persuasive technology for healthy choices. In: Tan D,
            Fitzpatrick G, Gutwin C et al. (eds) Conference proceedings and
            extended abstracts / the 29th Annual CHI Conference on Human Factors
            in Computing Systems: CHI 2011, Vancouver, BC, May 7 - 12, 2011.
            ACM, New York, NY, pp 325–334
          </Typography>
        </div>
      </ThemeProvider>
    </NavBar>
  );
}
