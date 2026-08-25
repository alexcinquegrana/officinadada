import { Reveal } from "./Reveal";
import babyAerea from "@/assets/corso-baby-aerea.jpg.asset.json";
import cerchioAdolescenti from "@/assets/corso-cerchio-adolescenti.jpg.asset.json";
import cerchioAdulti from "@/assets/corso-cerchio-adulti.jpg.asset.json";
import cerchioBambini from "@/assets/corso-cerchio-bambini.jpg.asset.json";
import cerchioJunior from "@/assets/corso-cerchio-junior.jpg.asset.json";
import tessutiBambini from "@/assets/corso-tessuti-bambini.jpg.asset.json";
import tessutiJunior from "@/assets/corso-tessuti-junior.jpg.asset.json";
import tessutiAdolescenti from "@/assets/corso-tessuti-adolescenti.jpg.asset.json";
import tessutiAdulti from "@/assets/corso-tessuti-adulti.jpg.asset.json";
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

type Gruppo = { title: string; corsi: Corso[] };

const gruppi: Gruppo[] = [
  {
    title: "Tessuti aerei",
    corsi: [
      {
        name: "Tessuti aerei",
        target: "Bambini · 6 – 8 anni",
        img: tessutiBambini.url,
        alt: "Bambina sospesa su un tessuto aereo verde",
        slots: [
          ["Principiante · Lun (Vestone)", "16:30 – 17:30"],
          ["Principiante · Ven", "16:30 – 17:30"],
          ["Intermedio · Mar", "16:30 – 17:30"],
        ],
      },
      {
        name: "Tessuti aerei",
        target: "Junior · 8 – 10 anni",
        img: tessutiJunior.url,
        alt: "Ragazza in figura su tessuti aerei verdi",
        slots: [
          ["Principiante · Ven", "17:30 – 18:30"],
          ["Intermedio · Lun (Vestone)", "17:30 – 18:30"],
          ["Int. / Ava. · Lun", "17:30 – 18:30"],
          ["Avanzato · Mer", "17:30 – 18:30"],
        ],
      },
      {
        name: "Tessuti aerei",
        target: "Adolescenti",
        img: tessutiAdolescenti.url,
        alt: "Adolescente capovolta su tessuti aerei arancioni",
        slots: [
          ["Principiante · Mer (Vestone)", "16:30 – 17:30"],
          ["Principiante · Gio", "16:30 – 17:30"],
          ["Intermedio · Mer (Vestone)", "17:30 – 18:30"],
          ["Intermedio · Mer", "18:30 – 19:30"],
          ["Intermedio · Ven", "18:30 – 19:30"],
          ["Avanzato · Mar", "17:30 – 18:30"],
          ["Avanzato · Gio", "17:30 – 18:30"],
          ["Avanzato · Ven", "17:30 – 18:30"],
        ],
      },
      {
        name: "Tessuti aerei",
        target: "Adulti",
        img: tessutiAdulti.url,
        alt: "Aerealista adulto su tessuti aerei rossi",
        slots: [
          ["Principiante · Lun", "10:30 – 11:30"],
          ["Principiante · Mar", "18:30 – 19:30"],
          ["Principiante · Mer (Vestone)", "18:30 – 19:30"],
          ["Principiante · Gio", "20:00 – 21:00"],
          ["Intermedio · Lun", "20:00 – 21:30"],
          ["Int. / Ava. · Mar", "19:30 – 21:00"],
          ["Int. / Ava. · Mer", "19:30 – 21:00"],
          ["Int. / Ava. · Gio", "18:30 – 20:00"],
          ["Avanzato · Lun", "9:00 – 10:30"],
        ],
      },
    ],
  },
  {
    title: "Cerchio aereo",
    corsi: [
      {
        name: "Baby aerea",
        target: "4 – 6 anni",
        img: babyAerea.url,
        alt: "Bambina sospesa su un tessuto aereo verde durante lo spettacolo",
        slots: [["Mer", "16:30 – 17:30"]],
      },
      {
        name: "Cerchio aereo",
        target: "Bambini · 6 – 8 anni",
        img: cerchioBambini.url,
        alt: "Due bambine su cerchi aerei durante lo spettacolo",
        slots: [
          ["Principiante · Lun", "16:30 – 17:30"],
          ["Intermedio · Mar", "16:30 – 17:30"],
        ],
      },
      {
        name: "Cerchio aereo",
        target: "Junior · 8 – 10 anni",
        img: cerchioJunior.url,
        alt: "Ragazza sospesa su cerchio aereo con ombrello di scena",
        slots: [
          ["Principiante · Gio", "16:30 – 17:30"],
          ["Intermedio · Gio", "17:30 – 18:30"],
          ["Avanzato · Mer", "16:30 – 17:30"],
        ],
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
    ],
  },
  {
    title: "Altri corsi",
    corsi: [
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
    ],
  },
];

function CorsoCard({ c }: { c: Corso }) {
  return (
    <article className="relative h-full overflow-hidden rounded-sm bg-ink">
      <img
        src={c.img}
        alt={c.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,11,12,0.25) 0%, rgba(11,11,12,0.55) 42%, rgba(11,11,12,0.94) 78%, rgba(11,11,12,0.98) 100%)",
        }}
      />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end p-6 sm:min-h-[440px]">
        <p className="eyebrow !text-white/70">{c.target}</p>
        <h3 className="mt-2 font-display italic font-light text-[clamp(1.6rem,4vw,2.2rem)] leading-tight text-white">
          {c.name}
        </h3>
        <dl className="mt-4 space-y-2 border-t border-white/15 pt-4">
          {c.slots.map(([label, time]) => (
            <div
              key={label + time}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3"
            >
              <dt className="min-w-0 truncate text-xs uppercase tracking-[0.14em] text-white/60">
                {label}
              </dt>
              <dd className="shrink-0 font-display italic text-white text-[15px]">{time}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

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
            Le lezioni si svolgono in sede a Roè Volciano; i turni segnalati con “Vestone” si
            tengono nella palestra di Vestone. Scrivici per verificare i posti disponibili e
            prenotare la prova gratuita.
          </p>
        </Reveal>

        {gruppi.map((g) => (
          <div key={g.title} className="mt-16">
            <Reveal>
              <h3 className="font-display italic font-light text-[clamp(1.4rem,3vw,2rem)] text-paper/80">
                {g.title}
              </h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.corsi.map((c, i) => (
                <Reveal key={c.name + c.target} delay={(i % 3) * 0.06}>
                  <CorsoCard c={c} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
