import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Discipline } from "@/components/site/Discipline";
import { CtaBand } from "@/components/site/CtaBand";
import { Reveal } from "@/components/site/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/tessuti0103.jpg.asset.json";
import saggio from "@/assets/cpm00029.jpg.asset.json";

const title = "Officina Dadà — Discipline aeree e arti circensi in Valsabbia";
const description =
  "Scuola di danza aerea e arti circensi a Roè Volciano (BS). Tessuti, cerchio, amaca, corda, trapezio, giocoleria, flexibility e verticali per bambini e adulti.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Manifesto />
        <Discipline />
        <CtaBand />
        <section className="relative border-t border-white/10">
          <Reveal>
            <figure className="relative">
              <img
                src={saggio.url}
                alt="Il saggio finale di Officina Dadà: allievi e insegnanti insieme sul palco"
                className="h-[70vh] min-h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-6 pb-10 md:px-10 md:pb-14">
                <p className="eyebrow">Saggio finale</p>
                <p className="mt-3 font-display italic text-2xl md:text-4xl text-paper max-w-2xl">
                  Insieme sul palco, alla fine di un altro anno di volo.
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
