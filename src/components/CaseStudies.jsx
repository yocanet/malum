import React, { useLayoutEffect, useRef } from "react";
import { Sparkles, Award, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion, useReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import CaseArt from "./CaseArt.jsx";
import { CASE_STUDIES, SECTION_BG } from "../data/content.jsx";

/**
 * Case Studies — horizontal storytelling slider, sticky-scene edition.
 *
 * Layout fix:
 *   - `relative h-[300vh]` parent defines the scroll runway.
 *   - `sticky top-0 h-screen flex items-center overflow-hidden` keeps the
 *     scene on screen with NO ScrollTrigger pinning — no pin-spacer, so the
 *     jump/flicker when scrolling back up is structurally impossible.
 *   - The track's `x` is scrubbed against the parent's progress. The travel
 *     distance is measured from the real track width (`scrollWidth -
 *     innerWidth`) with `invalidateOnRefresh`, so any number of cards or a
 *     window resize stays perfectly calibrated (a hardcoded -67% would drift).
 *   - Cards animate with scrub-only micro-motion (scale/parallax, never
 *     opacity cliffs), so reversing direction replays smoothly instead of
 *     blinking. Cards sit at `z-10`; no clipping masks on the cards
 *     themselves — only the sticky viewport clips.
 */

const CaseStudyCard = ({ study }) => (
  <article
    className="case-card relative z-10 flex h-[58vh] min-h-[27rem] w-[85vw] max-w-3xl shrink-0 flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-brand-500/30 hover:shadow-xl sm:p-10"
    aria-label={`${study.client} — ${study.label}`}
  >
    {/* Soft brand wash — rounded to the card, no overflow clipping needed */}
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br " + study.gradient
      }
    />

    {/* Abstract campaign artwork */}
    <CaseArt
      variant={study.art}
      className="case-art pointer-events-none absolute right-0 top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-90 sm:block lg:h-80 lg:w-80"
    />

    {/* Oversized index number */}
    <span
      aria-hidden="true"
      className="case-number pointer-events-none absolute right-4 top-2 select-none font-display text-[9rem] font-bold leading-none text-ink/[0.05]"
    >
      {study.number}
    </span>

    <div className="relative z-10 flex h-full flex-col sm:max-w-[60%]">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={
            "rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] " +
            study.chip
          }
        >
          {study.label}
        </span>
        {study.awards.map((award) => (
          <span
            key={award}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700"
          >
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            {award}
          </span>
        ))}
      </div>

      <h3 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        {study.client}
      </h3>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
        {study.summary}
      </p>

      <div className="mt-auto grid grid-cols-3 gap-4 border-t border-slate-200/70 pt-8">
        {study.stats.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col">
              <StatIcon className="mb-2 h-5 w-5 text-brand-400" aria-hidden="true" />
              <span className="font-display text-3xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </article>
);

const CaseStudies = () => {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return undefined;
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);

      /* Horizontal drive: parent runway progress → track x. */
      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      /* Scrub-only micro-motion — fully reversible, no opacity cliffs. */
      gsap.utils.toArray(".case-card").forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.96, y: 16 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 100%",
              end: "left 55%",
              scrub: true,
            },
          }
        );

        const number = card.querySelector(".case-number");
        if (number) {
          gsap.fromTo(
            number,
            { xPercent: 24 },
            {
              xPercent: -12,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }

        const art = card.querySelector(".case-art");
        if (art) {
          gsap.fromTo(
            art,
            { xPercent: 10, rotate: 4 },
            {
              xPercent: -5,
              rotate: -2,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      /* Heading intro (one-shot entrance is fine outside the slider). */
      gsap.from(".cases-heading > *", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: wrap, start: "top 80%" },
      });
    }, wrap);

    /* Recalibrate once fonts/images settle. */
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="case-studies"
      ref={wrapRef}
      data-bg={SECTION_BG.cases}
      className={"relative " + (reduced ? "" : "h-[300vh]")}
    >
      {/* Sticky scene — stays on screen while the runway scrolls beneath */}
      <div
        className={
          reduced
            ? "flex flex-col justify-center py-16"
            : "sticky top-0 z-10 flex h-screen flex-col justify-center overflow-hidden"
        }
      >
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="cases-heading flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionBadge>Vaka Analizleri</SectionBadge>
              <h2 className="mt-5 font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                İşe yarayan işler.
              </h2>
              <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-slate-200">
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-steel-500"
                />
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              Kaydırmaya devam edin — ödüllü kampanyalarımız yatay olarak akıyor.
            </p>
          </div>
        </div>

        {/* Horizontal track (native swipe when motion is reduced) */}
        <div className={"mt-10 " + (reduced ? "overflow-x-auto pb-4" : "")}>
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-8 px-4 will-change-transform sm:px-[max(1rem,calc((100vw-72rem)/2))]"
          >
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}

            {/* End cap card */}
            <div className="case-card relative z-10 flex h-[58vh] min-h-[27rem] w-[70vw] max-w-xl shrink-0 flex-col items-center justify-center rounded-3xl border border-dashed border-brand-300 bg-white/60 p-10 text-center backdrop-blur-xl">
              <Sparkles className="h-10 w-10 text-brand-500" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Sıradaki başarı hikayesi sizinki olsun.
              </h3>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Projenizi Konuşalım
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
