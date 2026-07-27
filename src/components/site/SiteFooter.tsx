import { Link } from "@tanstack/react-router";
import logo from "@/assets/dada-logo.jpg.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 flex items-start gap-4">
            <span className="relative inline-block h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
              <img
                src={logo.url}
                alt="Officina Dadà"
                className="h-full w-full object-cover mix-blend-screen opacity-90"
              />
            </span>
            <div>
              <p className="font-display italic text-xl text-paper">Officina Dadà</p>
              <p className="text-xs text-paper/50 mt-1">
                A.S.D. — Discipline aeree e arti circensi
              </p>
              <p className="text-xs text-paper/50 mt-1">Roè Volciano (BS) · Valsabbia</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="eyebrow">Naviga</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/#prova" className="text-ember hover:text-paper transition-colors">Prova gratuita</a></li>
              <li><a href="/#corsi" className="text-paper/70 hover:text-paper transition-colors">Corsi</a></li>
              <li><a href="/#discipline" className="text-paper/70 hover:text-paper transition-colors">Discipline</a></li>
              <li><a href="/#galleria" className="text-paper/70 hover:text-paper transition-colors">Galleria</a></li>
              <li><a href="/#sede" className="text-paper/70 hover:text-paper transition-colors">La sede</a></li>
              <li><a href="/#sponsor" className="text-paper/70 hover:text-paper transition-colors">Sponsor</a></li>
              <li><a href="/#contatti" className="text-paper/70 hover:text-paper transition-colors">Contatti</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="eyebrow">Informazioni legali</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-paper/70 hover:text-paper transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie"
                  className="text-paper/70 hover:text-paper transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:segreteriaofficinadada@gmail.com"
                  className="text-paper/70 hover:text-paper transition-colors break-words"
                >
                  segreteriaofficinadada@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-12 gap-6 items-center">
          <p className="col-span-12 md:col-span-6 text-paper/40 text-xs">
            © {new Date().getFullYear()} Officina Dadà A.S.D. — Tutti i diritti riservati.
          </p>
          <p className="col-span-12 md:col-span-6 md:text-right text-paper/40 text-xs">
            Fotografie · <span className="text-paper/70">David Pasotti</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
