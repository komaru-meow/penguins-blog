---
authors: pieroproietti
slug: way-to-alpine-reprise
title: "way to Alpine (reprise)"
lang: it
enableComments: true
---

import Translactions from '@site/src/components/Translactions';

<Translactions />

E' passato un mese, forse due dall'inizio dell'avventura con Alpine Linux visto che ho cominciato dopo metà giugno. 

## Punti di forza
Usare eggs con Alpine linux può essere veramente un piacere, rimasterizzare è un soffio, crearsi la propria versione con XFCE, plasma, gnome, etc veloce (vi sono i costumi del wardrobe di eggs: colibri ed albatros e funzionano egregiamente).

Per quanto riguarda l'hardware non ho modo di fare test, lavoro esclusivamente su macchine virtuali, ad ogni buon conto c'è un pacchetto `linux-firmware` che può essere aggiunto con `doas apk add linux-firware` e che dovrebbe "renderla" compatibile con i maggiori hardware presenti. Niente nvidia naturalmente, ma meglio così.

Dal mio punto di vista di sviluppatore di penguins-eggs, non ho voluto includere questo pacchetto perchè pesa 700 MB e rende quindi Alpine Linux meno leggera da rimasterizzare anche se - a parità di configurazione - più leggera  di Arch - anche aggiungendo i firmware - e pesante la metà di Debian senza includere gli stessi.

## Ostacoli

Da una parte è stata una esperienza bellissima ed alcune cose sono venute più facili del previsto: costruire un colibri per sviluppare penguins-eggs direttamente su Alpine, constatare le dimensioni minime della distro - con ovvie conseguenze sul debug, etc.

D'altra parte ci sono alcuni scogli che mio malgrado ancora non riesco a superare:
* non ho ancora trovato il modo per avviare la ISO senza andare in recovery shell per montare overlayfs. Il risultato è aggirabile tramine lo script sidecar.sh, ma per l'utente finale e pure per me medesimo è una grande scocciatura.
* ancora peggio con [aports](https://gitlab.alpinelinux.org/alpine/aports). Sono al terzo tentativo di effettuare il [merge](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/70933) dal mio [fork](https://gitlab.alpinelinux.org/pieroproietti/aports), per il momento ancora non se parla e, francamente essere bloccato così, dopo tanto impegno nello sviluppo, nel porting di eggs e nel costruire il pacchetto è, come dire: un pò "pesante"; (*) vedi nota
* calamares, per qualche ragione - probabilmente mancanza di librerie - è presente sino alla version 3.18-8, ma non nella versione corrente 3.20-2  e neppure in edge.
.
## Conclusioni
A mio avviso penguins-eggs potrebbe essere lo strumento per portare Alpine Linux verso i desktop. 

Capisco che attualmente tutti ci stiamo allontando dal desktop per andare su dispositivi touch ed Alpine da questo lato è ben fornita con [PostmarketOS](https://postmarketos.org/), però è sempre una possibilità e, comunque lo sviluppo avviene ancora su desktop.

Inoltre per un esercito di "smanettoni" può essere sorprendente far girare le ultime versioni dei desktop con dimensioni e pretese pari a metà o meno di quanto previsto da altre distribuzioni.

Ad esempio, la mia colibri, su [Arch](https://sourceforge.net/projects/penguins-eggs/files/ISOS/arch/) misura: 1,8 GB, su [Debian boowwork](https://sourceforge.net/projects/penguins-eggs/files/ISOS/debian/bookworm/amd64/) è di 1.3 GB menre la versione [Alpine](https://sourceforge.net/projects/penguins-eggs/files/ISOS/alpine/) è di solo 743 KB.

La foto sotto è una versione di Albatros costruita utilizzando il wardrobe di eggs su un sistema Alpine Linux... i686! Il peso? Circa 1,2 GB.

![](/images/albatros.png)

(*) Nota: Se qualcuno è pratico di git rebase, squash con git, etc magari mi può dare una mano. Non mi sento completamente a digiuno del resto, ma non riesco a capire il problema.

