# 02 — Risks and Gaps

What could take Pearl's platform down, and what's missing from it today. Ordered roughly by how much damage each would do times how plausible it is.

## Track record: deplatforming has already happened twice

This is not hypothetical risk analysis. The platform has already absorbed two major hits:

1. **TikTok ban (2022).** Her original account (~900k followers) was banned outright. That audience was never directly recoverable — only whatever fraction found her elsewhere.
2. **YouTube demonetization (2024).** The channel (~2M subscribers) lost all ad revenue. The channel itself survives and is now used as a funnel, but the event forced the pivot to The Audacity Network.

The lesson from both: reach on rented platforms can vanish with no appeal that matters, and the only durable assets are ones where she holds the customer relationship directly (email addresses, billing relationships, content files, domains).

## Risk register

### 1. Payment processing (highest severity)

The Audacity Network's web subscriptions and donations run on **Stripe**, whose terms give it broad discretion to drop merchants for "reputational risk." This has real precedent for controversial-but-legal content: in 2025, pressure on Stripe/PayPal/Visa/Mastercard forced itch.io and Steam to mass-delist content; in 2022 Stripe gave a legal nude-yoga site days to find a new processor; OnlyFans' 2021 near-ban of explicit content came from its banking partners. Financial deplatforming is the one event that stops revenue *immediately* across memberships and donations at once.

- **Mitigations available:** keep Cash App/Venmo/crypto rails alive (already done, crudely); maintain an exportable customer list so billing can be rebuilt on a high-risk processor (CCBill, Corepay, etc.) if needed; keep the annual-plan share high so a processor cut-off doesn't hit all revenue in the same month.

### 2. Uscreen dependency

The entire owned platform — video hosting, member accounts, billing integration, mobile apps, community — lives inside Uscreen, a SaaS vendor with its own acceptable-use policy. Key facts from Uscreen's own documentation:

- Uscreen provides **no offboarding support**; stores are "solely responsible" for migrating their data.
- After cancellation (voluntary or not) there is a **60-day grace period**, then permanent deletion.
- Subscriber data **is exportable** (People-page CSV, Active Offers CSV), and the Publisher API (`/users`, webhooks, `legacy_id` fields) exists — but full API access requires the UscreenPlus plan.
- The Stripe account is the store's own, so the billing relationship survives a Uscreen exit — but subscription records, content metadata, watch history, and community data need deliberate export.

The gap: **there is no evidence any regular export/backup happens today.** If Uscreen terminated the account, the recovery window is 60 days and possibly less for practical access ("after canceling, you will be locked out... contact support immediately").

### 3. App store dependency

The iOS and Android apps are Uscreen white-label apps subject to Apple and Google review. Both companies have removed apps over content policy (Parler, 2021, is the canonical precedent). Losing the apps wouldn't kill the web platform but would cut off subscribers who signed up via in-app purchase — and those subscribers' billing runs through Apple/Google, not through her Stripe, making them the least portable segment of her paying audience.

### 4. No owned email list (biggest gap, cheapest fix)

Email is the only channel that no platform can take away. Today:

- Older descriptions point to a **Google Form** — responses land in a spreadsheet; there's no evidence of a sending pipeline, and the form itself lives on Google infrastructure.
- Newer descriptions point to `theaudacitynetwork.com/email`, which (fetched July 2026) shows no visible signup form.
- Uscreen has built-in email/marketing tools, but anything collected there is inside the Uscreen dependency (risk #2).

With ~2M YouTube subscribers as top-of-funnel, even a 1–2% conversion to an owned email list would be a 20–40k person asset that survives any ban, demonetization, or vendor termination.

### 5. Funnel decay and brand-domain vacancy

- `theaudacitynetwork.store` and `audacitymerch.com` are dead domains still linked from hundreds of old episode descriptions. Every click is lost revenue, and expired domains previously associated with the brand can be re-registered by squatters or bad actors.
- `justpearlythings.com` serves nothing. The name people actually search for has no owned landing page; search results for the brand are entirely third-party (Wikipedia, YouTube, critics).

### 6. Discoverability and content ownership

Full episodes live behind the Uscreen paywall or on YouTube/Rumble. There is no owned, indexable archive of her catalog — no episode pages, transcripts, or show notes on a domain she controls. If YouTube removed the channel (not just demonetized it), years of free-tier content and its search presence would vanish with it.

### 7. Single-person operational risk

Domains, Stripe, Uscreen, app store accounts, and social logins presumably hang off a small set of personal accounts. Standard small-business hygiene applies: registrar consolidation and lock, 2FA, shared credential vault, and a written inventory of what exists (which [01-current-footprint.md](01-current-footprint.md) starts).

## Summary matrix

| Risk | Likelihood | Impact | Current mitigation | Gap |
|---|---|---|---|---|
| Stripe/processor drop | Medium | Severe — all web revenue stops | Informal (CashApp/Venmo/crypto links) | No exportable billing plan, no high-risk processor fallback researched |
| Uscreen termination | Low–Medium | Severe — platform + member data at risk | None visible | No automated exports/backups |
| App store removal | Medium | Moderate — mobile-only subscribers stranded | None | Web-first signup already helps; no comms plan |
| YouTube channel removal | Medium | High — top of funnel gone | Rumble mirror exists | No email list to re-route audience |
| No email list | Certain (it's a gap, not an event) | High — compounding | Google Form (inadequate) | Real ESP + capture points |
| Dead/vacant domains | Certain | Low–Moderate, compounding | None | Register/repoint domains, fix old links where editable |

The common thread: almost every severe risk is mitigated by the same three assets — **an owned email list, regular data exports, and an owned hub domain**. Those are exactly the first things to build; see [04-what-to-build.md](04-what-to-build.md).
