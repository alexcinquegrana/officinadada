import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

// Officina Dadà — Via Arnoldo Bellini 7, Roè Volciano (BS)
const LAT = 45.6235077;
const LNG = 10.4928399;
const ADDRESS = "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=Officina+Dad%C3%A0+Via+Arnoldo+Bellini+7+Ro%C3%A8+Volciano`;

// Dark map style, coerente con il palcoscenico ink
const DARK_STYLE: unknown[] = [
  { elementType: "geometry", stylers: [{ color: "#141416" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0B0B0C" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8A8681" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#2a2a2d" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#22222a" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0d0d10" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#6b6a68" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f2b2a" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#3f7f7c" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1a1a1d" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
];

const BROWSER_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY as
  | string
  | undefined;
const CHANNEL = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID as
  | string
  | undefined;

const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.012}%2C${
  LAT - 0.007
}%2C${LNG + 0.012}%2C${LAT + 0.007}&layer=mapnik&marker=${LAT}%2C${LNG}`;

declare global {
  interface Window {
    initDadaMap?: () => void;
    gm_authFailure?: () => void;
    google?: any;
  }
}

export function MapSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!BROWSER_KEY) {
      setError(true);
      return;
    }

    // Google fires this when the key is rejected (referer/billing): fall back.
    window.gm_authFailure = () => setError(true);
    const timeout = window.setTimeout(() => {
      if (!window.google?.maps) setError(true);
    }, 6000);


    const render = () => {
      const g: any = window.google;
      if (!ref.current || !g?.maps) return;
      const map = new g.maps.Map(ref.current, {
        center: { lat: LAT, lng: LNG },
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        styles: DARK_STYLE,
        backgroundColor: "#0B0B0C",
      });
      new g.maps.Marker({
        position: { lat: LAT, lng: LNG },
        map,
        title: "Officina Dadà",
        icon: {
          path: g.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#5FB3D6",
          fillOpacity: 1,
          strokeColor: "#F2EFE9",
          strokeWeight: 2,
        },
      });
      setReady(true);
    };

    if (window.google?.maps) {
      render();
      return () => window.clearTimeout(timeout);
    }

    // Global callback for the async loader
    window.initDadaMap = render;

    const existing = document.querySelector<HTMLScriptElement>("script[data-dada-maps]");
    if (existing) {
      existing.addEventListener("load", render, { once: true });
      return () => window.clearTimeout(timeout);
    }

    const script = document.createElement("script");
    const params = new URLSearchParams({
      key: BROWSER_KEY,
      loading: "async",
      callback: "initDadaMap",
      libraries: "marker",
    });
    if (CHANNEL) params.set("channel", CHANNEL);
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.defer = true;
    script.dataset.dadaMaps = "true";
    script.onerror = () => setError(true);
    document.head.appendChild(script);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Dove siamo</p>
              <h2 className="mt-3 font-display font-light text-[clamp(2rem,5vw,3.5rem)] leading-[1] tracking-[-0.02em] text-foreground">
                <span className="italic">Sotto</span> il tendone,
                <br className="hidden md:block" /> in Valsabbia.
              </h2>
              <p className="mt-4 text-sm text-foreground/70 max-w-md">
                Officina Dadà A.S.D. — {ADDRESS}. Vieni a trovarci, o scrivi in segreteria per
                fissare una prova.
              </p>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-foreground/90 hover:border-white/40 transition-colors"
            >
              Apri in Google Maps →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 relative overflow-hidden rounded-2xl border border-white/10 bg-ink">
            <div ref={ref} className="h-[420px] md:h-[520px] w-full" />
            {!ready && !error && (
              <div className="absolute inset-0 flex items-center justify-center text-paper/40 text-xs uppercase tracking-[0.2em]">
                Caricamento mappa…
              </div>
            )}
            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-ink">
                <div className="text-center px-6">
                  <p className="eyebrow">Sede</p>
                  <p className="mt-3 font-display italic text-2xl text-paper">{ADDRESS}</p>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-paper"
                  >
                    Apri in Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
