import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Privacy Policy — Officina Dadà";
const description =
  "Come Officina Dadà A.S.D. tratta i dati personali di soci, allievi e visitatori del sito.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="Informativa" title="Privacy Policy" updated="28 luglio 2026">
      <p>
        La presente informativa descrive le modalità di trattamento dei dati personali di chi
        consulta il sito e di chi entra in contatto con <strong>Officina Dadà A.S.D.</strong>,
        ai sensi del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        <strong>Officina Dadà A.S.D.</strong> — Roè Volciano (BS), Valsabbia.
        <br />
        Email:{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a>.
      </p>

      <h2>Dati raccolti</h2>
      <ul>
        <li>
          <strong>Dati di contatto</strong>: nome, email, telefono e messaggio, quando compili
          il form contatti o ci scrivi via email / WhatsApp.
        </li>
        <li>
          <strong>Dati di navigazione</strong>: log tecnici (indirizzo IP, user-agent, pagine
          visitate) trattati in forma aggregata per la sicurezza e il buon funzionamento del
          sito.
        </li>
        <li>
          <strong>Dati dei soci e allievi</strong>: dati anagrafici, di contatto e certificato
          medico, raccolti in fase di iscrizione ai corsi tramite modulistica cartacea o
          digitale dedicata (non raccolti da questo sito).
        </li>
      </ul>

      <h2>Finalità e basi giuridiche</h2>
      <ul>
        <li>
          Rispondere a richieste di informazioni ricevute via form, email o WhatsApp —{" "}
          <em>base: misure precontrattuali su richiesta dell'interessato (art. 6.1.b GDPR)</em>.
        </li>
        <li>
          Gestire il rapporto associativo, i corsi e gli obblighi assicurativi/fiscali —{" "}
          <em>base: esecuzione del contratto e obblighi di legge (art. 6.1.b–c GDPR)</em>.
        </li>
        <li>
          Garantire la sicurezza del sito e prevenire abusi —{" "}
          <em>base: legittimo interesse (art. 6.1.f GDPR)</em>.
        </li>
      </ul>

      <h2>Destinatari e trasferimenti</h2>
      <p>
        I dati sono trattati dallo staff dell'associazione e non vengono ceduti a terzi per
        finalità commerciali. Alcuni servizi tecnici utilizzati per far funzionare il sito
        (hosting, mappa Google Maps, caratteri Google Fonts, invio email) possono comportare
        il trattamento di dati da parte di fornitori terzi, anche fuori dall'UE, con adeguate
        garanzie previste dal GDPR.
      </p>

      <h2>Conservazione</h2>
      <p>
        I messaggi ricevuti sono conservati per il tempo necessario a gestire la richiesta e,
        se dà origine a un rapporto associativo, per la durata prevista dagli obblighi
        civilistici e fiscali. I log tecnici sono conservati per periodi brevi e cancellati o
        anonimizzati periodicamente.
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15–22 GDPR:
        accesso, rettifica, cancellazione, limitazione, opposizione e portabilità. Scrivi a{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a>{" "}
        e ti risponderemo entro i termini di legge. Hai inoltre diritto di proporre reclamo al
        Garante per la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">
          garanteprivacy.it
        </a>
        ).
      </p>

      <h2>Cookie</h2>
      <p>
        L'uso dei cookie è descritto nella{" "}
        <a href="/cookie">Cookie Policy</a> dedicata, coerente con questa informativa.
      </p>
    </LegalPage>
  );
}
