import logo from "@/assets/dada-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-center">
        <div className="col-span-12 md:col-span-4 flex items-center gap-3">
          <span className="relative inline-block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/20">
            <img src={logo.url} alt="Officina Dadà" className="h-full w-full object-cover mix-blend-screen opacity-90" />
          </span>
          <div>
            <p className="font-display italic text-lg text-paper">Officina Dadà</p>
            <p className="text-xs text-paper/50">A.S.D. — Discipline aeree e arti circensi</p>
          </div>
        </div>

        <p className="col-span-12 md:col-span-4 md:text-center text-paper/50 text-xs">
          © {new Date().getFullYear()} Officina Dadà A.S.D. · Roè Volciano (BS)
        </p>

        <p className="col-span-12 md:col-span-4 md:text-right text-paper/50 text-xs">
          Fotografie · <span className="text-paper/80">David Pasotti</span>
        </p>
      </div>
    </footer>
  );
}
