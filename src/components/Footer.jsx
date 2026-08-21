import React, { useState } from "react";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";
import { Logo, LinkedInIcon } from "./ui.jsx";
import YocaSignature from "./branding/YocaSignature.jsx";
import LegalModal from "./LegalModal.jsx";
import { NAV_LINKS, CAPABILITY_PILLARS, COMPANY } from "../data/content.jsx";

const LEGAL_LINKS = [
  { id: "gizlilik", label: "Gizlilik Politikası" },
  { id: "kvkk", label: "KVKK Aydınlatma Metni" },
  { id: "cerez", label: "Çerez Politikası" },
];

/** Rich footer on dark ink — white logo variant. Legal links open modals. */
const Footer = () => {
  const [legalDoc, setLegalDoc] = useState(null);

  return (
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
              href={COMPANY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-400 hover:bg-brand-500/20 hover:text-white"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
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
                <a href="#hizmet-yapisi" className="text-sm text-slate-400 transition-colors hover:text-white">
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

      {/* Footer bottom bar — copyright left, legal centre, Yoca signature right */}
      <div className="footer-bottom mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sparkle Medya. Tüm hakları saklıdır.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
          {LEGAL_LINKS.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLegalDoc(l.id)}
              className="transition-colors hover:text-slate-300"
            >
              {l.label}
            </button>
          ))}
        </div>
        <YocaSignature source={COMPANY.web} theme="dark" className="footer-signature" />
      </div>
    </div>

    <LegalModal docId={legalDoc} onClose={() => setLegalDoc(null)} />
  </footer>
  );
};

export default Footer;
