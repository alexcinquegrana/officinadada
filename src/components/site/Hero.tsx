import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/tessuti0103.jpg.asset.json";
import clip from "@/assets/hero-clip.mp4.asset.json";
import poster from "@/assets/hero-poster.jpg.asset.json";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // Il video parte solo su schermi larghi e senza "riduci animazioni":
  // su mobile resta l'immagine statica, più leggera in rete dati.
  const [useVideo, setUseVideo] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setUseVideo(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [reduce]);


  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        {useVideo ? (
          <motion.video
            src={clip.url}
            poster={poster.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={reduce ? undefined : { opacity }}
          />
        ) : (
          <motion.img
            src={hero.url}
            alt="Due allieve di Officina Dadà in cerchio aereo, luci di scena calde"
            className="h-full w-full object-cover"
            initial={reduce ? false : { opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            style={reduce ? undefined : { opacity }}
          />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(11,11,12,0.7), rgba(11,11,12,0.45) 45%, rgb(11,11,12))" }} />
        <div className="absolute inset-0 bg-radial-vignette" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgb(11,11,12) 100%)" }} />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="eyebrow mb-6 !text-white/70"
        >
          Discipline Aeree · Valsabbia · Dal 2018
        </motion.p>

        <h1 className="font-display text-white leading-[0.92] tracking-[-0.02em]">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(2.8rem,10vw,9rem)] font-light"
          >
            Sospesi tra
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[clamp(2.8rem,10vw,9rem)] italic font-light"
          >
            terra e cielo.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-8 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
        >
          Officina Dadà A.S.D. — una scuola di arti circensi nel cuore della Valsabbia,
          dove il movimento diventa linguaggio ed espressione artistica.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/50"
        >
          <span className="h-px w-10 bg-white/40" />
          Scorri
        </motion.div>
      </div>
    </section>
  );
}
