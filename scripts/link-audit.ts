import { chromium } from "playwright";

const BASE = "http://localhost:37733";
const jsErrors: string[] = [];
const browser = await chromium.launch();
const page = await browser.newPage();
page.on("pageerror", (e) => jsErrors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") jsErrors.push(m.text());
});

const routes = [
  "/", "/about", "/services", "/services/birthday-decoration",
  "/services/welcome-baby", "/portfolio", "/portfolio/happy-birthday-balloons",
  "/gallery", "/contact", "/nope",
];

let exit = 0;
for (const r of routes) {
  await page.goto(BASE + r, { waitUntil: "domcontentloaded", timeout: 20000 });
  // Collect internal links and verify they return < 400
  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a"))
      .map((a) => a.getAttribute("href"))
      .filter((h): h is string => !!h && h.startsWith("/"))
  );
  for (const h of [...new Set(links)]) {
    const hr = await page.request.get(BASE + h);
    if (hr.status() >= 400) {
      jsErrors.push(`DEAD LINK from ${r} -> ${h} (HTTP ${hr.status()})`);
      exit = 1;
    }
  }
  // Wait for all <img> to settle, then find broken ones
  await page.waitForTimeout(800);
  const bad: string[] = await page.evaluate(() =>
    Array.from(document.images)
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.src)
  );
  const total = await page.evaluate(() => document.images.length);
  if (bad.length) {
    jsErrors.push(`${r}: ${bad.length}/${total} broken image(s): ${bad.join(", ")}`);
    exit = 1;
  }
}

// External links present?
await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
const ext = await page.evaluate(() =>
  Array.from(document.querySelectorAll("a[href^=\"http\"]")).map((a) => (a as HTMLAnchorElement).href)
);
const uniqExt = [...new Set(ext)];
console.log("external links:", uniqExt.join(" | "));

console.log("issues:", jsErrors.length ? jsErrors.join("\n") : "NONE");
console.log(exit ? "AUDIT FAILED ❌" : "AUDIT CLEAN ✅");
await browser.close();
process.exit(exit);
