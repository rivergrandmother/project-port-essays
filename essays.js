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
    slug: "old-nature",
    title: "Old Nature",
    date: "May 2026",
    description: "Reflections on how nature reclaims abandoned spaces.",
  },
  {
    slug: "talking-clouds",
    title: "Talking Clouds",
    date: "June 2026",
    description: "A dialogue about wanting normal life, asking questions, and finding meaning in uncertainty.",
  },
];