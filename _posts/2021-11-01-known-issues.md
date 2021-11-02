---
layout: post
title: "Managing known issues: a refinement of the stale bot approach"
lang: en
#draft: true
date: 2021-11-02 20:00:00 +0100
redirect_from: known-issues
excerpt: There are a few universal problems that maintainers of successful open source projects end up facing. One of them is coping with a large number of open issues. This problem is often unavoidable because the available manpower to fix bugs and limitations rarely scales as fast as the manpower to report them. Therefore, the number of open bugs in the issue tracker of popular projects can end up growing and growing until a point where it becomes hard to manage.
---

There are a few universal problems that maintainers of successful open source projects end up facing.
One of them is coping with a large number of open issues.

This problem is often unavoidable because the available manpower to fix bugs and limitations rarely scales as fast as the manpower to report them.
Therefore, the number of open bugs in the issue tracker of popular projects can end up growing and growing until a point where it becomes hard to manage.[^nixpkgs-issues]

[^nixpkgs-issues]: As an illustration, let me take the case of the [nixpkgs repository](https://github.com/NixOS/nixpkgs), where a small assessment I did two years ago, [in response to a request from contributors](https://github.com/NixOS/rfcs/pull/51#issuecomment-527974188), shows that the average time to close issues has been slowly increasing over time: <https://github.com/Zimmi48/nixpkgs-issues/blob/master/nixpkgs-issues.ipynb>

## The stale bot approach

To alleviate this problem, many open source projects are nowadays choosing to rely on "stale bots", bots that automatically act on inactive issues (and pull requests), generally to close them.
Wessel *et al.*[^wessel] have done a preliminary study of projects that use the most well-known stale bot: <https://github.com/apps/stale>.

[^wessel]: Wessel, M., Steinmacher, I., Wiese, I., & Gerosa, M. A. (2019). Should I stale or should I close? An analysis of a bot that closes abandoned issues and pull requests. In 2019 IEEE/ACM 1st International Workshop on Bots in Software Engineering (BotSE) (pp. 38-42). IEEE.

However, everyone that has spent time writing a careful bug report, only to see that it got no reply, but the one of the bot that closed it for being stale, can testify that this doesn't feel like a great experience and doesn't give much incentive to report the next bug you encounter. Open source maintainers are often aware of this: to illustrate, see this [long discussion](https://github.com/NixOS/rfcs/pull/51) of nixpkgs maintainers and contributors about the introduction of a stale bot, or this [blog post](https://blog.gradle.org/stale-issue-backlog) of the Gradle project to justify their use of a stale bot (which they link to in every message posted by the bot).

I think that there are many research opportunities to study stale bots usage beyond what Wessel *et al.*[^wessel] did. Some research questions that come to mind:

1. In which context are stale bots introduced by project maintainers?
2. Are project maintainers satisfied with the stale bot solution?
3. How do issue reporters perceive the use of the stale bot?
4. What consequences does it have on the behavior of issue reporters? (Do they refrain from reporting new bugs they discover?)

To be addressed, these research questions would probably require a combination of quantitative and qualitative methods: mining software repositories, coding public discussions and blog posts, interviewing maintainers and issue reporters, econometrics methods to derive causality from quasi-experiments.

In the meantime, and without this evidence-based knowledge, as an open source maintainer, I am personally reluctant to introduce a stale bot to close our huge issue backlog in the Coq repository. Instead, I wish to explore alternative triaging approaches that scale.

## Documenting known issues

Releasing software with known issues happens all the time. Some known issues are left unfixed because of lack of manpower to fix them and because they are not of top priority. Some known issues are left unfixed because fixing them is hard and designing a proper solution will take time. In both cases, it is perfectly acceptable to release software, but acknowledging and documenting known issues is always a good idea.

First, documenting known issues can avoid users spending time on things which do not work and getting frustrated. When there are known workarounds, documenting them will help users figure out how to proceed instead.

Second, keeping a list of known issues can also avoid getting duplicate reports when users encounter these issues. And when duplicate reports are created nonetheless, they can help maintainers figure out that this is really a duplicate and where the canonical issue is to be found.

For users to easily find out about known issues, they should be documented close to the feature they are a limitation of. And when they are introduced in a new release, they should appear in the release notes.

For issue reporters and maintainers to quickly find a known issue, an index of known issue can be a useful thing to have. But it is not a strict requirement if they can easily locate the documentation of the corresponding feature (and the known issues are easy to spot from there).

If documented known issues provide a link to the canonical discussion, this can also help potential contributors become active participants in the resolution.

## Keeping the list of open issues focused

Accumulating a long list of open issues that are not actively worked on can be legitimately viewed as inefficient.

While closing issues which are not actively worked on with a stale bot risks burying them and leading to duplicate reports, closing inactive but documented known issues should not create such problems. Because they are documented, known issues are not just forgotten about. Ideally, the documentation even comes with a test case (within or separate from the documentation) that will help discover when they are accidentally closed or become irrelevant. Furthermore, if at any point, anyone wants to contribute to the discussion of the known issue, it is easy for them to do so if a link from the documentation to the canonical discussion is available.

Therefore, it seems reasonable to refine the stale bot approach into a novel stale known issue approach. This approach would roughly work in the following way:

1. When a bug or a limitation is reported, it should be confirmed (reproduced).
2. A confirmed bug or limitation which does not look like it will be fixed by the time of the next release should be documented as a known issue.
3. A documented known issue which is not receiving activity should be closed.
4. Any known issue receiving new activity (a new comment or a contributor self-assigning the issue) should be reopened (and reclosed if it becomes stale again).

The contributing documentation should direct potential contributors to the list of known issues, in addition to the list of open ones.

A bot and a clever use of labels or GitHub new [projects](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/about-projects) can serve to implement and automate the above process.

## Introducing this approach in a project with a big backlog

If we want to adopt this approach in the Coq project, the first thing we need to do is to handle the backlog of known, but undocumented issues.

Developers have expressed the need to document known issues several times in the past, so this objective is shared.[^coq-known-issues] What I'm not sure will be shared is the scope of known issues needing to be documented, but we can start with the ones that are consensual and work our way from there.

[^coq-known-issues]: See the most recent discussion in a [Coq Call](https://github.com/coq/coq/wiki/Coq-Call-2021-10-13) and an [issue from one year ago](https://github.com/coq/coq/issues/12665) describing a plan.

In PR [#15102](https://github.com/coq/coq/pull/15102), I am introducing a special directive so that we can document (and highlight) known issues in the Coq reference manual. I am also experimenting with using a [GitHub project](https://github.com/orgs/coq/projects/3/views/4) to manage the list of known issues, those that need documentation and those that are documented. The project also provides a custom field to add a link from the issue to its documentation. In the future, we could add a column/status for the known issues that are documented and stale, and thus that could be (temporarily) closed.