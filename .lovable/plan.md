
# Redesign 10/10 — orientato a conversione

Obiettivo: trasformare la landing da "vetrina editoriale" a **macchina di conversione** con due percorsi paralleli chiari — **famiglie/allievi** (Prova gratuita) e **aziende** (Diventa sponsor) — mantenendo l'estetica teatrale già approvata (Sospesi, palette ink/paper/teal/ember, Fraunces + Inter Tight).

## Principi di conversione applicati

- **Above the fold** deve rispondere in 3 secondi a: *Cosa sei? Per chi? Cosa faccio ora?*
- **Doppia CTA persistente** in nav sticky: `Prova gratuita` (primaria, ember) + `Sponsor` (secondaria, outline).
- **Riprova sociale prima delle features**: numeri + testimonianze prima delle discipline.
- **Frizione zero**: form corti (nome + telefono/email + età allievo), niente campi opzionali obbligatori.
- **Ancore d'urgenza**: "Posti limitati — stagione 2026/27", "Open Day: [data da confermare]".
- **SEO locale**: title/description ottimizzati per "corsi discipline aeree Brescia / Valle Sabbia / Roè Volciano".

## Nuova struttura pagina (ordine ottimizzato per conversione)

```text
1. NAV sticky              → logo + link + [Prova gratuita] [Sponsor]
2. HERO conversion         → headline + sub + doppia CTA + trust bar
3. TRUST STRIP             → "Dal 2018 · 150+ allievi · Festival Strabilio · Riconosciuta CONI/EPS"
4. PROVA GRATUITA (form)   → sezione dedicata subito, non in fondo
5. CORSI (nuova)           → griglia discipline × fasce età, con "info da confermare"
6. MANIFESTO               → valori (accorciato)
7. GALLERIA                → con 4 nuove foto integrate
8. TESTIMONIANZE (nuova)   → 3-5 quote (placeholder da riempire)
9. EVENTI / SPETTACOLI     → Strabilio + saggi
10. SEDE                   → via Bellini 7, orari reali, mappa
11. SPONSOR (nuova)        → pitch + pacchetti + form dedicato
12. TEAM                   → breve
13. CONTATTI               → form generico + WhatsApp + telefono
14. FOOTER
```

## Sezioni nuove — dettaglio

