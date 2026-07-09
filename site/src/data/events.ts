/**
 * Events data — monthly fundraisers and live shows.
 *
 * From Pearl's video (docs/06-pearls-stated-priorities.md):
 *   "We're going to do events once a month to raise money. I'm going to talk
 *    about what we're going to do with the money... It's really important to
 *    us that we're not wasteful."
 *
 * This file is the single place to edit the Events page. Add or update an
 * entry here and the page updates on the next build.
 *
 * Rules of thumb:
 * - Upcoming events show a title, date, format, description, and an RSVP link.
 * - When an event has happened, move it from `upcoming` to `past` and fill in
 *   `raised` (dollar amount) and `usedFor` (what the money paid for). That's
 *   the transparency loop Pearl asked for.
 * Do not publish proposed dates or sample fundraising totals. Leave the arrays
 * empty until Pearl announces an event, then add only confirmed information.
 */

export type EventFormat = "livestream" | "in-person" | "virtual";

export type UpcomingEvent = {
  title: string;
  date: string;
  time?: string;
  format: EventFormat;
  description: string;
  rsvpUrl?: string;
  streamUrl?: string;
};

export type PastEvent = {
  title: string;
  date: string;
  description: string;
  raised?: string;
  usedFor?: string;
  recordingUrl?: string;
  sourceUrl?: string;
};

/** Pearl's current audience survey asks for city/state and event interests. */
export const AUDIENCE_SURVEY_URL = "https://forms.gle/8zdVoukc5Nb9i5nA8";

export const upcoming: UpcomingEvent[] = [];

export const past: PastEvent[] = [
  {
    title: "Terrence Popp documentary interview and meet-and-greet",
    date: "April 30, 2026",
    description:
      "Pearl joined Army combat veteran Terrence Popp at American Legion Post 372 in Cherry Hill, New Jersey, for an in-person documentary interview and meet-and-greet.",
    sourceUrl:
      "https://alch372.com/2026/04/29/meet-greet-documentary-interview-army-veteran-terrance-popp-pearl-davis/",
  },
  {
    title: "Pearl Davis vs. Ana Kasparian — Word War Debate WW1",
    date: "January 10, 2026",
    description:
      "Pearl debated Ana Kasparian live at the inaugural Word War Debate event in Atlantic City, New Jersey.",
    sourceUrl:
      "https://wordwardebate.com/ww1-debate-results#da0e05f3-ffe2-4300-82ba-b8af1e2e0405",
  },
];
