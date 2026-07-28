import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Manifesto } from "@/components/site/Manifesto";

const title = "Manifesto — Officina Dadà";
const description =
  "In cosa crediamo: le arti circensi come strumento di stupore, trasformazione e appartenenza.";

export const Route = createFileRoute("/manifesto")({
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
      <Manifesto />
    </SitePage>
  ),
});
