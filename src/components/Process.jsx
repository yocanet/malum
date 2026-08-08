import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge } from "./ui.jsx";
import { PROCESS_STEPS, SECTION_BG } from "../data/content.jsx";

/** 4-step approach; the connector line draws itself as you scroll. */
const Process = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-heading > *",
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
        ".process-card",
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-grid", start: "top 82%" },
        }
      );

      /* Connector line draws with scroll */
      gsap.fromTo(
        ".process-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-grid",
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
    <section ref={sectionRef} data-bg={SECTION_BG.process} className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="process-heading mx-auto max-w-2xl text-center">
          <SectionBadge>Yaklaşımımız</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Işıltı, disiplinle parlar.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Her kampanya aynı dört adımdan geçer; hiçbir adım şansa bırakılmaz.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-100 lg:block"
            aria-hidden="true"
          >
            <div className="process-line h-full w-full origin-left bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-500" />
          </div>

          <div className="process-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              const isTeal = step.accent === "teal";
              return (
                <GlassCard key={step.step} className="process-card relative p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        "relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm " +
                        (isTeal
                          ? "border-steel-200 bg-steel-50 text-steel-500"
                          : "border-brand-200 bg-brand-50 text-brand-500")
                      }
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span
                      className="select-none font-display text-4xl font-bold text-ink/[0.07]"
                      aria-hidden="true"
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{step.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
