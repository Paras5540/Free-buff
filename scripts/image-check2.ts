import { chromium } from "playwright";

const BASE = "http://localhost:37733";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });

for (const p of ["/", "/gallery"]) {
  await page.goto(`${BASE}${p}`, { waitUntil: "networkidle" });
  // scroll through the page to trigger lazy loading
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
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  const imgs = await page.$$eval("img", (els) =>
    els.map((el) => ({ src: (el as HTMLImageElement).src.split("/").pop(), ok: (el as HTMLImageElement).naturalWidth > 0 })),
  );
  const bad = imgs.filter((i) => !i.ok);
  console.log(p, `${imgs.length} imgs, broken after scroll: ${bad.length}`, bad.map((b) => b.src).join(",") || "");
}
await browser.close();
