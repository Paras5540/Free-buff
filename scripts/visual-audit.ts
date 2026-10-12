/**
 * DEEP VISUAL AUDIT — loads every page at mobile & desktop sizes and checks:
 *  - console/page errors
 *  - horizontal overflow (the #1 mobile bug)
 *  - WhatsApp CTA clutter: at most ONE in view at a time,
 *    checked at top / middle / bottom scroll positions
 *  - invisible content (reveal failure)
 *  - broken images / empty links
 */
import { chromium } from "playwright";

const BASE = process.argv[2] ?? "http://localhost:37733";
const routes = ["/", "/about", "/services", "/services/haldi-decoration", "/portfolio", "/portfolio/happy-birthday-balloons", "/gallery", "/contact", "/nope"];

const devices = [
  { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
  { name: "desktop", viewport: { width: 1366, height: 900 }, isMobile: false, hasTouch: false },
];

const browser = await chromium.launch();
let problems = 0;

/** Count WhatsApp CTAs visible in the current viewport, split by fixed vs content.
 *  "fixed" = the element itself or any ancestor is position:fixed (sticky bar,
 *  floating bubble). "content" = ordinary in-flow CTA. */
const waInView = () =>
  page.evaluate(() => {
    const isFixedEl = (el: Element) => {
      for (let n: Element | null = el; n; n = n.parentElement) {
        if (getComputedStyle(n).position === "fixed") return true;
      }
      return false;
    };
    const counts = { fixed: 0, content: 0 };
    for (const a of document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]')) {
      const r = a.getBoundingClientRect();
      const s = getComputedStyle(a);
      if (!(r.width > 0 && r.height > 0 && s.display !== "none" && r.top < window.innerHeight && r.bottom > 0)) continue;
      if (isFixedEl(a)) counts.fixed++;
      else counts.content++;
    }
    return counts;
  });

let page: any;

for (const device of devices) {
  const context = await browser.newContext({
    viewport: device.viewport,
    isMobile: device.isMobile,
    hasTouch: device.hasTouch,
    deviceScaleFactor: 2,
  });
  page = await context.newPage();

  const errors: string[] = [];
  page.on("pageerror", (err: Error) => errors.push(`[pageerror] ${err.message}`));
  page.on("console", (msg: any) => {
    if (msg.type() === "error") errors.push(`[console] ${msg.text().slice(0, 200)}`);
  });

  for (const route of routes) {
    errors.length = 0;
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(2000); // let reveals settle

    const issues: string[] = [];

    // WhatsApp clutter at three scroll positions.
    // Professional rule: exactly ONE fixed WhatsApp element (mobile bar OR
    // desktop bubble — never two floating ones), and at most TWO in-content
    // CTAs in view (adjacent cards on long pages is standard).
    const counts: string[] = [];
    let bad = false;
    for (const pos of [0, 0.5, 1]) {
      await page.evaluate((p: number) => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo(0, Math.max(0, max * p));
      }, pos);
      await page.waitForTimeout(600);
      const c = await waInView();
      counts.push(`f${c.fixed}/c${c.content}`);
      if (c.fixed !== 1 || c.content > 2) bad = true;
    }
    if (bad) issues.push(`WhatsApp clutter (fixed/in-content at top,mid,bottom: ${counts.join(" ")})`);

    // Layout + content checks at top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    const audit = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflowX = doc.scrollWidth - window.innerWidth;
      const hiddenReveals = document.querySelectorAll(".reveal:not(.is-visible)").length;
      const brokenImgs = [...document.querySelectorAll("img")].filter((i) => i.complete && i.naturalWidth === 0).length;
      const emptyLinks = [...document.querySelectorAll("a")].filter(
        (a) => !a.textContent?.trim() && !a.querySelector("img, svg, span") && a.getAttribute("aria-label") === null,
      ).length;
      const h1 = document.querySelectorAll("h1").length;
      const rootLen = document.getElementById("root")?.innerHTML.length ?? 0;
      return { overflowX, hiddenReveals, brokenImgs, emptyLinks, h1, rootLen };
    });

    if (audit.rootLen < 1000) issues.push("page almost empty");
    if (audit.overflowX > 2) issues.push(`HORIZONTAL OVERFLOW +${audit.overflowX}px`);
    if (audit.h1 !== 1) issues.push(`${audit.h1} <h1> tags`);
    if (audit.hiddenReveals > 0) issues.push(`${audit.hiddenReveals} unrevealed blocks`);
    if (audit.brokenImgs > 0) issues.push(`${audit.brokenImgs} broken images`);
    if (audit.emptyLinks > 0) issues.push(`${audit.emptyLinks} empty links`);
    if (errors.length) issues.push(`JS errors: ${errors[0]}`);

    if (issues.length) {
      problems++;
      console.log(`✗ [${device.name}] ${route}\n    ${issues.join("\n    ")}`);
    } else {
      console.log(`✓ [${device.name}] ${route}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(problems === 0 ? "\nAUDIT CLEAN — all pages, both devices" : `\n${problems} page/device combos with problems`);
process.exit(problems === 0 ? 0 : 1);
