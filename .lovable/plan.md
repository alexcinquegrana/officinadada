# Tema chiaro di default, logo integrato, rimozione Verticali

## 1. Rimuovere la disciplina "Verticali"
- Toglierla dall'elenco delle discipline (card + immagine associata).
- Toglierla dai testi SEO della home e della pagina Discipline e dai dati esposti agli agenti (elenco discipline, descrizione associazione).
- Eliminare l'immagine AI `discipline-verticali` non più usata.

## 2. Sito in modalità chiara di default
- Il tema iniziale diventa "chiaro"; chi ha già scelto un tema mantiene la sua preferenza salvata.
- L'HTML parte con la classe `light` e `theme-color` chiaro, così non c'è flash scuro al primo caricamento.
- Il toggle chiaro/scuro resta invariato.

## 3. Hero leggibile anche in chiaro
- Nella hero il velo chiaro (il "bagliore bianco") viene rimosso: l'immagine mantiene sempre la sovrapposizione scura/vignettatura, in entrambi i temi.
- Titolo, occhiello e paragrafo della hero restano bianchi e leggibili anche con il sito in modalità chiara.

## 4. Logo nella navbar
- Logo più grande (circa il doppio dell'altezza attuale) su desktop, con dimensione ridotta ma comunque più grande su mobile.
- Lo sfondo del logo si fonde con la navbar: fusione in "moltiplica" in tema chiaro (sfondo bianco invisibile) e in "schiarisci" in tema scuro dopo l'inversione, così non si vede più il rettangolo.
- Rimosso il testo "Officina Dadà" accanto al logo (evita la ripetizione con la scritta già presente nel logo).
- Voci di menu leggermente più grandi per equilibrare il logo ingrandito.
- Stesso trattamento del logo dove compare in footer e contatti, per coerenza.

## Note tecniche
- `src/components/site/Discipline.tsx`, `src/lib/mcp/tools/list-disciplines.ts`, `get-organization-info.ts`, `src/routes/index.tsx`, `src/routes/discipline.tsx`.
- `ThemeProvider` default `light`; `__root.tsx` shell `className="light"`.
- `Hero.tsx`: overlay gradient/vignette forzati sui token scuri (valori fissi) invece che sui token tematici.
- `styles.css`: regole `.dada-logo` con `mix-blend-mode` per light/dark; `SiteNav.tsx` per dimensioni e rimozione dello span.
