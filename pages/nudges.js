import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import theme from "../src/theme";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Link from "next/link";
import Button from "@material-ui/core/Button";

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
})((props) => <Typography component="span" {...props} />);

export default function designCycle() {
  const classes = useStyles();

  return (
    <NavBar>
      <Typography variant="h3" gutterBottom>
        Nudges
      </Typography>
      <Typography gutterBottom>
        Wie in Getting Started erklärt, sind Nudges{" "}
        <BoldTypo>kleine Stupse</BoldTypo>, die die Chance erhöhe, dass ein
        Nutzer eine bestimmte Entscheidung trifft.{" "}
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
        nachvollgezogen werden kann und reproduziert werden kann. Der Fokus von
        den gezeigten Beispielen ist auf die UI Oberfläche gesetzt, sodass
        eigene Logik für weitere Funktionen selbst eingebunden werden muss.
        Abschließend werden <BoldTypo>Design Empfehlungen</BoldTypo> und
        Literatur erwähnt.
      </Typography>
      <Typography gutterBottom>
        Jeder Nudge wurde auf seine <BoldTypo>Effektivität</BoldTypo> in
        unterschiedlichen Studien betrachtet. Zusätzlich wurde der
        Umsetzungsaufwand anhand der eigenen Implementierung abgeschätzt. Aus
        diesen zwei Messgrößen wurde letzendlich die Effizienz abgeleitet. Diese
        Messgrößen können bei jedem Nudge Titel direkt gesehen werden.
        Zusätzlich ist eine Tabelle mit betrachteten Studien am Ende jeder Seite
        aufgelistet.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Nudge Übersicht
      </Typography>
      <Typography gutterBottom>
        <ol>
          <li>
            <Typography>
              <BoldTypo>Default Nudge</BoldTypo> ist die häufigste Form von
              Nudges. Es funktioniert dank der Tatsache, dass Menschen den Weg
              des niedrigsten Widerstandes wählen. Als Beispiel wären dies
              Newsletter Checkboxen, die "Abbonieren" vorausgewählt haben.
            </Typography>
          </li>
          <Link href="/nudges/defaults">
            <Button
              color="secondary"
              style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
            >
              Zu Defaults
            </Button>
          </Link>
          <li>
            <Typography>
              <BoldTypo>Positioning Nudge</BoldTypo> funbktioniert dank
              Anordnung von Elementen in einer Auflistung. Beispielsweise wäre
              dies eine standarte absteigende Sortierung von Waren, um damit
              höherwertigere Sachen zu verkaufen.
            </Typography>

            <Link href="/nudges/positioning">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Positioning
              </Button>
            </Link>
          </li>
          <li>
            <Typography>
              <BoldTypo>Adding Inferior Alternatives Nudge</BoldTypo>{" "}
              funktioniert dank eines "Decoy" Produktes. Dies kann benutzt
              werden, um ein Produkt im vergleich zu anderem zu bevorzugen.
            </Typography>

            <Link href="/nudges/adding-inferior-alternatives">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Inferior Alternatives
              </Button>
            </Link>
          </li>
          <li>
            <Typography>
              <BoldTypo>Visualisation Nudge</BoldTypo> funktioniert dank einer
              visuelle Verdeutlichungen von bestimmten Elementen. Dies könnten
              beispielsweise Energieetiketten sein.
            </Typography>

            <Link href="/nudges/vis">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Visualisation
              </Button>
            </Link>
          </li>
          <li>
            <Typography>
              <BoldTypo>Make Ressources Scarce Nudge</BoldTypo> funktioniert
              dank einer Reduzierung der wahrgenommenen Verfügbarkeit. Dies
              könnten limitierte Angebote bei Amazon sein.
            </Typography>

            <Link href="/nudges/make-ressources-scarce">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Make Ressources Scarce
              </Button>
            </Link>
          </li>
        </ol>
      </Typography>
    </NavBar>
  );
}
