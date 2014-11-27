---
layout: post
title: "La licence GPL est adaptée à un modèle commercial, certes, mais pas n'importe lequel"
date: 2014-11-27 16:00:00 +0200
lang: fr
excerpt: Dans le monde du logiciel libre, on trouve une foultitude de licences. Choisir la bonne, lorsqu'on commence un nouveau projet n'est pas une tâche évidente. La première recommandation est d'utiliser une licence largement connue et diffusée, car plus solide juridiquement. La licence la plus utilisée historiquement est la GPL. Cependant, cela ne veut pas nécessairement dire que ce soit le bon choix pour tout type de projet.
redirect_from: 7fNJrJ
---

Dans le monde du logiciel libre, on trouve une foultitude de licences[^licences].
Choisir la bonne, lorsqu'on commence un nouveau projet n'est pas une tâche évidente.
La première recommandation est d'utiliser une licence largement connue et diffusée, car plus solide juridiquement.
La licence la plus utilisée historiquement est la GPL[^preponderance].
Cependant, cela ne veut pas nécessairement dire que ce soit le bon choix pour tout type de projet.

La licence GPL a été inventée par des gens et pour des gens qui pensent que tous les logiciels devraient être des logiciels libres[^philosophie].
Ne l'utilisez pas si vous n'êtes pas d'accord avec cette philosophie&nbsp;!

Si vous êtes d'accord avec cette philosophie, ayez conscience que l'usage de cette licence rend très compliquée
l'utilisation de bibliothèques propriétaires (ou incompatibles avec la GPL) dans les programmes que vous développez[^bibliotheques-proprietaires].

Ce que je trouve stupide par dessus tout, ce sont les entreprises qui créent deux versions d'un logiciel :
une version de base libre et gratuite sous licence GPL et une version améliorée, payante et non-libre (propriétaire).
Pour pouvoir vendre ensuite la version fermée de leur programme et ne pas en dévoiler le code, ils ont besoin de posséder le copyright de l'ensemble.
En particulier, l'intégralité du code sous GPL doit leur appartenir, de sorte que la GPL ne s'applique pas à eux-mêmes.

Ces entreprises font donc signer des contrats (dits *contributor license agreement*) à tous les contributeurs dont ils intègrent les modifications.
Il faut avoir conscience, lorsque vous contribuez à un logiciel sous GPL, géré par une entreprise qui exige que vous lui cédiez vos droits
que vous êtes en train de briser vous aussi la philosophie selon laquelle tout logiciel devrait être libre[^cession-copyright].

Ce ne sera pas le cas par contre si vous cédez vos droits à une organisation en laquelle vous avez confiance, telle que la Free Software Foundation.
Les associations qui choisissent de centraliser le copyright le font souvent afin de simplifier la gestion des procès[^centraliser-copyright].

Notez de plus que renoncer à ses droits d'auteur n'est pas une chose anodine.
Selon le type de contrat que vous signez avec l'organisation gestionnaire du logiciel auquel vous contribuez,
soit vous accordez à cette dernière une licence définitive, gratuite et non-exclusive d'utilisation et d'exploitation de votre code
(pour qu'ils puissent le revendre au sein d'un logiciel fermé), soit vous leur cédez votre copyright.
Dans ce second cas, vous n'êtes plus propriétaire de votre code et
c'est uniquement parce que l'entreprise qui en est désormais propriétaire l'a publié sous GPL que vous continuez à pouvoir l'utiliser.
Si dans le futur, vous choisissez de réutiliser votre code dans un logiciel fermé ou sous une licence différente,
vous enfreindrez les termes de la GPL et vous serez dans l'illégalité.
C'est pourquoi je vous encourage à ne jamais accepter de céder purement et simplement votre copyright
à moins que vous soyez certain que tous les logiciels que vous produirez dans le futur seront aussi sous la même licence.
Méfiez-vous, à ce propos, des incompatibilités entre les versions des GPL[^incompatibilites].

Heureusement, il semblerait que l'accord que demande la FSF à ses contributeurs inclue une clause stipulant
que ceux-ci peuvent continuer à utiliser leur travail comme bon leur semble[^fsf-cla].
Un autre exemple est celui de Canonical, l'entreprise qui édite Ubuntu, un système d'exploitation basé sur Linux.
Elle demandait par le passé que les contributeurs lui cèdent leur copyright
mais l'accord qu'elle leur demande désormais est beaucoup plus respectueux de leurs droits
et garantit que leur code ne sera pas utilisé dans des programmes fermés[^ubuntu].

