import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import theme from "../src/theme";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundImage: "linear-gradient(135deg, black, white)",
  },
}));

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography {...props} />);

export default function designCycle() {
  const classes = useStyles();

  return (
    <NavBar>
      <Typography variant="h3" gutterBottom>
        Nudges
      </Typography>
      <Typography gutterBottom>
        Wie in Getting Started erklärt, sind Nudges kleine Stupse, die die
        Chance erhöhe, dass ein Nutzer eine bestimmte Entscheidung trifft.{" "}
      </Typography>
      <Typography gutterBottom>
        Um sich in der Guideline orientieren zu können wird in der Folgenden
        Abbildung gezeigt, wie jede Seite aufgebaut ist:
      </Typography>
      <img
        src="/wireframe.jpg"
        width="50%"
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
      />
      <Typography gutterBottom>
        Zuerst wird die{" "}
        <BoldTypo>grundlegende Funktionsweise jedes Nudges</BoldTypo> erklärt.
        Anschließend werden <BoldTypo>praktische Beispiele</BoldTypo> mit deren
        Umsetzungen erklärt. Jedes Beispiel ist mit einem{" "}
        <BoldTypo>Link auf Codesandbox</BoldTypo> versehen, damit jedes Beispiel
        nachvollgezogen werden kann und reproduziert werden kann. Abschließend
        werden <BoldTypo>Design Empfehlungen</BoldTypo> und Literatur erwähnt.
      </Typography>
      <Typography gutterBottom>
        Jeder Nudge wurde auf seine Effektivität in unterschiedlichen Studien
        betrachtet. Zusätzlich wurde der Umsetzungsaufwand anhand der eigenen
        Implementierung abgeschätzt. Aus diesen zwei Messgrößen wurde
        letzendlich die Effizienz abgeleitet. Diese Messgrößen können bei jedem
        Nudge Titel direkt gesehen werden. Zusätzlich ist eine Tabelle mit
        betrachteten Studien am Ende jeder Seite aufgelistet.
      </Typography>
      <Typography gutterBottom>
        Der Fokus von den gezeigten Beispielen ist auf die UI Oberfläche
        gesetzt, sodass eigene Logik für weitere Funktionen selbst eingebunden
        werden muss.
      </Typography>
    </NavBar>
  );
}