### Sezione "Prova gratuita" (conversione #1)
Split-screen: a sinistra copy emotiva ("La prima lezione è nostra. Il primo volo è tuo."), a destra form 4 campi (nome allievo, età, telefono, disciplina d'interesse dropdown). Submit → `mailto:` precompilato + toast di conferma. Micro-copy privacy sotto.

### Sezione "Corsi" (nuova, sostituisce parte di Discipline)
Tabella/griglia con colonne: **Disciplina · Fascia età · Giorni · Orari · Livello · Prezzo indicativo**. Ogni riga vuota mostra badge `Info in aggiornamento` invece di dati inventati, con CTA "Chiedi info" che apre il form prova. Quando la cliente fornirà i dati, si riempiono senza toccare il layout.

### Sezione "Sponsor" (conversione #2)
Copy orientato B2B: "Il tuo brand sotto i riflettori". 3 pacchetti visuali (Bronze / Silver / Gold) con benefit *ipotizzati* e badge "Personalizzabile — parliamone". Form dedicato (azienda, referente, email, budget indicativo, messaggio) → `mailto:` a segreteria con subject `[SPONSOR] …`. Sezione include: pubblico raggiunto (spettacoli, social, saggi), visibilità offerta (logo su costumi/locandine/social/sede), valori condivisi.

### Sezione "Testimonianze" (nuova)
3 quote in stile editoriale grande formato con nome + ruolo (genitore/allieva). Placeholder ottimistici realistici marcati come `[da confermare]` per la cliente.

## Integrazione 4 nuove foto caricate

- `cpm02456.jpeg` (trio bianco su cerchio, luce blu) → **Hero secondario** o apertura sezione Corsi (emozione + gruppo).
- `cpm03396.jpeg` (5 aeree su tessuti blu, luce viola/rossa) → **hero wide** sezione Sponsor ("pubblico → visibilità").
- `cpm03407.jpeg` (aerea singola in luce naturale) → **Testimonianze** come immagine emotiva a fianco.
- `cpm01776.jpeg` (4 cerchi allineati palco) → **Galleria** come nuova hero wide + apertura sezione Eventi.

## Modifiche estetiche mirate (non stravolgimento)

- **Hero rifatto**: sostituire headline poetica pura con headline **benefit-driven** ("Impara a volare. A Roè Volciano, dal 2018.") + subheadline che nomina il pubblico target, mantenendo lo stile Fraunces oversized.
- **Nav**: aggiungere le due CTA sempre visibili anche su mobile (bottom-bar sticky con `Prova gratuita` + icona WhatsApp).
- **Palette**: invariata. Ember (`#D96A3E`) diventa esclusivo per CTA primarie per massimizzare click-through.
- **Micro-interazioni**: hover CTA con leggero glow ember, form con validazione inline.

## SEO & metadata

- Title: `Officina Dadà — Discipline Aeree e Circensi · Roè Volciano (BS)`
- Description: `Corsi di tessuti aerei, cerchio, giocoleria, flexibility per bambini, ragazzi e adulti. Prova gratuita — Roè Volciano, Valle Sabbia.`
- JSON-LD `SportsActivityLocation` con indirizzo via Bellini 7, orari, telefono.
- H1 unico nell'hero, semantic sections, alt text su tutte le foto (già presente da migliorare).
- Aggiornare `sitemap.xml.ts` con `/` `/privacy` `/cookie` (attualmente potrebbe mancare — verifico in build).

## Messaggio da inviare alla cliente (allegato al deliverable)

Genero un testo pronto da copiare, che chiede:
1. **Corsi**: per ogni disciplina (aerea, cerchio, giocoleria, flexibility, verticali, circo in famiglia) → giorni, orari, fascia età, livello, prezzo/quota mensile o pacchetto, quota associativa annuale.
2. **Iscrizioni**: quando aprono, se c'è open day, documenti richiesti (certificato medico?), modalità pagamento.
3. **Sponsor**: cosa offre già oggi (loghi su costumi? social? sede? locandine?), quanti spettacoli/anno, quanti spettatori, follower social, se ha già sponsor attivi.
4. **Numeri reali**: n° allievi attuali, n° istruttori, anni attività confermati, città/comuni provenienza allievi.
5. **Testimonianze**: 3-5 frasi da genitori/allievi con nome + iniziale cognome + ruolo.
6. **Team**: nomi, ruoli, mini-bio (2 righe) per ciascuno, eventuali foto ritratto.
7. **Assets mancanti**: logo vettoriale (SVG/AI) se disponibile, foto sede interna/esterna, video breve promo se esiste.
8. **Legale**: ragione sociale completa, P.IVA/CF, dati per privacy/cookie policy reali (attualmente sono generici).

## File impattati

- Nuovi: `src/components/site/ProvaGratuita.tsx`, `src/components/site/Corsi.tsx`, `src/components/site/Sponsor.tsx`, `src/components/site/Testimonianze.tsx`, `src/components/site/TrustStrip.tsx`, `src/components/site/MobileCTABar.tsx`.
- Modificati: `Hero.tsx` (headline conversion + CTA), `SiteNav.tsx` (doppia CTA), `Contatti.tsx` (semplificato), `index.tsx` (nuovo ordine + SEO), `SiteFooter.tsx` (aggiunta link a nuove sezioni + P.IVA placeholder).
- Assets: 4 pointer `.asset.json` per le nuove foto in `src/assets/`.
- SEO: verifica/aggiornamento `sitemap[.]xml.ts` se presente, altrimenti creo.

## Cosa NON tocco

- Palette, tipografia, componenti Reveal/Manifesto/Gallery/Team/Sede/Eventi/LegalPage (solo integrazione, non riscrittura).
- MCP server e struttura backend.
- Rotte `/privacy`, `/cookie`, `/mcp` — restano.

## Deliverable finale

Sito riorganizzato + un messaggio strutturato (in chat) da inoltrare alla cliente con tutte le info mancanti raggruppate per priorità (blocking / nice-to-have).
