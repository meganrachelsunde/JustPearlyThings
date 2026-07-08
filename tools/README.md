# JustPearlyThings Tools

Two browser-based tools for Pearl Davis and the JustPearlyThings team, imported into this repo from the Vercel deployment at
`justpearlythings-retentio-git-d15ee2-meganrachelsundes-projects.vercel.app` (July 2026) so they are version-controlled alongside the rest of the platform work.

## Pages

| File | Tool |
|---|---|
| `index.html` | Launcher page linking to both tools |
| `retention-assessment.html` | **Audience Retention Assessment** — score videos and clips using Studio metrics (CTR, APV, AVD, intro retention, retention spikes) or public proxy data (views, likes, comments, 48-hour velocity, subs gained). Produces a PPPS structure score, diagnosis, and suggested next edit per row. Supports CSV import/export and duplicating rows. |
| `risk-assessor.html` | **Clip & Statement Risk Assessor** — pre-publish triage of a cut's legal and reputational exposure. Two modes (Clip Risk, Statement Risk), factor-by-factor severity tiers (none / some / high), a composite score with an action tier, and a loader for pipeline result JSON. Any "High" on a minor-related factor forces an Escalate regardless of total. |

## How they work

Every page is a single self-contained static HTML file: styles and JavaScript are inline, no build step, no server-side code, no dependencies to install (the risk assessor loads the Roboto webfont from Google Fonts; everything else is local). The retention tool persists its table to `localStorage` in the visitor's browser — no entered Studio data leaves the machine unless the user exports a CSV.

## Running and deploying

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server --directory tools 8000
```

To deploy, point any static host (Vercel, Cloudflare Pages, Netlify) at this `tools/` directory — no build command, output directory is the folder itself.
