# Modifiche a "Dove siamo" e spostamento Regolamento

## 1. Sezione "Dove siamo" (`src/components/site/MapSection.tsx`)

Sostituire il paragrafo descrittivo sotto il titolo "Sotto il tendone, in Valsabbia." (riga 41–43, il testo `Officina Dadà A.S.D. — {ADDRESS}. Vieni a trovarci...`) con due righe indicative delle due sedi:

- **Sede principale** — Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)
- **Seconda sede** — Via Mons. Toccabelli 26, 25078 Vestone (BS) · palestra Collodi

Il titolo e il pulsante "Apri in Google Maps" restano invariati. Aggiornare anche la `const ADDRESS` se serve per coerenza, mantenendo il pin sulla sede principale di Roè Volciano.

## 2. Spostare il Regolamento (`src/components/site/SiteFooter.tsx` → `src/components/site/Iscrizioni.tsx`)

- **Footer**: rimuovere la voce "Regolamento 2026 (PDF)" dall'elenco "Informazioni legali" (righe 102–112 di `SiteFooter.tsx`). Rimuovere anche l'`import` di `regolamento-2026.pdf.asset.json` non più usato.
- **Iscrizioni**: aggiungere il Regolamento 2026 all'elenco "Moduli da scaricare" (array `moduli` in `Iscrizioni.tsx`), con `href` = `regolamento.url`, `download="regolamento-2026.pdf"`, presentato come gli altri documenti (apertura in nuova scheda, stessa grafica). Aggiungere l'`import` di `regolamento-2026.pdf.asset.json` in `Iscrizioni.tsx`.

Nessuna modifica a grafica, colori, font o altre sezioni.
