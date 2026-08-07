import React, { useLayoutEffect, useRef } from "react";
import { Sparkles, ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { gsap, prefersReducedMotion, useReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { SECTION_BG, CLIENT_MARKS } from "../data/content.jsx";

/** Pinned hero scene: mask-reveal on load, lift-away dissolve on scroll-out. */
const Hero = () => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      /* Floating gradient mesh — slow organic drift in pastel tones */
      gsap.utils.toArray(".hero-blob").forEach((blob, i) => {
        gsap.to(blob, {
          x: () => gsap.utils.random(-70, 70),
          y: () => gsap.utils.random(-60, 60),
          scale: () => gsap.utils.random(0.9, 1.18),
          duration: gsap.utils.random(7, 11),
          delay: i * 0.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
        });
      });

      /* Slowly rotating conic ring behind the headline */
      gsap.to(".hero-ring", {
        rotate: 360,
        duration: 60,
        ease: "none",
        repeat: -1,
      });

      /* Load-in: headline lines rise out of overflow masks */
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-line-inner", { yPercent: 120, duration: 1.1, stagger: 0.12 }, 0.15)
        .from(
          ".hero-soft",
          { y: 28, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" },
          "-=0.7"
        );

      /* Scroll-out story: pin briefly; headline lifts away line by line. */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=85%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
          defaults: { ease: "none" },
        })
        .to(".hero-line-inner", { yPercent: -130, stagger: 0.08 }, 0)
        .to(".hero-soft", { y: -60, opacity: 0, stagger: 0.04 }, 0)
        .to(".hero-blob", { scale: 1.5, opacity: 0.35 }, 0)
        .to(".hero-scroll-hint", { opacity: 0 }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      data-bg={SECTION_BG.hero}
      className={
        "relative flex items-center justify-center overflow-hidden px-4 " +
        (reduced ? "min-h-screen pb-24 pt-36" : "h-screen")
      }
    >
      {/* Pastel gradient mesh background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-blob absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-brand-300/35 blur-3xl" />
        <div className="hero-blob absolute right-[5%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-steel-200/40 blur-3xl" />
        <div className="hero-blob absolute bottom-[-8rem] left-[30%] h-[26rem] w-[26rem] rounded-full bg-amber-200/35 blur-3xl" />
        <div className="hero-blob absolute bottom-[10%] right-[22%] h-[18rem] w-[18rem] rounded-full bg-steel-200/40 blur-3xl" />

        {/* Rotating conic accent ring */}
        <div
          className="hero-ring absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(241,95,44,0.35) 80deg, transparent 160deg, rgba(108,126,143,0.35) 250deg, transparent 330deg)",
            maskImage:
              "radial-gradient(circle, transparent 57%, black 59%, black 61%, transparent 63%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 57%, black 59%, black 61%, transparent 63%)",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="hero-soft">
          <SectionBadge>Medya Planlama &amp; Performans Ajansı</SectionBadge>
        </div>

        <h1 className="mt-8 font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block will-change-transform">
              Medyanın{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-500 via-amber-400 to-steel-500 bg-clip-text text-transparent">
                  ışıltısı
                </span>
                <Sparkles
                  className="absolute -right-7 -top-3 h-7 w-7 text-brand-500"
                  aria-hidden="true"
                />
              </span>
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span className="hero-line-inner block will-change-transform">elimizde.</span>
          </span>
        </h1>

        <p className="hero-soft mt-7 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
          Sparkle Medya; strateji, performans, veri optimizasyonu ve yayıncılığı
          bütüncül ele alarak markalar için yüksek görünürlük ve somut büyüme
          sağlar.
        </p>

        <div className="hero-soft mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-2xl"
          >
            Vakaları İncele
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-8 py-4 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:shadow-lg hover:shadow-brand-500/20"
          >
            İletişime Geç
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Trust strip */}
        <div className="hero-soft mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {CLIENT_MARKS.map((mark, i) => (
            <React.Fragment key={mark}>
              {i > 0 && (
                <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
              )}
              <span className="font-display">{mark}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll-hint absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Keşfet</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
