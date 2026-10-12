import type { Photo } from "../data/services";

/**
 * Renders a real photo when `src` is set. Until then it shows an elegant
 * branded placeholder — arch motif, gold monogram and a descriptive label.
 * No stock photography is ever substituted.
 */
export default function PhotoFrame({
  photo,
  className = "",
  imgClassName = "",
  eager = false,
  fill = true,
}: {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
  /** When true the media fills its container (grid/card usage).
   *  Set false in the lightbox to size the image by itself. */
  fill?: boolean;
}) {
  if (photo.src) {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`${fill ? "h-full w-full object-cover" : ""} ${className} ${imgClassName}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={photo.alt}
      className={`slot-pattern relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden p-6 text-center ${className} ${imgClassName}`}
    >
      {/* Soft arch motif */}
      <svg
        viewBox="0 0 120 120"
        className="absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 text-gold-400/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M20 120V64c0-30 22-52 40-52s40 22 40 52v56" />
        <path d="M32 120V66c0-23 17-42 28-42s28 19 28 42v54" opacity="0.6" />
      </svg>

      {/* Monogram */}
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/60 font-display text-sm font-semibold text-gold-600">
        SS
      </span>
      <span className="relative font-display text-lg leading-snug text-maroon-800/80">
        {photo.alt}
      </span>
      <span className="relative flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold-600/80">
        <span className="h-px w-6 bg-gold-400/60" />
        Shree Safa
        <span className="h-px w-6 bg-gold-400/60" />
      </span>
    </div>
  );
}
