import React, { useLayoutEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Globe, Send, CheckCircle2, Check } from "lucide-react";
import { gsap, prefersReducedMotion } from "../lib/motion";
import { GlassCard, SectionBadge } from "./ui.jsx";
import { COMPANY, SERVICE_OPTIONS, SECTION_BG } from "../data/content.jsx";

const INITIAL_FORM = { name: "", email: "", company: "", services: [], message: "" };

/** İletişim — lead form with multi-select service tabs + company info. */
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
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };
  const toggleService = (svc) =>
    setForm((p) => ({
      ...p,
      services: p.services.includes(svc)
        ? p.services.filter((s) => s !== svc)
        : [...p.services, svc],
    }));
  const handleSubmit = (e) => {
    e.preventDefault();
    /* Wire to CRM / API endpoint in production. */
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-ink " +
    "placeholder:text-slate-400 shadow-sm transition-all duration-300 " +
    "focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-500/10";

  const info = [
    { icon: MapPin, label: "Adres", value: COMPANY.address, tone: "brand" },
    { icon: Phone, label: "Telefon", value: COMPANY.phone, href: COMPANY.phoneHref, tone: "steel" },
    { icon: Globe, label: "Web", value: COMPANY.web, href: COMPANY.webHref, tone: "brand" },
    { icon: Mail, label: "E-posta", value: COMPANY.email, href: `mailto:${COMPANY.email}`, tone: "steel" },
  ];

  return (
    <section
      id="iletisim"
      ref={sectionRef}
      data-bg={SECTION_BG.contact}
      className="relative overflow-hidden px-4 py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-steel-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-12">
        {/* Copy + company info */}
        <div className="lg:col-span-5">
          <div className="contact-reveal">
            <SectionBadge>İletişim</SectionBadge>
          </div>
          <h2 className="contact-reveal mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Bir sonraki adımı{" "}
            <span className="bg-gradient-to-r from-brand-500 to-amber-500 bg-clip-text text-transparent">
              birlikte
            </span>{" "}
            belirleyelim.
          </h2>
          <p className="contact-reveal mt-6 max-w-md text-lg leading-relaxed text-body">
            Hedeflerinizi paylaşın; 24 saat içinde size özel bir medya
            değerlendirmesiyle dönüş yapalım.
          </p>

          <ul className="contact-reveal mt-10 space-y-4">
            {info.map((it) => {
              const Icon = it.icon;
              const brand = it.tone === "brand";
              const inner = (
                <>
                  <span
                    className={
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm " +
                      (brand ? "border-brand-200 text-brand-500" : "border-steel-200 text-steel-500")
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {it.label}
                    </span>
                    <span className="block text-sm font-medium text-slate-700">{it.value}</span>
                  </span>
                </>
              );
              return (
                <li key={it.label}>
                  {it.href ? (
                    <a href={it.href} className="group flex items-start gap-4 transition-colors hover:text-ink">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form */}
        <GlassCard className="contact-reveal p-7 sm:p-10 lg:col-span-7">
          {submitted ? (
            <div className="flex min-h-[24rem] flex-col items-center justify-center text-center" role="status">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">Mesajınız alındı!</h3>
              <p className="mt-3 max-w-xs text-body">Ekibimiz en kısa sürede sizinle iletişime geçecek.</p>
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
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-2 block text-sm font-semibold text-slate-700">
                    Ad Soyad
                  </label>
                  <input id="c-name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Adınız ve soyadınız" className={input} />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-2 block text-sm font-semibold text-slate-700">
                    E-posta
                  </label>
                  <input id="c-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="ornek@sirket.com" className={input} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-company" className="mb-2 block text-sm font-semibold text-slate-700">
                    Marka / Şirket
                  </label>
                  <input id="c-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} placeholder="Markanız veya şirketiniz" className={input} />
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="mb-2 block text-sm font-semibold text-slate-700">
                    Hizmet Türü <span className="font-normal text-slate-400">(birden fazla seçebilirsiniz)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((svc) => {
                      const on = form.services.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggleService(svc)}
                          className={
                            "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 " +
                            (on
                              ? "border-brand-500 bg-brand-500 text-white shadow-md shadow-brand-500/30"
                              : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-600")
                          }
                        >
                          {on && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Mesajınız
                  </label>
                  <textarea id="c-message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Projenizden ve hedeflerinizden bahsedin…" className={input + " resize-none"} />
                </div>
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 via-brand-400 to-amber-400 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-brand-500/35 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
              >
                Gönder
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" aria-hidden="true" />
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
