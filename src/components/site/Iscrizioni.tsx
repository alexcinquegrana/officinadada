import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import domanda from "@/assets/domanda-ammissione-socio.pdf.asset.json";
import regolamento from "@/assets/regolamento-2026.pdf.asset.json";

const moduli = [
  {
    href: domanda.url,
    file: "domanda-ammissione-socio.pdf",
    name: "Domanda di ammissione a socio",
    note: "Da compilare e consegnare firmata in segreteria. Per i minori firma di un genitore.",
    size: "PDF · 313 KB",
  },
  {
    href: regolamento.url,
    file: "regolamento-2026.pdf",
    name: "Regolamento 2026",
    note: "Il regolamento associativo da leggere prima del primo ingresso in sala.",
    size: "Documento ufficiale",
  },
  {
    href: "https://www.facebook.com/OfficinaDADAdisciplineartistiche/posts/pfbid0xuwpweK3p2aFwr3NXsywaAujkREzGaBzLUYnonvgxm1fs2AbByYDKTrEAAHEvn6Yl",
    name: "Safeguarding",
    note: "Le nostre tutele per minori e persone in condizione di fragilità.",
    size: "Documento ufficiale",
  },
  {
    href: "https://www.facebook.com/OfficinaDADAdisciplineartistiche/posts/pfbid026pr5VFi2pXNCxVdLBddsJb93tmaYMFiUPtfiNfVvjUkbkAhqJK7kZPsg8UF2xCfgl",
    name: "Codice Etico",
    note: "I principi e le regole di condotta dell'associazione.",
    size: "Documento ufficiale",
  },
];

const steps = [
  ["01", "Prenota la prova", "Scrivici o chiamaci: fissiamo insieme una lezione di prova gratuita, senza impegno."],
  ["02", "Vieni in sala", "Ti accogliamo in palestra con abbigliamento comodo: al resto pensiamo noi."],
  ["03", "Iscriviti", "Tesseramento assicurativo, certificato medico non agonistico e scelta del corso."],
  ["04", "Inizia a volare", "Entri nel gruppo e cominci il percorso, con verifiche periodiche dei progressi."],
];

const infos = [
  ["Anno sportivo", "Da settembre a giugno, con saggio finale"],
  ["Quota associativa", "Tesseramento annuale con copertura assicurativa"],
  ["Documenti", "Certificato medico non agonistico"],
  ["Età", "Dai 4 anni, corsi bambini · ragazzi · adulti"],
];

export function Iscrizioni() {
  return (
    <section id="iscrizioni" className="relative border-t border-white/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Iscrizioni</p>
          <h2 className="mt-6 max-w-3xl font-display font-light text-[clamp(2rem,5vw,4rem)] leading-[1.03] tracking-[-0.02em] text-paper">
            Iscriversi è semplice: si comincia <span className="italic text-ember">provando</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {steps.map(([n, t, d], i) => (
                <Reveal key={n} delay={0.05 * i}>
                  <li className="flex gap-6 py-6">
                    <span className="eyebrow text-ember pt-1">{n}</span>
                    <div>
                      <h3 className="font-display italic text-xl md:text-2xl text-paper">{t}</h3>
                      <p className="mt-2 text-sm md:text-[15px] text-paper/65 leading-relaxed">{d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.15}>
            <dl className="divide-y divide-white/10 border-y border-white/10">
              {infos.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="eyebrow text-paper/50">{k}</dt>
                  <dd className="text-right text-[15px] text-paper font-display italic">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/contatti"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ember px-7 py-4 text-xs uppercase tracking-[0.2em] text-paper hover:bg-ember/90 transition-colors"
            >
              <span>Prenota la tua prova gratuita ora</span>
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow">Moduli da scaricare</p>
            <p className="mt-4 max-w-xl text-sm md:text-[15px] text-paper/65 leading-relaxed">
              Per iscriversi serve la domanda di ammissione a socio, compilata e firmata,
              insieme al certificato medico non agonistico. Regolamento e policy di
              safeguarding sono da leggere prima del primo ingresso in sala.
            </p>
          </Reveal>

          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {moduli.map((m, i) => (
              <Reveal key={m.file} delay={0.05 * i}>
                <li>
                  <a
                    href={m.href}
                    download={m.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6"
                  >
                    <div className="min-w-0">
                      <h3 className="font-display italic text-xl md:text-2xl text-paper group-hover:text-ember transition-colors">
                        {m.name}
                      </h3>
                      <p className="mt-2 text-sm text-paper/60 leading-relaxed">{m.note}</p>
                      <p className="eyebrow mt-3 text-paper/40">{m.size}</p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="shrink-0 rounded-full border border-white/15 px-4 py-3 text-xs uppercase tracking-[0.2em] text-paper/70 group-hover:border-ember group-hover:text-ember transition-colors"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
