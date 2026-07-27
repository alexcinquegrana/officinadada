import { useEffect, useState } from "react";
import logo from "@/assets/dada-logo.jpg.asset.json";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#discipline", label: "Discipline" },
  { href: "#sede", label: "Sede" },
  { href: "#team", label: "Team" },
  { href: "#contatti", label: "Contatti" },
];

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
        scrolled
          ? "backdrop-blur-md bg-ink/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="relative inline-block h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/20">
            <img
              src={logo.url}
              alt="Officina Dadà"
              className="h-full w-full object-cover mix-blend-screen opacity-90 group-hover:opacity-100 transition"
            />
          </span>
          <span className="font-display italic text-lg tracking-tight text-paper">
            Officina Dadà
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-paper/80 hover:text-paper transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
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
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display italic text-2xl text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
