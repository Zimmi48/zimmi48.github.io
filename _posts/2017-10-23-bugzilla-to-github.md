---
layout: post
title: Successfully migrating 4900 bug reports from Bugzilla to GitHub issues
lang: en
draft: true
redirect_from: bugzilla
---

## Prelude ##

I started contributing to Coq in 2015. This year, the Coq development team
was organizing the first Coding Sprint (later renamed into the Coq Implementors
Workshop) and was accepting pull requests on the GitHub repository so as to get
patches from external contributors[^1]. Back in these days, almost none of the
development was carried out through pull requests (I opened PR #68). Things
have changed dramatically since then.

![Pull request creation on the Coq repository over time](/images/coq-pull-requests-over-time.png)

[^1]: As can be seen on the graphic, pull requests started being opened much before (in August, 2011) but the Coding Sprint marked (to my knowledge) the time when the Coq development team started to encourage contributors to open them.

The data for the above graphic was obtained using the following very simple
script (adapt the upper bound to your own repository: `I * 30` should be a
number that is larger than the total number of pull requests):

```bash
#!/usr/bin/env bash

for I in {1..40}; do
  curl "https://api.github.com/repos/coq/coq/pulls?state=all&direction=asc&page=${I}" \
  | grep '^    "created_at' | cut -f 4 -d '"' | cut -f 1 -d 'T' >> dates
done
```

Pull requests are now used routinely to review other developers' patches before
integrating them; continuous integration was introduced to automatically test
whether a proposed change breaks a number of tracked external developments
(plugins and libraries)[^2]. These new processes have brought much stability
to the software at the price of a reasonably small overhead. They have also
demonstrated to be an excellent tool for sharing knowledge.

[^2]: See the documentation of the continous integration here: <https://github.com/coq/coq/tree/master/dev/ci#continuous-integration-for-the-coq-proof-assistant>

Meanwhile, bugs continued to be reported on [Bugzilla](https://www.bugzilla.org/),
the bug tracker that was used since July, 2007 (after a first migration from
[JitterBug](https://www.samba.org/jitterbug/)). Bugzilla suffered from many
drawbacks that were made all the more apparent when comparing to the much nicer
experience we were having in pull request discussions on GitHub.

Simply setting e-mail notifications for new bug reports was a hard task: we
had the mailing list <coq-bugs-redist@lists.gforge.inria.fr> which was connected
to a Bugzilla account that was put in cc of all new bug reports. But to
subscribe to this mailing list, you had to get moderator approval and, for some
time, no one was administrating this mailing list anymore[^3].

[^3]: In [this thread](https://sympa.inria.fr/sympa/arc/coqdev/2017-04/msg00025.html), we discover that the administrator of the mailing list was someone who had left the development team for several years.

More importantly, the lack of edition features, the difficulty to search an
issue, the loading times, the intimidating UI had a (non-quantified but probably)
significant impact on the developers, who tended to prefer slightly off-topic
discussions and disgressions in a pull request thread, rather than discussing
each specific issue in a separate thread on Bugzilla.

In April, I opened a wiki page
<https://github.com/coq/coq/wiki/BugzillaVsOtherTools> to discuss the possible
alternatives. Having a strong preference for gathering all our tools on GitHub,
I documented this one (and no one really documented any other alternative,
even if they existed).

In August, the Coq website was down for more than a week because of an
over-reaction of the IT services to an alledged hacking of the bug tracker
([in fact just a spam](https://sympa.inria.fr/sympa/arc/coq-club/2017-08/msg00040.html)). This was a good opportunity to
[discuss once more](https://sympa.inria.fr/sympa/arc/coqdev/2017-08/msg00019.html)
a migration to GitHub issues (with hosting less dynamic, subject-to-attack,
content as a nice benefit).

While I was initially proposing a transition during which we would be using both
bug trackers in parallel, the need to keep bug numbers as much as possible
was expressed and a script was found[^4] which was designed for that purpose.

[^4]: By Guillaume Melquiond, <https://sympa.inria.fr/sympa/arc/coqdev/2017-08/msg00042.html>

## The migration script ##

The migration script that was found in a Python 2 script which takes an export
from Bugzilla to XML as input and uses the GitHub API to create new issues
for every bug reports. It inserts first the bug reports whose number it can keep[^5]
and only when this is done it inserts bug reports that need to be renumbered.

[^5]: On GitHub issue reports and pull requests share a common set of identifiers. Given that about 1100 pull requests were opened on the Coq GitHub repository before the start of the migration, that was as many numbers that couldn't be used for bug reports.

Because issue numbers are attributed by GitHub at creation time and are not
chosen by the issue author, it is not possible to skip some non-existent bug
number. That's why the script contained an initial check that the input bug
numbers are contiguous. This was not the case for the Coq Bugzilla: many bugs
had been deleted, especially in the early years. Thus the first modification
that I did to this script was to use postponed bug reports to fill the holes
(missing bug numbers) so as to recreate continuity in the result. This worked
because the number of pull requests was already higher than the number of holes.

To increase the predictability of new issue numbers, it was important that no
issue or pull request be opened during the few hours that the migration took
to complete.
