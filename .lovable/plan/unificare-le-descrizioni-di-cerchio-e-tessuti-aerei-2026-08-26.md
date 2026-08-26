# Unificare le descrizioni di Cerchio e Tessuti aerei

## Problema
Le sezioni "Tessuti aerei" e "Cerchio aereo" mostrano le stesse descrizioni condivise (`Bambini · Junior` e `Adolescenti · Adulti`) ripetute due volte, una per ogni gruppo. Il risultato è una duplicazione visiva inutile.

## Soluzione
Unificare le descrizioni mostrandole una sola volta, sopra entrambi i gruppi, invece di ripeterle in ciascun blocco.

### Modifica su `src/components/site/Orari.tsx`
1. Rimuovere `sharedDescs` dai due gruppi "Tessuti aerei" e "Cerchio aereo".
2. Aggiungere un blocco descrittivo unico subito prima del primo gruppo (o tra il titolo generale e i gruppi), con le due descrizioni `Bambini · Junior` e `Adolescenti · Adulti` in griglia a due colonne — identica allo stile attuale.
3. Mantenere invariati i corsi, le immagini, il gruppo "Altri corsi" e le descrizioni specifiche di Flexibility / Level up / Creazione.

### Risultato visivo
```
I corsi dell'anno 2026/27
[intro]

Bambini · Junior          Adolescenti · Adulti
[desc shared]            [desc shared]

Tessuti aerei
[griglia corsi]

Cerchio aereo
[griglia corsi]

Altri corsi
[griglia corsi con desc specifiche]
```

## Ambito
Solo `src/components/site/Orari.tsx`. Nessun'altra sezione, stile, colore o componente viene toccato.
