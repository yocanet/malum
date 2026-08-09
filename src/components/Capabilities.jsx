import React, { useLayoutEffect, useRef } from "react";
import { Layers } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { BENTO_CAPABILITIES, TECH_ECOSYSTEM, SECTION_BG } from "../data/content.jsx";

const ACCENTS = {
  brand: {
    icon: "border-brand-200 bg-brand-50 text-brand-600",
    glow: "bg-brand-300/40",
    tag: "border-brand-200 bg-brand-50/80 text-brand-600",
  },
  steel: {
    icon: "border-steel-200 bg-steel-50 text-steel-600",
    glow: "bg-steel-300/40",
    tag: "border-steel-200 bg-steel-50/80 text-steel-600",
  },
  amber: {
    icon: "border-amber-200 bg-amber-50 text-amber-600",
    glow: "bg-amber-300/40",
    tag: "border-amber-200 bg-amber-50/80 text-amber-700",
  },
};

const BentoCard = ({ capability }) => {
  const Icon = capability.icon;
  const accent = ACCENTS[capability.accent] || ACCENTS.brand;

  return (
    <div
      className={
        "bento-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-7 shadow-xl shadow-slate-200/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-2xl " +
        capability.span +
        (capability.featured ? " sm:p-9" : "")
      }
    >
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
          accent.glow
        }
      />
      <div className="relative flex h-full flex-col">
        <div
          className={
            "inline-flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 " +
            accent.icon
          }
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <h3
          className={
            "mt-5 font-display font-bold text-ink " +
            (capability.featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl")
          }
        >
          {capability.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-body">
          {capability.description}
        </p>

        {capability.tags && (
          <div className="mt-6 flex flex-wrap gap-2">
            {capability.tags.map((tag) => (
              <span
                key={tag}
                className={"rounded-full border px-3 py-1 text-xs font-semibold " + accent.tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/** 360° services as a premium bento grid + technology ecosystem block. */
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
        ".bento-card",
        { y: 44, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".bento-grid", start: "top 85%" },
        }
      );

      gsap.fromTo(
        ".tech-chip",
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: { trigger: ".tech-card", start: "top 88%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      data-bg={SECTION_BG.capabilities}
      className="relative px-4 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="cap-heading mx-auto max-w-2xl text-center">
          <SectionBadge tone="teal">Yeteneklerimiz</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            360° Hizmet Yapımız
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Stratejiden satın almaya, kreatiften ölçümlemeye — medyanın her
            katmanını tek ekipte, tek hedefte birleştiriyoruz.
          </p>
        </div>

        <div className="bento-grid mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {BENTO_CAPABILITIES.map((capability) => (
            <BentoCard key={capability.id} capability={capability} />
          ))}

          {/* Technology ecosystem — its own strong bento block */}
          <div className="bento-card tech-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-ink to-slate-800 p-7 shadow-xl shadow-slate-200/50 sm:col-span-2 sm:p-9 lg:col-span-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-500/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-steel-400/25 blur-3xl"
            />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-brand-200 backdrop-blur-sm">
                <Layers className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                Teknoloji Ekosistemi
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-slate-300">
                Sertifikalı ekiplerle, sektörün standart belirleyen platformları
                üzerinde uçtan uca operasyon.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {TECH_ECOSYSTEM.map((tech) => (
                  <span
                    key={tech}
                    className="tech-chip rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-brand-300/60 hover:bg-brand-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
