# 06 — Pearl's Stated Priorities (from her own video)

Source: a video of Pearl talking through her website plans while editing it (transcript reviewed July 2026). This is the closest thing we have to a requirements document from the client herself. Quotes are lightly cleaned from the auto-transcript.

## What she says, in her own words

- **Why the site exists:** "I was kicked off of all platforms, demonetized in 2023, and I was demonetized for 2 years and essentially unemployed... what I'm doing in the future to prevent this is we made a website that I own so nobody can kick us off."
- **Deplatforming history (worse than public sources showed):** "I was kicked off all platforms for two years... I have had nine TikTok accounts, three Instagrams. I'm kicked off constantly." Plus: "men's ex-wives drag me to court all the time" and "we face demonetization, endless lawsuits, blacklisting."
- **What the website should have:** "We're trying to accept donations. We're going to do events once a month to raise money. I'm going to talk about what we're going to do with the money. Then there's going to be a blog. Resources for fathers. Content like Terrence's [Terren Pops] administrative violence videos are going to be on the website. And then I'm going to have my statistics and my sources... also feminist statistics. I'm trying to figure out the best way to structure the website."
- **Money priorities:** "Number one thing I'm trying to do is create content — documentaries, the show, we have editors to pay... for me and anyone else that joins the network later. The second thing... is funnel money to Terrence's nonprofit." Donations "go to legal defense, travel, filming, and getting these stories out."
- **Nonprofit:** "It's really important that I had Terrence on the board of my nonprofit." She explicitly asks viewers: "anyone works in nonprofits, please put in the comments."
- **Marketing:** she's "testing a few ads," wants "a video at the top" of the site articulating the mission, and asks for marketing help.
- **Status and future:** "We just got the website done, the independent website, so that's at least done... in the future, we'd like to make an app, but everything costs money."

## What this changes in our research

### Validations

- The whole thrust of this research — own the platform, reduce deplatforming exposure — is exactly what she's already trying to do. No persuasion needed; she's asking for help executing.
- Donations-first positioning on `theaudacitynetwork.com` matches what we observed in [01-current-footprint.md](01-current-footprint.md).

### Corrections and additions

1. **The "nobody can kick us off" belief is only half true.** The site she owns runs on Uscreen (rented SaaS) and Stripe (revocable processor) — the exact dependencies in [02-risks-and-gaps.md](02-risks-and-gaps.md). Communicating this gently, with the backup/portability tooling as the fix, is a core part of the value we bring.
2. **Legal risk is a first-class risk category.** Ongoing lawsuits and legal-defense costs weren't in our original register; they affect cash needs and make the donation pipeline more important.
3. **A nonprofit exists or is being formed** (Terrence Moore on the board), and she wants to route money to his nonprofit as well. This raises structural questions: which entity receives which donations (LLC vs. nonprofit), tax-deductibility claims, donation receipts, and state charity registration. **This needs a professional answer, not a website feature** — flag for her accountant/attorney, and keep the donation UX honest about which entity receives funds until then.
4. **Her serial account bans (9 TikToks, 3 Instagrams)** strengthen the case for the email list as the only channel she can't lose, and for the hub as the stable address to rebuild any banned account's audience from.

### Feature requests to fold into the hub site (project 1 in [04-what-to-build.md](04-what-to-build.md))

Her stated wishlist maps almost one-to-one onto the hub-site scope, with these additions to the original plan:

| Her ask | Hub site feature |
|---|---|
| Accept donations | Donation page/CTAs (link to existing Stripe donation flow + Cash App/Venmo/crypto presented properly) |
| "Talk about what we're doing with the money" | A transparency section: where donations go (content production, legal defense, travel, Terrence's nonprofit) |
| Monthly fundraising events | Events page (upcoming event, RSVP link/embed — can start as a simple section, calendar later) |
| A blog | Markdown blog in the static site (near-zero extra work in Astro) |
| Resources for fathers | A curated resources page (links, organizations, guides) |
| Terrence's administrative-violence videos | Embed/host his video series on a dedicated section or tag |
| Statistics and sources (incl. "feminist statistics") | A citations/statistics page with sourced claims |
| Video at the top articulating the mission | Hero section with embedded mission video |
| Ads / marketing copy testing | Keep pages ad-embeddable; landing pages per campaign are easy in a static site |
| An app "in the future" | Out of scope for now (Uscreen already ships her membership apps); a PWA of the hub is a cheap middle step later |

### New open questions for Pearl (added to [05-roadmap.md](05-roadmap.md))

1. Which website is "the independent website we just got done" — `theaudacitynetwork.com` as it stands, or a new build in progress? Who built it and where is it hosted?
2. Nonprofit status: is her nonprofit formally incorporated (501(c)(3) applied/granted)? What's its name? Which donations should route to it vs. the LLC?
3. Terrence Moore's nonprofit: name, status, and how money should flow to it (grant, fiscal sponsorship, direct donation link)?
4. Events: what does a "monthly event" look like (livestream, in-person, ticketed)? This determines whether the events feature is a link, an embed, or ticketing.
