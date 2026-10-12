import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealTag = "div" | "li" | "section" | "article" | "span";

/**
 * Fades content up once it scrolls into view.
 *
 * Bulletproof by design — content is NEVER allowed to stay hidden:
 *  1. IntersectionObserver reveals on scroll (the nice path).
 *  2. A 1.2 s timer force-reveals as a fallback, so even if the
 *     observer never fires (older WebViews, in-app browsers), all
 *     content becomes visible.
 *  3. A CSS animation safety net in index.css force-reveals the
 *     element even if this component's JS never runs.
 *
 * `as` lets it render as <li> (or others) to keep HTML valid inside lists.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: RevealTag;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediate check: if the element is already on screen, show it now.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setVisible(true);
              observer?.disconnect();
            }
          }
        },
        { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
      );
      observer.observe(el);
    }

    // Fallback: never leave content hidden for more than 1.2 s.
    const timer = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer?.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${delay ? `reveal-d${delay}` : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
