import React, { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./lib/motion";
import { SECTION_BG } from "./data/content.jsx";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import WhyUs from "./components/WhyUs.jsx";
import SparkleWay from "./components/SparkleWay.jsx";
import Capabilities from "./components/Capabilities.jsx";
import TechMarquee from "./components/TechMarquee.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

/**
 * Root — wires Lenis smooth scrolling into GSAP's ticker and morphs the
 * page background tint as each section takes the stage.
 */
const App = () => {
  const pageRef = useRef(null);
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray("[data-bg]").forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top 55%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive && pageRef.current) {
              gsap.to(pageRef.current, {
                backgroundColor: sec.dataset.bg,
                duration: 0.9,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          },
        });
      });
    }, pageRef);
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      window.clearTimeout(id);
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;
    const onClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      if (lenisRef.current) lenisRef.current.scrollTo(target, { offset: -96, duration: 1.4 });
      else target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    root.addEventListener("click", onClick);
    return () => root.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={pageRef}
      style={{ backgroundColor: SECTION_BG.hero }}
      className="min-h-screen font-sans text-ink antialiased"
    >
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Capabilities />
        <SparkleWay />
        <TechMarquee />
        <CaseStudies />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
