import { Reveal } from "./Reveal";
import babyAerea from "@/assets/corso-baby-aerea.jpg.asset.json";
import cerchioAdolescenti from "@/assets/corso-cerchio-adolescenti.jpg.asset.json";
import cerchioAdulti from "@/assets/corso-cerchio-adulti.jpg.asset.json";
import flexybility from "@/assets/corso-flexybility.jpg.asset.json";
import levelUp from "@/assets/corso-level-up.jpg.asset.json";
import creazione from "@/assets/corso-creazione.jpg.asset.json";

type Corso = {
  name: string;
  target: string;
  img: string;
  alt: string;
  slots: [string, string][];
};

const corsi: Corso[] = [
  {
    name: "Baby aerea",
    target: "4 – 6 anni",
    img: babyAerea.url,
    alt: "Bambina sospesa su un tessuto aereo verde durante lo spettacolo",
    slots: [["Mer", "16:30 – 17:30"]],
  },
  {
    name: "Cerchio aereo",
    target: "Adolescenti",
    img: cerchioAdolescenti.url,
    alt: "Due adolescenti capovolte su cerchi aerei",
    slots: [
      ["Principiante · Mar", "18:30 – 19:30"],
      ["Int. / Ava. · Mer", "17:30 – 18:30"],
    ],
  },
  {
    name: "Cerchio aereo",
    target: "Adulti",
    img: cerchioAdulti.url,
    alt: "Aerealista adulta sospesa a testa in giù su cerchio aereo",
    slots: [
      ["Principiante · Gio", "20:00 – 21:00"],
      ["Intermedio · Gio", "18:30 – 20:00"],
      ["Int. / Ava. · Mar", "19:30 – 21:00"],
      ["Avanzato · Lun", "19:00 – 20:30"],
    ],
  },
  {
    name: "Flexybility",
    target: "Mobilità e allungamento",
    img: flexybility.url,
    alt: "Figura sospesa su cerchio aereo in luce viola",
    slots: [
      ["Mar", "17:30 – 18:30"],
      ["Ven", "18:30 – 19:30"],
    ],
  },
  {
    name: "Level up",
    target: "Tessuti e cerchio, livello avanzato",
    img: levelUp.url,
    alt: "Aerealiste su tessuti in scena con luci calde",
    slots: [
      ["Tessuti · Lun", "18:30 – 20:00"],
      ["Cerchio · Lun", "17:30 – 19:00"],
    ],
  },
  {
    name: "Creazione sull'attrezzo",
    target: "Ricerca e composizione",
    img: creazione.url,
    alt: "Gruppo di allieve in una composizione a terra sotto le luci di scena",
    slots: [["Mer", "18:30 – 19:45"]],
  },
];

export function Orari() {
  return (
    <section id="orari" className="relative border-t border-white/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="eyebrow">Orari</p>
          <h2 className="mt-6 max-w-3xl font-display font-light text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-paper">
            I corsi dell'anno <span className="italic text-ember">2026/27</span>.
          </h2>
          <p className="mt-6 max-w-xl text-sm md:text-[15px] text-paper/65 leading-relaxed">
            Le lezioni si svolgono in sede, a Roè Volciano. Altri corsi in arrivo: scrivici
            per verificare i posti disponibili e prenotare la prova gratuita.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {corsi.map((c, i) => (
            <Reveal key={c.name + c.target} delay={(i % 3) * 0.06}>
              <article className="relative h-full overflow-hidden rounded-sm bg-ink">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(11,11,12,0.55), rgba(11,11,12,0.92))",
                  }}
                />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-6">
                  <p className="eyebrow !text-white/60">{c.target}</p>
                  <h3 className="mt-3 font-display italic font-light text-[clamp(1.6rem,4vw,2.2rem)] leading-tight text-white">
                    {c.name}
                  </h3>
                  <dl className="mt-5 space-y-2 border-t border-white/15 pt-4">
                    {c.slots.map(([label, time]) => (
                      <div
                        key={label + time}
                        className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3"
                      >
                        <dt className="min-w-0 truncate text-xs uppercase tracking-[0.16em] text-white/55">
                          {label}
                        </dt>
                        <dd className="shrink-0 font-display italic text-white text-[15px]">
                          {time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
