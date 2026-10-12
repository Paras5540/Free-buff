import { useCallback, useEffect, useRef } from "react";
import type { Photo } from "../data/services";
import PhotoFrame from "./PhotoFrame";

/** Full-screen lightbox with arrows, keyboard nav and mobile swipe. */
export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);

  const prev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;
  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-maroon-900/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-ivory/80">
        <span className="text-xs tracking-[0.2em]">
          {index + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          aria-label="Close viewer"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 transition-colors hover:bg-ivory/10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        className="flex flex-1 items-center justify-center px-4 pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          aria-label="Previous image"
          className="mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory/80 transition-colors hover:bg-ivory/10 sm:mr-6"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="flex w-full max-w-4xl items-center justify-center">
          <div
            className={
              photo.src
                ? ""
                : "aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-lg"
            }
          >
            <PhotoFrame
              photo={photo}
              eager
              fill={false}
              imgClassName={
                photo.src ? "max-h-[75vh] w-auto rounded-lg object-contain" : "rounded-lg"
              }
            />
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next image"
          className="ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory/80 transition-colors hover:bg-ivory/10 sm:ml-6"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="pb-5 text-center text-xs text-ivory/60">{photo.alt}</p>
    </div>
  );
}
