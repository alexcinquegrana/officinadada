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
    <LegalPage eyebrow="Informativa" title="Cookie Policy" updated="26 luglio 2026">
      <p>
        Questa Cookie Policy descrive i cookie e le tecnologie simili utilizzati sul sito di
        <strong> Officina Dadà A.S.D.</strong>, in linea con le linee guida del Garante
        Privacy e con il GDPR (Reg. UE 2016/679).
      </p>

      <section>
        <h2>Che cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti visitati inviano al browser, dove
          vengono memorizzati per essere ritrasmessi al sito alla successiva visita.
        </p>
      </section>

      <section>
        <h2>Cookie utilizzati da questo sito</h2>
        <ul>
          <li>
            <strong>Cookie tecnici</strong> — necessari al funzionamento del sito e alla
            corretta visualizzazione dei contenuti. Non richiedono consenso.
          </li>
          <li>
            <strong>Cookie di preferenza</strong> — memorizzano scelte come la lingua o le
            impostazioni di visualizzazione.
          </li>
        </ul>
        <p>
          Al momento questo sito <strong>non utilizza cookie di profilazione o di marketing</strong>
          {" "}né strumenti di tracciamento pubblicitario di terze parti.
        </p>
      </section>

      <section>
        <h2>Cookie di terze parti</h2>
        <p>
          Alcuni contenuti (ad esempio font web erogati da Google Fonts) possono comportare
          l'invio di richieste a server di terze parti. Questi soggetti agiscono come titolari
          autonomi del trattamento e applicano le proprie informative privacy.
        </p>
      </section>

      <section>
        <h2>Come gestire i cookie</h2>
        <p>
          Puoi accettare, rifiutare o eliminare i cookie modificando le impostazioni del tuo
          browser. Disabilitare i cookie tecnici può compromettere alcune funzionalità del
          sito.
        </p>
      </section>

      <section>
        <h2>Contatti</h2>
        <p>
          Per qualsiasi domanda relativa a questa Cookie Policy scrivi a{" "}
          <a href="mailto:segreteriaofficinadada@gmail.com">
            segreteriaofficinadada@gmail.com
          </a>
          . Consulta anche la nostra <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
