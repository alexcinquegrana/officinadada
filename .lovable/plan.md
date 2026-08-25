# Video in hero e nuove foto (allenamento, spettacolo, sede)

## 1. Video come banner hero

Il file caricato è 4K in HEVC (19s, 21 MB): in questo formato non viene riprodotto su Chrome/Android. Lo converto in due versioni web (H.264 1080p e WebM), più un fotogramma di poster, e li carico sul CDN del progetto.

Hero aggiornata:
- video di sfondo a tutto schermo, in autoplay, muto, in loop, `playsinline`, con `poster` per il primo istante di caricamento
- stessa gradazione scura attuale sopra il video, così i titoli bianchi restano leggibili
- su mobile e con "riduci animazioni" attivo resta l'immagine statica (niente video pesante in 4G)
- il resto della hero (titoli, testo, "Scorri") non cambia

## 2. Nuove foto — dove vanno

Analisi delle 8 immagini caricate:

| Foto | Contenuto | Destinazione |
|---|---|---|
| DAJ_9757 | sala vuota con tessuti colorati appesi | Sede (immagine principale) |
| DAJ_9780 | sala vuota con cerchi aerei | Sede |
| DAJ_9765 | reception / segreteria | Sede (accoglienza) |
| DAJ_0012 | gruppo adulti in allenamento a terra | Galleria (allenamento) + Discipline/Flexibility |
| P5D_2797 | allieve sui tessuti con insegnante | Galleria (allenamento) |
| DAJ_9899 | gruppo sospeso sui tessuti, luce naturale | Galleria (allenamento) |
| DAJ_9974 | trio su cerchio con insegnante | Galleria (allenamento) + Discipline/Cerchio |
| DAJ_0189 | assolo su tessuto rosa con scritta "Officina DADÀ" a muro | Galleria + possibile uso in Manifesto |
| DAJ_0424 | bambine con i tessuti, vista dall'alto | Galleria (kids) + sezione Circo in famiglia/Iscrizioni |

## 3. Galleria: mix allenamento / spettacolo

Oggi la galleria contiene solo foto di scena. La riorganizzo alternando i due mondi:
- didascalie che distinguono "Sala" (allenamento, luce naturale) e "Scena" (spettacolo, luci di teatro)
- ordine alternato in griglia, così il contrasto luce-giorno / luce-palco diventa un ritmo visivo invece che due blocchi separati
- filtro semplice in testa alla galleria: Tutte · Allenamento · Spettacolo (facoltativo, ma consigliato ora che le foto sono ~25)

## 4. Sede: le foto dello spazio vuoto

La sezione Sede oggi è solo una lista di specifiche. Diventa:
- immagine larga di apertura (sala tessuti vuota) sopra il titolo
- elenco specifiche invariato
- sotto, una fila di due/tre immagini più piccole (sala cerchi, reception) con didascalie brevi: "Sala tessuti", "Sala cerchi", "Accoglienza"
- ritagli verticali corretti su mobile, nessuno scroll laterale

## Note tecniche

- Video: `ffmpeg` → `hero.mp4` (H.264 yuv420p, 1080p, ~2 Mbps, `-movflags +faststart`), `hero.webm` (VP9) e `hero-poster.jpg`; caricati con `lovable-assets` e importati come pointer `.asset.json`.
- Foto: caricate con `lovable-assets create` da `/mnt/user-uploads/`, nessun binario dentro il repo.
- File toccati: `src/components/site/Hero.tsx`, `Gallery.tsx`, `Sede.tsx`, `Discipline.tsx`, più i nuovi `.asset.json` in `src/assets/`.
