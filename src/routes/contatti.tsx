import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Contatti } from "@/components/site/Contatti";

const title = "Contatti — Officina Dadà";
const description =
  "Scrivici, chiamaci o vieni a trovarci a Roè Volciano (BS): tutti i modi per contattare Officina Dadà A.S.D.";

export const Route = createFileRoute("/contatti")({
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
    <SitePage hideCta>
      <Contatti />
    </SitePage>
  ),
});
