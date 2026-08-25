# Navbar, discipline desktop e mappa

## 1. Logo in navbar
Il simbolo attuale è un ritaglio troppo stretto del logo originale: i tessuti risultano tagliati in basso e a destra. Rifaccio il ritaglio dal file originale (1080x467) con un margine corretto attorno alla figura, così il simbolo resta intero, e lo carico come nuovo asset.
Accanto al simbolo il testo diventa "Officina Dadà A.S.D." (con "discipline artistiche" sotto, invariato).

## 2. Vista desktop delle Discipline
Oggi da PC c'è una sola foto "sticky" a sinistra e un lungo elenco a destra: le voci sotto la prima restano senza immagine e la pagina appare vuota e poco leggibile.
Nuovo layout: ogni disciplina diventa una riga con immagine a sinistra e titolo + dettaglio + descrizione a destra (alternando eventualmente il lato per ritmo visivo). Niente più pannello sticky né stato hover. Su mobile resta l'attuale ordine titolo → immagine → testo.

## 3. Mappa
- Rimuovo la ripetizione di "Roè Volciano": l'indirizzo resta una sola volta nel paragrafo, e nella fallback tolgo il bottone duplicato "Apri in Google Maps" (già presente in alto).
- La mappa attualmente carica sempre il fallback OpenStreetMap: verifico la chiave browser di Google Maps e, se disponibile, faccio partire la mappa Google reale con un solo marker; altrimenti resta OSM ma con un unico pulsante e senza etichette ridondanti.

## 4. Altri miglioramenti proposti (dall'analisi)
- **Footer**: il logo nel footer usa ancora la versione completa con testo, ripetendo "Officina Dadà" due volte affiancato al titolo; lo allineo al nuovo simbolo.
- **Coerenza colori**: alcuni componenti usano ancora la classe `bg-ember` (arancione storico) invece del token azzurro; li normalizzo.
- **Alt text e SEO**: la pagina discipline e la home non citano più "giocoleria"/"verticali", ma alcune descrizioni meta restano generiche: le rendo più specifiche (tessuti, cerchio, circo in famiglia, flexibility, Valsabbia).
- **Accessibilità**: i pulsanti della galleria e delle discipline sono `button` senza necessità di interazione dopo il refactor; semplifico la semantica (figure/heading) migliorando lettura da screen reader.
- **Performance**: le immagini della galleria e delle discipline caricano a piena risoluzione; aggiungo `sizes`/`loading` coerenti e poster più leggeri dove possibile.

## Note tecniche
File coinvolti: `src/components/site/Logo.tsx`, `SiteNav.tsx`, `SiteFooter.tsx`, `Discipline.tsx`, `MapSection.tsx`, nuovo asset del simbolo via `lovable-assets`.
