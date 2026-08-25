# Corsi completi, hero mobile e discipline

## 1. Tutti i corsi 2026/27 negli Orari

Aggiungo alle schede esistenti (Baby aerea, Cerchio adolescenti, Cerchio adulti, Flexybility, Level up, Creazione sull'attrezzo) i corsi delle nuove locandine:

- Tessuti aerei — Bambini (6-8): Principiante Lun 16:30-17:30 (Vestone), Ven 16:30-17:30; Intermedio Mar 16:30-17:30
- Tessuti aerei — Junior (8-10): Principiante Ven 17:30-18:30; Intermedio Lun 17:30-18:30 (Vestone); Int./Ava. Lun 17:30-18:30; Avanzato Mer 17:30-18:30
- Tessuti aerei — Adolescenti: Principiante Mer 16:30-17:30 (Vestone) e Gio 16:30-17:30; Intermedio Mer 17:30-18:30 (Vestone), Mer 18:30-19:30, Ven 18:30-19:30; Avanzato Mar/Gio/Ven 17:30-18:30
- Tessuti aerei — Adulti: Principiante Lun 10:30-11:30, Mar 18:30-19:30, Mer 18:30-19:30 (Vestone), Gio 20:00-21:00; Intermedio Lun 20:00-21:30; Int./Ava. Mar 19:30-21:00, Mer 19:30-21:00, Gio 18:30-20:00; Avanzato Lun 9:00-10:30
- Cerchio aereo — Bambini (6-8): Principiante Lun 16:30-17:30; Intermedio Mar 16:30-17:30
- Cerchio aereo — Junior (8-10): Principiante Gio 16:30-17:30; Intermedio Gio 17:30-18:30; Avanzato Mer 16:30-17:30

Note: le lezioni con indicazione "Vestone" restano segnalate accanto all'orario; il testo introduttivo indicherà le due sedi (Roè Volciano e Vestone).

Le schede vengono raggruppate per famiglia (Tessuti, Cerchio, Altri corsi) così la griglia resta leggibile con ~12 corsi.

## 2. Immagine di sfondo visibile anche da telefono

Nelle schede orari attuali la foto è molto sfocata e scura, su schermo piccolo si vedono solo le scritte. Rendo la foto protagonista: immagine nitida a piena scheda con gradiente scuro solo nella parte bassa dietro al testo, meno blur e più opacità, altezza minima maggiore su mobile. Il testo resta perfettamente leggibile.

## 3. Video hero su smartphone

Il video verticale attuale su telefono è ritagliato al centro e il soggetto esce dall'inquadratura. Intervengo su: punto di ancoraggio dell'inquadratura su mobile (soggetto centrato in alto anziché al centro), riduzione dello zoom/parallasse su mobile e riquadratura del file mobile in formato verticale (9:16) partendo dal video originale, così l'azione riempie lo schermo senza tagli.

## 4. Circo in famiglia

La foto allegata (adulto e bambina sul tappetino) viene caricata come asset e usata come immagine della disciplina "Circo in famiglia", sostituendo quella attuale; entra anche nella galleria tra le foto di allenamento.

## 5. Rimozione Giocoleria

Tolgo la disciplina "Giocoleria" dalla sezione Discipline e i riferimenti collegati nei testi SEO delle pagine, nella sezione Sede e negli strumenti MCP (elenco discipline e info associazione).

## Dettagli tecnici

- `src/components/site/Orari.tsx`: struttura dati estesa con gruppo/sede, nuovo trattamento visivo della card.
- `src/components/site/Hero.tsx`: `object-position` e parallasse condizionati alla larghezza; nuovo `hero-clip-mobile.mp4` ricodificato 9:16 e ricaricato come asset.
- `src/components/site/Discipline.tsx`, `Gallery.tsx`: nuovo asset circo in famiglia, rimozione item giocoleria.
- `src/routes/index.tsx`, `src/routes/discipline.tsx`, `src/components/site/Sede.tsx`, `src/lib/mcp/tools/*`: pulizia riferimenti giocoleria.
