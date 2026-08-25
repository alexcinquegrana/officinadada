import { createFileRoute, Link } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Orari } from "@/components/site/Orari";

const title = "Corsi e orari 2026/27 — Officina Dadà";
const description =
  "Tutti i corsi di Officina Dadà a Roè Volciano (BS): tessuti, cerchio, flexibility, level up e creazione. Orari e fasce d'età dell'anno 2026/27.";

export const Route = createFileRoute("/corsi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://officinadadaasd.it/corsi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://officinadadaasd.it/corsi" }],
  }),
  component: () => (
    <SitePage>
      <Orari />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24">
        <Link
          to="/discipline"
          className="inline-flex items-center gap-2 text-sm text-paper/70 hover:text-ember transition-colors"
        >
          ← Scopri le discipline
        </Link>
      </div>
    </SitePage>
  ),
});
