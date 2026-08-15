import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { LOGO } from "../data/content.jsx";

/** Light glassmorphism card (VIP spec). */
export const GlassCard = ({ className = "", children, ...rest }) => (
  <div
    className={
      "rounded-[2rem] bg-white/80 backdrop-blur-xl border border-slate-200/80 " +
      "shadow-sm hover:shadow-2xl hover:border-brand-500/30 transition-all duration-500 " +
      className
    }
    {...rest}
  >
    {children}
  </div>
);

/** Small section eyebrow badge. */
export const SectionBadge = ({ children, tone = "brand" }) => (
  <span
    className={
      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase " +
      (tone === "steel"
        ? "border-steel-200 bg-steel-50 text-steel-600"
        : "border-brand-200 bg-brand-50 text-brand-600")
    }
  >
    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
    {children}
  </span>
);

/**
 * Image with graceful fallback. If `src` 404s (or is empty) the `fallback`
 * node renders instead — so the site never shows a broken image while real
 * assets are still being collected.
 */
export const SmartImage = ({ src, alt, className = "", fallback = null, ...rest }) => {
  const [failed, setFailed] = useState(!src);
  if (failed) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
};

/** Brand logo (image) with typographic fallback. variant: primary|white|black|icon|mark */
export const Logo = ({ variant = "primary", className = "", alt = "Sparkle Medya" }) => {
  const src = LOGO[variant] || LOGO.primary;
  const dark = variant === "white" || variant === "markWhite";
  const fallback = (
    <span
      className={
        "inline-flex items-center gap-2 font-display text-sm font-bold tracking-[0.22em] " +
        (dark ? "text-white" : "text-ink") +
        " " +
        className
      }
      aria-label={alt}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 shadow-md shadow-brand-500/30">
        <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
      </span>
      SPARKLE <span className="text-brand-500">MEDYA</span>
    </span>
  );
  return <SmartImage src={src} alt={alt} className={className} fallback={fallback} />;
};

/** Brand icons were removed from newer lucide-react; LinkedIn inlined. */
export const LinkedInIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
