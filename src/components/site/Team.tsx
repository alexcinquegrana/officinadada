import { Reveal } from "./Reveal";
import backstage from "@/assets/SGR_5528.jpg.asset.json";

const board = [
  { name: "Elena Trombini", role: "Presidente · Direttrice artistica", note: "Regista e istruttrice di acrobatica aerea. Non dimentica mai il lato artistico della disciplina." },
  { name: "Matteo Dolcetti", role: "Vice presidente", note: "" },
  { name: "Luisa Ribelli", role: "Segretario", note: "" },
];

const staff = [
  { name: "Romina Savioni", role: "Istruttrice · Tessuti e cerchio", note: "Precisione e creatività, due opposti che convivono. Competenze tecniche di montaggio." },
  { name: "Irene Maioli", role: "Istruttrice · Aerea e flexibility", note: "Performer eccellente, appassionata delle discipline aeree." },
  { name: "Elena Trombini", role: "Istruttrice · Tessuti e teatro", note: "Direttrice della scuola, creativa e teatrale." },
  { name: "Silvia Federici", role: "Amministrazione · Segreteria", note: "Affidabile, dolce e comunicativa: conquista tutti con la sua cordialità." },
];

function Roster({ title, people }: { title: string; people: typeof staff }) {
  return (
    <div>
      <Reveal>
        <p className="eyebrow">{title}</p>
      </Reveal>
      <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {people.map((p, i) => (
          <Reveal key={p.name + p.role} delay={i * 0.05}>
            <li className="grid grid-cols-12 gap-4 py-6 md:py-8">
              <div className="col-span-12 md:col-span-5">
                <p className="font-display italic text-2xl md:text-3xl text-paper leading-tight">{p.name}</p>
                <p className="eyebrow mt-2">{p.role}</p>
              </div>
              {p.note && (
                <p className="col-span-12 md:col-span-7 text-paper/70 text-[15px] leading-relaxed">
                  {p.note}
                </p>
              )}
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative border-t border-white/10 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="eyebrow">Chi siamo</p>
              <h2 className="mt-6 font-display italic font-light text-[clamp(2rem,4vw,3.2rem)] leading-tight text-paper">
                Le persone dietro il volo.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="mt-10">
                <div className="aspect-[4/5] w-full overflow-hidden bg-secondary">
                  <img
                    src={backstage.url}
                    alt="Backstage: preparazione trucco prima dello spettacolo"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-display italic text-paper/60 text-sm">
                  Dietro le quinte — la cura, prima del volo.
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-16">
            <Roster title="Consiglio direttivo" people={board} />
            <Roster title="Staff" people={staff} />
          </div>
        </div>
      </div>
    </section>
  );
}
