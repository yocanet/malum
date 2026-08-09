/**
 * All site copy and structured content in one place, so editing the site's
 * words never requires touching component code.
 */
import {
  MonitorPlay,
  BarChart3,
  Gamepad2,
  Eye,
  TrendingUp,
  Smartphone,
  MousePointerClick,
  Headphones,
  Clapperboard,
  Timer,
  Trophy,
  Compass,
  PenTool,
  Rocket,
  LineChart,
  Search,
  Users,
  Gauge,
  Palette,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

/* Page background tints, morphed as each section takes the stage. */
export const SECTION_BG = {
  hero: "#F8FAFC",
  manifesto: "#FEF3EE",
  stats: "#FFFFFF",
  capabilities: "#F8FAFC",
  cases: "#F3F6F8",
  process: "#FFFFFF",
  team: "#F1F5F9",
  contact: "#FEF3EE",
};

export const CAPABILITIES = [
  {
    id: "programmatic",
    step: "01",
    title: "Programmatic & DSP",
    description:
      "DV360, Teads ve Adform üzerinde tam yetkin ekiplerle programatik satın alma, gerçek zamanlı optimizasyon ve şeffaf raporlama.",
    tags: ["DV360", "Teads", "Adform"],
    icon: MonitorPlay,
    accent: "amber",
  },
  {
    id: "performance",
    step: "02",
    title: "Media Performance & SEO",
    description:
      "Veri odaklı medya performansı, arama görünürlüğü ve dönüşüm optimizasyonunu tek çatı altında yönetiyoruz.",
    tags: ["Performance", "SEO", "Analytics"],
    icon: BarChart3,
    accent: "teal",
  },
  {
    id: "influencer",
    step: "03",
    title: "Influencer Marketing & In-Game Audio",
    description:
      "Doğru yüzler ve oyun içi sesli reklam formatlarıyla markanızı, erişilmesi en zor kitlelerin tam kalbine taşıyoruz.",
    tags: ["Influencer", "In-Game Audio", "Branded Content"],
    icon: Gamepad2,
    accent: "amber",
  },
];

export const CASE_STUDIES = [
  {
    id: "nesine-dco",
    client: "Nesine.com",
    label: "Dynamic Creative Optimization",
    summary:
      "Gerçek zamanlı veri sinyalleriyle beslenen DCO kurgusu; her kullanıcıya, her an, en doğru kreatifi gösterdi.",
    stats: [
      { icon: Eye, value: "+313M", label: "Impressions" },
      { icon: TrendingUp, value: "10X", label: "ROAS" },
      { icon: Smartphone, value: "99%", label: "Mobile" },
    ],
    awards: ["Felis", "MIXX"],
    art: "dco",
    gradient: "from-brand-500/15 via-amber-300/10 to-transparent",
    chip: "text-brand-600 bg-brand-50 border-brand-200",
    number: "01",
  },
  {
    id: "hepsiburada-audio",
    client: "Hepsiburada",
    label: "In-Game Audio",
    summary:
      "Oyun içi sesli reklam formatıyla, ekrana bakmayan kullanıcıya bile markayı duyurduk; gelir ve etkileşim katlandı.",
    stats: [
      { icon: TrendingUp, value: "14X", label: "Revenue" },
      { icon: MousePointerClick, value: "11X", label: "CTR" },
      { icon: Headphones, value: "3M", label: "Listens" },
    ],
    awards: ["Kristal Elma"],
    art: "audio",
    gradient: "from-steel-500/15 via-steel-300/10 to-transparent",
    chip: "text-steel-600 bg-steel-50 border-steel-200",
    number: "02",
  },
  {
    id: "hepsiburada-dizi",
    client: "Hepsiburada",
    label: "Dizi Fragman Sponsorluğu",
    summary:
      "Prime-time dizi fragmanlarına entegre sponsorluk kurgusuyla milyonlarca izleyiciye kesintisiz marka görünürlüğü.",
    stats: [
      { icon: Clapperboard, value: "140M", label: "Views" },
      { icon: Timer, value: "1.4M", label: "Sec Brand Time" },
      { icon: Trophy, value: "#1", label: "Prime Time" },
    ],
    awards: ["MIXX Europe"],
    art: "film",
    gradient: "from-amber-400/15 via-steel-300/10 to-transparent",
    chip: "text-brand-600 bg-brand-50 border-brand-200",
    number: "03",
  },
];

export const TEAM = [
  {
    name: "Burak Kaan Bülbüloğlu",
    role: "Co-Founder",
    experience: "27 Yıl Tecrübe",
    years: 27,
    initials: "BK",
    accent: "amber",
    bio: "Türkiye'nin önde gelen medya gruplarında satın alma ve strateji liderliği.",
  },
  {
    name: "Rima Erdemir",
    role: "Co-Founder",
    experience: "30 Yıl Tecrübe",
    years: 30,
    initials: "RE",
    accent: "teal",
    bio: "Uluslararası ajans ağlarında marka ve iletişim yönetimi tecrübesi.",
  },
  {
    name: "Öncü Gülmez",
    role: "Agency Vice President",
    experience: "19 Yıl Tecrübe",
    years: 19,
    initials: "ÖG",
    accent: "amber",
    bio: "Performans pazarlama ve veri odaklı büyüme operasyonları uzmanı.",
  },
];

/* Manifesto — words light up one-by-one as you scroll. */
export const MANIFESTO = [
  { t: "Reklamı" },
  { t: "gürültü" },
  { t: "olmaktan" },
  { t: "çıkarıyoruz." },
  { t: "Veriyi,", accent: "violet" },
  { t: "kreatifi", accent: "teal" },
  { t: "ve" },
  { t: "medyayı", accent: "violet" },
  { t: "tek" },
  { t: "bir" },
  { t: "ışıltılı", gradient: true },
  { t: "deneyimde" },
  { t: "birleştiriyoruz;" },
  { t: "markaları" },
  { t: "izlenen" },
  { t: "değil," },
  { t: "hatırlanan", accent: "violet" },
  { t: "yapıyoruz." },
];

export const MARQUEE_ITEMS = [
  "STRATEJİ",
  "PERFORMANS",
  "VERİ",
  "PROGRAMATİK",
  "YAYINCILIK",
  "KREATİF",
];

/* Animated counters — value is tweened from 0, prefix/suffix stay static.
   Values are plain finite numbers; formatting lives in prefix/suffix so the
   counter can never produce NaN. */
export const STATS = [
  { value: 313, prefix: "+", suffix: "M", label: "Gösterim" },
  { value: 10, prefix: "", suffix: "X", label: "ROAS" },
  { value: 140, prefix: "", suffix: "M", label: "Dizi İzlenmesi" },
  { value: 14, prefix: "", suffix: "X", label: "Revenue" },
  { value: 11, prefix: "", suffix: "X", label: "CTR" },
  { value: 76, prefix: "", suffix: "+", label: "Yıl Tecrübe" },
];

/* Premium award badges. */
export const AWARDS = [
  { name: "Felis", detail: "Nesine.com — DCO" },
  { name: "MIXX", detail: "Nesine.com — DCO" },
  { name: "Kristal Elma", detail: "Hepsiburada — In-Game Audio" },
  { name: "MIXX Europe", detail: "Hepsiburada — Dizi Sponsorluğu" },
];

/* 360° bento grid — services + spans. `span` controls the bento shape. */
export const BENTO_CAPABILITIES = [
  {
    id: "strategy",
    title: "Strateji",
    description: "Marka hedefini medya matematiğine çeviren yol haritası.",
    icon: Compass,
    accent: "brand",
    span: "lg:col-span-2",
  },
  {
    id: "programmatic",
    title: "Programmatic & DSP",
    description:
      "DV360, Teads ve Adform üzerinde tam yetkin ekiplerle programatik satın alma, gerçek zamanlı optimizasyon ve şeffaf raporlama.",
    icon: MonitorPlay,
    accent: "brand",
    span: "lg:col-span-4",
    featured: true,
    tags: ["DV360", "Teads", "Adform"],
  },
  {
    id: "performance",
    title: "Performance",
    description: "Dönüşüm odaklı medya; her lira ölçülür, her gün optimize edilir.",
    icon: TrendingUp,
    accent: "steel",
    span: "lg:col-span-2",
  },
  {
    id: "seo",
    title: "SEO / Analytics",
    description: "Arama görünürlüğü ve veri altyapısı tek çatıda.",
    icon: Search,
    accent: "amber",
    span: "lg:col-span-2",
  },
  {
    id: "influencer",
    title: "Influencer",
    description: "Doğru yüzlerle güven inşa eden içerik iş birlikleri.",
    icon: Users,
    accent: "brand",
    span: "lg:col-span-2",
  },
  {
    id: "ingame",
    title: "In-Game Audio",
    description:
      "Oyun içi sesli reklamla ekrana bakmayan kullanıcıya bile ulaşın — kanıtlanmış 14X gelir çarpanı.",
    icon: Gamepad2,
    accent: "steel",
    span: "lg:col-span-3",
  },
  {
    id: "measurement",
    title: "Measurement / Brand Lift",
    description:
      "Kantar iş birliğiyle marka bilinirliği ve satış etkisi bağımsız ölçümlenir.",
    icon: Gauge,
    accent: "amber",
    span: "lg:col-span-3",
  },
  {
    id: "creative",
    title: "Creative / Content",
    description: "Kanala göre düşünülmüş kreatif; format değil, fikir önce gelir.",
    icon: Palette,
    accent: "brand",
    span: "lg:col-span-2",
  },
];

/* Technology ecosystem — rendered as its own strong bento block. */
export const TECH_ECOSYSTEM = [
  "DV360",
  "Teads",
  "Adform",
  "Kantar",
  "IAB",
  "Google Ads",
  "Meta",
  "TikTok",
  "YouTube",
  "Analytics",
];

export const CLIENT_MARKS = [
  "Nesine.com",
  "Hepsiburada",
  "DV360",
  "Teads",
  "Adform",
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Keşif & Veri",
    description:
      "Markanızı, kitlenizi ve rakip sahayı veriyle okuyoruz; fırsat haritası çıkıyor.",
    icon: Compass,
    accent: "amber",
  },
  {
    step: "02",
    title: "Strateji & Kurgu",
    description:
      "Kanal karması, bütçe dağılımı ve kreatif kurgu tek bir hikayeye bağlanıyor.",
    icon: PenTool,
    accent: "teal",
  },
  {
    step: "03",
    title: "Aktivasyon & Yayın",
    description:
      "Kampanya tüm kanallarda canlıya alınıyor; ilk saatten itibaren canlı izleme.",
    icon: Rocket,
    accent: "amber",
  },
  {
    step: "04",
    title: "Optimizasyon & Rapor",
    description:
      "Gerçek zamanlı optimizasyonla her lira daha akıllı çalışıyor; sonuçlar şeffaf raporlanıyor.",
    icon: LineChart,
    accent: "teal",
  },
];
