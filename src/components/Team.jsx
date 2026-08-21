import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BookOpen, X } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge, LinkedInIcon, SmartImage } from "./ui.jsx";
import { TEAM, TEAM_SUBTITLE, SECTION_BG } from "../data/content.jsx";

/**
 * Yönetim Kadrosu — four uniform brand-orange cards side by side (no
 * zig-zag), a "Biyografi" action that opens the member's biography in a
 * modal, and real LinkedIn links (rev. slide 19).
 */

const TeamCard = ({ member, onBio }) => (
  <GlassCard className="team-card group relative flex h-full flex-col overflow-hidden p-5 hover:-translate-y-1.5 sm:p-6">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-300/50 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
    />
    <div className="relative flex h-full flex-col text-center">
      {/* Portrait with monogram fallback */}
      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-brand-50 via-white to-steel-50 ring-1 ring-slate-200/80">
        <SmartImage
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          fallback={
            <div
              className="flex h-full w-full items-center justify-center font-display text-5xl font-bold text-brand-500"
              aria-hidden="true"
            >
              {member.initials}
            </div>
          }
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-500 to-amber-400"
        />
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-ink sm:text-xl">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-500">{member.role}</p>

      {/* Experience */}
      <div className="mt-4 flex items-baseline justify-center gap-2" aria-label={`${member.years}+ yıl tecrübe`}>
        <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text font-display text-5xl font-bold leading-none tracking-tight text-transparent">
          {member.years}
          <span className="text-3xl">+</span>
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-xs font-bold uppercase tracking-wider text-ink">yıl</span>
          <span className="text-[11px] font-medium text-slate-400">tecrübe</span>
        </span>
      </div>

      {/* Actions: Biyografi + LinkedIn */}
      <div className="mt-5 flex items-center justify-center gap-2.5 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={() => onBio(member)}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold text-brand-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 hover:text-white hover:shadow-lg hover:shadow-brand-500/30"
        >
          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
          Biyografi
        </button>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} — LinkedIn`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500"
        >
          <LinkedInIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  </GlassCard>
);

/* Biography modal */
const BioModal = ({ member, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!member) return null;
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} biyografisi`}
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl">
        <div className="flex items-start gap-5 p-6 sm:p-8">
          <div className="hidden h-28 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200 sm:block">
            <SmartImage
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover object-top"
              fallback={
                <div className="flex h-full w-full items-center justify-center bg-brand-50 font-display text-2xl font-bold text-brand-500">
                  {member.initials}
                </div>
              }
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-2xl font-bold text-ink">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-brand-500">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn profili
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-ink"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const Team = () => {
  const sectionRef = useRef(null);
  const [bioMember, setBioMember] = useState(null);

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="yonetim-kadrosu"
      ref={sectionRef}
      data-bg={SECTION_BG.team}
      className="relative px-4 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="team-heading mx-auto max-w-2xl text-center">
          <SectionBadge>Yönetim Kadrosu</SectionBadge>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Tecrübenin ışıltısı.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">{TEAM_SUBTITLE}</p>
        </div>

        {/* Equal side-by-side cards — no zig-zag offsets */}
        <div className="team-grid mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <TeamCard key={m.name} member={m} onBio={setBioMember} />
          ))}
        </div>
      </div>

      {bioMember && <BioModal member={bioMember} onClose={() => setBioMember(null)} />}
    </section>
  );
};

export default Team;
