## Obiettivo
Sostituire le coordinate generiche attuali della mappa con l’indirizzo corretto dell’associazione — **Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)** — e allineare l’indirizzo in tutte le sezioni del sito.

## Stato attuale verificato
- `src/components/site/MapSection.tsx` usa coordinate approssimative (`LAT = 45.6208`, `LNG = 10.5578`) e l’indirizzo testuale "Roè Volciano (BS), Valsabbia".
- Geocoding via Google Maps Platform ha restituito le coordinate precise del civico: **lat 45.6235077, lng 10.4928399**, con formatted address "Via Arnoldo Bellini, 7, 25077 Roè Volciano BS, Italy".

## Modifiche previste

### 1. `src/components/site/MapSection.tsx`
- Aggiornare `LAT` a `45.6235077` e `LNG` a `10.4928399`.
- Aggiornare `ADDRESS` in "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)".
- Aggiornare `MAPS_LINK` per puntare alla ricerca corretta su Google Maps (query "Officina Dadà Via Arnoldo Bellini 7 Roè Volciano").
- Verificare che il pin e il centro mappa coincidano con il civico.

### 2. `src/components/site/Contatti.tsx`
- Sostituire il testo "Roè Volciano (BS)" / "Valsabbia · Provincia di Brescia" con l’indirizzo completo "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)".

### 3. `src/components/site/Sede.tsx`
- Aggiornare la prima riga delle specifiche da "Roè Volciano (BS)" a "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS)".

### 4. `src/lib/mcp/tools/get-organization-info.ts`
- Aggiornare l’oggetto `location` includendo `address: "Via Arnoldo Bellini 7, 25077 Roè Volciano (BS), Italia"`.

## Verifica
- Build del progetto per assicurare che non ci siano errori di TypeScript.
- Controllo visivo della mappa in anteprima: il pin deve trovarsi esattamente su Via Bellini 7, Roè Volciano, e non più sulle coordinate generiche precedenti.