import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="pt-40 pb-28 md:pt-52 md:pb-40">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display font-light text-[clamp(2.4rem,6vw,5rem)] leading-[1] tracking-[-0.02em] text-paper">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-paper/50 text-sm">Ultimo aggiornamento: {updated}</p>
          </Reveal>

          <div className="mt-16 space-y-10 text-paper/80 leading-relaxed text-[15px] md:text-base [&_h2]:font-display [&_h2]:italic [&_h2]:text-paper [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:mb-4 [&_h2]:mt-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-ember [&_a]:underline [&_a:hover]:text-paper">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
