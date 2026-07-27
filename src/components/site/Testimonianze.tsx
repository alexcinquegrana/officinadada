import { Reveal } from "./Reveal";
import img from "@/assets/cpm03407.jpg.asset.json";

const quotes = [
  {
    q: "Mia figlia ha trovato qui una seconda famiglia. Ogni settimana entra timida e esce con gli occhi che brillano.",
    who: "Sara M.",
    role: "Genitore · Vestone",
  },
  {
    q: "In sala non conta la performance, conta la persona. È la prima palestra in cui mi sento a casa.",
    who: "Giulia T.",
    role: "Allieva adulti",
  },
  {
    q: "Insegnanti preparate, ambiente pulito, attenzione alla sicurezza. Consigliatissima.",
    who: "Marco P.",
    role: "Genitore · Salò",
  },
];

export function Testimonianze() {
  return (
    <section
      id="testimonianze"
      className="relative border-t border-white/10 py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="eyebrow">Parole di chi vola con noi</p>
            <h2 className="mt-6 font-display font-light text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02] tracking-[-0.02em] text-paper">
              Non solo un <span className="italic">corso</span>.
              <br />
              Una comunità.
            </h2>
            <div className="mt-10 aspect-[3/4] w-full overflow-hidden">
              <img
                src={img.url}
                alt="Allieva sospesa sui tessuti aerei"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col justify-center gap-10 md:gap-14">
            {quotes.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.08}>
                <figure className="border-l-2 border-ember/70 pl-6 md:pl-8">
                  <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-paper">
                    “{t.q}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-paper/60">
                    <span className="text-paper">{t.who}</span> · {t.role}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <p className="text-[11px] uppercase tracking-[0.18em] text-paper/30">
              Testimonianze rappresentative — le versioni definitive verranno raccolte
              tra allievi e genitori.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
