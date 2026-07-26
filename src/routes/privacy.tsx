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
    <LegalPage eyebrow="Informativa" title="Privacy Policy" updated="26 luglio 2026">
      <p>
        La presente informativa descrive le modalità di trattamento dei dati personali degli
        utenti che consultano il sito e delle persone che entrano in contatto con
        <strong> Officina Dadà A.S.D.</strong> ai sensi del Regolamento UE 2016/679 (GDPR).
      </p>

      <section>
        <h2>Titolare del trattamento</h2>
        <p>
          Officina Dadà A.S.D. — Roè Volciano (BS), Valsabbia.
          <br />
          Email:{" "}
          <a href="mailto:segreteriaofficinadada@gmail.com">
            segreteriaofficinadada@gmail.com
          </a>
          <br />
          Telefono: +39 327 327 6836
        </p>
      </section>

      <section>
        <h2>Dati raccolti</h2>
        <ul>
          <li>
            <strong>Dati di contatto</strong> forniti volontariamente tramite il modulo del
            sito o via email/telefono (nome, email, telefono, contenuto del messaggio).
          </li>
          <li>
            <strong>Dati di navigazione</strong> raccolti automaticamente dai sistemi
            informatici (indirizzo IP, tipo di browser, pagine visitate) per finalità
            statistiche e di sicurezza.
          </li>
          <li>
            <strong>Dati dei soci</strong> raccolti in fase di iscrizione all'associazione
            e trattati per finalità amministrative, assicurative e sportive.
          </li>
        </ul>
      </section>

      <section>
        <h2>Finalità del trattamento</h2>
        <ul>
          <li>Rispondere alle richieste di informazioni inviate dal sito.</li>
          <li>Gestire il rapporto associativo, i corsi e gli eventi.</li>
          <li>Adempiere ad obblighi di legge e assicurativi.</li>
        </ul>
      </section>

      <section>
        <h2>Base giuridica e conservazione</h2>
        <p>
          I dati sono trattati sulla base del consenso dell'interessato, dell'esecuzione di
          misure precontrattuali o del rapporto associativo. Vengono conservati per il tempo
          strettamente necessario alle finalità indicate e, comunque, non oltre i termini
          previsti dalla legge.
        </p>
      </section>

      <section>
        <h2>Comunicazione dei dati</h2>
        <p>
          I dati non sono diffusi né ceduti a terzi per finalità di marketing. Possono essere
          comunicati a soggetti che erogano servizi strumentali (es. fornitore email,
          hosting, assicurazione) e alle autorità competenti quando previsto dalla legge.
        </p>
      </section>

      <section>
        <h2>Diritti dell'interessato</h2>
        <p>
          Puoi esercitare in ogni momento i diritti previsti dagli artt. 15–22 GDPR: accesso,
          rettifica, cancellazione, limitazione, opposizione e portabilità dei dati. Per farlo
          scrivi a{" "}
          <a href="mailto:segreteriaofficinadada@gmail.com">
            segreteriaofficinadada@gmail.com
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Cookie</h2>
        <p>
          Per informazioni sull'utilizzo dei cookie e delle tecnologie di tracciamento sul
          sito consulta la nostra <a href="/cookie">Cookie Policy</a>.
        </p>
      </section>
    </LegalPage>
  );
}
