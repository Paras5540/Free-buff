import type { Photo } from "./services";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * PORTFOLIO PROJECTS
 * ─────────────────────────────────────────────────────────────────────────
 * Project titles are descriptive of the work shown (never invented client
 * names or fake locations). Categories map 1:1 to the services verified on
 * the official Instagram profile. Photos are owner-supplied slots — add the
 * real Instagram photo to /public/images/<slot>.jpg and set `src`.
 */

export type Project = {
  slug: string;
  title: string;
  category: string; // service slug
  categoryLabel: string;
  description: string;
  highlights: string[];
  cover: Photo;
  gallery: Photo[];
};

export const projects: Project[] = [
  {
    slug: "dulha-safa-wedding",
    title: "Dulha Safa & Barati Pagdis",
    category: "safa-pagdi",
    categoryLabel: "Safa & Pagdi",
    description:
      "A hand-tied safa set for the dulha and his baraat — the signature work our studio is named after.",
    highlights: ["Hand-tied dulha safa", "Matching barati pagdis", "Tied on-site before the baraat"],
    cover: { slot: "project-safa-cover", src: "/images/ig-room-1.jpg", alt: "Signature event decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-safa-1", src: "/images/birthday-5.jpg", alt: "Warm decoration detail by Shree Safa Event Decoration", ratio: "aspect-[3/4]" },
      { slot: "project-safa-2", src: "/images/ig-balloon-3.jpg", alt: "Warm celebration decoration", ratio: "aspect-square" },
      { slot: "project-safa-3", src: "/images/ig-balloon-2.jpg", alt: "Decoration styling detail", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "marigold-haldi-setup",
    title: "Marigold Haldi Ceremony Setup",
    category: "haldi-decoration",
    categoryLabel: "Haldi",
    description:
      "A sun-soaked haldi stage in marigold yellows, styled for the candid moments that matter.",
    highlights: ["Marigold stage backdrop", "Seating for the family", "Photo-ready styling"],
    cover: { slot: "project-haldi-cover", src: "/images/ig-welcome-baby-3.jpg", alt: "Bright marigold-toned decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-haldi-1", src: "/images/ig-birthday-4.jpg", alt: "Bright yellow-theme decoration", ratio: "aspect-[3/4]" },
      { slot: "project-haldi-2", src: "/images/ig-birthday-5.jpg", alt: "Warm-toned decoration setup", ratio: "aspect-square" },
      { slot: "project-haldi-3", src: "/images/birthday-5.jpg", alt: "Warm decoration detail", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "mehndi-function-decor",
    title: "Mehndi Function Decor",
    category: "mehndi-decoration",
    categoryLabel: "Mehndi",
    description:
      "Colourful mehndi seating and backdrops that kept the bride's circle comfortable all evening.",
    highlights: ["Low gadda seating", "Draped backdrop", "Theme-matched colour palette"],
    cover: { slot: "project-mehndi-cover", src: "/images/ig-room-3.jpg", alt: "Colourful decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-mehndi-1", src: "/images/ig-room-2.jpg", alt: "Colourful event decoration", ratio: "aspect-[3/4]" },
      { slot: "project-mehndi-2", src: "/images/ig-balloon-1.jpg", alt: "Balloon decoration work", ratio: "aspect-square" },
      { slot: "project-mehndi-3", src: "/images/ig-birthday-3.jpg", alt: "Celebration setup detail", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "happy-birthday-balloons",
    title: "Happy Birthday Balloon Decor",
    category: "birthday-decoration",
    categoryLabel: "Birthday",
    description:
      "A balloon-rich birthday setup — the same style documented in our “Happy birthday 🎈” Instagram post.",
    highlights: ["Balloon arch & garland", "Name board", "Cake-table styling"],
    cover: { slot: "project-birthday-cover", src: "/images/ig-birthday-2.jpg", alt: "Happy birthday balloon decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-birthday-1", src: "/images/ig-birthday-4.jpg", alt: "Birthday balloon decor with fairy lights", ratio: "aspect-[3/4]" },
      { slot: "project-birthday-2", src: "/images/ig-birthday-5.jpg", alt: "Birthday cake table styling", ratio: "aspect-square" },
      { slot: "project-birthday-3", src: "/images/ig-birthday-1.jpg", alt: "First birthday balloon decor corner", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "welcome-baby-pastel",
    title: "Welcome Baby Pastel Setup",
    category: "welcome-baby",
    categoryLabel: "Welcome Baby",
    description:
      "A soft pastel welcome-baby room — styled like our “Welcome baby decoration” reel on Instagram.",
    highlights: ["Pastel balloon clouds", "Welcome backdrop", "Photo corner for the family"],
    cover: { slot: "project-baby-cover", src: "/images/ig-welcome-baby-1.jpg", alt: "Welcome baby pastel decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-baby-1", src: "/images/ig-welcome-baby-2.jpg", alt: "Welcome baby celebration setup", ratio: "aspect-[3/4]" },
      { slot: "project-baby-2", src: "/images/ig-welcome-baby-3.jpg", alt: "Bright welcome baby decoration", ratio: "aspect-[9/16]" },
      { slot: "project-baby-3", src: "/images/birthday-5.jpg", alt: "Soft warm celebration detail", ratio: "aspect-square" },
    ],
  },
  {
    slug: "surprise-room-styling",
    title: "Surprise Room Styling",
    category: "room-decoration",
    categoryLabel: "Room",
    description:
      "A bedroom transformed with balloons, lights and drapes — ready before the surprise walk-in.",
    highlights: ["Balloon ceiling", "Warm fairy lights", "Drape & floral accents"],
    cover: { slot: "project-room-cover", src: "/images/ig-room-2.jpg", alt: "Surprise room decoration with balloons and lights", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-room-1", src: "/images/ig-room-1.jpg", alt: "Room balloon ceiling with warm lighting", ratio: "aspect-[3/4]" },
      { slot: "project-room-2", src: "/images/ig-room-3.jpg", alt: "Bright room decoration setup", ratio: "aspect-square" },
      { slot: "project-room-3", src: "/images/ig-birthday-4.jpg", alt: "Balloon and fairy-light styling", ratio: "aspect-[9/16]" },
    ],
  },
  {
    slug: "balloon-arch-entrance",
    title: "Balloon Arch Entrance",
    category: "balloon-decoration",
    categoryLabel: "Balloon",
    description:
      "A grand balloon arch to welcome guests — balloon craft being the first decoration listed in our bio.",
    highlights: ["Full-height arch", "Chrome & pastel palette", "Entrance pillar pairing"],
    cover: { slot: "project-balloon-cover", src: "/images/ig-balloon-2.jpg", alt: "Balloon arch entrance decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-balloon-1", src: "/images/ig-balloon-3.jpg", alt: "Balloon decoration detail", ratio: "aspect-[3/4]" },
      { slot: "project-balloon-2", src: "/images/ig-balloon-4.jpg", alt: "Balloon arch styling", ratio: "aspect-square" },
      { slot: "project-balloon-3", src: "/images/ig-balloon-1.jpg", alt: "Balloon garland close-up", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "dulha-smoke-entry",
    title: "Dulha Smoke Entry",
    category: "smoke-cold-fire-entry",
    categoryLabel: "Entry Effects",
    description:
      "A cinematic smoke entry staged for the dulha's arrival — timed perfectly to the entry song.",
    highlights: ["Staged smoke effects", "Music-synced timing", "Safe supervised setup"],
    cover: { slot: "project-entry-cover", src: "/images/ig-entry-1.jpg", alt: "Dulha smoke entry effect", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-entry-1", src: "/images/ig-entry-2.jpg", alt: "Smoke entry moment", ratio: "aspect-[3/4]" },
      { slot: "project-entry-2", src: "/images/ig-balloon-2.jpg", alt: "Entry decoration detail", ratio: "aspect-square" },
      { slot: "project-entry-3", src: "/images/ig-room-2.jpg", alt: "Entry staging with lighting", ratio: "aspect-[4/5]" },
    ],
  },
  {
    slug: "godh-bharai-setup",
    title: "Godh Bharai Backdrop",
    category: "welcome-baby",
    categoryLabel: "Welcome Baby",
    description:
      "A gentle godh bharai backdrop in blush and gold tones for the family's shower ceremony.",
    highlights: ["Blush & gold palette", "Seating for the mother-to-be", "Family photo corner"],
    cover: { slot: "project-godh-cover", src: "/images/ig-welcome-baby-2.jpg", alt: "Godh bharai ceremony decoration by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-godh-1", src: "/images/ig-welcome-baby-3.jpg", alt: "Bright baby celebration decoration", ratio: "aspect-[3/4]" },
      { slot: "project-godh-2", src: "/images/ig-birthday-5.jpg", alt: "Warm-toned celebration detail", ratio: "aspect-square" },
    ],
  },
  {
    slug: "cake-table-styling",
    title: "Birthday Cake Table Styling",
    category: "birthday-decoration",
    categoryLabel: "Birthday",
    description:
      "A styled cake table with balloon garland and age cut-out — the centrepiece of the party.",
    highlights: ["Balloon garland", "Age & name cut-outs", "Coordinated tableware"],
    cover: { slot: "project-cake-cover", src: "/images/ig-birthday-5.jpg", alt: "Birthday cake table styling with balloons", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-cake-1", src: "/images/ig-birthday-4.jpg", alt: "Bright cake-table decoration", ratio: "aspect-[3/4]" },
      { slot: "project-cake-2", src: "/images/ig-birthday-3.jpg", alt: "Balloon garland over celebration table", ratio: "aspect-square" },
    ],
  },
  {
    slug: "baraat-pagdi-set",
    title: "Baraat Pagdi Set",
    category: "safa-pagdi",
    categoryLabel: "Safa & Pagdi",
    description:
      "A coordinated pagdi set tying the whole baraat together in one colour story.",
    highlights: ["Single colour story", "Comfortable all-day tie", "Quick on-site tying"],
    cover: { slot: "project-baraat-cover", src: "/images/ig-room-1.jpg", alt: "Warm event decoration work by Shree Safa Event Decoration", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-baraat-1", src: "/images/birthday-5.jpg", alt: "Decoration process detail", ratio: "aspect-[3/4]" },
      { slot: "project-baraat-2", src: "/images/ig-balloon-3.jpg", alt: "Celebration decoration styling", ratio: "aspect-square" },
    ],
  },
  {
    slug: "cold-fire-cake-cut",
    title: "Cold Fire Cake-Cut Moment",
    category: "smoke-cold-fire-entry",
    categoryLabel: "Entry Effects",
    description:
      "Cold fire effects framing the cake-cut — dramatic on camera, safe up close.",
    highlights: ["Cold pyro fountains", "Camera-ready framing", "Indoor-safe setup"],
    cover: { slot: "project-coldfire-cover", src: "/images/ig-entry-1.jpg", alt: "Cold fire effect at a celebration cake cutting", ratio: "aspect-[4/5]" },
    gallery: [
      { slot: "project-coldfire-1", src: "/images/ig-entry-2.jpg", alt: "Entry effect detail", ratio: "aspect-[3/4]" },
      { slot: "project-coldfire-2", src: "/images/ig-room-3.jpg", alt: "Celebration cake-cut setup", ratio: "aspect-square" },
    ],
  },
];

export const projectBySlug = (slug: string | undefined): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectsByCategory = (category: string): Project[] =>
  projects.filter((p) => p.category === category);

/** Portfolio filters — "All" plus the categories that actually have projects. */
export const portfolioFilters = [
  { slug: "all", label: "All" },
  { slug: "safa-pagdi", label: "Safa & Pagdi" },
  { slug: "haldi-decoration", label: "Haldi" },
  { slug: "mehndi-decoration", label: "Mehndi" },
  { slug: "birthday-decoration", label: "Birthday" },
  { slug: "welcome-baby", label: "Welcome Baby" },
  { slug: "room-decoration", label: "Room" },
  { slug: "balloon-decoration", label: "Balloon" },
  { slug: "smoke-cold-fire-entry", label: "Entry Effects" },
];
