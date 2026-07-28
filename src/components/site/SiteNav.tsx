import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/dada-logo.jpg.asset.json";

const links = [
  { to: "/manifesto", label: "Manifesto" },
  { to: "/discipline", label: "Discipline" },
  { to: "/galleria", label: "Galleria" },
  { to: "/sede", label: "Sede" },
  { to: "/eventi", label: "Eventi" },
  { to: "/team", label: "Team" },
] as const;

const WA_URL =
  "https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20info%20sui%20corsi";
const TEL = "tel:+393273276836";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "backdrop-blur-md bg-ink/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Officina Dadà"
            className="h-9 w-auto object-contain opacity-90 group-hover:opacity-100 transition invert"
          />
          <span className="font-display italic text-lg tracking-tight text-paper">
            Officina Dadà
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              preload="intent"
              activeProps={{ className: "text-paper after:w-full" }}
              className="relative text-sm text-paper/80 hover:text-paper transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contatti"
            preload="intent"
            className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2 text-xs uppercase tracking-[0.2em] text-paper hover:bg-ember/90 transition-colors"
          >
            Contatti
          </Link>
        </nav>

        <button
          aria-label="Apri menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper p-2 -mr-2"
        >
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className={`block w-6 h-px bg-paper transition ${open ? "opacity-0" : ""}`} />
          <span className="block w-6 h-px bg-paper mt-1.5" />
        </button>
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
            <div className="mt-4 pt-4 border-t border-white/10 flex gap-3">
              <a
                href={TEL}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-paper/30 rounded-full px-4 py-3 text-xs uppercase tracking-[0.18em] text-paper"
              >
                <Phone size={14} /> Chiama
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-xs uppercase tracking-[0.18em] text-paper"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
