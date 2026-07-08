# 03 — Platform Options

The strategic choices for where Pearl's platform should live, compared. The question is not "which tool is best in general" but "which combination reduces her specific risks ([02-risks-and-gaps.md](02-risks-and-gaps.md)) without breaking what already works."

## The membership platform: three paths

### Option A — Stay on Uscreen, build around it (recommended now)

Keep The Audacity Network on Uscreen and invest in the layer Uscreen doesn't provide: an owned hub site, an owned email list, automated data exports, and fixed funnels.

- **Pros:** zero migration risk; Uscreen is genuinely good at subscription video (hosting, streaming, apps, billing); her Stripe account is already her own, so the money relationship is portable; subscriber CSV exports and (on higher plans) a Publisher API exist.
- **Cons:** the vendor dependency remains; ongoing Uscreen fees; community/email data stays semi-captive.
- **Why recommended:** the highest-value gaps (email, hub, backups) don't require touching the membership platform at all, and a migration of paying subscribers is the single riskiest move a subscription business can make. De-risk first, migrate only if forced or clearly beneficial later.

### Option B — Migrate to Ghost (self-hostable) with a video layer

Ghost is open-source (MIT), self-hostable, takes 0% of revenue, connects to her own Stripe account, and bundles website + newsletter + memberships + member management with full data portability. It is the strongest "own everything" option.

- **Pros:** if self-hosted, no vendor can terminate her; content, members, and billing are fully hers; native newsletter solves the email gap inside the same product; 0% platform fees vs. Uscreen subscription costs.
- **Cons:** Ghost is publishing-first, not video-first. Video would need a separate hosting layer (e.g., Cloudflare Stream, Mux, Bunny Stream — or Rumble embeds for free-tier content) integrated behind Ghost's member gating. No white-label mobile apps out of the box. Migrating existing subscribers means re-mapping Stripe subscriptions and forcing password resets — some churn is guaranteed.
- **When it makes sense:** if Uscreen ever terminates or degrades, or if Uscreen fees start to rival what a part-time developer (Megan) costs, this is the destination. The Stripe-stays-the-same property makes the migration feasible; Uscreen's `legacy_id` API field even exists to support exactly this kind of record mapping.

### Option C — Fully custom platform (Next.js + Stripe + video CDN)

Build the membership site from scratch.

- **Pros:** total control, no license constraints at all.
- **Cons:** re-implementing auth, billing webhooks, video DRM/streaming, apps, and email is a large, invasive build with permanent maintenance burden — for capabilities Uscreen and Ghost already provide. Custom code doesn't remove the real chokepoints anyway (Stripe, app stores, video CDN vendors all still apply their policies).
- **Verdict:** not justified. Custom work is better spent on the hub, tooling, and integrations around a platform than on the platform itself.

## Email / newsletter options

| Option | Ownership | Fit |
|---|---|---|
| **Ghost (hosted or self-hosted)** | Full export; self-host = full control | Best if Option B is ever taken; overkill as email-only |
| **Buttondown / MailerLite / EmailOctopus** | List exportable as CSV | Good, cheap standalone ESPs; Buttondown is notably creator-friendly |
| **Self-hosted (Listmonk + Amazon SES)** | Maximum ownership | More ops work; strongest answer to "no one can shut my list down"; SES itself has an AUP but sending infra is swappable |
| Uscreen built-in email | Inside the Uscreen dependency | Use for member transactional mail only, not as the master list |
| Google Form (status quo) | Spreadsheet, no sending pipeline | Replace |

**Recommendation:** start with a standalone ESP that supports full export (Buttondown or MailerLite), fed by a signup form on the hub site. Keep a weekly automated CSV export into her own storage. Deliverability, compliance (CAN-SPAM), and unsubscribe handling come free; self-hosting can come later if list size or policy pressure demands it.

## Community options

- **Uscreen's built-in community** — already included with the membership; fine for now.
- **Circle** — polished, but rented and fee-bearing; adds a second subscription dependency.
- **Locals** — built for exactly this creator segment (owned by Rumble, positions on speech tolerance), but it takes a revenue cut and splits the audience across yet another login.
- **Self-hosted (Discourse, or Ghost-native comments under Option B)** — most durable, more ops.

**Recommendation:** don't add a new community product now. The community already exists inside The Audacity Network membership; fragmenting it would hurt. Revisit alongside any Option B migration.

## Video hosting fallback (regardless of membership platform)

Her master content files should not live only inside Uscreen and YouTube. Options for cold-storage archive: any S3-compatible bucket (AWS S3, Backblaze B2, Cloudflare R2) holding original uploads, plus `yt-dlp`-based archival of the public catalog. Cheap, boring, and makes every other decision reversible.

## Hosting for the hub site (see build #1 in [04-what-to-build.md](04-what-to-build.md))

- **Static site (Astro or Next.js static export) on Cloudflare Pages / Netlify / Vercel** — near-zero cost, trivially portable between hosts (it's just files), so host-level deplatforming is an inconvenience rather than a catastrophe. Cloudflare in front is already the pattern on `theaudacitynetwork.com`.
- A CMS is unnecessary for a hub/links/episodes site whose content can be generated from her existing RSS/YouTube feeds at build time.

## Payments — the chokepoint no platform choice fixes

Stripe is the processor across Uscreen, and would be for Ghost too. The realistic posture:

1. Keep Stripe while it lasts (best rates, best tooling).
2. Keep alternative rails alive and *visible* (Cash App, Venmo, crypto — already exist; present them properly on the hub instead of pasted into descriptions).
3. Keep customer/billing exports current so a forced migration to a high-risk processor (CCBill, Corepay, Segpay-class) is a re-onboarding exercise, not a rebuild.
4. Prefer annual plans in promotion (already happening with the $79.99 upsell) — it buys runway in any processor transition.

## Bottom line

Keep Uscreen as the membership engine for now. Build the **owned layer around it**: hub site on the brand domain, standalone exportable email list, automated backups of subscribers and content, and cleaned-up funnels. Hold Ghost in reserve as the documented escape route if the Uscreen or app-store dependencies ever fail. Don't build a custom membership platform.
