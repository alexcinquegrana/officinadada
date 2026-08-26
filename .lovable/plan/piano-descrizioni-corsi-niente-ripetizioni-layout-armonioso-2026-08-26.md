# Piano — Descrizioni corsi: niente ripetizioni, layout armonioso

## Problema attuale
In `src/components/site/Orari.tsx` le descrizioni sono ripetute sotto ogni card:
- `DESC_BAMBINI_JUNIOR` appare 5 volte (tessuti bambini/junior + cerchio baby/bambini/junior)
- `DESC_ADOLESCENTI_ADULTI` appare 4 volte
- Flexibility non ha descrizione

## Soluzione

Riorganizzare le descrizioni in modo che ciascuna compaia **una sola volta**, separandole dalle card delle locandine (che già contengono corso e orario).

### Struttura per gruppo

Per ogni gruppo (Tessuti aerei, Cerchio aereo) inserire un **blocco descrizioni condiviso** in cima, con due brevi paragrafi affiancati:

- **Bambini · Junior** → descrizione attuale (un'unica volta)
- **Adolescenti · Adulti** → descrizione attuale (un'unica volta)

Sotto, la griglia di card mostra **solo l'immagine della locandina** (senza testo ripetuto), perché la locandina contiene già corso, età e orario.

### Gruppo "Altri corsi"
Ogni corso ha descrizione unica → manterle sotto la rispettiva card:
- **Flexibility** → riportare la descrizione da `Discipline.tsx`: «Un allenamento dedicato a mobilità articolare, allungamento attivo e forza nei range estremi. Si lavora su spalle, colonna e anche con progressioni graduali e rispettose dei tempi di ciascuno. È il complemento perfetto alle discipline aeree: più ampiezza, meno infortuni, linee più pulite. Adatto anche a chi non fa circo e vuole semplicemente stare meglio nel proprio corpo.»
- **Level up** → descrizione esistente
- **Creazione sull'attrezzo** → descrizione esistente

### Layout visivo del blocco descrizioni condiviso
Due colonne affiancate su desktop (grid `md:grid-cols-2`), impilate su mobile. Stile: etichetta piccola (es. "Bambini · Junior") + paragrafo in `text-paper/70 text-sm leading-relaxed`, con un sottile divisore tra le due. Collocato subito sotto il titolo del gruppo, sopra la griglia di card.

### Card semplificate
`CorsoCard` mostra solo l'immagine (object-contain) con il bordo, senza paragrafo `desc` — le descrizioni condivise sono già sopra.

## File modificati
- `src/components/site/Orari.tsx` — riorganizzazione descrizioni e layout

## Nessun'altra modifica
Niente grafica, colori, font, animazioni o altre sezioni.
