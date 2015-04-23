---
layout: post
title: "Un premier pas vers la sécurité : vérifiez ma signature"
lang: fr
draft: true
---

Le mail est un système de communication qui [existait déjà aux tout débuts
d'Internet](https://fr.wikipedia.org/wiki/Courrier_%C3%A9lectronique#Origines)
et qui est massivement utilisé. Cependant, il est beaucoup moins sûr que les
messages privés sur Facebook, le chat de Google, ou encore 
les applications telles que What's app[^chats]. Heureusement, on peut
prendre des mesures pour en améliorer la sécurité.

La plus grande vulnérabilité est [l'absence de garantie que l'expéditeur/trice est bien
celui/celle indiqué-e](https://en.wikipedia.org/wiki/Email_spoofing). Exactement comme
quand vous recevez une lettre par la Poste d'ailleurs, à moins que vous ne
reconnaissiez l'écriture. La seconde vulnérabilité c'est que les mails sont a priori
visibles par les acteurs qui les transmettent comme les cartes postales peuvent
êtres lues par les facteurs. 

Heureusement, il existe des mesures pour sécuriser ses mails. Ces techniques
sont [presque aussi vieilles](https://fr.wikipedia.org/wiki/Pretty_Good_Privacy#Origine)
que les mails eux-mêmes mais elles deviennent de plus en plus simples à
mettre en place.

Dans ce billet, je vous propose de commencer très doucement : vous allez
apprendre à vérifier que les mails que je vous envoie ont bien été écrits par moi.
Ainsi, si un jour vous recevez un mail de moi vous disant que je suis coincé en
Grèce et qu'il faut que vous me fassiez un virement sur un compte à l'étranger
pour m'aider, il vous sera alors très simple de contrôler si oui ou non, je suis
bien à l'origine du message. 

##Instructions si vous utilisez un webmail

(Si vous n'utilisez pas un webmail, [sautez cette section](#instructions-si-vous-utilisez-thunderbird).)

- Installez l'extension Mailvelope depuis
[le site officiel](https://www.mailvelope.com/).
- Une fois l'installation terminée, une icône de cadenas est apparue dans votre
navigateur. Cliquez dessus puis sur Options.
- Cliquez sur Importer les clés.
- Téléchargez [ce fichier](/zimmermann.asc)
qui contient ma clé publique puis sélectionnez-la
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

Mais pour pouvoir signer des pièces jointes[^jointe], seule la seconde solution
fonctionne. Dans ce cas, vous ne pourrez pas vérifier la signature avec
Mailvelope. 

####Des webmails trop malins

Lorsque vous incluez le texte des messages précédents dans votre réponse
(ce qui est le comportement de la plupart des utilisateurs/trices), certains webmails
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

(Si vous n'utilisez pas Thunderbird, [sautez cette section](#instructions-si-vous-avez-saut-les-deux-sections-prcdentes).)

Vous utilisez Thunderbird ? C'est bien :) La procédure d'installation va être un
chouïa plus compliquée mais dans le futur, votre vie s'en trouvera simplifiée...

- Commencez par installer GPG. Pour Windows, c'est [ici](http://www.gpg4win.org/download.html)
et pour Linux, vous n'avez probablement rien à faire car le logiciel a de grandes
chances d'être déjà installé.
- Dans le menu de Thunderbird, cliquez sur Modules complémentaires (peut se cacher
dans le menu Outils dans certaines versions de Thunderbird).
- Dans la barre de recherche tapez "enigmail" et installez le module correspondant.
- Redémarrez Thunderbird comme suggéré.
- Au redémarrage, l'assistant de configuration d'Enigmail se lance. Cliquez sur
Annuler puis Fermer.
On n'aura pas besoin de lui, tout est déjà configuré comme on veut.
- Cherchez un vieux mail signé que je vous ai envoyé. Vous reconnaitrez facilement
les mails signés : un bandeau "Enigmail" apparait en haut de ces derniers.

Au début, le bandeau devrait être jaune et indiquer "Signature non vérifiée".
Par ailleurs, il devrait comporter un bouton Importer la clé. Cliquez sur ce
bouton puis sur OK (deux fois). Le bandeau est devenu bleu-vert et indique
désormais "Signature correcte de ..." probablement précédé de "NON CERTIFIÉE".

Je vous expliquerai ce que veut dire "NON CERTIFIÉE" un autre jour. L'important
est que la signature soit correcte. Vous pouvez d'ailleurs la vérifier en un clin
d'oeil car si elle n'était pas correcte, le bandeau serait rouge.

Vous n'aurez plus jamais besoin d'importer ma clé. En revanche, vous pourrez
importer aussi facilement la clé de la plupart de vos autres contacts qui signent
eux-aussi leurs messages.

##Instructions si vous avez sauté les deux sections précédentes

Si vous n'utilisez ni Thunderbird, ni un webmail, vous avez deux solutions :

1. Débrouillez-vous.
2. Installez Thunderbird et [recommencez](#instructions-si-vous-utilisez-thunderbird).

##Aller plus loin

Si vous avez lu ce post jusqu'au bout, vous êtes désormais capables de vérifier
la signature des mails que je vous envoie. Vous pourrez aussi facilement
vérifier la signature d'autres personnes (à supposer que ces personnes signent
leurs mails) en leur demandant leur clé publique. 

Si vous souhaitez à votre tour signer vos mails, dites-le moi et je serai ravi
d'écrire une suite à ce billet pour vous expliquer comment procéder.

##En coulisses

La signature d'un message ne vous garantit pas seulement l'origine du destinataire.
C'est un cachet qui vous assure que le message que vous lisez n'a pas été modifié.

Pour garantir qu'un document n'a pas été modifié, on utilise des [_fonctions à sens
unique_](http://fr.wikipedia.org/wiki/Fonction_%C3%A0_sens_unique)
qui sont des fonctions mathématiques compliquées associant à tout texte de
départ une courte "empreinte" (quasiment) unique. Il est concrètement impossible de
reconstruire un texte à partir de son empreinte, le calcul ne peut se faire que
dans l'autre sens : c'est pour ça que ces fonctions sont "à sens unique".

Ces fonctions sont bien utiles pour d'autres applications : par exemple établir
une antériorité. Vous publiez uniquement l'empreinte d'un texte détaillant votre
découverte. Le jour où vous avez besoin de prouver que vous aviez fait cette
découverte à telle date, vous révélez le contenu du texte et tout le monde peut
alors calculer à nouveau son empreinte et constater qu'il s'agit bien de la même.
En revanche, si vous ne changez ne serait-ce qu'une virgule au texte de départ,
l'empreinte n'aura plus aucun rapport.

Dans le cas qui nous intéresse en revanche, ça ne suffit pas. Comment transmettre
l'empreinte du message de façon sûre et en garantir l'origine ?

La solution repose sur la cryptographie dite
[asymétrique](http://fr.wikipedia.org/wiki/Cryptographie_asym%C3%A9trique) :
l'expéditeur/trice dispose de deux clés qui
sont liées entre elles : l'une est dite privée et seul-e l'expéditeur/trice en
dispose. L'autre est dite publique et est distribuée le plus largement possible.

La clé privée permet de traduire l'empreinte du message en signature (le texte
incompréhensible que vous voyez en bas du message). Quant à la clé publique,
elle permet de traduire la signature en empreinte. Vérifier une signature consiste
alors à comparer l'empreinte du message (facilement calculable)
avec le résultat obtenu en déchiffrant la signature.
Les deux doivent se correspondre exactement pour que la signature soit vérifiée.

Pour en savoir plus :
["Signature numérique" sur Wikipédia](https://fr.wikipedia.org/wiki/Signature_num%C3%A9rique).

[^chats]: Ces services contrôlent le transit du message d'un bout à l'autre de la chaîne. Ils sont donc en mesure de garantir l'origine d'un message et sont les seuls à pouvoir lire son contenu.

[^jointe]: Pourquoi signer aussi les pièces jointes? Tout simplement pour se garantir contre le cas (très improbable) où quelqu'un intercepterait le message et remplacerait les pièces jointes. Imaginez par exemple qu'un pirate remplace votre RIB par le sien ! Si on ne souhaite pas signer les pièces jointes mais seulement le corps du message, la solution consiste à écrire les informations les plus importantes directement dans le message dont l'intégrité sera garantie quant à elle.
