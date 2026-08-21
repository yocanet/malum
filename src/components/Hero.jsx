import React, { useLayoutEffect, useRef } from "react";
import { Sparkles, ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { SectionBadge } from "./ui.jsx";
import { SECTION_BG, LOGO, COMPANY } from "../data/content.jsx";
import { SmartImage } from "./ui.jsx";

/**
 * Hero — premium light-mode opening. Deliberately UNPINNED: the load-in
 * reveal plus a single light scrubbed drift keeps the intro cinematic
 * without competing with the Case Studies scroll choreography.
 */
const Hero = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      /* Floating gradient mesh — slow organic drift */
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
      gsap.to(".hero-ring", { rotate: 360, duration: 60, ease: "none", repeat: -1 });

      /* Load-in: headline lines rise out of overflow masks */
      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .fromTo(
          ".hero-line-inner",
          { yPercent: 120 },
          { yPercent: 0, duration: 1.1, stagger: 0.12 },
          0.15
        )
        .fromTo(
          ".hero-soft",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
          "-=0.7"
        );

      /* Gentle scroll-out drift — NO pin, fully reversible scrub. */
      gsap.to(".hero-content", {
        y: -70,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 35%",
          scrub: true,
        },
      });
      gsap.to(".hero-scroll-hint", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "12% top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      data-bg={SECTION_BG.hero}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-32"
    >
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-blob absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-brand-300/40 blur-3xl" />
        <div className="hero-blob absolute right-[5%] top-[12%] h-[24rem] w-[24rem] rounded-full bg-steel-200/50 blur-3xl" />
        <div className="hero-blob absolute bottom-[-8rem] left-[30%] h-[26rem] w-[26rem] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="hero-blob absolute bottom-[10%] right-[22%] h-[18rem] w-[18rem] rounded-full bg-steel-200/40 blur-3xl" />

        {/* Rotating conic accent ring */}
        <div
          className="hero-ring absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(241,95,44,0.32) 80deg, transparent 160deg, rgba(108,126,143,0.32) 250deg, transparent 330deg)",
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

        {/* Fine noise texture */}
        <div
          className="absolute inset-0 opacity-[0.5] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix values='0 0 0 0 0.06 0 0 0 0 0.09 0 0 0 0 0.16 0 0 0 0.025 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Brand mark watermark */}
        <SmartImage
          src={LOGO.mark}
          alt=""
          className="hero-watermark absolute -right-[6vw] top-[10vh] w-[42vw] max-w-[36rem] opacity-[0.06]"
          fallback={null}
        />
      </div>

      <div className="hero-content relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="hero-soft">
          <SectionBadge>{COMPANY.tagline}</SectionBadge>
        </div>

        <h1 className="mt-8 font-display text-[2.85rem] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-7xl lg:text-8xl">
          <span className="block overflow-hidden pb-1">
            <span className="hero-line-inner block will-change-transform">
              Medyanın{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-500 via-amber-400 to-steel-500 bg-clip-text text-transparent">
                  ışıltısı
                </span>
                <Sparkles
                  className="absolute -right-9 -top-4 hidden h-8 w-8 text-brand-500 sm:block"
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
          Markaların iletişim yatırımlarını strateji, planlama, satın alma ve
          ölçümleme odağında uçtan uca yönetiyoruz.
        </p>

        <div className="hero-soft mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#vakalar"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-2xl hover:shadow-brand-500/40 sm:w-auto"
          >
            Ödüllü Vakaları İncele
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#iletisim"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-8 py-4 text-sm font-semibold text-ink shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50/70 hover:text-brand-600 hover:shadow-lg hover:shadow-brand-500/10 sm:w-auto"
          >
            Bizimle İletişime Geçin
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Brand mark strip */}
        <div className="hero-soft mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {["Strateji", "Planlama", "Satın Alma", "Ölçümleme"].map((mark, i) => (
            <React.Fragment key={mark}>
              {i > 0 && <span className="h-1 w-1 rounded-full bg-brand-300" aria-hidden="true" />}
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
