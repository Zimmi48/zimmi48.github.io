---
layout: post
title: Leaving room for proofs of false in an adversarial context
lang: en
draft: true
redirect_from: false/
---

Imagine a crypto-currency-based market for mechanically verifiable proofs
of theorems and for programs with proofs that they meet their specifications.
Simply described, people can attach bounties to mathematical statements and
other people can try to come up with a proof. If they manage to do so, they
submit a formalized version that will be checked automatically and they will
receive the reward.

In this market where the trust is based on automatic proof checkers, we can
imagine how disruptive a proof of False may be: someone who is able to
make the checker believe that they can prove False can actually
prove any theorem and therefore is able to claim payment for proofs
that they did not really produce. They can also produce programs that
do not actually meet the specifications they claim to meet.

Until we can have absolute certainty that a proof checker, such as the
kernel of a proof assistant, does not make it possible to prove False[^1],
we need to leave room for this possibility and take measures so that it does
not break havoc[^2].

[^1]: Actually we won't ever reach this level of certainty: even if we could guarantee that there are no implementation bugs left, there could still be inconsistencies in the mathematical theory that is used itself. We can never be fully sure such inconsistency is not present because of Gödel second incompleteness theorem.

[^2]: This echoes [Vladimir Voevodsky proposal](https://www.youtube.com/watch?v=O45LaFsaqMA) of getting ready to work on mathematical proofs in inconsistent settings.

To prevent a large disruptive effect, we need to have counter-measures for
when a proof of False is found, and as soon as we acknowledge this, it becomes
clear that we need to incentivize people to prove False and to share their
proofs, by paying them for such a proof[^3] (in order to trigger said
counter-measures).

[^3]: The idea of paying for a formal proof of a theorem and in particular for a proof of False is not novel, cf. <https://www.reddit.com/r/Bitcoin/comments/1u6oza/proof_market_submit_proof_get_paid_with_bitcoin/ceffmdl/>.

## What would counter-measures be like? ##

The basic idea is rather simple: as soon as a proof of False has been found,
freeze the entire market for the time it takes for the developers of the proof
checker to release a new version where the bug has been fixed. Once such a
version is released, check all existing proofs and put transactions that are
linked to a proof that does not check anymore on hold. If a proof was relying
on a lemma that has been invalidated, the proof (and the associated
transaction) can still be saved by finding an alternative proof to the lemma.
Alternatively, if a transaction is associated to a theorem whose negation
happens to be provable, or if no valid proof can be found for a reasonable
delay, revert the transaction.

This looks like transaction history rewriting, like the hard fork of Ethereum
blockchain after
[the DAO event](https://en.wikipedia.org/wiki/Ethereum#The_DAO_event) but this
is different because here the reverting of such transactions is part of the
predefined protocol so there is no debating to do on the legitimacy of such
an action.

## How to make sure that people share their proof of False rather than taking advantage of them to steal other people's money? ##

All proofs are public and people may look at them carefully to see whether
they look suspicious or not. If a proof looks suspicious, then the person who
finds the proof suspicious can try to derive a proof of False from it, either
by proving that the theorem that is proved is actually false, or by extracting
the fallacious argument (critical bug exploiting hack) from the proof and
using it to prove False directly. Then the person gets the reward and the
original author of the suspicious proof loses their own rewards. Given that
this is bound to happen, the self-interest of the original author pushes them
to share their proof of False directly.

## Where does the money for paying proofs of False come from? ##

The first solution that comes to the mind is to create these rewards out of
fin air. Unfortunately, sudden creation of money decreases the value of the
currency for everyone, and thus each proof of False has a negative impact on
the whole market. This impact is unpredictable.

Another solution is inspired by CDS
([credit default swaps](https://en.wikipedia.org/wiki/Credit_default_swap)):
people can bet that no proof of False will be found by buying these bonds.
The bonds have a predictable growth rate. Whenever a proof of False is found,
the bonds serve to pay the reward and thus some people lose money but the
actual market is unaffected (the money to pay the CDS rent is created in a
fully predictable way).

This form of self-insurance would moreover be a strong driver to get a more
and more resilient proof checker.

We could discuss how these bonds would work in more details, although this
is not the subject of this post. Bonds could be created at regular intervals
and so the longer since the last proof of False, the bigger the reward is
(and the less interesting not sharing of proof of False becomes). The rent
for these bonds could slowly decrease over time to compensate for the
creation of new bonds (but sufficiently slowly so that people are well
compensated for their initial investment). At bond creation, there could be
an auction to choose who gets to buy it first and at what price.

Note that this might not be completely sufficient to avoid a sudden bad
impact of a proof of False on the market, because if people start to believe
that there is no proof of False left to be found, then they can start to
think that the (large) reward for such a proof is never going to be
claimed, and thus that this represents an amount of money that is actually
out of the currency system. If such a belief is then contradicted, this
would still create a shock.

## Limitations ##

