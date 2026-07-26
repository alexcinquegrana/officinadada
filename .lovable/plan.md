
# Officina Dadà — Piano del sito

Sito editoriale one-page per **Officina Dadà A.S.D.**, associazione di arti circensi e discipline aeree a Roè Volciano (Valsabbia, Brescia), fondata nel 2018. L'esperienza deve richiamare un programma teatrale stampato incrociato con il sito di un'istituzione culturale contemporanea: silenzioso, sicuro, cinematografico, lasciando che siano le fotografie aeree a portare l'emozione.

## Direzione creativa

**Concept — "Sospesi".** Tutto sulla pagina pende, fluttua o discende: le parole si posano, le immagini emergono dal nero come sotto una luce di scena che sale, le sezioni sono separate da sottili linee verticali che richiamano i tessuti aerei. Il sito è una lenta apertura di sipario, non uno scroll frenetico.

**Mood.** Palco scuro e teatrale, accenti caldi da luce di scena, ampio silenzio.

**Palette (dark, editoriale).**
- Nero inchiostro `#0B0B0C` (palco)
- Bianco caldo `#F2EFE9` (carta / testo)
- Verde acqua muto `#7FB8B4` — tratto dal tessuto del logo
- Arancio brace `#D96A3E` — tratto dalle luci di scena nelle foto
- Grigio cenere `#8A8681` (testo secondario)

**Tipografia.**
- Display: **Fraunces** (o **Instrument Serif**) — corsivo, sovradimensionato, editoriale, sensazione tipografica artigianale. Usato grandissimo per aperture di sezione e citazioni.
- Testo: **Inter Tight** — neutro, calmo, interlinea generosa.
- Occhielli di sezione in maiuscoletto tracciato Inter con numerazione (`01 — Chi siamo`).

**Motion.** Trattenuto. I titoli entrano con una maschera/blur soffuso sullo scroll. Le immagini sfumano dal nero. Lieve parallasse sul tessuto in hero. Cursore ad anello sottile sugli elementi interattivi. Niente rimbalzi, niente molle, niente decorazioni superflue.

## Struttura (long page unica, in italiano)

```text
┌─ Nav sottile fissa: marchio · Chi siamo · Corsi · Sede · Team · Contatti
│
├─ 01  HERO
│    Palco nero a tutto schermo. Foto aerea (tessuti0103) in dissolvenza.
│    Serif italic sovradimensionato: "Sospesi tra terra e cielo."
│    Sotto: "Discipline aeree e arti circensi · Valsabbia, dal 2018"
│    Freccia discreta verso il basso.
│
├─ 02  MANIFESTO  ("In cosa crediamo")
│    Due colonne editoriali: a sinistra occhiello tracciato + incipit breve,
│    a destra il testo lungo riscritto dal CV.
│    Citazione: "Da spettatori ad artisti della propria vita."
│
├─ 03  DISCIPLINE (Corsi)
│    Lista editoriale orizzontale, non card:
│      Danza aerea — tessuti, cerchio, amaca, corda, trapezio
│      Giocoleria
│      Circo in famiglia
│      Flexibility
│      Verticali
│    Ogni riga in hover mostra una breve descrizione
│    e una fotografia corrispondente scivola da destra.
│
├─ 04  GALLERIA
│    Composizione fotografica asimmetrica e sfalsata (le 4 foto caricate),
│    con didascalie in corsivo stile "figure".
│
├─ 05  LA SEDE
│    Layout diviso. Sinistra: fotografia della sala.
│    Destra: dati come tabella tipografica
│      Roè Volciano · 2 sale · parquet · h 5,50 m
│      10–14 appendimenti · 8 materassi · slackline · audio pro
│      Sede secondaria — Vestone, palestra scuola primaria
│
├─ 06  EVENTI
│    "Born to fly" 2024 / 2025 — competizione regionale
│    Formazione istruttori 2024/2025
│    Collaborazioni: Strabilio Festival (2023), Circ'onda (2022)
│    Timeline verticale con filetti sottili.
│
├─ 07  TEAM
│    Roster editoriale senza ritratti (nessuna foto finta).
│    Ogni membro come voce tipografica:
│      Nome in serif italic · ruolo in maiuscoletto · una riga
│      con la "particolarità" ripresa dal CV.
│    Elena Trombini, Matteo Dolcetti, Luisa Ribelli,
│    Romina Savioni, Irene Maioli, Silvia Federici.
│
├─ 08  CONTATTI / CTA
│    Sezione scura a tutta pagina. Frase serif grande:
│    "Vieni a volare con noi."
│    Email: segreteriaofficinadada@gmail.com
│    Tel: +39 327 327 6836 (Elena)
│    Sede: Roè Volciano (BS)
│
└─ Footer
     Marchio · © Officina Dadà A.S.D. · P.IVA/CF segnaposto ·
     credito "Fotografie · Pasotti David"
```

