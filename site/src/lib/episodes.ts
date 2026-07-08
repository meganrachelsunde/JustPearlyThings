import { FEEDS } from "../config";

export interface Episode {
  title: string;
  url: string;
  published: string; // ISO date
  thumbnail?: string;
}

/**
 * Curated fallback shown whenever the feed can't be fetched at build time
 * (offline build, feed hiccup, wrong channel id). Keeps the homepage useful
 * instead of empty. Update occasionally or ignore once the feed works.
 */
const FALLBACK: Episode[] = [
  {
    title: "Watch the latest episodes on The Audacity Network",
    url: "https://theaudacitynetwork.com",
    published: "",
  },
  {
    title: "Full episodes and clips on YouTube",
    url: "https://www.youtube.com/@JustPearlyThings",
    published: "",
  },
  {
    title: "Uncut shows on Rumble",
    url: "https://rumble.com/c/JustPearlyThings",
    published: "",
  },
  {
    title: "Pearl Daily podcast on Spotify and Apple Podcasts",
    url: "https://podcasts.apple.com/us/podcast/pearl-daily/id1715060113",
    published: "",
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
  try {
    const res = await fetch(feedUrl, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`feed responded ${res.status}`);
    const xml = await res.text();
    const episodes = parseYouTubeAtom(xml).slice(0, limit);
    if (episodes.length === 0) throw new Error("feed parsed to zero entries");
    return { episodes, live: true };
  } catch (err) {
    console.warn(`[episodes] falling back to curated links: ${(err as Error).message}`);
    return { episodes: FALLBACK.slice(0, limit), live: false };
  }
}
