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

      <Typography gutterBottom variant="h3">
        Grundlegende Nudge Prinzipien
      </Typography>
      <Typography gutterBottom>
        Da es kein neutrales Design gibt, das die Nutzer in keine
        Entscheidungsrichtung beeinflussen würde, müssen die elementaren Nudges
        der Entscheidungsumgebungen und die grundlegenden Verhaltensmuster der
        Nutzer verstanden werden, damit man ungewollte oder zufällige Nudges
        vermeidet (vgl. 1; vgl. 2). Folgend eine Auflistung der wichtigsten und
        gängigsten Nudges:
      </Typography>
      <img
        src="/principles.PNG"
        width="70%"
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
      />
      <Typography gutterBottom>
        Diese aufgelisteten Nudges sind die ursprüngliche Nudges, die von Thaler
        und Sunstein 2009 erkannt wurden. Sie sind die erste Nudges, die mit dem
        Begriff Nudges bezeichnet wurden. Diese Nudges, sowie das Werk von
        Thaler und Sunstein 2009 dienen als eine Inspiration für weitere
        Forschungen wie beispielsweise Weinmann et a. 2016 und Schneider et al.
        (2018) von deren Werken Kapitel 2.2.2 Design Zyklus inspiriert wurde.
        Das Werk wurde außerdem bereits über 16000 Male zitiert [vgl. 4].
        Weitere Auflistungen wie beispielsweise eine Auflistung von 23 Nudges
        von 5 [5], politische Nudges von 6 [6] oder „Privacy“ Nudges von 7 [7]
        beziehen sich auf spezifische Nudges in spezifischen Kontexten, die ein
        bereits ausgeprägtes Verständnis von Nudges voraussetzten. Daher sind
        Nudges von Thaler und Sunstein (2009) in Punkten der Einfachheit und
        Verständlichkeit als eine Grundlage für die generelle Erklärung der
        Funktionsweise von Nudge Mechanismen geeignet.
      </Typography>

      <Typography gutterBottom variant="h5">
        Defaults
      </Typography>
      <Typography gutterBottom>
        Die gängigste Form von Nudges, die in vielen verschiedenen Bereichen,
        wie in der Verhaltensökonomik [vgl. 8], Psychologie [vgl. 9], Jura [vgl.
        10] oder Medizin [vgl. 11], bereits erforscht und verwendet wird, nennt
        sich „Defaults“. In der Psychologie wird sie auch unter den Begriff
        Status Quo [vgl. 9] gefasst. Dieser Nudge funktioniert dank der
        Tatsache, dass Menschen den Weg des niedrigsten Widerstandes wählen
        [vgl. 12]. Der Weg des niedrigsten Widerstandes ist in einer
        Entscheidungsumgebung die Option, die gewählt wird, wenn sich der Nutzer
        entscheidet nichts zu wählen und die Wahl dem Entscheidungsarchitekten
        überlässt [vgl. 3]. Wie im Kapitel 1.1 in gezeigten Beispielen erwähnt,
        können dies verschiedene Opt-In oder Opt-Out Entscheidungen bei der Wahl
        zwischen wenigen Alternativen [vgl. 11] aber auch Empfehlungen bei einer
        Wahl von vielen Alternativen sein [vgl. 9]. Durch empirische
        Untersuchungen wurde bewiesen, dass sich bei einer Wahl zwischen
        mehreren Alternativen bei einer steigenden Anzahl an Alternativen der
        „Nudging“-Effekt verstärkt und somit auch die Tendenz zu einer
        „Default“-Entscheidung [vgl. 9]. Die Stärke von „Defaults“ liegt in der
        Unvermeidbarkeit [vgl. 3]. Jeder Entscheidungsarchitekt muss sich somit
        die Frage stellen, wie das Ergebnis aussehen wird, wenn sich der Nutzer
        entscheidet nichts zu tun [vgl. 3].
      </Typography>
      <Typography gutterBottom variant="h5">
        Expect Error
      </Typography>
      <Typography gutterBottom>
        „A well-designed system expects its user to err and is as forgiving as
        possible.“ [12]. Wie Richard Thaler passend erklärt, sollte in jeder
        Entscheidungsarchitektur davon ausgegangen werden, dass die Nutzer
        Fehler machen. Wenn solche Fehler im Voraus erkannt werden, können die
        Nutzer mithilfe von Nudges zurück auf den richtigen Weg gebracht werden
        [vgl. 3]. Zu den gängigen Beispielen gehören Tickets bei der Bahn, die
        aus einer beliebigen Seite in die Automaten eingefügt werden können, da
        damit gerechnet wurde, dass Fahrgäste diese aus einer beliebigen Seite
        einfügen werden oder Signaltöne, die im Auto ertönen, wenn ein
        Sicherheitsgurt nicht benutzt wurde [vgl. 3]. Der „Expect Error“ Nudge
        ist in der Regel mit anderen Nudges wie „Give Feedback“ oder „Defaults“
        verbunden, da man mit einem richtigen Feedback oder richtig gesetzten
        „default“-Werten viele Fehler vermeiden kann [vgl. 3].
      </Typography>
      <Typography gutterBottom variant="h5">
        Feedback
      </Typography>
      <Typography gutterBottom>
        Eine der besten Möglichkeiten, wie die menschliche Leistung durch Nudges
        verbessert werden kann, ist durch Feedback geben [vgl. 3]. Eine gut
        entworfene Entscheidungsumgebung zeigt dem Nutzer, wenn etwas gut
        gemacht wurde oder wenn Fehler passieren oder bald passieren werden
        (vgl. 12; vgl. 3). Somit können auch, wie im Kapitel 2.1.5.2 erwähnt,
        Fehler vermieden werden, wenn die Fehler früh genug, wie z.B. durch eine
        Kontrollleuchte im Auto bei einem geringem Motoröl-Stand, erkannt werden
        [vgl. 3]. Solche Nudges wurden bereits zahlreich in der Realität
        benutzt, wie beispielweise im Autoverkehr von Chicago, wo Bremsstreifen
        auf die Straße gestrichen wurden um dem Fahrer das Gefühl von einer
        höheren Geschwindigkeit zu geben [vgl. 12]. Dadurch wurde der
        Straßenverkehr verlangsamt und die Unfallquote wurde um 36% gesenkt
        [vgl. 12].
      </Typography>
      <Typography gutterBottom variant="h5">
        Mapping
      </Typography>
      <Typography gutterBottom>
        Nudges der „Mapping“ Klasse versuchen dem Entscheidenden den Vergleich
        von Alternativen oder das Bewerten bestimmter Entscheidungen zu
        erleichtern, indem den Entscheidungen ein daraus resultierender Nutzen
        zugeordnet wird [vgl. 12]. Zuerst wird von einem
        Entscheidungsarchitekten festgelegt, welche Informationen für den Nutzer
        relevant sind und anschließend wird festgelegt in welcher Form diese
        Informationen präsentiert werden [vgl. 3]. Am Ende soll der
        Entscheidende eine Alternative transparent wählen können, die für ihn
        den größten Nutzen hat [vgl. 12]. Die richtige Form der Informationen
        ist in vielen Fällen eine Umrechnung von grundlegenden Zahleneinheiten
        in Einheiten, aus denen der Nutzer einen direkten Nutzen ziehen kann.
        Beispielweise wäre eine Eis-Probe bei ungewöhnlichen Eissorten eine Art,
        wie man dem Entscheidenden den direkten Nutzen nahe bringen kann, oder,
        wenn in einem Bauernhof, wo Äpfel verkauft, direkt stehen würde, aus wie
        vielen Äpfeln wie viel Apfelwein resultieren wird, damit der Kunde, der
        Apfelwein macht, einen direkten Vergleich hat [vgl. 3].
      </Typography>
      <Typography gutterBottom variant="h5">
        Structure Complex Choices
      </Typography>
      <Typography gutterBottom>
        Bei komplexen Entscheidungen, wie einer Wohnungsauswahl aus tausenden
        möglichen Wohnungen, können nicht alle Alternativen gleichwertig
        beurteilt werden [vgl. 3]. In solch einem Fall kommt in den meisten
        Situationen ein Verfahren der Aspektweise-Eliminierung zum Einsatz [vgl.
        13]. Bei diesem Verfahren werden schrittweise anhand von verschiedenen
        Aspekten, wie bei der Wohnungsauswahl eine maximale Distanz zur Arbeit
        von zwei Kilometern [vgl. 12], Alternativen aussortiert bzw. gefiltert,
        bis eine übersichtliche Anzahl an Alternativen übrig ist, zwischen denen
        am Ende entschieden wird [13]. Bei einem solchen Verfahren und auch bei
        anderen ähnlichen Verfahren, die bei komplexen Entscheidungen zum
        Einsatz kommen, kommt es zu Fehlern, wie zum Beispiel einer
        Aussortierung von gewünschten Alternativen (vgl. 13; vgl. 3). Bei dem
        Beispiel der Wohnungssuche wäre dies eine Wohnung, die zwar zweieinhalb
        Kilometer entfernt ist, aber in allen anderen Aspekten besser als die
        andere Alternativen wäre, jedoch trotzdem wegen der nicht ideal
        gesetzten Filter aussortiert werden würde [vgl. 12]. Bei solchen
        komplexen Entscheidungen wird wegen der Fehler solcher Verfahren das
        Ergebnis sehr stark von der Entscheidungsarchitektur beeinflusst und
        somit kann durch ein gezieltes Einsetzen von Nudges die Fehleranzahl
        minimiert werden [vgl. 12].
      </Typography>
      <Typography gutterBottom variant="h5">
        Incentives
      </Typography>
      <Typography gutterBottom>
        Menschen handeln nicht wie ein Homo oeconomicus und beachten nicht immer
        alle Anreiz-Effekte und Preis-Effekte, wie sie sollten [vgl. 3], bzw.
        Menschen überbewerten bestimmte Aspekte einer Entscheidung und
        unterbewerten andere [vgl. 14]. Auf diesem Urteilsfehler basiert der
        Incentives Nudge bzw. der Nudge der Anreize [vgl. 3]. Bei der Behebung
        oder Minderung solcher Urteilsfehler spielt Salienz eine große Rolle
        [vgl. 12]. Salienz bedeutet im allgemeinem, dass ein Reiz oder ein
        Objekt aus dem Kontext hervorgehoben wird und somit Aufmerksamkeit
        gewinnt und genau das ist die Wirkung dieses Nudges [vgl. 15]. Zur
        Verdeutlichung folgt ein Beispiel [vgl. 3]: Die Regulierung der
        Stromersparung wird in den meisten Fällen von der Regierung durch
        Strompreise gesteuert. Der Effekt der Preiserhöhung könnte verstärkt
        werden, in dem ein „Incentives“ Nudge angewendet wird. Auf den
        Klimaanlagen wären die laufenden Kosten angezeigt und somit hätte der
        Nutzer einen direkten Preisvergleich gesehen, wenn die Klimaanlage
        stärker oder schwächer eingestellt wird. Somit hätte sich die
        Stromersparung verbessert, ohne dabei die Strompreise zu verändern.
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
