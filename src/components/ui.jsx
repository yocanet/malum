import React from "react";
import { Sparkles } from "lucide-react";

/** Light glassmorphism card. */
export const GlassCard = ({ className = "", children, ...rest }) => (
  <div
    className={
      "rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 " +
      "shadow-sm hover:shadow-xl transition-all duration-500 " +
      className
    }
    {...rest}
  >
    {children}
  </div>
);

/** Small section eyebrow badge. */
export const SectionBadge = ({ children, tone = "violet" }) => (
  <span
    className={
      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase " +
      (tone === "teal"
        ? "border-cyan-200 bg-cyan-50 text-cyan-700"
        : "border-brand-200 bg-brand-50 text-brand-600")
    }
  >
    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
    {children}
  </span>
);

/** Brand icons were removed from newer lucide-react versions; LinkedIn is
    inlined as a plain SVG so the dependency version doesn't matter. */
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
