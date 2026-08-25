import { Reveal } from "./Reveal";
import aerea from "@/assets/DAJ_9974.jpg.asset.json";
import famigliaFoto from "@/assets/circo-in-famiglia.jpg.asset.json";
import flexibility from "@/assets/DAJ_0012.jpg.asset.json";

const items = [
  {
    name: "Danza aerea",
    detail: "Tessuti, cerchio, amaca, corda e trapezio",
    img: aerea.url,
    desc: "Il corpo lascia il suolo e trova un nuovo appoggio: tessuti, cerchio, amaca, corda e trapezio. Si lavora su forza, coordinazione e fiducia, imparando salite, chiavi e figure in totale sicurezza. Ogni sequenza diventa poi una piccola coreografia, con la musica a guidare il respiro. Percorsi per bambini, ragazzi e adulti, dal primo approccio ai livelli avanzati.",
  },
  {
    name: "Circo in famiglia",
    detail: "Un'ora per grandi e piccoli, insieme in aria",
    img: famigliaFoto.url,
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

        <ul className="mt-16 md:mt-20 divide-y divide-white/10 border-y border-white/10">
          {items.map((it, i) => (
            <li key={it.name}>
              <Reveal>
                <article className="grid grid-cols-12 gap-6 md:gap-10 py-10 md:py-16 items-center">
                  <div
                    className={`col-span-12 md:col-span-5 ${
                      i % 2 === 1 ? "md:order-2 md:col-start-8" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden bg-secondary">
                      <img
                        src={it.img}
                        alt={it.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={`col-span-12 md:col-span-6 ${
                      i % 2 === 1 ? "md:order-1 md:col-start-1" : "md:col-start-7"
                    }`}
                  >
                    <h3 className="font-display italic font-light text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-paper">
                      {it.name}
                    </h3>
                    <p className="mt-2 text-paper/60 text-sm">{it.detail}</p>
                    <p className="mt-5 text-paper/70 text-[15px] leading-relaxed max-w-xl">
                      {it.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
