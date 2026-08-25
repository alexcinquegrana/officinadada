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
      { property: "og:url", content: "https://officinadadaasd.it/privacy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://officinadadaasd.it/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="Informativa" title="Privacy Policy" updated="25 agosto 2026">
      <p>
        La presente informativa descrive le modalità di trattamento dei dati personali di chi
        consulta il sito e di chi entra in contatto con <strong>Officina Dadà A.S.D.</strong>,
        ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal
        D.Lgs. 101/2018.
      </p>

      <h2>Titolare del trattamento</h2>
      <ul>
        <li>
          <strong>Officina Dadà A.S.D.</strong> — Associazione Sportiva Dilettantistica
        </li>
        <li>Sede legale: Via Malpaga 1, 25070 Casto (BS), Italia</li>
        <li>Sede operativa: Via A. Bellini 7, 25077 Roè Volciano (BS), Italia</li>
        <li>Codice fiscale: 96040640177 — Partita IVA: 04721180984</li>
        <li>
          Email:{" "}
          <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a> —
          PEC: <a href="mailto:elenatrombinidada@postecert.it">elenatrombinidada@postecert.it</a>
        </li>
      </ul>
      <p>
        L'associazione non ha nominato un Responsabile della protezione dei dati (DPO), non
        ricorrendone i presupposti di legge.
      </p>

      <h2>Dati raccolti</h2>
      <ul>
        <li>
          <strong>Dati di contatto</strong>: nome, email, telefono e contenuto del messaggio,
          quando compili il form contatti (che apre il tuo client di posta) o ci scrivi via
          email o WhatsApp.
        </li>
        <li>
          <strong>Dati di navigazione</strong>: log tecnici del provider di hosting (indirizzo
          IP, user-agent, data e ora, pagine richieste), trattati per la sicurezza e il buon
          funzionamento del sito.
        </li>
        <li>
          <strong>Dati dei soci e degli allievi</strong>: dati anagrafici, di contatto,
          certificato medico e dati del genitore per i minori, raccolti in fase di iscrizione
          tramite modulistica dedicata (non raccolti da questo sito).
        </li>
        <li>
          <strong>Immagini e video</strong>: foto e riprese di lezioni, saggi e spettacoli,
          trattate solo previo consenso specifico e revocabile, raccolto con apposito modulo
          (per i minori firmato da chi esercita la responsabilità genitoriale).
        </li>
      </ul>

      <h2>Finalità e basi giuridiche</h2>
      <ul>
        <li>
          Rispondere a richieste di informazioni ricevute via form, email o WhatsApp —{" "}
          <em>misure precontrattuali su richiesta dell'interessato (art. 6.1.b GDPR)</em>.
        </li>
        <li>
          Gestire il rapporto associativo, i corsi, il tesseramento e gli obblighi
          assicurativi, fiscali e sportivi —{" "}
          <em>esecuzione del contratto e obblighi di legge (art. 6.1.b–c GDPR)</em>.
        </li>
        <li>
          Garantire la sicurezza del sito e prevenire abusi —{" "}
          <em>legittimo interesse (art. 6.1.f GDPR)</em>.
        </li>
        <li>
          Pubblicare foto e video delle attività su sito e canali social —{" "}
          <em>consenso (art. 6.1.a GDPR)</em>, revocabile in ogni momento.
        </li>
      </ul>

      <h2>Dati dei minori</h2>
      <p>
        Molte attività si rivolgono a minori: i relativi dati sono forniti e autorizzati da chi
        esercita la responsabilità genitoriale, che può esercitare in loro nome tutti i diritti
        previsti dal GDPR. Il sito non è destinato alla raccolta diretta di dati da parte di
        minori.
      </p>

      <h2>Destinatari e trasferimenti</h2>
      <p>
        I dati sono trattati dallo staff e dai collaboratori dell'associazione, autorizzati al
        trattamento, e non sono ceduti a terzi per finalità commerciali. Possono essere trattati
        da fornitori che agiscono come responsabili o titolari autonomi:
      </p>
      <ul>
        <li>fornitore di hosting e distribuzione del sito;</li>
        <li>Google Ireland Ltd. per i caratteri tipografici (Google Fonts);</li>
        <li>OpenStreetMap Foundation per la mappa della sede (caricata solo con il tuo consenso);</li>
        <li>Google (Gmail) per la posta elettronica e WhatsApp Ireland Ltd. per la messaggistica;</li>
        <li>consulenti, enti di promozione sportiva e assicurazioni per gli obblighi di legge.</li>
      </ul>
      <p>
        Alcuni fornitori possono trattare dati fuori dallo Spazio Economico Europeo: in tal caso
        il trasferimento avviene sulla base di decisioni di adeguatezza o Clausole Contrattuali
        Standard approvate dalla Commissione europea.
      </p>

      <h2>Conservazione</h2>
      <ul>
        <li>Messaggi e richieste di informazioni: fino a 12 mesi dalla chiusura della richiesta.</li>
        <li>
          Dati associativi, contabili e fiscali: 10 anni, come previsto dagli obblighi civilistici
          e fiscali.
        </li>
        <li>Certificati medici: per la durata di validità e l'anno sportivo di riferimento.</li>
        <li>Log tecnici: periodi brevi, poi cancellati o anonimizzati.</li>
        <li>Foto e video: fino a revoca del consenso.</li>
      </ul>

      <h2>Processi decisionali automatizzati</h2>
      <p>
        Non effettuiamo profilazione né processi decisionali interamente automatizzati ai sensi
        dell'art. 22 GDPR.
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15–22 GDPR: accesso,
        rettifica, cancellazione, limitazione, opposizione, portabilità e revoca del consenso
        (senza pregiudicare la liceità del trattamento precedente). Scrivi a{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a>{" "}
        e ti risponderemo entro un mese. Hai inoltre diritto di proporre reclamo al Garante per
        la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">
          garanteprivacy.it
        </a>
        ).
      </p>

      <h2>Cookie</h2>
      <p>
        L'uso dei cookie e dei contenuti di terze parti è descritto nella{" "}
        <a href="/cookie">Cookie Policy</a> dedicata, coerente con questa informativa.
      </p>
    </LegalPage>
  );
}
