import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import aerea from "@/assets/DAJ_9974.jpg.asset.json";
import famigliaFoto from "@/assets/circo-in-famiglia.jpg.asset.json";
import flexibility from "@/assets/DAJ_0012.jpg.asset.json";
import famiglia from "@/assets/SGR_5909.jpg.asset.json";

const items = [
  {
    name: "Danza aerea",
    detail: "Tessuti, cerchio, amaca, corda e trapezio",
    img: aerea.url,
    desc: "Il corpo lascia il suolo e trova un nuovo appoggio: tessuti, cerchio, amaca, corda e trapezio. Si lavora su forza, coordinazione e fiducia, imparando salite, chiavi e figure in totale sicurezza. Ogni sequenza diventa poi una piccola coreografia, con la musica a guidare il respiro. Percorsi per bambini, ragazzi e adulti, dal primo approccio ai livelli avanzati.",
  },
  {
    name: "Giocoleria",
    detail: "Palline, cerchi, foulard e coordinazione",
    img: giocoleria.url,
    desc: "Palline, cerchi, clave e foulard per allenare occhio, mano e ritmo. È la disciplina che insegna prima di tutto a sbagliare: si lascia cadere, si ride, si riprova. Migliora concentrazione, lateralità e memoria motoria, con esercizi progressivi adatti a ogni età. Nel tempo la tecnica diventa gioco scenico, da portare in scena da soli o in gruppo.",
  },
  {
    name: "Circo in famiglia",
    detail: "Un'ora per grandi e piccoli, insieme in aria",
    img: famiglia.url,
    desc: "Un'ora da vivere insieme, genitore e bambino, tra amaca, tappeti e piccoli attrezzi. Si gioca con l'equilibrio, il contatto e la fiducia reciproca, senza prerequisiti tecnici. È uno spazio protetto in cui gli adulti tornano a muoversi e i bambini scoprono il piacere del corpo. Ideale dai 3 anni in su, con proposte diverse a ogni incontro.",
  },
  {
    name: "Flexibility",
    detail: "Mobilità, forza e ascolto del corpo",
    img: flexibility.url,
    desc: "Un allenamento dedicato a mobilità articolare, allungamento attivo e forza nei range estremi. Si lavora su spalle, colonna e anche con progressioni graduali e rispettose dei tempi di ciascuno. È il complemento perfetto alle discipline aeree: più ampiezza, meno infortuni, linee più pulite. Adatto anche a chi non fa circo e vuole semplicemente stare meglio nel proprio corpo.",
  },
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
                  <span className="col-span-12 md:col-span-8 min-w-0">
                    <span
                      className={`block font-display font-light text-[clamp(1.75rem,7vw,4rem)] leading-none tracking-[-0.02em] transition-all duration-500 ${
                        active === i ? "text-paper italic" : "text-paper/60"
                      }`}
                    >
                      {it.name}
                    </span>
                  </span>
                  <span className="col-span-12 md:col-span-4 text-paper/60 text-sm md:text-right">
                    {it.detail}
                  </span>

                  <span className="col-span-12 md:col-span-9 mt-3 block text-paper/70 text-[15px] leading-relaxed">
                    {it.desc}
                  </span>


                  {/* Mobile image */}
                  <span className="col-span-12 md:hidden">
                    <span className="mt-4 block aspect-[16/10] w-full overflow-hidden">
                      <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover" />
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
