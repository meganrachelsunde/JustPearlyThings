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
  isExample?: boolean;
};

export type PastEvent = {
  title: string;
  date: string;
  description: string;
  raised?: string;
  usedFor?: string;
  recordingUrl?: string;
  isExample?: boolean;
};

/** Pearl's current audience survey asks for city/state and event interests. */
export const AUDIENCE_SURVEY_URL = "https://forms.gle/8zdVoukc5Nb9i5nA8";

export const upcoming: UpcomingEvent[] = [];

export const past: PastEvent[] = [];
