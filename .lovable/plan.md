# Due modifiche mirate

## 1. Logo — stessa forma, colori invertiti
Il logo attuale generato da AI ha cambiato la grafica. Rimediamo:
- Uso `imagegen--edit_image` sul file **originale** `src/assets/dada-logo.jpg` con prompt "invert colors: black background, white figure and typography, keep everything else identical (composition, proportions, glyphs, ribbon shape)".
- Salvo il risultato in `src/assets/dada-logo-dark.png` sovrascrivendo la versione AI attuale.
- `Logo.tsx` resta invariato (mostra `dada-logo-dark.png` in dark mode, `dada-logo.jpg` originale in light mode).

## 2. Palette azzurra
La variabile `--ember` in `src/styles.css` era già stata rimappata su azzurro `oklch(0.72 0.13 235)`, ma:
- `::selection` e alcune fallback usano ancora il vecchio riferimento — verifico che tutto sia coerente.
- Aggiorno `theme-color` in `src/routes/__root.tsx` (attualmente `#0B0B0C` — ok per dark; aggiungo un tono azzurro come brand color secondario).
- Forzo un hard refresh flushando l'HMR gate e verifico con Playwright che il colore computato di un pulsante `bg-ember` sia effettivamente azzurro sRGB (~ `rgb(90, 150, 220)`), non arancio.

Se il computed style risulta ancora arancio, controllo se c'è un override residuo (classe hardcoded, cache del browser, o token duplicato) e lo rimuovo.

Nessuna altra modifica in questo turno.
