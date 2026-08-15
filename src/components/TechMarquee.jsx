import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { SectionBadge, SmartImage } from "./ui.jsx";
import { ACCREDITATIONS, TECH_STACK, SECTION_BG } from "../data/content.jsx";

/** Logo chip with typographic fallback when the PNG isn't present yet. */
const LogoChip = ({ item, tone }) => (
  <div
    className={
      "flex h-16 shrink-0 items-center justify-center rounded-2xl border px-7 backdrop-blur-xl transition-colors duration-300 " +
      (tone === "steel"
        ? "border-steel-200/80 bg-white/70 hover:border-steel-400/60"
        : "border-slate-200/80 bg-white/70 hover:border-brand-400/60")
    }
    title={item.name}
  >
    <SmartImage
      src={item.logo}
      alt={item.name}
      className="h-8 w-auto max-w-[9rem] object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      fallback={
        <span
          className={
            "whitespace-nowrap font-display text-base font-bold tracking-tight " +
            (tone === "steel" ? "text-steel-600" : "text-slate-700")
          }
        >
          {item.name}
        </span>
      }
    />
  </div>
);

const Row = ({ items, tone, className, reverse }) => {
  const doubled = [...items, ...items];
  return (
    <div className={"marquee-row flex w-max items-center gap-4 will-change-transform " + className} data-reverse={reverse ? "1" : "0"}>
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0 items-center gap-4 pr-4">
          {doubled.slice(half * items.length, half * items.length + items.length).map((it, i) => (
            <LogoChip key={half + "-" + it.name + i} item={it} tone={tone} />
          ))}
        </div>
      ))}
    </div>
  );
};

/** Akreditasyonlar & Teknoloji Yığını — two infinite marquee bands. */
const TechMarquee = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      const tweens = gsap.utils.toArray(".marquee-row").map((row) => {
        const rev = row.dataset.reverse === "1";
        return gsap.fromTo(
          row,
          { xPercent: rev ? -50 : 0 },
          { xPercent: rev ? 0 : -50, ease: "none", duration: 38, repeat: -1 }
        );
      });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const ts = self.direction === -1 ? -1 : 1;
          tweens.forEach((t) => gsap.to(t, { timeScale: ts, duration: 0.4, overwrite: "auto" }));
        },
      });
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="teknolojiler"
      ref={sectionRef}
      data-bg={SECTION_BG.tech}
      className="relative overflow-hidden py-24"
    >
      <div className="tech-heading mx-auto max-w-2xl px-4 text-center">
        <SectionBadge tone="steel">Akreditasyonlar &amp; Teknoloji</SectionBadge>
        <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Global &amp; yerel ekosistemin içinde.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-body">
          Ölçümleme kurumlarından DSP ve veri araçlarına — sektörün standart
          belirleyen platformlarıyla çalışıyoruz.
        </p>
      </div>

      <div className="relative mt-14 space-y-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

        <p className="px-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
          Temsiliyetler &amp; Ölçümleme
        </p>
        <Row items={ACCREDITATIONS} tone="steel" />

        <p className="pt-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
          Teknolojiler &amp; DSP / Veri Araçları
        </p>
        <Row items={TECH_STACK} tone="brand" reverse />
      </div>
    </section>
  );
};

export default TechMarquee;
