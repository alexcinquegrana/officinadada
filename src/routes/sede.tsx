import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Sede } from "@/components/site/Sede";

const title = "La sede — Officina Dadà";
const description =
  "La palestra di Officina Dadà a Roè Volciano (BS): uno spazio pensato per la danza aerea e le arti circensi.";

export const Route = createFileRoute("/sede")({
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
      <Sede />
    </SitePage>
  ),
});
