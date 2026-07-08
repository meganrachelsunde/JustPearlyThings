# JustPearlyThings — Platform Research

Research package on what Pearl (JustPearlyThings / The Audacity Network) needs to continue and de-risk her platform, and what can concretely be built for her. Compiled July 2026 from public sources.

## Executive summary

**Who/what:** Pearl Davis runs the JustPearlyThings brand (~2M YouTube subscribers, demonetized since 2024) and monetizes through The Audacity Network — a $9.99/mo subscription video platform built on Uscreen (rented SaaS) with Stripe payments, plus a Shopify merch store and direct donations.

**Current state:** the reach is large but almost entirely rented, and the funnel is decaying — two merch domains still linked from hundreds of old episodes are dead, and there is no functioning owned email list (signup is a Google Form or a page with no visible form). The brand domain `justpearlythings.com` was purchased in July 2026 as the hub site's home, with `hannahpearldavis.com` registered as a defensive redirect.

**Top risks:** (1) a payment-processor drop, which would stop all web revenue at once and has precedent for controversial-but-legal creators; (2) Uscreen termination — subscriber and content data has a 60-day recovery window and no evidence of backups exists; (3) losing the YouTube funnel with no email list to re-route the audience. Deplatforming has already happened twice (TikTok ban 2022, YouTube demonetization 2024).

**Recommendation:** keep Uscreen as the membership engine and build the owned layer around it. In order:

1. **Hub site at `justpearlythings.com`** — static site with the money CTAs, email capture, auto-updating latest episodes, and a proper links page. Fixes the funnel decay; zero risk to existing revenue.
2. **Owned email list** — real ESP replacing the Google Form, RSS-to-email weekly digest, weekly exports. The single most deplatforming-proof asset she can have.
3. **Backup/portability tooling** — scheduled Uscreen/Stripe/content exports plus a break-glass runbook, converting the severe risks into recoverable events.

Hold a Ghost migration and any new community product in reserve; don't build a custom membership platform.

## The documents

| Doc | Contents |
|---|---|
| [docs/01-current-footprint.md](docs/01-current-footprint.md) | Audit of every channel, property, and revenue stream, with a funnel diagram |
| [docs/02-risks-and-gaps.md](docs/02-risks-and-gaps.md) | Risk register: processors, Uscreen, app stores, missing email list, dead domains |
| [docs/03-platform-options.md](docs/03-platform-options.md) | Uscreen vs. Ghost vs. custom; email, community, hosting, and payments options |
| [docs/04-what-to-build.md](docs/04-what-to-build.md) | The five ranked build projects with scope and dependencies |
| [docs/05-roadmap.md](docs/05-roadmap.md) | Phased sequencing, what Pearl must provide, open questions for her |
| [docs/06-pearls-stated-priorities.md](docs/06-pearls-stated-priorities.md) | Pearl's own requirements from her video: feature wishlist, nonprofit plans, legal exposure |

## Next step

Work through Phase 0 of [docs/05-roadmap.md](docs/05-roadmap.md) with Pearl (domain and account access, seven open questions), then start building the hub site — which is designed to live in this repo.
