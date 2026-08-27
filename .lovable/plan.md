# Modifiche a "Dove siamo" e spostamento Regolamento

## 1. Sezione "Dove siamo" (`src/components/site/MapSection.tsx`)

- **Rimuovere** il titolo `<h2>` "Sotto il tendone, in Valsabbia." (righe 36–39) — è sbagliato, non c'è nessun tendone. Lasciare solo l'eyebrow "Dove siamo".
- **Sostituire** il paragrafo descrittivo (riga 40–43, `Officina Dadà A.S.D. — {ADDRESS}. Vieni a trovarci...`) con due righe indicative delle due sedi:
  - **Sede principale** — Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)
  - **Seconda sede** — Via Mons. Toccabelli 26, 25078 Vestone (BS) · palestra Collodi

Il pulsante "Apri in Google Maps" resta invariato. Mantenere il pin sulla sede principale di Roè Volciano.

## 2. Spostare il Regolamento (`src/components/site/SiteFooter.tsx` → `src/components/site/Iscrizioni.tsx`)

- **Footer**: rimuovere la voce "Regolamento 2026 (PDF)" dall'elenco "Informazioni legali" (righe 102–112 di `SiteFooter.tsx`). Rimuovere anche l'`import` di `regolamento-2026.pdf.asset.json` non più usato.
- **Iscrizioni**: aggiungere il Regolamento 2026 all'elenco "Moduli da scaricare" (array `moduli` in `Iscrizioni.tsx`), con `href` = `regolamento.url`, `download="regolamento-2026.pdf"`, presentato come gli altri documenti (apertura in nuova scheda, stessa grafica). Aggiungere l'`import` di `regolamento-2026.pdf.asset.json` in `Iscrizioni.tsx`.

Nessuna modifica a grafica, colori, font o altre sezioni.
