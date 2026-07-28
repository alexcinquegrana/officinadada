# Piano — 4 interventi mirati

## 1. Logo: solo i nastri restano azzurri (niente più `invert` piatto)

Oggi il logo è `dada-logo.jpg` (bianco+nero+azzurro) mostrato con classe CSS `invert`, che ribalta anche l'azzurro dei nastri facendolo diventare arancione. Da rimuovere.

- Generare con `imagegen--edit_image` una **variante scura del logo** (`dada-logo-dark.png`, trasparente): sfondo trasparente, silhouette e testo "dadà / discipline artistiche" in **bianco**, **nastri mantenuti nell'azzurro originale del logo**.
- Il logo chiaro resta l'originale `dada-logo.jpg` invariato.
- Rimuovere la classe `invert` da `SiteNav`, `SiteFooter`, `Contatti`.

## 2. Toggle tema chiaro / scuro

- Creare `ThemeProvider` leggero (localStorage + classe `.light` su `<html>`, default scuro) — nessuna dipendenza aggiuntiva.
- In `src/styles.css` aggiungere un blocco `html.light { … }` che rimappa `--background` a paper, `--foreground` a ink, bordi/muted coerenti. Palette azzurra `--ember` invariata in entrambi.
- Nuovo componente `ThemeToggle` (icona luna/sole) accanto al pulsante "Contatti" nella navbar.
- Nuovo componente `Logo` che sceglie l'immagine in base al tema: chiaro → `dada-logo.jpg` originale, scuro → `dada-logo-dark.png`. Sostituisce le 3 `<img>` attuali in nav / footer / contatti.

## 3. Mappa in fondo alla home con pin sulla sede

- Nuovo componente `MapSection` che carica la Google Maps JS API in modo async con la chiave browser del connettore Google Maps (già linkato — `VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY`), centrata su **Via … Roè Volciano (BS)** con un `google.maps.Marker` sul luogo e stile scuro coerente col sito.
- Inserito in `src/routes/index.tsx` dopo la sezione "Saggio finale", prima del footer, con eyebrow "Dove siamo" e link "Apri in Google Maps".
- Se la chiave non è disponibile, fallback statico con indirizzo + link Maps (nessun errore visibile).

## 4. Cookie banner + armonizzazione Privacy / Cookie

- Nuovo `CookieBanner` (in `__root.tsx`) che appare in basso finché non c'è consenso in `localStorage` (`dada-cookie-consent`): due CTA — "Solo essenziali" e "Accetta tutti" — con link a `/cookie` e `/privacy`. Stile coerente (ink/paper, accent azzurro), rispetta il tema.
- **Armonizzazione contenuti**: riscrittura di `/privacy` e `/cookie` con stessa voce editoriale, stesse sezioni parallele (Titolare del trattamento, Dati raccolti, Finalità e basi giuridiche, Conservazione, Diritti, Contatti) e riferimenti coerenti (Officina Dadà A.S.D., segreteriaofficinadada@gmail.com, sede di Roè Volciano). La Cookie Policy elenca solo cookie tecnici + Google Maps + eventuale font Google, coerente col banner.

## File toccati

- **Creati**: `src/components/site/ThemeProvider.tsx`, `ThemeToggle.tsx`, `Logo.tsx`, `MapSection.tsx`, `CookieBanner.tsx`; asset `src/assets/dada-logo-dark.png.asset.json`.
- **Modificati**: `src/styles.css` (blocco `.light`), `src/routes/__root.tsx` (ThemeProvider + CookieBanner), `src/components/site/SiteNav.tsx` (Logo + ThemeToggle), `SiteFooter.tsx` + `Contatti.tsx` (Logo), `src/routes/index.tsx` (MapSection), `src/routes/privacy.tsx` + `src/routes/cookie.tsx` (contenuti armonizzati).

## Note tecniche

- Nessun `next-themes` — provider fatto in casa (~30 righe) per evitare i problemi già visti in passato.
- Google Maps: connettore già linkato al progetto, non serve azione dell'utente.
- Il logo scuro viene generato una sola volta come asset trasparente PNG → nessun filtro CSS che possa alterare l'azzurro dei nastri.
