import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const casesData = [
  {
    id: "nesine",
    badge: "Felis & MIXX Ödüllü",
    year: "2023",
    title: "Nesine.com — Dynamic Creative Optimization",
    desc: "Google DCO teknolojisi ve canlı maç veri akışı ile anlık kişiselleştirilmiş kreatif iletişimi.",
    stats: [
      { label: "Gösterim", value: "+313M", color: "text-violet-600" },
      { label: "ROAS Artışı", value: "10X", color: "text-indigo-600" },
      { label: "Mobil Dönüşüm", value: "%99", color: "text-slate-900" }
    ]
  },
  {
    id: "hepsiburada-audio",
    badge: "Kristal Elma Ödüllü",
    year: "2024",
    title: "Hepsiburada — In-Game Audio Reklamları",
    desc: "E-Ticaret sektöründe Media First olarak mobil oyun içi sesli reklam stratejisi.",
    stats: [
      { label: "Revenue Artışı", value: "14X", color: "text-violet-600" },
      { label: "Yüksek CTR", value: "11X", color: "text-indigo-600" },
      { label: "Dinlenme", value: "3M", color: "text-slate-900" }
    ]
  },
  {
    id: "hepsiburada-dizi",
    badge: "Mixx Awards Europe",
    year: "2024",
    title: "Hepsiburada — Dijital Dizi Fragman Sponsorluğu",
    desc: "TV dizilerinin dijital fragmanlarını 'Sunar/Sundu' kurgusuyla sahiplenen ilk medya projesi.",
    stats: [
      { label: "Toplam İzlenme", value: "140M", color: "text-violet-600" },
      { label: "Markalı Süre", value: "1.4M Sn", color: "text-indigo-600" }
    ]
  }
];

export default function CaseStudies() {
  const targetRef = useRef(null);
  
  // Dikey Scroll Yüksekliğini 300vh Yaparak Akıcı Bir Alan Yaratıyoruz
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Yatayda Kartların Kesinlikle Kaybolmayacak Şekilde Yumuşak Akması
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-50">
      {/* Sticky Viewport */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden z-10">
        
        {/* Sol Sabit Başlık Katmanı */}
        <div className="absolute top-12 left-8 md:left-16 z-20 pointer-events-none">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase bg-violet-100/80 backdrop-blur-md border border-violet-200/50 px-4 py-1.5 rounded-full">
            Ödüllü Vaka Çalışmaları
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            Başarı Hikayelerimiz.
          </h2>
        </div>

        {/* Yatay Kayan Kart Grubu */}
        <motion.div style={{ x }} className="flex gap-8 pl-8 md:pl-16 pt-20 w-max">
          {casesData.map((item) => (
            <div
              key={item.id}
              className="w-[85vw] md:w-[580px] h-[460px] bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Kart Arka Plan İnce Parıltısı */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-all duration-500"></div>

              {/* Üst Alan */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-200 px-3.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-sm font-medium text-slate-400">{item.year}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-violet-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* İstatistikler */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {item.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className={`text-2xl md:text-3xl font-black ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
