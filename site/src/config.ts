/**
 * Central site configuration. Everything an editor might need to change
 * lives here — links, donation rails, feed sources, launch checklist items.
 */

export const SITE = {
  name: "JustPearlyThings",
  tagline: "Independent media on dating, family, and the family court system.",
  domain: "justpearlythings.com",
  // TODO before launch: replace with the real mission video (YouTube/Rumble embed URL).
  missionVideoEmbedUrl: "",
};

export const CTA = {
  membership: {
    label: "Join The Audacity Network",
    url: "https://theaudacitynetwork.com",
    blurb: "Every episode, live streams, and community. $9.99/mo or $99.99/yr.",
  },
  merch: {
    label: "Official Merch",
    url: "https://justpearlymerch.com",
  },
  donate: {
    label: "Donate",
    url: "/donate",
  },
  gofundme: {
    label: "Divorce Documentary Fundraiser",
    url: "https://www.gofundme.com/f/justpearlythings-divorce-documentary",
  },
};

export const DONATION_RAILS = {
  // Card donations go through the existing Stripe flow on The Audacity Network.
  card: "https://theaudacitynetwork.com",
  cashApp: "$pearlythings",
  venmo: "Just_pearlythings",
  /**
   * Crypto addresses were transcribed from public video descriptions and MUST be
   * re-verified character-by-character against an official source before being
   * shown to visitors. A single wrong character sends funds to a stranger.
   * Flip `verified` to true only after Pearl confirms them.
   */
  crypto: {
    verified: false,
    addresses: [
      { coin: "Bitcoin", address: "1KNcuxbo2qBuobhwJ1712zWmQf2EfX53UG" },
      { coin: "Bitcoin Cash", address: "qryc37nq00m9rurgycyz70924apndrgmyv6ulfffdr" },
      { coin: "Ethereum", address: "0x11258B61Fb2aD5f5A505AE8c6d922028a79e4fDd" },
    ],
  },
};

export const SOCIALS = [
  { name: "YouTube", url: "https://www.youtube.com/@JustPearlyThings" },
  { name: "Rumble", url: "https://rumble.com/c/JustPearlyThings" },
  { name: "X / Twitter", url: "https://twitter.com/pearlythingz" },
  { name: "Instagram", url: "https://www.instagram.com/justpearlythingsofficial" },
  { name: "TikTok", url: "https://www.tiktok.com/@justpearlythings" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100085342937283" },
  { name: "Spotify (Pearl Daily)", url: "https://podcasters.spotify.com/pod/show/pearldaily" },
  { name: "Apple Podcasts (Pearl Daily)", url: "https://podcasts.apple.com/us/podcast/pearl-daily/id1715060113" },
];

export const APPS = [
  {
    name: "iOS — The Audacity Network",
    url: "https://apps.apple.com/gb/app/the-audacity-network/id6480478398",
  },
  {
    name: "Android — The Audacity Network",
    url: "https://play.google.com/store/apps/details?id=tv.uscreen.theaudacitynetwork",
  },
];

export const FEEDS = {
  // Channel id for @JustPearlyThings — verified July 2026 (build pulled her current uploads).
  youtubeChannelId: "UCyR3jMVUgZadX9dHjuKFuMQ",
};

export const EMAIL = {
  /**
   * TODO before launch: create the ESP account (Buttondown or MailerLite — see
   * docs/03-platform-options.md) in Pearl's LLC name and paste the form action URL here.
   * While empty, the signup form stores nothing and shows a "coming soon" note.
   */
  formAction: "",
  heading: "Never lose touch",
  blurb:
    "Platforms ban, demonetize, and delete. Email doesn't. Join the list and you'll always know where to find the show.",
};
