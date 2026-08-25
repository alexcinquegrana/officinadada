import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Discipline } from "@/components/site/Discipline";
import { Orari } from "@/components/site/Orari";

const title = "Discipline e orari 2026/27 — Officina Dadà";
const description =
  "Tessuti, cerchio, amaca, corda, trapezio, giocoleria e flexibility: corsi e orari 2026/27 di Officina Dadà per bambini, ragazzi e adulti.";

export const Route = createFileRoute("/discipline")({
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
      <Discipline />
    </SitePage>
  ),
});
