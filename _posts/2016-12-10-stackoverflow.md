---
layout: post
title: Exploring the Stack Exchange way
lang: en
draft: true
---

## Introducing Stack Overflow

Like every programmer, I have known the [Stack Overflow](http://stackoverflow.com/) Q&A website for a long time now.
For our community, it probably was one of the most important innovations of the recent years
and it is now a routinely used tool.
Have a question on programming?
You google it, and you are most likely to find, among the first results,
one or several questions on Stack Overflow with good answers to your problem.
A little bit like when googling for a general notion,
one of the first results should probably be a Wikipedia page.

This is one of the key aspects of the platform.
Most of its traffic comes from search engines and, similarly to Wikipedia, most viewers are just that: viewers.
The platform does not try and actually does not want to convert most of the viewers into users
because they would not bring significant value
(value for the platform being good questions and most importantly good answers).
In that respect, it is taking a very different approach compared to all the "social" platforms that pop up these days,
and in particular it is much different from Quora, a competitor Q&A platform,
which used to require signing up just to view a single question
(I never did; now it asks me to sign up to view a second question).

The second and the most known component of the platform formula is to award "reputation".
Users earn reputation points by asking good questions and giving good answers and being up-voted by other users.
Reputation has a inherent value for some programmers because it can help demonstrate to future employers
that you possess expert skills which have been recognized by others.
The same teacher who encouraged the students in my class to create a blog and a LinkedIn account
also told us about earning reputation on Stack Overflow.

Reputation is also key to getting more involved in the community itself
as you can unlock new privileges when reaching certain levels.
Thus, it acts as XP in video games and it actually helps gamifying the whole activity of helping each other out.
And it acts as a filter.
By not getting full access to the website features right from the start,
new users are taken through a path which will teach them how to properly interact with it.
Only with some reputation can you start up-voting, later you can start leaving comments,
later still you can start down-voting.

The community self-moderates.
Moderation is crowd-sourced, as people with enough moderation can vote to close down bad questions.
The dreaded down-vote is one main source of moderation.
And it is one of the barrier to overpass when you are a new user
because you are most likely to not fully understand the website requirements[^newbie].
Thus people may down-vote your question. It can feel a bit harsh.
But then if you are wise, you edit or delete your question and learn from the experience[^deleting].

[^newbie]: The website tries very hard to discourage you from posting your question though. It displays the rules, tries to automatically identify bad questions (too much code is one criterion), proposes you similar questions that might contain an answer. The problem is that people on the Internet are used to not reading the rules and feel like they are always in a hurry. This is something that people on Stack Overflow do not tolerate.

[^deleting]: There is even a "peer-pressure" badge for deleting a question that was down-voted. That was my very first badge!

Questions should show research: don't ask what is obvious.
Questions are supposed to serve as a canonical documentation for later viewers: duplicates are banned.
While it is generally not recommended to dig up an old thread on a traditional forum,
it is very much encouraged to add your answer or a comment or your vote to an old question.

StackOverflow is organized with tags, and this is very useful given the number of questions the site receives.
Given that I am not into mainstream technologies,
I can reduce drastically the number of questions I see by
[following only the tags which I am interested in](http://stackexchange.com/filters/252631/open-source-elm-coq-nix).
This year, I started following the Coq tag for the same reason I follow the Coq-Club mailing list:
to know what the questions of beginners are, and to learn from the answers that other people give.

## The adventure of crowd-sourced documentation

In August of this year, Stack Overflow introduced Documentation in public beta.
They got my attention immediately as I want to see how they can apply their reputation-based methodology
to the more complicated problem of mass collaboration for writing.
So far, only Wikipedia has developed a successful model for such mass collaboration.

Wikipedia's model is based on a posteriori moderation:
anyone can contribute anytime and their edit is live immediately,
but some people and some bots are constantly reviewing recent changes
and when changes do not respect the rules, or obviously decrease the page's quality, they are reverted.

On the contrary, Stack Overflow's model revolves around reputation-based a priori moderation.
To start proposing changes to the documentation on one particular programming language,
you will first have to demonstrate your skills by getting up-votes for an answer on this language.

According to Michael Nielsen in *Reinventing discovery*, the wiki-novel "A Million Penguins"
was a failure mainly because moderation was done by a limited group of persons (students in fact)
who could not keep up with all the contributions which arrived due to the publicity around the project.
Stack Overflow does not do that mistake by having a large body of reviewers
(anyone above a certain level of reputation).
Although several positive reviews are necessary to approve an edit,
there have still been problems with bad edits being approved too often[^audits].
While reverts ("rollbacks") are possible, they are not supposed to be part of the standard workflow.

[^audits]: Stack Overflow had to introduce "audits" in [an update of the Documentation feature](http://meta.stackoverflow.com/questions/336627/documentation-update-october-20th) to spot and ban automatically the reviewers who approve anything, like blatant vandalism for instance.

After being curious at the beginning and even contributing some documentation about Elm (a programming language),
I was a bit disappointed by the current result and stopped participating
(this was also the beginning of my PhD so I had topics with higher priority).
Still, I think this will be interesting to see what this Documentation feature gives
after a longer period of gradual improvements.

## The Stack Exchange galaxy

As Stack Overflow kicked off right from the start,
[new Q&A sites](http://stackexchange.com/sites?expand=true#oldest) were added by the team
so that other domains and other communities could benefit from the same reputation-based software.
No site has ever reached the size of Stack Overflow, which is huge,
but some of them have become pretty well-known on their own and all have an active community.

Nowadays, the process to create a new site is entirely community-driven.
There is a series of steps to go through, and a special site dedicated to the creation of new sites:
[Area 51](http://area51.stackexchange.com/).
This is somewhat comforting me a little from the fact that the software is not open source[^free].
You cannot run your own instance, but at least if you gain enough momentum you can start a new site on a new topic.

[^free]: But it looks like they thought about open sourcing it: [http://meta.stackexchange.com/questions/3086/will-open-sourcing-stack-overflow-destroy-our-business-model](http://meta.stackexchange.com/questions/3086/will-open-sourcing-stack-overflow-destroy-our-business-model).

Among the sites that were added lately
(only one year ago actually, so it is seven years younger than Stack Overflow) is
[a beta site on free and open source software](http://opensource.stackexchange.com/).
I registered to answer [a question](http://opensource.stackexchange.com/questions/4254/)
which was on the verge of being closed because people thought it was not answerable objectively.
Since then, I've answered 46 more questions, always happy to spread the good word
and to help out people who struggle to understand the complicated world of copyright and licenses
(questions about licenses are what this site gets the most).
This has also helped me [gain reputation](http://opensource.stackexchange.com/users/5858/zimm-i48)
faster than on StackOverflow, and thus has allowed me to test and better understand the various
priviledges and moderation tools so that I could write this blog post.