## Trattamento fotografico

- Uso delle 4 foto caricate come hero + galleria + reveal delle discipline.
- Import via Lovable Assets da `/mnt/user-uploads/` (nessun binario nel repo).
- Il logo (`dadà_logo.jpeg`) diventa marchio nav e footer, oltre a favicon.
- Grading caldo leggero + vignettatura sottile via CSS (nessuna ricodifica).
- Credito "Pasotti David" sempre presente in galleria e footer.

## Micro-interazioni

- Reveal a maschera sui titoli in scroll (clip-path dal basso).
- Fade dal nero su ogni immagine all'ingresso nel viewport.
- Hover sulle righe delle discipline: la riga si alza di 2px, si disegna un filetto sinistra→destra (400ms ease-out), l'immagine di accompagnamento fa crossfade.
- Numerali di sezione (`01`, `02`…) sticky nella colonna sinistra (solo desktop).
- La nav si assottiglia e prende un filetto dopo 80px di scroll.
- Cursore ad anello sottile su desktop per link/hover (disabilitato su touch).
- Tutte le animazioni rispettano `prefers-reduced-motion`.

## Responsive

- Mobile-first: colonna unica, numerali di sezione in linea, righe discipline impilate con foto sopra.
- Desktop ≥ 1024px: griglia editoriale a 12 colonne, rail sinistra sticky con numerali.
- Type fluida con `clamp()`; display hero da ~44px a ~180px.

## Accessibilità & SEO

- Landmark semantici (`header`, `main`, `section` con `aria-labelledby`, `footer`).
- Alt su tutte le immagini che descrivono la disciplina aerea.
- Contrasto AA sulla palette scura (bianco caldo su nero inchiostro conforme).
- Focus-visible in arancio brace.
- Un solo H1 ("Officina Dadà — Discipline aeree e arti circensi in Valsabbia").
- `head()` di rotta su `/`: title < 60 caratteri, meta description < 160, og:title/description, og:image sulla foto hero (URL assoluto asset), twitter:card summary_large_image, og:type website. JSON-LD `SportsActivityLocation` con indirizzo, telefono, email, foundingDate 2018.

## Implementazione tecnica

- Stack invariato: TanStack Start, Tailwind v4 tokens in `src/styles.css`, primitive shadcn già presenti.
- Sostituire `src/routes/index.tsx` con la nuova home (nessun sibling).
- Aggiungere i token della palette in `@theme inline` + `:root` (oklch), più `--font-display` (Fraunces) e `--font-body` (Inter Tight); caricamento font via `<link>` in `__root.tsx` — mai `@import` remoto.
- Aggiornare `head()` di `__root.tsx` al branding Officina Dadà e sostituire la favicon con il logo (rimuovere `public/favicon.ico` di default).
- Piccoli componenti presentazionali in `src/components/site/`:
  `SiteNav`, `Hero`, `Manifesto`, `Discipline`, `Gallery`, `Sede`, `Eventi`, `Team`, `Contatti`, `SiteFooter`, più un wrapper `Reveal` per il reveal a maschera e un `CursorRing` client-only.
- Animazioni con `motion/react` — leggere, gated su `prefers-reduced-motion`. Nessuna libreria pesante.
- Tutte le immagini via `lovable-assets create` con pointer JSON in `src/assets/*.asset.json`.
- Nessun backend in questa fase (nessun form, nessun DB).

## Fuori scope

- Invio form contatti / newsletter (mostrati email e telefono).
- CMS / area admin.
- Multilingua (solo italiano, coerente col materiale).
- Prenotazioni o pagamenti.

Pronto a costruire all'approvazione.
