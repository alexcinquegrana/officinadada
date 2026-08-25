import { createFileRoute, Link } from "@tanstack/react-router";
import { SitePage } from "@/components/site/SitePage";
import { Discipline } from "@/components/site/Discipline";

const title = "Discipline aeree e arti circensi — Officina Dadà";
const description =
  "Danza aerea, circo in famiglia e flexibility: le discipline di Officina Dadà a Roè Volciano (BS), per bambini, ragazzi e adulti.";

export const Route = createFileRoute("/discipline")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://officinadadaasd.it/discipline" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://officinadadaasd.it/discipline" }],
  }),
  component: () => (
    <SitePage>
      <Discipline />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-24 -mt-10">
        <Link
          to="/corsi"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-paper hover:bg-ember/90 transition-colors"
        >
          Vedi orari e corsi 2026/27 →
        </Link>
      </div>
    </SitePage>
  ),
});
