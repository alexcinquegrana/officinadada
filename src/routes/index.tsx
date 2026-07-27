import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { ProvaGratuita } from "@/components/site/ProvaGratuita";
import { Corsi } from "@/components/site/Corsi";
import { Manifesto } from "@/components/site/Manifesto";
import { Discipline } from "@/components/site/Discipline";
import { Gallery } from "@/components/site/Gallery";
import { Testimonianze } from "@/components/site/Testimonianze";
import { Eventi } from "@/components/site/Eventi";
import { Sede } from "@/components/site/Sede";
import { Sponsor } from "@/components/site/Sponsor";
import { Team } from "@/components/site/Team";
import { Contatti } from "@/components/site/Contatti";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileCTABar } from "@/components/site/MobileCTABar";
import hero from "@/assets/tessuti0103.jpg.asset.json";

const title =
  "Officina Dadà — Corsi di discipline aeree a Roè Volciano (BS) · Prova gratuita";
const description =
  "Tessuti, cerchio, amaca, giocoleria, flexibility e verticali per bambini, ragazzi e adulti in Valsabbia. Prenota la prima lezione gratuita a Roè Volciano (BS).";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Officina Dadà A.S.D.",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Bellini 7",
    addressLocality: "Roè Volciano",
    addressRegion: "BS",
    postalCode: "25077",
    addressCountry: "IT",
  },
  areaServed: "Valsabbia, Provincia di Brescia, Lago di Garda",
  telephone: "+39 327 327 6836",
  email: "segreteriaofficinadada@gmail.com",
  sport: [
    "Danza aerea",
    "Tessuti aerei",
    "Cerchio aereo",
    "Amaca aerea",
    "Giocoleria",
    "Flexibility",
    "Verticali",
  ],
  openingHours: [
    "Mo 14:00-22:00",
    "Tu 14:00-20:30",
    "We 14:00-18:30",
    "Th 14:00-22:00",
    "Fr 14:00-20:30",
  ],
};

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteNav />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustStrip />
        <ProvaGratuita />
        <Corsi />
        <Manifesto />
        <Discipline />
        <Gallery />
        <Testimonianze />
        <Eventi />
        <Sede />
        <Sponsor />
        <Team />
        <Contatti />
      </main>
      <SiteFooter />
      <MobileCTABar />
    </>
  );
}
