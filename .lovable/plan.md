# Piano: pubblicazione su GitHub Pages con dominio gratuito

## Obiettivo
Portare il sito di Officina Dadà su GitHub Pages in modo che l'URL finale non contenga `lovable.app`. Useremo il dominio gratuito offerto da GitHub (`username.github.io/nome-repo`), oppure un dominio proprio se lo si desidera in futuro.

## Stato attuale verificato
- Il codice sorgente è attualmente su Lovable storage (`git.private.lovable-gcp.code.storage`), non su GitHub.
- Esiste già `.github/workflows/main.yml` con build e deploy su GitHub Pages.
- `vite.config.ts` ha un `base` path dinamico basato su `GITHUB_REPOSITORY`.
- Il sito è costruito con TanStack Start, che di default genera un server SSR; GitHub Pages richiede invece file HTML statici.
- Sono presenti MCP tools e server functions, che non funzioneranno su hosting statico.

## Passaggi previsti

### 1. Creare un account GitHub e un repository
- Se non lo si ha già, creare un account su https://github.com.
- Creare un repository pubblico con nome, ad esempio, `officinadada`.
- L'URL finale sarà `https://tuo-username.github.io/officinadada`.

### 2. Collegare il progetto Lovable a GitHub
- Nella chat di Lovable, aprire il menu **Plus (+)** in basso a sinistra → **GitHub** → **Connect project**.
- Autorizzare l'app GitHub di Lovable e selezionare il repository creato al passo 1.
- In alternativa, scaricare il codice e fare push manuale su GitHub.

### 3. Abilitare il prerendering statico
- Modificare `vite.config.ts` aggiungendo la configurazione di prerendering dentro `tanstackStart`.
- Opzioni da attivare: `enabled: true`, `autoStaticPathsDiscovery: true`, `crawlLinks: true`, `failOnError: true`.
- Verificare che `bun run build` generi file HTML statici in `./dist/client/` per ogni pagina (`/`, `/manifesto`, `/discipline`, ecc.).
- Se il wrapper `@lovable.dev/vite-tanstack-config` non espone direttamente le opzioni, valutare una configurazione Nitro per output statico o un post-build script.

### 4. Correggere il base path
- Per GitHub Pages sottocartella, il `base` deve essere `/nome-repo/`.
- La logica già presente in `vite.config.ts` usa `GITHUB_REPOSITORY` per impostarlo automaticamente durante il deploy.
- Se in futuro si userà un dominio proprio, impostare `base: "/"`.

### 5. Rimuovere o adattare le funzionalità non compatibili con hosting statico
- Le server functions e gli endpoint MCP non funzioneranno su GitHub Pages.
- Il form di contatto usa `mailto`, quindi continuerà a funzionare senza backend.
- Valutare se rimuovere le route MCP (`src/routes/[.mcp]/`, `src/routes/mcp.ts`) o lasciarle inerti.

### 6. Attivare GitHub Pages e verificare il deploy
- Andare su **Settings → Pages** del repository GitHub.
- Selezionare **GitHub Actions** come sorgente di deploy.
- Assicurarsi che il workflow abbia i permessi `pages: write` e `id-token: write` (già presenti).
- Fare push su `main` e attendere che il workflow completi build e deploy.
- Verificare che il sito sia raggiungibile all'URL `https://tuo-username.github.io/officinadada`.

### 7. Test e verifica finale
- Controllare che tutte le pagine si carichino senza errori 404.
- Verificare che immagini, CSS, JS e link interni funzionino correttamente con il base path.
- Testare la navigazione da telefono.

## Opzionale: dominio proprio in futuro
- Se si desidera un dominio come `officinadada.it`, acquistarlo da un registrar o da Lovable.
- In GitHub Pages, inserire il dominio nelle impostazioni del repo.
- Aggiungere un file `CNAME` con il dominio nella root dell'artifact.
- Configurare i record DNS A e TXT presso il provider di dominio.
- In quel caso, impostare `base: "/"` in `vite.config.ts`.

## Limitazioni da accettare
- L'URL gratuito conterrà `github.io` (es. `tuo-username.github.io/officinadada`).
- Sito puramente statico: niente backend, server functions, MCP in produzione.
- Per avere un dominio proprio è necessario acquistarlo separatamente.

## Risultato atteso
Sito live su GitHub Pages con un URL gratuito che non contiene `lovable.app`, pronto da mostrare al cliente.