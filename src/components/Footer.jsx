import React from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Logo, LinkedInIcon } from "./ui.jsx";
import { NAV_LINKS, CAPABILITY_PILLARS, COMPANY } from "../data/content.jsx";

/** Rich footer on dark ink — white logo variant. */
const Footer = () => (
  <footer className="relative overflow-hidden bg-ink px-4 pb-10 pt-16 text-slate-300">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-steel-500/20 blur-3xl" />

    <div className="relative mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" aria-label="Sparkle Medya">
            <Logo variant="white" className="h-12 w-auto" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            Markaların iletişim yatırımlarını strateji, planlama, satın alma ve
            ölçümleme odağında uçtan uca yöneten medya stratejisi &amp; performans
            ajansı.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#iletisim"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              aria-label="E-posta"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Alt menü">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Menü</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Hizmetler</h3>
          <ul className="mt-5 space-y-3">
            {CAPABILITY_PILLARS.map((p) => (
              <li key={p.id}>
                <a href="#yetkinlikler" className="text-sm text-slate-400 transition-colors hover:text-white">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">İletişim</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={COMPANY.webHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                <Globe className="h-4 w-4 text-brand-400" aria-hidden="true" />
                {COMPANY.web}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sparkle Medya. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#home" className="transition-colors hover:text-slate-300">Gizlilik Politikası</a>
          <a href="#home" className="transition-colors hover:text-slate-300">KVKK Aydınlatma Metni</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
