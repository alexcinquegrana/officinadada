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
  desc?: string;
};

type Gruppo = { title: string; corsi: Corso[] };

const DESC_BAMBINI_JUNIOR =
  "I vostri bambini amano il circo e si arrampicano dappertutto? Il nostro corso di discipline aeree gli permetterà di divertirsi su tessuti e cerchio aereo, sviluppando elasticità, forza fisica e controllo del corpo come dei veri acrobati!";

const DESC_ADOLESCENTI_ADULTI =
  "Il corso prevede una preparazione fisica e artistica per avere gli strumenti per danzare nell'aria. Si svilupperà forza, tonicità, controllo del corpo ed elasticità di gambe e schiena.";

const gruppi: Gruppo[] = [
  {
    title: "Tessuti aerei",
    corsi: [
      {
        name: "Tessuti aerei",
        target: "Bambini · 6 – 8 anni",
        img: tessutiBambini.url,
        alt: "Bambina sospesa su un tessuto aereo verde",
        desc: DESC_BAMBINI_JUNIOR,
      },
      {
        name: "Tessuti aerei",
        target: "Junior · 8 – 10 anni",
        img: tessutiJunior.url,
        alt: "Ragazza in figura su tessuti aerei verdi",
        desc: DESC_BAMBINI_JUNIOR,
      },
      {
        name: "Tessuti aerei",
        target: "Adolescenti",
        img: tessutiAdolescenti.url,
        alt: "Adolescente capovolta su tessuti aerei arancioni",
        desc: DESC_ADOLESCENTI_ADULTI,
      },
      {
        name: "Tessuti aerei",
        target: "Adulti",
        img: tessutiAdulti.url,
        alt: "Aerealista adulto su tessuti aerei rossi",
        desc: DESC_ADOLESCENTI_ADULTI,
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
        desc: DESC_BAMBINI_JUNIOR,
      },
      {
        name: "Cerchio aereo",
        target: "Bambini · 6 – 8 anni",
        img: cerchioBambini.url,
        alt: "Due bambine su cerchi aerei durante lo spettacolo",
        desc: DESC_BAMBINI_JUNIOR,
      },
      {
        name: "Cerchio aereo",
        target: "Junior · 8 – 10 anni",
        img: cerchioJunior.url,
        alt: "Ragazza sospesa su cerchio aereo con ombrello di scena",
        desc: DESC_BAMBINI_JUNIOR,
      },
      {
        name: "Cerchio aereo",
        target: "Adolescenti",
        img: cerchioAdolescenti.url,
        alt: "Due adolescenti capovolte su cerchi aerei",
        desc: DESC_ADOLESCENTI_ADULTI,
      },
      {
        name: "Cerchio aereo",
        target: "Adulti",
        img: cerchioAdulti.url,
        alt: "Aerealista adulta sospesa a testa in giù su cerchio aereo",
        desc: DESC_ADOLESCENTI_ADULTI,
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
      },
      {
        name: "Level up",
        target: "Tessuti e cerchio, livello avanzato",
        img: levelUp.url,
        alt: "Aerealiste su tessuti in scena con luci calde",
        desc: "Corso di perfezionamento per atleti di livello avanzato che partecipano a competizioni o spettacoli.",
      },
      {
        name: "Creazione sull'attrezzo",
        target: "Ricerca e composizione",
        img: creazione.url,
        alt: "Gruppo di allieve in una composizione a terra sotto le luci di scena",
        desc: "Un corso dove le idee prendono forma e si esprimono attraverso la danza aerea. Studio del movimento sull'attrezzo per creare un personaggio e trovare il proprio stile.",
      },
    ],
  },
];

function CorsoCard({ c }: { c: Corso }) {
  return (
    <article className="overflow-hidden rounded-sm border border-border bg-ink">
      <img
        src={c.img}
        alt={c.alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full object-contain"
      />
      {c.desc && (
        <p className="px-5 py-4 text-sm leading-relaxed text-paper/70">{c.desc}</p>
      )}
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
