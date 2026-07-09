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
 * - Everything with `isExample: true` renders with a visible EXAMPLE badge and
 *   should be removed or replaced before the public launch — the entries here
 *   exist so Pearl can see what the page looks like with data in it.
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

/**
 * The RSVP form Pearl is already using (pinned in her YouTube comments —
 * "Follower Insight Survey / Fill out this form for our upcoming events").
 * Using the same form here keeps every lead on her own list rather than
 * split across YouTube and the site.
 */
export const RSVP_FORM_URL = "https://forms.gle/8zdVoukc5Nb9i5nA8";

export const upcoming: UpcomingEvent[] = [
  {
    title: "Monthly fundraiser livestream",
    date: "First Sunday of every month",
    time: "7:00 PM Central",
    format: "livestream",
    description:
      "The recurring event: a live show where Pearl walks through what the reporting is working on, takes call-ins, and asks the audience to fund the month ahead. Streamed on The Audacity Network and pushed to the podcast feed the next day.",
    rsvpUrl: RSVP_FORM_URL,
    isExample: true,
  },
  {
    title: "Family-court documentary preview",
    date: "TBD — August 2026",
    format: "virtual",
    description:
      "An invite-only preview of the family-court documentary in progress, with a Q&A afterward. Audience seats are limited; the RSVP list decides who gets in.",
    rsvpUrl: RSVP_FORM_URL,
    isExample: true,
  },
];

export const past: PastEvent[] = [
  {
    title: "Launch livestream",
    date: "July 2026",
    description:
      "First public event on the new hub — walking through the mission, the funding priorities, and taking audience questions live.",
    raised: "$—",
    usedFor: "Editor and producer pay for July.",
    isExample: true,
  },
  {
    title: "Court-day live show",
    date: "June 2026",
    description:
      "A pre-court-hearing live show covering the pending lawsuits and how the process actually plays out for the show.",
    raised: "$—",
    usedFor: "Legal defense fund.",
    isExample: true,
  },
];
