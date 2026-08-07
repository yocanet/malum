import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { MANIFESTO, SECTION_BG } from "../data/content.jsx";

/** Big statement; words light up one by one, scrubbed to scroll position. */
const Manifesto = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".manifesto-word",
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: ".manifesto-copy",
            start: "top 78%",
            end: "bottom 62%",
            scrub: 1,
          },
        }
      );

      gsap.from(".manifesto-badge", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-bg={SECTION_BG.manifesto} className="relative px-4 py-36">
      <div className="mx-auto max-w-4xl">
        <div className="manifesto-badge">
          <SectionBadge>Manifestomuz</SectionBadge>
        </div>
        <p
          className="manifesto-copy mt-10 font-display text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.3]"
          aria-label={MANIFESTO.map((w) => w.t).join(" ")}
        >
          {MANIFESTO.map((word, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={
                "manifesto-word mr-[0.32em] inline-block will-change-transform " +
                (word.gradient
                  ? "bg-gradient-to-r from-brand-500 via-amber-400 to-steel-500 bg-clip-text text-transparent"
                  : word.accent === "violet"
                  ? "text-brand-500"
                  : word.accent === "teal"
                  ? "text-steel-500"
                  : "")
              }
            >
              {word.t}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
