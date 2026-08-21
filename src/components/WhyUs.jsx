import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge, SmartImage } from "./ui.jsx";
import { WHY, SECTION_BG, LOGO } from "../data/content.jsx";

/**
 * Hakkımızda — value proposition. The four core values orbit the brand
 * mark (rev. slide 9); the copy column is centred.
 */
const WhyUs = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-reveal",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".why-chip",
        { y: 18, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-visual", start: "top 80%" },
        }
      );
      gsap.to(".why-mark", {
        y: -50,
        rotate: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hakkimizda"
      ref={sectionRef}
      data-bg={SECTION_BG.why}
      className="relative overflow-hidden px-4 py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        {/* Copy — centred (rev. slide 9) */}
        <div className="flex flex-col items-center text-center lg:col-span-6">
          <div className="why-reveal">
            <SectionBadge>Hakkımızda</SectionBadge>
          </div>
          <h2 className="why-reveal mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {WHY.title}
          </h2>
          <p className="why-reveal mt-6 max-w-xl text-lg leading-relaxed text-body">
            {WHY.description}
          </p>
        </div>

        {/* Visual — brand mark with the four values at its corners */}
        <div className="why-visual relative lg:col-span-6">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-steel-50 shadow-2xl shadow-slate-200/60 sm:inset-10" />
            <div aria-hidden="true" className="absolute -right-6 -top-6 h-52 w-52 rounded-full bg-brand-300/30 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-8 -left-6 h-52 w-52 rounded-full bg-steel-300/30 blur-3xl" />
            <div className="absolute inset-0 flex items-center justify-center p-20 sm:p-24">
              <SmartImage
                src={LOGO.mark}
                alt="Sparkle Medya işareti"
                className="why-mark w-full max-w-[15rem] drop-shadow-xl"
                fallback={<span className="font-display text-7xl font-bold text-brand-500">Sp</span>}
              />
            </div>

            {/* Four value chips at the corners — sm+ only (absolute) */}
            {WHY.values.map((v, i) => {
              const Icon = v.icon;
              const brand = i % 2 === 0;
              const pos = [
                "sm:-left-4 sm:top-6",
                "sm:-right-4 sm:top-6",
                "sm:-left-4 sm:bottom-6",
                "sm:-right-4 sm:bottom-6",
              ][i];
              return (
                <div
                  key={v.label}
                  className={
                    "why-chip absolute z-10 hidden items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-xl sm:flex " +
                    pos
                  }
                >
                  <span
                    className={
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border " +
                      (brand
                        ? "border-brand-200 bg-brand-50 text-brand-600"
                        : "border-steel-200 bg-steel-50 text-steel-600")
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="whitespace-nowrap font-display text-xs font-bold text-ink sm:text-sm">
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile: the four values as a static 2×2 grid below the mark */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
            {WHY.values.map((v, i) => {
              const Icon = v.icon;
              const brand = i % 2 === 0;
              return (
                <div
                  key={v.label}
                  className="why-chip flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-sm"
                >
                  <span
                    className={
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border " +
                      (brand
                        ? "border-brand-200 bg-brand-50 text-brand-600"
                        : "border-steel-200 bg-steel-50 text-steel-600")
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs font-bold leading-snug text-ink">
                    {v.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
