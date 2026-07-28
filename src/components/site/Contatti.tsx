import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

const EMAIL = "segreteriaofficinadada@gmail.com";

export function Contatti() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Richiesta informazioni — ${nome || "Nuovo contatto"}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nTelefono: ${tel}\n\n${messaggio}\n\n— Inviato dal sito Officina Dadà`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contatti" className="relative border-t border-white/10 py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <Logo className="h-14 w-auto opacity-90" />
            <p className="eyebrow">Contatti</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 font-display font-light text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] tracking-[-0.02em] text-paper">
            Vieni a <span className="italic text-ember">volare</span>
            <br />
            con noi.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-12 gap-y-14 md:gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-5 space-y-10">
            <Reveal delay={0.1}>
              <p className="eyebrow">Scrivici</p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 block font-display italic text-xl md:text-2xl text-paper hover:text-ember transition-colors break-words"
              >
                {EMAIL}
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="eyebrow">Chiama</p>
              <a
                href="tel:+393273276836"
                className="mt-3 block font-display italic text-xl md:text-2xl text-paper hover:text-ember transition-colors"
              >
                +39 327 327 6836
              </a>
              <p className="mt-2 text-paper/50 text-sm">Elena Trombini</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="eyebrow">Vieni a trovarci</p>
              <p className="mt-3 font-display italic text-xl md:text-2xl text-paper">
                Roè Volciano (BS)
              </p>
              <p className="mt-2 text-paper/50 text-sm">Valsabbia · Provincia di Brescia</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="col-span-12 md:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8">
              <p className="eyebrow">Scrivici un messaggio</p>

              <div className="grid gap-8 md:grid-cols-2">
                <Field
                  label="Nome e cognome"
                  value={nome}
                  onChange={setNome}
                  required
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  required
                  autoComplete="email"
                />
              </div>
              <Field
                label="Telefono (facoltativo)"
                type="tel"
                value={tel}
                onChange={setTel}
                autoComplete="tel"
              />
              <div>
                <label className="eyebrow block">Messaggio</label>
                <textarea
                  required
                  rows={5}
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                  className="mt-3 w-full resize-none border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper placeholder:text-paper/30 focus:border-ember focus:outline-none transition-colors"
                  placeholder="Vorrei saperne di più su…"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-paper/40 px-8 py-4 text-xs uppercase tracking-[0.24em] text-paper hover:bg-ember hover:border-ember transition-all"
                >
                  <span>Invia messaggio</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
                {sent && (
                  <p className="text-paper/60 text-sm">
                    Si è aperta la tua app di posta. Se non succede nulla, scrivici direttamente a{" "}
                    <a href={`mailto:${EMAIL}`} className="text-ember underline">
                      {EMAIL}
                    </a>
                    .
                  </p>
                )}
              </div>

              <p className="text-paper/40 text-xs pt-2">
                Inviando accetti la nostra{" "}
                <a href="/privacy" className="underline hover:text-paper">
                  Privacy Policy
                </a>
                . I dati saranno usati solo per rispondere alla tua richiesta.
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper placeholder:text-paper/30 focus:border-ember focus:outline-none transition-colors"
      />
    </div>
  );
}
