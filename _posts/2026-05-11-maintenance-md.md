---
layout: post
title: Are your dependencies dead? And how maintainers can help (and get help)
lang: en
date: 2026-05-13 16:50:00 +0200
redirect_from: maintenance-md
excerpt: This weekend, I read "Weekend at Bernie's", a recent blog post from Andrew Nesbitt, in which he tries to quantify how many of the critical dependencies of various ecosystems are effectively "dead". The post was very interesting, and I like the methodology he used. But what I noticed (besides the relatively high percentage of "dead" critical dependencies) was the large number of dependencies that are in an "unknown" state, i.e., for which we don't know whether they are maintained or not.
---

This weekend, I read ["Weekend at Bernie's"](https://nesbitt.io/2026/05/08/weekend-at-bernies.html), a recent blog post from Andrew Nesbitt, in which he tries to quantify how many of the critical dependencies of various ecosystems are effectively "dead".
The post was very interesting, and I like the methodology he used. But what I noticed (besides the relatively high percentage of "dead" critical dependencies) was the large number of dependencies that are in an "unknown" state, i.e., for which we don't know whether they are maintained or not. They are not active, but this does not mean that their maintainers are unreachable if there is a problem to fix, such as a security vulnerability. On the other hand, we don't have evidence that their maintainers are still reachable, because nobody has tried to reach them for a while, and they have not actively updated the repository either.

Besides, I would add that even for dependencies that are active, or dormant but responsive, users might still be at risk if everything depends on a single maintainer, who could go missing at any time. This is a common risk in open source software, close to the famous "bus factor" problem, which I tried to quantify [more than 6 years ago](https://dl.acm.org/doi/pdf/10.1145/3387940.3392209),[^cpmo] using data that were already coming at the time from Andrew Nesbitt.

We keep reminding users that open source software comes with no guarantee, and in particular no guarantee of future maintenance, so they have no right to complain if they don't support the project, financially or otherwise.
But that does not mean that all open source dependencies carry the same risks. Some of them are effectively "dead" or insufficiently maintained to be safe to use, but others, on the contrary, are well maintained, and perfectly safe to use.
So it would be nice if there was a way for projects to signal their maintenance status.

Of course, it is not as easy as declaring "this project is maintained", as this could very well be true when the declaration is committed to the repository, but it might no longer be true two years later when a problem arises and requires attention.

So here is my proposal, inspired by several sources, including the recent work on adding an [`x-maintenance-intent` field](https://github.com/ocaml/opam-repository/blob/master/governance/policies/archiving.md#specification-of-the-x--fields-used-in-the-archiving-process) to opam (the OCaml package manager) metadata, as well as the ongoing work of my postdoc Antonin Delpeuch on helping projects make their governance explicit through a [`GOVERNANCE.md` file](https://antonin.delpeuch.eu/posts/the-pull-request-hack-is-not-enough/#get-a-governance-model).

## A `MAINTENANCE.md` file

This would be a file that could be added to the root of a repository (like the current practice for standard files such as `README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `GOVERNANCE.md`, `SECURITY.md`, etc.)[^inflation] that would contain information about the maintenance intent and status of the project. Here are the sections that I would expect to find in such a file (and we could "normalize" them so that tools can consume them[^format] and display them in package registries, for instance):

- **Maintenance intent**: what types of maintenance activities the project intends to perform (e.g., "the project is actively developed and new features are regularly added", "the project is in maintenance mode and only bug fixes and security patches are provided", "the project is mostly dormant but the maintainers will respond to vulnerability reports and critical bug fixes", or "the project was developed as a fun hobby project and there is no intent to support users or any commitment to fix security issues").

- **Active versions**: which versions of the project are actively maintained (e.g., "only the latest major version is maintained", "versions 2 and 3 are maintained, but 2 only receives security patches").

- **Maintenance team**: who is responsible for maintenance activities. In particular, who has commit rights, who currently handles the releases, who else has rights to publish new versions to the package registry and could step in if the main maintainer goes missing, etc.

- **Maintenance team check-in**: as part of the above section, a statement about how often each maintainer is expected to check in to show that they are still active and reachable. This could be done by committing to the repository, or even by committing to the `MAINTENANCE.md` file itself if no other activity was needed. The commit to the `MAINTENANCE.md` file could also be used to record the last time the team member checked that they still had access to the package registry. We could also invent a new badge that would show when this author last committed to the repository. This information is particularly important because it would allow us to distinguish between "dormant but responsive" and "dead" dependencies (that Andrew Nesbitt had to classify as "unknown" in his analysis).

- **How to help**: if the project accepts help, for instance, in the form of funding (and what kind of additional maintenance activities this may guarantee), or in the form of engineering effort (including looking for new maintainers). Of course, after the event-stream and xz incidents, one might be wary of accepting new maintainers and some could argue that explicitly asking for help can even make projects a target of social engineering attacks, but on the other hand, it may be better to be transparent about this need and look for new maintainers early, rather than wait for maintainers to burn out and have to appoint new ones in a hurry. In particular, this declaration does not mean that the project has to appoint anyone who proposes to help.

Note that the goal of this new file is not to repeat or replace the information that can already be found in other files, such as `GOVERNANCE.md` for how new maintainers are appointed, or `SECURITY.md` for how to report security vulnerabilities. Any information that is already present elsewhere can be simply linked from the `MAINTENANCE.md` file.

All in all, the file could look like this:

```markdown
# Maintenance intent

Project X is currently in maintenance mode, and only bug fixes and security
patches are provided.

## Active versions

The latest major version (3.x) receives regular bug fixes and security 
patches. Version 2.x only receives security patches, and version 1.x is no
longer maintained.

## Maintenance team

- Alice (@alice):
  - Commit rights, release manager, has access to the package registry.
  - Checks in at least once every 3 months.
  - Last check-in to `MAINTENANCE.md`: 2026-05-01 (confirmed access to the package registry).
  - Last commit to the repository: \
    ![check-in badge](https://img.shields.io/badge/does-not-exists-yet?project=X&who=alice&freq=3m)
- Bob (@bob):
  - Commit rights, has access to the package registry.
  - Checks in at least once every 6 months.
  - Last check-in to `MAINTENANCE.md`: 2026-01-15 (confirmed access to the package registry).
  - Last commit to the repository: \
    ![check-in badge](https://img.shields.io/badge/does-not-exists-yet?project=X&who=bob&freq=6m)
- Carol (@carol):
  - Commit rights.
  - Checks in at least once every 6 months.
  - Last check-in to `MAINTENANCE.md`: 2024-09-23.
  - Last commit to the repository: \
    ![check-in badge](https://img.shields.io/badge/does-not-exists-yet?project=X&who=carol&freq=6m)

## How to help

Maintainers are not currently accepting financial support and do not have
the bandwidth to review new feature proposals. Getting new maintainers on
board could help make the project more active and accept new features again.
```

In the example above, Carol has not checked in to the `MAINTENANCE.md` file for more than 6 months, but the badge could still show that her last commit to the repository was within the last six months.

## What do you think?

My goal with this proposal is to come up with a methodology that would be lightweight for maintainers to implement, but would also help with transparency toward users about a project's status and automatically signal when there is an issue with maintainers' availability.
I am particularly interested in hearing from maintainers whether this is something they would be willing to adopt.

In particular, I believe that we should stop reasoning that, just because an open source package happens to have many dependents, the author should have a particular responsibility toward its users. If there are good mechanisms to communicate maintenance intent and status, then users can make informed decisions about which dependencies to use, and maintainers can also explain under what conditions they are willing to provide support. Authors who created packages as just a hobby can be transparent about not wanting to support users, and users are free to fork the project and maintain it themselves if they are not satisfied with the level of maintenance provided by the original author.

[^cpmo]: In the linked article, there is also a part where I examine how ecosystem members can self-organize to mitigate the risks of package abandonment. If you are interested in this part, here is a more recent and more in-depth article I wrote on the topic: ["A grounded theory of Community Package Maintenance Organizations"](https://telecom-paris.hal.science/hal-03976601/document).

[^inflation]: One may notice that there is a kind of inflation in the number of such files that one expects to find in a given repository. I don't think this is a problem in itself, as each of these files has a clearly defined role and can be read and understood independently of the others. Keeping files separate helps with modularity. The fact that they are all expected to be located at the root of a project might be seen as a problem, however (and this is without counting the similar inflation of configuration files also expected to be there). Maybe something could be done about the latter issue, such as standardizing a directory under which these markdown files are expected to be found (and similarly for the configuration files).

[^format]: I was initially hesitating between a clearly machine-readable format like YAML and a more human-oriented format like Markdown. In the end, I figured that what you put in it is mostly going to be free-form text (too many constraints would hurt), but if you make the sections standard, provide a template, and offer tools to check whether your file matches the template, then your Markdown file can still be consumed by programs.