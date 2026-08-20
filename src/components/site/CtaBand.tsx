import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const WA_URL =
  "https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20prenotare%20la%20prova%20gratuita";

export function CtaBand() {
  return (
    <section className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
        <Reveal>
          <p className="eyebrow">Prova gratuita</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-[clamp(2.2rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-paper">
            Vieni a <span className="italic text-ember">volare</span> con noi.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 mx-auto max-w-xl text-paper/70 text-[15px] md:text-base leading-relaxed">
            Scrivici su WhatsApp per fissare la tua lezione di prova gratuita: ti
            rispondiamo con orari e disponibilità.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-xs uppercase tracking-[0.24em] text-paper hover:bg-ember/90 transition-colors"
            >
              <MessageCircle size={14} />
              <span>Prenota ora la prova gratuita</span>
              <span>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
