import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import hero from "@/assets/tessuti0103.jpg.asset.json";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <motion.img
          src={hero.url}
          alt="Due allieve di Officina Dadà in cerchio aereo, luci di scena calde"
          className="h-full w-full object-cover"
          initial={reduce ? false : { opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgb(11,11,12) 100%)" }} />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 pt-32 md:px-10 md:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow mb-6"
        >
          Discipline aeree · Roè Volciano (BS) · Dal 2018
        </motion.p>

        <h1 className="font-display text-paper leading-[0.92] tracking-[-0.02em]">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(2.6rem,9vw,8rem)] font-light"
          >
            Impara a volare.
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(2.6rem,9vw,8rem)] italic font-light"
          >
            In Valsabbia.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8 max-w-xl text-base md:text-lg text-paper/75 leading-relaxed"
        >
          Corsi di tessuti, cerchio, amaca, giocoleria, flexibility e verticali per bambini,
          ragazzi e adulti. La prima lezione è gratuita.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#prova"
            className="group inline-flex items-center gap-3 bg-ember px-7 py-4 text-xs uppercase tracking-[0.24em] text-ink hover:bg-paper transition-all"
          >
            <span>Prenota la prova gratuita</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#sponsor"
            className="group inline-flex items-center gap-3 border border-paper/40 px-7 py-4 text-xs uppercase tracking-[0.24em] text-paper hover:border-paper hover:bg-paper/5 transition-all"
          >
            <span>Diventa sponsor</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-paper/40"
        >
          <span className="h-px w-10 bg-paper/30" />
          Scorri
        </motion.div>
      </div>
    </section>
  );
}
