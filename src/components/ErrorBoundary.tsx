import { Component, type ErrorInfo, type ReactNode } from "react";
import { business, waDefaultMessage, waLink } from "../data/business";

/**
 * Catches any unexpected client-side error and shows a themed fallback
 * with working navigation — the user never sees a blank screen.
 */
export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("UI error:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[100svh] flex-col items-center justify-center bg-maroon-800 px-5 text-center">
          <p className="eyebrow gold-rule text-gold-300">Oops</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
            Something went wrong
          </h1>
          <p className="mt-3 max-w-md text-ivory/70">
            Please reload the page. If the problem continues, message us on
            WhatsApp — {business.phoneDisplay}.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-gold-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-maroon-900 hover:bg-gold-300"
            >
              Reload Page
            </button>
            <a
              href={waLink(waDefaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ivory/40 px-7 py-3 text-sm font-medium text-ivory hover:border-gold-300 hover:text-gold-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
