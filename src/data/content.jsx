/**
 * All site copy and structured content in one place, so editing the site's
 * words never requires touching component code.
 *
 * Image convention: every visual asset resolves from /public/images/…
 * If a file is missing, components fall back to SVG/monogram/wordmark
 * automatically — drop the real files in and nothing else changes.
 */
import {
  Tv,
  Target,
  Database,
  Handshake,
  Eye,
  TrendingUp,
  Smartphone,
  MousePointerClick,
  Headphones,
  Clapperboard,
  Timer,
  Users,
  Layers,
  Compass,
  Lightbulb,
  Rocket,
  LineChart,
  Crosshair,
  MonitorPlay,
  RefreshCw,
  ShieldCheck,
  Trophy,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Neden Sparkle", href: "#neden-sparkle" },
  { label: "Yetkinlikler", href: "#yetkinlikler" },
  { label: "Süreç", href: "#surec" },
  { label: "Teknolojiler", href: "#teknolojiler" },
  { label: "Vakalar", href: "#vakalar" },
  { label: "Ekip", href: "#ekip" },
  { label: "İletişim", href: "#iletisim" },
];

export const COMPANY = {
  name: "Sparkle Medya",
  address: "Maslak Mah. Meydan Sok. Spring Giz Plaza No: 5 Kat: 17 Sarıyer / İSTANBUL",
  phone: "+90 212 232 22 00",
  phoneHref: "tel:+902122322200",
  web: "www.spmedya.com",
  webHref: "https://www.spmedya.com",
  email: "info@spmedya.com",
};

/* Logo asset paths (public/images/logo/…). */
export const LOGO = {
  primary: "/images/logo/sparkle-logo.png",
  white: "/images/logo/sparkle-logo-white.png",
  black: "/images/logo/sparkle-logo-black.png",
  icon: "/images/logo/sparkle-icon.png",
  mark: "/images/logo/sparkle-mark.png",
  markWhite: "/images/logo/sparkle-mark-white.png",
  appDark: "/images/logo/sparkle-icon-app-dark.png",
};

/* Page background tints, morphed as each section takes the stage. */
export const SECTION_BG = {
  hero: "#F8FAFC",
  why: "#FFFFFF",
  way: "#FEF3EE",
  capabilities: "#F8FAFC",
  tech: "#FFFFFF",
  cases: "#F3F6F8",
  team: "#F8FAFC",
  contact: "#FEF3EE",
};

/* ── 3. Sparkle Kısaca ─────────────────────────────────────────────── */
export const WHY = {
  title: "Medyanın tüm parçalarını tek strateji altında birleştiriyoruz.",
  description:
    "Hedef kitle ve kategori içgörüsünden medya stratejisine, planlama ve satın almadan optimizasyon ve ölçümlemeye kadar tüm süreci bütünsel olarak ele alıyoruz.",
  values: [
    { icon: Crosshair, label: "Doğru Hedefleme" },
    { icon: MonitorPlay, label: "Etkili Platform Seçimi" },
    { icon: RefreshCw, label: "Sürekli Optimizasyon" },
    { icon: ShieldCheck, label: "Şeffaflık & Sahiplenme" },
  ],
};

/* ── 4. The Sparkle Way ────────────────────────────────────────────── */
export const SPARKLE_WAY = [
  {
    step: "01",
    key: "INSIGHT",
    title: "İçgörü",
    description: "Markayı, hedef kitleyi, kategoriyi ve rekabeti anlamlandırırız.",
    icon: Lightbulb,
    accent: "brand",
  },
  {
    step: "02",
    key: "STRATEGY",
    title: "Strateji",
    description: "İş hedeflerini destekleyen medya kararlarına dönüştürürüz.",
    icon: Compass,
    accent: "steel",
  },
  {
    step: "03",
    key: "ACTIVATE",
    title: "Aktivasyon",
    description: "Doğru mecra, doğru zaman ve yaratıcı uygulamayla hayata geçiririz.",
    icon: Rocket,
    accent: "brand",
  },
  {
    step: "04",
    key: "OPTIMISE",
    title: "Optimizasyon",
    description: "Sonuçları anlık takip eder, yeni fırsatlarla sürekli geliştiririz.",
    icon: LineChart,
    accent: "steel",
  },
];

