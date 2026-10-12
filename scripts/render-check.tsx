/**
 * Render-time crash check: renders every page (and route) to string.
 * Any error thrown during render will surface here.
 */
import { renderToString } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router-dom";

if (
  typeof (globalThis as Record<string, unknown>).IntersectionObserver ===
  "undefined"
) {
  class FakeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  (globalThis as Record<string, unknown>).IntersectionObserver = FakeObserver;
}

import App from "../src/App";

const routes = [
  "/",
  "/about",
  "/services",
  "/services/haldi-decoration",
  "/portfolio",
  "/portfolio/happy-birthday-balloons",
  "/gallery",
  "/contact",
  "/does-not-exist",
];

let failed = 0;
for (const path of routes) {
  try {
    const html = renderToString(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
    const len = html.length;
    if (len < 500) {
      failed++;
      console.log(`FAIL ${path} — suspiciously short output (${len} chars)`);
    } else {
      console.log(`OK   ${path} (${len} chars)`);
    }
  } catch (err) {
    failed++;
    console.log(`CRASH ${path}:`, err);
  }
}

if (failed > 0) {
  console.log(`\n${failed} route(s) failed`);
  process.exit(1);
}
console.log("\nAll routes render without errors");
