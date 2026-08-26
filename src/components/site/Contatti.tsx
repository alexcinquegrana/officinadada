import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

const EMAIL = "segreteriaofficinadada@gmail.com";

export function Contatti() {
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
              <p className="mt-3 text-sm text-paper/50">
                Segreteria ·{" "}
                <a
                  href="tel:+393889766785"
                  className="text-paper hover:text-ember transition-colors"
                >
                  +39 388 976 6785
                </a>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="eyebrow">WhatsApp</p>
              <a
                href="https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20prenotare%20la%20prova%20gratuita"
                target="_blank"
                rel="noopener"
                className="mt-3 block font-display italic text-xl md:text-2xl text-paper hover:text-ember transition-colors"
              >
                Prenota ora la prova gratuita
              </a>
              <p className="mt-2 text-paper/50 text-sm">Elena Trombini · +39 327 327 6836</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="eyebrow">Vieni a trovarci</p>
              <p className="mt-3 font-display italic text-xl md:text-2xl text-paper">
                Via Arnoldo Bellini 7
              </p>
              <p className="mt-2 text-paper/50 text-sm">25077 Roè Volciano (BS) · Valsabbia</p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="eyebrow">Dati per la fatturazione</p>
              <div className="mt-3 text-sm text-paper/60 leading-relaxed">
                <p className="text-paper/80">Officina Dadà A.S.D.</p>
                <p>Sede legale: Via Malpaga 1, 25070 Casto (BS)</p>
                <p>C.F. 96040640177 · P.IVA 04721180984</p>
                <p>Codice SDI: KRRH6B9</p>
                <p className="break-all">
                  PEC:{" "}
                  <a
                    href="mailto:elenatrombinidada@postecert.it"
                    className="hover:text-ember transition-colors"
                  >
                    elenatrombinidada@postecert.it
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="col-span-12 md:col-span-7">
            <div className="flex flex-col items-start gap-10 md:pt-10">
              <p className="font-display font-light text-[clamp(1.6rem,3.2vw,2.4rem)] leading-snug text-paper/80 max-w-xl">
                Pronta a spiccare il volo? Prenota subito la tua prova gratuita su WhatsApp: un solo
                messaggio e siamo in aria insieme.
              </p>
              <a
                href="https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20prenotare%20la%20prova%20gratuita"
                target="_blank"
                rel="noopener"
                className="group relative inline-flex items-center gap-4 overflow-hidden bg-ember px-10 py-6 text-sm uppercase tracking-[0.28em] font-semibold text-ink shadow-[0_18px_45px_-15px_rgba(0,0,0,0.65)] transition-all hover:scale-[1.03] hover:shadow-[0_26px_60px_-18px_rgba(0,0,0,0.8)] focus:outline-none focus-visible:ring-4 focus-visible:ring-ember/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-paper/20 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Prenota ora la prova gratuita</span>
                <span className="relative inline-block text-lg transition-transform group-hover:translate-x-1.5">→</span>
              </a>
              <p className="text-paper/45 text-xs max-w-md leading-relaxed">
                Risposta rapida negli orari di segreteria. Trattamento dei dati secondo la nostra{" "}
                <a href="/privacy" className="underline hover:text-paper">Privacy Policy</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
