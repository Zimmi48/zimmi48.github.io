---
layout: post
title: Transfert de théorèmes par des isomorphismes
lang: fr
draft: true
---

En mathématiques, c'est une pratique très courante que d'identifier deux objets à isomorphisme près.
Par exemple, les matrices sont des tableaux de n × m cases
(i.e. des fonctions dont l'ensemble de départ est {1, …, n}×{1, …, m}
et l'ensemble d'arrivée est un corps K)
mais on les identifie à des applications[^application] linéaires de l'espace vectoriel K<sup>n</sup>
vers K<sup>m</sup>.
La principale justification en est que le produit de matrices correspond
à la composition d'applications linéaires.
Et c'est très pratique en effet, mais comment justifie-t-on la chose rigoureusement ? 

##Qu'est-ce qu'un isomorphisme ? 

La (courte) [page de la Wikipédia francophone](https://fr.wikipedia.org/wiki/Isomorphisme)
traitant du sujet nous rappelle la définition usuelle[^definition] : 

<blockquote>Un isomorphisme entre deux ensembles structurés est une application bijective
qui préserve la structure et dont la réciproque préserve aussi la structure.</blockquote> 

En pratique, cette notion nous était généralement présentée en cours de mathématiques sur des exemples.
Un isomorphisme de groupe par exemple est un morphisme bijectif
(où dans ce cas précis [morphisme](https://fr.wikipedia.org/wiki/Morphisme_de_groupes)
signifie une application envoyant l'élément neutre sur l'élément neutre
et le "produit" de deux éléments sur le "produit" de leurs images). 

La notion admet une définition générale grâce à la notion sous-jacente de
[structure mathématique](https://fr.wikipedia.org/wiki/Structure_%28math%C3%A9matiques%29),
c'est-à-dire un ensemble muni d'un certain nombre de relations
et d'axiomes décrivant les propriétés de ces relations (cette notion s'apparente à celle de théorie).
On dispose alors d'une structure concrète (ou modèle) lorsque l'on connait l'ensemble sous-jacent,
l'on est capable de définir les relations et de démontrer les axiomes. 

On peut voir le rapport avec le besoin d'abstraction en programmation.
La notion de signature en OCaml (ou d'interface en Java) correspond à celle de structure
et son implémentation en termes de modules (respectivement en classes) correspond à la concrétisation. 

##À quoi sert ce genre d'abstraction ? 

L'un de l'intérêt de l'abstraction est de simplifier et généraliser les raisonnements.
On voit aussi qu'il peut exister plusieurs modèles pour une même structure.
On pourra ainsi démontrer un théorème portant sur les groupes, en toute généralité,
i.e. en ne se servant que des axiomes.
Quel est alors l'intérêt de transférer des théorèmes d'une structure concrète à l'autre
(ce qui est une technique différente) ? 

Parfois, on peut préférer une structure concrète à une autre
car ses propriétés spécifiques rendent les raisonnements plus faciles.
Pour reprendre l'exemple des matrices,
il est drôlement plus facile de faire un produit de matrices plutôt que
de composer "à la main" les applications linéaires correspondant.
Les démonstrations de certains théorèmes se font donc non pas sur la base des axiomes uniquement
mais sur la base des connaissances supplémentaires dont on dispose. 

Deux ensembles ayant la même structure ne sont pas nécessairement isomorphes.
Il existe par exemple toutes sortes de groupes : certains finis, d'autres infinis ;
pour certains l'opération commute (groupe Abéliens), pour d'autres non.
Montrer alors un théorème pour un de ces ensembles ne permet pas nécessairement
de le transférer à tous les autres.
On pourra le faire si on peut identifier les deux structures à l'aide d'un isomorphisme. 

Le (la) mathématicien-ne va donc s'employer à chercher un isomorphisme.
Lorsqu'il (elle) l'a trouvé et l'a démontré, il (elle) prend alors un air solennel et déclare
"nous pouvons identifier les deux structures
donc les théorèmes que nous avions démontré pour l'une sont valables pour l'autre". 

##Qu'est-ce que ça veut dire ? 

C'est la justification de cette déclaration qui m'intéresse ici
car mon but et de pouvoir la donner à un ordinateur.
Les ordinateurs n'apprécient guère les déclarations solennelles. 

Wikipédia ne m'aidera pas dans ma quête. En effet, voici ce qu'on y lit : 

<blockquote><p>Savoir que deux objets sont isomorphes présente un grand intérêt
car cela permet de transposer des résultats et propriétés démontrés de l'un à l'autre.</p>

<p>Selon certains points de vue, deux objets isomorphes peuvent être considérés comme identiques,
ou du moins indiscernables.
En effet, bien souvent, les propriétés intéressantes d'un objet seront partagées
par tous les objets isomorphes de la catégorie.
Ainsi on parle souvent d'unicité ou d'identité « à isomorphisme près ».</p></blockquote> 

Ce dont j'ai besoin c'est d'une sorte de théorème méta-mathématique, autrement dit logique qui exprime cela.
Je pense qu'une expression approximative en serait :
_Si une formule logique dont les atomes ne font intervenir que les éléments - de manière abstraite -
et les relations de la structure est vraie alors elle est aussi vraie pour toute structure isomorphe._ 

Je ne vous fournirai pas de démonstration de ce théorème car je l'ai exprimé de manière intuitive.
Mais je serais curieux d'en lire une formulation et une démonstration rigoureuse
(il y a sûrement des gens qui l'ont faite). Dans la suite, je vous montrerai une démonstration
d'un cas particulier de ce théorème.

Les questions subséquentes sont alors de s'interroger sur la minimalité des hypothèses de ce théorème.
A-t-on vraiment besoin d'un isomorphisme ? A-t-on besoin de la notion de "structure" ? 

###Nous n'avons pas toujours besoin d'isomorphisme. 

Prenons deux ensembles E (respectivement E') munis d'une relation R (respectivement R').

Soit F(E, R, x<sub>1</sub>, …, x<sub>n</sub>) une formule du premier ordre positive[^premier-ordre]
dont les variables libres[^variable-libre] sont x<sub>1</sub>, …, x<sub>n</sub> ∈ E
et les atomes sont de la forme R(y<sub>1</sub>, …, y<sub>k</sub>).

Supposons qu'on dispose d'une fonction f : E → E' 

* surjective : ∀ y ∈ E', ∃ x ∈ E, f(x) = y 
* avec une propriété de transfert de R : ∀ x<sub>1</sub>, …, x<sub>k</sub> ∈ E,
R(x<sub>1</sub>, …, x<sub>k</sub>) → R'(f(x<sub>1</sub>), …, f(x<sub>k</sub>)) 

Alors si F(E, R, x<sub>1</sub>, …, x<sub>n</sub>) est vraie,
F(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>)) aussi.

Le cas particulier où il n'y a pas de variable libre nous montre que tout théorème
positif du premier ordre ne portant que sur R se transfère de E à E'.

Effectuons la démonstration par récurrence structurelle sur F :

####Cas F = ∀ x ∈ E, F'(E, R, x<sub>1</sub>, …, x<sub>n</sub>, x)

Soit x ∈ E', d'après la surjectivité de f, on peut trouver x' ∈ E tel que x = f(x').
Alors on applique F à x' pour obtenir F(E, R, x<sub>1</sub>, …, x<sub>n</sub>, x').

Du coup, par hypothèse de récurrence,
F(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>), f(x')) est vraie, i.e.
F(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>), x) est vraie.

Ainsi on conclut que ∀ x ∈ E', F'(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>), x).

####Cas F = ∃ x ∈ E, F'(E, R, x<sub>1</sub>, …, x<sub>n</sub>, x)

Soit un témoin x rendant la formule F'(E, R, x<sub>1</sub>, …, x<sub>n</sub>, x) vraie.
Alors par hypothèse de récurrence, F'(E, R, f(x<sub>1</sub>), …, f(x<sub>n</sub>), f(x)).
D'où f(x) est un témoin rendant la formule
∃ x ∈ E', F'(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>), x) vraie.

####Cas F = F'(E, R, x<sub>1</sub>, …, x<sub>n</sub>) ∨ F''(E, R, x<sub>1</sub>, …, x<sub>n</sub>)

L'une au moins de ces deux sous-formules F' et F'' est vraie. Supposons par exemple que ce soit F'.
Alors par hypothèse de récurrence, F'(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>)) est vraie
ce qui suffit à conclure que
F'(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>)) ∨ F''(E', R', f(x<sub>1</sub>), …, f(x<sub>n</sub>))
est vraie aussi.

Le cas avec ∧ est similaire.

####Cas de base F = R(y<sub>1</sub>, …, y<sub>k</sub>)

C'est là qu'on utilise la seconde propriété de f et c'est alors immédiat.

**QED**

On peut généraliser facilement à des formules comportant aussi des négations ¬ et des implications →
à condition :

1. Qu'aucun quantificateur n'apparaisse sous ces deux connecteurs logiques ;
2. Qu'on renforçe un petit peu la seconde hypothèse sur f :
∀ x<sub>1</sub>, …, x<sub>k</sub> ∈ E,
R(x<sub>1</sub>, …, x<sub>k</sub>) ↔ R'(f(x<sub>1</sub>), …, f(x<sub>k</sub>)).

Pour le voir il faudra renforcer l'hypothèse de récurrence sur toutes les sous-formules sans quantificateurs,
dans l'esprit avec lequel on a renforcé l'hypothèse sur f.

En revanche, nous avons besoin d'un isomorphisme pour considérer les théorèmes quelconques du premier ordre
mixant allègrement les quantificateurs et les négations.

###Nous avons besoin d'un isomorphisme si nous rajoutons l'égalité 

Plus précisément, dès lors que nous autorisons les formules atomiques à être des égalités
x = y
et pas seulement des relations R(y<sub>1</sub>,…,y<sub>k</sub>),
alors on peut exprimer la taille de l'ensemble pour tout ensemble fini.
Une bijection est alors nécessaire pour qu'une telle propriété se transmette
(une surjection entre deux ensembles finis de même taille est une bijection).

###Nous n'avons pas besoin des axiomes de la structure 

Il est bien connu qu'un morphisme de monoïde transfère les propriétés de groupe et de groupe Abélien.
La raison est la même que pour tous les autres théorèmes que nous pouvons vouloir transférer.
Par conséquent, tous ces axiomes structurels sont superflus :
si on peut transférer les relations, on peut transférer les axiomes. 

###Que se passe-t-il lorsque nous avons des éléments distingués et des opérations ? 

Des opérations (i.e. des applications à plusieurs arguments, à valeurs de départ et d'arrivée dans la structure) 
peuvent être représentées par des relations bien particulières. 

De même, des éléments distingués (comme l'élément neutre d'un groupe)
peuvent n'être distingués que par une relation spéciale à un seul argument, toujours fausse, 
sauf pour l'élément concerné. 

Cependant, il pourra être utile, en encodant cela,
de traiter les opérations et les éléments distingués de manière spécifique,
notamment pour des raisons d'efficacité et d'utilisabilité. 

##Conclusion 

J'ai essayé de faire une présentation assez pédagogique, au moins pour le début.
En revanche, ma présentation d'un sujet dont je ne suis pas spécialiste est assez naïve alors
que les questions soulevées m'intéressent vraiment pour mon travail.
Je serais donc ravi d'avoir des retours de mes amis mathématiciens ou catégoriciens
(ce mot n'existe pas, j'en ai conscience). 

[^application]: Dans tout cet article, on emploiera le terme d'application qui est synonyme de fonction (totale). 

[^definition]: La [page de la Wikipédia anglophone](https://en.wikipedia.org/wiki/Isomorphism) donne pour sa part une définition plus tordue quoique d'après moi logiquement équivalente. Elle laisse entendre qu'un isomorphisme ne serait pas nécessairement une bijection ce qui est faux. Je laisse cependant le soin de faire des corrections à quelqu'un de plus spécialiste que moi.

[^premier-ordre]: Dans une formule du premier ordre positive, on peut avoir des connecteurs logiques comme la conjonction ∧ et la disjonction ∨, des quantificateurs ∀ et ∃ mais toutes les variables quantifiées le sont dans E et on ne peut pas avoir de connecteurs comme la négation ¬ et l'implication →.

[^variable-libre]: Les variables libres sont celles sur lesquelles il n'y a pas de quantification dans la formule.
