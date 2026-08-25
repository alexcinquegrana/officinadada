import { Reveal } from "./Reveal";

// Officina Dadà — Via Arnoldo Bellini 7, Roè Volciano (BS)
const LAT = 45.6235077;
const LNG = 10.4928399;
const ADDRESS = "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Officina+Dad%C3%A0+Via+Arnoldo+Bellini+7+Ro%C3%A8+Volciano";

// Riquadro stretto sulla sede: una sola etichetta del paese, niente doppioni.
const D_LNG = 0.0035;
const D_LAT = 0.0018;
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - D_LNG}%2C${
  LAT - D_LAT
}%2C${LNG + D_LNG}%2C${LAT + D_LAT}&layer=mapnik&marker=${LAT}%2C${LNG}`;

export function MapSection() {
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
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Apri in Google Maps →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 relative overflow-hidden rounded-2xl border border-white/10 bg-secondary">
            <iframe
              title={`Mappa — ${ADDRESS}`}
              src={OSM_EMBED}
              loading="lazy"
              className="h-[420px] md:h-[520px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
