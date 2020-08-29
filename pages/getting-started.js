import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundImage: "linear-gradient(135deg, black, white)",
  },
  fastStart: {
    border: "1px solid black",
    [theme.breakpoints.up("sm")]: {
      border: "2px solid black",
    },
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
    boxShadow: "3px 3px 8px 3px rgba(0, 0, 0, 0.1)",
  },
}));

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography component="span" {...props} />);

export default function GettingStarted() {
  const classes = useStyles();

  return (
    <NavBar>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Getting Started</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Typography variant="h3" gutterBottom>
          Getting Started
        </Typography>
        <div className={classes.fastStart}>
          <Typography>
            <BoldTypo>Schnellstart:</BoldTypo> Fokus dieser Guideline liegt auf
            der Implementierung mithilfe React und Material-UI (Planung und
            Testen nicht inbegriffen) sowie auf dem grundlegenden Verständnis
            von gewählten Digital Nudges.
            <Link href="/nudges">
              <Button color="secondary">Direkt zu Nudges</Button>
            </Link>
          </Typography>
        </div>
        <hr />
        <Typography variant="h4">Was sind Nudges</Typography>
        <hr />
        <Typography gutterBottom>
          Ähnlich wie in den Definitionen von Nudge in Business-Wörterbüchern,
          sind Nudges in der Regel nur <BoldTypo>kleine Stupser</BoldTypo> oder
          Stöße, die dazu dienen sollen, dass eine Handlung angeregt wird [vgl.
          1]. Dies können App Benachrichtigungen, eine andere Anordnung im Regal
          eines Lebensmittelgeschäfts [vgl. 2] oder kleine Veränderungen in
          Default Werten sein [vgl. 3]. Im Gegensatz dazu, sind beispielsweise
          Steuern, Mahnungen oder Gefängnisstrafe keine Nudges, auch wenn sie
          bestimmte Handlungen anregen, weil sie nicht vermeidbar sind [vgl. 2].
        </Typography>
        <Typography>
          Wie im Kapitel 1.1 bereits erwähnt, wurde das Wort Nudge zum ersten
          Mal von Richard Thaler und Cass Sunstein in 2009 verwendet. Hier
          wiederholt die Definition:{" "}
          <BoldTypo>
            “Nudge […] is any aspect of the choice architecture that alters
            people’s behavior in a predictable way without forbidding any
            options or significantly changing their economic incentives. To
            count as a mere nudge, the intervention must be easy and cheap to
            avoid. Nudges are not mandates. Putting the fruit at eye level
            counts as a nudge. Banning junk food does not.”
          </BoldTypo>{" "}
          [4]. Nudges ähneln damit bereits verwendeten Verhaltensstrategien wie
          Steuern auf Tabak (vgl. 5; vgl. 6) oder anderen legalen Instrumenten
          des Staates [vgl. 7]. Wie in der Definition erwähnt, unterscheiden sie
          sich allerdings indem sie die ökonomischen Anreize nicht verändern
          oder die Menge an Entscheidungsmöglichkeiten verringen [vgl. 4]. Somit
          ist die Verhaltensstrategie der Nudges nur von der
          Entscheidungsdarstellung abhängig. Die Entscheidungsdarstellung,
          -umgebung und ihr Architekt werden folgend näher erläutert.
        </Typography>
        <Typography gutterBottom></Typography>
        <hr />
        <Typography variant="h4">
          Wie kann mir diese Guideline helfen und wo soll ich anfangen?
        </Typography>
        <hr />
        <Typography gutterBottom>
          Fokus dieser Guideline liegt auf der beispielhaften Implementierung
          mithilfe React und Material-UI (Planung und Testen nicht inbegriffen)
          sowie auf dem grundlegenden Verständnis von gewählten Digital Nudges.
          Um mit der Implementierung anzufangen, sollten zuerst folgende
          Schritte durchgeführt werden:
        </Typography>
        <ol>
          <li>
            <Typography>
              Um den Fokus dieser Guideline auf die Implementierung zu
              verstehen, sollte zuerst der in 4 Phasen ablaufende und iterative{" "}
              <BoldTypo>Design Zyklus von Digital Nudges</BoldTypo> verstanden
              werden. Dies ist notwendig, da eine erfolgreiche Umsetzung von
              Digital Nudges nicht nur von der Implementierung abhängig ist,
              sondern auch von der Planung und dem Testen.
            </Typography>
          </li>
          <Link href="/design-cycle">
            <Button
              color="secondary"
              style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
            >
              Zu Design Cycle
            </Button>
          </Link>
          <li>
            <Typography>
              Um das grundlegende <BoldTypo>Verständnis des Nutzers</BoldTypo>{" "}
              zu bekommen, sollten grundlegende Heuristiken und Biases
              verstanden werden.
            </Typography>
            <Link href="/biases">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Biases
              </Button>
            </Link>
          </li>
          <li>
            <Typography>
              Bevor mit den genauen Nudges angefangen wird, kann optional das
              Verständnis über allgemeine "offline" Nudges vertieft werden, in
              dem die Seite mit grundlegenden Nudge Prinzipien von Thaler und
              Sunstein (2009) gelesen wird.
            </Typography>

            <Link href="/nudge-principles">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Nudge Prinzipien
              </Button>
            </Link>
          </li>
          <li>
            <Typography>
              Nachdem theoretische Grundlagen verstanden wurden, kann mit der
              <BoldTypo> Implementierung</BoldTypo> von Nudges angefangen
              werden!
            </Typography>

            <Link href="/nudges">
              <Button
                color="secondary"
                style={{ paddingLeft: 0, marginBottom: 0, paddingTop: 2 }}
              >
                Zu Nudges
              </Button>
            </Link>
          </li>
        </ol>
        <hr />
        <Typography variant="h4">Empfohlene Literatur</Typography>
        <hr />
        <Typography>
          Falls nur ein Buch gelesen werden soll, dann dieses:{" "}
        </Typography>
        <Typography gutterBottom>
          <BoldTypo>Nudge von Thaler und Sunstein</BoldTypo>, ISBN:
          978-0-14-311526-7
        </Typography>
        <Typography>Weitere Vertiefende Literatur:</Typography>
        <Typography>
          Thinking, fast and slow von Kahneman, ISBN: 978-0-374-27563-1
        </Typography>
        <Typography gutterBottom>
          23 Ways to Nudge: Kahneman von Caraban et al., DOI:
          10.1145/3290605.3300733
        </Typography>
        <hr />
        <Typography gutterBottom variant="h4">
          Referencen
        </Typography>
        <hr />
        <Typography gutterBottom>
          1. O'Shea S (ed) (2011) Cambridge business english dictionary. Ernst
          Klett Sprachen GmbH; Cambridge Unversity Press, Stuttgart, Cambrigde
        </Typography>
        <Typography gutterBottom>
          2. Cass R. Sunstein (2015) Nudges, Agency, Navigability, and
          Abstraction: A Reply to Critics. Review of Philosophy and Psychology:
          511–529
        </Typography>
        <Typography gutterBottom>
          3. Johnson EJ, Goldstein D (2003) Medicine. Do defaults save lives?
          Science 302: 1338–1339. https://doi.org/10.1126/science.1091721
        </Typography>
        <Typography gutterBottom>
          4. Thaler RH, Sunstein CR (2009) Nudge: Improving decisions about
          health, wealth, and happiness, Rev. and expanded ed., with a new
          afterword and a new chapter. Penguin, New York, NY
        </Typography>
        <Typography gutterBottom>
          5. Golden SD, Smith MH, Feighery EC et al. (2016) Beyond excise taxes:
          a systematic review of literature on non-tax policy approaches to
          raising tobacco product prices. Tob Control 25: 377–385.
          https://doi.org/10.1136/tobaccocontrol-2015-052294
        </Typography>
        <Typography gutterBottom>
          6. Möllenkamp M, Zeppernick M, Schreyögg J (2019) The effectiveness of
          nudges in improving the self-management of patients with chronic
          diseases: A systematic literature review. Health Policy 123:
          1199–1209. https://doi.org/10.1016/j.healthpol.2019.09.008
        </Typography>
        <Typography gutterBottom>
          7. Forji Amin G (2010) The Correlation between Law and Behaviour as
          Pillar of Human Society. International Journal of Punishment and
          Sentencing 6: 84–96
        </Typography>
      </ThemeProvider>
    </NavBar>
  );
}
