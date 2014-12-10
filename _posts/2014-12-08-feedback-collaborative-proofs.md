---
layout: post
title: "A key to massively collaborative math is a good interface for writing proofs"
date: 2014-12-10 16:00:00 +0200
lang: en
excerpt: Thanks to all the people who reacted, by various means, to my first blog post on collaborative proofs, I have had a lot of insights on what is most likely to not work in my project. But I am also glad that I found out that all these people were enthusiastic about the overall concept.
---

Thanks to all the people who reacted, by various means, to
[my first blog post on collaborative proofs]({% post_url 2014-11-06-collaborative-proofs %}),
I have had a lot of insights on what is most likely to not work in my project.
But I am also glad that I found out that all these people were enthusiastic about the overall concept.

The idea of getting amateurs involved in science seems quite convincing.
This really looks like a trending research topic today (see all the fuss about *citizen science*)
and I think this is fantastic.
Although, when it comes to mathematics, there don't seem to be so many projects
whose goal is to build tools for collaboration[^projects],
I am nevertheless not the only one thinking that a lot of amateur mathematicians (students, engineers, self-trained hobbyists...)
would be happy to join a global effort to help research progress.

Many had their doubts, however, on the technique I proposed in this aim.
It essentially looks too simple, too optimistic and not enough thought-through.
And also, since this is really hard to do formal proofs,
it must be even harder making it feasible for large crowds without a specialized knowledge.

*A priori*, my proposed system is supposed to distribute all the intermediate goals to users.
This was a concern for many as most of these intermediate goals probably aren't particularly meaningful.
And even a good mathematician might not be able to judge if a lemma is  correct or not if the so-called lemma has no apparent meaning.

This might be a **very important point** to which I have no definite answer for now.
However I imagine a system where the importance of each goal or sub-goal would be evaluated.
We could have, for instance, a system of bounties[^bounty] to give importance to an initial goal.
As for the intermediate goals, those that would occur most frequently in the sketch proofs of the users
and remain unsolved could be considered as more important (*algorithm needed*).
The most important sub-goals would be more likely to be meaningful or at least worth giving meaning to.
The system would then distribute only the most important goals and sub-goals to the user community.

But also, let's see how it goes on examples! I should (I am going to) start working on some actual
mathematical proofs and see to what extent these intermediate results are hard to grasp if they are presented out of context.

The second problem, according to the commenters, is that there are, on the one hand, hard theorems which require original ideas
and, on the other hand, uninteresting intermediate goals which can be proved in a matter of minutes by a trained mathematician.
So why would mathematicians risk losing the credit for a proof which they could have done alone?
And why would mathematicians waste their time describing the goals formally in an online tool?
Let me try to answer these two questions.

