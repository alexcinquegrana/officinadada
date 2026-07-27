import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Discipline } from "@/components/site/Discipline";
import { Gallery } from "@/components/site/Gallery";
import { Sede } from "@/components/site/Sede";
import { Eventi } from "@/components/site/Eventi";
import { Team } from "@/components/site/Team";
import { Contatti } from "@/components/site/Contatti";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero from "@/assets/tessuti0103.jpg.asset.json";

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
        <Gallery />
        <Sede />
        <Eventi />
        <Team />
        <Contatti />
      </main>
      <SiteFooter />
    </>
  );
}
