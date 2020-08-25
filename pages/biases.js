import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import theme from "../src/theme";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

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
      <Typography variant="h5">Biasese</Typography>
    </NavBar>
  );
}
