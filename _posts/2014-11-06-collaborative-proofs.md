---
layout: post
title: "Getting thousands to millions of people working on a single mathematical proof"
date: 2014-11-06 09:00:00 +0100
lang: en
excerpt: There are literally millions of people throughout the world who have a strong mathematical background. A part of them probably enjoyed doing math in class but are not using these skills so much anymore. I bet that if you told these people that they can have an impact on mathematical research through small technical contributions on a website during their leisure time, many would be interested. 
redirect_from: 7R5Mg0/
permalink: /2014/11/06/collaborative-proofs/
---

There are literally millions of people throughout the world who have a strong mathematical background.
A part of them probably enjoyed doing math in class but are not using these skills so much anymore.
I bet that if you told these people that they can have an impact on mathematical research
through small technical contributions on a website during their leisure time, many would be interested. 

The main idea of that kind of tool is crowd sourcing: making big things happen from many small contributions.
A proof can possibly be a perfect application of this principle because it is local by nature
(even if a global view is often a good thing).
Also, people from different background can bring their own expertise and view a problem differently,
possibly unlocking a proof someone else had started.
The first challenge is to automatically split a proof in steps and distributing them to the contributors. 

If we want an online tool that any mathematician will use without difficulty,
it must be designed for them, which means as close as possible to the way they are used to doing math on paper.
However, to guarantee that submitted proofs are correct, it must rely on an underlying formal proof checking tool
(remark: another option would be a peer review mechanism but it does not give guarantees as good).
A lot of formal proof systems already exist but most of the time they were not really thought for use by mathematicians
and require an extensive learning phase. So providing a simplified access to one of these is another challenge. 

To attract this population of amateur mathematicians, I believe the best time is during their studies.
Indeed, while studying, they would learn to use the system (which would be really easy to use for any mathematician anyway)
and this would help them make sure they have well understood the content of the course and the proofs they have seen in class.
The website could have a special mode for learning.
Then, thanks to some incitement and reward mechanism, the users would continue using the site.
And by practicing their skills on a regular basis, they would not lose them. 

Provided such a tool to help amateur mathematicians collaborate, will it really serve science?
I cannot bring a firm answer here, although the best way to know is trying.
But a glorious project has already led the way:
Polymath[^gowers] is a very successful collaborative math project launched by Fields medalist Tim Gowers.
Without any specific tool, dozens of mathematicians have been able to collaborate and publish several novel proofs already.
But it is highly unlikely that their method will scale to thousands of contributors
if they continue using blog comments or wikis to collaborate.

Another goal is to allow big theorems to be formally checked quicker.
Although it may seem less interesting, there is a growing interest in formalizing proofs of important theorem
and people have spent decades doing so (by themselves or in small teams).

Before explaining my ideas further, I would like to remark that I was not the first one to have such an idea
for increasing the speed of proof formalization (although my goal is larger).
ProofPeer[^obua] is a very promising research project by a team in Edinburgh.
It was fun to discover than one of their inspiration was *Crowd Sourced Formal Veriﬁcation*[^xylem]
which was also an inspiration to me
(after I attended a seminar by Prof. Mike Ernst
as I relate in a [previous post]({% post_url 2014-09-15-massive-collaboration-in-science %}).

However, I was surprised to read that they are going to rebuild a proof checker from scratch,
although there are some really good such tools out there already.
My viewpoint is to try to adapt an existing interactive theorem prover first (like Coq).
Only if this happens to be infeasible, would I consider rebuilding everything
(and even then, I would probably re-use some existing code).

One of the reason why they are reinventing the wheel is because they also want a specific proof script language.
They want this language to have constructs to allow collaboration (holes in proofs).
This is where I start viewing things really differently.

What I propose is a fully interactive tool.
As with most theorem provers in interactive mode, you can first state a theorem that you would like to prove.
Proving it will require successive applications of *tactics* which will break the initial goal in several sub-goals.
A classical theorem prover would present to you these sub-goals one by one.
A *collaborative* theorem prover would take each of these sub-goals and present them to different (possibly random) people,
in parallel. The initial user would be one of them.
Maybe she would be given the privilege to choose what sub-goal she wants to prove first.
Each user would then try to prove their assigned sub-goal by applying a tactic and generating new sub-goals
to be distributed to collaborators once more.

It is likely that, when reading the last paragraph, you thought:
well, this looks really close to an exhaustive search for a proof, this will never work!
And I agree fully with you if we stop here. But what I propose is a little less dumb.

First of, a user is never forced to prove an assigned sub-goal.
If she does not think the result is true or if she has no idea on how to prove it,
she should not try randomly any tactic that fits.
Second, we would in fact present each sub-goal (as well as the initial goal) to several users,
so that several strategies can be tested.
Third, and most importantly, our tool would also evaluate, for each sub-goal as well as for the initial goal,
the likelihood of it being true. The idea behind is just not spending too much time trying to prove false results.
Of course the computer cannot evaluate the likelihood. But a (trained) human mind can.

In addition to being presented sub-goals to prove,
users would also be asked to say if they think some conjectures are likely to be true:
let's say they would have a 5 ladder scale (certainly true, probably true, I don't know, probably false, certainly false).
Based on previous users predictions and achievements, the tool would have a varying confidence in each user.
Then a pondered mean would be computed and the system would use the "evaluated likelihood"
for presenting sub-goals to users that are very likely to be true way more often than sub-goals that are probably false.

There are many more questions that remain. Many I have think of, many I have not.
I did not explain how to make it easy for any mathematician to use the tool.
Although I have ideas about that too, I am far from having a clear view of what the final system will look like.

[^gowers]: Gowers, T., & Nielsen, M. (2009). Massively collaborative mathematics. *Nature*, 461(7266), 879-881.

[^obua]: Obua, S., Fleuriot, J., Scott, P., & Aspinall, D. (2014). ProofPeer: Collaborative Theorem Proving. *arXiv preprint arXiv:1404.6186*.

[^xylem]: Xylem: Crowd-Sourced Gaming for Formal Veriﬁcation. Available at [http://www.sri.com/work/projects/xylem](http://www.sri.com/work/projects/xylem).
