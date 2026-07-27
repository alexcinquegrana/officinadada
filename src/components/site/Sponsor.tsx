import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import img from "@/assets/cpm03396.jpg.asset.json";

const EMAIL = "segreteriaofficinadada@gmail.com";

const pacchetti = [
  {
    nome: "Ala",
    prezzo: "Bronze",
    benefits: [
      "Logo sulle locandine dei saggi di stagione",
      "Menzione nei ringraziamenti a fine spettacolo",
      "Post di ringraziamento sui nostri canali social",
    ],
    accent: false,
  },
  {
    nome: "Volo",
    prezzo: "Silver",
    benefits: [
      "Tutto quello di Ala",
      "Logo su costumi di scena o materiale tecnico",
      "Banner in sede + stories dedicate",
      "Menzione durante gli spettacoli",
    ],
    accent: true,
  },
  {
    nome: "Costellazione",
    prezzo: "Gold",
    benefits: [
      "Tutto quello di Volo",
      "Naming di uno spettacolo o di un progetto",
      "Presenza in tutti gli eventi della stagione",
      "Contenuti video dedicati (backstage + spettacolo)",
    ],
    accent: false,
  },
];

export function Sponsor() {
  const [azienda, setAzienda] = useState("");
  const [referente, setReferente] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("Da definire insieme");
  const [messaggio, setMessaggio] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!azienda.trim() || !referente.trim() || !email.trim()) {
      toast.error("Azienda, referente ed email sono richiesti.");
      return;
    }
    const subject = encodeURIComponent(`[SPONSOR] ${azienda}`);
    const body = encodeURIComponent(
      `Nuova richiesta sponsorizzazione dal sito.\n\n` +
        `Azienda: ${azienda}\nReferente: ${referente}\nEmail: ${email}\n` +
        `Budget indicativo: ${budget}\n\nMessaggio:\n${messaggio}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Grazie! Si è aperta la tua app di posta.");
  };

  return (
    <section id="sponsor" className="relative border-t border-white/10 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Hero della sezione */}
        <div className="grid grid-cols-12 gap-8 md:gap-14">
          <Reveal className="col-span-12 md:col-span-7">
            <p className="eyebrow">Sponsor & partner</p>
            <h2 className="mt-6 font-display font-light text-[clamp(2.4rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] text-paper">
              Il tuo brand
              <br />
              <span className="italic text-ember">sotto i riflettori.</span>
            </h2>
            <p className="mt-6 max-w-xl text-paper/70 text-[15px] md:text-base leading-relaxed">
              Sostenere Officina Dadà significa entrare nella vita di una comunità che
              lavora sul palco, in sala e in strada. Portiamo il tuo brand davanti a
              famiglie, appassionati di circo e pubblico dei festival del territorio —
              con un'identità visiva riconoscibile e curata.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={img.url}
                alt="Cinque aerealiste in luce viola durante uno spettacolo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        {/* Cosa offriamo */}
        <div className="mt-20 grid grid-cols-12 gap-6 md:gap-10">
          {[
            { k: "Pubblico dal vivo", v: "Saggi di stagione, spettacoli e collaborazioni con festival del territorio (Strabilio, Circ'onda)." },
            { k: "Community", v: "Allieve e allievi di ogni età, famiglie della Valsabbia e del Lago di Garda." },
            { k: "Visibilità continua", v: "Sede, costumi, locandine, canali social e materiale video/foto professionale." },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 0.05} className="col-span-12 md:col-span-4">
              <div className="border-t border-white/15 pt-6">
                <p className="eyebrow">{b.k}</p>
                <p className="mt-3 text-paper/70 text-[15px] leading-relaxed">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pacchetti */}
        <div className="mt-24 grid grid-cols-12 gap-6 md:gap-8">
          {pacchetti.map((p, i) => (
            <Reveal
              key={p.nome}
              delay={i * 0.08}
              className="col-span-12 md:col-span-4"
            >
              <div
                className={`h-full border p-8 md:p-10 transition-colors ${
                  p.accent
                    ? "border-ember bg-ember/[0.06]"
                    : "border-white/15 bg-white/[0.02]"
                }`}
              >
                <p className={`eyebrow ${p.accent ? "text-ember" : ""}`}>{p.prezzo}</p>
                <h3 className="mt-3 font-display italic font-light text-3xl md:text-4xl text-paper">
                  {p.nome}
                </h3>
                <ul className="mt-8 space-y-3 text-[15px] text-paper/80">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className={p.accent ? "text-ember" : "text-paper/40"} aria-hidden>
                        ✦
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-xs text-paper/40">
                  Pacchetto personalizzabile — parliamone.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form */}
        <div className="mt-24 grid grid-cols-12 gap-10 md:gap-14">
          <Reveal className="col-span-12 md:col-span-5">
            <h3 className="font-display font-light text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] text-paper">
              Costruiamo la <span className="italic">collaborazione</span> insieme.
            </h3>
            <p className="mt-6 text-paper/70 text-[15px] leading-relaxed max-w-md">
              Raccontaci la tua azienda e cosa cerchi. Ti risponderemo con una
              proposta su misura entro pochi giorni lavorativi.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6 md:col-start-7">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Azienda" value={azienda} onChange={setAzienda} required maxLength={120} />
                <Field label="Referente" value={referente} onChange={setReferente} required maxLength={100} autoComplete="name" />
              </div>
              <Field label="Email" type="email" value={email} onChange={setEmail} required maxLength={255} autoComplete="email" />
              <div>
                <label className="eyebrow block">Budget indicativo</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-3 w-full border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper focus:border-ember focus:outline-none transition-colors"
                >
                  <option className="bg-ink">Da definire insieme</option>
                  <option className="bg-ink">Fino a 500 €</option>
                  <option className="bg-ink">500 – 1.500 €</option>
                  <option className="bg-ink">1.500 – 5.000 €</option>
                  <option className="bg-ink">Oltre 5.000 €</option>
                </select>
              </div>
              <div>
                <label className="eyebrow block">Messaggio</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                  className="mt-3 w-full resize-none border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper placeholder:text-paper/30 focus:border-ember focus:outline-none transition-colors"
                  placeholder="Cosa cerchiamo, obiettivi, tempistiche…"
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-3 bg-ember px-8 py-4 text-xs uppercase tracking-[0.24em] text-ink hover:bg-paper transition-all"
              >
                <span>Invia la richiesta</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="pt-2 text-xs text-paper/40">
                Inviando accetti la nostra{" "}
                <a href="/privacy" className="underline hover:text-paper">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="eyebrow block">
        {label}
        {required && <span className="ml-1 text-ember">*</span>}
      </label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper placeholder:text-paper/30 focus:border-ember focus:outline-none transition-colors"
      />
    </div>
  );
}
