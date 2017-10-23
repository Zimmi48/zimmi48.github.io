---
layout: post
title: Pistes pour un roman collaboratif
lang: fr
date: 2015-09-21 13:00:00 +0200
redirect_from: roman/
excerpt: Aujourd'hui les "solutions collaboratives" sont à la mode ainsi que "l'innovation ouverte" (et plus généralement ce qui est "ouvert"). Peut-on tout créer de manière collaborative ? Quand il s'agit de création artistique on est en droit d'en douter. Cependant on voit fleurir des initiatives s'engageant résolument dans cette direction.
---

![@Zimm_i48: Il est parfois frustrant de ne pas pouvoir contribuer à améliorer un roman comme on contribue à améliorer Wikipédia. @jjvie: Fais une pull request !](/images/pullrequest.png)

Aujourd'hui les "solutions collaboratives" sont à la mode ainsi que "l'innovation ouverte"
(et plus généralement ce qui est "ouvert").
Peut-on tout créer de manière collaborative ?
Quand il s'agit de création artistique on est en droit d'en douter.
Cependant on voit fleurir des initiatives s'engageant résolument dans cette direction.

Avec [Jules Zimmermann](https://fr.linkedin.com/pub/jules-zimmermann/98/7b5/4b0), nous nous sommes posés la question, voilà maintenant un an, de savoir
s'il était possible de créer un roman de manière entièrement collaborative (en excluant la
collaboration à petite échelle de deux ou trois aut.eur/rice.s ou encore la collaboration limitée,
où chacun.e écrit un chapitre).
Nous n'avons pas encore la réponse.

Nous ne sommes pas les premiers à nous poser cette question, ce qui laisse penser que si
une solution existe, elle n'est pas simple.

## Solutions pour une collaboration massive (non littéraire)

Lorsqu'on observe le monde de la création collaborative, via internet, on rencontre deux
modèles à succès. Tout d'abord il y a le logiciel libre, premier avatar dans l'histoire
moderne de "l'ouvert" et du "collaboratif". Le logiciel libre ne fournit pas un modèle
universel de collaboration, chaque projet a le sien propre et la plupart ont d'ailleurs
un modèle simple, celui où quelqu'un a tout fait dans son coin. Mais un certain modèle de
collaboration pour le logiciel libre a la côte. Ce modèle, c'est celui de Github.

