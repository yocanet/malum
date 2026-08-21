import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/motion";
import { Logo } from "./ui.jsx";
import { NAV_LINKS } from "../data/content.jsx";

/** Floating glass navbar — hides on scroll down, returns on scroll up. */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const showAnim = gsap
      .from(navRef.current, { yPercent: -160, paused: true, duration: 0.4, ease: "power2.out" })
      .progress(1);
    const st = ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1 || self.scroll() < 120) showAnim.play();
        else showAnim.reverse();
      },
    });
    return () => {
      st.kill();
      showAnim.kill();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        ref={navRef}
        aria-label="Ana menü"
        className={
          "relative flex w-full max-w-7xl items-center justify-between gap-4 rounded-2xl border px-5 py-3 " +
          "backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 " +
          (scrolled
            ? "border-slate-200/90 bg-white/85 shadow-lg shadow-slate-900/5"
            : "border-slate-200/50 bg-white/60 shadow-sm")
        }
      >
        <a href="#home" className="flex items-center" aria-label="Sparkle Medya — Anasayfa">
          <Logo variant="primary" className="h-11 w-auto sm:h-12" />
        </a>

        <ul className="hidden items-center gap-0 2xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium text-slate-600 transition-colors duration-300 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/40 2xl:inline-flex"
        >
          Bir Sonraki Adımı Belirleyelim
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 2xl:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {menuOpen && (
          <div className="absolute inset-x-0 top-full mt-2 px-1 2xl:hidden">
            <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-xl backdrop-blur-xl">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href="#iletisim"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-colors hover:bg-brand-400"
                  >
                    Bir Sonraki Adımı Belirleyelim
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
