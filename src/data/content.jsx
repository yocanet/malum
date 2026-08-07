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
  capabilities: "#EFF3F6",
  cases: "#FDEFE6",
  process: "#FFFFFF",
  team: "#F8FAFC",
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
    accent: "violet",
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
    accent: "violet",
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
    gradient: "from-brand-500/15 via-amber-400/10 to-transparent",
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
    gradient: "from-brand-500/15 via-steel-400/10 to-transparent",
    chip: "text-brand-600 bg-brand-50 border-brand-200",
    number: "03",
  },
];

export const TEAM = [
  {
    name: "Burak Kaan Bülbüloğlu",
    role: "Co-Founder",
    experience: "27 Yıl Tecrübe",
    initials: "BK",
    accent: "violet",
    bio: "Türkiye'nin önde gelen medya gruplarında satın alma ve strateji liderliği.",
  },
  {
    name: "Rima Erdemir",
    role: "Co-Founder",
    experience: "30 Yıl Tecrübe",
    initials: "RE",
    accent: "teal",
    bio: "Uluslararası ajans ağlarında marka ve iletişim yönetimi tecrübesi.",
  },
  {
    name: "Öncü Gülmez",
    role: "Agency Vice President",
    experience: "19 Yıl Tecrübe",
    initials: "ÖG",
    accent: "violet",
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

/* Animated counters — value is tweened from 0, prefix/suffix stay static. */
export const STATS = [
  { value: 313, prefix: "+", suffix: "M", label: "Tek kampanyada gösterim" },
  { value: 76, prefix: "", suffix: "+", label: "Yıl toplam yönetici tecrübesi" },
  { value: 14, prefix: "", suffix: "X", label: "Kanıtlanmış gelir çarpanı" },
  { value: 4, prefix: "", suffix: "", label: "Uluslararası ödül" },
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
    accent: "violet",
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
    accent: "violet",
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