/* ── 5. Capabilities / 360° ────────────────────────────────────────── */
export const CAPABILITY_PILLARS = [
  {
    id: "integrated",
    title: "Integrated Media",
    lead: "Geleneksel ve dijitali tek planda buluşturan bütünleşik medya yönetimi.",
    items: ["TV", "Açıkhava (OOH)", "Radyo", "Medya Planlama & Satın Alma"],
    icon: Tv,
    accent: "brand",
    span: "lg:col-span-7",
    featured: true,
  },
  {
    id: "performance",
    title: "Performance & Digital Activation",
    lead: "Ölçülebilir dönüşüm için dijital aktivasyon.",
    items: [
      "SEM & SEO/GEO",
      "Sosyal Medya Reklam Yönetimi",
      "Programatik (DSP) & Jeolokalizasyon",
    ],
    icon: Target,
    accent: "steel",
    span: "lg:col-span-5",
  },
  {
    id: "data",
    title: "Data, Analytics & Intelligence",
    lead: "Kararı sezgiden veriye taşıyan analitik katman.",
    items: ["Analytics Yönetimi", "Data Segmentasyonu", "Hedef Kitle & Rekabet Analizi"],
    icon: Database,
    accent: "steel",
    span: "lg:col-span-5",
  },
  {
    id: "special",
    title: "Special Projects & Partnerships",
    lead: "Markayı içerik ve iş birliğiyle büyüten özel projeler.",
    items: [
      "Influencer Marketing",
      "Marka Bazlı İçerik Üretimi",
      "Sponsorluk & Proje Geliştirme",
    ],
    icon: Handshake,
    accent: "brand",
    span: "lg:col-span-7",
  },
];

/* ── 6. Akreditasyonlar & Teknoloji (marquee) ──────────────────────── */
/* `logo` resolves under /images/{accreditations|tech}/… ; missing files
   fall back to a typographic wordmark chip. */
export const ACCREDITATIONS = [
  { name: "Kantar Media", logo: "/images/accreditations/kantar.png" },
  { name: "TİAK", logo: "/images/accreditations/tiak.png" },
  { name: "RİAK", logo: "/images/accreditations/riak.png" },
  { name: "Reklamcılar Derneği", logo: "/images/accreditations/reklamcilar-dernegi.png" },
  { name: "IAB Türkiye", logo: "/images/accreditations/iab.png" },
  { name: "MRC", logo: "/images/accreditations/mrc.png" },
];

export const TECH_STACK = [
  { name: "Google DV360", logo: "/images/tech/dv360.png" },
  { name: "Adform", logo: "/images/tech/adform.png" },
  { name: "Teads", logo: "/images/tech/teads.png" },
  { name: "DoubleVerify", logo: "/images/tech/doubleverify.png" },
  { name: "MOAT", logo: "/images/tech/moat.png" },
  { name: "Adjust", logo: "/images/tech/adjust.png" },
  { name: "Grapeshot", logo: "/images/tech/grapeshot.png" },
  { name: "GlobalWebIndex", logo: "/images/tech/gwi.png" },
  { name: "Wizzard Plus", logo: "/images/tech/wizzard-plus.png" },
  { name: "Medplan", logo: "/images/tech/medplan.png" },
  { name: "INSTAR Analytics", logo: "/images/tech/instar.png" },
];

/* ── 7. Case Studies ───────────────────────────────────────────────── */
export const CASE_STUDIES = [
  {
    id: "nesine-dco",
    client: "Nesine.com",
    label: "Dynamic Creative Optimization",
    year: "2023",
    summary:
      "83.031 farklı kreatifi gerçek zamanlı veri sinyalleriyle eşleştiren DCO kurgusu; her kullanıcıya, her an, en doğru mesajı gösterdi.",
    stats: [
      { icon: Eye, value: "+313M", label: "Gösterim" },
      { icon: TrendingUp, value: "10X", label: "ROAS" },
      { icon: Smartphone, value: "%99", label: "Mobil Dönüşüm" },
      { icon: Layers, value: "83.031", label: "Farklı Kreatif" },
    ],
    awards: ["Felis 1.'lik", "Kristal Elma Gümüş", "13. MIXX Awards Gümüş", "Martech Awards (2 Kategori)"],
    art: "dco",
    /* Media: set ONE of videoEmbedUrl (YouTube/Vimeo embed URL) or videoSrc
       (local .mp4 under public/videos/) + poster. If neither exists the card
       falls back to `image`, then to the brand SVG art. */
    videoEmbedUrl: "",
    videoSrc: "/videos/nesine-dco.mp4",
    poster: "/images/cases/nesine-dco.jpg",
    image: "/images/cases/nesine-dco.jpg",
    gradient: "from-brand-500/15 via-amber-300/10 to-transparent",
    chip: "text-brand-600 bg-brand-50 border-brand-200",
    number: "01",
  },
  {
    id: "hepsiburada-dizi",
    client: "Hepsiburada",
    label: "Dijital Dizi Fragman Sponsorluğu",
    year: "2024",
    summary:
      "İnci Taneleri, Kızılcık Şerbeti ve Yalı Çapkını fragmanlarına entegre sponsorluk kurgusuyla milyonlarca izleyiciye kesintisiz marka görünürlüğü.",
    stats: [
      { icon: Clapperboard, value: "140M", label: "İzlenme" },
      { icon: Timer, value: "1.4M Sn", label: "Markalı Süre" },
      { icon: TrendingUp, value: "11X", label: "Maliyet Verimliliği" },
    ],
    awards: ["MIXX Awards Europe Bronz"],
    art: "film",
    videoEmbedUrl: "",
    videoSrc: "/videos/hepsiburada-dizi.mp4",
    poster: "/images/cases/hepsiburada-dizi.jpg",
    image: "/images/cases/hepsiburada-dizi.jpg",
    gradient: "from-amber-400/15 via-steel-300/10 to-transparent",
    chip: "text-brand-600 bg-brand-50 border-brand-200",
    number: "02",
  },
  {
    id: "hepsiburada-audio",
    client: "Hepsiburada",
    label: "In-Game Audio Reklamları",
    year: "2024",
    summary:
      "Oyun içi sesli reklam formatıyla, ekrana bakmayan kullanıcıya bile markayı duyurduk; gelir ve etkileşim katlandı.",
    stats: [
      { icon: TrendingUp, value: "14X", label: "Satış Geliri" },
      { icon: MousePointerClick, value: "11X", label: "CTR Artışı" },
      { icon: Headphones, value: "3M", label: "Dinlenme" },
      { icon: Users, value: "1M", label: "Tekil Erişim" },
    ],
    awards: ["Kristal Elma"],
    art: "audio",
    videoEmbedUrl: "",
    videoSrc: "/videos/hepsiburada-audio.mp4",
    poster: "/images/cases/hepsiburada-audio.jpg",
    image: "/images/cases/hepsiburada-audio.jpg",
    gradient: "from-steel-500/15 via-steel-300/10 to-transparent",
    chip: "text-steel-600 bg-steel-50 border-steel-200",
    number: "03",
  },
];

