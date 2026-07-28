# Piano: pubblicazione su GitHub Pages

## Obiettivo
Portare il sito su GitHub Pages all’URL `https://username.github.io/nome-repo`, eliminando completamente il sottodominio `.lovable.app` dalla URL vista dal cliente.

## Stato attuale verificato
- Esiste già `.github/workflows/main.yml` con build e deploy su GitHub Pages.
- Il sito è costruito con TanStack Start, un framework full-stack con SSR.
- GitHub Pages supporta solo siti statici (HTML/CSS/JS), non server-side rendering né server functions.

## Passaggi previsti

### 1. Verificare/adattare il build a GitHub Pages
- Eseguire `bun run build` e controllare che `./dist` contenga un `index.html` statico in radice.
- Se il build produce un server Nitro/Cloudflare invece di un sito statico, configurare TanStack Start per l’export statico (SSG).

### 2. Configurare il base path
- Aggiungere `base: '/nome-repo'` in `vite.config.ts` in modo che asset, immagini e route relative funzionino sotto il percorso del repository su GitHub Pages.

### 3. Attivare GitHub Pages dal repository
- Andare in Impostazioni → Pages del repo su GitHub.
- Selezionare **GitHub Actions** come sorgente di deploy.
- Verificare che il workflow `main.yml` abbia i permessi `pages: write` e `id-token: write` (già presenti).

### 4. Rimuovere ogni riferimento a Lovable
- Cercare nel codice URL `.lovable.app`, badge "Edit with Lovable", meta tag o testi che rimandino a Lovable.
- Sostituire eventuali riferimenti residui con contenuti propri del brand.

### 5. Gestire le funzionalità non supportate da GitHub Pages
- Le **server functions** e le **MCP tools** non funzioneranno in hosting statico.
- Il form di contatto attuale usa `mailto`, quindi continuerà a funzionare.
- Se in futuro servirà invio email reale o logica server, si valuterà un servizio esterno (es. Formspree, Netlify Forms, EmailJS).

### 6. Test e verifica finale
- Build in locale con il base path corretto.
- Verificare che immagini, CSS, JS e navigazione tra pagine funzionino.
- Controllare il deploy effettivo su GitHub Pages e l’assenza di errori 404.

## Limitazioni da accettare
- Sito puramente statico: niente backend, niente server functions, niente MCP in produzione.
- L’URL finale conterrà `github.io` (es. `username.github.io/officinadada`).

## Risultato atteso
Sito live su GitHub Pages, URL senza `.lovable.app`, pronto da mostrare al cliente.