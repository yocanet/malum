import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { STATS, CLIENT_MARKS, SECTION_BG } from "../data/content.jsx";

/** Animated counters + client wordmarks. */
const StatsBand = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".stat-value").forEach((el) => {
        const target = parseFloat(el.dataset.target || "0");
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      gsap.from(".stat-item", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      gsap.from(".client-mark", {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".client-marks", start: "top 90%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-bg={SECTION_BG.stats} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center lg:text-left">
              <p className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                <span aria-hidden="true">{stat.prefix}</span>
                <span className="stat-value" data-target={stat.value}>
                  {stat.value}
                </span>
                <span className="bg-gradient-to-r from-brand-500 to-steel-500 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-3 text-sm font-medium text-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client wordmarks */}
        <div className="client-marks mt-20 border-t border-slate-100 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Birlikte parladığımız markalar &amp; platformlar
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {CLIENT_MARKS.map((mark) => (
              <span
                key={mark}
                className="client-mark font-display text-xl font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-slate-500 sm:text-2xl"
              >
                {mark}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
