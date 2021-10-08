---
layout: post
title: Nix-based CI with the Coq Nix Toolbox
lang: en
draft: true
#date: 2021-08-01 15:00:00 +0200
#redirect_from: 
#excerpt: 
---

What do you say of a continuous integration (CI) system that:
- is super fast (because it never rebuilds the same thing twice),
- can test your Coq project with several versions of its dependencies,
- can check that you don't break compatibility with its reverse
  dependencies,[^reverse-dependencies]
- allows you to check out any pull request and test it without having
  to rebuild anything,
- gives you an environment ready to build any reverse
  dependency[^reverse-dependencies] if you need to prepare a
  compatibility fix?

[^reverse-dependencies]: We call *reverse dependencies* of a project `A` the projects that have `A` as a—direct or transitive—dependency.

## Some words of history ##

Ever since I founded the [coq-community][]
organization,[^coq-community] making sure that packages were
continuously tested (in particular for compatibility with a range of
Coq versions) was an important objective.

[^coq-community]: A community organization for the long-term maintenance of interesting Coq packages. Read more about it in its [manifesto][].

[coq-community]: https://github.com/coq-community
[manifesto]: https://github.com/coq-community/manifesto

At this time, I already had a few years of experience[^nix-experience]
as a user of the [Nix][] package manager and several other developers
and users of Coq were also using it,[^developers] so it made sense to me to start
promoting its use in the Coq ecosystem by devising a CI solution based
on it.  This gave rise to the first coq-community CI [templates][] and
they were used by many projects for several months to several years.

[^nix-experience]: I can't remember exactly when I discovered and started using the Nix package manager but I found my oldest Nix issue from April 2016: <https://github.com/NixOS/nixpkgs/issues/14829>
[^developers]: Vincent Laporte, who was an experienced Coq and Nix user, had recently joined the Coq development team and had also converted Maxime Dénès (another Coq developer) to the use of Nix.

[Nix]: https://nixos.org/guides/how-nix-works.html
[templates]: https://github.com/coq-community/templates

But this initial solution suffered from several limitations and I had
too little time to improve it, so it was mostly superseded by an
opam+Docker-based CI solution whose main author and maintainer is Erik
Martin-Dorel.  In particular, today, thanks to Erik's work, you can
very easily set up CI for your Coq projects using our
[Docker-Coq-Action][], as soon as you have an `.opam` file in your
repository.

[Docker-Coq-Action]: https://github.com/marketplace/actions/docker-coq-action

But Docker and opam do not provide the incredible flexibility that
comes with Nix.  Furthermore, a must-have in the Nix ecosystem today
is Domen Kožar's [Cachix][], a solution that anyone can use to never
rebuild the same thing twice.  Domen has also developed GitHub Actions
for Nix.[^github-actions] So it still made sense to look into
providing a good Nix-based CI solution.  And this is were Cyril Cohen
comes in.

[Cachix]: https://cachix.org

[^github-actions]: GitHub Actions didn't exist when I started working on the CI templates. At that time, the dominant CI provider was still Travis CI.

Cyril is a [math-comp][] maintainer and for the projects he maintains,
he had started to develop amazing Nix tooling, that we felt would be
worth generalizing so that they could benefit the entire Coq community.
This is what we have done and the result is the [Coq Nix Toolbox][].

[math-comp]: https://github.com/math-comp
[Coq Nix Toolbox]: https://github.com/coq-community/coq-nix-toolbox

## Introducing the Coq Nix Toolbox ##

We have presented the [Coq Nix Toolbox][] during the [Coq workshop
2021][].  The corresponding [abstract][] is available as well as the
[slides][] and the [video recording][] of the talk / demo.

[Coq workshop 2021]: https://coq-workshop.gitlab.io/2021/
[abstract]: https://coq-workshop.gitlab.io/2021/abstracts/Coq2021-01-03-nix-toolbox.pdf
[slides]: https://coq-workshop.gitlab.io/2021/slides/Coq2021-01-03-slides-nix-toolbox.pdf
[video recording]: https://www.youtube.com/watch?v=0qnam6PHyQc

We have also provided documentation for the toolbox, so I won't repeat
everything here but only give the main ideas.

### Taking advantage of the Nix package collection ###

[Nix][] is both a tool (a package manager) and a language for writing
derivations (formulas explaining how to build a package).  It comes
with a massive collection of derivations that is maintained in a
[GitHub repository][nixpkgs].  I say massive because this not only
contains everything needed to build a full-fledged Linux distribution
(NixOS) but also large collection of language-specific packages for
many languages.  This is what makes Nix such a great tool for software
developers.

[nixpkgs]: https://github.com/NixOS/nixpkgs

Among them, a relatively small collection is `coqPackages`.  It is
maintained by a small group of users of both Nix and
Coq.[^coqPackages-maintainers]

[^coqPackages-maintainers]: Among nixpkgs committers who contribute to `coqPackages`, we can cite in particular Vincent Laporte (who created the collection and still actively maintains it), old-timers like John Wiegley and newcomers like Ben Siraphob. In addition, we have a larger group of `coqPackages` maintainers who are not nixpkgs committers (yet).

Recently, Cyril has done an important refactoring to this collection
to make it much easier to: package a Coq project; save information on
how to build multiple versions of a given package; override some data
(in particular, which version of a package to build and where to fetch
its sources).  The [Coq Nix Toolbox][] relies on this to build any
project and its dependencies, with a development version instead of a
known release.

