import React from "react";
import { Sparkles, Mail, MapPin } from "lucide-react";
import { LinkedInIcon } from "./ui.jsx";
import { NAV_LINKS, CAPABILITIES } from "../data/content.jsx";

/** Rich four-column footer. */
const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/70 px-4 pb-10 pt-16 backdrop-blur-sm">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2" aria-label="Sparkle Medya">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-500 shadow-md shadow-brand-500/30">
              <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.22em] text-ink">
              SPARKLE <span className="text-brand-500">MEDYA</span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-body">
            Strateji, performans, veri ve yayıncılığı bütüncül ele alan medya
            planlama &amp; performans ajansı.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-500"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@sparklemedya.com"
              aria-label="E-posta"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all duration-300 hover:border-steel-300 hover:bg-steel-50 hover:text-steel-500"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <nav aria-label="Alt menü">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink">
            Menü
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-body transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink">
            Hizmetler
          </h3>
          <ul className="mt-5 space-y-3">
            {CAPABILITIES.map((cap) => (
              <li key={cap.id}>
                <a
                  href="#capabilities"
                  className="text-sm text-body transition-colors hover:text-ink"
                >
                  {cap.title}
                </a>
              </li>
            ))}
            <li>
              <a href="#case-studies" className="text-sm text-body transition-colors hover:text-ink">
                Vaka Analizleri
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink">
            İletişim
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-body">
            <li>
              <a
                href="mailto:hello@sparklemedya.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 text-brand-500" aria-hidden="true" />
                hello@sparklemedya.com
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-steel-500" aria-hidden="true" />
              İstanbul, Türkiye
            </li>
          </ul>
        </div>
      </div>

      {/* Legal strip */}
      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Sparkle Medya. Tüm hakları saklıdır.
        </p>
        <div className="flex gap-6 text-xs text-slate-400">
          <a href="#home" className="transition-colors hover:text-slate-600">
            Gizlilik Politikası
          </a>
          <a href="#home" className="transition-colors hover:text-slate-600">
            KVKK Aydınlatma Metni
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
