import React, { useLayoutEffect, useRef } from "react";
import { Sparkles, Award, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion, useReducedMotion } from "../lib/motion";
import { SectionBadge, SmartImage } from "./ui.jsx";
import CaseArt from "./CaseArt.jsx";
import { CASE_STUDIES, SECTION_BG } from "../data/content.jsx";

/**
 * Case Studies — horizontal storytelling scene, production edition.
 *
 * How the layout works (and why the live-site bugs can't recur):
 *
 *   RUNWAY   The section's height is NOT a fixed h-[300vh]. It is computed
 *            from the real track: innerHeight + (track.scrollWidth -
 *            innerWidth) + a settle buffer. The vertical scroll distance
 *            therefore always matches the horizontal travel exactly — the
 *            next section can never appear before the last card lands, and
 *            the scene never releases early.
 *
 *   SCENE    The inner viewport is CSS `sticky top-0 h-screen overflow-
 *            hidden` (desktop only). No GSAP pin → no pin-spacer → nothing
 *            to jump or flicker when scrolling back up.
 *
 *   DRIVE    GSAP only scrubs the track's `x` against runway progress
 *            (`invalidateOnRefresh` re-measures on every refresh). Card
 *            micro-motion (scale/y/rotate/shadow, number & art parallax) is
 *            scrub-only — fully reversible, no opacity cliffs.
 *
 *   SYNC     ResizeObserver on the track + `document.fonts.ready` +
 *            a `refreshInit` hook keep the runway height and travel distance
 *            calibrated through font swaps, image loads and window resizes.
 *
 *   LAYERS   Heading block and track are separate flex rows (no absolute
 *            overlap): heading z-20, track z-10, and the heading row keeps
 *            its own vertical space in the scene composition.
 *
 *   MOBILE   Below lg (and whenever prefers-reduced-motion is set) the scene
 *            is a native horizontal snap-scroll — no sticky, no JS.
 */

