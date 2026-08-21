import React, { useLayoutEffect, useRef } from "react";
import { Check } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { CAPABILITY_PILLARS, CAPABILITIES_SUBTITLE, SECTION_BG } from "../data/content.jsx";

/**
 * Hizmet Yapısı — the integrated-media pillar sits full-width on top in
 * brand orange (rev. slide 11); the other three follow beneath.
 */
const PillarCard = ({ pillar }) => {
  const Icon = pillar.icon;
  const featured = pillar.featured;

  if (featured) {
    return (
      <div
        className={
          "cap-card group relative overflow-hidden rounded-[2rem] border border-brand-400/40 bg-gradient-to-br from-brand-500 to-brand-600 p-8 text-white shadow-xl shadow-brand-500/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-10 " +
          pillar.span
        }
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl" />
        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-sm backdrop-blur-sm">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/85">{pillar.lead}</p>
            </div>
            <ul className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        "cap-card group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-2xl " +
        pillar.span
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-steel-300/40 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />
      <div className="relative flex h-full flex-col">
        <span className="inline-flex h-13 h-12 w-12 items-center justify-center rounded-xl border border-steel-200 bg-steel-50 text-steel-600 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink sm:text-2xl">{pillar.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-body">{pillar.lead}</p>
        <ul className="mt-6 flex-1 space-y-2.5">
          {pillar.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-sm ring-1 ring-slate-200">
                <Check className="h-3 w-3" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Capabilities = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cap-heading > *",
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
        ".cap-card",
        { y: 48, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cap-grid", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hizmet-yapisi"
      ref={sectionRef}
      data-bg={SECTION_BG.capabilities}
      className="relative px-4 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="cap-heading mx-auto max-w-3xl text-center">
          <SectionBadge>Hizmet Yapısı</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            360° Hizmet Yapımız
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{CAPABILITIES_SUBTITLE}</p>
        </div>

        <div className="cap-grid mt-12 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {CAPABILITY_PILLARS.map((p) => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
