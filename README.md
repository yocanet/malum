# Sparkle Medya — Scroll-Storytelling Site

Tek sayfalık kreatif ajans sitesi. Scroll ettikçe sahne sahne ilerleyen bir
deneyim: pinli hero, kinetik marquee, kelime kelime aydınlanan manifesto,
kart-destesi hizmet sahnesi, yatay akan vaka analizleri, süreç çizgisi ve
canlı sayaçlar.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (açık/beyaz tema)
- **GSAP + ScrollTrigger** (pinli sahneler, scrub timeline'ları, renk morph'u)
- **Lenis** (sinematik smooth scroll)
- **lucide-react** (ikonlar) + inline SVG marka görselleri
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
  App.jsx               # Lenis + global arka plan renk morph'u + anchor glide
  data/content.jsx      # TÜM metinler ve içerik — kodu değil, burayı düzenleyin
  lib/motion.js         # gsap/ScrollTrigger + reduced-motion yardımcıları
  components/
    Header.jsx          # Yüzen glass navbar (aşağıda gizlenir, yukarıda döner)
    Hero.jsx            # Pinli açılış sahnesi + gradient mesh + dönen halka
    Marquee.jsx         # Sonsuz kinetik tipografi şeridi
    Manifesto.jsx       # Scroll ile aydınlanan büyük metin
    StatsBand.jsx       # Animasyonlu sayaçlar + marka wordmark'ları
    Capabilities.jsx    # Pinli kart-destesi hizmet sahnesi (01/03 sayaç)
    CaseStudies.jsx     # Pinli yatay vaka akışı + progress bar
    CaseArt.jsx         # Vakalara özel soyut SVG görseller (telifsiz)
    Process.jsx         # 4 adımlı yaklaşım, çizgi scroll ile çiziliyor
    Team.jsx            # Liderlik kartları + hafif parallax
    Contact.jsx         # Lead formu (CRM entegrasyonu için işaretli nokta)
    Footer.jsx          # Zengin 4 kolonlu footer
```

## Özelleştirme notları

- **Metinler/veriler:** `src/data/content.jsx` — bölüm arka plan renkleri de
  burada (`SECTION_BG`).
- **Form:** `Contact.jsx` içindeki `handleSubmit`'e CRM/API endpoint'inizi
  bağlayın.
- **OG görseli:** `public/og-image.png` — kendi görselinizle değiştirin.
- **Erişilebilirlik:** `prefers-reduced-motion` açıkken tüm sahneler statik
  dikey düzene iner; vakalar native yatay kaydırmaya döner.
