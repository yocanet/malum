import React from "react";

/**
 * Abstract, brand-owned artwork for the case study cards.
 * Pure inline SVG — no external assets, no licensing, crisp at any size.
 * Each variant echoes the campaign mechanic it represents:
 *   dco   → a mosaic of creative variants, one "winning" tile lit up
 *   audio → concentric sound waves + an equalizer pulse
 *   film  → tilted film frames with a play mark
 */

const Defs = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-violet`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#818CF8" />
      <stop offset="1" stopColor="#4F46E5" />
    </linearGradient>
    <linearGradient id={`${id}-teal`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#22D3EE" />
      <stop offset="1" stopColor="#0891B2" />
    </linearGradient>
    <linearGradient id={`${id}-fuchsia`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#FCD34D" />
      <stop offset="1" stopColor="#F59E0B" />
    </linearGradient>
    <linearGradient id={`${id}-soft`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#E0E7FF" />
      <stop offset="1" stopColor="#CFFAFE" />
    </linearGradient>
  </defs>
);

const DcoArt = () => (
  <svg viewBox="0 0 320 320" fill="none" aria-hidden="true" className="h-full w-full">
    <Defs id="dco" />
    {/* Creative-variant mosaic */}
    <g opacity="0.9">
      <rect x="24" y="36" width="80" height="80" rx="16" fill="url(#dco-soft)" />
      <rect x="120" y="36" width="80" height="80" rx="16" fill="url(#dco-violet)" opacity="0.25" />
      <rect x="216" y="36" width="80" height="80" rx="16" fill="url(#dco-soft)" />
      <rect x="24" y="132" width="80" height="80" rx="16" fill="url(#dco-teal)" opacity="0.22" />
      {/* Winning creative */}
      <rect x="116" y="128" width="88" height="88" rx="18" fill="url(#dco-violet)" />
      <rect
        x="110"
        y="122"
        width="100"
        height="100"
        rx="22"
        stroke="url(#dco-fuchsia)"
        strokeWidth="2.5"
        strokeDasharray="6 8"
      />
      <rect x="216" y="132" width="80" height="80" rx="16" fill="url(#dco-soft)" />
      <rect x="24" y="228" width="80" height="56" rx="16" fill="url(#dco-soft)" />
      <rect x="120" y="232" width="80" height="52" rx="16" fill="url(#dco-fuchsia)" opacity="0.2" />
      <rect x="216" y="228" width="80" height="56" rx="16" fill="url(#dco-teal)" opacity="0.25" />
    </g>
    {/* Signal lines into the winner */}
    <path
      d="M64 116 C64 160, 100 150, 116 166 M256 116 C256 160, 220 150, 204 166 M64 228 C90 210, 100 200, 116 192"
      stroke="url(#dco-teal)"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    {/* Sparkle on the winner */}
    <path
      d="M160 148 l4.5 12.5 12.5 4.5 -12.5 4.5 -4.5 12.5 -4.5 -12.5 -12.5 -4.5 12.5 -4.5 z"
      fill="#FFFFFF"
      opacity="0.95"
    />
  </svg>
);

const AudioArt = () => (
  <svg viewBox="0 0 320 320" fill="none" aria-hidden="true" className="h-full w-full">
    <Defs id="audio" />
    {/* Concentric sound waves */}
    <g strokeLinecap="round" fill="none">
      <circle cx="160" cy="160" r="130" stroke="url(#audio-soft)" strokeWidth="3" />
      <path
        d="M160 46 a114 114 0 0 1 114 114"
        stroke="url(#audio-violet)"
        strokeWidth="4"
        opacity="0.85"
      />
      <circle cx="160" cy="160" r="96" stroke="url(#audio-soft)" strokeWidth="3" />
      <path
        d="M160 240 a80 80 0 0 1 -80 -80"
        stroke="url(#audio-teal)"
        strokeWidth="4"
        opacity="0.85"
      />
      <circle cx="160" cy="160" r="62" stroke="url(#audio-soft)" strokeWidth="3" />
    </g>
    {/* Equalizer pulse */}
    <g fill="url(#audio-violet)">
      <rect x="120" y="140" width="10" height="40" rx="5" />
      <rect x="138" y="120" width="10" height="80" rx="5" fill="url(#audio-teal)" />
      <rect x="156" y="104" width="10" height="112" rx="5" />
      <rect x="174" y="126" width="10" height="68" rx="5" fill="url(#audio-teal)" />
      <rect x="192" y="146" width="10" height="28" rx="5" />
    </g>
    {/* Floating notes */}
    <circle cx="252" cy="84" r="6" fill="url(#audio-fuchsia)" />
    <circle cx="70" cy="236" r="8" fill="url(#audio-teal)" opacity="0.8" />
    <path
      d="M262 60 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 z"
      fill="url(#audio-violet)"
      opacity="0.9"
    />
  </svg>
);

const FilmArt = () => (
  <svg viewBox="0 0 320 320" fill="none" aria-hidden="true" className="h-full w-full">
    <Defs id="film" />
    {/* Back frames */}
    <g transform="rotate(-8 160 160)">
      <rect x="52" y="84" width="216" height="140" rx="18" fill="url(#film-soft)" />
    </g>
    <g transform="rotate(-2 160 160)">
      <rect x="48" y="92" width="224" height="144" rx="18" fill="url(#film-teal)" opacity="0.25" />
    </g>
    {/* Front frame */}
    <g transform="rotate(4 160 160)">
      <rect x="44" y="96" width="232" height="148" rx="18" fill="url(#film-violet)" />
      {/* Perforations */}
      <g fill="#FFFFFF" opacity="0.55">
        <rect x="58" y="108" width="12" height="12" rx="3" />
        <rect x="58" y="132" width="12" height="12" rx="3" />
        <rect x="58" y="156" width="12" height="12" rx="3" />
        <rect x="58" y="180" width="12" height="12" rx="3" />
        <rect x="58" y="204" width="12" height="12" rx="3" />
        <rect x="250" y="108" width="12" height="12" rx="3" />
        <rect x="250" y="132" width="12" height="12" rx="3" />
        <rect x="250" y="156" width="12" height="12" rx="3" />
        <rect x="250" y="180" width="12" height="12" rx="3" />
        <rect x="250" y="204" width="12" height="12" rx="3" />
      </g>
      {/* Play mark */}
      <circle cx="160" cy="170" r="34" fill="#FFFFFF" opacity="0.92" />
      <path d="M150 154 l30 16 -30 16 z" fill="url(#film-fuchsia)" />
    </g>
    {/* Sparkles */}
    <path
      d="M282 66 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z"
      fill="url(#film-teal)"
    />
    <circle cx="44" cy="70" r="6" fill="url(#film-fuchsia)" opacity="0.8" />
  </svg>
);

const VARIANTS = { dco: DcoArt, audio: AudioArt, film: FilmArt };

const CaseArt = ({ variant, className = "" }) => {
  const Art = VARIANTS[variant] || DcoArt;
  return (
    <div className={className} aria-hidden="true">
      <Art />
    </div>
  );
};

export default CaseArt;
