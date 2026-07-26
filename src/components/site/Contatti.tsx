import { Reveal } from "./Reveal";

export function Contatti() {
  return (
    <section id="contatti" className="relative border-t border-white/10 py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">07 — Contatti</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display font-light text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] tracking-[-0.02em] text-paper">
            Vieni a <span className="italic text-ember">volare</span>
            <br />
            con noi.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <Reveal delay={0.1} className="col-span-12 md:col-span-4">
            <p className="eyebrow">Scrivici</p>
            <a
              href="mailto:segreteriaofficinadada@gmail.com"
              className="mt-3 block font-display italic text-xl md:text-2xl text-paper hover:text-ember transition-colors break-words"
            >
              segreteriaofficinadada@gmail.com
            </a>
          </Reveal>
          <Reveal delay={0.15} className="col-span-12 md:col-span-4">
            <p className="eyebrow">Chiama</p>
            <a
              href="tel:+393273276836"
              className="mt-3 block font-display italic text-xl md:text-2xl text-paper hover:text-ember transition-colors"
            >
              +39 327 327 6836
            </a>
            <p className="mt-2 text-paper/50 text-sm">Elena Trombini</p>
          </Reveal>
          <Reveal delay={0.2} className="col-span-12 md:col-span-4">
            <p className="eyebrow">Vieni a trovarci</p>
            <p className="mt-3 font-display italic text-xl md:text-2xl text-paper">
              Roè Volciano (BS)
            </p>
            <p className="mt-2 text-paper/50 text-sm">Valsabbia · Provincia di Brescia</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
