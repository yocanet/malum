import React, { useLayoutEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { STATS, AWARDS, SECTION_BG } from "../data/content.jsx";

/**
 * StatsBand — six oversized animated metrics + premium award badges.
 *
 * Counter safety: the DOM initially renders the FINAL value (so no-JS,
 * reduced-motion and SSR all read correctly). On first enter, a plain
 * number object is tweened and written via textContent — `Number()` +
 * `isFinite` guard means NaN is impossible, and `once: true` means
 * scrolling back up never resets or breaks the display.
 */
const StatsBand = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".stat-value").forEach((el) => {
        const target = Number(el.dataset.target);
        if (!Number.isFinite(target)) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => {
            const state = { v: 0 };
            gsap.to(state, {
              v: target,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = String(Math.round(state.v));
              },
            });
          },
        });
      });

      gsap.fromTo(
        ".stat-item",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );

      gsap.fromTo(
        ".award-badge",
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.09,
          ease: "power2.out",
          scrollTrigger: { trigger: ".awards-row", start: "top 88%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-bg={SECTION_BG.stats} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="whitespace-nowrap font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <span className="text-ink" aria-hidden="true">
                  {stat.prefix}
                </span>
                <span className="stat-value text-ink" data-target={stat.value}>
                  {stat.value}
                </span>
                <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-3 text-sm font-medium text-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Premium award badges */}
        <div className="awards-row mt-20 border-t border-slate-100 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Ödüllü işler
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((award) => (
              <div
                key={award.name + award.detail}
                className="award-badge group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-xl hover:shadow-amber-200/40"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-200/50 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-md shadow-amber-500/30">
                    <Trophy className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-3 font-display text-lg font-bold text-ink">{award.name}</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
