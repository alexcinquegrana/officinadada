import { Reveal } from "./Reveal";
import a from "@/assets/tessuti0103.jpg.asset.json";
import b from "@/assets/tessuti0220.jpg.asset.json";
import c from "@/assets/tessuti0165.jpg.asset.json";
import d from "@/assets/cerchio.jpg.asset.json";

export function Gallery() {
  return (
    <section id="galleria" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="eyebrow">03 — Galleria</p>
              <h2 className="mt-6 font-display italic font-light text-[clamp(2rem,4vw,3.4rem)] leading-tight text-paper">
                Immagini di scena.
              </h2>
              <p className="mt-6 text-paper/60 text-sm max-w-xs">
                Un frammento dei nostri saggi e spettacoli. Fotografie di
                <span className="text-paper"> David Pasotti</span>.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={b.url} alt="Allieva su tessuti aerei, luci gialle" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 font-display italic text-paper/60 text-sm">Tessuti — Saggio 2024</figcaption>
            </figure>
          </Reveal>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.url} alt="Duo su cerchio aereo" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-3 font-display italic text-paper/60 text-sm">Duo — Cerchio aereo</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.2}>
              <figure>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.url} alt="Performer con cornice e tessuti verdi" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-3 font-display italic text-paper/60 text-sm">Cornice — Ricerca artistica</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="col-span-12 md:col-span-8 md:col-start-3 mt-4">
            <figure>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={d.url} alt="Allieve su amaca aerea" className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 font-display italic text-paper/60 text-sm">Amaca — Duo giovani allieve</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
