# Sparkle Medya — Kurumsal Web Sitesi

Sparkle Medya (Medya Planlama ve Satın Alma Ajansı) için tek sayfalık,
scroll-anlatımlı kurumsal site.

**Designed & built by [Yoca](https://yoca.net).**

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (açık kurumsal tema — turuncu `#F15F2C` / gri `#6C7E8F`)
- **GSAP + ScrollTrigger** (giriş animasyonları, scrub efektleri, bölüm arka plan morph'u)
- **Lenis** (yumuşak kaydırma + çapa geçişleri)
- **lucide-react** (ikonlar)
- **Space Grotesk** (display) + **Inter** (body) — Fontsource ile self-host

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # build'i lokalde görüntüle
```

## Yapı

```
src/
  App.jsx                 # Lenis + bölüm arka plan renk morph'u + çapa kaydırma
  data/content.jsx        # TÜM metinler ve içerik — kodu değil, burayı düzenleyin
  data/legal.jsx          # Gizlilik / KVKK / Çerez metinleri (modallerde açılır)
  lib/motion.js           # gsap/ScrollTrigger + reduced-motion yardımcıları
  components/
    Header.jsx            # Yüzen glass navbar (aşağıda gizlenir, yukarıda döner)
    Hero.jsx              # Açılış sahnesi — gradient mesh, dönen halka, watermark
    Marquee.jsx           # Marka logoları şeridi (Hakkımızda girişi)
    WhyUs.jsx             # Hakkımızda — 4 değer çipi + marka işareti
    Capabilities.jsx      # Hizmet Yapısı — öne çıkan tam genişlik kart + 3 kart
    SparkleWay.jsx        # Çalışma Süreci — 4 adım, çizgi scroll ile dolar
    TechMarquee.jsx       # Sektörel Temsiliyet & Teknolojik Altyapı
    CaseStudies.jsx       # Işıltılı İşlerimiz — ok/sürükleme carousel + YouTube embed
    CaseArt.jsx           # Vaka kartları için soyut SVG fallback görselleri
    Team.jsx              # Yönetim Kadrosu — biyografi modalı + LinkedIn
    Contact.jsx           # Lead formu (CRM entegrasyonu için işaretli nokta)
    Footer.jsx            # 4 kolonlu footer + yasal metin modalleri
    LegalModal.jsx        # Gizlilik / KVKK / Çerez modal bileşeni
    CookieConsent.jsx     # Çerez onay bandı (localStorage ile kalıcı)
    branding/             # Yoca imza bileşeni
```

## Özelleştirme notları

- **Metinler/veriler:** `src/data/content.jsx` — bölüm arka plan renkleri de
  burada (`SECTION_BG`). Yasal metinler: `src/data/legal.jsx`.
- **Görseller:** `public/images/…` altından çağrılır; dosya adları için
  `public/images/README.md`. Dosya yoksa otomatik fallback devreye girer.
- **Vaka videoları:** `content.jsx` içindeki `videoEmbedUrl` (YouTube embed)
  veya `public/videos/` altına yerel .mp4.
- **Form:** `Contact.jsx` içindeki `handleSubmit`'e CRM/API endpoint'inizi bağlayın.
- **OG görseli:** `public/og-image.png`.
- **Erişilebilirlik:** `prefers-reduced-motion` açıkken animasyonlar devre dışı
  kalır; carousel native yatay kaydırmayla çalışır.

---

© Sparkle Medya. Tüm hakları saklıdır. · Site: [Yoca](https://yoca.net)
