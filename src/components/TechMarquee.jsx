import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge, SmartImage } from "./ui.jsx";
import {
  ACCREDITATIONS,
  TECH_CATEGORIES,
  TECH_SECTION,
  SECTION_BG,
} from "../data/content.jsx";

const LogoChip = ({ item, tall }) => (
  <div
    className={
      "flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300/70 hover:shadow-lg " +
      (tall ? "h-24 w-40 sm:w-44" : "h-16")
    }
    title={item.name}
  >
    <SmartImage
      src={item.logo}
      alt={item.name}
      className={(tall ? "max-h-14" : "max-h-9") + " w-auto max-w-full object-contain"}
      fallback={
        <span className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-slate-600">
          {item.name}
        </span>
      }
    />
  </div>
);

/** Sektörel Temsiliyet & Teknoloji Altyapımız — logos, categorised. */
const TechMarquee = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-heading > *",
        { y: 30, opacity: 0 },
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
        ".acc-chip",
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: ".acc-row", start: "top 88%" },
        }
      );
      gsap.fromTo(
        ".tech-cat",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: ".tech-cats", start: "top 86%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="temsiliyet-teknoloji"
      ref={sectionRef}
      data-bg={SECTION_BG.tech}
      className="relative px-4 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="tech-heading mx-auto max-w-3xl text-center">
          <SectionBadge tone="steel">Sektörel Temsiliyet &amp; Teknoloji</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {TECH_SECTION.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{TECH_SECTION.subtitle}</p>
        </div>

        {/* Sektörel Temsiliyetlerimiz */}
        <div className="acc-row mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {TECH_SECTION.accreditationsLabel}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {ACCREDITATIONS.map((a) => (
              <div key={a.name} className="acc-chip">
                <LogoChip item={a} tall />
              </div>
            ))}
          </div>
        </div>

        {/* Kullandığımız Teknolojiler & Veri Araçları — categorised */}
        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            {TECH_SECTION.techLabel}
          </p>
          <div className="tech-cats mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {TECH_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="tech-cat flex flex-col rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-xl"
              >
                <h3 className="font-display text-sm font-bold leading-snug text-ink">
                  {cat.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {cat.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex h-11 items-center justify-start rounded-xl bg-slate-50/80 px-3 ring-1 ring-slate-200/70"
                      title={tool.name}
                    >
                      <SmartImage
                        src={tool.logo}
                        alt={tool.name}
                        className="h-8 w-auto max-w-full object-contain object-left"
                        fallback={
                          <span className="text-xs font-semibold text-slate-600">{tool.name}</span>
                        }
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
