# 04 — What to Build for Her

The direct answer to "what can I build for Pearl?" Five projects, ranked by value-to-effort, each concrete enough to start in this repo. Projects 1–4 all work *around* the existing Audacity Network without touching it, so nothing here risks the current business.

## 1. The hub site at `justpearlythings.com` (start here)

**What:** a fast static site on the brand domain that becomes the single canonical link for everything.

- Hero with the brand, one-line pitch, and the two money CTAs: *Join The Audacity Network* and *Merch*.
- Email signup form, front and center (feeds project 2).
- "Latest" section: newest episodes pulled at build time from her YouTube/Rumble/podcast RSS feeds — no CMS, no manual updates.
- Links block replacing the linktree-style scatter: all socials, apps, podcast platforms, donation rails (Cash App/Venmo/crypto presented properly instead of pasted into descriptions), GoFundMe.
- About/press page — currently the top search results for her name are entirely third-party.
- Pearl's own requested features (see [06-pearls-stated-priorities.md](06-pearls-stated-priorities.md)): donation transparency section ("where the money goes"), monthly-events section, a blog, resources-for-fathers page, statistics-with-sources page, a section for Terrence's video series, and a mission video in the hero.

**Build:** Astro or Next.js (static export), Tailwind, deployed on Cloudflare Pages. A scheduled rebuild (daily cron) keeps the "Latest" feed fresh with zero backend. This entire project fits in this repo.

**Domain (resolved July 2026):** `justpearlythings.com` was purchased and is the hub's home, with `hannahpearldavis.com` (registered the same week) redirecting to it. Still worth doing: re-register the dead `theaudacitynetwork.store` and `audacitymerch.com` if available and redirect them to the live merch store, since hundreds of old episode descriptions still link to them.

**Why first:** cheap, zero risk to existing revenue, fixes the funnel decay immediately, and is the surface every other project (email capture, episode archive) plugs into.

## 2. Owned email list + newsletter pipeline

**What:** replace the Google Form with a real, exportable email operation.

- Signup form on the hub (project 1) wired to an ESP with full CSV export — Buttondown or MailerLite per [03-platform-options.md](03-platform-options.md).
- Import existing signups from the Google Form spreadsheet (with consent language checked).
- An automated weekly "what you missed" email generated from the same RSS feeds the hub uses (RSS-to-email automation), so the list gets value without adding to Pearl's workload.
- Welcome sequence: new subscriber → intro email → Audacity Network trial/annual pitch.
- Scheduled export job: list backed up weekly to her own storage (see project 4).

**Why:** this is the single most deplatforming-proof asset she can own. Every risk in [02-risks-and-gaps.md](02-risks-and-gaps.md) — YouTube removal, Uscreen termination, processor drop — is survivable if she can email her audience the new address.

## 3. Episode archive with SEO pages

**What:** an owned, indexable catalog of her shows, generated automatically.

- One page per episode (title, date, description, embedded player from YouTube/Rumble/podcast host, links to full version on The Audacity Network).
- Generated at build time from the same feeds as project 1 — this is an extension of the hub site, not a separate system.
- Optional later: transcripts (Whisper is cheap now), which massively expand search surface and accessibility.

**Why:** her back catalog currently has zero owned search presence; every search lands on YouTube or critics. Episode pages turn the catalog into a durable funnel and survive any single video host's removal.

## 4. Backup and portability tooling

**What:** scripts + scheduled jobs that make every dependency survivable. Mostly invisible, highest insurance value per line of code.

- **Subscribers:** scheduled export of Uscreen People/Active Offers CSVs (manual monthly at minimum; automated via Publisher API if her plan has it) into her own storage.
- **Billing:** periodic Stripe customer/subscription export (Stripe's API makes this trivial and it's her own account).
- **Content:** archive master video files to S3-compatible cold storage (Backblaze B2 or Cloudflare R2); `yt-dlp` job mirroring the public YouTube/Rumble catalog.
- **Email list:** weekly ESP export (from project 2).
- A one-page "break glass" runbook: if Uscreen/Stripe/YouTube disappears tomorrow, here is where the data is and the re-onboarding steps. Note Uscreen's own terms: no offboarding support, 60-day retention after cancellation, then permanent deletion.

**Why:** Uscreen exports exist but there's no evidence anyone runs them. This project converts the two "severe impact" risks into recoverable events.

## 5. Later: community layer or membership migration (hold, don't build yet)

Two bigger moves that should stay on the shelf until triggered:

- **Ghost migration** (Option B in [03-platform-options.md](03-platform-options.md)): the documented escape route if Uscreen terminates, degrades, or its fees outgrow its value. The prep work is already covered by project 4 (current exports) — which is exactly why project 4 comes first.
- **Standalone community product** (Circle/Locals/Discourse): skip for now; the community lives inside the Audacity Network membership and fragmenting logins would hurt engagement.

## Effort and dependency summary

| # | Project | Scope | Depends on |
|---|---|---|---|
| 1 | Hub site | Single static site, one repo, no backend | Domain access/registration; brand assets |
| 2 | Email pipeline | ESP account + form embed + 2 automations | Project 1 (form placement); Google Form data |
| 3 | Episode archive | Build-time feed ingestion added to the hub site | Project 1 |
| 4 | Backup tooling | A few scripts + scheduled jobs + runbook doc | Uscreen/Stripe account access (read/export) |
| 5 | Migration/community | Large, invasive; touches paying subscribers | Only if triggered; project 4 is the prep |

Projects 1–3 are one codebase (this repo). Project 4 is small standalone scripts. Recommended order of execution and what Pearl must provide are in [05-roadmap.md](05-roadmap.md).
