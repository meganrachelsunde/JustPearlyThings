# JustPearlyThings hub site

The independent website Pearl described in her video: mission video, donations with a
transparency section, monthly events, blog, resources for fathers, statistics with sources,
watch page, link-in-bio page, and email capture throughout. Static Astro site — fast, ~$0/mo
to host, and portable between hosts in minutes.

## Develop

```bash
cd site
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
```

## Deploy (Cloudflare Pages recommended)

1. Cloudflare Pages → Create project → connect this GitHub repo.
2. Build settings: root directory `site`, build command `npm run build`, output `dist`.
3. Add the custom domain `hannahpearldavis.com` (and `www`). If `justpearlythings.com` is ever acquired, add it here and make it the primary.
4. Set up a daily scheduled deploy (Pages → Settings → Builds, or a cron-triggered GitHub
   Action calling the deploy hook) so the "Latest episodes" feed stays fresh.

Netlify/Vercel work identically (base `site`, build `npm run build`, publish `dist`).

## Before launch — checklist

All editable content lives in [`src/config.ts`](src/config.ts) unless noted.

- [ ] `SITE.missionVideoEmbedUrl` — Pearl's mission video embed URL.
- [x] `FEEDS.youtubeChannelId` — verified July 2026; the build pulls her current uploads.
- [ ] `EMAIL.formAction` — create the ESP account (Buttondown/MailerLite, owned by the LLC)
      and paste the form endpoint. Until set, the form renders disabled as "coming soon".
- [ ] `DONATION_RAILS.crypto` — re-verify every address character-by-character against an
      official source, then set `verified: true`. **Do not skip this** — the addresses were
      transcribed from video descriptions.
- [ ] Review donation wording on `/donate` with the nonprofit question resolved
      (see `docs/07-answers-to-pearls-video.md` §3).
- [ ] Resources page (`src/pages/resources.astro`) — Pearl reviews/extends the list.
- [ ] Statistics engine (`src/data/statistics.ts`) — add/update records. Use:
      - `published` for externally-ready claims with solid sourcing
      - `from_video` for transcript-derived claims needing verification
      - `needs_source` for research prompts (including feminist-statistics queue)
- [ ] Replace the starter blog post in `src/content/blog/`.
- [ ] Brand pass: real logo/photos in place of the "P" monogram, colors if Pearl has a palette.

## Editing content

- **Blog posts:** add Markdown files to `src/content/blog/` with `title`, `description`,
  `date` frontmatter. Commit = publish.
- **Events:** edit the `upcoming`/`past` arrays at the top of `src/pages/events.astro`.
- **Links/socials/CTAs:** `src/config.ts`.
- **Statistics & sources engine:** edit `src/data/statistics.ts` records. The
  `/statistics` page automatically supports search + filtering by category/status/lens.
