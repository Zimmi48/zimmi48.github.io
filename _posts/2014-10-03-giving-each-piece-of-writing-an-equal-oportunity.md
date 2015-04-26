---
layout: post
title: "Giving each piece of writing an equal opportunity"
date: 2014-10-03 11:00:00 +0200
lang: en
excerpt: Many times, a thought crossed your mind that would be worth sharing with others. Sometimes, you started writing something about it and then it remained in your notebook forever. If you feel you have well described your idea / problem / rant / whatever, you may decide to share it with your Facebook friends, or on your blog if you have one. But what about sharing it with "everybody". Maybe it’s worth it but in any case, it is not easy to reach an audience and you’re not necessarily prepared to spend the time it requires.
redirect_from: 75J67J/
permalink: /2014/10/03/giving-each-piece-of-writing-an-equal-oportunity/
---

Many times, a thought crossed your mind that would be worth sharing with others.
Sometimes, you started writing something about it and then it remained in your notebook forever.
If you feel you have well described your idea / problem / rant / whatever,
you may decide to share it with your Facebook friends, or on your blog if you have one.
But what about sharing it with "everybody".
Maybe it’s worth it but in any case, it is not easy to reach an audience
and you’re not necessarily prepared to spend the time it requires.

Let’s rephrase our problem. Many people can write.
Suppose we found a way to encourage them to do so and to post their work.
Now, we’ve got tons of small pieces, each one of them may be interesting or not.
How do we give every piece of writing an equal access to readers?

##A statistical testing approach

The concept I’m about to describe is not new.
Yet, I believe it could be used more often and I’m definitely interested in applying it in many of my future projects.

There is absolutely no way (so far, I think) to automatically analyze the content quality and relevance of a text.
On the contrary, anyone is able to judge a text he/she reads (subjectively, of course).
So why bother with complicated algorithms or
full-time paid staff for picking articles when you could simply ask people what they think?

More precisely, the algorithm works that way:

You have a set of pieces as input.

You have readers to which you present a front page with a list of articles,
the kind of front page any online newspapers, blogs or RSS readers would have.

Now, here’s the trick: you don’t need to present the same front page to every reader
(and here I’m not talking of personalizing the front page with respect to the reader interests
because we’ll suppose that you are not tracking the users of your web service,
thus you know nothing about them).

*Your front page will present each new piece to a statistically relevant number of random readers.*

These new pieces will not be singled out from the popular pieces.
So each reader will see a front page with a list of articles.
Among them most will be already popular and some will be new.
Then, when a reader decides to read an article (any article), once he/she reaches the end of it,
your system will strongly encourage him/her to give an appreciation
(the way in which this would be done can be discussed).

So you would have feedback. Based on that feedback, the algorithm simply gives a popularity score to the piece.
The more popular, the more often it would reach the front page.
At some point, the most popular pieces of work will have gone viral and will display on everyone’s front page.

Of course, many questions remain. What kind of feedback do you ask readers for? How do you compute popularity?
What to do with controversial pieces (articles which would get a lot of positive and a lot of negative feedback)?
This just means that this algorithm is not as simple as I said. But it is only a matter of parametrization.

###This sort of testing is already widely used

Of course it is. Statistical testing is everywhere, particularly in scientific research.
Now, I also believe that it is used by a lot of social media already (but inside messy and complicated algorithms).
As a standalone technique for measuring popularity, it is probably not used enough.

Still, here are some organizations using that kind of technique that I’m aware of:

The world-changing organization Avaaz uses a kind of high-tech democratic principle:
"campaign ideas are polled and tested weekly to 10,000-member random samples and
only initiatives that find a strong response are taken to scale."[^Avaaz]

This is somehow different but Duolingo, a web and mobile application for learning new languages,
uses A/B testing to determine how to improve the learning experience[^Duolingo].

##Presenting a new service. Code-name "**Bloc**"

Wait a minute, this is only conceptual!
In the end of the article, you’ll be asked to leave a comment to say if we should build it.