Moralement, les entreprises qui veulent développer deux versions (une libre, une fermée) de leur logiciel ne devraient pas utiliser la GPL.

Juridiquement, aussi, elles feraient mieux de ne pas l'utiliser.
Si elles choisissent cette licence, c'est qu'elles se disent
que cela va les protéger des concurrents qui produiraient un logiciel fermé en partie basé sur leur code source.
C'est une crainte que n'ont que les petites entreprises
(les plus grosses entreprises - Adobe, Apache, Apple, Google, Mozilla, Sun
- utilisent souvent des licences plus permissives telles que la licence Apache ou la MPL 2.0 ;
ou alors, comme RedHat ou Canonical, ne produisent que des logiciels libres[^business]).
Cependant, il faudrait que ces petites entreprises craintives réalisent les difficultés qu'elles se créent en s'engageant dans cette voie !

D'abord le contrat qu'elles font signer à leurs contributeurs ne sera certainement pas aussi peaufiné que les licences libres les plus courantes
(et pourrait s'avérer caduque lors d'un procès).

Deuxièmement, en utilisant la GPL, ces entreprises se compliquent la vie si elles souhaitent utiliser des bibliothèques propriétaires,
pour des raisons philosophiques qui leur échappent.

Troisièmement, ces entreprises ne peuvent pas du tout utiliser des bibliothèques libres sous GPL
car celles-ci seraient incompatibles avec la version fermée de leur programme.

Enfin mais surtout, ces entreprises doivent contrôler que les contributions extérieures sont effectivement complètement nouvelles
et qu'elles n'embarquent pas du code sous licence libre GPL d'une autre source.
En effet, dans ce cas-là, le contributeur ne possède pas le copyright sur ces lignes de code de source extérieure.
Par conséquent, même en signant un accord quelconque, il ne peut pas légalement céder les droits dessus.
Je suis sûr que la plupart des entreprises qui fonctionnent sur ce modèle n'effectuent jamais ces vérifications car elles n'en ont pas les moyens. 

En pratique, la conséquence c'est que beaucoup de logiciels libres ou non libres enfreignent la loi de manière notable ou anecdotique[^infractions].
Il ne faut pas encourager cela car cela met en danger le monde du logiciel libre dans son ensemble. 

