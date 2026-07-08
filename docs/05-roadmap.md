# 05 — Roadmap

How to sequence the projects from [04-what-to-build.md](04-what-to-build.md), what Pearl has to provide at each step, and the open questions to resolve with her before starting.

## Sequencing principle

Quick, zero-risk wins first (they build trust and fix live revenue leaks); anything touching paying subscribers last. Nothing in phases 1–3 can break the existing business.

## Phase 0 — Access and inventory (with Pearl, before any code)

Deliverable: a filled-in access checklist.

- [x] **Hub domain decision: the hub site launches on `hannahpearldavis.com`** — registered July 2026 (Namecheap, Megan's account). Follow-ups: enable auto-renew + domain privacy, and plan transfer to Pearl's LLC ownership.
- [x] `justpearlythings.com` — checked July 2026: held by a third party (registered but serving nothing). Optional follow-up: WHOIS the owner for a purchase inquiry and/or place a backorder in case it lapses. Not a blocker; site titles/content target "JustPearlyThings" as the search term regardless.
- [ ] Check availability of the dead `theaudacitynetwork.store` and `audacitymerch.com`; if available, re-register and 301-redirect to `justpearlymerch.com`.
- [ ] `pearldavis.com` is squatter-held at $3,488 — probably not worth buying since the content brand is JustPearlyThings.
- [ ] DNS access (likely Cloudflare, given `theaudacitynetwork.com`'s setup).
- [ ] Read/export access to: Uscreen admin, Stripe dashboard, the Google Form's response spreadsheet, Shopify (merch) admin.
- [ ] Brand assets: logo files, colors, fonts, approved photos, preferred bio copy.
- [ ] Verify in a browser what `theaudacitynetwork.com/email` actually shows a signed-out visitor (our fetch showed no signup form — open question below).

## Phase 1 — Stop the bleeding (no new products)

- Redirect any recovered dead merch domains to the live store.
- Run a first manual backup: Uscreen People + Active Offers CSV export, Stripe customer export, Google Form responses download. Store in Pearl's own cloud storage. This is one afternoon of clicking and removes the worst-case data-loss scenario immediately.
- Draft the "break glass" runbook skeleton.

## Phase 2 — Hub site (project 1)

- Build the static hub at `hannahpearldavis.com` in this repo (Astro/Next.js static, Cloudflare Pages, daily scheduled rebuild pulling latest episodes from feeds).
- Ship with email capture present but pointing at the ESP set up in phase 3 (or launch both together).
- Once live: update link-in-bio on every social profile and the description template for new videos to point at the hub.

## Phase 3 — Email pipeline (project 2)

- Stand up ESP (Buttondown or MailerLite), import Google Form signups, wire the hub form.
- RSS-to-email weekly digest automation; welcome sequence with Audacity Network pitch.
- Weekly automated list export to Pearl's storage.

## Phase 4 — Episode archive (project 3)

- Extend the hub with generated per-episode pages from the YouTube/Rumble/podcast feeds.
- Optional follow-on: Whisper transcripts for search surface.

## Phase 5 — Automated backups (project 4, can run parallel to 2–4)

- Scripted Stripe exports; Uscreen exports (API if her plan allows, otherwise documented monthly manual procedure).
- `yt-dlp` mirror of the public catalog + master files to B2/R2 cold storage.
- Finish the break-glass runbook, including researched high-risk processor fallbacks (CCBill/Corepay-class) with their onboarding requirements, so a Stripe emergency has a pre-written playbook.

## Phase 6 — Hold: migration / community (project 5)

No action. Criteria to reopen: Uscreen termination or major policy/pricing change; app store removal; or Uscreen fees clearly exceeding the cost of running Ghost + video CDN. Phase 5's exports are the standing preparation.

## What Pearl must provide, summarized

| Item | Needed for | Blocking? |
|---|---|---|
| Domain registrar/DNS access (or approval to register) | Phase 0–2 | Yes — hub can't launch on the brand domain without it |
| Uscreen admin access (or she runs exports herself) | Phases 1, 5 | Yes for backups |
| Stripe read access | Phases 1, 5 | Yes for billing backups |
| Google Form spreadsheet | Phase 3 | No — list can start from zero |
| Brand assets + bio/press copy | Phase 2 | Partially — placeholder launch possible |
| ESP account ownership (created in her LLC's name) | Phase 3 | Yes — she must own the list, not the developer |
| Social profile access to update link-in-bio | Phase 2 rollout | No — she can do it herself from a checklist |

## Open questions for Pearl

1. ~~Does she (or the LLC) own `justpearlythings.com`?~~ Resolved July 2026: it's third-party-held; the hub launches on `hannahpearldavis.com` (Megan's Namecheap account). Remaining sub-questions: timeline for transferring the domain to Pearl's LLC, and any interest in pursuing the `justpearlythings.com` owner or a backorder.
2. What does `theaudacitynetwork.com/email` do today — is there a working signup form and where do those emails go?
3. Which Uscreen plan is the account on (determines API access for automated exports)?
4. Where are the master video files today — only in Uscreen/YouTube, or does a local/cloud archive exist?
5. Does she have any existing email sending history (e.g., Uscreen broadcasts)? This affects list-import consent and deliverability warm-up.
6. Who besides Pearl has admin access to Uscreen/Stripe/domains today? (Feeds the ops-hygiene runbook.)
7. Appetite check on the Ghost escape route: does she want the migration plan fleshed out now (paper exercise only), or is documenting the trigger criteria enough?
8. From her video (see [06-pearls-stated-priorities.md](06-pearls-stated-priorities.md)): which site is "the independent website we just got done," and who built/hosts it?
9. Nonprofit structure: is her nonprofit incorporated (501(c)(3) status?), what's its name, and which donations route to it vs. the LLC vs. Terrence Moore's nonprofit? (Needs her accountant/attorney — affects donation page wording.)
10. What does the planned "monthly event" look like (livestream, in-person, ticketed)? Determines the events feature's scope.

## Success measures

- Every link in new episode descriptions resolves and points at owned or live properties.
- Email list exists, grows, and is exported weekly to storage Pearl controls.
- A copy of subscribers, billing records, and content exists outside Uscreen/YouTube at all times, no more than a week stale.
- Searching "JustPearlyThings" returns an owned site above the fold.
