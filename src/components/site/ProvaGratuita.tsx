import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import img from "@/assets/cpm02456.jpg.asset.json";

const EMAIL = "segreteriaofficinadada@gmail.com";

const discipline = [
  "Danza aerea (tessuti, cerchio, amaca, corda, trapezio)",
  "Giocoleria",
  "Flexibility",
  "Verticali",
  "Circo in famiglia",
  "Non so ancora, aiutatemi a scegliere",
];

export function ProvaGratuita() {
  const [nome, setNome] = useState("");
  const [eta, setEta] = useState("");
  const [tel, setTel] = useState("");
  const [disc, setDisc] = useState(discipline[0]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !tel.trim()) {
      toast.error("Nome e telefono sono richiesti.");
      return;
    }
    if (nome.length > 100 || tel.length > 40) {
      toast.error("Alcuni campi superano la lunghezza massima.");
      return;
    }
    const subject = encodeURIComponent(`[PROVA GRATUITA] ${nome}`);
    const body = encodeURIComponent(
      `Ciao Officina Dadà,\n\nvorrei prenotare una lezione di prova gratuita.\n\n` +
        `Nome allievo/a: ${nome}\nEtà: ${eta || "—"}\nTelefono: ${tel}\n` +
        `Disciplina d'interesse: ${disc}\n\n— Inviato dal sito`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Si è aperta la tua app di posta. A presto in sala!");
  };

  return (
    <section
      id="prova"
      className="relative border-t border-white/10 py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-10 px-6 md:gap-14 md:px-10">
        <Reveal className="col-span-12 md:col-span-5">
          <p className="eyebrow">Prova gratuita</p>
          <h2 className="mt-6 font-display font-light text-[clamp(2.2rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-paper">
            La prima lezione
            <br />
            <span className="italic text-ember">è nostra.</span>
          </h2>
          <p className="mt-6 max-w-md text-paper/70 text-[15px] md:text-base leading-relaxed">
            Vieni a provare, senza impegno. Bastano nome, telefono e la disciplina che ti
            incuriosisce. Ti richiamiamo entro 48 ore per fissare data e orario in sala.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-paper/70">
            <li className="flex gap-3">
              <span className="text-ember" aria-hidden>
                →
              </span>
              Adatta a bambini, ragazzi e adulti.
            </li>
            <li className="flex gap-3">
              <span className="text-ember" aria-hidden>
                →
              </span>
              Nessuna esperienza richiesta.
            </li>
            <li className="flex gap-3">
              <span className="text-ember" aria-hidden>
                →
              </span>
              Abbigliamento comodo, piedi scalzi.
            </li>
          </ul>

          <div className="mt-10 hidden md:block aspect-[4/5] w-full overflow-hidden">
            <img
              src={img.url}
              alt="Trio di allieve in cerchio aereo, costumi bianchi"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="col-span-12 md:col-span-6 md:col-start-7"
        >
          <form
            onSubmit={onSubmit}
            className="border border-white/15 bg-white/[0.02] p-6 md:p-10"
          >
            <p className="eyebrow">Prenota la tua prova</p>

            <div className="mt-8 space-y-6">
              <Field
                label="Nome dell'allievo/a"
                value={nome}
                onChange={setNome}
                required
                maxLength={100}
                autoComplete="name"
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Età"
                  value={eta}
                  onChange={setEta}
                  maxLength={4}
                  placeholder="es. 9"
                  inputMode="numeric"
                />
                <Field
                  label="Telefono"
                  type="tel"
                  value={tel}
                  onChange={setTel}
                  required
                  maxLength={40}
                  autoComplete="tel"
                />
              </div>

              <div>
                <label className="eyebrow block">Disciplina d'interesse</label>
                <select
                  value={disc}
                  onChange={(e) => setDisc(e.target.value)}
                  className="mt-3 w-full border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper focus:border-ember focus:outline-none transition-colors"
                >
                  {discipline.map((d) => (
                    <option key={d} value={d} className="bg-ink text-paper">
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-ember px-8 py-4 text-xs uppercase tracking-[0.24em] text-ink hover:bg-paper transition-all"
              >
                <span>Prenota la prova</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
              <a
                href="https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20info%20per%20una%20prova%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper/70 hover:text-paper transition-colors"
              >
                oppure scrivici su WhatsApp →
              </a>
            </div>

            <p className="mt-8 text-xs text-paper/40">
              Inviando accetti la nostra{" "}
              <a href="/privacy" className="underline hover:text-paper">
                Privacy Policy
              </a>
              . Nessuno spam, solo la risposta della segreteria.
            </p>
          </form>
        </Reveal>
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
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  placeholder?: string;
  inputMode?: "text" | "numeric" | "tel" | "email";
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
        placeholder={placeholder}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-white/20 bg-transparent pb-2 font-display italic text-lg text-paper placeholder:text-paper/30 focus:border-ember focus:outline-none transition-colors"
      />
    </div>
  );
}
