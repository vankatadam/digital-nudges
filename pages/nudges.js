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

export default function designCycle() {
  const classes = useStyles();

  return (
    <NavBar>
      <Typography variant="h3" gutterBottom>
        Nudges
      </Typography>
      <Typography gutterBottom>
        Wie in Getting Started Erklärt, sind Nudges kleine Stupse, die die
        Chance erhöhe, dass ein Nutzer eine bestimmte Entscheidung trifft.{" "}
      </Typography>
      <Typography gutterBottom>
        In der Folgenden Abbildung können sie finden, wie jede Nudge Seite
        aufgebaut ist:
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
        Zuerst wird die grundlegende Funktionsweise jedes Nudges erklärt.
        Anschließend werden praktische Beispiele mit deren Umsetzungen erklärt.
        Jedes Beispiel ist mit einem Link auf Codesandbox versehen, damit jedes
        Beispiel nachvollgezogen werden kann und reproduziert werden kann.
        Abschließend werden Design Empfehlungen und Literatur erwähnt.
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
