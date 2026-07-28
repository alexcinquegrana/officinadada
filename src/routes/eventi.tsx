import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Eventi } from "@/components/site/Eventi";

const title = "Eventi — Officina Dadà";
const description =
  "Spettacoli, saggi e collaborazioni di Officina Dadà: la storia della nostra associazione dal 2018 a oggi.";

export const Route = createFileRoute("/eventi")({
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
      <Eventi />
    </SitePage>
  ),
});
