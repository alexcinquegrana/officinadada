# Bug review, separazione Corsi e conformità legale

## 1. Linee divisorie mancanti (bug confermato)

Verificato in browser: nelle liste con separatori, **la prima linea di ogni lista è invisibile in tema chiaro**. Motivo: la regola di override in `src/styles.css` per il tema chiaro usa un selettore fratello (`> :not([hidden]) ~ :not([hidden])`) che non colpisce mai il primo elemento, mentre Tailwind v4 disegna il bordo su `> :not(:last-child)`. Risultato misurato: primo elemento con bordo bianco al 10% (invisibile su fondo chiaro), gli altri con bordo scuro corretto.

Questo spiega esattamente i due casi segnalati:
- Discipline: manca la riga tra **Danza aerea** e **Circo in famiglia**
- Iscrizioni: manca la riga tra **01 Prenota la prova** e **02 Vieni in sala**

Lo stesso difetto si ripete in tutte le altre liste con separatori: dati tecnici della Sede, info iscrizioni, moduli da scaricare, eventi, orari.

**Fix**: correggere l'override in `styles.css` coprendo entrambi i selettori, così ogni separatore è visibile in chiaro e in scuro. Dopo il fix verifico a schermo tutte le liste del sito (Discipline, Iscrizioni, Sede, Eventi, Orari, Galleria, Footer) e controllo anche i bordi di sezione.

## 2. Separare Discipline e Corsi

Oggi la pagina `/discipline` contiene sia le discipline sia gli orari dei corsi.

- `/discipline` → solo le discipline (descrizioni + immagini)
- Nuova pagina `/corsi` → orari e corsi 2026/27 (componente `Orari`), con proprio titolo/description SEO
- Link "Corsi" aggiunto in navbar (desktop + mobile) e nel footer
- Rimando incrociato: da Discipline un link "Vedi orari e corsi", da Corsi un link alle discipline

## 3. Tema chiaro di default su smartphone

Il sito parte già in chiaro lato server, ma manca la dichiarazione `color-scheme`, per cui alcuni browser mobile (auto-dark di Chrome Android) possono forzare uno scurimento automatico.

- Dichiarare `color-scheme: light` su `html.light` e `dark` su `html.dark`
- Aggiungere il meta `color-scheme` e aggiornare `theme-color` in base al tema
- Verifica con emulazione mobile (iPhone/Android) che la prima apertura sia chiara

## 4. Conformità legale al 100%

**Dati fiscali** (nuovi, da inserire): sede legale Via Malpaga 1, 25070 Casto (BS); sede operativa Via A. Bellini 7, 25077 Roè Volciano (BS); C.F. 96040640177; P.IVA 04721180984; PEC elenatrombinidada@postecert.it; SDI KRRH6B9; email segreteriaofficinadada@gmail.com.

- **Footer**: blocco "Dati societari" con denominazione completa, entrambe le sedi, C.F., P.IVA, PEC (email e PEC cliccabili). Requisito art. 2250 c.c. / D.Lgs. 70/2003.
- **Privacy Policy**: titolare del trattamento completo di sede legale, C.F., P.IVA, PEC; sezione destinatari e fornitori (hosting, Google Fonts, OpenStreetMap, WhatsApp per i contatti); tempi di conservazione; assenza di decisioni automatizzate; diritti e reclamo al Garante. Aggiunta esplicita del trattamento dei dati dei minori (consenso del genitore) e delle foto/video del saggio.
- **Cookie Policy**: allineata alla realtà tecnica del sito. Oggi non si usa Google Maps ma un embed OpenStreetMap e i font sono caricati da Google Fonts: la policy verrà riscritta di conseguenza, con tabella chiara (nome, finalità, durata, titolare) e link ai fornitori.
- **Cookie banner**: oggi le scelte non bloccano nulla perché font e mappa si caricano comunque. Interventi:
  - la mappa OpenStreetMap viene caricata solo dopo il consenso, con placeholder e pulsante "Mostra la mappa" (che vale come consenso puntuale)
  - il banner ottiene il link "Preferenze cookie" per riaprirlo e revocare il consenso in qualsiasi momento, esposto anche nel footer
  - registrazione della data del consenso e scadenza a 6 mesi, come da linee guida del Garante
- **Contatti / SDI**: i dati di fatturazione (SDI, PEC) compaiono nella pagina Contatti in un blocco "Dati per la fatturazione".
- Aggiornamento della data "Ultimo aggiornamento" su entrambe le informative e dei dati anche nel tool MCP `get_organization_info`.

## 5. Altri fix emersi dalla review

- Titolo e descrizione del sito nel `__root` sono ancora quelli generici di default ("Officina dada", "Brand Story Weaver…") e finiscono nelle anteprime social: da sostituire con testi corretti dell'associazione.
- Anteprima social (`og:image`) punta a uno screenshot del preview Lovable: da sostituire con una foto reale del sito.
- Dati JSON-LD `SportsClub` (nome, indirizzo operativo, P.IVA, contatti) da aggiungere per la ricerca locale.
- Controllo generale di leggibilità in tema chiaro delle voci navbar (classi `text-paper/80`) e dei bordi del menu mobile.

## Note tecniche

File toccati: `src/styles.css` (separatori + color-scheme), `src/routes/__root.tsx` (meta, tema, JSON-LD), nuovo `src/routes/corsi.tsx`, `src/routes/discipline.tsx`, `SiteNav.tsx`, `SiteFooter.tsx`, `MapSection.tsx`, `CookieBanner.tsx`, `src/routes/privacy.tsx`, `src/routes/cookie.tsx`, `Contatti.tsx`, `src/lib/mcp/tools/get-organization-info.ts`.

Nota: i testi legali sono redatti in modo standard sui trattamenti realmente presenti nel sito; per la parte associativa (moduli soci, certificati medici, foto dei saggi) confermerai tu i tempi di conservazione se diversi da quelli indicati.
