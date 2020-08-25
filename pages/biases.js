import NavBar from "../components/Navigation-bar";
import Typography from "@material-ui/core/Typography";
import theme from "../src/theme";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
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
        Biasese
      </Typography>
      <hr />
      <Typography variant="h4" gutterBottom>
        System 1 und 2
      </Typography>
      <hr />
      <Typography gutterBottom>
        Um Biases, also systematische Menschliche Denkfehler, zu verstehen, ist
        das Verständnis von dem Zusammenspiel von System 1 und System 2
        förderlich. Daher wird es in den folgenden Absätzen erklärt:
      </Typography>

      <Typography gutterBottom>
        Nudges basieren auf <BoldTypo>systematischen Fehlern</BoldTypo> des
        menschlichen Denkens [vgl. 1]. Solche Art von Fehlern passiert bei dem
        Zusammenspiel von System 1 (dem automatischen System) und System 2 (dem
        reflektierenden System) [vgl. 2; vgl. 3; vgl. 4]. Diese zwei Systeme
        sind zwei Arten des kognitiven Denkens, welche seit mehreren Jahrzehnten
        von Psychologen untersucht werden [vgl. 2]. Das System 1 sorgt für das
        intuitive, schnelle Denken [vgl.2]. Im Gegensatz dazu, sorgt das System
        2 für die langsamen und anstrengenden Aktivitäten, die viel
        Aufmerksamkeit benötigen [vgl.2]. In der Tabelle sind die{" "}
        <BoldTypo>wichtigsten Aspekte</BoldTypo> dieser Systeme zu sehen.
      </Typography>
      <img
        src="/sys12.png"
        width="50%"
        style={{
          marginTop: 8,
          marginBottom: 8,
        }}
      />
      <Typography gutterBottom>
        Das <BoldTypo>System 1</BoldTypo>, dessen Aktivitäten in den ältesten
        Teile des Gehirns stattfinden, auch unter dem Name{" "}
        <BoldTypo>„lizard brain“</BoldTypo> bekannt [vgl. 3], arbeitet{" "}
        <BoldTypo>
          automatisch, schnell, energieeffizient, emotional, instinktiv und ohne
          Anstrengung
        </BoldTypo>{" "}
        (vgl. 5; vgl. 2; vgl. 6; vgl. 7). Diese Art des Denkens kommt
        beispielweise beim Erkennen der menschlichen Gefühle, Autofahren auf
        einer leeren Straße oder Reden in eigener Muttersprache [vgl.3] zum
        Einsatz. Die gesammelte Erfahrung, Intuition und die gegenwärtige
        Situation bilden das <BoldTypo>erste Urteil</BoldTypo>, welches an das
        System 2 übergeben wird und somit zur{" "}
        <BoldTypo>Basis der tatsächlichen Entscheidung</BoldTypo> wird [vgl.2].
        Das erste Urteil und gleichzeitig die Basis der Entscheidung ist von dem
        Menschen selbst nur begrenzt beeinflussbar [vgl.3].{" "}
      </Typography>
      <Typography gutterBottom>
        Im Kontrast ist das{" "}
        <BoldTypo>
          System 2 bewusst, langsam, anstrengend, kontrollierbar und emotionslos
        </BoldTypo>{" "}
        [vgl. 5; vgl. 3; vgl. 7]. Dieses System ist das, womit man das bewusste
        Selbst, das Entscheidungen trifft, verbindet [vgl.2]. Beispielweise
        zählen zu diesen Aufgaben komplexere mathematische Berechnungen, das
        Ausfüllen von Formularen oder das Mitteilen der eigenen Telefonnummer
        [vgl. 2]. Aktivitäten von System 2 sind solche Aktivitäten, die nicht
        durchführbar wären, wenn man ihnen nicht genügend Aufmerksamkeit
        schenken würde [vgl. 2]. Solche Aktivitäten sind nur in einer begrenzten
        Anzahl gleichzeitig durchführbar, da es nur ein begrenztes Budget an
        Aufmerksamkeit gibt; deswegen werden die restliche Aufgaben vom System 1
        ausgeführt und von System 2 kurz, ohne große bewusste Überprüfung,
        bestätigt [vgl. 2].
      </Typography>
      <Typography gutterBottom>
        Beide Systeme sind im Wachzustand aktiv [vgl. 2]. System 1, das
        kontinuierlich automatisch läuft, erzeugt Vorschläge, Intuitionen,
        Emotionen und Anregungen an das System 2 [vgl. 2]. Das System 2, das die
        meiste Zeit in einem Sparmodus läuft, überführt solche Vorschläge,
        vielmals ohne großen Veränderungen, zu wahrnehmbaren Überzeugungen, die
        anschließend zu Handlungen führen [vgl. 2]. Das System 2 wird in die
        Entscheidung nur dann aufgenommen, wenn es zu Fehlern beim Verständnis
        der Welt des Systems 1 kommt (vgl. 6; vgl. 2). Das Verständnis der Welt
        des Systems 1 ist aus gängigen Erfahrungen gebildet in denen alles so
        funktioniert, wie erwartet [vgl. 2]. Um solche Fehler zu erkennen, wird
        die Aufmerksamkeit des Systems 2 benötigt [vgl. 2]. Da es aber nur ein
        geringes Budget der Aufmerksamkeit gibt, muss die Arbeitsteilung hoch
        effizient sein, um Aufwände zu minimieren [vgl. 2]. Aus diesem Grund
        wird das System 2 nicht immer in dem richtigen Moment genügend
        aufgerufen und es kommt zu fehlerhaften Einschätzungen durch das System
        1 und zu einer fehlerhaften kurzen Bestätigung des Systems 2 [vgl. 2].
        Diese Arbeitsteilung ist aus diesem Grund anfällig für systematische
        Fehlern [vgl. 8; vgl. 2]. Diese Fehlern werden „Biases“ bzw.
        Urteilsfehler genannt, die die Grundlage von „Nudges“ bilden [vgl. 3;
        vgl. 2].
      </Typography>
      <Typography gutterBottom>
        Wie erwähnt, sind „Biases“ die Grundlage für Nudges und somit auch die
        Grundlage für dieses Guideline. Ohne ein Verständnis von „Biases“, wäre
        eine Erstellung von Nudges Mechanismen nicht möglich. Für die Leser
        dieser Guideline ist ein Verständnis ebenso relevant, auch wenn sie
        selber nicht vor haben eigene Nudges zu erstellen und nur bereits
        erstellte und erforschte Nudges zu implementieren, da Nudges
        kontextabhängig sind [vgl. 9]. Die Kontextabhängigkeit hat zu folge,
        dass bereits erforschte Nudges von dem Programmierer in den meisten
        Fällen angepasst werden müssen und dies ist nur mit einem tieferen
        Verständnis des Nutzers und seinen Urteilsfehlern bzw. „Biases“ möglich.
      </Typography>
      <hr />
      <Typography variant="h4" gutterBottom>
        Heuristiken und „Biases“
      </Typography>
      <hr />
      <Typography gutterBottom>
        Heuristiken sind Faustregeln, an den sich Menschen wegen einer
        Zeitersparnis oder der Absenz einer besseren Entscheidungsmöglichkeit
        bedienen [vgl. 3]. Solche schnellen Einschätzungen können beispielweise
        bei einer Einschätzung des Alters oder Distanz stattfinden [vgl. 3].
        Solche Faustregeln finden in dem System 1 statt, und wie bereits erwähnt
        , entstehen hierbei Urteilsfehler, bzw. „Biases“ [vgl. 10]. Diese Idee
        wurde von den Psychologen Amos Tversky und Daniel Kahneman (1974)
        formuliert und hatte seitdem einen großen Einfluss auf die Bereiche
        Ökonomie, Soziologie, Politik, Recht und Psychologie, in welchen weitere
        Forschungen zu Heuristiken und Urteilsfehlern stattgefunden haben (vgl.
        10; vgl. 3). In dem Bereich Verhaltensökonomik war diese Forschung für
        das Thema Nudging grundlegend, da Nudges auf den Urteilsfehlern basieren
        (vgl. 3; vgl. 2).
      </Typography>
      <Typography gutterBottom variant="h5">
        Representativität, Verfügbarkeit und Verankerung
      </Typography>
      <Typography gutterBottom>
        Viele Entscheidungen basieren auf Einschätzungen der
        Wahrscheinlichkeiten von unklaren Ereignissen [vgl. 11]. Der erste Typ
        solcher Ereignisse ist mit folgenden drei Fragen verbunden [vgl. 11]:
        Wie ist die Wahrscheinlichkeit, dass Objekt A zu Klasse B gehört? Wie
        ist die Wahrscheinlichkeit, dass Ereignis A aus Prozess B stammt? Und
        wie hoch ist die Wahrscheinlichkeit, dass Prozess B das Ereignis A
        erzeugen wird? Um solche Fragen beantworten zu können, benutzen Menschen
        die Heuristik der Repräsentativität oder auch Ähnlichkeitsheuristik
        genannt [vgl. 3]. Die Wahrscheinlichkeiten werden anhand der Ähnlichkeit
        von A zu B eingeschätzt [vgl. 11], bzw. sie sind von der Klischee
        Vorstellung abhängig [vgl. 3]. In solchen Schnelleinschätzungen, die man
        in der Psychologie soziale Kategorisierung nennt, gehören automatisch
        dunkelheutige große Männer zu Basketballspielern [vgl. 3] und
        schüchterne dünne Männer mit Brillen zu Buchhändlern oder Programmierern
        [vgl. 11]. (Fall unbedingt mehr Seiten nötig, Beispiel mit Linda, Thaler
        s.27) Bei dieser Heuristik bzw. Faustregel kommt es zu Urteilsfehlern.
        Es wird geglaubt, dass wenn man bei einem Münzwurf mehrmals Kopf
        hintereinander wirft, die Wahrscheinlichkeit für Zahl höher wird [vgl.
        3], oder, dass dunkelheutige Männer hauptsächlich Basketballspieler
        sind, obwohl die gängigsten Berufe in Amerika Einzelhandelskaufmann und
        Fast Food Mitarbeiter sind (vgl. 12; vgl. 3). Aus dieser Heuristik ist
        ersichtlich, dass Repräsentativität zur Grundlage der Urteilsbildung
        dient und Zufälle als Muster interpretiert werden [vgl. 3]. Diese
        Tatsachen sollte bei dem Erstellen von Entscheidungsarchitekturen und in
        denen enthaltenen Nudges berücksichtigt werden, damit Zufälle nicht als
        Muster interpretiert werden und somit falsche Eindrücke auf den Nutzer
        gemacht werden.
      </Typography>
      <Typography gutterBottom>
        Heuristik der Verfügbarkeit ist mit der Häufigkeit von verfügbaren
        Erinnerungen und deren Gruppen verbunden (vgl. 13; vgl. 11).
        Erinnerungen, die zu großen Klassen zählen bzw. zu Klassen, die viele
        ähnlichen Erinnerungen enthalten, sind leichter ins Bewusstsein zu
        rufen, als Erinnerungen, die zu kleineren gehören [vgl. 11]. An dieser
        Stelle passieren Urteilsfehler [vgl. 13]. Erinnerungen, die aufgrund
        ihrer hohen Bedeutung für die Person leicht abrufbar sind, verfälschen
        das Urteil des Gehirns und die Erinnerungsklasse sieht größer aus, als
        sie tatsächlich ist (vgl. 13; vgl. 11). Solche Erinnerungen können
        Ereignisse wie ein brennendes Haus [vgl. 11] oder ein Terroranschlag in
        der Nähe sein [vgl. 3]. In solchen Fällen sind diese Erinnerungen von
        hoher Bedeutung und verfälschen das Wahrscheinlichkeitsurteil [vgl. 11].
        Ein Beispiel wäre die Risikoeinschätzung zwischen einem Kernkraftwerk
        und einem Schlaganfall [vgl. 3]. Falls die gefragte Person in der nahen
        Vergangenheit über einen Kernkraftwerkunfall gehört hat, ist die
        Wahrscheinlichkeit hoch, dass sie dieses Risiko überbewertet und das
        Schlaganfallrisiko unterbewertet werden würde, obwohl das Risiko von
        einem Schlaganfall deutlich höher ist [vgl. 3]. Diese Heuristik ist ein
        großer Treiber von Nudge Mechanismen, wie Beispielsweise „Reminding
        Consequences“, da die Tatsache, dass Menschen vor kurzem verfügbare
        Erinnerungen überbewerten, in solchen Nudge Mechanismen verwendet werden
        kann [vgl. 14].
      </Typography>
      <Typography gutterBottom>
        Viele Einschätzungen werden anhand eines initialen Wertes konstituiert,
        welcher in die eine oder andere Richtung angepasst wird [vgl. 13]. Der
        systematische Urteilsfehler findet statt, da die Anpassung von dem
        initialen Wert zu vorsichtig und klein ausfällt [vgl. 3] oder weil der
        initiale Wert keinen Bezug zum Ergebnis aufweist und somit irrelevant
        ist [vgl. 15]. Der initiale Wert muss nicht nur vorher gegeben sein,
        sondern er kann auch ein Ergebnis einer nicht vollständigen Berechnung
        oder Voreinschätzung sein [vgl. 11]. Diese Faustregel nennt sich
        Verankerung [vgl. 11]. Ein Beispiel dieser Gedankenregel mit einem
        bereits angewendetem Nudge, der genauso wie die Faustregel funktioniert,
        ist wie folgt [vgl. 3]: Eine Organisation sammelt Spenden und bietet
        mehrere Optionen an: 100, 250, 1000, 5000 € und sonstiger Betrag. Mit
        solch einer Gestaltung der Beträge sammelt die Organisation mehr
        Spenden, als wenn sie 50, 75, 100 und 150 € zur Auswahl anbieten würde.
        Dieser Effekt, je mehr man verlangt, desto mehr bekommt man, ist in
        vielen Bereichen vertreten und nachweisbar [vgl. 3]. Verankerung dient
        als Grundlage dem gängigsten Nudge Mechanismus Default. Daher ist diese
        Faustregel ein wichtiger Aspekt zum Berücksichtigen, wenn Nudge
        Mechanismen erstellt werden.
      </Typography>
      <Typography gutterBottom>
        Die drei genannten Heuristiken bzw. Faustregeln, werden in dieser
        Guideline die theoretische Basis für das Verständnis des Nutzers bilden,
        da sie einen geeigneten Einstiegspunkt bieten und die grundlegenden
        Fehler des Systems 1 passend wiedergeben. Diese Basis wird durch
        mehrere, in folgenden Kapiteln enthaltenen, „Biases“ erweitert, um ein
        tieferes Verständnis des Nutzers dem Leser anbieten zu können.
      </Typography>
      <Typography gutterBottom variant="h5">
        Übermäßiger Optimismus
      </Typography>
      <Typography gutterBottom>
        Der optimistische „Bias“ bzw. Urteilsfehler zeigt eine systematische
        Diskrepanz zwischen den eigenen Einschätzungen und den tatsächlichen
        Ergebnissen [vgl. 16]. Es wurden beispielweise Tendenzen gefunden, dass
        Studenten eine höhere Anzahl an Jobangeboten erwarten als es tatsächlich
        gibt [vgl. 16], oder, dass junge Ehepartner nicht das Risiko einer
        Scheidung berücksichtigen, obwohl es bei fast 50% liegt [vgl. 3]. Die
        Untersuchungen diesen Tendenzen zeigen eine Neigung zu einer
        Überschätzung von seltenen Ereignissen und zu einer Unterschätzung von
        häufigen Ereignissen [vgl. 16]. Solche Urteilsfehler führen oft zu
        Handlungen mit einer hohen Risikobereitschaft, welche wiederum in vielen
        Fällen große Konsequenzen nach sich zieht (vgl. 16; vgl. 3). Solche
        Urteilsfehler können durch bereits erforschte Nudges behoben oder
        gemindert werden, wie Beispielsweise durch die Verfügbarkeit Heuristik,
        indem man sich an die Risiken und Folgen erinnert , oder durch Framing
        indem man die Tatsachen anders weitergibt. Dieser „Bias“ ist
        beispielsweise im Nudge Mechanismus „Reminding of the Consequences“
        vorhanden.
      </Typography>
      <Typography gutterBottom variant="h5">
        Endowment Effekt
      </Typography>
      <Typography gutterBottom>
        Es wurde eine Tendenz festgestellt, in der Menschen Entscheidungen
        anhand der Richtung des Handels festlegen [vgl. 17] bzw. dass sie
        Verlusten einen höheren Wert geben, als Gewinnen (vgl. 18; vgl. 19).
        Diese Tendenz zeigt eine grundlegende Eigenschaft des Menschen und zwar
        die Verlustaversion [vgl. 3]. In vielen Fällen ist der Endowment Effekt
        mit dem Status Quo Verbunden [vgl. 20]. Wenn man im Besitzt von
        Gegenstand A ist, dann wird der Wert dieses Gegenstand höher geachtet,
        als der des gleichwertigen Gegenstandes B und somit wäre A für B nicht
        mehr austauschbar, da der Wert von A durch den Besitz gestiegen wäre
        [vgl. 20]. Hierbei wird die Ausgangsstellung favorisiert und somit wird
        der Status-Quo bzw. „default“ Wert bevorzugt [vgl. 20]. Verlustaversion
        zeigt sich auch in risikobehafteten Situationen [vgl. 3]. Ein
        50%-Verlust von 100€ wird durchschnittlich erst mit einem 50%-Gewinn von
        200 ausgleichbar, da eine Tendenz nachgewiesen wurde, dass Verluste
        ungefähr einen zweimal höheren Wert als Gewinne besitzen [vgl. 3].
        Endownment Effekt ist die Grundlage für eine ganze Kategorie von Nudges,
        die auf Angst basieren, beispielsweise im „Make Resources Scarce Nudge“
        .{" "}
      </Typography>
      <Typography gutterBottom variant="h5">
        Framing Effekt
      </Typography>
      <Typography gutterBottom>
        Wie bereits erklärt wurde, wird bei einer Entscheidung zuerst eine
        Automatische Vorauswertung durchgeführt, die einen hohen Einfluss auf
        das Ergebnis hat. Somit ist der erste Eindruck der Entscheidungsumgebung
        hoch relevant [vgl. 7]. Seitdem diese Wirkung herausgefunden wurde,
        wurde weitgehend daran erforscht, welche Auswirkungen der Rahmen der
        Entscheidung bzw. welche Auswirkungen die Präsentation der Entscheidung
        hat [vgl. 7]. Ein grundlegendes Beispiel für diesen Effekt ist die
        Darstellung der Überlebenschancen bei Operationen (vgl. 3; vgl. 2): Wenn
        ein Arzt sagt, dass von 100 Patienten nach fünf Jahren 90 Patienten
        immer noch leben, werden sich deutlich mehr Patienten dieser Operation
        unterziehen, als wenn der Arzt sagt, dass innerhalb von fünf Jahre zehn
        Patienten sterben werden. Dieses Beispiel gilt auch umgekehrt für die
        Experten bzw. in diesem Fall für Ärzte, da mehr Ärzte diese Operation
        empfehlen werden, wenn sie die Überlebenschancen wie im ersten Fall
        dargestellt zu sehen bekommen [vgl. 3]. Framing Effekt ist für die
        Verhaltensökonomie einer der grundlegendsten Effekte und letztendlich
        auch für das Thema Nudging, da sich sehr viele Bereiche decken, genauer
        gesagt bedienen sich Nudges der Urteilsfehler, die mit Framing Effekt
        beschrieben werden (vgl. 7; vgl. 3). Framing Effekt befindet sich in
        vielen Nudge Mechanismen, da oft Aussagen anders dargestellt werden, wie
        beispielsweise das Beispiel mit Überlebenschancen. Ein genauer Nudge
        Mechanismus wäre „Make Resources Scarce“ oder „Reducing Distance“.
      </Typography>
    </NavBar>
  );
}
