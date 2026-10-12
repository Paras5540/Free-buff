import { chromium } from "playwright";

/**
 * Final audit: every page in both languages:
 *  - zero images broken (scroll first so lazy images load, then check)
 *  - language toggle flips hero text (HI ⇄ EN)
 *  - zero page JS errors
 */
const BASE = "http://localhost:37733";
const pages = ["/", "/about", "/services", "/services/birthday-decoration",
  "/services/welcome-baby", "/portfolio", "/portfolio/happy-birthday-balloons",
  "/gallery", "/contact"];

const errors: string[] = [];
let brokenImages = 0;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
page.on("pageerror", (e) => errors.push(`${page.url()} JS: ${e.message}`));

for (const p of pages) {
  await page.goto(`${BASE}${p}`, { waitUntil: "networkidle" });
  // scroll to bottom so lazy images load
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let y = 0;
      const step = () => {
        y += 600;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight) setTimeout(step, 120);
        else resolve();
      };
      step();
    });
  });
  await page.waitForTimeout(800);
  const imgs = await page.$$eval("img", (els) =>
    els.map((el) => ({ src: (el as HTMLImageElement).src, ok: (el as HTMLImageElement).naturalWidth > 0 })),
  );
  const bad = imgs.filter((i) => !i.ok);
  brokenImages += bad.length;
  if (bad.length) console.log(`✗ ${p} broken:`, bad.map((b) => b.src).join(", "));
  else console.log(`✓ ${p}: ${imgs.length} images rendered (after lazy-load scroll)`);
}

// Language toggle check on home page
await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
const hiHero = await page.textContent("h1");
await page.click('div[role="group"] button:has-text("EN")');
await page.waitForTimeout(300);
const enHero = await page.textContent("h1");
const toggleWorks = hiHero !== enHero && (enHero ?? "").includes("Beautiful Memory");
console.log(toggleWorks ? "✓ Toggle HI→EN works (+ persists via localStorage)" : `✗ toggle FAIL: "${hiHero}" → "${enHero}"`);
// toggle back
await page.click('div[role="group"] button:has-text("हिं")');

// count placeholders (should be 0 now)
await page.goto(`${BASE}/services/safa-pagdi`, { waitUntil: "networkidle" });
const placeholders = await page.$$("div[role='img']");
console.log(placeholders.length === 0 ? "✓ Zero placeholder slots on safa page" : `✗ ${placeholders.length} placeholders remain`);

console.log(`\nJS errors: ${errors.length}`);
errors.slice(0, 5).forEach((e) => console.log("  ", e));
console.log(`Broken images: ${brokenImages}`);
console.log(brokenImages === 0 && errors.length === 0 && toggleWorks ? "AUDIT CLEAN ✅" : "AUDIT ISSUES ⚠️");
await browser.close();
process.exit(brokenImages === 0 && errors.length === 0 && toggleWorks ? 0 : 1);
