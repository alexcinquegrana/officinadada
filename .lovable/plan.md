# Ristrutturazione in multi-pagina + CTA di contatto

Obiettivo: ridurre la lunghezza percepita della home, portare l'utente ai contatti in un click, e aggiungere azioni dirette (Chiama, Contattaci, WhatsApp).

## Nuova struttura delle pagine

Ogni sezione della one-page diventa una route dedicata sotto `src/routes/`, con proprio `head()` (title, description, og:title/description). La home resta come pagina "vetrina" breve.

```text
/               → Home (Hero + estratto Manifesto + preview Discipline + CTA finale)
/manifesto      → Manifesto completo
/discipline     → Discipline (griglia completa)
/galleria       → Gallery (masonry + lightbox)
/sede           → Sede
/eventi         → Eventi
/team           → Team
/contatti       → Contatti (form + info + mappa/indirizzo)
/privacy        → (esistente)
/cookie         → (esistente)
```

La home diventa corta: Hero → breve Manifesto (2–3 righe) → 3 discipline in anteprima con link a `/discipline` → banda CTA "Vieni a provare" → footer. Da qualsiasi pagina, la navbar porta subito ai contatti.

## Navbar

`SiteNav` passa da anchor `#section` a `<Link to="/...">` TanStack Router con `activeProps`. Ordine:
Manifesto · Discipline · Galleria · Sede · Eventi · Team · **Contatti** (evidenziato, stile pill ember).

Sul mobile: stesso menù, con il pulsante **Contatti** in evidenza in cima e un blocco "Chiama · WhatsApp" sempre visibile in fondo al drawer.

## CTA globali

Due punti di contatto sempre a portata:

1. **Nella navbar (desktop e mobile drawer)**: pulsante "Contatti" (link a `/contatti`) in stile ember.
2. **Floating action buttons (mobile, in basso a destra)**:
   - Cerchio verde WhatsApp → `https://wa.me/393273276836?text=Ciao%20Officina%20Dad%C3%A0%2C%20vorrei%20info%20sui%20corsi`
   - Cerchio scuro "Chiama" (icona telefono) → `tel:+393273276836`
   Nascosti su desktop (dove il numero è già in navbar/footer). Icone `lucide-react` (`Phone`, `MessageCircle`) — WhatsApp con bg verde `#25D366`.
3. **Banda CTA** a fine home e fine ogni pagina interna: "Vieni a volare con noi" + due bottoni: `Scrivici` (→ `/contatti`) e `Chiama ora` (→ `tel:`).

## Modifiche ai file

- **Nuove route**: `src/routes/manifesto.tsx`, `discipline.tsx`, `galleria.tsx`, `sede.tsx`, `eventi.tsx`, `team.tsx`, `contatti.tsx`. Ognuna monta il componente esistente di `src/components/site/*` dentro un layout con `SiteNav` + `SiteFooter`, e definisce `head()` dedicato.
- **`src/routes/index.tsx`**: alleggerito — Hero, Manifesto (breve), Discipline (preview 3 card + link "Tutte le discipline"), CTA band, footer.
- **`src/components/site/SiteNav.tsx`**: sostituisce anchor con `<Link>`; aggiunge pulsante Contatti evidenziato e blocco chiamata/WhatsApp nel drawer mobile.
- **`src/components/site/SiteFooter.tsx`**: aggiorna colonna "Naviga" con i nuovi link route.
- **Nuovi componenti**:
  - `src/components/site/FloatingContacts.tsx` (FAB WhatsApp + Chiama, mobile-only, montato in `__root.tsx`).
  - `src/components/site/CtaBand.tsx` (banda finale riutilizzabile).
- **`src/routes/__root.tsx`**: monta `<FloatingContacts />` globalmente.
- **`src/components/site/Contatti.tsx`**: rimuove `id="contatti"` (ora è una route), invariato per il resto.
- I link interni con `href="/#..."` esistenti (footer, ecc.) diventano `<Link to="/manifesto">` ecc.

## Dettagli tecnici

- Numero: `+39 327 327 6836` → `tel:+393273276836`, WhatsApp `wa.me/393273276836`.
- Ogni `head()` di route: title unico (`Sezione — Officina Dadà`), description specifica, og:title/description; niente og:image sulle route interne (resta solo su `/`).
- `FloatingContacts`: `fixed bottom-5 right-5 z-40 md:hidden`, `aria-label` sui link, `rel="noopener"` su WhatsApp.
- Preload navbar: `preload="intent"` sui `<Link>` per transizioni immediate.
