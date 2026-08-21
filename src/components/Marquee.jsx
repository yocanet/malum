import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { SmartImage } from "./ui.jsx";
import { BRANDS } from "../data/content.jsx";

/** Brand-logo marquee under the hero; reverses with scroll direction. */
const Marquee = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      const tween = gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 30,
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

  const items = [...BRANDS, ...BRANDS];

  return (
    <div
      ref={wrapRef}
      className="relative overflow-hidden border-y border-slate-200/70 bg-white/60 py-5 backdrop-blur-sm"
    >
      <p className="sr-only">Birlikte çalıştığımız markalar</p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent sm:w-36" />
      <div className="marquee-track flex w-max items-center will-change-transform">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.slice(half * BRANDS.length, half * BRANDS.length + BRANDS.length).map((b, i) => (
              <span
                key={half + b.name + i}
                className="mx-7 flex h-12 shrink-0 items-center sm:mx-10"
                title={b.name}
              >
                <SmartImage
                  src={b.logo}
                  alt={b.name}
                  className="h-9 w-auto max-w-[10rem] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-10"
                  fallback={
                    <span className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-slate-400">
                      {b.name}
                    </span>
                  }
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
