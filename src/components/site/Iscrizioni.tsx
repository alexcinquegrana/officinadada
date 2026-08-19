import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

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
      </div>
    </section>
  );
}
