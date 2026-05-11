---
layout: post
title: "Figuring out whether your dependencies are still maintained and how maintainers can help (and get help)"
lang: en
date: 2026-05-11 16:00:00 +0200
redirect_from: maintenance.md
draft: true
#excerpt: 
---

This week-end, I read ["Weekend at Bernie's"](https://nesbitt.io/2026/05/08/weekend-at-bernies.html), a recent blog post from Andrew Nesbitt, in which he tries to quantify how many of the critical dependencies of various ecosystems are effectively "dead".
The read was very interesting, and I like the methodology he used. But what I noticed (besides the relatively high percentage of "dead" critical dependencies) was the large number of dependencies that are in an "unknown" state, i.e., for which we don't know whether they are maintained or not. They are not active, but this does not mean that their maintainers are not reachable if there was a problem to fix, such as a security vulnerability. On the other hand, we don't have a proof that their maintainers are still reachable, because nobody has tried to reach them for a while, and they have not actively updated the repository either.

In addition, I'd add that even for the dependencies that are active, or dormant, but responsive, users might still be at risk if this all depends on a single maintainer, who could go missing at any time. This is a common risk in open source software, close to the famous "bus factor" problem, that I tried to quantify [more than 6 years ago](https://dl.acm.org/doi/pdf/10.1145/3387940.3392209), thanks to data that was already coming at the time from Andrew Nesbitt.

That open source software comes with no guarantee, and in particular no guarantee of future maintenance, is something that we keep reminding users (and that they have no right to complain if they don't support the project, financially or otherwise).
But that does not mean that all open source dependencies carry the same risks. Some of them are effectively "dead" or insufficiently maintained to be safe to use, but others, on the contrary, are well maintained, and perfectly safe to use.
So it would be nice if there was a way for projects to signal their maintenance status.

Of course, it is not easy as declaring "this project is maintained", as this could very well be true when the declaration is committed to the repository, but it wouldn't be anymore two years later when a problem arises and requires attention.

So here is my proposal, inspired by several sources, including the recent work on adding a [`x-maintenance-intent` field](https://github.com/ocaml/opam-repository/blob/master/governance/policies/archiving.md#specification-of-the-x--fields-used-in-the-archiving-process) to opam (the OCaml package manager) metadata, but also the ongoing work of my postdoc Antonin Delpeuch on helping projects to make their governance explicit through a [`GOVERNANCE.md` file](https://antonin.delpeuch.eu/posts/the-pull-request-hack-is-not-enough/#get-a-governance-model).

## A `MAINTENANCE.md` file

This would be a file that could be added to the root of a repository (like the current practice for standard files such as `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `GOVERNANCE.md`, etc.) that would contain information about the maintenance intent and status of the project. Here are the sections that I would expect to find in such a file (and we could "normalize" them so that tools can consume them and display them in package registries, for instance):

- **Maintenance intent**: what types of maintenance activities the project intends to perform (e.g., "the project is actively developed and new features are regularly added", "the project is in maintenance mode and only bug fixes and security patches are provided", "the project is mostly dormant but the maintainers will respond to vulnerability reports and critical bug fixes").

- **Active versions**: which versions of the project are actively maintained (e.g., "only the latest major version is maintained", "versions 2 and 3 are maintained, but 2 only receives security patches").

- **Maintenance team**: who is responsible for maintenance activities. In particular, who has commit rights, who currently handles the releases, who else has rights to publish new versions to the package registry and could step in if the main maintainer goes missing, etc.

- **Maintenance team check-in**: as part of the above section, a statement about how often each maintainer is expected to check in to show that they are still active and reachable. This could be done by committing to the repository, possibly by committing to the `MAINTENANCE.md` file itself if no other activity was needed. The commit to the `MAINTENANCE.md` file could also be used to inform when was the last time that the team member checked that they have still access to the package registry. This information is particularly important, because that's the kind of thing that will allow to distinguish between "dormant but responsive" and "dead" dependencies (and that Andrew Nesbitt had to classify as "unknown" in his analysis).