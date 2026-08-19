import { Reveal } from "./Reveal";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 md:gap-10 md:px-10">
        <div className="col-span-12 md:col-span-3">
          <Reveal>
            <p className="eyebrow">Manifesto</p>
            <p className="mt-6 font-display italic text-2xl text-paper/80 leading-tight">
              In cosa crediamo.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <Reveal delay={0.05}>
            <h2 className="font-display font-light text-[clamp(2rem,5vw,4.2rem)] leading-[1.02] tracking-[-0.02em] text-paper">
              Le arti circensi come strumento
              di <span className="italic text-ember/90">stupore</span>, trasformazione
              e appartenenza.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal delay={0.1}>
              <p className="text-paper/80 leading-relaxed text-[15px] md:text-base">
                Dal 2018, nel cuore della Valsabbia, insegniamo ginnastica acrobatica
                e discipline aeree a bambini e adulti. Il movimento — a terra e in aria —
                non è mai fine a sé stesso: è un modo per comunicare, per stupire,
                per abitare il proprio corpo con consapevolezza.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-paper/80 leading-relaxed text-[15px] md:text-base">
                Un perfetto connubio tra attività sportiva e arte; dove la forza fisica si unisce alla grazia del movimento.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25} className="mt-16">
            <figure className="border-l border-ember/60 pl-6 md:pl-10">
              <blockquote className="font-display italic text-[clamp(1.5rem,3vw,2.4rem)] leading-tight text-paper">
                “Da spettatori ad artisti della propria vita.”
              </blockquote>
              <figcaption className="mt-4 eyebrow">La nostra pedagogia</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
