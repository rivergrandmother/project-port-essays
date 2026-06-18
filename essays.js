/*
 * ── Essay Data ──
 *
 * To add a new essay:
 *   1. Create a new HTML file (copy an existing essay as a template)
 *   2. Add an entry below
 *
 * Fields:
 *   slug       – filename without .html (required)
 *   title      – essay title (required)
 *   date       – display date (required)
 *   firstLine  – opening line for the list page (optional)
 */

const ESSAYS = [
  {
    slug: "old-nature",
    title: "Old Nature",
    date: "May 2026",
    firstLine: "Between Religion and Horror, there was a chair.",
  },
  {
    slug: "talking-clouds",
    title: "Talking Clouds",
    date: "June 2026",
    firstLine: "Am I late again? Sunday morning — I want to have bubble tea today.",
  },
];