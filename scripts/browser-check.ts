/**
 * Loads the live preview in headless Chromium and captures every console
 * error with full args (component stacks included) and page errors.
 */
import { chromium } from "playwright";

const target = process.argv[2] ?? "http://localhost:37733/";

const browser = await chromium.launch();
const page = await browser.newPage();

const events: string[] = [];
page.on("console", async (msg) => {
  if (["error", "warning"].includes(msg.type())) {
    try {
      const args = await Promise.all(
        msg.args().map((a) => a.evaluate((v) => (typeof v === "string" ? v : JSON.stringify(v, null, 1)).slice(0, 2000))),
      );
      events.push(`[console.${msg.type()}] ${args.join(" | ")}`);
    } catch {
      events.push(`[console.${msg.type()}] ${msg.text().slice(0, 2000)}`);
    }
  }
});
page.on("pageerror", (err) => {
  events.push(`[pageerror] ${err.message}\n${err.stack?.slice(0, 1500)}`);
});

await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(3000);

const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 200));
console.log(`Body text starts with: ${JSON.stringify(bodyText)}`);
console.log(events.length ? "\n--- ERRORS ---" : "\nNo console/page errors");
// Print unique/short first, then the stack-bearing ones
for (const e of events) console.log(`${e}\n`);
await browser.close();
