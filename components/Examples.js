import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 500,
    marginTop: 8,
    marginBottom: 8,
  },
  container: {
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8,
  },
});

export default function Examples(props) {
  const classes = useStyles();

  const cardStyle = {
    maxWidth: 900,
  };
  const cardStyle2 = {
    maxWidth: 700,
  };

  return (
    <div className={classes.container}>
      <Card
        className={classes.root}
        style={
          props.maxWidth == 900
            ? cardStyle
            : props.maxWidth == 700
            ? cardStyle2
            : {}
        }
      >
        <CardContent>{props.children}</CardContent>
        <CardActions>
          <Button size="small" href={props.link}>
            Codesandbox
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