const CaseStudyCard = ({ study }) => (
  <article
    className="case-card relative z-10 flex h-[56vh] min-h-[27rem] w-[86vw] max-w-3xl shrink-0 snap-center flex-col rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-[border-color] duration-500 hover:border-brand-500/30 sm:p-10 lg:snap-align-none"
    aria-label={`${study.client} — ${study.label}`}
  >
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br " + study.gradient
      }
    />

    {/* Campaign visual: real image if present, brand SVG art as fallback */}
    <div className="case-art pointer-events-none absolute right-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 sm:block lg:h-72 lg:w-72">
      <SmartImage
        src={study.image}
        alt=""
        className="h-full w-full rounded-3xl object-cover opacity-90 shadow-lg"
        fallback={<CaseArt variant={study.art} className="h-full w-full opacity-90" />}
      />
    </div>

    {/* Oversized index number */}
    <span
      aria-hidden="true"
      className="case-number pointer-events-none absolute right-4 top-2 select-none font-display text-[8rem] font-bold leading-none text-ink/[0.05] lg:text-[9rem]"
    >
      {study.number}
    </span>

    <div className="relative z-10 flex h-full flex-col sm:max-w-[62%]">
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

      <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {study.client}
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-body sm:text-base">
        {study.summary}
      </p>

      {/* Awards */}
      <div className="mt-4 flex flex-wrap gap-2">
        {study.awards.map((award) => (
          <span
            key={award}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-gradient-to-b from-amber-50 to-white px-3 py-1 text-[11px] font-semibold text-amber-700 shadow-sm"
          >
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            {award}
          </span>
        ))}
      </div>

      <div
        className={
          "mt-auto grid gap-4 border-t border-slate-200/70 pt-6 " +
          (study.stats.length > 3 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")
        }
      >
        {study.stats.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col">
              <StatIcon className="mb-2 h-5 w-5 text-brand-400" aria-hidden="true" />
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

    const mm = gsap.matchMedia(wrapRef);

    /* Desktop: sticky scene + scrubbed horizontal drive */
    mm.add("(min-width: 1024px)", () => {
      const getScrollAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);

      /* Runway height = viewport + horizontal travel × SPEED + settle buffer.
         SPEED > 1 slows the horizontal flow relative to the wheel, which is
         what makes the scene feel properly "locked" while it plays. */
      const SPEED = 1.6;
      const setRunway = () => {
        const buffer = Math.round(window.innerHeight * 0.2);
        wrap.style.height = `${Math.round(
          window.innerHeight + getScrollAmount() * SPEED + buffer
        )}px`;
      };
      setRunway();

      /* Keep runway current whenever ScrollTrigger recalculates. */
      ScrollTrigger.addEventListener("refreshInit", setRunway);

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

      /* Scrub-only micro-motion — reversible, no opacity cliffs. */
      gsap.utils.toArray(".case-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.94,
            y: 24,
            rotate: 1.2,
            boxShadow: "0 8px 24px -16px rgba(15,23,42,0.12)",
          },
          {
            scale: 1,
            y: 0,
            rotate: 0,
            boxShadow: "0 24px 48px -20px rgba(15,23,42,0.18)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 100%",
              end: "left 58%",
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

      /* Track geometry can change (fonts, images, viewport) — recalibrate. */
      let lastWidth = track.scrollWidth;
      const ro = new ResizeObserver(() => {
        if (track.scrollWidth !== lastWidth) {
          lastWidth = track.scrollWidth;
          setRunway();
          ScrollTrigger.refresh();
        }
      });
      ro.observe(track);

      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          setRunway();
          ScrollTrigger.refresh();
        });
      }

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        window.removeEventListener("load", onLoad);
        ScrollTrigger.removeEventListener("refreshInit", setRunway);
        ro.disconnect();
        wrap.style.height = "";
      };
    });

    /* All viewports: heading entrance */
    mm.add("(min-width: 0px)", () => {
      gsap.fromTo(
        ".cases-heading > *",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: wrap, start: "top 80%" },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const sticky = !reduced;

  return (
    <section
      id="vakalar"
      ref={wrapRef}
      data-bg={SECTION_BG.cases}
      className="relative z-[1]"
    >
      {/* Sticky scene viewport (desktop); plain flow on mobile/reduced */}
      <div className={sticky ? "lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden" : ""}>
        <div className="flex h-full flex-col justify-center gap-8 py-16 lg:gap-10 lg:py-0 lg:pt-20">
          {/* Heading row — own space, above the track, never overlapped */}
          <div className="relative z-20 mx-auto w-full max-w-6xl px-4">
            <div className="cases-heading flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionBadge>Ödüllü Vakalar</SectionBadge>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  İşe yarayan işler.
                </h2>
                <div className="mt-6 hidden h-1 w-44 overflow-hidden rounded-full bg-slate-200 lg:block">
                  <div
                    ref={progressRef}
                    className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-amber-500"
                  />
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-body">
                Kaydırmaya devam edin — ödüllü kampanyalarımız yatay olarak akıyor.
              </p>
            </div>
          </div>

          {/* Track row — native snap-scroll below lg, GSAP-driven on lg+ */}
          <div
            className={
              "relative z-10 " +
              (sticky
                ? "snap-x snap-mandatory overflow-x-auto pb-4 lg:snap-none lg:overflow-hidden lg:pb-0"
                : "snap-x snap-mandatory overflow-x-auto pb-4")
            }
          >
            <div
              ref={trackRef}
              className="flex w-max items-stretch gap-6 px-4 will-change-transform sm:gap-8 sm:px-[max(1rem,calc((100vw-72rem)/2))]"
            >
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}

              {/* End cap card */}
              <div className="case-card relative z-10 flex h-[56vh] min-h-[27rem] w-[70vw] max-w-xl shrink-0 snap-center flex-col items-center justify-center rounded-[2rem] border border-dashed border-brand-300 bg-white/60 p-10 text-center backdrop-blur-xl">
                <Sparkles className="h-10 w-10 text-brand-500" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Sıradaki başarı hikayesi sizinki olsun.
                </h3>
                <a
                  href="#iletisim"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
                >
                  Projenizi Konuşalım
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
