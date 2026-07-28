
## Interventi

### 1. Modalità chiara — leggibilità testi
In `src/styles.css`, il blocco `html.light` rimappa background/foreground ma molti componenti usano classi hardcoded `text-paper`, `text-paper/70`, `text-paper/50`, `border-white/10`, `bg-ink/70` — che restano chiare/trasparenti anche su sfondo chiaro, risultando illeggibili.

Approccio: mantenere i token `--paper`/`--ink` semanticamente corretti nel tema chiaro rimappando le variabili che i componenti già usano. In `html.light`:
- `--paper: var(--ink)` (così `text-paper` diventa scuro su sfondo chiaro)
- `--ink: <warm white originale>` (così `bg-ink` diventa chiaro)
- Rimappare `--color-paper` e `--color-ink` di conseguenza in `@theme inline` — o più semplicemente aggiungere override diretti in `html.light` sui token `--color-paper`/`--color-ink`.
- Adeguare i bordi: aggiungere override che rendano `border-white/10` visibile (usare `--border` scuro già definito; sostituire nei componenti chiave `border-white/10` → `border-border` dove necessario, oppure aggiungere una regola CSS globale in `html.light` che intercetti quelle classi).

Preferisco la soluzione pulita: in `html.light` ridefinire `--paper` e `--ink` scambiati, così tutte le utility `text-paper`, `bg-ink`, `text-paper/70` funzionano automaticamente in entrambi i temi.

### 2. Navbar più chiara in light mode
In `SiteNav.tsx` la classe scrolled usa `bg-ink/70` + `border-white/10`. Con lo scambio di `--ink`/`--paper` sopra, `bg-ink/70` diventerà automaticamente un bianco caldo semi-trasparente. Aggiungere anche un override per `border-white/10` → in light mode usare un bordo scuro sottile (via classe condizionale `dark:border-white/10 border-black/10` sui punti chiave: header, menu mobile, footer, sezioni con `border-t border-white/10`).

### 3. Foto "Saggio finale" tagliata male su mobile (home)
In `src/routes/index.tsx` la `<img>` usa `h-[70vh] min-h-[420px] object-cover` senza `object-position`. Su ritratto mobile taglia la parte importante. Aggiungere `object-[center_30%]` (o `object-top`) e ridurre l'altezza minima su mobile (`h-[60vh] min-h-[360px] md:h-[70vh]`), così l'inquadratura del gruppo resta visibile.

### 4. Footer leggibilità mobile
`SiteFooter.tsx` usa `text-paper/40`, `text-paper/50`, `text-xs` con `border-white/10`. Con lo swap di token del punto 1 diventeranno automaticamente scuri su chiaro. Ritoccare comunque:
- opacità troppo basse (`/40`) → alzare a `/60` per il copyright
- `border-white/10` → `border-border` (semantico) o classi condizionali light/dark
- verificare grid mobile (`col-span-6`) — l'email lunga può già sfondare; aggiungere `break-all` sul link email

### 5. Rimuovere immagine dalla sezione Sede
In `src/components/site/Sede.tsx` eliminare la colonna sinistra (`<Reveal className="col-span-6">` con `<img>`) e centrare i contenuti testuali (`max-w-2xl mx-auto` o griglia a colonna singola). Rimuovere anche l'import `img` da `tessuti0165.jpg.asset.json`.

## File toccati
- `src/styles.css` — swap `--paper`/`--ink` + `--color-paper`/`--color-ink` in `html.light`
- `src/components/site/SiteNav.tsx` — bordi condizionali light/dark
- `src/components/site/SiteFooter.tsx` — opacità testi, bordi, `break-all` email
- `src/routes/index.tsx` — object-position + altezza responsive foto saggio
- `src/components/site/Sede.tsx` — rimozione immagine, layout a colonna singola
