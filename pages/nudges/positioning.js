import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Example from "../../components/Examples";
import NavBar from "../../components/Navigation-bar";
import theme from "../../src/theme";
import { ThemeProvider } from "@material-ui/styles";
import TitleBox from "../../components/TitleBox";
import Paper from "@material-ui/core/Paper";
import { withStyles, lighten } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";
import { red } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";

import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import PropTypes from "prop-types";

import MoodIcon from "@material-ui/icons/Mood";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

//Grid Example
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

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
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  rootGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography {...props} />);

//Efficiency

function createLiterature(name, source, effectivity) {
  return { name, source, effectivity };
}

const rowsLiterature = [
  createLiterature("Gesunde Ernährung", "Lee et al. 2011, S. 328–332", "92%"),
  createLiterature(
    "Auswahl eines sicheren WiFis",
    "Turland et al. 2015, S. 199",
    "14%"
  ),
  createLiterature("Ersparnisse", "Madrian und Shea 2001, S. 1160", "132%"),
  createLiterature("", "Durchschnittliche Effizienz: ", "85,1%"),
];

//Sorting Example1 start
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen Joghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice Cream Sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g Portion)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Kalorien" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fett (g)" },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Kohlenhydrate (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Proteine (g)",
  },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//Sorting Example1 end

export default function GettingStarted() {
  const classes = useStyles();

  //sorting example1 start

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  //sorting example1 end

  //Grid Example
  const tileData = [
    {
      img: "/imageGrid1.jpg",
      title: "Cookies",
      preis: "1,99 €",
    },
    {
      img: "/imageGrid2.jpg",
      title: "Weiße Schokolade",
      preis: "0,99 €",
    },
    {
      img: "/imageGrid3.jpg",
      title: "Chips",
      preis: "1,49 €",
    },
    {
      img: "/imageGrid4.jpg",
      title: "Ice",
      preis: "0,99 €",
    },
    {
      img: "/imageGrid5.jpg",
      title: "Dunkle Schokolade",
      preis: "1,99 €",
    },
    {
      img: "/imageGrid6.jpg",
      title: "Chips mit Ketchup",
      preis: "1,99 €",
    },
  ];
  //Grid Example end

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
            effort={3}
            effectiveness={53}
            efficiency={2}
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
            Das erste Beispiel wird ein grundlegendes Beispiel inspiriert von
            [2] sein [vgl. 2]. In diesem Beispiel wird die Anordnung der
            Elemente verändert, je nachdem welche Elemente bevorzugt werden.
            Dies kann eine Anordnung anhand der Qualität sein [vgl. 2], aber es
            können auch zuerst bevorzugte oder empfohlene Produkte, wie bei
            Amazon [vgl. 6], angezeigt werden.{" "}
          </Typography>
          <Example
            maxWidth="900"
            link="https://codesandbox.io/s/positioning1sorting-cih3k"
          >
            {" "}
            <div className={classes.root}>
              <Toolbar className={clsx(classes.root)}>
                <Typography
                  className={classes.title}
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  Nährstoffe
                </Typography>
              </Toolbar>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={"medium"}
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.name}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </div>
          </Example>
          https://material-ui.com/components/tables/ Sorting & Selecting Example
          <Typography gutterBottom>
            Das zweite Beispiel beschäftigt sich mit der Verstärkung dieses
            Effektes im ersten Beispiel [vgl. 3]. Dies wird anhand von einer
            visuellen Darstellung in Form von gefärbten Ikonen, beispielweise in
            Farben zwischen grün (das bevorzugte Element) und rot, erreicht
            [vgl. 3].{" "}
          </Typography>
          <Example
            maxWidth="900"
            link="https://codesandbox.io/s/positioning2sortingvisualisation-xi7p8?file=/index.js"
          >
            {" "}
            <div className={classes.root}>
              <Toolbar className={clsx(classes.root)}>
                <Typography
                  className={classes.title}
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  Nutrition
                </Typography>
              </Toolbar>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={"medium"}
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  />
                  <TableBody>
                    {stableSort(rows, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.name}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              padding="none"
                            >
                              {row.name}
                            </TableCell>
                            <TableCell align="right">
                              {row.calories < 300 ? (
                                <MoodIcon style={{ color: green[500] }} />
                              ) : row.calories < 400 && row.calories >= 300 ? (
                                <SentimentSatisfiedIcon
                                  style={{ color: orange[500] }}
                                />
                              ) : (
                                <SentimentVeryDissatisfiedIcon
                                  style={{ color: red[500] }}
                                />
                              )}{" "}
                              {row.calories}
                            </TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </div>
          </Example>
          <Typography gutterBottom>
            Das dritte Beispiel bezieht sich auf eine Verringerung der Wahl
            eines bestimmten Elements. Dies wird ähnlich wie im Beispiel eins
            erreicht, nur umgekehrt angewendet [vgl. 5]. Somit werden die
            unerwünschten Elemente an das Ende den Listen eingefügt [vgl. 5].{" "}
          </Typography>
          NUR ORDER HÄTTE MAN ZU DESC geändert
          <Typography gutterBottom>
            Das letzte Beispiel beschäftigt sich mit einer Erhöhung der freien
            Wahl für den Nutzer und somit einer Verringerung dieses
            „Positioning“ Effektes. Dies wird dank einer Auflistung in einer
            alternativen Form von Listen und zwar in einer Gitter Form [vgl. 4].{" "}
          </Typography>
          <Example link="https://codesandbox.io/s/positioning3sortinggrid-u4oiy">
            <div className={classes.root}>
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile
                  key="Subheader"
                  cols={2}
                  style={{ height: "auto" }}
                >
                  <ListSubheader component="div">
                    Kaufe deinen Liebligssnack
                  </ListSubheader>
                </GridListTile>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>Preis: {tile.preis}</span>}
                      actionIcon={
                        <Button style={{ color: "white" }}>Kaufen</Button>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Example>
          Bilder werden automatisch in die Grid größe reingepasst
          https://material-ui.com/components/grid-list/
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
                {rowsLiterature.map((row) => (
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
