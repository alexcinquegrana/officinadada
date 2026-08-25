import { Reveal } from "./Reveal";
import salaTessuti from "@/assets/DAJ_9757.jpg.asset.json";
import salaCerchi from "@/assets/DAJ_9780.jpg.asset.json";
import accoglienza from "@/assets/DAJ_9765.jpg.asset.json";

const specs = [
  ["Sede principale", "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)"],
  ["Sale", "Due, con parquet e specchi"],
  ["Altezza appendimenti", "5,50 m"],
  ["Appendimenti aerei", "10 – 14"],
  ["Materassi anticaduta", "8"],
  ["Altre attrezzature", "Slackline · Tappeti · Audio pro"],
];

const rooms = [
  { src: salaCerchi.url, alt: "Sala con cerchi aerei appesi alle travi, luce naturale", caption: "Sala cerchi" },
  { src: accoglienza.url, alt: "Reception di Officina Dadà con bancone bianco", caption: "Accoglienza" },
];

export function Sede() {
  return (
    <section id="sede" className="relative border-t border-white/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <figure>
            <div className="aspect-[4/3] md:aspect-[21/9] w-full overflow-hidden bg-secondary">
              <img
                src={salaTessuti.url}
                alt="La sala di Officina Dadà con i tessuti aerei colorati appesi al soffitto in legno"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-3 font-display italic text-paper/60 text-sm">
              Sala tessuti — Roè Volciano
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mt-16">La sede</p>
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

      <div className="mx-auto mt-16 max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {rooms.map((r, i) => (
            <Reveal key={r.src} delay={i * 0.08}>
              <figure>
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                  <img
                    src={r.src}
                    alt={r.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-3 font-display italic text-paper/60 text-sm">
                  {r.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
