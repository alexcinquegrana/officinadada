import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";

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
            Scrivici per fissare una lezione di prova o chiamaci per informazioni sui corsi.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-xs uppercase tracking-[0.24em] text-paper hover:bg-ember/90 transition-colors"
            >
              <span>Prenota la tua prova gratuita ora</span>
              <span>→</span>
            </Link>
            <a
              href="tel:+393273276836"
              className="inline-flex items-center gap-3 rounded-full border border-paper/40 px-8 py-4 text-xs uppercase tracking-[0.24em] text-paper hover:bg-paper/5 transition-colors"
            >
              <Phone size={14} />
              <span>Chiama ora</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
