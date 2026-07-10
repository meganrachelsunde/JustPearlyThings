/**
 * Central site configuration. Everything an editor might need to change
 * lives here — links, donation rails, feed sources, launch checklist items.
 */

export const SITE = {
  // The site is branded as Pearl herself; "JustPearlyThings" stays the name
  // of the show, and "JustPearlyThings, LLC" the legal entity.
  name: "Pearl Davis",
  // Used for meta descriptions and link previews, not shown on the page.
  tagline: "The official home of Pearl Davis — the show, the sources, and The Audacity Network.",
  domain: "hannahpearldavis.com",
  // Pearl's June 2026 explanation of why she built the network and what it funds.
  // Replace this when she records the shorter dedicated homepage version.
  missionVideoEmbedUrl: "https://www.youtube.com/embed/5WNuQ2gWvwc",
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
  card: "https://theaudacitynetwork.com/support-us",
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

/**
 * DO NOT LINK THESE until the network ships an app for its current platform.
 *
 * The store apps (bundle id tv.uscreen.theaudacitynetwork) were built for
 * Uscreen, the network's previous video platform. The current
 * theaudacitynetwork.com runs on a different system with its own accounts,
 * so logins created on the new site fail inside the old app. Sending
 * visitors there produces a broken first experience.
 */
export const LEGACY_APPS = [
  {
    name: "iOS — The Audacity Network",
    url: "https://apps.apple.com/us/app/the-audacity-network/id6480478398",
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
  heading: "Email is the only channel we own.",
  blurb:
    "Platforms decide who sees what and can end distribution overnight. An email list has no algorithm and no intermediary between us and you.",
  fallbackSurveyUrl: "https://forms.gle/8zdVoukc5Nb9i5nA8",
};
