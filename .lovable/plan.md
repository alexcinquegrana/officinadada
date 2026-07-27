## Obiettivo

1. Caricare le 7 nuove foto David Pasotti come asset CDN e integrarle nella Galleria.
2. Rigenerare le immagini AI delle Discipline in stile più fotografico/coerente col mood teatrale del sito (luci di scena viola/blu/gialle, tende, fumo, grana), sostituendo le attuali che sembrano troppo "AI".
3. Per **Verticali**, generare specificatamente **bambine di schiena in verticale** su pavimento di sala/palco.
4. Aggiungere un'immagine dedicata a **Circo in famiglia** (usando `SGR_5909.jpeg` — gruppo con bambini e adulti sul palco, molto family-friendly) al posto dell'attuale `cpm01154.jpeg` che resta comunque in galleria.

## 1. Upload delle 7 nuove foto

Via `lovable-assets create` da `/mnt/user-uploads/` → `src/assets/*.jpg.asset.json`:

- `cpm04369.jpeg` → aerealista tessuti bianchi, luci viola/gialle (verticale, drammatica)
- `cpm04439.jpeg` → **5 aerealiste in fila su tessuti azzurri** (foto corale iconica, orizzontale wide)
- `SGR_7156.jpeg` → aerealista abito blu su tessuti, luce gialla (verticale)
- `cpm03107.jpeg` → aerealista in sospensione, tenda bordeaux + luce blu (verticale)
- `cpm00250.jpeg` → **bambina su tessuti azzurri**, luce blu (kids, orizzontale)
- `SGR_5909.jpeg` → **scena "famiglia" con adulti e bambini** attorno ai tessuti (orizzontale, perfetta per Circo in famiglia)
- `SGR_5918.jpeg` → **trio di ragazze su tessuti**, luci a raggiera viola (orizzontale)

## 2. Nuova sezione Circo in famiglia (Discipline)

In `Discipline.tsx`, rimpiazzo l'attuale `kids` (`cpm01154.jpg`) con `SGR_5909.jpg` — la scena corale con bambini + adulti sul palco racconta meglio il concetto di "famiglia" rispetto alla singola bambina sul cerchio. `cpm01154.jpg` resta nella Galleria.

## 3. Rigenerazione immagini AI Discipline

Le attuali immagini AI (aerea, giocoleria, flexibility, verticali) risultano "piatte" e riconoscibili come AI perché generate su prompt generici da studio. Le rifaccio con `imagegen--generate_image` (model `standard`), stile allineato alle foto reali di Pasotti: **tenda teatrale scura sul fondo, luci di scena colorate a fasci (viola/blu/giallo/ambra), fumo di scena leggero, grana fotografica 35mm, Nikon look**. Sempre senza volti in primo piano.

Nuove immagini (sostituiscono i file `.asset.json` esistenti — ricarico gli asset, il resto del codice non cambia):

- **Danza aerea** → aerialist di schiena avvolta in tessuti bianchi/argento, tenda scura, fasci di luce viola e gialla incrociati, fumo, grana pellicola — mood di `cpm04369.jpeg`.
- **Giocoleria** → dettaglio ravvicinato di **mani in movimento** che lanciano 3 palline bianche/dorate, controluce ambra, sfondo tenda nera, motion blur leggero, film grain.
- **Circo in famiglia** → **foto reale `SGR_5909.jpg`** (non AI).
- **Flexibility** → silhouette **di schiena** in spaccata su pavimento di sala danza scura, singolo fascio di luce laterale blu, fumo di scena leggero, editorial.
- **Verticali** → **due bambine di schiena in verticale** su una mano/due mani su pavimento di palco scuro, tenda teatrale sul fondo, fascio di luce viola/blu dall'alto, fumo leggero, grana pellicola, hyperrealistic — niente volti visibili (sono di schiena).

## 4. Aggiornamento Galleria

Aggiungo le 6 nuove foto (esclusa `SGR_5909.jpg` che va in Discipline, ma la metto **anche** in galleria) al set esistente. La Galleria diventa 16 foto totali, con `cpm04439.jpg` (le 5 aerealiste in fila) come nuova immagine hero wide `md:col-span-12` per creare un momento visivo forte a metà griglia. Riordino gli `span`/`ratio` per mantenere l'equilibrio masonry.

## 5. File toccati

- Nuovi: 7 `src/assets/*.jpg.asset.json` per le foto utente.
- Sostituiti (stesso path, nuovo asset): `src/assets/discipline-aerea.jpg.asset.json`, `discipline-giocoleria.jpg.asset.json`, `discipline-flexibility.jpg.asset.json`, `discipline-verticali.jpg.asset.json`.
- `src/components/site/Discipline.tsx` — swap import `kids` → `SGR_5909`.
- `src/components/site/Gallery.tsx` — array `gallery` esteso con 7 nuove entry + riequilibrio span.

## Note tecniche

- Nessuna modifica a routing, backend, styles globali, o al lightbox (già funzionante).
- Le foto reali con watermark "Dadà + Pasotti" (cpm04369, cpm04439, cpm03107, cpm00250, SGR_5918) mantengono il watermark: coerente con crediti fotografo già dichiarati in header galleria.
- Immagini AI generate a 1024×1280 (aspect 4/5) per aerea/flexibility/verticali e 1280×1024 (5/4) per giocoleria, in linea coi ratio già usati in Discipline (sticky 4/5).
