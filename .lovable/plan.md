## Problema
Su mobile la hero usa `object-contain`, che lascia due bande nere (sopra sotto la navbar e sotto) perché l'immagine verticale non riempie il viewport `100svh`.

## Soluzione
In `src/components/site/Hero.tsx` (riga 22): sostituire `object-contain md:object-cover` con `object-cover` per tutte le viewport, così l'immagine riempie sempre lo spazio senza gap con la navbar.

Per mantenere entrambe le allieve visibili su mobile (era il motivo per cui era stato messo `object-contain`), spostare il focus dell'inquadratura con `object-[50%_20%]` su mobile e `md:object-center` su desktop — le due figure sono nella metà superiore dell'immagine, quindi ancorando in alto restano entrambe in frame anche col crop.

## Verifica
Screenshot Playwright a 393×706 (mobile) in dark e light per confermare: nessun gap sopra, entrambe le allieve visibili, testo hero leggibile.