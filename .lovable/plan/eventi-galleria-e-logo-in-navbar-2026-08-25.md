# Eventi, galleria e logo in navbar

## 1. Timeline eventi
Rimuovere tre voci dalla sezione Eventi:
- "Ritorno all'essenza" (2026)
- "Circ'onda" (2022)
- "Nasce Officina Dadà" (2018)

Restano: Born to Fly II edizione (2025), Formazione istruttori (2024/25), Born to Fly I edizione (2024), Strabilio Festival (2023). Stesso elenco aggiornato anche nello strumento agente `list_events`, per coerenza.

## 2. Galleria
Rimuovere le didascalie sotto ogni foto: resta la sola griglia di immagini. I testi restano come `alt` per accessibilità e SEO, e la didascalia nel lightbox viene sostituita dal solo contatore (es. "5 / 23"). Filtri Tutte/Allenamento/Spettacolo invariati.

## 3. Logo in navbar
- Ritagliare dal logo attuale la sola figura della ragazza sui tessuti sulla mezzaluna (senza le scritte), esportandola come nuova immagine dedicata alla navbar.
- Usare quel simbolo ingrandito nella navbar (circa il doppio dell'altezza attuale, mantenendo la barra compatta).
- Accanto al simbolo, il testo "Officina Dadà" con sotto "discipline artistiche" in caratteri piccoli e spaziati, resi con i font e i colori del sito (quindi leggibili sia in chiara sia in scura, senza inversioni di immagine).
- Su mobile: simbolo ingrandito + solo "Officina Dadà" se lo spazio è stretto.
- Il logo completo originale resta invariato in footer e nella sezione contatti.

## Note tecniche
- `src/components/site/Eventi.tsx`, `src/lib/mcp/tools/list-events.ts`: rimozione voci.
- `src/components/site/Gallery.tsx`: rimozione `<figcaption>` nella griglia; lightbox mostra solo il contatore.
- Ritaglio del simbolo con uno script locale sull'immagine del logo esistente e upload come nuovo asset CDN dedicato.
- Nuovo componente/variante `Logo` con prop `mark` per il simbolo; testo in markup accanto.
- `src/styles.css`: il filtro/blend `dada-logo` continua a valere solo per il logo completo; il simbolo ritagliato usa il medesimo trattamento chiaro/scuro.
