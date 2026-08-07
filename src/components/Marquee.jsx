import React, { useLayoutEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { MARQUEE_ITEMS } from "../data/content.jsx";

/** Infinite kinetic type strip; reverses direction with scroll. */
const Marquee = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tween = gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 24,
        repeat: -1,
      });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.to(tween, {
            timeScale: self.direction === -1 ? -1 : 1,
            duration: 0.4,
            overwrite: "auto",
          });
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden border-y border-slate-200/70 bg-white/50 py-5 backdrop-blur-sm"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center will-change-transform">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-6 pr-6 font-display text-2xl font-bold tracking-tight text-ink/80 sm:text-3xl"
              >
                {item}
                <Sparkles
                  className={"h-5 w-5 " + (i % 2 === 0 ? "text-brand-500" : "text-steel-500")}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
