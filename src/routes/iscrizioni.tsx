import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Iscrizioni } from "@/components/site/Iscrizioni";

const title = "Iscrizioni e prova gratuita — Officina Dadà";
const description =
  "Come iscriversi ai corsi di discipline aeree di Officina Dadà a Roè Volciano (BS): prova gratuita, tesseramento, documenti e quote.";

export const Route = createFileRoute("/iscrizioni")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: () => (
    <SitePage>
      <Iscrizioni />
    </SitePage>
  ),
});