This also allows fetching all the dependencies of any reverse
dependency[^reverse-dependencies] (that is present in nixpkgs or for
which we have written a derivation) but substituting which version to
use for the current project.  Concretely, say I am preparing a change
for [paramcoq][] and I want to know if it breaks [CoqEAL][], a project
which depends on paramcoq.  I can run `nix-build --argstr job coqeal`
and it will build CoqEAL but using the version of paramcoq I am
currently working on.  Now, say my change breaks CoqEAL and I need to
write a compatibility patch.  I can run `nix-shell --argstr job
coqeal` and I will get into a shell where I have all the dependencies
needed to build CoqEAL (including, e.g., mathcomp-algebra), but with
my current version of paramcoq instead of the last release.  Now, I
just need to clone the sources of CoqEAL, fix the build and commit.

[paramcoq]: https://github.com/coq-community/paramcoq
[CoqEAL]: https://github.com/CoqEAL/CoqEAL

### Taking advantage of the Cachix service ###

One of the great strength of [Nix][] is that it is a source-based
package manager, but with a binary cache.  By default, [Nix][] will
look for cache hits in the official binary cache (`cache.nixos.org`).
It avoids rebuilding anything for which it can find a cache hit and
downloads the compiled binary instead.  But when a binary is not in
cache (for instance, because you have overridden the version to
build), then it will trigger the build locally.

[Cachix][] is a service developed by Domen Kožar, which makes it
possible to upload outputs of builds that ran locally or in CI to a
personal or organizational cache.  This is very convenient to avoid
rebuilding something that was already built in CI for instance.  It
comes with a GitHub Action, which makes it really easy to set up in
CI, and our [Coq Nix Toolbox][] is able to generate GitHub workflows
that use it.[^templates]

[^templates]: Now, the coq-community [templates][] can also be used to generate a simpler GitHub workflow that will fetch from and push to Cachix. This template-based CI setup also supports testing multiple versions of Coq and doesn't require installing the [Coq Nix Toolbox][] in the repository. However, it is more limited. For instance, it won't test reverse dependencies. See the [documentation][nix-ci] on the coq-community wiki.

[nix-ci]: https://github.com/coq-community/manifesto/wiki/Continuous-Integration-with-Nix

Anyone can create a 5GB public Cachix cache for free, and in practice
this should be sufficient for most projects.  In addition, we've asked
Inria to subscribe to the Pro plan to provide 1TB of storage for the
Coq community and support the development of Cachix.  At the moment,
there are three Cachix caches which are benefiting of this plan:
`coq`, `math-comp` and `coq-community`.  If you are a prominent Coq
user or Coq-using organization, feel free to reach out to me to create
or transfer a Cachix cache that would benefit from the extended
storage space.

## Extending the benefits of Cachix to pull requests from forks ##

To push build outputs to Cachix, you need a secret (a signing key or
an authentication token).  This secret is typically stored as a
(secret) environment variable in your CI configuration.  For obvious
security reasons, there are restrictions on who can see these secrets
variables.  In particular, when a user create a pull request (PR) from
a fork, GitHub doesn't make secret variables available, because one
could change the program being built to leak these secrets.  The
unfortunate consequence is that a CI build for a PR from a fork cannot
be pushed to Cachix, defeating part of the usefulness of the Coq Nix
Toolbox setup.[^other-consequence]

[^other-consequence]: At the moment, another consequence is to significantly slow down builds of reverse dependencies because the GitHub workflows that the [Coq Nix Toolbox][] generates rely on Cachix to store build results between the various stages.

This is all the more regrettable that, as long as the CI script itself
isn't changed (so for instance, if we use the CI configuration from
the base branch instead of the one from the CI branch), the build
process hasn't actually access to the secret environment variables,
because Nix builds are isolated from the outside environment.  This
means that it would be safe to run and push to Cachix a build of any
(untrusted) PR from a fork.

Then how can we work around this limitation?

### Triggering GitHub workflows with the `pull_request_target` event ###

### Alternatively, taking advantage of [coqbot][] ###

[coqbot]: https://github.com/coq/bot

Back in 2018, we were considering switching the CI system in use for
the Coq repository to GitLab CI.[^gitlab-ci] GitLab CI had recently
introduced support for testing GitHub repositories but this support
was very limited since it didn't handle pull requests from
forks.[^gitlab-forks] We didn't let this limitation stop us.  I wrote
a [bot][coqbot], that gained many features since then, but whose first
job was to push and synchronize branches on the GitLab mirror
repository for any pull request opened on the GitHub repository.

While we could have let GitLab take care of sending back the CI status
to GitHub, I also wrote code for that part, and this gave us more
flexibility.  For instance, we decided not to test the head of a PR,
but to automatically create a merge commit with the base branch and
test this commit instead.[^merge-commit] The commit message contains
some information that [coqbot][] uses to find to which commit on
GitHub to report the CI status back.

[^gitlab-ci]: GitLab CI was one of the most powerful and flexible CI provider at the time, and much better suited to our use case than the other ones that we had previously tested. See the end of Section 3.6.4 (on pages 50 and 51) of my [thesis][] to learn more about this. Remember that GitHub Actions didn't exist at the time.
[^gitlab-forks]: To date (more than three years later), this is still an unresolved enhancement request: <https://gitlab.com/gitlab-org/gitlab/-/issues/5667>
[^merge-commit]: This feature was inspired by the behavior of Travis CI. This is, by the way, also what GitHub Actions does when run on pull requests (as investigated by Erik Martin-Dorel in <https://github.com/erikmd/poc-github-ci/pull/2>).

[thesis]: https://hal.inria.fr/tel-02451322/

We can use the same trick to test a branch from a fork but make the
secret variable available to it.

For instance, for every PR opened on a GitHub repository configured
with the Coq Nix Toolbox GitHub workflow, [coqbot][] could verify that
nothing has been changed in the `.github/workflows` directory, and if
that's the case, push the PR head to a branch with a custom name like
`pr-XXX`.
