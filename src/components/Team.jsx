import React, { useLayoutEffect, useRef } from "react";
import { Trophy } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge, LinkedInIcon } from "./ui.jsx";
import { TEAM, SECTION_BG } from "../data/content.jsx";

const TeamCard = ({ member }) => {
  const isTeal = member.accent === "teal";
  return (
    <GlassCard className="team-card group relative overflow-hidden p-8 text-center hover:-translate-y-1.5">
      <div
        aria-hidden="true"
        className={
          "pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 " +
          (isTeal ? "bg-steel-300/50" : "bg-brand-300/50")
        }
      />
      <div className="relative">
        {/* Monogram avatar with gradient ring */}
        <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand-500 via-amber-400 to-steel-400 p-[3px] transition-transform duration-500 group-hover:scale-105">
          <div
            className={
              "flex h-full w-full items-center justify-center rounded-full font-display text-2xl font-bold " +
              (isTeal
                ? "bg-gradient-to-br from-steel-50 to-white text-steel-500"
                : "bg-gradient-to-br from-brand-50 to-white text-brand-500")
            }
            aria-hidden="true"
          >
            {member.initials}
          </div>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold text-ink">{member.name}</h3>
        <p
          className={
            "mt-1.5 text-sm font-semibold " + (isTeal ? "text-steel-500" : "text-brand-500")
          }
        >
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-body">{member.bio}</p>

        <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-600">
          <Trophy className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
          {member.experience}
        </span>

        <div className="mt-6 flex justify-center border-t border-slate-100 pt-5">
          <a
            href="#contact"
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

/** Leadership — soft shadow reveals + gentle parallax drift. */
const Team = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(".team-heading > *", {
        y: 36,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.utils.toArray(".team-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, boxShadow: "0 0 0 rgba(15,23,42,0)" },
          {
            y: 0,
            opacity: 1,
            boxShadow: "0 24px 48px -20px rgba(15,23,42,0.16)",
            duration: 1,
            delay: i * 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: ".team-grid", start: "top 82%" },
            clearProps: "boxShadow",
          }
        );
      });

      gsap.utils.toArray(".team-col").forEach((col, i) => {
        gsap.to(col, {
          y: i % 2 === 0 ? 28 : -28,
          ease: "none",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={sectionRef} data-bg={SECTION_BG.team} className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="team-heading mx-auto max-w-2xl text-center">
          <SectionBadge tone="teal">Liderlik</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Tecrübenin ışıltısı.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Toplam 76 yılı aşan medya tecrübesi; her kampanyada aynı masada.
          </p>
        </div>

        <div className="team-grid mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div key={member.name} className="team-col">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
