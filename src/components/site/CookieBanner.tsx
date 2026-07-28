import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "dada-cookie-consent";
type Consent = "essential" | "all";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved !== "essential" && saved !== "all") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (v: Consent) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed inset-x-3 bottom-3 z-[70] md:inset-x-auto md:left-6 md:right-6 md:bottom-6"
    >
      <div className="mx-auto max-w-[900px] rounded-2xl border border-white/15 bg-ink/95 text-paper backdrop-blur-md shadow-2xl">
        <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1 text-sm leading-relaxed text-paper/85">
            <p className="font-display italic text-base text-paper mb-1">Cookie & privacy</p>
            <p>
              Usiamo cookie tecnici essenziali per far funzionare il sito e — solo con il tuo
              consenso — cookie di terze parti (Google Maps, Google Fonts) per mostrarti la mappa
              della sede e i caratteri tipografici. Nessuna profilazione, nessuna pubblicità.
              Leggi la{" "}
              <Link to="/cookie" className="underline underline-offset-2 hover:text-ember">
                Cookie Policy
              </Link>{" "}
              e la{" "}
              <Link to="/privacy" className="underline underline-offset-2 hover:text-ember">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 md:shrink-0">
            <button
              onClick={() => save("essential")}
              className="rounded-full border border-white/25 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-paper/90 hover:border-white/50 hover:text-paper transition-colors"
            >
              Solo essenziali
            </button>
            <button
              onClick={() => save("all")}
              className="rounded-full bg-ember px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-paper hover:bg-ember/90 transition-colors"
            >
              Accetta tutti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function hasCookieConsent(kind: Consent = "all"): boolean {
  try {
    const v = localStorage.getItem(KEY);
    if (kind === "essential") return v === "essential" || v === "all";
    return v === "all";
  } catch {
    return false;
  }
}