The way the scientific community attributes credit for a proof can evolve.
It seems logical that peers will give more credit to the authors of the most difficult steps,
even if many other contributors are involved at the edges.
If this is necessary, we can even imagine a system to measure the relative contribution of each author to a proof
(and how difficult were the problems they solved - again *algorithm needed*).
But even without that, it should be already enough to make the entire proof history public.
As explained by Tim Gowers
[when he presented Polymath for the first time](https://gowers.wordpress.com/2009/01/27/is-massively-collaborative-mathematics-possible/),
people can go and see by themselves who contributed to what in the proof.
Contributors can gain reputation among their peers.
And they can write cover letters for one another if that helps.
This won't necessarily be enough at first for people to agree to share their ideas on those conjectures
that are the biggest challenges of one field (and thus could result in the most rewarding papers).
But it might be just enough for side results, that nobody really has time to tackle by themselves
but which raise enough interest from a significant number of mathematicians
(and which can, like in the case of the Polymath project, result in a collective paper[^papers]).

We need to make sure that there is no waste of time in describing formally the goals in the online tool.
Working directly on a proof online should be as simple as sketching a proof on draft paper,
but with several advantages that come along for free.
Word processors have been designed so well that most of the writers have stopped drafting on paper
and have been working instead exclusively on their computers for some time already.
Can we achieve the same for math? Yes, probably.
Of course, the fact that current keyboards to not carry many keys for mathematical symbols does not help.
But with a fantastic user interface, we should be able to compensate for that.

And what would be these free bonuses that come along?
Well, there is the big bonus that proofs are automatically checked.
There is the obvious advantage of generating a paper quickly from the draft.
And lastly, mathematicians often use specific strategies (which are often specific to a particular domain):
applying these strategies by a simple click on a button can possibly speed up the writing a little (a lot?).

So suppose that the interface of this system is so simple
and so awesome that some mathematicians use it everyday to build up their proofs.
Then, they would get an additional bonus which is:
while they were working on a tedious but necessary sub-goal,
maybe all the other tedious but necessary sub-goals will have been solved by various contributors around the world.

It has been good having all that feedback.
I have started to realize that my project is fundamentally useless without a perfect interface.
It cannot succeed without that!
There is no point willing to work specifically on the "collaborative aspect".
**All massively collaborative projects need great user interface**
(because *massive* implies *lots of motivated users*
but *bad interface* implies *unhappy users* which in turn implies *demotivated users*).
And thus, it is most likely that, by willing to make massive collaboration tools my subject,
I am going to spend a lot of time working on user interfaces[^interface]. I should as well get used to the idea.
In the case of the collaborative proofs project, this means I should work with people
who have built good web interfaces for interactive theorem provers (if I can find them).
I should join forces with them while postponing my collaborative ideas a little.
I should dive into user interface so that I know I have a good one when I finally get to make the collaboration happen.

User interface in the case of an interactive theorem prover is much more than what the final user will see.
It is also an interface in the sense that it links two worlds:
indeed, the formal proofs a computer can understand are very different from what a mathematician is used to.

And quite frankly, for now, I don't have a clear vision of what the perfect interface will be.
The reason why is that I'm quite fresh in the proof assistant world.
Thus, I need to practice and I need to know the domain better.
This is also something that will probably be true of any collaborative project.
Not suprisingly at all, a lot of successful projects (like Polymath or FoldIt) have been launched by people in the field
(mathematicians, biologists...).
I like to think that I, as a computer scientist, can be helpful.
But for that, I need to know a little bit more about the domain I'm trying to help.

Even if it's still blurry, I think a good interface for writing mathematical proofs on a computer will give an important place
to the so-called *tactics* or *strategies*[^tactics]. Thus, I need to work in a framework which has those (like [Coq](https://coq.inria.fr/)).
Since tactics are so important, any mathematician should also be able to add one easily.
But I haven't even written a single Coq tactic myself!
Let's try to do that before imagining what good interface mathematicians will use to add their owns.

As a conclusion, there is *a lot* to do to make this project happen!
The idea of doing collaborative proofs emerged because I saw it as a first step to do collaborative science.
But clearly, this is not the easiest step.
What I'm doing with this blog and what others are doing is [open science](http://en.wikipedia.org/wiki/Open_science)
and [open research](http://en.wikipedia.org/wiki/Open_research).
This, more than anything, is the first and easiest step toward collaborative science.

As a opening, here's a great talk about open science that I really encourage anyone to watch:

<iframe width="560" height="315" style="margin:auto; display: block;" src="//www.youtube.com/embed/DnWocYKqvhw" frameborder="0" allowfullscreen></iframe>

[^projects]: Apart from those that I have already cited, I guess most of the collaborative projects (at least in the formal proof world) involve building a shared library of proofs which others can use in their work. This is what [the QED Manifesto](http://en.wikipedia.org/wiki/QED_manifesto) was aiming at and what [the Archive of Formal Proofs](http://afp.sourceforge.net/), [the Mizar project](http://en.wikipedia.org/wiki/Mizar_system) and [Metamath](http://en.wikipedia.org/wiki/Metamath) are doing.

[^bounty]: On websites such as [StackOverflow](http://stackoverflow.com/) (and more generally in the [StackExchange](http://stackexchange.com/) collection of websites), users earn *reputation* by having a constructive behavior (asking interesting, on-topic questions, giving useful answers…). Users who have a lot of reputation can "spend" some of it by setting a *bounty* for a useful answer to a specific question, thus encouraging more people to share their answer. The author of the accepted answer will then receive the reputation bonus.

[^papers]: I agree that it is not so simple. Getting papers written is really important for scientist careers and the order of the co-authors matters too. If this tool gets used for actual research, it will require a set of consensual guidelines on how the produced papers must be authored. Contrary to citizen projects were anonymous can collaborate but only the scientists who created the tool get to sign the paper, here many of the contributors are expected to be scientists themselves. So their names have to be on the paper. There is the other option of referring back to the website for the individual contributions. Anyway, this will require careful thinking eventually.

[^tactics]: Have a look at the first paragraph of the introduction of [chapter 8 of the Coq manual](https://coq.inria.fr/distrib/current/refman/Reference-Manual010.html) about tactics.

[^interface]: In fact, I have already been working on user interface a lot for another collaborative project that I hope to be able to present on this blog quite soon.
