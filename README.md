# Valmar Partner

App condivisa Marco / Valentina. Pubblica i cinque file della cartella principale con GitHub Pages. La cartella `supabase/` conserva il codice della funzione e le migrazioni già applicate al progetto Supabase; non contiene chiavi private.

## Notifiche su iPhone

1. Apri il sito in Safari e scegli **Condividi → Aggiungi alla schermata Home**.
2. Apri Valmar Partner dalla nuova icona e accedi al tuo account.
3. Premi **Attiva** nel riquadro delle notifiche e accetta il permesso iOS.
4. Ripeti sul telefono di Valentina, con il suo account.

Gli avvisi vanno alla persona assegnata: uno per una nuova attività assegnata da un altro membro; per le attività scadute, un avviso al controllo utile e poi al massimo uno ogni ora finché l'attività resta aperta. Il controllo avviene ogni cinque minuti. Le notifiche richiedono rete e permesso attivo sul telefono.

## Verifiche

Il database include RLS per le iscrizioni push. La funzione `partner-reminders` accetta solo chiamate con segreto custodito in Supabase Vault; i segreti privati non sono nel repository. La funzione di ripetizione crea l'occorrenza successiva quando una ricorrenza viene segnata completata.