This was imagined by [Jules Zimmermann](http://fr.linkedin.com/pub/jules-zimmermann/98/7b5/4b0) and myself.

We imagined this website on which anyone could post a new article.
Articles would be required to be short (half a page) so that
people can read them from begin to end and give feedback and no reader would be lost halfway.
The articles could link to external references but we would always ask readers to give us their opinion
*before* following these links (only the main content gets reviewed).

The review could be as simple as one of the four options:
Like, Dislike, Uninteresting, Flag for shocking content.

Moreover, any article could be shared on the web but
we would not ask people who reached the article via a direct link to give feedback.
Only the people we randomly select can give feedback.
This is important so that someone who has already a lot of followers on social networks cannot
artificially increase the popularity of his/her articles: each piece is judged on its own.
(Nota: the popularity of a particular piece would not be displayed anywhere except maybe directly to its author.)

We would not provide any means to follow a particular author but
they could provide links to their own webpages, blogs or social media accounts.

Anyone could post anonymously or under pseudonym.

Finally, "**Bloc**" would have both a front page and categories / topics and
we would evaluate if a publication is popular for the general public or for the public of such and such categories only.
To do so, we would not track reader preferences.
We would ask authors to designate a few categories they feel their content fits in.
Then we would apply our algorithm independently for each of these categories.
If an article gains popularity in most of these categories, we would then test it also on the front page
(which means testing how a general audience reacts to it) by applying our algorithm once again.

So, why do we call it "**Bloc**"?

"**Bloc**" is a **Blo**g made by everybody who **C**ollaborates.
Bloc represents also the block design we had imagined for it.
Each block would link to an article, I mean, a Bloc (that would be the name we would give to posts).

##Medium.com is similar but yet different

Evan Williams, one of the founders of Blogger and Twitter, strikes back!
I won’t give a full description of "What is Medium" here:
there are plenty already available out there[^Williams] [^Yglesias] [^McCracken] [^Madrigal]. But I will still say a few things about it:

1. The core idea is the same[^Williams]. Everyone has ideas. Giving an audience to everyone. Even if you don’t write often.

2. Their algorithm to give an audience to everyone seems more complicated (even if they don’t reveal it).
And surely, it does not give an equal opportunity to every post.

3. They have stripped down many social media functions, but not all:
in particular, it is possible to follow an author. I don’t see it as a problem though.

4. Several journalists have tested it and said it was a great writing tool[^Yglesias] [^McCracken].
I feel I should test it too to measure how well it reaches its goal: giving an audience to posts by non-famous people.

So, until further notice, we’re not going to build "**Bloc**".
If you think the two things are different and we should make "**Bloc**" happen, please leave a comment telling so.
Meanwhile, I think I’m going to try writing a post on Medium and see how it gets spread (if it does).
I would encourage anyone who likes writing to try it too and if you’re nice, you’ll let a comment about it here.
In particular, the big question is "Did it help you reaching an audience?"

*Update:* based on [this post](https://medium.com/the-story/what-the-hell-we-were-thinking-380bf329e275)
and based on the comments it received, it looks like Medium.com
is getting away from their initial goal and becoming more or less *yet another* social network and blogging platform.
Also, spoiler, their editor is not that good: well maybe for non-tech journalists it is but I did not like it at all.

[^Avaaz]: [About Us. _Avaaz_](http://avaaz.org/en/about.php)

[^Duolingo]: [Ungerleider, N. (2014). How Duolingo Uses A/B Testing To Understand The Way You Learn. _Co.LABS_](http://www.fastcolabs.com/3029531/how-duolingo-uses-a-b-testing-to-understand-the-way-you-learn)

[^Williams]: [Williams, E. (2012). What we’re trying to do with Medium. _Medium_](https://medium.com/about/what-were-trying-to-do-with-medium-e2f5bfcf0434)

[^Yglesias]: [Yglesias, M. (2013). Now I Understand Medium. _Slate_](http://www.slate.com/blogs/moneybox/2013/12/16/what_is_medium_it_s_the_best_writing_tool_on_the_web_today.html)

[^McCracken]: [McCracken, H. (2014). What Is Medium? Medium Is Pretty Cool, That’s What. _Time_](http://time.com/37586/what-is-medium-medium-is-pretty-cool-thats-what/)

[^Madrigal]: [Madrigal, A. C. (2013). What Is Medium? _The Atlantic_](http://www.theatlantic.com/technology/archive/2013/08/what-is-medium/278965/)

