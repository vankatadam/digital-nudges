import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography component="span" {...props} />);

export default function designCycle() {
  return (
    <NavBar>
      <Typography variant="h5">Design Cycle</Typography>

      <Typography>
        Da Digital Nudges kontextabhängig sind, erforden sie eine individuelle
        Anpassung. Um die individuelle anpassung strukturiert vornehmen zu
        können, wurde für diesen Guideline ein passender Entwurfsdesig von
        Schneider, Weinmann und Brocke gewählt (Quelle). Dieser Zyklus läuft in
        4 Phasen ab (siehe Abbildung 1).
      </Typography>
      {/** Abbildung 1 */}
      <Typography variant="h7">1. Goals</Typography>
      <Typography>
        Zuerst muss der Entscheidungstyp festgelegt werden. Dies heißt
      </Typography>

      <Typography variant="h6">2. Users</Typography>
      <Typography></Typography>
      <Typography>Ein Link auf Biases und System 1 und 2</Typography>

      <Typography variant="h7">3. Nudge</Typography>
      <Typography></Typography>
      <Typography>Klar machen, dass dies der Fokus ist</Typography>

      <Typography variant="h7">4. Test</Typography>
      <Typography></Typography>
    </NavBar>
  );
}
