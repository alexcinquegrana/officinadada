import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/manifesto", label: "Manifesto" },
  { to: "/discipline", label: "Discipline" },
  { to: "/iscrizioni", label: "Iscrizioni" },
  { to: "/galleria", label: "Galleria" },
  { to: "/sede", label: "Sede" },
  { to: "/eventi", label: "Eventi" },
  { to: "/team", label: "Team" },
] as const;

const WA_URL =
  "https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20prenotare%20la%20prova%20gratuita";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="site-nav fixed inset-x-0 top-0 z-50 transition-all duration-500"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 md:px-10">
        <Link to="/" className="flex items-center gap-2 md:gap-3 group" onClick={() => setOpen(false)}>
          <Logo
            variant="mark"
            alt="Officina Dadà"
            className="h-11 md:h-14 w-auto opacity-95 group-hover:opacity-100 transition"
          />
          <span className="leading-none">
            <span className="block font-display italic text-lg md:text-2xl text-foreground">
              Officina Dadà A.S.D.
            </span>
            <span className="mt-1 hidden sm:block text-[9px] md:text-[10px] uppercase tracking-[0.28em] text-foreground/55">
              discipline artistiche
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              preload="intent"
              activeProps={{ className: "text-paper after:w-full" }}
              className="relative text-[14px] text-paper/80 hover:text-paper transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            preload="intent"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-paper hover:bg-ember/90 transition-colors"
          >
            Contatti
          </Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground p-2 -mr-2"
          >
            <span className="block w-6 h-px bg-current mb-1.5" />
            <span className={`block w-6 h-px bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className="block w-6 h-px bg-current mt-1.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6 gap-4">
            <Link
              to="/contatti"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-full bg-ember px-5 py-3 text-xs uppercase tracking-[0.2em] text-paper"
            >
              <span>Contatti</span>
              <span>→</span>
            </Link>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display italic text-2xl text-paper"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs uppercase tracking-[0.18em] text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={14} /> Prenota ora la prova gratuita
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
