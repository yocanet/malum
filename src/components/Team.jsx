import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge, LinkedInIcon, SmartImage } from "./ui.jsx";
import { TEAM, SECTION_BG } from "../data/content.jsx";

const TeamCard = ({ member }) => {
  const brand = member.accent === "brand";
  return (
    <GlassCard className="team-card group relative flex h-full flex-col overflow-hidden p-7 text-center hover:-translate-y-1.5">
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
          (brand ? "bg-brand-300/50" : "bg-steel-300/50")
        }
      />
      <div className="relative flex h-full flex-col">
        {/* Portrait (public/images/team/…) with monogram fallback */}
        <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-brand-500 via-amber-400 to-steel-400 p-[3px] transition-transform duration-500 group-hover:scale-105">
          <div className="h-full w-full overflow-hidden rounded-full bg-white">
            <SmartImage
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover"
              fallback={
                <div
                  className={
                    "flex h-full w-full items-center justify-center font-display text-2xl font-bold " +
                    (brand
                      ? "bg-gradient-to-br from-brand-50 to-white text-brand-500"
                      : "bg-gradient-to-br from-steel-50 to-white text-steel-500")
                  }
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
              }
            />
          </div>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold text-ink">{member.name}</h3>
        <p className={"mt-1.5 text-sm font-semibold " + (brand ? "text-brand-500" : "text-steel-500")}>
          {member.role}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{member.bio}</p>

        {/* Experience — staged big */}
        <div className="mt-6 flex items-baseline justify-center gap-2" aria-label={`${member.years}+ yıl tecrübe`}>
          <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text font-display text-6xl font-bold leading-none tracking-tight text-transparent">
            {member.years}
            <span className="text-4xl">+</span>
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-bold uppercase tracking-wider text-ink">yıl</span>
            <span className="text-xs font-medium text-slate-400">tecrübe</span>
          </span>
        </div>

        <div className="mt-6 flex justify-center border-t border-slate-100 pt-5">
          <a
            href="#iletisim"
            aria-label={`${member.name} ile bağlantı kur`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </GlassCard>
  );
};

/** Ajans Yönetimi — 4 leaders. */
const Team = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-heading > *",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        }
      );
      gsap.fromTo(
        ".team-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".team-grid", start: "top 82%" },
        }
      );
      gsap.utils.toArray(".team-col").forEach((col, i) => {
        gsap.to(col, {
          y: i % 2 === 0 ? 24 : -24,
          ease: "none",
          scrollTrigger: { trigger: ".team-grid", start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ekip" ref={sectionRef} data-bg={SECTION_BG.team} className="relative px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="team-heading mx-auto max-w-2xl text-center">
          <SectionBadge tone="steel">Ajans Yönetimi</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Tecrübenin ışıltısı.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Toplam 98 yılı aşan medya tecrübesi; her kampanyada aynı masada.
          </p>
        </div>

        <div className="team-grid mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="team-col">
              <TeamCard member={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
