/*
 * ── Essay Data ──
 *
 * To add a new essay:
 *   1. Create a new HTML file (copy an existing essay as a template)
 *   2. Add an entry below
 *
 * Fields:
 *   slug        – filename without .html (required)
 *   title       – essay title (required)
 *   date        – display date (required)
 *   description – one-line summary for the list page (optional)
 */

const ESSAYS = [
  {
    slug: "on-making",
    title: "On Making",
    date: "April 2026",
    description: "Why the act of making matters more than the thing made.",
  },
  {
    slug: "colour-and-memory",
    title: "Colour and Memory",
    date: "March 2026",
    description: "How certain palettes carry the weight of a place.",
  },
];