(Note : dans le cas d'un logiciel destiné à tourner sur des serveurs distants
et être utilisé via un navigateur plutôt que d'être installé sur des machines individuelles[^saas],
la GPL n'a que peu d'intérêt.
Tout ce que j'ai dit s'applique également à la licence AGPL[^agpl], plus adaptée à ce type d'usage.

Je trouve formidable que des entreprises souhaitent contribuer au libre tout en faisant des profits.
Je comprends que pour certaines, cela implique de ne partager qu'une partie de leur code seulement
(ou alors qu'elles veulent se garder des portes ouvertes si demain elles décidaient de repasser à un modèle fermé).
Mais je leur déconseille avec force d'utiliser alors le système répandu GPL + accord avec les contributeurs.

Je leur conseille plutôt d'utiliser des licences qui ont été pensées, notamment, pour elles.
Pour faire simple, le choix se résume à une alternative entre la licence Apache et la licence MPL 2.0.

La licence Apache est utilisée massivement par Google[^android] pour tous ses projets libres (tels qu'Android, Chromium et Chromium OS).
Elle permet d'intégrer ces projets avec des extensions propriétaires,
ce qui donne les nombreuses versions "fabricant" d'Android, ainsi que Chrome et Chrome OS.
Cette licence n'exige pas que les modifications du programme soient partagées
mais une entreprise comme Google n'a rien à craindre car elle sait qu'elle disposera toujours de la meilleure version
même si des "passagers clandestins" refusent de participer à l'effort collectif.

Pour les plus petites entreprises, je recommande plutôt la licence MPL 2.0[^mpl], celle du navigateur Firefox.
En effet, c'est une licence dite *weak copyleft*.
Elle permet l'intégration dans des logiciels propriétaires, mais toutes les modifications apportées aux fichiers d'origine doivent être partagées.
Cela permet de se protéger contre les profiteurs les plus immoraux tout en laissant la place pour des extensions payantes.
Bien entendu, il ne s'agit pas de nier que des concurrents aussi pourront proposer des extensions payantes.

Deux licences que je n'ai pas citées et qui sont proches de la licence Apache et de la MPL 2.0 sont la licence MIT et la licence LGPL.
Celles-ci sont aussi très intéressantes pour certains projets mais probablement moins adaptées à des entreprises.

La licence MIT est similaire à la licence Apache mais cette dernière intègre en plus des mesures de protection contre les brevets logiciels
(problème qui ne nous touche pas encore en Europe mais ça pourrait arriver bientôt
- l'Office Européen des Brevet à commencé à enregistrer des brevets logiciels - et si vous avez des ambitions,
vous ne souhaitez probablement pas vous limiter à l'Europe pour toujours
- aux États-Unis et dans la majorité du reste du monde le problème des brevets et réel).
De telles mesures sont présentes dans toutes les grandes licences modernes (licence Apache, MPL 2.0, LGPL v3, GPL v3, AGPL v3).

La licence LGPL est proche de la MPL 2.0 sur le plan pratique (quoiqu'un peu plus tordue[^lgpl]),
mais très différente au point de vue philosophique.
La licence LGPL a été conçue par et pour des gens qui pensent que tout logiciel devrait être libre
mais qui avaient conscience que, pour gagner le combat, il serait préalablement intéressant de créer des bibliothèques
que tout le monde utilise y compris les logiciels fermés[^bibliotheques].
Ce pari est réussi car un grand nombre de bibliothèques standards sont aujourd'hui des bibliothèques libres
si bien qu'on peut affirmer sans crainte de se tromper que le logiciel libre est partout[^javascript].

Vous devriez aussi savoir que les conditions d'utilisation de l'Apple Store contredisent
les principes essentiels des licences libres GPL et LGPL[^apple].
Bien entendu cela devrait être une raison suffisante pour boycotter Apple.
Cependant, si votre activité économique implique de distribuer des applications mobiles,
vous aurez du mal à convaincre tous vos utilisateurs d'abandonner leur iPhone.
Vous feriez donc bien d'envisager (tant qu'Apple maintient sa politique liberticide)
d'utiliser des licences plus laxistes (pour une fois je trouve ce terme justifié)
pour tous vos programmes pouvant être intégrés à des applications mobiles.

**Remarque finale :** Il n'est pas du tout absurde pour une entreprise d'avoir un *business model* basé sur la GPL.
Si vous souhaitez suivre cette voie, plutôt que de maintenir deux versions de votre logiciel,
vous devriez tout publier sous GPL et suivre l'exemple de RedHat pour faire des profits.
À savoir, faire payer à vos clients non pas le logiciel lui-même mais la garantie et l'assistance.

Une autre manière de faire du business avec la GPL est celle qui consiste à vendre des exceptions[^exceptions].
Cette méthode consiste à maintenir une unique version du logiciel
et à la distribuer à la fois sous licence GPL et sous licence propriétaire (pour des clients souhaitant éviter les contraintes de la GPL).
En revanche, elle n'est pas idéale en ce qu'elle souffre de la plupart des problèmes que j'ai décrits dans cet article.

[^licences]: La Free Software Foundation, qui est à l'origine de la définition du logiciel libre, maintient une [liste des licences libres](https://www.gnu.org/licenses/license-list.fr.html) et de leurs avantages et inconvénients respectifs. Notez que les descriptions sont évidemment partiales puisque la FSF défend une certaine philosophie du libre et ses propres licences.

[^preponderance]: Sur [cette page Wikipédia](http://fr.wikipedia.org/wiki/Licence_publique_g%C3%A9n%C3%A9rale_GNU#Principe_de_la_licence_GPL) figurent quelques statistiques d'utilisation de la licence GPL en 2004. Cet article [[en anglais](http://redmonk.com/dberkholz/2013/04/02/quantifying-the-shift-toward-permissive-licensing/)] décrit sur un temps plus long la répartition des usages entre les licences de copyleft (essentiellement la GPL) et les licences permissives. Autant l'une comme l'autre des références présentent cependant un biais qui est le choix d'une base de donnée de logiciels libres particulière. Or, selon les communautés, les usages peuvent varier.

[^philosophie]: La Free Software Foundation, qui est à l'origine des licences GPL, [explique sa philosophie sur cette page](https://www.gnu.org/philosophy/free-sw.html).

[^bibliotheques-proprietaires]: [Description de la procédure à suivre](http://www.gnu.org/licenses/gpl-faq.html#GPLIncompatibleLibs) pour l'utilisation de bibliothèques propriétaires dans un logiciel sous licence GPL.

[^cession-copyright]: Richard Stallman discute de l'opportunité de céder son copyright à une entreprise. Les cas où c'est, selon lui, moralement acceptable et les cas où cela ne l'est pas [[en anglais](https://www.fsf.org/blogs/rms/assigning-copyright)].

[^centraliser-copyright]: [Justification de la Free Software Foundation](http://www.gnu.org/licenses/why-assign.html) sur la centralisation du copyright de leurs logiciels.

[^incompatibilites]: Voir les paragraphes 3 et 4 de [cette présentation de la GPL v3](https://www.gnu.org/licenses/rms-why-gplv3.fr.html).

[^fsf-cla]: À supposer que l'accord utilisé aujourd'hui est similaire à celui qui était utilisé il y a des années d'après ce mail [[en anglais](http://ftp.xemacs.org/old-beta/FSF/assign.changes)].

[^ubuntu]: Voir les explications de Canonical [[en anglais](http://www.ubuntu.com/legal/contributors/licence-agreement-faq#old-new-difference)] sur le changement de *CLA*.

[^business]: Liste de différents *business model* dans le monde du logiciel libre d'après Wikipédia [[en anglais](http://en.wikipedia.org/wiki/Business_models_for_open-source_software#Examples)].

[^infractions]: Cet article [[en anglais](http://www.networkworld.com/article/2201208/mobile-apps/most-android--iphone-apps-violate-open-source-rules.html)] rapporte que de nombreuses applications pour smartphones violent les termes de licences libres. Un autre exemple est celui de ce projet libre qui viole les termes de la GPL par méconnaissance [[discussion, en anglais](https://github.com/loopindex/ckeditor-track-changes/issues/34)].

[^saas]: C'est ce qu'on appelle le SaaS ou, en français, [logiciel en tant que service](http://fr.wikipedia.org/wiki/Logiciel_en_tant_que_service).

[^agpl]: [Avantages de la licence AGPL](http://www.gnu.org/licenses/why-affero-gpl.html) d'après ses créateurs.

[^android]: Explications de Google sur le choix de la licence Apache pour Android [[en anglais](https://source.android.com/source/licenses.html#why-apache-software-license)].

[^mpl]: Voir la FAQ de Mozilla sur la licence MPL 2.0 [[en anglais](https://www.mozilla.org/MPL/2.0/FAQ.html)] ainsi que [cet article de blog en français](http://blog.hugoroy.eu/2012/01/27/quelques-notes-sur-la-seconde-licence-publique-mozilla-mpl-2-0/).

[^lgpl]: Discussion [[en anglais](http://programmers.stackexchange.com/questions/221365/mozilla-public-license-mpl-2-0-vs-lesser-gnu-general-public-license-lgpl-3-0)] sur les inconvénients de la licence LGPL comparée à la licence MPL 2.0 (point de vue subjectif bien entendu).

[^bibliotheques]: [Recommandations de la Free Software Foundation](https://www.gnu.org/licenses/license-recommendations.html#libraries) sur le choix d'une licence pour une nouvelle bibliothèque logicielle.

[^javascript]: Par exemple, dans [la liste d'environ 65 bibliothèques Javascript les plus notables qu'on peut trouver sur Wikipédia](http://en.wikipedia.org/wiki/List_of_JavaScript_libraries), seule une n'est pas distribuée sous licence libre.

[^apple]: [Billet de blog de Framasoft](http://www.framablog.org/index.php/post/2011/01/15/vlc-gpl-app-store) donnant des explications détaillées sur les problèmes de l'Apple Store.

[^exceptions]: [Richard Stallman explique pourquoi il approuve la pratique de la vente d'exceptions](http://www.gnu.org/philosophy/selling-exceptions.html).