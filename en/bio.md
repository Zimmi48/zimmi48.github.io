---
layout: bio
link: Bio
lang: en
permalink: "/en/"
trans: /fr/
---

Who am I?
---------

I am an *associate professor* in software engineering for the safety and security of systems at [Télécom Paris][] and an *open source maintainer*.

[Télécom Paris]: https://www.telecom-paris.fr/

My research focuses on understanding and enhancing how open source maintainers and contributors collaborate to maintain and evolve software projects and ecosystems. In particular, I am interested in securing software supply chains, by detecting and resolving maintenance issues in open source packages used in these supply chains.

On the practitioner side, I am a member of the [core team](https://rocq-prover.org/rocq-team/core) of the [Rocq Prover](https://rocq-prover.org), a proof assistant (formerly known as Coq). I am, in particular, a maintainer of Rocq's documentation, the author of the [bot][] assisting the development team in everyday tasks, and the founder of the [Rocq-community][] initiative for long-term package maintenance in the Rocq ecosystem.
In 2022, our team was awarded the [Open Science Award for Open Source Research Software](https://www.ouvrirlascience.fr/open-science-free-software-award-ceremony/) by the French ministry of research. See this [blog post]({% post_url 2022-03-01-prix-science-ouverte %}) (in French) on the topic.

I defended my PhD at Université de Paris (former Université Paris-Diderot, now [Université Paris Cité](https://u-paris.fr/en)) in 2019. My thesis was titled "Challenges in the collaborative evolution of a proof language and its ecosystem."  The [manuscript][PhD thesis] (in English) and the [slides][] (in French) of the defense are available.

[bot]: https://github.com/coq/bot
[Rocq-community]: https://github.com/rocq-community/manifesto

[PhD thesis]: https://hal.inria.fr/tel-02451322v1
[slides]: https://www.irif.fr/_media/users/theo/phd_defense.pdf

Research
--------

See my [Google Scholar profile](https://scholar.google.fr/citations?user=-NgHOiwAAAAJ&view_op=list_works&sortby=pubdate) for the complete list of my publications and preprints.

### Topics

I present below some of my active research topics. Other topics of interest are discussed on [my blog](/blog). See also some [past topics](/en/past-topics).

Students interested in doing research with me are welcome to reach out. There is a (non-exhaustive) list of project ideas on [this page](/en/projects).

#### Bug tracking and issue management

In 2017, I've conducted the successful migration of Coq's bug tracking system from Bugzilla to GitHub (see my [blog post]({% post_url 2017-10-23-bugzilla-to-github %}) on the topic). Together with Annalí Casanueva Artís, we have evaluated the impact of the switch in a [paper](https://hal.inria.fr/hal-01951176/) that was published in the [2019 IEEE International Conference on Software Maintenance and Evolution](https://icsme2019.github.io/).

Since then, issue management has kept being a topic of interest to me, especially as issue management can become a real burden in large projects such as Coq. See my 2021 [blog post]({% post_url 2021-11-01-known-issues %}) on the topic.

#### Reverse dependency compatibility testing

Reverse dependency compatibility testing (RDCT) is the practice of assessing compatibility breaking changes by building and testing external projects that declare a dependency on the tested project ("reverse dependencies"). We've come up with this name with my colleagues from LaBRI after observing this practice being used in several independent projects.

In the Coq development team, we've adopted this practice in our continuous integration to increase stability and reduce the migration cost for users, and give more confidence to developers to attempt potentially breaking changes (see my [PhD thesis][]).

When a tested reverse dependency is broken by a pull request, it can sometimes be difficult to figure out what exactly the problem is. We've integrated the [bug minimizer][] of [Jason Gross][] in the CI workflow to allow contributors to request a minimization of the broken test case. We discuss this innovation and evaluate its effectiveness in a [recent paper](https://hal.inria.fr/hal-03586813/) that was published at [ITP 2022](https://itpconference.github.io/ITP22/).

More projects in the Coq ecosystem have adopted RDCT in their CI since then. This is the case, for instance, of the [MathComp][] library. With [Cyril Cohen][], we're maintaining a tool, the [Coq Nix Toolbox][], that allows generating a CI configuration to test a Coq project for compatibility with its reverse dependencies (see our abstract and the video of the demo at the [Coq workshop 2021][]).

[Jason Gross]: https://jasongross.github.io/

[MathComp]: https://github.com/math-comp/math-comp
[Coq Nix Toolbox]: https://github.com/rocq-community/coq-nix-toolbox
[bug minimizer]: https://github.com/JasonGross/coq-tools
[Coq workshop 2021]: https://coq-workshop.gitlab.io/2021/

#### Community organization and package maintenance at the ecosystem-level

Package ecosystems play a major role in modern code development in most programming languages. However, it often happens that packages that are important to the ecosystem (many projects depend on them) end up being left unmaintained.

To alleviate this problem, I have observed a model of Community Package Maintenance Organization (CPMO), first in the Elm ecosystem, then in many other ecosystems. I have published a [paper](https://hal.inria.fr/hal-02534965v2) taking a first look at this model of organization in the [2020 Software Health (SoHEAL) workshop](https://soheal.github.io/SoHeal2020/index.html) (associated with the International Conference on Software Engineering). See also the [video of the talk](https://www.youtube.com/watch?v=GmVufTUFmVc) at the virtual workshop.

Then, with [Jean-Rémy Falleri][], we've pushed the study of these organizations further and built a grounded theory of CPMOs. See our [recent preprint](https://hal.telecom-paris.fr/hal-03976601), which follows our [registered report](https://hal.inria.fr/hal-03320556) at the [2021 IEEE International Conference on Software Maintenance and Evolution](https://icsme2021.github.io/). See also the [video of the talk](https://youtu.be/BUffMIO-geo) at the virtual conference.

In 2018, I founded the [Rocq-community][] organization, a CPMO for the Rocq ecosystem. It has been very successful and is now playing a major role in structuring the Rocq ecosystem. At the time of writing, it hosts over 60 projects, maintained by 40 maintainers.

Besides package maintenance, one of the objectives of Rocq-community was also to be a place to explore new forms of documentation, and establish new development practices. We have integrated the project [Hydras & Co.][] of [Pierre Castéran][]. In 2021, I have supervised the internship of [Jérémy Damour][] to contribute to this project and explore the use of [Alectryon][], a new documentation tool for Rocq projects by [Clément Pit-Claudel][]. With Pierre Castéran, Jérémy Damour, [Karl Palmskog][] and Clément Pit-Claudel, we wrote a [paper](https://hal.archives-ouvertes.fr/hal-03404668), that was published at [JFLA 2022][], about this project, our vision, and our use of modern tools and maintenance techniques to manage it.

[Alectryon]: https://github.com/cpitclaudel/alectryon
[Hydras & Co.]: https://github.com/rocq-community/hydra-battles
[JFLA 2022]: http://jfla.inria.fr/jfla2022.html

[Jean-Rémy Falleri]: https://www.labri.fr/perso/falleri/perso/
[Pierre Castéran]: https://www.labri.fr/perso/casteran/
[Jérémy Damour]: https://github.com/start974
[Karl Palmskog]: https://setoid.com/
[Clément Pit-Claudel]: http://pit-claudel.fr/clement

### Methods

Software engineering researchers rely on empirical methods to acquire knowledge and evaluate new tools and techniques. The goal is that software engineering practice can become more and more evidence-based, rather than relying only on expert and anecdotal knowledge. But, because empirical software engineering is still a young discipline, many empirical methods are still to be explored.

With [Annalí Casanueva Artís][], an empirical political economist, we've applied a quantitative method from econometrics, Regression on Discontinuity Design (RDD), to derive causality from a quasi-experiment setting (to evaluate the impact of a change in a development repository). My [PhD thesis][] contains two applications of this method (to evaluate a bug tracker switch and the introduction of a pull request template with checkboxes).

With [Jean-Rémy Falleri][], we've applied a qualitative method from sociology, Grounded Theory (GT), to generate a theory of CPMOs from diverse sources of data (documentation, public discussion records and interviews).

In the spirit of reproducible research and open science, I systematically share publicly my data analysis code as Jupyter notebooks, as well as my datasets.

[Annalí Casanueva Artís]: https://annalicasanueva.com/en/

Software
--------

Below, I list some software projects whose maintenance I am actively involved in. See also some [past software projects](/en/past-topics#past-software-projects).

### The Rocq Prover

*GitHub repository: <https://github.com/rocq-prover/rocq>*

The Rocq Prover is a proof assistant (formerly known as Coq) that has been developed at Inria since the 1980s. Since 2015, the Rocq development team has adopted modern development practices and has opened up to a community of contributors. I have been a witness and an actor of these changes, that I describe in my [PhD thesis][].
In 2022, our team was awarded the [Open Science Award for Open Source Research Software](https://www.ouvrirlascience.fr/open-science-free-software-award-ceremony/) by the French ministry of research in acknowledgment for these efforts to open up the development of Rocq. See this [blog post]({% post_url 2022-03-01-prix-science-ouverte %}) (in French) on the topic.

Among the many changes toward more stability, we have put significant effort to improve the documentation. Thanks to [Clément Pit-Claudel][], who was the initial author of the proposal and the associated infrastructure, and many contributors, we have moved the reference manual of Rocq to Sphinx, and we have subsequently introduced many changes to guarantee that it is more consistent and more exhaustive. Examples are continuously checked, and now, even the documented syntax is matched against Rocq's (extensive) parsing rules, thanks to a work in collaboration with [Jim Fehrle][]. All our development processes are described in detail in our [contributing guide][].

[Jim Fehrle]: https://github.com/jfehrle

[contributing guide]: https://github.com/rocq-prover/rocq/blob/master/CONTRIBUTING.md

To make the Rocq Prover and the many great packages of its ecosystem more accessible, but also to improve reproducibility and replicability of research based on Rocq, two related initiatives are the [Rocq-community][] CPMO, that I have already [presented above](#community-organization-and-package-maintenance-at-the-ecosystem-level), and the [Rocq Platform][]. The latter is a project, led by Michael Soegtrop, with help from Karl Palmskog, Enrico Tassi, myself, and others, to provide an easy way to install a standardized bundle containing the Rocq Prover and a selection of useful Rocq packages, on any operating system. This project started based on previous work by Michael Soegtrop on the Coq Windows installer, and on [experimentations](https://github.com/MisterDA/ocaml-platform) done by Antonin Décimo on opam-based Windows installers, under the supervision of [Yann Régis-Gianas][] and myself. See the [paper](https://hal.inria.fr/hal-03592675) that we have published on the topic.

[Rocq-community]: https://github.com/rocq-community/manifesto
[Coq Platform]: https://github.com/coq/platform
[Yann Régis-Gianas]: https://yrg.gitlab.io/homepage/

### The project-specific Coq bot

*GitHub repository: <https://github.com/coq/bot>*

The Coq bot is a multi-task bot that helps Coq maintainers by automating everyday's tasks.

I started writing this bot in 2018 to allow the use of GitLab's continuous integration for the GitHub repository of Coq, in ways that were not (and are still not) supported natively. This feature is also used by many other projects that had similar needs (mostly projects from the Coq ecosystem, such as [MathComp][], but also some projects outside).

The bot has acquired many new features over time to assist the Coq development team, including thanks to the internship of [Julien Coolen][] that I supervised in 2020, and the collaboration with other Coq developers.

Today, it is an essential tool for Coq release management, issue and pull request management, continuous integration, and community support.
It is also a platform for experimenting new ideas around open source software maintenance practice.

See the [paper](https://hal.inria.fr/hal-03479327) that we published at [IEEE Software](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=9864592&punumber=52) to present our vision, the main features of the bot and the design choices that make it easy to maintain and extend.

[Julien Coolen]: https://github.com/jtcoolen

### Rocq-community templates, Docker-Coq-Action and the Coq Nix Toolbox

*GitHub repositories: [templates][], [Docker-Coq-Action][], [Coq Nix Toolbox][].*

As part of the [Rocq-community][] initiative, there was a significant effort toward providing better tools for Rocq project maintainers, notably around continuous integration (but not limited to that). I have contributed to create and maintain the three main projects around this question (together with many contributors, most notably [Karl Palmskog][], [Erik Martin-Dorel][], and [Cyril Cohen][]):

1. The Rocq-community [templates][] provide a tool for generating standard files (documentation, continuous integration, build and packaging files) automatically from information contained in a `meta.yml` file. They are used by most projects hosted inside Rocq-community, but also by many projects outside. At the moment, the templates are only well-suited to single-package repositories, but we have plans for monorepo (multi-package repository) support in a V2 of the templates that would stop relying on the Mustache template language.
2. [Docker-Coq-Action][] provides the simplest solution to set up continuous integration for a Coq project: a GitHub Action that only requires an opam file and almost zero configuration for simple use cases, and which is flexible enough to account for advanced use cases (in fact, it is flexible enough to be applicable to non-Coq projects as well).
3. The [Coq Nix Toolbox][] is an advanced tool based on the [Nix][] package manager. It can be used to get a local development environment ready to build any Coq package, using released or unreleased versions of its Coq dependencies. It can also be used to generate a continuous integration setup for [RDCT](#reverse-dependency-compatibility-testing). See our abstract and the video of the demo at the [Coq workshop 2021][].

[templates]: https://github.com/rocq-community/templates
[Docker-Coq-Action]: https://github.com/rocq-community/docker-coq-action
[Nix]: https://nixos.org/

[Erik Martin-Dorel]: https://www.irit.fr/~Erik.Martin-Dorel/index_en.php
[Cyril Cohen]: https://perso.crans.org/cohen/

Teaching
--------

### At Télécom Paris

In 2024-2025, I am responsible for:

- The practical part of a course on logical foundations of computer science ([CSC_3TC34_TP](https://synapses.telecom-paris.fr/catalogue/2024-2025/ue/22099/CSC-3TC34-TP-logique-et-fondements-de-l-informatique?from=P5181), formerly INF110), which includes labs introducing the Rocq Prover. The theoretical part is given by David Madore. The course is part of the first year of the engineering cycle at Télécom Paris. The lab subjects are [available](https://gitlab.telecom-paris.fr/theo.zimmermann/coder-deployment-for-inf110/-/blob/main/inf110-workspace-contents/) (in French).
- With Marc Jeanmougin, a course on contributing to free software, also part of the first year of the engineering cycle at Télécom Paris ([CSC_3TC37_TP](https://synapses.telecom-paris.fr/catalogue/2024-2025/ue/22098/csc-3tc37-tp-contribution-a-un-logiciel-libre), formerly INF113). The course material is [available](/fr/cours-logiciels-libres) (in French).
- An optional course on web development, part of the second year of the engineering cycle at Télécom Paris ([CSC_0EL10_TP](https://synapses.telecom-paris.fr/catalogue/2024-2025/ue/2133/CSC-0EL10-TP-web-development-developpement-web?from=P5015), formerly INF203).

### Previously

At Université Paris Cité, I was responsible for the course on [Free Software](/fr/cours-logiciels-libres) in the first year of the master's program for two years (2021-2022 and 2022-2023). I was also in charge of the labs for the Coq course in the first year of the master's program ([Computer-Assisted Proofs][]) for seven years (from 2016-2017 to 2022-2023). In previous years, I was also in charge of labs for Python classes (introduction to programming; algorithms and data structures), an OCaml class, and a class on languages and automata.

[Computer-Assisted Proofs]: https://github.com/herbelin/cours-preuves-ordinateur
