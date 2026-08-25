import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import regolamento from "@/assets/regolamento-2026.pdf.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5 flex items-start gap-4">
            <Logo className="h-16 w-auto shrink-0 opacity-90" />
            <div>
              <p className="font-display italic text-xl text-paper">Officina Dadà</p>
              <p className="text-xs text-paper/50 mt-1">
                A.S.D. — Discipline aeree e arti circensi
              </p>
              <p className="text-xs text-paper/50 mt-1">Roè Volciano (BS) · Valsabbia</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">Naviga</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/manifesto" className="text-paper/70 hover:text-paper transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link to="/discipline" className="text-paper/70 hover:text-paper transition-colors">
                  Discipline
                </Link>
              </li>
              <li>
                <Link to="/iscrizioni" className="text-paper/70 hover:text-paper transition-colors">
                  Iscrizioni
                </Link>
              </li>
              <li>
                <Link to="/galleria" className="text-paper/70 hover:text-paper transition-colors">
                  Galleria
                </Link>
              </li>
              <li>
                <Link to="/sede" className="text-paper/70 hover:text-paper transition-colors">
                  La sede
                </Link>
              </li>
              <li>
                <Link to="/eventi" className="text-paper/70 hover:text-paper transition-colors">
                  Eventi
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-paper/70 hover:text-paper transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-paper/70 hover:text-paper transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">

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
                  href={regolamento.url}
                  download="regolamento-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper/70 hover:text-paper transition-colors"
                >
                  Regolamento 2026 (PDF)
                </a>
              </li>
              <li>
                <a
                  href="mailto:segreteriaofficinadada@gmail.com"
                  className="text-paper/70 hover:text-paper transition-colors break-all"
                >
                  segreteriaofficinadada@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-12 gap-6 items-center">
          <p className="col-span-12 md:col-span-6 text-paper/60 text-xs">
            © {new Date().getFullYear()} Officina Dadà A.S.D. — Tutti i diritti riservati.
          </p>
          <p className="col-span-12 md:col-span-6 md:text-right text-paper/60 text-xs">
            Fotografie · <span className="text-paper">David Pasotti</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
