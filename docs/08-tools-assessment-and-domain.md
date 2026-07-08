# 08 — Team Tools: Assessment, Deployment, and Domain Plan

Covers the two browser tools built for the JustPearlyThings team, imported July 2026 from the Vercel deployment at `justpearlythings-retentio-git-d15ee2-meganrachelsundes-projects.vercel.app`. The tools now live inside the hub site at [site/public/tools/](../site/public/tools/), so one deployment carries the hub site and the tools together.

## What the tools are

| Page | Purpose |
|---|---|
| `/tools/` | Launcher page linking to both tools |
| `/tools/retention-assessment.html` | **Audience Retention Assessment** — score videos and clips from Studio metrics (CTR, APV, AVD, intro retention, retention spikes) or public proxy data (views, likes, comments, 48-hour velocity, subs gained). Produces a PPPS structure score, diagnosis, and suggested next edit per row. CSV import/export, duplicate/reset, print styles. |
| `/tools/risk-assessor.html` | **Clip & Statement Risk Assessor** — pre-publish triage of a cut's legal and reputational exposure. Clip and Statement modes, factor-by-factor severity tiers (none / some / high), composite score with an action tier, and a loader for pipeline result JSON. Any "High" on a minor-related factor forces an Escalate regardless of total. |

Every page is a single self-contained static HTML file — inline styles and JavaScript, no build step, no server-side code (the risk assessor loads the Roboto webfont from Google Fonts; everything else is local). The retention tool persists its table to `localStorage` in the visitor's browser; no entered Studio data leaves the machine unless the user exports a CSV.

## Assessment (July 2026)

**Strengths**

- Right architecture for the job: fully client-side, so nothing sensitive is transmitted or stored on a server; free to host; portable to any static host.
- The retention tool is a real workflow, not a demo: per-video entry, two data modes (Studio vs. public proxy), PPPS scoring with per-row diagnosis and next-edit suggestion, CSV round-trip.
- The risk assessor has sound design decisions — e.g., any "High" on a minor-related factor forces an Escalate regardless of the composite score. Its own footer says the weights are "built to be argued with, not obeyed," which is the correct posture.

**Weak points and how to handle them**

1. **Preview URLs are ephemeral.** The original share link is a git-branch preview deployment (the `-git-…-` infix); it changes or disappears as the Vercel project redeploys. Fine for review passes; use a production deployment or a custom domain before anyone bookmarks it.
2. **Data lives in one browser only.** Clearing browser data loses all assessments; nothing syncs between machines. Mitigation: export CSV after every session and keep the exports in shared storage.
3. **The risk assessor should not be publicly linked.** A tool that scores Pearl's statements for legal/reputational exposure is an internal instrument — on a public, indexed domain it is screenshot material. The hub site therefore does **not** link to `/tools/` from any nav or page; share the path directly with the team. Vercel preview URLs carry an `x-robots-tag: noindex` header; a production custom domain would not, which is another reason to keep the path unlinked (or put Vercel Deployment Protection in front of it).
4. **The baseline goes stale.** The retention tool hardcodes "2.06M subscribers, 292M views as of May 26, 2026" plus seeded example rows, and its own guidance says to recalibrate the PPPS weights after ~20 real uploads. Plan a recalibration pass once Pearl's actual Studio exports are available.

## Deploying for Pearl's review (no domain yet)

The decision for now is to **wait on the domain** and share a deployment URL with Pearl, the same way the tools were first shared for review.

1. Vercel → Add New Project → import this GitHub repo.
2. Settings: **Root Directory `site`**, framework Astro (auto-detected), build `npm run build`, output `dist`.
3. Deploy. The resulting `*.vercel.app` URL serves the full hub site, with the tools at `/tools/` — one link carries everything: hub site, statistics engine, and both tools.
4. Send Pearl the base URL for the site plus the `/tools/` path explicitly, since nothing on the site links to it.

Cloudflare Pages works identically (root `site`, build `npm run build`, output `dist`) and is the recommended host for the eventual production launch — see [site/README.md](../site/README.md).

## Attaching her domain (when ready)

The domain is `hannahpearldavis.com` — registered July 2026 on Namecheap (Megan's account), currently on Namecheap's default nameservers pointing at a parking page. `justpearlythings.com` is third-party-held and unavailable. Checked July 2026: nameservers `dns1/dns2.registrar-servers.com`, apex pointing at Namecheap parking.

The roadmap reserves the apex `hannahpearldavis.com` for the hub site. Since the tools now ship inside the hub site, attaching the apex covers everything at once — the tools ride along at `hannahpearldavis.com/tools/`.

**On Vercel:**

1. Project → Settings → Domains → Add → `hannahpearldavis.com`. Vercel will prompt to add `www` as well; accept.
2. Vercel displays the exact DNS records — an **A record** for the apex (general-purpose value `76.76.21.21`, but use whatever the dashboard shows for the project) and a **CNAME** for `www` (project-specific value like `xxxxxxxx.vercel-dns-017.com`; copy exactly, including any trailing period).
3. Namecheap → Domain List → `hannahpearldavis.com` → Manage → **Advanced DNS**: delete the parking records, then add the A record on host `@` and the CNAME on host `www` with the values from step 2.
4. Wait for propagation (minutes to a couple of hours). Vercel issues SSL automatically; the Domains page flips to "Valid Configuration."

**On Cloudflare Pages** (the recommended production host): add the custom domain in Pages → Custom domains, which walks through moving the domain onto Cloudflare DNS or adding a CNAME — same outcome.

**Either way, afterwards:** enable auto-renew and domain privacy at Namecheap, and plan the transfer of the domain into Pearl's LLC ownership (open item from [05-roadmap.md](05-roadmap.md) Phase 0).
