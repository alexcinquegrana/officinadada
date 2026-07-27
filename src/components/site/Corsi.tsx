import { Reveal } from "./Reveal";

type Corso = {
  disciplina: string;
  eta: string;
  giorni: string;
  orari: string;
  livello: string;
  prezzo: string;
};

// Struttura pronta: la cliente fornirà i dati esatti.
// Le celle "—" appaiono come badge "In aggiornamento".
const corsi: Corso[] = [
  { disciplina: "Danza aerea · Kids", eta: "6 – 10", giorni: "—", orari: "—", livello: "Principianti", prezzo: "—" },
  { disciplina: "Danza aerea · Teen", eta: "11 – 15", giorni: "—", orari: "—", livello: "Base · Intermedio", prezzo: "—" },
  { disciplina: "Danza aerea · Adulti", eta: "16+", giorni: "—", orari: "—", livello: "Tutti i livelli", prezzo: "—" },
  { disciplina: "Cerchio aereo", eta: "10+", giorni: "—", orari: "—", livello: "Base · Avanzato", prezzo: "—" },
  { disciplina: "Giocoleria", eta: "8+", giorni: "—", orari: "—", livello: "Aperto", prezzo: "—" },
  { disciplina: "Flexibility", eta: "10+", giorni: "—", orari: "—", livello: "Aperto", prezzo: "—" },
  { disciplina: "Verticali", eta: "10+", giorni: "—", orari: "—", livello: "Base · Intermedio", prezzo: "—" },
  { disciplina: "Circo in famiglia", eta: "3 – 6 + genitore", giorni: "—", orari: "—", livello: "Introduttivo", prezzo: "—" },
];

const cell = (v: string) =>
  v === "—" ? (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.14em] text-paper/50">
      In aggiornamento
    </span>
  ) : (
    <span className="text-paper/80">{v}</span>
  );

export function Corsi() {
  return (
    <section id="corsi" className="relative border-t border-white/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="eyebrow">Corsi 2026 / 27</p>
              <h2 className="mt-6 font-display font-light text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-paper">
                Trova il tuo <span className="italic">corso</span>.
              </h2>
              <p className="mt-6 max-w-sm text-paper/60 text-[15px] leading-relaxed">
                Orari, giorni e quote sono in aggiornamento per la nuova stagione.
                Compila la prova gratuita: ti mandiamo il calendario aggiornato
                appena disponibile.
              </p>
              <a
                href="#prova"
                className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ember hover:text-paper transition-colors"
              >
                Prenota una prova <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <Reveal delay={0.05}>
              {/* Desktop table */}
              <div className="hidden md:block">
                <div className="grid grid-cols-12 gap-4 border-b border-white/15 pb-3 text-[11px] uppercase tracking-[0.18em] text-paper/50">
                  <div className="col-span-4">Disciplina</div>
                  <div className="col-span-2">Età</div>
                  <div className="col-span-2">Giorni</div>
                  <div className="col-span-2">Orari</div>
                  <div className="col-span-2 text-right">Livello</div>
                </div>
                <ul>
                  {corsi.map((c) => (
                    <li
                      key={c.disciplina}
                      className="grid grid-cols-12 items-center gap-4 border-b border-white/10 py-5"
                    >
                      <div className="col-span-4 font-display italic text-lg text-paper">
                        {c.disciplina}
                      </div>
                      <div className="col-span-2 text-sm">{cell(c.eta)}</div>
                      <div className="col-span-2 text-sm">{cell(c.giorni)}</div>
                      <div className="col-span-2 text-sm">{cell(c.orari)}</div>
                      <div className="col-span-2 text-sm text-right">
                        {cell(c.livello)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile cards */}
              <ul className="md:hidden divide-y divide-white/10 border-y border-white/10">
                {corsi.map((c) => (
                  <li key={c.disciplina} className="py-5">
                    <p className="font-display italic text-xl text-paper">
                      {c.disciplina}
                    </p>
                    <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
                      <dt className="eyebrow text-paper/50">Età</dt>
                      <dd>{cell(c.eta)}</dd>
                      <dt className="eyebrow text-paper/50">Giorni</dt>
                      <dd>{cell(c.giorni)}</dd>
                      <dt className="eyebrow text-paper/50">Orari</dt>
                      <dd>{cell(c.orari)}</dd>
                      <dt className="eyebrow text-paper/50">Livello</dt>
                      <dd>{cell(c.livello)}</dd>
                    </dl>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-paper/40">
                Quota associativa annuale, certificato medico e assicurazione da confermare
                in fase di iscrizione.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
