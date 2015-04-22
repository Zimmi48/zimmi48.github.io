---
layout: post
title: "Un premier pas vers la sécurité : vérifiez ma signature"
lang: fr
draft: true
---

Le mail est un système de communication qui [existait déjà aux tout débuts
d'Internet](https://fr.wikipedia.org/wiki/Courrier_%C3%A9lectronique#Origines)
et qui est massivement utilisé. Cependant, il est beaucoup moins sûr que les
messages privés sur Facebook, dans le chat de Google, ou encore ceux
envoyés avec des applications telles que What's app. Heureusement, on peut
prendre des mesures pour en améliorer la sécurité.

La plus grande vulnérabilité est [l'absence de garantie que l'expéditeur est bien
celui indiqué](https://en.wikipedia.org/wiki/Email_spoofing). Exactement comme
quand vous recevez une lettre par la Poste d'ailleurs, à moins que vous ne
reconnaissiez l'écriture. La seconde vulnérabilité c'est que les mails sont a priori
visibles par les acteurs qui les transmettent comme les cartes postales peuvent
êtres lues par les facteurs. 

Heureusement, il existe des mesures pour sécuriser ses mails. Ces techniques
sont [presque aussi vieilles](https://fr.wikipedia.org/wiki/Pretty_Good_Privacy#Origine)
que les mails eux-mêmes mais elles deviennent de plus en plus simples à
mettre en place.

Dans ce billet, je vous propose de commencer très doucement : vous allez
apprendre à vérifier que les mails que je vous envoie ont bien été écrit par moi.
Ainsi, si un jour vous recevez un mail de moi vous disant que je suis coincé en
Grèce et qu'il faut que vous me fassiez un virement sur un compte à l'étranger
pour m'aider, il vous sera alors très simple de contrôler si oui ou non, je suis
bien à l'origine du message. 

##Instructions si vous utilisez un webmail

- Installez l'extension Mailvelope depuis
[le site officiel](https://www.mailvelope.com/).
- Une fois l'installation terminée, une icône de cadenas est apparue dans votre
navigateur. Cliquez dessus puis sur Options.
- Cliquez sur Importer les clés.
- Téléchargez [ce fichier] qui contient ma clé publique puis sélectionnez la
depuis l'interface de Mailvelope et validez en cliquant sur Importer. 
- Ouvrez votre webmail. Si c'est autre chose que Gmail, Live ou Yahoo, il vous
faudra probablement commencer par dire à Mailvelope de le reconnaître
(en deux clics : depuis l'onglet de votre webmail, cliquez sur le cadenas de
Mailvelope puis sur Ajouter) et éventuellement relancer votre navigateur.
- Cherchez un vieil e-mail signé de moi. Les mails signés sont facilement
identifiables car ils commencent par la ligne :

````
-----BEGIN PGP SIGNED MESSAGE----- 
````

Normalement, la seconde partie du message (la signature) est désormais
recouverte d'un cachet. En cliquant dessus, la signature est vérifiée !

Désormais, vous pourrez facilement vérifier la signature des nouveaux mails
que je vous envoie :)

###Les cas problématiques

Mailvelope a été conçu pour rendre facile l'utilisation d'une technologie
complexe. Hélas, les webmails ne lui rendent pas toujours la tâche facile.

####Le problème PGP/MIME

Il existe deux types de signatures : dans le corps du message ou en pièce
jointe. Mailvelope ne supporte que le premier type car il ne peut pas ouvrir
vos pièces jointes. Or le second type est assez répandu. Dans mon cas, je fais
attention d'envoyer des signatures du premier type le plus souvent possible.

Mais pour pouvoir signer des pièces jointes, seule la seconde solution
fonctionne. Dans ce cas, vous ne pourrez pas vérifier la signature avec
Mailvelope. 

####Des webmails trop malins

Lorsque vous incluez le texte des messages précédents dans votre réponse
(ce qui est le comportement de la plupart des utilisateurs), certains webmails
tels que Gmail décident de masquer cette partie du mail. Le problème c'est que
ce texte faisait intégralement partie du message et le masquer peut mener
Mailvelope à être incapable de vérifier la signature, voire à penser que cette
dernière est incorrecte.

De même, les messages avec du formatage sophistiqué (gras, italique, gros
texte, tableaux) sont difficilement compatibles avec les signatures.

Ayez donc conscience que ce genre d'erreur peut se produire, tout en
restant méfiant vis à vis des messages dont vous n'avez pas pu vérifier la
signature (surtout s'ils vous demandent de faire une action risquée comme
un transfert d'argent).

Dans mon cas, je fais attention à envoyer du texte non formaté et ne pas inclure
les messages précédents dans mes réponses pour ne pas créer ces problèmes
mais tout le monde ne fait pas comme moi.

##Instructions si vous utilisez Thunderbird

TODO

##Aller plus loin

Si vous avez lu ce post jusqu'au bout, vous êtes désormais capables de vérifier
la signature des mails que je vous envoie. Vous pourrez aussi facilement
vérifier la signature d'autres personnes (à supposer que ces personnes signent
leurs mails) en leur demandant leur clé publique. 

Si vous souhaitez à votre tour signer vos mails, dites-le moi et je serai ravi
d'écrire une suite à ce billet pour vous expliquer comment procéder.

##En coulisses

TODO
