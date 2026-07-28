## Obiettivo

1. Nella hero, mostrare **entrambe le bambine** dell'immagine `tessuti0103.jpg` (attualmente il crop taglia una delle due figure).
2. Verificare la **leggibilità dei testi** dell'hero sia in modalità scura che chiara e correggere eventuali problemi.

## Interventi

### `src/components/site/Hero.tsx`
- Cambiare l'inquadratura dell'immagine di sfondo per garantire che entrambe le figure restino visibili a tutte le larghezze:
  - Usare `object-position` mirato (es. `object-[50%_20%]` desktop, spostato leggermente su mobile) invece del default `center`.
  - Su mobile (viewport stretto 393px), l'`object-cover` a piena altezza tende a tagliare i lati: valutare un `object-position` orizzontale calibrato sulla foto reale in modo che entrambe le silhouette rientrino nel frame.
- Mantenere `motion` parallax invariato (la trasformazione `y`/`scale` è compatibile con object-position).

### Leggibilità testi hero — verifica in entrambe le modalità
Attualmente l'hero usa `text-paper` e `text-paper/70` sopra un gradient `from-ink/70 via-ink/40 to-ink`. In light mode `--ink` e `--paper` sono invertiti, quindi:
- `text-paper` in light mode diventa quasi nero → sopra un'immagine chiara/scura può risultare illeggibile a seconda della zona.
- Il gradient `bg-ink/xx` in light mode diventa una velatura bianca → contrasto ridotto sui testi scuri.

Soluzione:
- Rendere hero **theme-agnostic**: forzare palette scura sull'hero indipendentemente dal tema (l'immagine è teatrale e scura), usando classi con colori espliciti coerenti col brand (equivalenti a ink/paper hard-coded via variabili CSS locali dentro la sezione), così i testi bianchi restano su gradient scuro anche in light mode.
- In alternativa: aumentare l'opacità del gradient scuro (es. `from-black/80 via-black/50 to-black`) e mantenere `text-white`/`text-white/70` fissi dentro l'hero.

Sceglierò l'approccio con overlay scuro forzato + testi bianchi fissi solo nell'hero, per garantire contrasto WCAG in entrambe le modalità senza toccare il resto del sito.

### Verifica
- Screenshot Playwright a 393×706 (mobile corrente) e 1280×800 (desktop), in dark e light mode, per confermare che:
  1. entrambe le bambine sono visibili nel frame,
  2. eyebrow, H1 "Sospesi tra / terra e cielo.", sottotitolo e "Scorri" restano leggibili.

## File toccati
- `src/components/site/Hero.tsx` (crop + colori testi/overlay)

Nessuna modifica a logica di business, routing, o altri componenti.