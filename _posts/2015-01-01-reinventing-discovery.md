---
layout: post
title: 'Résumé personnel de "Reinventing discovery" de Michael Nielsen'
lang: fr
draft: true
---

Parmi les nombreux domaines qu'Internet a ou est en train de révolutionner,
je m'intéresse particulièrement à la collaboration massive, et notamment appliquée à la science
(voir mon premier article sur le sujet [[en anglais]({% post_url 2014-09-15-massive-collaboration-in-science %})]).
J'ai donc été ravi de découvrir le livre <cite>Reinventing discovery</cite> de Michael Nielsen
(voir aussi la vidéo de lui que j'avais partagée précédemment [[en anglais](https://www.youtube.com/watch?v=DnWocYKqvhw)]).
Je recommande vivement la lecture de ce livre à toutes les personnes intéressées
mais je vais tâcher de vous en fournir ici un résumé personnel.

Le sujet abordé par ce livre est très vaste mais s'il fallait le réduire à quelques mots-clés,
je listerais, par ordre d'importance : science ouverte (*open science*), collaboration, Internet,
partage des données (*open data*), accès libre aux résultats de la recherche (*open access*),
science participative (*citizen science*), mise en réseau des connaissances (*data web*),
extraction automatique de significations nouvelles (*data mining*).
Je vais m'étendre sur certains points plus que d'autres en fonction de l'intérêt personnel que j'y attache.

Michael Nielsen est un physicien qui, impressionné par le succès du projet Polymath[^gowers],
a décidé de se consacrer à l'étude de cette révolution silencieuse qu'Internet a déclenchée
et qui est en train de redéfinir la manière dont la connaissance scientifique est produite.
Dans son livre, il présente un certain nombre d'exemples concrets de projets[^exemples] ayant eu du succès (ou pas)
et analyse les éléments indispensables au succès d'un projet collaboratif.

Cette révolution du partage scientifique est comparable à la précédente telle révolution :
l'invention des revues dans lesquelles tout-e scientifique se doit de publier les résultats de sa recherche.
Cette première révolution, [au XVIIème siècle](http://fr.wikipedia.org/wiki/Revue_scientifique#Histoire),
eût un effet radical sur la manière dont la recherche scientifique
se pratiquait et influence plus encore la manière dont elle se pratique aujourd'hui.
En effet, la conséquence positive de cette révolution est une première forme de collaboration,
la création de nouvelles connaissances s'appuyant sur les connaissances précédemment acquises par d'autres scientifiques
et le principe de citation permettant aux articles de se baser les uns sur les autres.

###Les clés du succès d'un projet collaboratif

####Le concept de micro-expertise

La connaissance scientifique est devenue si vaste qu'il est aujourd'hui impossible d'être un-e expert-e sur tout
(alors que c'était quasiment possible à son époque pour un génie comme Léonard de Vinci).
Même dans leur propre domaine, les plus grand-e-s expert-e-s de notre époque
(que sont, par exemple, les médaillé-e-s Fields en mathématiques ou les champion-ne-s du monde d'échecs),
ne peuvent pas avoir une connaissance totale.

Sans être aussi brillant, un autre individu peut avoir des connaissances spécifiques sur un point de détail,
simplement parce qu'il y a déjà été confronté. Cette *micro-expertise* peut alors surpasser celle de tout autre personne.

Par conséquent, nous pouvons "augmenter notre intelligence collective"
(je dirais plutôt tirer partie au mieux de notre intelligence collective)
si un système est capable de connecter adéquatement un problème à la personne ayant la meilleure micro-expertise
pour le résoudre.

####Faire collaborer les bonnes personnes

De manière plus générale, des scientifiques peuvent être confrontés à des problèmes
qui sortent carrément de leur domaine d'expertise (nouveaux concepts mathématiques
pour résoudre un problème de physique par exemple).
Internet a déjà rendu beaucoup plus facile la tâche de trouver la bonne personne
(autrement que par simple chance) mais des outils nouveaux émergent qui rendent cette tâche encore plus aisée.
L'auteur utilise le terme de *designed serendipity* pour désigner le fait que cette connexion nécessite de
"forcer le hasard".

####L'émulation

L'intervention au moment adéquat de la personne adéquate permet à la communauté cherchant à résoudre un problème plus général
(tel qu'une démonstration) de ne pas être bloquée.
S'en suit, si le nombre de collaborateurs/trices dépasse une taille critique, une sorte de réaction en chaîne des idées.
Une personne peut apporter régulièrement des idées qui font progresser la résolution alors que, toute seule,
elle aurait passée la plupart de son temps à essayer de se débloquer de situations dont elle n'était pas spécialiste.

####Les caractéristiques du logiciel libre : modularité, réusabilité, micro-contributions

Un modèle collaboratif ayant eu beaucoup de succès est celui des logiciels libres.
Souvent les équipes développant de tels logiciels font un réel effort pour rendre le développement le plus modulaire possible.
Afin que les différentes personnes y contribuant puissent travailler le plus indépendamment possible.

La réusabilité est une caractéristique que partagent le logiciel libre et la recherche scientifique.
En effet, de la même manière qu'il est beaucoup plus facile de créer un logiciel
en utilisant des bibliothèques codées par d'autres,
le principe des citations dans les articles scientifiques permet de construire de nouvelles connaissances
en s'appuyant sur les résultats des autres.
La preuve d'un théorème peut ainsi faire appel à plusieurs autres théorèmes
sans pour autant devoir réexpliquer la preuve à condition qu'elle soit disponible quelque part.

Enfin, l'auteur observe que la plupart des contributions à des logiciels libres sont seulement d'une ou quelques lignes.
Un projet collaboratif aura probablement d'autant plus de succès qu'il permet ce genre de micro-contributions.

La question de la modularité et des micro-contributions sont des éléments possibles
pour réduire les  "barrières à l'entrée" d'un projet collaboratif.
De telles barrières sont un obstacle significatif à la réussite d'un projet **massivement** collaboratif
car il est peu probable que tou-te-s les contributeurs/trices arrivent au même moment
et suivent le projet avec le même degré d'attention.
C'est une des raisons pour lesquelles le succès de Polymath a été limité à quelques dizaines de personnes
et certainement pas quelques milliers.

####Permettre les discussions et créer un esprit de communauté

La plupart des projets ayant eu du succès possédaient des espaces permettant la discussion et le débat
mais aussi de forger un esprit d'appartenance à une communauté.
Parfois de tels espaces créent une différence significative.
Par exemple, si la communauté vote sur chaque décision comme c'était le cas lors du match d'échecs Kasparov vs the World,
le fait d'avoir un espace de débats préalables permet d'orienter les votes vers de meilleures décisions.
Et sur Wikipédia, l'existence de pages de discussion et de communauté fidélise les contributeurs
et permet de résoudre les problèmes que l'outil du wiki lui-même ne suffit pas à combler.

####Focaliser l'attention

Lorsqu'un projet enregistre un grand nombre de contributions il devient impossible
pour une personne seule de les suivre et les analyser dans leur ensemble.
Différents mécanismes peuvent être mis en place de manière à focaliser l'attention.

Une première catégorie de mécanismes permet de mesurer la qualité de chaque contribution
de sorte à concentrer l'attention générale sur les meilleures idées,
celles qui permettront d'avancer plus vite et plus loin.
La solution la plus simple dans cette catégorie consiste à attribuer un score à chaque solution
(comme dans le concours organisé par MathWorks).
Cependant, cette solution est loin d'être systématiquement praticable
car il n'est pas toujours faisable d'évaluer automatiquement la qualité d'une idée ou solution.

L'auteur généralise l'idée du score au concept de *shared praxis*.
D'une certaine manière, l'existence d'un score fournit un langage commun (rudimentaire) à tou-te-s les contributeurs/trices.
Ce langage commun peut être en revanche plus compliqué, comme dans le cas du jargon scientifique.
Dans les deux cas, la possession d'un tel langage se révèle importante pour la communication effective
au sein de la communauté donc pour l'évaluation des idées émises par d'autres.
En d'autres termes, "avoir une idée" est alors l'étape délicate tandis que "comprendre qu'une idée est bonne" est aisé.
L'absence d'un tel moyen de partager effectivement ses idées rend au contraire les projets collaboratifs plus difficiles :
c'est une problématique importante dans le domaine littéraire en particulier[^litterature]
et dans le domaine de la création artistique en général, mais aussi en politique
et dans tout domaine où il est compliqué d'obtenir un consensus d'un grand nombre de gens.

Une seconde catégorie de mécanismes permet de focaliser l'attention de chaque personne
sur les problèmes les plus proches de son domaine d'expertise.
Une telle catégorie d'outil est plus intéressante car elle permet une division de l'attention
(donc la communauté dans son ensemble est attentive plus largement),
tout en permettant le succès du concept de *designed serendipity*.
Le monde du logiciel libre nous fournit un exemple basique de tel outil.
Un *issue tracer* regroupe les bugs rapportés en un même endroit ;
un système de tags permet de savoir si un bug vient d'être rapporté ou s'il a déjà été confirmé,
si le type de problème qu'il soulève a déjà été identifié,
et enfin si une personne spécialiste a été chargée de sa résolution.

###L'extension des communs

La deuxième partie du livre (chapitre 6 et suivants) ne traite plus de projets collaboratifs en particulier
mais plus généralement de la révolution du partage scientifique en cours.
Par rapport à la première révolution suite à laquelle le partage scientifique se faisait uniquement
par le biais de publications dans des revues, deux nouveautés essentielles sont l'*open access* et l'*open data*.

####Les nouvelles formes de partage

L'*open access* est le fait de rendre librement (et gratuitement donc) accessibles les résultats de la recherche.
De manière plus concrète, les articles scientifiques sont alors rendus publics sur des sites web
dont l'accès n'est pas limité. Il prend deux formes :
la mise à disposition par les chercheurs/euses eux/elles-mêmes de *documents de travail* et de *preprints*
(version de l'article avant le travail d'édition effectué par la revue) sur des portails ouverts ;
l'apparition de revues ouvertes qui ne se financent pas en vendant des abonnements et en restreignant l'accès
mais par d'autres moyens (par exemple en facturant l'acte de publication directement aux auteur-e-s).

Dans le premier cas, les articles partagés n'ont pas nécessairement été relus et contrôlés par des comités de lecture,
donc leur fiabilité est moindre. En revanche, la plupart des revues opérant encore de manière fermée,
c'est bien par le partage de *preprints* qu'il y a le plus d'espoir aujourd'hui d'accéder aux derniers travaux
de nombreux scientifiques.

Les scientifiques eux/elles-mêmes peuvent avoir intérêt à faire cette démarche de mettre en ligne leurs articles
dans une version non-finale pour plusieurs raisons : atteindre un public plus large, obtenir des citations supplémentaires
et s'assurer d'être les premiers/ères à publier un résultat inédit.

Des tentatives d'y adjoindre des sortes de relectures ont eu lieu.
Une idée persistante est notamment d'en finir avec la relecture anonyme et d'encourager les chercheurs/euses à écrire
et signer des commentaires des *preprints* mis en ligne par leurs collègues.
Cette idée n'a cependant pas abouti pour l'instant.
Deux explications possibles sont d'une part le manque de temps et d'incitations,
d'autre part la crainte de payer le prix de critiques
si les collègues critiqué-e-s se retrouvent ensuite à devoir évaluer l'article ou la demande de financement
du/de la chercheur/euse auteur-e des critiques.

Pour en savoir plus sur l'*open access*, je recommande la lecture de [cette page](http://pablo.rauzy.name/openaccess.html) par Pablo Rauzy.

Le principe de l'*open data* est de rendre librement accessible les données récoltées pour une étude scientifique,
soit immédiatement, soit au moment de la publication.
Ces données peuvent alors servir à d'autres chercheurs/euses dans de nouvelles analyses.

Enfin, certain-e-s chercheurs/euses vont plus loin en partageant l'état de leur recherche, quasiment en direct,
sur leur blog (ce qu'on peut qualifier de *recherche ouverte* ou *recherche en public*).
Certains blogs de chercheurs/euses connu-e-s reçoivent alors des milliers de visiteurs/euses,
y compris des gens en dehors du milieu scientifique
et qui s'intéressent aux dernières avancées ou à la vision du monde qui est présentée dans ces espaces.

La combinaison de ces nouvelles formes de partage laisse entrevoir l'apparition d'un internet des données.
L'objectif serait alors que l'immense majorité de la connaissance scientifique soit facilement accessible
de sorte qu'il serait possible d'en tirer de nouvelles significations de manière automatique ou semi-automatique
(à l'aide de requêtes potentiellement complexes). Outre la généralisation du partage des connaissances,
une telle application nécessite l'utilisation de formats de données standardisés,
aidant alors l'ordinateur à parcourir automatiquement la gigantesque base de données mondiale.

####L'implication des citoyen-ne-s rendue possible

Les sciences citoyennes ne sont pas un phénomène nouveau
(par exemple, ce sont souvent des amateurs/trices qui découvraient de nouvelles comètes)
mais Internet rend l'implication des citoyen-ne-s beaucoup plus facile.
Les amateurs/trices peuvent intervenir de plusieurs façons : en collectant et traitant de grands volumes d'information,
mieux que les ordinateurs (Galaxy Zoo) et parfois mieux que les expert-e-s du domaine eux/elles-mêmes (FoldIt) ;
en repérant les anomalies et ce qui est digne d'attention
et en faisant parfois eux/elles-mêmes un véritable travail de recherche[^pois] ;
en compilant la littérature (Open Dinosaure Project).
Enfin, lorsque même les amateurs/trices ne sont plus assez nombreux/euses pour traiter l'énorme volume de données disponibles,
on peut se servir de leur travail pour entraîner des ordinateurs à reproduire leur "expertise".

Un projet tel que Galaxy Zoo n'aurait pas été possible sans *open data*.
Un projet comme Open Dinausaure n'aurait pas été possible sans *open access*.
Autant l'un que l'autre sont indispensables lorsque des personnes hors du milieu académique
décident de s'attaquer à un problème scientifique.
Outre l'histoire des "green peas", d'autres découvertes importantes ont récemment été le fait d'amateurs/trices.
L'auteur cite le cas d'un informaticien à la retraite ayant découvert un lien entre la migraine et le manque de magnésium
uniquement en sondant des bases d'articles en libre accès et donc en tirant de nouvelles conclusions d'études déjà réalisées.

Les sciences citoyennes (ou participatives) sont attrayantes car elles sont un moyen efficace d'utiliser le "surplus de temps disponible"
de notre société, c'est-à-dire le temps que les individus n'ont pas besoin de passer à travailler,
couramment associé aux loisirs.
Pour autant, il est très dur de savoir à quel point les sciences participatives vont impacter la manière
dont la recherche scientifique est conduite. Il se pourrait en effet qu'elles restent un phénomène marginal
tant chaque nouveau projet demande de l'ingéniosité,
notamment lorsqu'il s'agit de rendre ludique la résolution de problèmes scientifiques.
Lorsque les citoyen-ne-s deviennent de véritables scientifiques et font de la vraie recherche
(par opposition à seulement y contribuer sur des tâches spécifiques et répétitives),
ils/elles ont besoin de systèmes d'auto-formation, de communautés et de mentors pour coopérer et progresser.

Le partage libre des connaissances scientifiques pourrait avoir un autre avantage,
à savoir instaurer une communication plus directe entre science et décision politique.
Le risque d'une surinterprétation ou d'une mauvaise interprétation des publications scientifiques
par les médias grand public existe cependant. L'auteur n'est pas pour autant inquiet car, d'après lui,
les médias mettent en danger leur réputation à chaque fois qu'ils publient une information
qu'ils doivent démentir par la suite et vont donc rapidement acquérir des pratiques visant à éviter
que ce genre de situation ne se produise trop souvent.

####Les freins au partage

Une des thèses importantes de ce livre est que le partage est globalement une bonne chance pour la science
et que celui-ci doit être encouragé. Cependant, alors que chaque scientifique a intérêt à ce que la communauté partage plus,
il n'est pas dans son intérêt personnel d'agir individuellement dans ce sens.

Les scientifiques ne sont actuellement valorisé-e-s que lorsqu'ils/elles écrivent des articles scientifiques.
Ils/Elles passent aussi une grosse partie de leur temps à chercher des financements
(principalement en rédigeant des candidatures pour des allocations ou *grants*).
Par manque de temps et de valorisation, rares sont ceux/celles qui contribuent à Wikipédia,
documentent des programmes qu'ils/elles auraient programmés en vue de les partager, ou maintiennent des blogs actifs.

Le second frein résulte de la crainte que le partage ne profite qu'aux autres et soit même contre-productifs
pour les chercheurs/euses, par exemple si leurs concurrent-e-s tirent avant eux/elles des analyses des données
qu'ils/elles ont rendu public.

Enfin, un dernier frein est dû à la volonté de commercialiser les résultats scientifiques,
essentiellement sous la forme des brevets. Dans les domaines où des possibilités de brevets existent,
la recherche ne peut nécessairement avoir lieu qu'en secret
(un esprit radicalement contradictoire par rapport à celui de la recherche ouverte).
L'auteur pense néanmoins que ce problème a un impact mineur en comparaison avec les deux premiers.

Dans l'état actuel des choses, beaucoup de scientifiques hésitent voire refusent complètement de changer de pratiques
vers plus d'ouverture. Pour combler ce différentiel entre intérêt collectif et intérêt personnel,
des incitations ou des règles doivent être mises en place de manière institutionnelle.

Puisque les scientifiques sont essentiellement récompensé-e-s par leur réputation
(qui leur servira ensuite à décrocher de meilleurs postes et d'autres avantages),
il faut tout d'abord changer de mesure de réputation.
Aujourd'hui le travail de création d'un outil collaboratif ou de partage de données est trop souvent dénigré.
En s'assurant que citer les auteurs des données ou des outils utilisés pour une étude devienne aussi systématique
que de citer les articles sur lesquels le travail se base,
et en mesurant le nombre de citations recueillies par un-e auteur-e pour tous ses travaux,
et pas seulement pour ses articles publiés dans des revues, l'incitation à faire de la science ouverte sera alors évidente.
D'ors et déjà, des outils permettent de mesurer le nombre de citations d'un article
(y compris d'un preprint et en comptant les citations par des preprints).

D'autre part, les scientifiques peuvent mettre en place de nouvelles règles
que les agences de financement de la recherche peuvent alors faire appliquer.
Un exemple est celui de l'accord des Bermudes en 1996 qui a édicté que toute donnée récoltée sur le génome humain
doit être immédiatement rendue publique.

[^gowers]: Gowers, T., & Nielsen, M. (2009). Massively collaborative mathematics. Nature, 461(7266), 879-881.

[^exemples]: Parmi les exemples présentés les plus notables sont, outre le projet Polymath, le match d'échecs Kasparov vs the World (voir la page Wikipédia [[en anglais](http://en.wikipedia.org/wiki/Kasparov_versus_the_World)]), la compétition "MATLAB online programming contest" organisée par MathWorks (voir l'article explicatif de Ned Gulley [[en anglais](http://www.starchamber.com/gulley/pubs/tweaking/tweaking.html)]), [Innocentive](http://www.innocentive.com/), [GalaxyZoo](http://www.galaxyzoo.org/), [FoldIt](http://fold.it/portal/), le projet Open Dinausaure, [Wikipédia](http://www.wikipedia.org/), [Linux](http://fr.wikipedia.org/wiki/Linux), le navigateur [Firefox](https://www.mozilla.org/fr/firefox/new/) et the [arXiv](http://arxiv.org/). Parmi les projets ayant échoués, Michael Nielsen évoque le QuWiki, "A million penguins" ou encore le test par la revue Nature d'un site d'*open peer review* (i.e. encourageant les chercheurs à publier des commentaires sur les articles d'autres chercheurs ; voir le rapport produit à la suite de cette expérience [[en anglais](http://www.nature.com/nature/peerreview/debate/nature05535.html)]).

[^litterature]: L'auteur prend l'exemple de l'analyse littéraire de Shakespeare. Un consensus sur ce qui fait une bonne analyse ne sera jamais atteint et c'est d'ailleurs une bonne chose car la diversité des opinions est valorisée. D'après lui, cela s'explique par l'absence d'un langage élémentaire partagé par tou-te-s les analystes littéraires. Un autre exemple est celui de [notre projet de roman collaboratif](http://unkilodeplumes.fr). Une critique évoquait le fait qu'il est très difficile de transmettre une idée littéraire, une grande partie de l'idée initiale pouvant être perdue lors de la tentative de l'expliquer. Nous croyons cependant que cette difficulté ne rend pas impossible la création d'un roman collaboratif. D'ailleurs Michael Nielsen semble le penser aussi puisque, lorsqu'il décrit l'échec du projet d'écriture d'un roman-wiki "A Million Penguins", il parie qu'on verra bientôt l'émergence d'une technologie de collaboration (sans doute pas si différente du wiki) qui sera plus adaptée à la réalisation d'un roman (les wikis ne le sont pas car les romans ne sont pas assez modulaires notamment).

[^pois]:  C'est ainsi que l'auteur raconte l'histoire des "green peas". Les participant-e-s à Galaxy Zoo, dont le but est de classer des galaxies en fonction de leur forme, ont identifié de drôles de structures vertes et originales qu'ils se sont alors mis à traquer et recenser. Les personnes impliquées se sont alors entraidées via les forums de Galaxy Zoo afin de se former à la spectrométrie. Elles se sont lancées dans une chasse plus générale en sondant des bases de données d'images de l'univers en accès libre et ont, par beaucoup d'aspects, largement simplifié le travail des scientifiques qui ont fini par s'emparer de la découverte pour l'étudier plus en détails.
