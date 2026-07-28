import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Gallery } from "@/components/site/Gallery";

const title = "Galleria — Officina Dadà";
const description =
  "Fotografie di scena e spettacoli di Officina Dadà: tessuti, cerchio e discipline aeree sotto le luci del palco.";

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SitePage>
      <Gallery />
    </SitePage>
  ),
});
