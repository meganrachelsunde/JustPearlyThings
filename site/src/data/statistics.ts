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
  tableReference?: string;
  methodology?: string;
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
    id: "census-custodial-parents-2022",
    title: "Custodial parents by sex",
    category: "Family and custody",
    lens: ["feminist-statistics", "family-court", "custody"],
    status: "published",
    sourceQuality: "primary",
    valueText: "78.2% mothers · 21.8% fathers",
    claim:
      "Of the 13.9 million custodial parents represented in the 2022 U.S. Census estimate, 78.2% were mothers and 21.8% were fathers.",
    sourceTitle: "U.S. Census Bureau — Custodial Parents and Their Child Support: 2022",
    sourceUrl: "https://www.census.gov/library/publications/2025/demo/p60-285.html",
    tableReference: "Report P60-285, Appendix Table 1 (2022 data; published August 2025)",
    methodology:
      "Current Population Survey Child Support Supplement. A custodial parent is a parent age 15 or older living with their own child under 21 while the other parent lives outside the household.",
    notes:
      "This describes living arrangements among custodial parents. It does not show how often mothers or fathers sought custody, how contested cases were decided, or whether a judge rather than the parents determined the arrangement.",
  },
  {
    id: "bls-weekly-earnings-sex-2025",
    title: "Median weekly earnings by sex",
    category: "Earnings and work",
    lens: ["feminist-statistics", "labor", "economy", "methodology"],
    status: "published",
    sourceQuality: "primary",
    valueText: "Women $1,089 · Men $1,326",
    claim:
      "Among full-time U.S. wage and salary workers age 16 and older, median usual weekly earnings in 2025 were $1,089 for women and $1,326 for men; the women's median was 82.1% of the men's median.",
    sourceTitle: "U.S. Bureau of Labor Statistics — Usual Weekly Earnings, 2025 annual averages",
    sourceUrl: "https://www.bls.gov/news.release/wkyeng.t07.htm",
    tableReference: "Table 7, 2025 annual averages",
    methodology:
      "Current Population Survey; current-dollar median usual weekly earnings for full-time wage and salary workers. The comparison is unadjusted for occupation, hours, experience, education, industry, or other characteristics.",
    notes:
      "The 2025 estimate is an 11-month average excluding October because data were not collected during the federal shutdown. BLS says it is therefore not strictly comparable with annual averages for other years.",
  },
  {
    id: "cdc-suicide-sex-2023",
    title: "Suicide deaths and rates by sex",
    category: "Mental health",
    lens: ["feminist-statistics", "mental-health", "public-health", "sex-differences"],
    status: "published",
    sourceQuality: "primary",
    valueText: "Male 22.7 · Female 5.9 per 100,000",
    claim:
      "In the United States in 2023, 39,046 males died by suicide, compared with 10,270 females. The age-adjusted rates were 22.7 per 100,000 for males and 5.9 for females.",
    sourceTitle: "CDC/NCHS — Changes in Suicide Rates in the United States From 2022 to 2023",
    sourceUrl: "https://www.cdc.gov/nchs/products/databriefs/db541.htm",
    tableReference: "NCHS Data Brief 541, Figure 1 data table (final 2023 mortality data)",
    methodology:
      "National Vital Statistics System death-certificate data. Rates are age-adjusted, permitting comparison between male and female populations with different age distributions.",
    notes:
      "These are mortality counts and rates, not measures of nonfatal attempts, suicidal ideation, treatment access, or the causes of the difference.",
  },
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
];

export const publishedStatisticsRecords = statisticsRecords.filter(
  (record) => record.status === "published",
);

/**
 * Editorial queue only. Do not render this collection on the public site:
 * transcript claims and research prompts remain private until verified.
 */
export const statisticsResearchQueue = statisticsRecords.filter(
  (record) => record.status !== "published",
);

export const sourceQualityLabels: Record<SourceQuality, string> = {
  primary: "Primary dataset / official source",
  secondary: "Secondary analysis",
  video_transcript: "Show transcript claim (verify before publication)",
};