Le modèle de Github se décrit rapidement comme ceci : une petite équipe gère un dépôt
ouvert contenant le code d'un logiciel libre. Des contribut.eur/rice.s extérieur.e.s soumettent
des rapports de bug ainsi que des "patchs". Sur Github, ces "patchs" prennent la forme
de "pull request" avec l'avantage qu'on peut très facilement observer les modifications
proposées et en discuter (c'est certainement la clé du succès de cette plateforme, le
principe de l'équipe cœur et des patchs lui étant antérieur).

L'autre modèle à succès de la collaboration massive, c'est celui de Wikipédia. Le principe
du wiki est le plus simple qui soit : quiconque peut, à loisir, modifier une page quelconque
de l'encyclopédie. Cependant, la clé du succès de ce modèle de collaboration réside
dans le fait que l'historique des modifications est sauvegardé et que toute modification
est réversible en un clic si elle s'avère inappropriée. Des modérat.eur/rice.s exercent donc un
contrôle a posteriori, à l'aide d'outils spécialisés leur permettant de voir les modifications
en temps réel. À cela on ajoutera que les pages les plus fréquemment vandalisées sont davantage
protégées en y restreignant les droits de modifications aux utilisat.eur/rice.s enregistré.e.s, tout
simplement.

Devant ces deux grands succès, on peut penser que l'une ou l'autre des solutions
se transposera bien au cas de la création littéraire. Aucune modification ne devrait même
être nécessaire, les deux permettant de travailler sur du texte (qu'est-ce qu'un code source
sinon du texte). Voyons ce que ça a donné.

Le modèle de Github a bien été appliqué à l'écriture collaborative.
À l'heure où j'écris ces lignes, [12 projets en rapport avec l'écriture sont mis en avant par Github](https://github.com/showcases/writing).
Sur ces projets, la plupart sont des tutoriels ou des manuels. Il s'avère que nous avons
donc là un bon modèle, non seulement pour collaborer sur du code, mais aussi sur des tutoriels
(de programmation soit dit en passant).
Un seul projet sur douze est un roman mais quand on observe [la page des contributions](https://github.com/JJ/hoborg/graphs/contributors),
on découvre le motif reconnaissable des projets reposant sur un seul homme :
le premier contributeur (c'est-à-dire l'auteur) a écrit 100 000 lignes. Le second
contributeur le plus prolifique a proposé deux modifications seulement, modifiant
10 lignes en tout.

On peut se dire que le modèle est le bon mais que l'outil est trop compliqué à utiliser
pour des écrivain.e.s non-programmeu.r/se.s (ce qui expliquerait pourquoi tous les tutoriels
ainsi écrits parlent de programmation). C'est le pari de [Penflip](https://www.penflip.com/),
une copie de Github destinée aux écrivain.e.s. Ça a l'air plutôt réussi mais ça n'a pas l'air
d'avoir donné lieu à une grande créativité jusqu'à présent.

Wikipédia étant un exemple réussi d'écriture collaborative, pourquoi ne pas faire un "wikiroman" ?
Nombreu.x/ses sont ce.ux/lles qui y ont pensé. Le plus médiatique exemple a été celui lancé avec des
roulements de tambours par la maison d'édition Penguins. Le projet, appelé "One million penguins",
a été confié à un groupe d'étudiant.e.s chargé.e.s de le superviser. Hélas, la communication autour
de ce projet a provoqué sa perte : les étudiant.e.s-édit.eur/rice.s ont été débordé.e.s par le
nombre de participant.e.s. De plus, en choisissant d'activer une modération "a priori", l'équipe a
tué l'idée géniale du wiki et s'est retrouvée avec le modèle précédent (celui de Github)
dans un outil inadapté.

## Solutions pour une collaboration restreinte

De l'autre côté du spectre des outils dits "collaboratifs" il y a Google Docs.
Google Docs est un outil génial lorsque l'on veut collaborer sur un document avec relativement
peu de monde. Il comporte deux modes principaux d'édition.

- Le mode Édition fonctionne sur le même principe que le wiki. On peut simplement
faire ses modifications dans le corps du texte. Comme ce n'est pas prévu pour une collaboration
massive, les outils pour contrôler l'historique des modifications et revenir à une version
précédente, bien qu'existant, ne sont pas aussi accessibles et évidents à utiliser.
- Le mode Suggestion est inspiré du mode Révision ou Suivi des modifications qui existait dans
Word depuis longtemps. Toute modification dans le corps du texte est traquée et marquée comme
telle. À cela s'ajoute la possibilité de lancer une discussion à partir d'un commentaire ou
d'une suggestion de modification.

Cette discussion en marge de la page, qui n'est rien d'autre que la note griffonnée depuis
toujours dans un livre rendue sociale, est un concept qui a aussi pris récemment son essor.
On la retrouve notamment chez Medium.com (chez qui les commentaires sont remplacés par
des "notes" qui flottent à côté de chaque paragraphe[^medium]). Cette fonctionnalité est
d'ailleurs mise en avant comme "le mécanisme central de collaboration sur Medium".

## Solution pour une collaboration massive (littéraire)

Il n'y a plus qu'un pas à faire pour proposer un outil, s'inspirant de tous ces modes de
collaboration mais différent, qui soit adapté à une collaboration massive sur un texte
littéraire (mais pas que).

On décrira très succinctement cet outil auquel on a donné le nom de commented.it (et dont
une version simplifiée se trouve sur la page de présentation du projet
[unkilodeplumes](https://unkilodeplumes.github.io)). Il
consiste à faire figurer en parallèle le texte et une colonne de commentaires. Ces
commentaires peuvent être associés à des propositions de modification (pendant des pull
requests de Github). Comme dans Google Docs, ces modifications sont clairement marquées
(suppressions barrées et surlignées de rouge, ajouts soulignés et surlignés de vert).
Mais contrairement à Google Docs où ces modifications apparaissent directement dans le
texte, il faut là cliquer pour les afficher. Ce choix permet la collaboration massive,
quand un Google Doc deviendrait surchargé avec toutes les propositions de modification,
d'aut.eur/rice.s différent.e.s, sans rapport les unes avec les autres. Comme sur Medium,
les discussions ont lieu par "blocs" de texte, et sont donc liées au contexte.
Enfin, on peut voter en faveur d'une modification.
Un.e adminstrat.eur/rice de la page peut ensuite "valider" les propositions les plus
populaires en les intégrant au texte.

## De là à l'écriture collaborative d'un roman...

C'était là notre défi initial et nous n'y sommes pas encore. Si nous pensons que notre
concept peut être utile dans ce but, il faudra noter que commented.it (que vous pouvez
aussi prononcer comment-edit) ne fournit pas de modèle pour toutes les étapes de la
création. Comme tous les autres outils dont j'ai parlé ici, il est bien adapté à
l'édition collaborative d'un texte. Qui se charge de l'écriture d'un texte initial ?

Dans le cas des logiciels libres, tutoriels ou pages d'encyclopédie, c'est une personne
seule qui commence le travail. Puis, des paragraphes sont ajoutés, ici et là.
Est-ce que ça marcherait pour un roman, dont l'écriture est traditionnellement beaucoup
plus linéaire? Il faut expérimenter pour savoir. Mais même cette étape initiale d'écriture,
nous aurions voulu la remplacer par un processus collaboratif, à savoir une "foire au
scenarii" puis une "foire aux textes", selon des modes et avec des outils qu'il reste à
inventer...

[^medium]: Pourquoi les notes de Medium sont différentes et comment bien les utiliser [[en anglais]](https://medium.com/about/why-medium-notes-are-different-and-how-to-use-them-well-5972c72b18f2).
