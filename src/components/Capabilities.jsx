import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, useReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge } from "./ui.jsx";
import { CAPABILITIES, SECTION_BG } from "../data/content.jsx";

const CapCard = ({ capability, className = "" }) => {
  const Icon = capability.icon;
  const isTeal = capability.accent === "teal";
  return (
    <GlassCard className={"group relative overflow-hidden p-8 sm:p-10 " + className}>
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
          (isTeal ? "bg-steel-300/40" : "bg-brand-300/40")
        }
      />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div
            className={
              "inline-flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 " +
              (isTeal
                ? "border-steel-200 bg-steel-50 text-steel-500"
                : "border-brand-200 bg-brand-50 text-brand-500")
            }
          >
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <span
            className="select-none font-display text-5xl font-bold text-ink/[0.06]"
            aria-hidden="true"
          >
            {capability.step}
          </span>
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
          {capability.title}
        </h3>
        <p className="mt-4 flex-1 text-base leading-relaxed text-body sm:text-lg">
          {capability.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {capability.tags.map((tag) => (
            <span
              key={tag}
              className={
                "rounded-full border px-3 py-1 text-xs font-semibold " +
                (isTeal
                  ? "border-steel-200 bg-steel-50/80 text-steel-600"
                  : "border-brand-200 bg-brand-50/80 text-brand-600")
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

/** Pinned card-deck scene with live step counter (desktop). */
const Capabilities = () => {
  const sectionRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const mm = gsap.matchMedia(sectionRef);

    /* Desktop: pinned card-deck storytelling scene */
    mm.add("(min-width: 1024px)", () => {
      const panels = gsap.utils.toArray(".cap-panel");
      const total = panels.length;

      gsap.set(panels, {
        yPercent: (i) => (i === 0 ? 0 : 118),
        rotate: (i) => (i === 0 ? 0 : 5),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=" + total * 85 + "%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(total - 1, Math.floor(self.progress * total));
            if (counterRef.current) {
              counterRef.current.textContent = String(idx + 1).padStart(2, "0");
            }
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
        defaults: { ease: "power2.inOut" },
      });

      panels.forEach((panel, i) => {
        if (i === 0) return;
        tl.to(panels[i - 1], { scale: 0.92, opacity: 0.45, yPercent: -4 }, `step-${i}`)
          .to(panel, { yPercent: 0, rotate: 0 }, `step-${i}`);
      });
      tl.to({}, { duration: 0.25 });
    });

    /* All viewports: heading intro */
    mm.add("(min-width: 0px)", () => {
      gsap.from(".cap-heading > *", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    });

    return () => mm.revert();
  }, []);

  const usePinnedLayout = !reduced;

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      data-bg={SECTION_BG.capabilities}
      className="relative"
    >
      {/* Desktop pinned scene */}
      {usePinnedLayout && (
        <div className="hidden h-screen items-center lg:flex">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-16 px-4">
            {/* Left — narrative */}
            <div className="cap-heading">
              <SectionBadge tone="teal">Yeteneklerimiz</SectionBadge>
              <h2 className="mt-6 font-display text-5xl font-bold tracking-tight text-ink">
                360° Hizmet Yapımız
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
                Stratejiden satın almaya, kreatiften ölçümlemeye — medyanın her
                katmanını tek ekipte, tek hedefte birleştiriyoruz. Kaydırdıkça
                her hizmet sahneye çıkıyor.
              </p>

              <div className="mt-12 flex items-end gap-3">
                <span
                  ref={counterRef}
                  className="font-display text-7xl font-bold leading-none tracking-tight text-brand-500"
                >
                  01
                </span>
                <span className="pb-1 font-display text-2xl font-bold text-slate-300">
                  / {String(CAPABILITIES.length).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-slate-200">
                <div
                  ref={progressRef}
                  className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-steel-500"
                />
              </div>
            </div>

            {/* Right — card deck */}
            <div className="relative h-[30rem]">
              {CAPABILITIES.map((capability) => (
                <CapCard
                  key={capability.id}
                  capability={capability}
                  className="cap-panel absolute inset-0 will-change-transform"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile / reduced-motion: simple vertical flow */}
      <div className={(usePinnedLayout ? "lg:hidden " : "") + "px-4 py-28"}>
        <div className="cap-heading mx-auto max-w-2xl text-center">
          <SectionBadge tone="teal">Yeteneklerimiz</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            360° Hizmet Yapımız
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Stratejiden satın almaya, kreatiften ölçümlemeye — medyanın her
            katmanını tek ekipte, tek hedefte birleştiriyoruz.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6">
          {CAPABILITIES.map((capability) => (
            <CapCard key={capability.id} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
