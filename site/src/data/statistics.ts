export type StatStatus = "published" | "from_video" | "needs_source";
export type SourceQuality = "primary" | "secondary" | "video_transcript";

export interface StatisticRecord {
  id: string;
  title: string;
  category: string;
  lens: string[];
  status: StatStatus;
  sourceQuality: SourceQuality;
  claim: string;
  valueText?: string;
  sourceTitle: string;
  sourceUrl: string;
  notes?: string;
}

/**
 * Statistics & Sources Engine dataset.
 *
 * Rules:
 * 1) Only `published` records are treated as externally-ready claims.
 * 2) `from_video` records came from show transcripts and require verification.
 * 3) `needs_source` records are research prompts (including "feminist statistics").
 */
export const statisticsRecords: StatisticRecord[] = [
  {
    id: "vid-demonetized-two-years",
    title: "Demonetized period claim",
    category: "Platform risk",
    lens: ["creator-economy", "deplatforming"],
    status: "from_video",
    sourceQuality: "video_transcript",
    claim:
      "Pearl states she was demonetized in 2023 and remained demonetized for two years.",
    sourceTitle: "YouTube transcript segment shared by Pearl/Megan",
    sourceUrl: "https://www.youtube.com/@JustPearlyThings",
    notes:
      "Needs exact video URL + timestamp before moving to published. Keep as transcript-sourced only.",
  },
  {
    id: "vid-nine-tiktoks-three-instagrams",
    title: "Account-ban frequency claim",
    category: "Platform risk",
    lens: ["creator-economy", "deplatforming"],
    status: "from_video",
    sourceQuality: "video_transcript",
    claim:
      "Pearl claims she has had nine TikTok accounts and three Instagram accounts banned.",
    sourceTitle: "YouTube transcript segment shared by Pearl/Megan",
    sourceUrl: "https://www.youtube.com/@JustPearlyThings",
    notes:
      "Needs exact video URL + timestamp. Keep under platform-risk narrative until independently verified.",
  },
  {
    id: "vid-monthly-events-fundraising",
    title: "Monthly events fundraising plan",
    category: "Operations",
    lens: ["fundraising", "audience"],
    status: "from_video",
    sourceQuality: "video_transcript",
    claim:
      "Pearl says the network plans to run fundraising events once per month.",
    sourceTitle: "YouTube transcript segment shared by Pearl/Megan",
    sourceUrl: "https://www.youtube.com/@JustPearlyThings",
    notes:
      "Operational claim from transcript; can be moved to published once events page has dated records.",
  },
  {
    id: "fem-college-attainment",
    title: "Women and men college attainment",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "education", "sex-differences"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Track yearly share of degrees by sex (BA, MA, PhD) and trend changes over time.",
    sourceTitle: "NCES / Integrated Postsecondary Education Data System (IPEDS)",
    sourceUrl: "https://nces.ed.gov/ipeds/",
    notes:
      "Add exact tables and values for the year cited on the show before publishing claims.",
  },
  {
    id: "fem-labor-force-participation",
    title: "Labor force participation by sex",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "labor", "economy"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Track labor-force participation rates for women vs men and long-term trend.",
    sourceTitle: "U.S. Bureau of Labor Statistics (BLS)",
    sourceUrl: "https://www.bls.gov/",
    notes:
      "Use the exact BLS series IDs in citation notes to avoid disputes.",
  },
  {
    id: "fem-earnings-gap-method",
    title: "Earnings gap methodology",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "labor", "methodology"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Show unadjusted median earnings gap and adjusted analyses side by side, with methods explained.",
    sourceTitle: "U.S. Census / BLS / peer-reviewed labor economics",
    sourceUrl: "https://www.census.gov/topics/employment/earnings.html",
    notes:
      "Engine should present method notes, not just a single headline number.",
  },
  {
    id: "fem-domestic-violence-victimization",
    title: "Domestic violence victimization by sex",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "violence", "public-health"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Track victimization prevalence by sex, injury severity, and reporting rates.",
    sourceTitle: "CDC NISVS / DOJ NCVS",
    sourceUrl:
      "https://www.cdc.gov/violenceprevention/intimatepartnerviolence/fastfact.html",
    notes:
      "Do not publish claims until exact survey year and definition scope are listed.",
  },
  {
    id: "fem-family-court-custody-outcomes",
    title: "Custody outcomes by sex",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "family-court", "custody"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Track custody outcome distributions and agreement-vs-litigated case differences by parent sex.",
    sourceTitle: "State court administrative data / census-based family datasets",
    sourceUrl: "https://www.census.gov/topics/families.html",
    notes:
      "Many viral custody numbers are old or context-free; require year + jurisdiction + method.",
  },
  {
    id: "fem-suicide-by-sex",
    title: "Suicide rates by sex",
    category: "Feminist statistics",
    lens: ["feminist-statistics", "mental-health", "public-health"],
    status: "needs_source",
    sourceQuality: "primary",
    claim:
      "Track suicide rates and deaths by sex, including age stratification.",
    sourceTitle: "CDC WONDER / National Center for Health Statistics",
    sourceUrl: "https://wonder.cdc.gov/",
    notes:
      "Include age-standardization details when cited on air.",
  },
];

export const sourceQualityLabels: Record<SourceQuality, string> = {
  primary: "Primary dataset / official source",
  secondary: "Secondary analysis",
  video_transcript: "Show transcript claim (verify before publication)",
};

