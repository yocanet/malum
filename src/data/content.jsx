/**
 * All site copy and structured content in one place, so editing the site's
 * words never requires touching component code.
 *
 * Image convention: every visual asset resolves from /public/images/…
 * If a file is missing, components fall back to SVG/monogram/wordmark
 * automatically — drop the real files in and nothing else changes.
 *
 * Revised per "revizeler 21.08.26.pptx".
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
} from "lucide-react";

/* Nav order mirrors the page flow (rev. slide 6 + 8). */
export const NAV_LINKS = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmet Yapısı", href: "#hizmet-yapisi" },
  { label: "Çalışma Süreci", href: "#calisma-sureci" },
  { label: "Sektörel Temsiliyet & Teknolojik Altyapı", href: "#temsiliyet-teknoloji" },
  { label: "Öne Çıkan İşler", href: "#one-cikan-isler" },
  { label: "Yönetim Kadrosu", href: "#yonetim-kadrosu" },
  { label: "İletişim", href: "#iletisim" },
];

export const COMPANY = {
  name: "Sparkle Medya",
  tagline: "Medya Planlama ve Satın Alma Ajansı",
  address: "Maslak Mah. Meydan Sok. Spring Giz Plaza No: 5 Kat: 17 Sarıyer / İSTANBUL",
  phone: "+90 212 232 22 00",
  phoneHref: "tel:+902122322200",
  web: "www.spmedya.com",
  webHref: "https://www.spmedya.com",
  email: "info@spmedya.com",
  linkedin: "https://www.linkedin.com/company/sparklemedya/posts/?feedView=all",
  instagram: "https://www.instagram.com/sparkle_medya/",
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
  capabilities: "#F8FAFC",
  way: "#FEF3EE",
  tech: "#FFFFFF",
  cases: "#F3F6F8",
  team: "#F8FAFC",
  contact: "#FEF3EE",
};

/* Brand logo marquee under the hero (rev. slide 8). */
export const BRANDS = [
  { name: "Binance", logo: "/images/brands/binance.png" },
  { name: "Boyner", logo: "/images/brands/boyner.png" },
  { name: "Kurukahveci Mehmet Efendi", logo: "/images/brands/kurukahveci-mehmet-efendi.png" },
  { name: "Betek Boya", logo: "/images/brands/betek-boya.png" },
  { name: "Hepiyi Sigorta", logo: "/images/brands/hepiyi-sigorta.png" },
  { name: "Hopi", logo: "/images/brands/hopi.png" },
  { name: "Şen Piliç", logo: "/images/brands/sen-pilic.png" },
  { name: "Tat", logo: "/images/brands/tat.png" },
];

/* ── Hakkımızda ────────────────────────────────────────────────────── */
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

/* ── Çalışma Süreci ────────────────────────────────────────────────── */
export const WAY_SUBTITLE =
  "Her adımı markalarımızla birlikte düşünüyor; doğru stratejiyi, doğru zamanda doğru kararlarla hayata geçiriyoruz.";

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

/* ── Hizmet Yapısı (360°) ──────────────────────────────────────────── */
export const CAPABILITIES_SUBTITLE =
  "Geleneksel medyadan performansa, veriden özel projelere — medyanın tüm gücünü bütünsel bir yaklaşımla bir araya getiriyoruz.";

export const CAPABILITY_PILLARS = [
  {
    id: "integrated",
    title: "Online - Offline Medya Planlama ve Satın Alma",
    lead: "Geleneksel ve dijitali tek planda buluşturan bütünleşik medya yönetimi.",
    items: ["TV", "Açıkhava (OOH)", "Dijital", "Radyo", "Basın", "Sinema"],
    icon: Tv,
    accent: "brand",
    span: "lg:col-span-12",
    featured: true,
  },
  {
    id: "performance",
    title: "Dijital Medya & Performans Pazarlaması",
    lead: "Dijital medyayı stratejiden satın almaya, ölçümlemeden optimizasyona uçtan uca yönetiyoruz.",
    items: [
      "Dijital Medya Planlama ve Satın Alma",
      "Sosyal Medya Reklam Yönetimi",
      "Programatik (DSP)",
      "Ölçümleme & Optimizasyon",
      "SEO & GEO",
    ],
    icon: Target,
    accent: "steel",
    span: "lg:col-span-4",
  },
  {
    id: "data",
    title: "Veri, Analitik & İçgörü",
    lead: "Veriyi anlamlandırıyor, içgörüyü stratejik kararlara dönüştürüyoruz.",
    items: [
      "Analytics & Ölçümleme",
      "Veri Analizi & Segmentasyon",
      "Hedef Kitle & Tüketici İçgörüleri",
      "Rekabet & Pazar Analizi",
      "Raporlama & Veri Görselleştirme",
    ],
    icon: Database,
    accent: "steel",
    span: "lg:col-span-4",
  },
  {
    id: "special",
    title: "Özel Projeler & İş Birlikleri",
    lead: "Markalar için medyanın ötesine geçen içerik, iş birliği ve proje alanları yaratıyoruz.",
    items: [
      "Influencer & Creator Marketing",
      "Marka İş Birlikleri & İçerik Projeleri",
      "Sponsorluk & Entegrasyon",
      "Topluluk Yönetimi",
    ],
    icon: Handshake,
    accent: "steel",
    span: "lg:col-span-4",
  },
];

