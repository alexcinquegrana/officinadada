# Video su mobile, foto di Elena, moduli scaricabili e orari corsi

## 1. Video hero anche da smartphone

Oggi il video parte solo da 768px in su: su telefono resta la foto statica. Lo attivo su tutti i dispositivi:

- video di sfondo in autoplay, muto, in loop, `playsinline` su mobile e desktop
- poster immediato, così non si vede nessun buco durante il caricamento
- resta la foto statica solo con "riduci animazioni" attivo (accessibilità)
- versione mobile più leggera: genero un secondo file verticale/ridotto (720p, ~1,5 MB) servito ai piccoli schermi, per non pesare sulla rete dati
- inquadratura corretta in verticale (`object-cover`) senza scroll laterale

## 2. Elena — foto nella sezione Chi siamo

La foto alla reception (P5D_2757) va nella pagina Team, come ritratto della presidente:

- ritratto affiancato al blocco "Consiglio direttivo", con didascalia "Elena Trombini — Presidente e direttrice artistica"
- la foto backstage attuale scende sotto, come immagine secondaria
- su mobile: ritratto a piena larghezza sopra l'elenco

## 3. Moduli di iscrizione scaricabili

I tre PDF caricati (Regolamento 2026, Domanda di ammissione a socio, Safeguarding) vengono pubblicati sul CDN e aggiunti alla pagina Iscrizioni in un blocco "Moduli da scaricare":

- tre voci in elenco con nome del documento, formato e peso, icona download
- link con `download` e apertura in nuova scheda
- richiamo breve: quali moduli servono per iscriversi e quale va consegnato firmato
- link al Regolamento anche nel footer, accanto a Privacy e Cookie

## 4. Orari corsi 2026/27

Le cinque locandine (Baby aerea, Cerchio aereo adolescenti, Cerchio aereo adulti, Flexybility, Level up, Creazione sull'attrezzo) diventano una sezione "Orari 2026/27" nella pagina Discipline:

- griglia di card con titolo del corso, fascia d'età/livello e giorni con orari, scritti come testo (leggibili, ricercabili, accessibili) — non solo immagini
- la locandina resta come sfondo scuro della card, con lo stesso stile grafico del sito
- ordinamento per pubblico: bambini → adolescenti → adulti → trasversali
- struttura pronta ad accogliere le prossime locandine che invierai

## Note tecniche

- Nuovo `hero-clip-mobile.mp4` generato con ffmpeg dal master già caricato; scelta della sorgente tramite `<source media="...">` o media query.
- PDF e immagini caricati con `lovable-assets create` da `/mnt/user-uploads/`, nessun binario nel repo.
- File toccati: `Hero.tsx`, `Team.tsx`, `Iscrizioni.tsx`, `Discipline.tsx`, `SiteFooter.tsx`, più i nuovi `.asset.json`.
