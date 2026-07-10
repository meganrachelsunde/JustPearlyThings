import { FEEDS } from "../config";

export interface Episode {
  title: string;
  url: string;
  published: string; // ISO date
  thumbnail?: string;
}

/**
 * Curated fallback shown whenever the feed can't be fetched at build time.
 * These are real Pearl videos, not generic platform links, so a temporary
 * feed hiccup never turns the homepage into an empty link directory.
 */
const FALLBACK: Episode[] = [
  {
    title: "Its ALL About The Money For Women",
    url: "https://www.youtube.com/shorts/bNKOSFEhnfo",
    published: "2026-07-09T20:00:20+00:00",
    thumbnail: "https://i3.ytimg.com/vi/bNKOSFEhnfo/hqdefault.jpg",
  },
  {
    title: "INSANE HYPOCRISY From Christians",
    url: "https://www.youtube.com/watch?v=N2_aH5VfqR0",
    published: "2026-07-09T19:38:31+00:00",
    thumbnail: "https://i3.ytimg.com/vi/N2_aH5VfqR0/hqdefault.jpg",
  },
  {
    title: "304s and Girlbosses of The 'Gram",
    url: "https://www.youtube.com/watch?v=fHfz_IJm8DY",
    published: "2026-07-09T18:17:24+00:00",
    thumbnail: "https://i3.ytimg.com/vi/fHfz_IJm8DY/hqdefault.jpg",
  },
  {
    title: "Took You Long Enough, Brett!",
    url: "https://www.youtube.com/watch?v=IO0J_1Ksrlw",
    published: "2026-07-09T17:09:38+00:00",
    thumbnail: "https://i3.ytimg.com/vi/IO0J_1Ksrlw/hqdefault.jpg",
  },
  {
    title: "People On The Sidelines Aren’t the Ones Playing The Game",
    url: "https://www.youtube.com/watch?v=gQh61P-RUQo",
    published: "2026-07-08T22:07:11+00:00",
    thumbnail: "https://i3.ytimg.com/vi/gQh61P-RUQo/hqdefault.jpg",
  },
  {
    title: "The Feminist DOWNFALL of Dating Apps",
    url: "https://www.youtube.com/watch?v=lyxBDjhc7Yg",
    published: "2026-07-08T21:00:36+00:00",
    thumbnail: "https://i3.ytimg.com/vi/lyxBDjhc7Yg/hqdefault.jpg",
  },
];

/** Minimal XML entry parser — YouTube's feed is stable Atom, no dependency needed. */
function parseYouTubeAtom(xml: string): Episode[] {
  const episodes: Episode[] = [];
  const entries = xml.split("<entry>").slice(1);
  for (const entry of entries) {
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
    const url = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1];
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1] ?? "";
    const thumbnail = entry.match(/<media:thumbnail url="([^"]+)"/)?.[1];
    if (title && url) {
      episodes.push({ title: decodeEntities(title), url, published, thumbnail });
    }
  }
  return episodes;
}

function decodeEntities(s: string): string {
  return s
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

export async function getLatestEpisodes(limit = 6): Promise<{ episodes: Episode[]; live: boolean }> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${FEEDS.youtubeChannelId}`;
  let lastError = "unknown feed error";
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const res = await fetch(feedUrl, { signal: AbortSignal.timeout(10_000) });
      if (!res.ok) throw new Error(`feed responded ${res.status}`);
      const xml = await res.text();
      const episodes = parseYouTubeAtom(xml).slice(0, limit);
      if (episodes.length === 0) throw new Error("feed parsed to zero entries");
      return { episodes, live: true };
    } catch (err) {
      lastError = (err as Error).message;
      if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  console.warn(`[episodes] falling back to real video cards: ${lastError}`);
  return { episodes: FALLBACK.slice(0, limit), live: false };
}
