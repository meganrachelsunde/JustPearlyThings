# 08 · Two-property strategy — hub + Audacity

## The decision (Megan, July 2026)

Do **not** replace `theaudacitynetwork.com`. Build the hub (this repo) as the
public front door and direct social/press/YouTube traffic to it. Audacity stays
exactly as it is today — the paid product on Uscreen, running its existing
Stripe flow and its existing member base.

Two properties, one operation, one funnel.

## Why coexist rather than replace

- Audacity already works. It's on Uscreen, it's collecting recurring revenue,
  and it has an installed base of paying members. Replacing it would migrate a
  working business off a working platform for no operational reason.
- Audacity's job is the *paid product* — video, live streams, community,
  members-only content. The hub's job is the *public record* — mission,
  statistics with sources, blog, resources, donation transparency, About.
  These are different products with different UX requirements. Combining them
  usually degrades both.
- Separation of concerns also reduces platform risk. If Uscreen changes terms,
  or if Pearl decides to leave Uscreen later, the hub stays put. If the hub is
  ever compromised or deplatformed at the DNS level (unlikely but possible),
  Audacity stays put. Two independent addresses is more resilient than one.

## How each property is scoped

| Concern | Hub (`hannahpearldavis.com`) | Audacity (`theaudacitynetwork.com`) |
| --- | --- | --- |
| Owner | JustPearlyThings, LLC | JustPearlyThings, LLC (trading as The Audacity Network) |
| Hosting | Static — Vercel/Cloudflare Pages, this repo | Uscreen (do not touch) |
| Public mission and about | Yes | No |
| Donation transparency and rails | Yes (Card CTA points to Audacity's Stripe) | Existing Stripe checkout stays |
| Statistics and sources | Yes | No |
| Blog and long-form written content | Yes | No |
| Events (RSVP, calendar) | Yes | No |
| Resources for fathers | Yes | No |
| Press and contact page | Yes | Contact form only |
| Free episode redirects (YouTube/Rumble list) | Yes (Watch page) | No |
| Full video library | No | Yes — members only |
| Live streams | No | Yes |
| Membership signup and billing | No | Yes |
| Members-only community | No | Yes |
| Email list of non-members | Yes | No |

The rule of thumb when adding a new feature: if it's about explaining, sourcing,
or persuading, it goes on the hub. If it's about serving a paying member, it
goes on Audacity.

## The funnel

External traffic (YouTube descriptions, TikTok bios, Instagram, X, press
mentions) points to the hub. From the hub, every user has three exits, in this
priority order:

1. **Donate.** The lowest-friction way to contribute to the reporting.
2. **Join The Audacity Network.** The highest-value conversion — recurring
   revenue, direct member relationship. Handled entirely on Audacity from that
   click forward.
3. **Get updates.** Email capture as the fallback so the visitor is not lost to
   a future platform change.

Every hub page ends in some combination of these three CTAs. Nothing on the
hub competes with Audacity for a paid conversion; the hub is designed to
funnel that intent to Audacity, not to duplicate it.

## What Audacity does not need to change

Nothing, in the short term. It keeps running as is. Two low-cost improvements
to consider only when convenient, not as blockers:

- A small strip on Audacity's homepage linking back to
  `hannahpearldavis.com` for the mission, statistics, and blog. This closes the
  loop for members who want to share the *reporting* with a skeptic without
  handing them a paywall.
- Consistent contact and press email addresses across both properties so
  journalists get the same inbox from either site.

Neither is required for the hub to launch.

## Content and infrastructure that stays exactly where it already is

- All existing video on Uscreen. The hub does not re-host it.
- The current Stripe integration on Audacity. The hub's "Donate by card" button
  routes to Audacity's Stripe URL (see `site/src/config.ts` → `DONATION_RAILS.card`).
- The existing Terms of Service and Privacy Policy documents on Audacity — they
  already correctly name JustPearlyThings, LLC and cover the donation records
  that flow through Audacity's Stripe. The hub reuses that framing rather than
  duplicating the legal boilerplate.

## Domains

- `hannahpearldavis.com` → the hub (this repo). Already registered.
- `theaudacitynetwork.com` → Audacity on Uscreen. Unchanged.
- `justpearlythings.com` → held by a third party. Worth a purchase inquiry
  someday, but not needed to launch anything.

If both `hannahpearldavis.com` and (someday) `justpearlythings.com` end up
resolving, the hub is the destination for both and one canonicalizes to the
other via 301. Audacity keeps its own domain either way.

## What still needs Pearl's sign-off

- Confirm this positioning matches what she wants. If she'd rather the hub
  become the paid product and Audacity be retired, this whole document changes.
- Confirm which nonprofit receives the "family-court reform" contributions —
  the hub currently names Terrence Popp's Second Class Citizen. See
  [06-pearls-stated-priorities.md](06-pearls-stated-priorities.md) and
  [07-answers-to-pearls-video.md](07-answers-to-pearls-video.md).
