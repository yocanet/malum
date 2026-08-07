import React, { useLayoutEffect, useRef } from "react";
import { Sparkles, Award, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion, useReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import CaseArt from "./CaseArt.jsx";
import { CASE_STUDIES, SECTION_BG } from "../data/content.jsx";

const CaseStudyCard = ({ study }) => (
  <article
    className="case-card relative flex h-[58vh] min-h-[27rem] w-[85vw] max-w-3xl shrink-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg backdrop-blur-md transition-shadow duration-500 hover:shadow-2xl sm:p-10"
    aria-label={`${study.client} — ${study.label}`}
  >
    <div
      aria-hidden="true"
      className={"pointer-events-none absolute inset-0 bg-gradient-to-br " + study.gradient}
    />

    {/* Abstract campaign artwork */}
    <CaseArt
      variant={study.art}
      className="case-art pointer-events-none absolute -right-8 top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-90 sm:block lg:h-80 lg:w-80"
    />

    {/* Oversized index number */}
    <span
      aria-hidden="true"
      className="case-number pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] font-bold leading-none text-ink/[0.04]"
    >
      {study.number}
    </span>

    <div className="relative flex h-full flex-col sm:max-w-[60%]">
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

      <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {study.client}
      </h3>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-body sm:text-lg">
        {study.summary}
      </p>

      <div className="mt-auto grid grid-cols-3 gap-4 border-t border-slate-200/70 pt-8">
        {study.stats.map((stat) => {
          const StatIcon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col">
              <StatIcon className="mb-2 h-5 w-5 text-slate-400" aria-hidden="true" />
              <span className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
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

/** Pinned horizontal scroll scene with progress bar. */
const CaseStudies = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      gsap.utils.toArray(".case-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0.35,
          scale: 0.95,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: "left 95%",
            toggleActions: "play none none reverse",
          },
        });

        const number = card.querySelector(".case-number");
        if (number) {
          gsap.fromTo(
            number,
            { xPercent: 30 },
            {
              xPercent: -20,
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
            { xPercent: 12, rotate: 4 },
            {
              xPercent: -6,
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

      gsap.from(".cases-heading > *", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 70%" },
      });
    }, section);

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
      ref={sectionRef}
      data-bg={SECTION_BG.cases}
      className="relative overflow-hidden"
    >
      <div className={"flex flex-col justify-center py-10 " + (reduced ? "" : "h-screen")}>
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="cases-heading flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionBadge>Vaka Analizleri</SectionBadge>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                İşe yarayan işler.
              </h2>
              <div className="mt-6 h-1 w-44 overflow-hidden rounded-full bg-slate-200">
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-steel-500"
                />
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body">
              Kaydırmaya devam edin — ödüllü kampanyalarımız yatay olarak akıyor.
            </p>
          </div>
        </div>

        {/* Horizontal track (falls back to native swipe when motion is reduced) */}
        <div className={"mt-10 " + (reduced ? "overflow-x-auto pb-4" : "overflow-hidden")}>
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-8 px-4 will-change-transform sm:px-[max(1rem,calc((100vw-72rem)/2))]"
          >
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
            {/* End cap card */}
            <div className="case-card flex h-[58vh] min-h-[27rem] w-[70vw] max-w-xl shrink-0 flex-col items-center justify-center rounded-3xl border border-dashed border-brand-300 bg-white/60 p-10 text-center backdrop-blur-md">
              <Sparkles className="h-10 w-10 text-brand-500" aria-hidden="true" />
              <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
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
