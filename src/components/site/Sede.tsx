import { Reveal } from "./Reveal";

const specs = [
  ["Sede principale", "Roè Volciano (BS)"],
  ["Sale", "Due, con parquet e specchi"],
  ["Altezza appendimenti", "5,50 m"],
  ["Appendimenti aerei", "10 – 14"],
  ["Materassi anticaduta", "8"],
  ["Altre attrezzature", "Slackline · Giocoleria · Audio pro"],
];

export function Sede() {
  return (
    <section id="sede" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">La sede</p>
          <h2 className="mt-6 font-display font-light text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-paper">
            Uno spazio pensato per <span className="italic">volare</span> in sicurezza.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {specs.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                <dt className="eyebrow text-paper/50">{k}</dt>
                <dd className="text-paper text-right text-[15px] md:text-base font-display italic">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-paper/60 leading-relaxed">
            Seconda sede — <span className="text-paper">Vestone</span>, palestra della Scuola Primaria:
            4 appendimenti a 6 m, 4 materassi anticaduta e 2 spalliere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