/* ── 8. Leadership ─────────────────────────────────────────────────── */
export const TEAM = [
  {
    name: "Burak Kaan Bülbüloğlu",
    role: "Co-Founder",
    years: 27,
    initials: "BK",
    photo: "/images/team/burak-kaan-bulbuloglu.jpg",
    accent: "brand",
    bio: "Universal McCann, Lotus Media, Veritas Media kuruculuğu.",
  },
  {
    name: "Rima Erdemir",
    role: "Co-Founder",
    years: 30,
    initials: "RE",
    photo: "/images/team/rima-erdemir.jpg",
    accent: "steel",
    bio: "Milliyet, Medyanet Genel Müdürü, Demirören Medya Reklam Grup Başkanı, IAB Türkiye & KAGİDER YK Üyesi.",
  },
  {
    name: "Öncü Gülmez",
    role: "Agency Vice President",
    years: 21,
    initials: "ÖG",
    photo: "/images/team/oncu-gulmez.jpg",
    accent: "brand",
    bio: "Mindshare, Starcom MediaVest, Arena Media Turkey Ajans Başkan Yardımcısı.",
  },
  {
    name: "Aslı Bakan",
    role: "Managing Partner",
    years: 20,
    initials: "AB",
    photo: "/images/team/asli-bakan.jpg",
    accent: "steel",
    bio: "20 yılı aşkın medya ve strateji deneyimi.",
  },
];

/* Headline metrics band (NaN-safe: numeric values + static affixes). */
export const STATS = [
  { value: 313, prefix: "+", suffix: "M", label: "Gösterim" },
  { value: 10, prefix: "", suffix: "X", label: "ROAS" },
  { value: 140, prefix: "", suffix: "M", label: "Dizi İzlenmesi" },
  { value: 14, prefix: "", suffix: "X", label: "Satış Geliri" },
  { value: 11, prefix: "", suffix: "X", label: "CTR Artışı" },
  { value: 98, prefix: "", suffix: "+", label: "Yıl Yönetici Tecrübesi" },
];

export const AWARDS = [
  { name: "Felis", detail: "Nesine.com — DCO · 1.'lik", icon: Trophy },
  { name: "Kristal Elma", detail: "Nesine.com Gümüş · Hepsiburada In-Game Audio", icon: Trophy },
  { name: "MIXX Awards", detail: "13. MIXX Gümüş · MIXX Europe Bronz", icon: Trophy },
  { name: "Martech Awards", detail: "Nesine.com — DCO · 2 Kategori", icon: Trophy },
];

/* Contact form — service multi-select tabs. */
export const SERVICE_OPTIONS = [
  "Integrated Media",
  "Performance & Digital",
  "Data & Analytics",
  "Special Projects",
  "Influencer",
  "Sponsorluk",
];

export const MARQUEE_ITEMS = [
  "STRATEJİ",
  "PLANLAMA",
  "SATIN ALMA",
  "ÖLÇÜMLEME",
  "PERFORMANS",
  "VERİ",
];
