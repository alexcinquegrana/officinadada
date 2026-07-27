import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import a from "@/assets/tessuti0103.jpg.asset.json";
import b from "@/assets/tessuti0220.jpg.asset.json";
import c from "@/assets/tessuti0165.jpg.asset.json";
import d from "@/assets/cerchio.jpg.asset.json";
import sgr6225 from "@/assets/SGR_6225.jpg.asset.json";
import sgr6255 from "@/assets/SGR_6255.jpg.asset.json";
import cpm1964 from "@/assets/cpm01964.jpg.asset.json";
import cpm1154 from "@/assets/cpm01154.jpg.asset.json";
import sgr5528 from "@/assets/SGR_5528.jpg.asset.json";
import cpm0029 from "@/assets/cpm00029.jpg.asset.json";
import cpm4369 from "@/assets/cpm04369.jpg.asset.json";
import cpm4439 from "@/assets/cpm04439.jpg.asset.json";
import sgr7156 from "@/assets/SGR_7156.jpg.asset.json";
import cpm3107 from "@/assets/cpm03107.jpg.asset.json";
import cpm0250 from "@/assets/cpm00250.jpg.asset.json";
import sgr5909 from "@/assets/SGR_5909.jpg.asset.json";
import sgr5918 from "@/assets/SGR_5918.jpg.asset.json";

type Photo = { src: string; alt: string; caption: string; span: string; ratio: string };

const gallery: Photo[] = [
  { src: cpm4369.url, alt: "Aerealista su tessuti bianchi, luci viola e gialle", caption: "Tessuti — Spaccata sospesa", span: "md:col-span-5", ratio: "aspect-[3/4]" },
  { src: sgr6225.url, alt: "Duo su cerchio aereo, luce rossa", caption: "Duo — Cerchio aereo", span: "md:col-span-7", ratio: "aspect-[4/5]" },
  { src: cpm4439.url, alt: "Cinque aerealiste in fila su tessuti aerei azzurri", caption: "Ensemble — Tessuti in cinque", span: "md:col-span-12", ratio: "aspect-[16/9]" },
  { src: b.url, alt: "Allieva su tessuti aerei gialli", caption: "Tessuti — Saggio 2024", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: sgr7156.url, alt: "Aerealista con abito blu su tessuti", caption: "Tessuti — Assolo blu", span: "md:col-span-7", ratio: "aspect-[4/3]" },
  { src: cpm1964.url, alt: "Cerchio aereo blu, figura capovolta", caption: "Cerchio — Assolo", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: cpm0029.url, alt: "Foto di gruppo sul palco al termine dello spettacolo", caption: "Saggio finale — Insieme", span: "md:col-span-8", ratio: "aspect-[4/3]" },
  { src: cpm3107.url, alt: "Aerealista in sospensione, tenda bordeaux", caption: "Tessuti — Sospensione bordeaux", span: "md:col-span-5", ratio: "aspect-[3/4]" },
  { src: sgr6255.url, alt: "Cerchio aereo, figura sospesa in luce rossa", caption: "Cerchio — Sospensione", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { src: sgr5909.url, alt: "Scena corale con adulti e bambini in circo in famiglia", caption: "Circo in famiglia — Scena", span: "md:col-span-8", ratio: "aspect-[16/10]" },
  { src: cpm0250.url, alt: "Giovane allieva sui tessuti azzurri", caption: "Kids — Tessuti", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: a.url, alt: "Duo su cerchio aereo", caption: "Duo — Cerchio", span: "md:col-span-7", ratio: "aspect-[4/3]" },
  { src: sgr5528.url, alt: "Backstage: trucco prima dello spettacolo", caption: "Backstage — Dietro le quinte", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: sgr5918.url, alt: "Trio di ragazze su tessuti, luci a raggiera", caption: "Trio — Tessuti in luce", span: "md:col-span-8", ratio: "aspect-[16/10]" },
  { src: cpm1154.url, alt: "Giovane allieva sul cerchio aereo rosso", caption: "Kids — Cerchio", span: "md:col-span-4", ratio: "aspect-[3/4]" },
  { src: c.url, alt: "Performer con cornice e tessuti verdi", caption: "Cornice — Ricerca artistica", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: d.url, alt: "Allieve su amaca aerea", caption: "Amaca — Duo giovani allieve", span: "md:col-span-7", ratio: "aspect-[16/10]" },
];

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % gallery.length)),
    [],
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, next, prev]);

  return (
    <section id="galleria" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="eyebrow">Galleria</p>
              <h2 className="mt-6 font-display italic font-light text-[clamp(2rem,4vw,3.4rem)] leading-tight text-paper">
                Immagini di scena.
              </h2>
              <p className="mt-6 text-paper/60 text-sm max-w-xs">
                Un frammento dei nostri saggi, spettacoli e dietro le quinte. Fotografie di
                <span className="text-paper"> David Pasotti</span>.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
          {gallery.map((p, i) => (
            <Reveal key={p.src} delay={(i % 3) * 0.06} className={`col-span-12 ${p.span}`}>
              <figure>
                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  className={`group block ${p.ratio} w-full overflow-hidden bg-secondary`}
                  aria-label={`Apri ${p.caption}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="mt-3 font-display italic text-paper/60 text-sm">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && openIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-paper/80 hover:text-paper text-sm eyebrow"
              aria-label="Chiudi galleria"
            >
              Chiudi ✕
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-paper/70 hover:text-paper text-3xl md:text-4xl font-display"
              aria-label="Foto precedente"
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-paper/70 hover:text-paper text-3xl md:text-4xl font-display"
              aria-label="Foto successiva"
            >
              →
            </button>

            <motion.figure
              key={openIdx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] max-w-[92vw] md:max-w-[80vw] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[openIdx].src}
                alt={gallery[openIdx].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <figcaption className="mt-4 font-display italic text-paper/70 text-sm text-center">
                {gallery[openIdx].caption}
                <span className="ml-3 text-paper/40">
                  {openIdx + 1} / {gallery.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