/* ── Sektörel Temsiliyet & Teknoloji Altyapımız ────────────────────── */
export const TECH_SECTION = {
  titleLines: ["Sektörel Temsiliyet &", "Teknoloji Altyapımız"],
  subtitle:
    "Sektörel temsiliyetimizi güçlü veri, teknoloji ve ölçümleme altyapısıyla destekliyoruz.",
  accreditationsLabel: "Sektörel Temsiliyetlerimiz",
  techLabel: "Kullandığımız Teknolojiler & Veri Araçları",
};

export const ACCREDITATIONS = [
  { name: "Kantar Media", logo: "/images/accreditations/kantar.png" },
  { name: "TİAK", logo: "/images/accreditations/tiak.png" },
  { name: "RİAK", logo: "/images/accreditations/riak.png" },
  { name: "Reklamcılar Derneği", logo: "/images/accreditations/reklamcilar-dernegi.png" },
  { name: "IAB Türkiye", logo: "/images/accreditations/iab.png" },
  { name: "ARVAK", logo: "/images/accreditations/arvak.png" },
];

/* Tools grouped per rev. slide 14. */
export const TECH_CATEGORIES = [
  {
    title: "Hedef Kitle & İçgörü",
    tools: [
      { name: "TGI", logo: "/images/tech/tgi.png" },
      { name: "GlobalWebIndex", logo: "/images/tech/gwi.png" },
    ],
  },
  {
    title: "Planlama & Ölçümleme",
    tools: [
      { name: "Kantar Adex", logo: "/images/tech/kantar-adex.png" },
      { name: "Instar", logo: "/images/tech/instar.png" },
      { name: "Wizard Plus", logo: "/images/tech/wizzard-plus.png" },
      { name: "Medplan", logo: "/images/tech/medplan.png" },
    ],
  },
  {
    title: "Programatik Satın Alma",
    tools: [
      { name: "Google DV360", logo: "/images/tech/dv360.png" },
      { name: "Adform", logo: "/images/tech/adform.png" },
    ],
  },
  {
    title: "Reklam Doğrulama & Kalite",
    tools: [
      { name: "DoubleVerify", logo: "/images/tech/doubleverify.png" },
      { name: "MOAT", logo: "/images/tech/moat.png" },
      { name: "Grapeshot", logo: "/images/tech/grapeshot.png" },
    ],
  },
  {
    title: "Analitik & Reklam Yönetimi",
    tools: [
      { name: "Adjust", logo: "/images/tech/adjust.png" },
      { name: "Gemius", logo: "/images/tech/gemius.png" },
      { name: "DoubleClick", logo: "/images/tech/doubleclick.png" },
    ],
  },
];

