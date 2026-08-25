import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { openCookiePreferences } from "@/components/site/CookieBanner";

const title = "Cookie Policy — Officina Dadà";
const description =
  "Informativa sui cookie e sui contenuti di terze parti utilizzati dal sito di Officina Dadà A.S.D. — Roè Volciano.";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://officinadadaasd.it/cookie" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://officinadadaasd.it/cookie" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <LegalPage eyebrow="Informativa" title="Cookie Policy" updated="25 agosto 2026">
      <p>
        Questa Cookie Policy descrive i cookie, gli strumenti di archiviazione locale e i
        contenuti di terze parti utilizzati sul sito di <strong>Officina Dadà A.S.D.</strong>,
        in coerenza con le Linee guida del Garante Privacy del 10 giugno 2021 e con il GDPR
        (Reg. UE 2016/679). Per il trattamento generale dei dati vedi la{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Titolare del trattamento</h2>
      <p>
        <strong>Officina Dadà A.S.D.</strong> — sede legale Via Malpaga 1, 25070 Casto (BS);
        sede operativa Via A. Bellini 7, 25077 Roè Volciano (BS). C.F. 96040640177 — P.IVA
        04721180984. Email:{" "}
        <a href="mailto:segreteriaofficinadada@gmail.com">segreteriaofficinadada@gmail.com</a> —
        PEC: <a href="mailto:elenatrombinidada@postecert.it">elenatrombinidada@postecert.it</a>.
      </p>

      <h2>Cosa usiamo, in concreto</h2>
      <p>
        Il sito <strong>non usa cookie di profilazione, pubblicitari o di analisi statistica</strong>.
        Utilizziamo solo memorizzazione locale tecnica e, previo consenso, due contenuti di terze
        parti.
      </p>
      <ul>
        <li>
          <strong>dada-cookie-consent</strong> (tecnico, localStorage, 6 mesi, titolare Officina
          Dadà) — conserva la tua scelta sui cookie e la data del consenso.
        </li>
        <li>
          <strong>dada-theme</strong> (tecnico, localStorage, persistente, titolare Officina
          Dadà) — ricorda la preferenza tema chiaro/scuro.
        </li>
        <li>
          <strong>Google Fonts</strong> (terza parte, previo consenso, Google Ireland Ltd.) — i
          caratteri Fraunces e Inter Tight sono richiesti a <code>fonts.googleapis.com</code> e{" "}
          <code>fonts.gstatic.com</code>; la richiesta comporta la comunicazione dell'indirizzo
          IP al fornitore.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            Privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Mappa OpenStreetMap</strong> (terza parte, previo consenso, OpenStreetMap
          Foundation) — la mappa della sede in fondo alla home viene caricata solo dopo il tuo
          consenso o dopo aver premuto "Mostra la mappa".{" "}
          <a href="https://osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener">
            Privacy policy
          </a>
          .
        </li>
      </ul>
      <p>
        Il pulsante "Apri in Google Maps" e i contatti WhatsApp sono semplici link: nessun dato
        viene inviato finché non li apri tu.
      </p>

      <h2>Finalità e basi giuridiche</h2>
      <ul>
        <li>
          Strumenti tecnici e di preferenza — <em>necessari all'erogazione del servizio richiesto
          (art. 122 Codice Privacy)</em>, nessun consenso necessario.
        </li>
        <li>
          Contenuti di terze parti (Google Fonts, mappa OpenStreetMap) — <em>consenso (art. 6.1.a
          GDPR)</em>, raccolto tramite il banner al primo accesso.
        </li>
      </ul>

      <h2>Gestione e revoca del consenso</h2>
      <p>
        Al primo accesso compare un banner con due scelte equivalenti: <em>Solo essenziali</em> o{" "}
        <em>Accetta tutti</em>. La scelta viene conservata per 6 mesi, poi il banner ricompare.
        Puoi cambiarla in qualsiasi momento:
      </p>
      <p>
        <button type="button" onClick={openCookiePreferences}>
          Apri le preferenze cookie
        </button>
      </p>
      <p>
        In alternativa puoi cancellare i dati del sito dal tuo browser oppure bloccare i cookie
        dalle impostazioni del browser stesso (Chrome, Safari, Firefox, Edge offrono tutti un
        pannello dedicato).
      </p>

      <h2>Diritti dell'interessato</h2>
      <p>
        Puoi esercitare i diritti previsti dagli artt. 15–22 GDPR (accesso, rettifica,
        cancellazione, limitazione, opposizione, portabilità, revoca del consenso) scrivendo a{" "}
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
