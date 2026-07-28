import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Cookie Policy — Officina Dadà";
const description =
  "Informativa sui cookie utilizzati dal sito di Officina Dadà A.S.D. — Roè Volciano.";

export const Route = createFileRoute("/cookie")({
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
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalPage eyebrow="Informativa" title="Cookie Policy" updated="28 luglio 2026">
      <p>
        Questa Cookie Policy descrive i cookie e le tecnologie simili utilizzati sul sito di{" "}
        <strong>Officina Dadà A.S.D.</strong>, in coerenza con le linee guida del Garante
        Privacy e con il GDPR (Reg. UE 2016/679). Per il trattamento generale dei dati vedi la{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        <strong>Officina Dadà A.S.D.</strong> — Roè Volciano (BS). Email:{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a>.
      </p>

      <h2>Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che i siti visitati salvano nel tuo browser per
        far funzionare le pagine o memorizzare preferenze. Alcuni sono necessari, altri
        richiedono il tuo consenso preventivo.
      </p>

      <h2>Cookie utilizzati su questo sito</h2>
      <ul>
        <li>
          <strong>Tecnici e di preferenza</strong> (sempre attivi): consenso cookie salvato
          localmente (<code>dada-cookie-consent</code>) e preferenza di tema chiaro/scuro
          (<code>dada-theme</code>). Non profilano l'utente.
        </li>
        <li>
          <strong>Google Maps</strong> (previo consenso): la mappa in fondo alla home è servita
          da Google Maps, che può impostare cookie tecnici per il funzionamento e la sicurezza
          del servizio. Fornitore: Google Ireland Ltd. —{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener"
          >
            privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Google Fonts</strong> (previo consenso): i caratteri Fraunces e Inter Tight
          sono caricati da <code>fonts.googleapis.com</code> / <code>fonts.gstatic.com</code>.
          Fornitore: Google Ireland Ltd.
        </li>
      </ul>

      <h2>Finalità e basi giuridiche</h2>
      <ul>
        <li>
          Cookie tecnici e di preferenza — <em>base: legittimo interesse (art. 6.1.f GDPR)</em>,
          nessun consenso necessario.
        </li>
        <li>
          Cookie di terze parti (Google Maps, Google Fonts) — <em>base: consenso (art. 6.1.a
          GDPR)</em>, raccolto tramite il banner al primo accesso.
        </li>
      </ul>

      <h2>Gestione del consenso</h2>
      <p>
        Al primo accesso viene mostrato un banner con due opzioni: <em>Solo essenziali</em> o{" "}
        <em>Accetta tutti</em>. Puoi modificare o revocare la scelta in ogni momento
        cancellando i dati del sito dal tuo browser: al successivo accesso il banner
        ricomparirà.
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        Puoi esercitare i diritti previsti dagli artt. 15–22 GDPR (accesso, rettifica,
        cancellazione, limitazione, opposizione, portabilità) scrivendo a{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a>,
        e hai diritto di proporre reclamo al{" "}
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">
          Garante per la protezione dei dati personali
        </a>
        .
      </p>
    </LegalPage>
  );
}
