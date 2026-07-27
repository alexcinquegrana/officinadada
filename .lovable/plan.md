
## Obiettivo

1. Integrare le 6 nuove foto caricate nel sito.
2. Trasformare la sezione **Galleria** in una vera galleria estendibile (griglia editoriale + lightbox), pronta ad accogliere molte altre foto in futuro.
3. Nella sezione **Discipline** sostituire le foto attuali con immagini iperrealistiche coerenti al titolo di ogni disciplina, evitando volti in primo piano.

## 1. Upload e catalogazione delle nuove foto

Carico le 6 immagini via `lovable-assets` in `src/assets/` come `.asset.json`:

- `SGR_6225.jpeg` → duo su cerchio, luce rossa (drammatica)
- `SGR_6255.jpeg` → cerchio con corpo in sospensione, luce rossa
- `cpm01964.jpeg` → cerchio blu, figura capovolta (contiene watermark logo Dadà + Pasotti — la teniamo, coerente con crediti fotografo)
- `cpm01154.jpeg` → cerchio rosso, bambina in aria (kids)
- `SGR_5528.jpeg` → backstage/trucco (dietro le quinte, umanità)
- `cpm00029.jpeg` → foto di gruppo sul palco (saggio finale, comunità)

## 2. Posizionamento strategico delle nuove foto

Analisi editoriale — ogni foto va dove rafforza la narrazione della sezione:

- **Hero / Manifesto**: nessun cambio (già bilanciati).
- **Sezione "Circo in famiglia / Kids"** nella lista Discipline → `cpm01154.jpeg` (bambina sul cerchio) come immagine associata.
- **Eventi / Saggi**: `cpm00029.jpeg` (foto di gruppo saggio) come immagine di apertura della sezione — dà scala e comunità.
- **Team / Backstage**: `SGR_5528.jpeg` (trucco backstage) come immagine editoriale accanto al team — mostra il lato umano/artigianale.
- **Galleria** (vedi sotto): tutte e 6 le foto entrano nella griglia, con `SGR_6225.jpeg` come immagine hero della galleria (formato verticale forte).

## 3. Nuova sezione Galleria estendibile

Refactor di `src/components/site/Gallery.tsx`:

- Sposto la lista foto in un array `gallery` in cima al file, tipizzato `{ src, alt, caption, span }`. Aggiungere nuove foto in futuro = una riga nell'array.
- Layout: **masonry editoriale asimmetrica** (CSS grid con `col-span` variabili 4/6/8/12 e aspect ratio miste 4/5, 4/3, 16/9) — gestita dal campo `span` per foto.
- Header sezione invariato (eyebrow "Galleria", crediti David Pasotti).
- **Lightbox**: click su una foto apre overlay full-screen con `motion/react` (fade + scale), navigazione ←/→ e chiusura con Esc / click su sfondo / tasto X. Focus trap semplice, `overflow:hidden` su body quando aperto.
- Lazy loading nativo (`loading="lazy"`, `decoding="async"`).
- Le foto attuali (tessuti0103/165/220, cerchio) restano nel set iniziale insieme alle 6 nuove — totale 10 foto di partenza.

## 4. Discipline — immagini iperrealistiche coerenti

Le foto attuali della sezione Discipline vengono sostituite con immagini generate AI iperrealistiche, tramite `imagegen--generate_image` (model `standard`), salvate in `src/assets/discipline/*.jpg`. Prompt engineering: fotografia teatrale, luce di scena, grana pellicola, **niente volti in primo piano** (soggetti di spalle, dettagli, silhouette, inquadrature strette su mani/piedi/attrezzo).

Mappa disciplina → prompt:

- **Danza aerea** → aerialist di spalle avvolta in tessuti aerei rossi, palco scuro, luce laterale calda, film grain, hyperrealistic.
- **Giocoleria** → mani in movimento che lanciano tre palline bianche, luce controluce ambrata, motion blur leggero.
- **Circo in famiglia** → riutilizzo la foto reale `cpm01154.jpeg` (bambina sul cerchio) — è autentica, non serve AI.
- **Flexibility** → silhouette di dorso in spaccata frontale su pavimento di sala danza, luce da finestra, ombre lunghe.
- **Verticali** → figura di spalle in verticale su una mano, sala vuota, muro chiaro, ombra netta, fotografia editoriale.

Ogni immagine viene poi caricata via `lovable-assets` (i file generati in `src/assets/` restano solo se non li esternalizziamo — qui li esternalizzo come asset per coerenza col resto del progetto).

## 5. File toccati

- `src/components/site/Gallery.tsx` — refactor griglia + lightbox.
- `src/components/site/Discipline.tsx` — nuovi import immagini AI + foto reale kids.
- `src/components/site/Eventi.tsx` — inserimento `cpm00029.jpeg`.
- `src/components/site/Team.tsx` — inserimento `SGR_5528.jpeg` come immagine editoriale.
- Nuovi `.asset.json` in `src/assets/` per 6 foto utente + 4 immagini AI.

## Note tecniche

- Nessun cambio a routing, backend, styles globali.
- Il lightbox è un componente locale a `Gallery.tsx` (non aggiungiamo dipendenze); usa `motion/react` già installato e `AnimatePresence`.
- Le immagini AI vengono generate una-per-una con `imagegen--generate_image` in parallelo dove possibile.
