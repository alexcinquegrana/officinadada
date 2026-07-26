import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import tessuti from "@/assets/tessuti0220.jpg.asset.json";
import cerchio from "@/assets/cerchio.jpg.asset.json";
import verde from "@/assets/tessuti0165.jpg.asset.json";
import duo from "@/assets/tessuti0103.jpg.asset.json";

const items = [
  {
    n: "01",
    name: "Danza aerea",
    detail: "Tessuti, cerchio, amaca, corda e trapezio",
    img: tessuti.url,
  },
  { n: "02", name: "Giocoleria", detail: "Palline, cerchi, foulard e coordinazione", img: cerchio.url },
  { n: "03", name: "Circo in famiglia", detail: "Un'ora per grandi e piccoli, insieme in aria", img: duo.url },
  { n: "04", name: "Flexibility", detail: "Mobilità, forza e ascolto del corpo", img: verde.url },
  { n: "05", name: "Verticali", detail: "Equilibri, forza e controllo capovolti", img: cerchio.url },
];

export function Discipline() {
  const [active, setActive] = useState(0);

  return (
    <section id="discipline" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <Reveal>
              <p className="eyebrow">Discipline</p>
              <p className="mt-6 font-display italic text-2xl text-paper/80 leading-tight">
                I nostri corsi.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="text-paper/70 max-w-xl text-[15px] md:text-base leading-relaxed">
                Un percorso artistico e sportivo, per ogni età e livello. Ci si iscrive
                per curiosità, si resta per la comunità.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 md:gap-10">
          {/* Photo panel (desktop) */}
          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-32 aspect-[4/5] w-full overflow-hidden bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={items[active].img}
                  src={items[active].img}
                  alt={items[active].name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* List */}
          <ul className="col-span-12 md:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {items.map((it, i) => (
              <li key={it.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group grid w-full grid-cols-12 items-baseline gap-4 py-6 md:py-10 text-left transition-colors"
                >
                  <span className="col-span-2 md:col-span-1 eyebrow text-paper/40 group-hover:text-ember transition-colors">
                    {it.n}
                  </span>
                  <span className="col-span-10 md:col-span-7">
                    <span
                      className={`font-display font-light text-[clamp(2rem,5vw,4rem)] leading-none tracking-[-0.02em] transition-all duration-500 ${
                        active === i ? "text-paper italic" : "text-paper/60"
                      }`}
                    >
                      {it.name}
                    </span>
                  </span>
                  <span className="col-span-12 md:col-span-4 text-paper/60 text-sm md:text-right">
                    {it.detail}
                  </span>

                  {/* Mobile image */}
                  <span className="col-span-12 md:hidden">
                    <span className="mt-4 block aspect-[16/10] w-full overflow-hidden">
                      <img src={it.img} alt={it.name} className="h-full w-full object-cover" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
