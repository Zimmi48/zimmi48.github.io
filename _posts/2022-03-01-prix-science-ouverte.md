---
layout: post
title: "Le projet Coq reçoit le prix Science Ouverte du Logiciel Libre de Recherche"
lang: fr
draft: true
#date: 2021-11-02 20:00:00 +0100
#redirect_from: known-issues
excerpt: Le 5 février 2022, à l'occasion des Journées européennes de la science ouverte, les prix Science Ouverte du Logiciel Libre de Recherche ont été annoncés. Dans la catégorie Scientifique et Technique, le logiciel récompensé était Coq, dont j'ai représenté l'équipe de développement à cette occasion.
---

Le 5 février 2022, à l'occasion des Journées européennes de la science ouverte, les [prix Science Ouverte du Logiciel Libre de Recherche ont été annoncés](https://www.ouvrirlascience.fr/remise-des-prix-science-ouverte-du-logiciel-libre-de-la-recherche/). Dans la catégorie Scientifique et Technique, le logiciel récompensé était Coq, dont j'ai représenté l'[équipe de développement](https://coq.inria.fr/coq-team.html) à cette occasion.

La nouvelle a déjà été reprise par de nombreux articles du [CNRS](https://www.cnrs.fr/fr/cnrsinfo/osec-2022-la-science-ouverte-lheure-europeenne), de l'[INS2I](https://www.ins2i.cnrs.fr/fr/cnrsinfo/les-premiers-prix-de-la-science-ouverte-du-logiciel-libre-de-la-recherche), de l'[Université de Paris](https://u-paris.fr/prix-science-ouverte-du-logiciel-libre-de-la-recherche-trois-laureats-pour-universite-de-paris-et-lipgp/), de l'[Université Paris-Saclay](https://www.universite-paris-saclay.fr/actualites/coq-laureat-du-prix-science-ouverte-du-logiciel-libre-de-la-recherche), etc. Si je reviens dessus aujourd'hui, c'est pour présenter le contenu de la candidature que nous avions soumise pour l'obtention de ce prix.

### Motivation de la candidature

Coq est un logiciel de recherche développé depuis plus de 35 ans. Déjà
récipiendaire du prix ACM Software System Award en 2013, sa réputation
n'est plus à faire. Cependant, beaucoup d'efforts ont été effectués
ces dernières années pour améliorer et ouvrir ses pratiques de
développement. Les changements effectués entre 2015 et 2019 (passage à
GitHub pour les pull requests puis les issues, adoption d'intégration
continue et test avec des dépendances inverses, introduction d'un
guide de contribution, documentation systématique des fonctionnalités
introduites ou modifiées, extension de l'équipe des mainteneurs
participants à l'intégration des changements, passage à des cycles de
version plus courts, amélioration de la maintenance des paquets au
niveau de l'écosystème) sont décrits en détail dans la [thèse de Théo
Zimmermann](https://hal.inria.fr/tel-02451322/). D'autres changements
ont été encore conduits depuis, comme la restructuration du manuel de
référence et l'amélioration de son contenu, ou encore l'introduction
de la [Plateforme Coq](https://github.com/coq/platform), permettant de
faciliter l'installation de Coq et de paquets standard de son
écosystème, et de nouvelles plateformes de discussion telles que
Zulip. Alors que le prix ACM Software System Award avait récompensé
les développeurs initiaux de Coq, l'obtention du prix Science Ouverte
du Logiciel de Recherche récompenserait les efforts de la nouvelle
génération de développeurs et mainteneurs de Coq qui ont contribué à
véritablement ouvrir ce logiciel et à développer sa communauté et son
écosystème.

### Diffusion

Les nouvelles versions de Coq sont publiées sur le dépôt GitHub, sous
forme de code source. Elles sont ensuite rendues disponibles dans de
nombreux systèmes de paquets (opam, Nix, Homebrew, distributions
Linux). Voir : <https://repology.org/project/coq/versions>.

Désormais, la Plateforme Coq est la méthode recommandée d'installation
de Coq, car elle permet de plus facilement avoir accès à Coq ainsi
qu'à un ensemble de paquets standard de l'écosystème. Elle comporte un
mode "débutant" basé sur des installateurs binaires pour Windows,
macOS et Linux (Snap) et un mode "avancé" basé sur un script
interactif faisant appel à opam de manière sous-jacente.

### Éléments scientifiques et techniques

#### Dimension scientifique

L'assistant de preuve Coq s'appuie sur des décennies de recherche
active dans diverses équipes, en France et à travers le monde. La page
<https://coq.inria.fr/refman/history.html> contient une description
détaillée des racines de ces recherches. Aujourd'hui, Coq est à la
fois un objet d'étude (nouveaux développements théoriques permettant
des évolutions) et un support à la recherche en mathématiques
formalisées et vérification de logiciel. Le survey ["QED at Large"](https://arxiv.org/abs/2003.06458) décrit les nombreuses avancées
scientifiques ayant eu lieu pour permettre la vérification de logiciel
à l'aide d'assistants de preuve tels que Coq.

Le nombre d'articles de recherche publiés s'appuyant sur Coq est trop
grand pour en faire une liste exhaustive. Pour donner un ordre de
grandeur, la recherche de "Coq proof" sur Google Scholar conduit à
l'obtention de plus de 30 000 résultats (en vérifiant les 10 premières
pages, on constate que tous les résultats sont pertinents). Des
requêtes similaires sur d'autres bases de données (Scopus, ACM DL,
Inspec) donnent chacune plusieurs milliers de résultats. Le Coq'Art,
le tout premier livre sur Coq, a été cité plus de 2500 fois.

Par ailleurs, Coq a été une source d'inspiration pour plusieurs autres
assistants de preuve, notamment Lego, Matita et Lean, tous basés sur
le Calcul des Constructions Inductives, théorie sous-jacente au
logiciel Coq.

#### Dimension technique

Le développement de Coq a posé de nombreux défis techniques, au-delà
des fondements scientifiques et théoriques sur lesquels le logiciel
repose, notamment car il ne se limite pas à son noyau, composant
logique permettant de vérifier les preuves. La partie "assistant" du
logiciel représente une partie essentielle de la complexité du
système. Un enjeu technique majeur actuel est de permettre de
continuer à faire évoluer le logiciel tout en assurant les besoins en
termes de stabilité des utilisateurs majeurs. Pour permettre de mieux
évaluer en pratique l'impact d'un changement en termes de
compatibilité, des tests avec des projets externes dépendants de Coq
sont effectués de manière systématique. Lorsqu'un changement casse la
compatibilité mais est jugé nécessaire, les développeurs de Coq
réparent les projets externes inclus dans les tests afin de pouvoir
continuer à les utiliser dans les futurs tests de compatibilité. Dans
le même temps, de nombreux efforts ont été effectués pour retirer de
la dette technique, accumulée au cours du temps par l'ajout de
fonctionnalités expérimentales, dues à la nature de logiciel de
recherche de Coq. Ces efforts permettent d'envisager les évolutions
futures du logiciel de manière plus sereine.

#### Dimension génie logiciel

L'architecture de Coq est découpée en de nombreux composants qui
dépendent les uns des autres, à commencer par un noyau, bien délimité,
qui a pour tâche de vérifier les preuves. Grâce à cette architecture,
classique parmi les assistants de preuve modernes, tout bug en dehors
du noyau n'est pas en mesure d'affecter la confiance que les
utilisateurs peuvent accorder au système. Coq dispose par ailleurs
d'un système de plugins permettant d'étendre le système (sans perte de
confiance) et un certain nombre de composants cœur se présentent
d'ailleurs sous cette forme.

Comme précisé dans les motivations de la candidature, le développement
de Coq a beaucoup évolué au cours des six dernières années. Développé
depuis 1999 dans un dépôt SVN, git et GitHub ont été adoptés, d'abord
pour permettre de faciliter les contributions extérieures. À partir de
2016, les pull requests ont été également adoptées au sein de l'équipe
cœur pour permettre la revue de code. Par la suite, les issues de
GitHub ont également été adoptées, ce qui a donné lieu a [une
publication évaluant l'impact d'un tel changement](https://hal.inria.fr/hal-01951176). Le passage à l'utilisation
systématique de pull requests a permis de systématiser la mise à jour
de la documentation et le test. Ce dernier repose sur un système
d'intégration continue incluant des tests de régression et des tests
de compatibilité avec des projets dépendant de Coq (plusieurs millions
de lignes de code sont ainsi testées pour chaque changement). Le
processus de sortie de nouvelles versions a également évolué pour
permettre de produire de nouvelles versions de manière plus rapide.
Les branches stables sont maintenues par des "release managers", qui
"backportent" les correctifs, aidés par un système semi-automatique.
Un bot interagit avec les développeurs pour les aider dans leurs
tâches répétitives. Tous ces changements sont décrits en détails dans
la [thèse de Théo Zimmermann](https://hal.inria.fr/tel-02451322/).

### Documentation

#### Qualité de la documentation pour les utilisateurs

Un frein au développement de l'utilisation de Coq a longtemps été le
manque de documentation, les utilisateurs devant apprendre à utiliser
le logiciel au contact d'autres utilisateurs ou de développeurs. Ce
problème a été levé à partir de la publication en 2004 du premier
livre sur Coq, le Coq'Art (édité par Springer en anglais mais
également disponible gratuitement en version française, et depuis 2009
en chinois). Par la suite, de nombreux autres livres ont été écrits
sur Coq (la [page de documentation de Coq](https://coq.inria.fr/documentation) en référence près d'une dizaine),
notamment le très célèbre Software Foundations de Benjamin Pierce et
al., aujourd'hui largement utilisé par les nouveaux utilisateurs, et
qui a également été traduit en chinois. Il existe également un [livre
sur Coq écrit en japonais](https://www.morikita.co.jp/books/mid/006241) (par
Manabu Hagiwara et Reynald Affeldt).

L'équipe de développement de Coq maintient quant à elle le [manuel de
référence](https://coq.inria.fr/refman/) et la [documentation de la
bibliothèque standard](https://coq.inria.fr/stdlib/). Un accent
particulier a été mis ces dernières années sur l'amélioration de la
qualité (exhaustivité, exactitude, accessibilité) du manuel de
référence. Tout d'abord, celui-ci a été converti de LaTeX vers Sphinx
(étendu pour les besoins de Coq) grâce à un effort collaboratif de la
communauté. Le manuel contient de nombreux exemples de code, qui sont
exécutés et qui font échouer la compilation s'ils déclenchent des
avertissements ou message d'erreurs inattendus. Le langage de Coq
ayant une grammaire très étendue (la plupart des commandes et des
tactiques sont accessibles sous forme de syntaxe), un outil a été
développé pour mettre en relation la grammaire telle que définie dans
le parser et telle que documentée dans le manuel de référence. Une
restructuration majeure du manuel de référence a également été
entreprise pour organiser le matériel qui y avait été ajouté de
manière organique.

#### Qualité de la documentation pour les développeurs et contributeurs

La documentation interne du code de Coq s'est longtemps limitée à
quelques commentaires décrivant les fonctions exportées dans les
fichiers sources. Cette documentation a été complétée par des
[documents décrivant l'implémentation de certaines parties du logiciel](https://github.com/coq/coq/tree/master/dev/doc), des introductions à
l'architecture de Coq, présentées sous forme de diaporamas lors
d'évènements ([Coq Users and Developers Workshops](https://github.com/coq/coq/wiki/CoqImplementorsWorkshop)) destinés
depuis 2015 à faciliter les contributions d'utilisateurs au code de
Coq. Un tutoriel pour les auteurs de plugin a également été créé à
cette occasion et est [maintenu dans le dépôt de Coq](https://github.com/coq/coq/tree/master/doc/plugin_tutorial). Enfin,
un [guide de contribution](https://github.com/coq/coq/blob/master/CONTRIBUTING.md) très complet a été rédigé
pour permettre d'intégrer et de former de nouveaux contributeurs en
leur exposant une progression à travers différents types de
contributions, à commencer par des contributions à l'écosystème, à la
gestion des tickets, pour continuer avec des contributions de code et
de la maintenance. Ce guide de contribution a également pour but de
servir de documentation de référence des processus établis dans
l'équipe de développement de Coq, et sert par conséquent également aux
contributeurs déjà bien établis.

### Communauté

#### Quels sont les utilisateurs actuels du logiciel ?

Coq est utilisé par une très large communauté, dont la taille est
difficile à évaluer du fait que ni le logiciel, ni le site web
n'incluent de traceurs pour en mesurer l'audience. Il est en revanche
incontestable que Coq est aujourd'hui l'un des logiciels de référence
dans son domaine (les assistants de preuve), domaine qui est lui-même
en forte croissance. Bien que peu fiable comme mesure de popularité,
le nombre d'étoiles attribué à Coq sur GitHub (qui s'élève à 3 500) en
fait l'assistant de preuve le plus populaire sur GitHub, ainsi que le
logiciel le plus populaire listé sur [code.gouv.fr](https://code.gouv.fr/) (d'une courte tête
devant OCaml, le langage dans lequel Coq est écrit). Coq est utilisé
avant tout par des chercheurs pour des projets de taille de plus en
plus impressionnante (le [compilateur certifié C CompCert](https://github.com/AbsInt/CompCert), le projet [DeepSpec](https://deepspec.org) financé à auteur de 30 millions de dollars par la
NSF) mais aussi par des industriels de plus en plus nombreux. Les
utilisateurs industriels incluent de nombreuses start-ups de
blockchain, à commencer par la française [Nomadic Labs](https://www.nomadic-labs.com/), qui développe la blockchain Tezos,
d'autres types de start-ups comme l'espagnole Formal Vindications, qui
vérifie des logiciels légaux, des entreprises américaines de conseil
telles que [Galois](http://galois.com/) et [Bedrock Systems](https://bedrocksystems.com/), mais aussi de plus grosses entreprises
telles qu'Amazon, Apple, Google, IBM. La page
<https://github.com/ligurio/practical-fm> liste près d'une vingtaine
d'entreprises qui utiliseraient Coq. La publication en 2020 par
l'ANSSI d'un [guide sur l'utilisation de Coq dans le contexte de
certifications Critères Communs](https://www.ssi.gouv.fr/uploads/2014/11/anssi-requirements-on-the-use-of-coq-in-the-context-of-common-criteria-evaluations-v1.0-en.pdf)
atteste de l'importance de ce logiciel pour le secteur industriel.

#### Animation de la communauté des utilisateurs et des contributeurs

Coq dispose de nombreux canaux de communication pour les utilisateurs
(<https://coq.inria.fr/community>) : une liste de diffusion historique
encore très active, récemment complétée par un forum Discourse, un
système de messagerie instantanée Zulip avec plus d'un millier
d'inscrits (un canal IRC non-officiel existe également sur
Libera.Chat), un compte Twitter. Deux workshops annuels sont organisés
à l'occasion de conférences majeures en informatique (CoqPL, associé à
POPL, et le workshop Coq, associé à ITP / IJCAR / FLOC). Des workshops
spécifiques destinés à des sous-communautés de l'écosystème Coq, ainsi
que des écoles, sont également régulièrement organisés
(<https://coq.inria.fr/community>).

Les canaux précédemment mentionnés sont également utilisés pour les
contributeurs, complétés par le dépôt GitHub et un workshop annuel
(Coq Users and Developers Workshop) destiné à aider les utilisateurs à
devenir des contributeurs. Les développeurs se réunissent en
vidéo-conférence une fois par semaine, et cette réunion est ouverte à
tous. Les noms des contributeurs et des mainteneurs sont mis en avant
dans les notes de nouvelles versions. L'utilisation d'équipes de
mainteneurs combinée avec le système de CODEOWNERS de GitHub a permis
d'élargir le nombre de mainteneurs participant à l'intégration des
modifications à une trentaine de contributeurs réguliers (contre moins
d'une dizaine de développeurs de l'équipe cœur auparavant), ce qui
permet de traiter plus efficacement le nombre important de pull
requests (créées par plus de 200 contributeurs, d'après le décompte de
GitHub). Un système de [Coq Enhancement Proposals](https://github.com/coq/ceps) permet de discuter certaines propositions
de changements majeurs avant leur implémentation.

#### Écosystème

Coq dispose d'un écosystème très riche de paquets qui en étendent les
capacités : plugins qui se connectent à l'API OCaml de Coq pour
proposer des extensions de fonctionnalités, bibliothèques Coq
réutilisables qui développent des applications particulières.
Historiquement, ces "contributions" étaient distribuées avec Coq, par
l'équipe de développement. À partir de 2013, des utilisateurs et
développeurs de Coq ont étudié la possibilité de distribuer ces
contributions à travers un index et un gestionnaire de paquets. Il a
été décidé de réutiliser opam, qui avait été développé pour le langage
OCaml, et l'index des paquets Coq existe depuis fin 2014. Depuis
quelques années, de plus en plus de ces paquets Coq sont également
disponibles à travers le gestionnaire de paquets générique Nix. Enfin,
depuis 2018, une [organisation communautaire destinée à assurer la
maintenance à long terme des paquets importants de l'écosystème](https://github.com/coq-community/manifesto) a été
formée. Cette
organisation permet la maintenance de plus de 50 paquets par plus de
30 mainteneurs, mais aussi la création d'outils pour l'aide à la
maintenance, et la diffusion de bonnes pratiques (dans tout
l'écosystème Coq). Cette organisation est basée sur un modèle qui a
émergé dans plusieurs autres écosystèmes logiciels et qui fait
actuellement l'[objet de recherches](https://hal.inria.fr/hal-03320556). La plupart des paquets Coq sont
disponibles sous licence libre. L'organisation coq-community
n'accueille que du logiciel libre.