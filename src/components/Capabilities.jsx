import React, { useLayoutEffect, useRef } from "react";
import { Check } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { CAPABILITY_PILLARS, SECTION_BG } from "../data/content.jsx";

const ACCENT = {
  brand: {
    icon: "border-brand-200 bg-brand-50 text-brand-600",
    glow: "bg-brand-300/40",
    check: "text-brand-500",
    chip: "border-brand-200 bg-brand-50/80 text-brand-700",
  },
  steel: {
    icon: "border-steel-200 bg-steel-50 text-steel-600",
    glow: "bg-steel-300/40",
    check: "text-steel-500",
    chip: "border-steel-200 bg-steel-50/80 text-steel-600",
  },
};

const PillarCard = ({ pillar }) => {
  const Icon = pillar.icon;
  const a = ACCENT[pillar.accent] || ACCENT.brand;
  return (
    <div
      className={
        "cap-card group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-2xl sm:p-10 " +
        pillar.span
      }
    >
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
          a.glow
        }
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span
            className={
              "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 " +
              a.icon
            }
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
          </span>
          {pillar.featured && (
            <span className={"rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider " + a.chip}>
              Core
            </span>
          )}
        </div>
        <h3
          className={
            "mt-6 font-display font-bold text-ink " +
            (pillar.featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")
          }
        >
          {pillar.title}
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-body">{pillar.lead}</p>
        <ul
          className={
            "mt-7 grid gap-x-8 gap-y-3 " + (pillar.featured ? "sm:grid-cols-2" : "grid-cols-1")
          }
        >
          {pillar.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
              <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 " + a.check}>
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

/** 360° Hizmet Yapımız — 4-pillar bento grid. */
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
      id="yetkinlikler"
      ref={sectionRef}
      data-bg={SECTION_BG.capabilities}
      className="relative px-4 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="cap-heading mx-auto max-w-2xl text-center">
          <SectionBadge>Yetkinlikler</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            360° Hizmet Yapımız
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Geleneksel medyadan performansa, veriden özel projelere — dört sütun,
            tek strateji.
          </p>
        </div>

        <div className="cap-grid mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {CAPABILITY_PILLARS.map((p) => (
            <PillarCard key={p.id} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
