import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { CtaBand } from "./CtaBand";

export function SitePage({ children, hideCta = false }: { children: ReactNode; hideCta?: boolean }) {
  return (
    <>
      <SiteNav />
      <main className="pt-24 md:pt-28">{children}</main>
      {!hideCta && <CtaBand />}
      <SiteFooter />
    </>
  );
}
