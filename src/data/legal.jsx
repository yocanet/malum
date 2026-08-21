/**
 * Legal documents — shown in modal dialogs from the footer and the cookie
 * banner. Each doc is { id, title, updated, sections: [{ heading?, body: [..], list?: [..] }] }.
 *
 * NOT: Bu metinler standart şablonlardan hazırlanmış taslaklardır; yayına
 * almadan önce hukuk danışmanınızla teyit etmeniz önerilir.
 */

export const LEGAL_DOCS = {
  gizlilik: {
    id: "gizlilik",
    title: "Gizlilik Politikası",
    updated: "21 Ağustos 2026",
    sections: [
      {
        body: [
          "Sparkle Medya (“Şirket”) olarak, web sitemizi (www.spmedya.com) ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel verilerinizin güvenliğini önemsiyoruz. Bu Gizlilik Politikası, sitemizi kullanımınız sırasında hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.",
        ],
      },
      {
        heading: "Toplanan Bilgiler",
        body: [
          "Sitemizdeki iletişim formu aracılığıyla bizimle paylaştığınız ad-soyad, e-posta adresi, marka/şirket bilgisi ve mesaj içeriği; ayrıca site kullanımınıza ilişkin çerezler yoluyla elde edilen teknik veriler (IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret süresi) toplanabilmektedir.",
        ],
      },
      {
        heading: "Bilgilerin Kullanım Amacı",
        body: ["Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:"],
        list: [
          "İletişim taleplerinize yanıt vermek ve teklif süreçlerini yürütmek,",
          "Hizmetlerimizi tanıtmak ve iş geliştirme faaliyetlerini sürdürmek,",
          "Site deneyimini iyileştirmek ve site trafiğini analiz etmek,",
          "Yasal yükümlülüklerimizi yerine getirmek.",
        ],
      },
      {
        heading: "Bilgilerin Paylaşımı",
        body: [
          "Kişisel verileriniz; açık rızanız bulunmaksızın üçüncü kişilerle paylaşılmaz, satılmaz veya kiralanmaz. Veriler yalnızca yasal zorunluluk hâllerinde yetkili kamu kurum ve kuruluşlarıyla, hizmet aldığımız altyapı sağlayıcılarıyla (barındırma, analitik vb.) ve mevzuata uygun şekilde paylaşılabilir.",
        ],
      },
      {
        heading: "Veri Güvenliği",
        body: [
          "Verilerinizin yetkisiz erişime, kayba veya kötüye kullanıma karşı korunması için uygun teknik ve idari tedbirler alınmaktadır. İnternet üzerinden yapılan hiçbir veri aktarımının %100 güvenli olmadığını hatırlatır, makul düzeyde en yüksek korumayı sağlamak için çalıştığımızı belirtiriz.",
        ],
      },
      {
        heading: "Haklarınız ve İletişim",
        body: [
          "Kişisel verilerinize ilişkin haklarınız hakkında ayrıntılı bilgiye KVKK Aydınlatma Metni'nden ulaşabilirsiniz. Gizlilik uygulamalarımızla ilgili sorularınız için info@spmedya.com adresinden bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },

  kvkk: {
    id: "kvkk",
    title: "KVKK Aydınlatma Metni",
    updated: "21 Ağustos 2026",
    sections: [
      {
        body: [
          "6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla Sparkle Medya (“Şirket”) tarafından kişisel verileriniz aşağıda açıklanan kapsamda işlenebilecektir.",
          "Veri Sorumlusu: Sparkle Medya — Maslak Mah. Meydan Sok. Spring Giz Plaza No: 5 Kat: 17 Sarıyer / İSTANBUL",
        ],
      },
      {
        heading: "İşlenen Kişisel Veriler",
        body: ["Web sitemiz aracılığıyla aşağıdaki kişisel verileriniz işlenebilmektedir:"],
        list: [
          "Kimlik ve iletişim bilgileri: ad-soyad, e-posta adresi,",
          "Müşteri işlem bilgileri: marka/şirket bilgisi, iletişim formu mesaj içeriği,",
          "İşlem güvenliği ve teknik veriler: IP adresi, tarayıcı ve cihaz bilgileri, çerez kayıtları.",
        ],
      },
      {
        heading: "İşleme Amaçları",
        body: ["Kişisel verileriniz KVKK'nın 5. ve 6. maddelerinde belirtilen şartlar dâhilinde;"],
        list: [
          "İletişim faaliyetlerinin yürütülmesi ve taleplerin karşılanması,",
          "Mal ve hizmet satış ile pazarlama süreçlerinin yürütülmesi,",
          "İş faaliyetlerinin ve iş sürekliliğinin sağlanması,",
          "Bilgi güvenliği süreçlerinin yürütülmesi,",
          "Yetkili kişi, kurum ve kuruluşlara bilgi verilmesi",
        ],
      },
      {
        body: ["amaçlarıyla sınırlı olarak işlenmektedir."],
      },
      {
        heading: "Aktarım",
        body: [
          "Kişisel verileriniz; yukarıda sayılan amaçların gerçekleştirilmesi için gerekli olduğu ölçüde, hizmet alınan tedarikçilere (barındırma, e-posta, analitik hizmetleri vb.) ve kanunen yetkili kamu kurumlarına, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak aktarılabilir.",
        ],
      },
      {
        heading: "Toplama Yöntemi ve Hukuki Sebep",
        body: [
          "Kişisel verileriniz, web sitemizdeki formlar ve çerezler aracılığıyla elektronik ortamda; sözleşmenin kurulması veya ifası, meşru menfaat ve açık rıza hukuki sebeplerine dayanılarak toplanmaktadır.",
        ],
      },
      {
        heading: "KVKK'nın 11. Maddesi Kapsamındaki Haklarınız",
        body: ["Kişisel veri sahibi olarak;"],
        list: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
          "İşlenmişse buna ilişkin bilgi talep etme,",
          "İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,",
          "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,",
          "Eksik veya yanlış işlenmişse düzeltilmesini isteme,",
          "KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme,",
          "Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
          "Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
          "Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
        ],
      },
      {
        body: [
          "haklarına sahipsiniz. Taleplerinizi, kimliğinizi tevsik edici belgelerle birlikte info@spmedya.com e-posta adresine veya yukarıdaki posta adresimize yazılı olarak iletebilirsiniz. Başvurularınız, talebin niteliğine göre en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır.",
        ],
      },
    ],
  },

  cerez: {
    id: "cerez",
    title: "Çerez Politikası",
    updated: "21 Ağustos 2026",
    sections: [
      {
        body: [
          "Sparkle Medya olarak web sitemizde (www.spmedya.com) çerezlerden (cookies) yararlanıyoruz. Bu politika, hangi çerezleri hangi amaçlarla kullandığımızı ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklamaktadır.",
        ],
      },
      {
        heading: "Çerez Nedir?",
        body: [
          "Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Sitenin düzgün çalışmasını sağlamak, tercihlerinizi hatırlamak ve site kullanımına ilişkin istatistik üretmek için kullanılırlar.",
        ],
      },
      {
        heading: "Kullandığımız Çerez Türleri",
        list: [
          "Zorunlu çerezler: Sitenin temel işlevlerinin çalışması için gereklidir; çerez tercihlerinizin saklanması bu kapsamdadır ve devre dışı bırakılamaz.",
          "Performans ve analitik çerezleri: Ziyaretçilerin siteyi nasıl kullandığını anonim olarak analiz etmemize yardımcı olur; yalnızca onay vermeniz hâlinde çalıştırılır.",
          "Üçüncü taraf çerezleri: Sitemize gömülü YouTube videoları gibi içerikler, oynatıldıklarında ilgili sağlayıcının çerezlerini yerleştirebilir.",
        ],
      },
      {
        heading: "Çerez Tercihlerinizi Yönetme",
        body: [
          "Sitemizi ilk ziyaretinizde karşınıza çıkan çerez bildirimi üzerinden tercihlerinizi belirtebilirsiniz. Ayrıca tarayıcınızın ayarlarından çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi hâlinde sitenin bazı bölümleri beklendiği gibi çalışmayabilir.",
        ],
      },
      {
        heading: "İletişim",
        body: [
          "Çerez uygulamalarımız hakkında sorularınız için info@spmedya.com adresinden bize ulaşabilirsiniz. Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi için KVKK Aydınlatma Metni'ni inceleyebilirsiniz.",
        ],
      },
    ],
  },
};
