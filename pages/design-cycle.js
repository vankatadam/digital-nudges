import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Head from "next/head";

const BoldTypo = withStyles({
  root: {
    fontWeight: 500,
    display: "inline",
  },
})((props) => <Typography component="span" {...props} />);

export default function designCycle() {
  return (
    <NavBar>
      <Head>
        <title>Design Cycle</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Typography variant="h3" gutterBottom>
        Design Cycle
      </Typography>

      <Typography gutterBottom>
        Digital Nudges und deren Effektivität sind von dem{" "}
        <BoldTypo> genauen Anwendungsfall</BoldTypo>, den Nutzern und der
        tatsächlichen Implementierung
        <BoldTypo> abhängig</BoldTypo> [vgl. 1]. Aus diesem Grund ist eine
        <BoldTypo> kontextuelle Anpassung</BoldTypo> bzw. eine Erstellung von
        personalisierten Nudges
        <BoldTypo> notwendig</BoldTypo>, damit das erwünschte Ergebnis erzielt
        werden kann. Digital Nudges sind ähnlich wie Software Artefakte nach
        einem geregelten Ablauf entworfen [vgl. 2]. Um einen geregelten Ablauf
        erzielen zu können, wird ein Entwurfsdesign von Schneider, Weinmann und
        Brocke vorgestellt [vgl. 2]. Dieser Design Zyklus, der in der Abbildung
        unten zu sehen ist, läuft ähnlich wie agile Methoden iterativ ab. Zuerst
        werden die <BoldTypo>Ziele der Entscheidung</BoldTypo> festgelegt
        (Schritt „Define the goal“), danach werden die{" "}
        <BoldTypo>Biases und Heuristiken</BoldTypo> identifiziert (Schritt
        „Understand the user“), die den Nutzer in dieser Entscheidung
        beeinflussen könnten, anschließend wird der <BoldTypo>Nudge</BoldTypo>{" "}
        mit der Hilfe von geeigneten Frameworks und UI Elemente entworfen
        (Schritt „Design the nudge“) und abschließend wird die{" "}
        <BoldTypo>Wirkung </BoldTypo> dieser Nudges{" "}
        <BoldTypo>getestet </BoldTypo>
        (Schritt „Test the nudge“) [vgl. 2]. Falls die gezielte Wirkung nicht
        erreicht wurde, wird die Ursache identifiziert und der Prozess geht
        einen entsprechenden Schritt zurück [vgl. 2].
      </Typography>
      <img
        src="/cycle.PNG"
        width="70%"
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
      />
      <Typography gutterBottom variant="h5">
        1. Define the goal
      </Typography>
      <Typography gutterBottom>
        Wie bereits kurz erwähnt, müssen in dem ersten Schritt die{" "}
        <BoldTypo>Ziele der Organisation</BoldTypo> von dem
        Entscheidungsarchitekten verinnerlicht werden [vgl. 2]. Aus solchen
        Zielen, wie beispielweise einer Erhöhung der Verkaufsquoten durch
        Newsletter, wird der Entscheidungstyp abgeleitet [vgl. 2]. Bei dem
        bereits genannten Beispiel mit einem Newsletter, wäre dies ein binärer
        Entscheidungstyp bzw. eine Ja/Nein-Entscheidung. Bei diesem Schritt
        sollten auch die <BoldTypo>ethischen Fragen</BoldTypo> gestellt und mit
        den Zielen der Organisation in Einklang gebracht werden [vgl. 2]. Dabei
        muss die Frage nach der <BoldTypo>langfristigen Wirkung</BoldTypo>{" "}
        solcher Nudges beantwortet werden, da falsch entworfene Nudges die
        Reputation und das Ansehen der Firma beschädigen können (vgl. 2; vgl.
        1).
      </Typography>
      <Typography gutterBottom variant="h5">
        2. Understand the users
      </Typography>
      <Typography gutterBottom>
        Im zweiten Schritt werden die <BoldTypo>Nutzer</BoldTypo> in dieser
        Entscheidung analysiert [vgl. 2]. Wie bereits erwähnt, sind Menschen für
        <BoldTypo> Urteilsfehler</BoldTypo> anfällig. Das Erkennen der
        Urteilsfehler, die in der zu treffenden Entscheidung eine Rolle spielen,
        dient der Auswahl der Nudge Mechanismen, die letztendlich angewendet
        werden (vgl. 3; vgl. 4; vgl. 2). Es dient auch einem besseren Entwurf
        der ganzen Entscheidungsarchitektur und einer besseren Umsetzung der
        Ziele, da Verhaltensmuster erkannt werden, die zu einer nicht
        erwünschten Entscheidung oder zu einem nicht erwünschten Verhalten des
        Nutzers führen könnten [vgl. 2]. Bei dem Beispiel mit Newslettern und
        einer einfacheren binären Entscheidung, wäre einer von den
        Urteilsfehlern die Tendenz zum Status Quo [vgl. 5].
      </Typography>

      <Typography gutterBottom>
        Um mehr über die Denkweise des Nutzers zu erfahren
      </Typography>
      <Link href="/biases">
        <Button
          color="secondary"
          style={{
            paddingLeft: 0,
            marginBottom: 0,
            paddingTop: 2,
          }}
        >
          Zu Biases
        </Button>
      </Link>
      <Typography variant="h5" style={{ fontWeight: 500 }}>
        3. Design the nudge (FOKUS)
      </Typography>

      <Typography gutterBottom>
        Anschließend wird anhand der Ziele, des erkannten Entscheidungstypen und
        der erkannten Urteilsfehlern der entsprechende{" "}
        <BoldTypo> Nudge Mechanismus</BoldTypo>
        ausgewählt [vgl. 2]. In dem Fall von Newslettern wäre das Ziel eine
        Umsatzerhöhung, der Entscheidungstyp eine binäre Entscheidung und der
        Urteilsfehler ist eine Tendenz zum Status Quo [vgl. 5]. Der zugehörige
        Nudge Mechanismus wäre somit, bei einer binären Entscheidung, eine
        Default-Wert Setzung auf die Antwort „Ja“. Bei komplexeren
        Entscheidungen werden oft mehrere Nudge Mechanismen angewendet, um die
        gesetzten Ziele zu erreichen [vgl. 2].
      </Typography>

      <Typography gutterBottom>
        <BoldTypo>Dieser Schritt</BoldTypo> des Design Zyklusses von Schneider,
        Weinmann und Brocke ist der <BoldTypo>Fokus</BoldTypo> dieser Guideline.
        Somit wird bei den aufgeführten Nudges der Fokus auf der Implementierung
        und nicht der Planung sowei Testen sein.
      </Typography>
      <Link href="/nudges">
        <Button
          color="secondary"
          style={{
            paddingLeft: 0,
            marginBottom: 0,
            paddingTop: 2,
          }}
        >
          Zu Nudges
        </Button>
      </Link>
      <Typography gutterBottom variant="h5">
        4. Test the nudge
      </Typography>
      <Typography gutterBottom>
        Um zu sehen, ob durch die gesetzten Ziele, wie im genannten Beispiel,
        eine Umsatzerhöhung durch eine erhöhte Anzahl an Newslettern erreicht
        wurde, muss der umgesetzte Nudge <BoldTypo>getestet</BoldTypo> werden
        [vgl. 2]. In digitalen Umgebungen ist es meistens leicht,{" "}
        <BoldTypo>mehrere Alternativen zu entwerfen</BoldTypo>, die für Tests
        benutzt werden können [vgl. 2]. In den meisten Umgebungen ist es auch
        möglich, diese zu testen, indem den Nutzern verschiedene Alternativen
        angezeigt werden und die <BoldTypo>Ergebnisse</BoldTypo> der
        verschiedenen Alternativen
        <BoldTypo>verglichen</BoldTypo> werden [vgl. 2]. Dies ist insbesondere
        leicht auf Websites, da es bereits viele Tools für das Tracking des
        Nutzerverhaltens gibt [vgl. 2]. In manchen Fällen ist es auch nötig,
        größere Änderungen durchzuführen. In solchen Fällen sollte überlegt
        werden, ob es sinnvoll wäre die Ziele anzupassen, das Nutzerverhalten
        erneut zu analysieren oder den Nudge anzupassen (siehe Abbildung 1).
      </Typography>
      <Typography>
        Um Nudges zu testen, können unterschiedliche A/B Testing Frameworks
        Ihrer wahl verwendet werden.
      </Typography>
      <hr />
      <Typography variant="h4">Empfohlene Literatur</Typography>
      <hr />
      <Typography>
        Um <BoldTypo>mehr</BoldTypo> über den Design Zyklus zu{" "}
        <BoldTypo>erfahren</BoldTypo>, wird das Paper von Schneider, Weinmann
        und Brocke empfohlen:
      </Typography>
      <Typography gutterBottom>
        Digital nudging: guiding online user choices through interface design,
        Schneider et al. DOI: 10.1145/3213765
      </Typography>
      <hr />
      <Typography variant="h4">Referencen</Typography>
      <hr />
      <Typography gutterBottom>
        1. Caraban A, Karapanos E, Gonçalves D et al. (2019) 23 Ways to Nudge.
        In: Brewster S, Fitzpatrick G, Cox A et al. (eds) CHI 2019: Proceedings
        of the 2019 CHI Conference on Human Factors in Computing Systems : May
        4-9, 2019, Glasgow, Scotland, UK. The Association for Computing
        Machinery, New York, New York, pp 1–15
      </Typography>
      <Typography gutterBottom>
        2. Schneider C, Weinmann M, vom Brocke J (2018) Digital nudging: guiding
        online user choices through interface design. Commun ACM 61: 67–73.
        https://doi.org/10.1145/3213765
      </Typography>
      <Typography gutterBottom>
        3. Thaler RH, Sunstein CR (2009) Nudge: Improving decisions about
        health, wealth, and happiness, Rev. and expanded ed., with a new
        afterword and a new chapter. Penguin, New York, NY
      </Typography>
      <Typography gutterBottom>
        4. Kahneman D (2011) Thinking, fast and slow, First edition. Farrar
        Straus and Giroux, New York
      </Typography>
      <Typography gutterBottom>
        5. Kahneman D, Knetsch JL, Thaler RH (1991) Anomalies: The Endowment
        Effect, Loss Aversion, and Status Quo Bias. Journal of Economic
        Perspectives 5: 193–206. https://doi.org/10.1257/jep.5.1.193
      </Typography>
    </NavBar>
  );
}
