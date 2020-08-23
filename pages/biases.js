import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import theme from "../src/theme";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundImage: "linear-gradient(135deg, black, white)",
  },
}));

export default function designCycle() {
  const classes = useStyles();

  return (
    <NavBar>
      <Typography variant="h5">Biasese</Typography>
    </NavBar>
  );
}
