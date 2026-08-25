import { Reveal } from "./Reveal";
import gruppo from "@/assets/cpm00029.jpg.asset.json";

const events = [
  { year: "2025", title: "Born to Fly · II edizione", body: "Competizione regionale di acrobatica aerea aperta a tutti i praticanti delle discipline aeree." },
  { year: "2024 / 25", title: "Formazione istruttori", body: "Nuovi percorsi di formazione per istruttori di acrobatica aerea." },
  { year: "2024", title: "Born to Fly · I edizione", body: "Prima edizione della nostra competizione regionale di acrobatica aerea." },
  { year: "2023", title: "Strabilio Festival", body: "Al via la collaborazione con Strabilio Festival: spettacoli e progetti condivisi." },
];

export function Eventi() {
  return (
    <section id="eventi" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="mb-16 md:mb-24">
          <div className="aspect-[16/9] w-full overflow-hidden bg-secondary">
            <img
              src={gruppo.url}
              alt="Foto di gruppo sul palco al termine del saggio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 font-display italic text-paper/60 text-sm">Saggio finale — la nostra comunità sul palco.</p>
        </Reveal>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="eyebrow">Percorso</p>
            <h2 className="mt-6 font-display italic font-light text-[clamp(2rem,4vw,3.2rem)] leading-tight text-paper">
              Otto anni in aria.
            </h2>
          </Reveal>
        </div>



        <ol className="col-span-12 md:col-span-8 md:col-start-5">
          {events.map((e, i) => (
            <Reveal key={e.year + e.title} delay={i * 0.04}>
              <li className="grid grid-cols-12 gap-4 border-t border-white/10 py-8 md:py-10 first:border-t-0">
                <span className="col-span-4 md:col-span-2 font-display italic text-2xl md:text-3xl text-ember/90">
                  {e.year}
                </span>
                <div className="col-span-8 md:col-span-10">
                  <h3 className="font-display font-light text-xl md:text-2xl text-paper leading-snug">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-paper/60 text-[15px] leading-relaxed max-w-xl">
                    {e.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
