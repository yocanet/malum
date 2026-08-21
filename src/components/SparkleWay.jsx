import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge } from "./ui.jsx";
import { SPARKLE_WAY, WAY_SUBTITLE, SECTION_BG } from "../data/content.jsx";

/** The Sparkle Way — 4-step model; connector draws with scroll. */
const SparkleWay = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".way-heading > *",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
      gsap.fromTo(
        ".way-card",
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".way-grid", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".way-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".way-grid",
            start: "top 75%",
            end: "bottom 55%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="calisma-sureci" ref={sectionRef} data-bg={SECTION_BG.way} className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="way-heading mx-auto max-w-2xl text-center">
          <SectionBadge tone="steel">Çalışma Süreci</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Dört adımlı çalışma modeli.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{WAY_SUBTITLE}</p>
        </div>

        <div className="relative mt-12">
          <div
            className="absolute left-0 right-0 top-12 hidden h-0.5 bg-slate-200/70 lg:block"
            aria-hidden="true"
          >
            <div className="way-line h-full w-full origin-left bg-gradient-to-r from-brand-500 via-amber-400 to-steel-500" />
          </div>

          <div className="way-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPARKLE_WAY.map((step) => {
              const Icon = step.icon;
              const brand = step.accent === "brand";
              return (
                <GlassCard key={step.step} className="way-card relative p-7">
                  <div className="flex items-start justify-between">
                    <span
                      className={
                        "relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm " +
                        (brand
                          ? "border-brand-200 bg-brand-50 text-brand-600"
                          : "border-steel-200 bg-steel-50 text-steel-600")
                      }
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className="select-none font-display text-5xl font-bold text-ink/[0.06]"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>
                  <p
                    className={
                      "mt-6 text-xs font-bold uppercase tracking-[0.22em] " +
                      (brand ? "text-brand-500" : "text-steel-500")
                    }
                  >
                    {step.key}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{step.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkleWay;
