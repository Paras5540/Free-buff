# Adding the Real Instagram Photos

Instagram login-walls its CDN, so the site ships with elegant branded
**photo slots** instead of stock photography (per the no-stock-photos rule).
Replace them with the business's own Instagram photos in two steps:

1. **Save the photo file** into this folder (`public/images/`) using the
   slot name shown on the placeholder, e.g.:

   ```
   public/images/haldi-hero.jpg
   public/images/safa-1.jpg
   public/images/project-birthday-cover.jpg
   ```

2. **Point the slot at the file** in the data files:

   - `src/data/services.ts` — hero + gallery slots for the 8 service pages
   - `src/data/projects.ts` — cover + gallery slots for portfolio projects

   Change `slot: "haldi-hero"` entries by adding `src: "/images/haldi-hero.jpg"`:

   ```ts
   hero: { slot: "haldi-hero", src: "/images/haldi-hero.jpg", alt: "…", ratio: "aspect-[4/5]" }
   ```

Tips:

- Keep `alt` text descriptive — placeholders already carry good alt text.
- Keep the `ratio` classes so layouts stay stable.
- Export at ~1600px on the long edge, WebP/JPG under ~300 KB each.
- The site never shows a broken image: until `src` is set, the branded
  slot (with the exact filename to add) is displayed instead.
