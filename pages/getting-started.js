import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";

export async function getStaticProps(context) {
  return {
    props: {
      navigation: {
        page: "current-page",
      },
    }, // will be passed to the page component as props
  };
}

export default function GettingStarted() {
  return (
    <div>
      <Head>
        <title>Getting Started</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Typography variant="h5">Getting Started</Typography>
      <a href="https://codesandbox.io/s/stupefied-framework-nmmvz?fontsize=14&hidenavigation=1&theme=dark">
        <img
          alt="Edit nmmvz"
          src="https://codesandbox.io/static/img/play-codesandbox.svg"
        />
      </a>
    </div>
  );
}
