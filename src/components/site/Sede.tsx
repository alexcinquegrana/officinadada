import { Reveal } from "./Reveal";
import img from "@/assets/tessuti0165.jpg.asset.json";

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
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
        <Reveal className="col-span-12 md:col-span-6">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img src={img.url} alt="Interno di scena — Officina Dadà" className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow">04 — La sede</p>
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
      </div>
    </section>
  );
}
