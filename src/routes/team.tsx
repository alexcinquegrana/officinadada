import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Team } from "@/components/site/Team";

const title = "Team — Officina Dadà";
const description =
  "Le insegnanti, le figure artistiche e il consiglio direttivo di Officina Dadà A.S.D.";

export const Route = createFileRoute("/team")({
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
      <Team />
    </SitePage>
  ),
});