/* ── Öne Çıkan İşler ───────────────────────────────────────────────── */
export const CASES_TITLE = "Işıltılı İşlerimiz";

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
    awards: [
      { logo: "/images/awards/felis.png", name: "Felis", text: "Felis Birincilik Ödülü" },
      { logo: "/images/awards/kristal-elma.png", name: "Kristal Elma", text: "Gümüş Ödül" },
      { logo: "/images/awards/mixx.png", name: "MIXX Awards", text: "13. MIXX Awards Gümüş Ödül" },
      { logo: "/images/awards/martech.png", name: "Martech Awards", text: "2 Kategoride Ödül" },
    ],
    art: "dco",
    videoEmbedUrl: "https://www.youtube.com/embed/umHER5k2M7U",
    videoSrc: "",
    poster: "https://i.ytimg.com/vi/umHER5k2M7U/hqdefault.jpg",
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
      "Media-first bir yaklaşımla, dizi fragmanlarının yükselen dijital izlenme gücünü yeni bir reklam fırsatına dönüştürerek YouTube ve Online TV'de markaya özel bir sponsorluk modeli yarattık.",
    stats: [
      { icon: Clapperboard, value: "140M", label: "İzlenme" },
      { icon: Timer, value: "1.4M Sn", label: "Markalı Süre" },
      { icon: TrendingUp, value: "11X", label: "Maliyet Verimliliği" },
    ],
    awards: [
      {
        logo: "/images/awards/mixx.png",
        name: "MIXX Awards Europe",
        text: "Video Reklam Kampanyası Bronz Ödül",
      },
    ],
    art: "film",
    videoEmbedUrl: "https://www.youtube.com/embed/qviOvafrD1Y",
    videoSrc: "",
    poster: "https://i.ytimg.com/vi/qviOvafrD1Y/hqdefault.jpg",
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
      "In-Game Audio ile marka mesajını oyun deneyimini bölmeden genç kitlelerle buluşturduk, ses ve görsel teması birlikte kullanarak etkileşimi güçlendirdik.",
    stats: [
      { icon: TrendingUp, value: "14X", label: "Satış Geliri" },
      { icon: MousePointerClick, value: "11X", label: "CTR Artışı" },
      { icon: Headphones, value: "3M", label: "Dinlenme" },
      { icon: Users, value: "1M", label: "Tekil Erişim" },
    ],
    awards: [
      { logo: "/images/awards/kristal-elma.png", name: "Kristal Elma", text: "Kristal Elma Ödülü" },
    ],
    art: "audio",
    videoEmbedUrl: "https://www.youtube.com/embed/pUIxyxlrDHE",
    videoSrc: "",
    poster: "https://i.ytimg.com/vi/pUIxyxlrDHE/hqdefault.jpg",
    image: "/images/cases/hepsiburada-audio.jpg",
    gradient: "from-steel-500/15 via-steel-300/10 to-transparent",
    chip: "text-steel-600 bg-steel-50 border-steel-200",
    number: "03",
  },
];

/* ── Yönetim Kadrosu ───────────────────────────────────────────────── */
export const TEAM_SUBTITLE =
  "Köklü medya deneyimimizi, farklı uzmanlıklarımızla ortak bir vizyonda buluşturuyoruz.";

/* NOTE: `bio` metinleri, ayrıca iletilecek uzun biyografilerle
   güncellenecek (Aslı Bakan biyografisi ayrıca gelecek). */
export const TEAM = [
  {
    name: "Burak Kaan Bülbüloğlu",
    role: "Co-Founder",
    years: 27,
    initials: "BK",
    photo: "/images/team/burak-kaan-bulbuloglu.jpg",
    linkedin: "https://www.linkedin.com/in/kaan-b%C3%BClb%C3%BClo%C4%9Flu-9bba4946/",
    bio: "Universal McCann, Lotus Media ve Veritas Media kuruculuğu dahil olmak üzere 27 yılı aşkın medya planlama ve satın alma liderliği.",
  },
  {
    name: "Rima Erdemir",
    role: "Co-Founder",
    years: 30,
    initials: "RE",
    photo: "/images/team/rima-erdemir.jpg",
    linkedin: "https://www.linkedin.com/in/rima-erdemir-67910240/",
    bio: "Milliyet ve Medyanet Genel Müdürlüğü, Demirören Medya Reklam Grup Başkanlığı; IAB Türkiye ve KAGİDER Yönetim Kurulu Üyeliği ile 30 yılı aşkın medya yönetimi deneyimi.",
  },
  {
    name: "Öncü Gülmez",
    role: "Agency Vice President",
    years: 21,
    initials: "ÖG",
    photo: "/images/team/oncu-gulmez.jpg",
    linkedin: "https://www.linkedin.com/in/oncug/",
    bio: "Mindshare, Starcom MediaVest ve Arena Media Turkey Ajans Başkan Yardımcılığı dahil 21 yılı aşkın medya stratejisi ve operasyon deneyimi.",
  },
  {
    name: "Aslı Bakan",
    role: "Managing Partner",
    years: 20,
    initials: "AB",
    photo: "/images/team/asli-bakan.jpg",
    linkedin: "https://www.linkedin.com/in/asl%C4%B1-bakan-g%C3%B6kulu-2619b188/",
    bio: "20 yılı aşkın medya ve strateji deneyimi. (Detaylı biyografi eklenecek.)",
  },
];
