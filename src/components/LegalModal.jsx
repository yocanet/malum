import React, { useEffect } from "react";
import { X, ScrollText } from "lucide-react";
import { LEGAL_DOCS } from "../data/legal.jsx";

/**
 * LegalModal — displays a legal document (Gizlilik Politikası, KVKK
 * Aydınlatma Metni, Çerez Politikası) in a scrollable dialog. Mirrors the
 * biography modal pattern: ESC / overlay click to close, body scroll lock.
 */
const LegalModal = ({ docId, onClose }) => {
  const doc = docId ? LEGAL_DOCS[docId] : null;

  useEffect(() => {
    if (!doc) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={doc.title}
    >
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-6 sm:px-8">
          <div className="flex items-center gap-4">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-500 sm:flex">
              <ScrollText className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">{doc.title}</h3>
              <p className="mt-0.5 text-xs text-slate-400">Son güncelleme: {doc.updated}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable body */}
        <div data-lenis-prevent className="overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
          {doc.sections.map((section, i) => (
            <div key={i} className={i === 0 ? "" : "mt-5"}>
              {section.heading && (
                <h4 className="mb-2 font-display text-base font-bold text-ink">{section.heading}</h4>
              )}
              {section.body?.map((p, j) => (
                <p key={j} className="mt-2 text-sm leading-relaxed text-body first:mt-0">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-2.5 space-y-1.5">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-body">
                      <span
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
