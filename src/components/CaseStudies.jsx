import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge, SmartImage } from "./ui.jsx";
import CaseArt from "./CaseArt.jsx";
import { CASE_STUDIES, CASES_TITLE, SECTION_BG } from "../data/content.jsx";

/**
 * Öne Çıkan İşler — normal vertical page flow (rev. slide 16: pinned
 * horizontal scroll removed). The cards live in a native horizontal
 * carousel driven three ways: prev/next arrow controls, a progress
 * indicator, and direct horizontal scroll / drag (mouse, trackpad, touch).
 */

/* ---- 16:9 media: YouTube/Vimeo embed → local mp4 → image → SVG art ---- */
const CaseMedia = ({ study }) => {
  const [active, setActive] = useState(false);
  const [videoOk, setVideoOk] = useState(true);
  const [posterOk, setPosterOk] = useState(true);
  const hasEmbed = Boolean(study.videoEmbedUrl);
  const hasVideo = Boolean(study.videoSrc) && videoOk;

  const Art = (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-slate-50 p-6">
      <CaseArt variant={study.art} className="h-full w-full" />
    </div>
  );

  return (
    <div className="case-media relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-lg shadow-slate-200/60">
      {hasEmbed ? (
        active ? (
          <iframe
            src={
              study.videoEmbedUrl +
              (study.videoEmbedUrl.includes("?") ? "&" : "?") +
              "autoplay=1&rel=0"
            }
            title={`${study.client} — ${study.label}`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <>
            {posterOk && study.poster ? (
              <img
                src={study.poster}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                onError={() => setPosterOk(false)}
              />
            ) : (
              Art
            )}
            <PlayButton onClick={() => setActive(true)} label="Videoyu oynat" />
          </>
        )
      ) : hasVideo ? (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={study.videoSrc}
            poster={posterOk ? study.poster : undefined}
            muted
            loop
            playsInline
            preload="metadata"
            controls={active}
            autoPlay={active}
            onError={() => setVideoOk(false)}
          />
          {!active && (
            <>
              {!posterOk && Art}
              <PlayButton onClick={() => setActive(true)} label="Videoyu oynat" />
            </>
          )}
        </>
      ) : (
        <SmartImage
          src={study.image}
          alt={`${study.client} kampanya görseli`}
          className="absolute inset-0 h-full w-full object-cover"
          fallback={Art}
        />
      )}
    </div>
  );
};

const PlayButton = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    className="group/play absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 hover:bg-ink/10"
  >
    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-500 shadow-xl shadow-brand-500/20 ring-1 ring-slate-200/80 backdrop-blur-xl transition-transform duration-300 group-hover/play:scale-110">
      <Play className="ml-1 h-7 w-7" aria-hidden="true" fill="currentColor" />
    </span>
  </button>
);

/* ---- Card ---- */
const CaseStudyCard = ({ study }) => (
  <article
    className="case-card relative z-10 flex w-[90vw] max-w-5xl shrink-0 snap-center flex-col rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-[border-color] duration-500 hover:border-brand-500/30 sm:p-8"
    aria-label={`${study.client} — ${study.label}`}
  >
    <div
      aria-hidden="true"
      className={"pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br " + study.gradient}
    />
    <span
      aria-hidden="true"
      className="pointer-events-none absolute right-6 top-1 select-none font-display text-[6rem] font-bold leading-none text-ink/[0.05] lg:text-[7rem]"
    >
      {study.number}
    </span>

    <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      {/* Left — 16:9 media */}
      <div className="flex flex-col justify-center lg:col-span-6">
        <CaseMedia study={study} />
      </div>

      {/* Right — content */}
      <div className="flex flex-col lg:col-span-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={
              "rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] " +
              study.chip
            }
          >
            {study.label}
          </span>
          <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-slate-500">
            {study.year}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {study.client}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{study.summary}</p>

        {/* Awards — logo + achievement beneath (rev. slide 17) */}
        <div className="mt-5 flex flex-wrap gap-3">
          {study.awards.map((award) => (
            <div
              key={award.name + award.text}
              className="flex w-[9.5rem] flex-col items-center rounded-xl border border-slate-200/80 bg-white/85 px-3 py-2.5 text-center shadow-sm"
            >
              <span className="flex h-9 items-center">
                <SmartImage
                  src={award.logo}
                  alt={award.name}
                  className="max-h-8 w-auto max-w-[8rem] object-contain"
                  fallback={
                    <span className="font-display text-xs font-bold text-slate-600">
                      {award.name}
                    </span>
                  }
                />
              </span>
              <span className="mt-1.5 text-[10px] font-semibold leading-tight text-slate-500">
                {award.text}
              </span>
            </div>
          ))}
        </div>

        <div
          className={
            "mt-6 grid gap-4 border-t border-slate-200/70 pt-5 " +
            (study.stats.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")
          }
        >
          {study.stats.map((stat) => {
            const StatIcon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col">
                <StatIcon className="mb-1.5 h-5 w-5 text-brand-400" aria-hidden="true" />
                <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </article>
);

/* ---- Carousel section ---- */
const CaseStudies = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const progressRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const updateProgress = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft > max - 8);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    const ro = new ResizeObserver(updateProgress);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      ro.disconnect();
    };
  }, [updateProgress]);

  const scrollByCard = (dir) => {
    const el = viewportRef.current;
    if (!el) return;
    const card = el.querySelector(".case-card");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.9;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  /* Drag-to-scroll with the mouse (touch already scrolls natively). */
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = viewportRef.current;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    viewportRef.current.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e) => {
    /* Swallow the click that ends a drag so buttons/links don't fire. */
    if (drag.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cases-heading > *",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".case-card",
        { y: 44, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cases-viewport", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const arrowCls = (disabled) =>
    "inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-300 " +
    (disabled
      ? "cursor-default border-slate-200 bg-white/60 text-slate-300"
      : "border-slate-200 bg-white text-ink hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 hover:shadow-lg");

  return (
    <section
      id="one-cikan-isler"
      ref={sectionRef}
      data-bg={SECTION_BG.cases}
      className="relative py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="cases-heading flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionBadge>Öne Çıkan İşler</SectionBadge>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {CASES_TITLE}
            </h2>
            {/* Progress indicator */}
            <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-slate-200">
              <div
                ref={progressRef}
                className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-amber-500 transition-transform duration-150"
              />
            </div>
          </div>
          {/* Arrow controls */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Önceki vaka"
              className={arrowCls(atStart)}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Sonraki vaka"
              className={arrowCls(atEnd)}
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal carousel — native scroll + snap + mouse drag */}
      <div
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className="cases-viewport no-scrollbar mt-8 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 active:cursor-grabbing sm:px-[max(1rem,calc((100vw-80rem)/2))]"
      >
        {CASE_STUDIES.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      {/* Compact CTA (replaces the old oversized contact card) */}
      <div className="mt-8 flex justify-center px-4">
        <a
          href="#iletisim"
          className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
        >
          Sıradaki başarı hikayesi sizinki olsun
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;
