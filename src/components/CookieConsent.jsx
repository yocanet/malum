import React, { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import LegalModal from "./LegalModal.jsx";

const STORAGE_KEY = "sparkle-cookie-consent";

const readConsent = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const writeConsent = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* private mode — banner will reappear next visit */
  }
};

/**
 * CookieConsent — bottom-anchored consent bar. Shows until the visitor
 * accepts or rejects; the choice persists in localStorage. Links to the
 * Çerez Politikası modal.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      const id = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(id);
    }
    return undefined;
  }, []);

  const decide = (value) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        role="region"
        aria-label="Çerez bildirimi"
        className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:px-6 sm:pb-6"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <span
            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-500 sm:flex"
            aria-hidden="true"
          >
            <Cookie className="h-5 w-5" />
          </span>
          <p className="flex-1 text-sm leading-relaxed text-body">
            Sitemizde deneyiminizi iyileştirmek ve site trafiğini analiz etmek için
            çerezler kullanıyoruz. Ayrıntılar için{" "}
            <button
              type="button"
              onClick={() => setShowPolicy(true)}
              className="font-semibold text-brand-500 underline decoration-brand-300 underline-offset-2 transition-colors hover:text-brand-600"
            >
              Çerez Politikası
            </button>
            'nı inceleyebilirsiniz.
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-ink"
            >
              Reddet
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-xl hover:shadow-brand-500/40"
            >
              Kabul Et
            </button>
          </div>
        </div>
      </div>

      {showPolicy && <LegalModal docId="cerez" onClose={() => setShowPolicy(false)} />}
    </>
  );
};

export default CookieConsent;
