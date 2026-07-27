import { Reveal } from "./Reveal";

const stats = [
  { k: "Dal", v: "2018" },
  { k: "Associazione", v: "A.S.D." },
  { k: "Sedi", v: "Roè Volciano · Vestone" },
  { k: "Palco", v: "Strabilio Festival" },
  { k: "Progetto", v: "Born to Fly" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Riconoscimenti e numeri"
      className="relative border-y border-white/10 bg-ink py-8 md:py-10"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-5 md:gap-10">
            {stats.map((s) => (
              <li key={s.k} className="min-w-0">
                <p className="eyebrow truncate">{s.k}</p>
                <p className="mt-2 font-display italic text-lg md:text-xl text-paper truncate">
                  {s.v}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
