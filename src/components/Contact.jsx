import React, { useLayoutEffect, useRef, useState } from "react";
import { Mail, Users, Send, CheckCircle2 } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge } from "./ui.jsx";
import { SECTION_BG } from "../data/content.jsx";

const INITIAL_FORM = { name: "", email: "", message: "" };

/** Lead form + contact details. */
const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* Wire this to your CRM / API endpoint in production. */
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-ink " +
    "placeholder:text-slate-400 shadow-sm transition-all duration-300 " +
    "focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10";

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-bg={SECTION_BG.contact}
      className="relative overflow-hidden px-4 py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-steel-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Copy column */}
        <div>
          <div className="contact-reveal">
            <SectionBadge>İletişim</SectionBadge>
          </div>
          <h2 className="contact-reveal mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Markanızı{" "}
            <span className="bg-gradient-to-r from-brand-500 to-cyan-500 bg-clip-text text-transparent">
              parlatalım
            </span>
            .
          </h2>
          <p className="contact-reveal mt-6 max-w-md text-lg leading-relaxed text-body">
            Hedeflerinizi paylaşın; 24 saat içinde size özel bir medya
            değerlendirmesiyle dönüş yapalım.
          </p>

          <div className="contact-reveal mt-10 space-y-4">
            <a
              href="mailto:hello@sparklemedya.com"
              className="group flex items-center gap-4 text-slate-600 transition-colors hover:text-ink"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-colors group-hover:border-brand-300 group-hover:bg-brand-50">
                <Mail className="h-5 w-5 text-brand-500" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">hello@sparklemedya.com</span>
            </a>
            <div className="flex items-center gap-4 text-slate-600">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                <Users className="h-5 w-5 text-steel-500" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">İstanbul merkezli, global çalışır.</span>
            </div>
          </div>
        </div>

        {/* Form column */}
        <GlassCard className="contact-reveal p-8 sm:p-10">
          {submitted ? (
            <div
              className="flex min-h-[22rem] flex-col items-center justify-center text-center"
              role="status"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-steel-50 text-steel-500">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">Mesajınız alındı!</h3>
              <p className="mt-3 max-w-xs text-body">
                Ekibimiz en kısa sürede sizinle iletişime geçecek.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm font-semibold text-brand-500 transition-colors hover:text-brand-600"
              >
                Yeni mesaj gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    E-posta
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ornek@sirket.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Projenizden ve hedeflerinizden bahsedin…"
                    className={inputClasses + " resize-none"}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-500/35 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
              >
                Gönder
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>

              <p className="mt-4 text-center text-xs text-slate-400">
                Bilgileriniz gizli tutulur; asla üçüncü taraflarla paylaşılmaz.
              </p>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  );
};

export default Contact;
