import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge, SmartImage } from "./ui.jsx";
import { WHY, SECTION_BG, LOGO } from "../data/content.jsx";

/** Sparkle Kısaca — value proposition + 4 core value badges. */
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
        ".why-value",
        { y: 28, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-values", start: "top 85%" },
        }
      );
      /* Big brand mark drifts slowly with scroll */
      gsap.to(".why-mark", {
        y: -60,
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
      id="neden-sparkle"
      ref={sectionRef}
      data-bg={SECTION_BG.why}
      className="relative overflow-hidden px-4 py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="why-reveal">
            <SectionBadge>Sparkle Kısaca</SectionBadge>
          </div>
          <h2 className="why-reveal mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {WHY.title}
          </h2>
          <p className="why-reveal mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
            {WHY.description}
          </p>

          <div className="why-values mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY.values.map((v, i) => {
              const Icon = v.icon;
              const brand = i % 2 === 0;
              return (
                <GlassCard key={v.label} className="why-value flex items-center gap-4 rounded-2xl p-4">
                  <span
                    className={
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border " +
                      (brand
                        ? "border-brand-200 bg-brand-50 text-brand-600"
                        : "border-steel-200 bg-steel-50 text-steel-600")
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-base font-bold text-ink">{v.label}</span>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Visual — brand mark composition */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-steel-50 shadow-2xl shadow-slate-200/60" />
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand-300/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-12 -left-8 h-56 w-56 rounded-full bg-steel-300/30 blur-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <SmartImage
                src={LOGO.mark}
                alt="Sparkle Medya işareti"
                className="why-mark w-3/4 drop-shadow-xl"
                fallback={
                  <span className="font-display text-7xl font-bold text-brand-500">Sp</span>
                }
              />
            </div>
            {/* Floating stat chips */}
            <div className="absolute -left-4 top-10 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:-left-8">
              <p className="font-display text-2xl font-bold text-ink">
                360<span className="text-brand-500">°</span>
              </p>
              <p className="text-xs font-medium text-slate-500">Bütünsel yaklaşım</p>
            </div>
            <div className="absolute -right-4 bottom-12 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-xl sm:-right-8">
              <p className="font-display text-2xl font-bold text-ink">
                98<span className="text-brand-500">+</span>
              </p>
              <p className="text-xs font-medium text-slate-500">Yıl yönetici tecrübesi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
