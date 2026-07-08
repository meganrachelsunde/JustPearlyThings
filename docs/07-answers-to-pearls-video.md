# 07 — Answers to Pearl's Video

In her video (transcribed in [06-pearls-stated-priorities.md](06-pearls-stated-priorities.md)), Pearl asked for help with three things: how to structure the website, marketing/ad advice, and nonprofit advice. This is the direct response, written so Megan can send it to her or talk it through.

## 1. "I'm trying to figure out the best way to structure the website"

Everything you listed fits a simple structure, and we've built a working version of it in this repo (see `site/`). The structure:

- **Home** — the mission video at the top (exactly as you described), then the three things you want visitors to do, in priority order: **Donate**, **Join the network** (membership), **Get updates** (email signup). Latest episodes below so the page always looks alive without you touching it.
- **/donate** — one page for all the ways to give (card via your existing Stripe flow, Cash App, Venmo, crypto), and right next to it the "what we do with the money" transparency section: content production, legal defense, travel/filming, and support for Terrence's work. Transparency next to the ask is what makes the ask work.
- **/events** — the monthly fundraiser: what's next, when, how to join. Even before events exist, the page sets the expectation.
- **/blog** — your posts. Write in plain text/Markdown; publishing is a git commit, no CMS to get hacked or shut down.
- **/resources** — resources for fathers: organizations, guides, hotlines. This is the page that makes the site useful to strangers who arrive from search, not just fans.
- **/statistics** — your statistics with sources. We built the structure; every claim gets a citation link. Rule of thumb: no claim goes up without a source, because this page will be attacked the hardest.
- **/watch** — where to watch everything: The Audacity Network first, then YouTube/Rumble/podcasts, plus a section for Terrence's administrative-violence series.
- **/links** — one link-in-bio page you can put in every social profile, replacing the pile of links in video descriptions.
- **/about** — who you are, what the network is, press contact.

Two structural rules we'd urge:

1. **Email capture on every page.** You've been banned from platforms nine-plus times by your own count. The email list is the one audience asset nobody can take. The Google Form isn't enough — a real email tool (we recommend one in [03-platform-options.md](03-platform-options.md)) lets you actually send to the list, and we back it up weekly.
2. **One warning about "nobody can kick us off":** the site being yours is a huge step, but it still stands on rented ground — the membership platform runs on Uscreen and payments run on Stripe, and both can drop customers. The fix isn't paranoia, it's backups: we've written a plan ([02-risks-and-gaps.md](02-risks-and-gaps.md), [04-what-to-build.md](04-what-to-build.md) project 4) so that if any vendor drops you, you keep your subscribers, your content, and your billing records, and you're back up in days, not never.

## 2. "Anyone has a marketing background — how can I improve this?"

On the ad and the video at the top:

- **Lead with the concrete, not the abstract.** "We make documentaries and a show about family court, and we fund legal help for fathers" lands better than movement language. Your instinct to articulate "the issue and what we're doing with the money" is right — keep it that specific in the first 15 seconds.
- **One call to action per ad.** Donate *or* subscribe *or* join the list — not all three. Different ads for different asks; the site now has a dedicated landing page for each, so each ad can point at exactly one page and you can see what converts.
- **The transparency section is your best marketing asset.** People give when they can see where money goes. Put the breakdown in the ad itself ("$X pays editors, $Y funds legal defense").
- **Annual over monthly** wherever you pitch the membership — you already discount annual; it also protects revenue if a payment processor ever causes a gap.
- **Measure with the site, not vibes:** each campaign gets its own URL so you know which ad actually brought donors.

## 3. "Anyone works in nonprofits, please put in the comments"

This is the one area where the honest answer is: **get a nonprofit attorney/CPA before taking another donation described as charitable.** The specific things that matter:

- **Which entity receives the money matters legally.** Right now donations flow to JustPearlyThings, LLC (per your own Terms of Service). Donations to an LLC are *not tax-deductible* and shouldn't be implied to be. If "my nonprofit" (the one Terrence is on the board of) is formally incorporated and gets 501(c)(3) status, donations to *it* can be deductible — but then the money legally belongs to the nonprofit and can't pay for the show or your personal legal defense unless that's inside its stated charitable purpose.
- **Funneling money to Terrence's nonprofit** is doable cleanly (a grant from your entity, or donors giving to his org directly via a link), but "we collect and pass it along" without paperwork is how well-meaning people get in trouble.
- **States require charity registration** before soliciting donations from their residents (roughly 40 states). A lawyer sets this up once; it's not a big deal, but it's not optional once you say the word "nonprofit" while asking for money.
- **Until the structure is confirmed**, the donate page we built says "support the network" and does not use the words tax-deductible, charity, or nonprofit. When your attorney confirms the structure, we update one page.
- Practical board advice you asked for: keep it small and odd-numbered, minute every meeting, adopt a conflict-of-interest policy on day one (boilerplate exists), and never mix the LLC's and the nonprofit's bank accounts.

## What we built already ("just in case")

A complete working version of the site you described is in this repo under `site/` — mission-video hero, donate page with transparency section, events, blog, resources for fathers, statistics-with-sources framework, watch page with a Terrence section, links page, about page, and email capture throughout. It's a static site: fast, cheap (~$0/mo hosting), and portable between hosts in minutes, which is exactly the resilience you're after. The domain `justpearlythings.com` is purchased and ready to point at it. What it needs from you before launch: the mission video link, brand assets/photos, your statistics and sources, and answers to the four questions at the end of [06-pearls-stated-priorities.md](06-pearls-stated-priorities.md).
