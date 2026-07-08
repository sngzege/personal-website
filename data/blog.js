const blogPosts = [
  {
    id: "edgepulse-field-notes",
    category: "wip",
    featured: true,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Apr 2026",
    readTime: { en: "6 min read", tr: "6 dk" },
    status: { en: "Work in Progress", tr: "Çalışma Aşamasında" },
    statusClass: "status-wip",
    tags: ["IoT", "MQTT", "ESP32", "Python"],
    en: {
      title: "EdgePulse Field Notes: Non-Invasive Machine Signals to a Simple Dashboard",
      excerpt: "A practical set of notes on turning raw machine signals into operational visibility: what to capture, how to transport it reliably, and how to keep the dashboard honest." 
    },
    tr: {
      title: "EdgePulse Saha Notları: Müdahalesiz Makine Sinyallerinden Basit Bir Panoya",
      excerpt: "Ham makine sinyallerinden operasyonel görünürlük üretmeye dair pratik notlar: neyi toplamalı, veriyi nasıl güvenle taşımalı ve panoyu nasıl ‘doğru’ tutmalı." 
    }
  },
  {
    id: "iso-audit-prep",
    category: "news",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Mar 2026",
    readTime: { en: "4 min read", tr: "4 dk" },
    status: { en: "Industry Notes", tr: "Sektör Notları" },
    statusClass: "status-news",
    tags: ["ISO 9001", "QMS", "Audits"],
    en: {
      title: "ISO Audit Readiness Without Over-Documentation",
      excerpt: "How to keep a QMS audit-ready while staying lean: evidence, ownership, and the small habits that reduce surprises." 
    },
    tr: {
      title: "Aşırı Dokümantasyona Kaçmadan ISO Denetime Hazır Kalmak",
      excerpt: "Yalın kalırken denetime hazır bir QMS’i nasıl tutarsın: kanıt, sahiplik ve sürprizleri azaltan küçük alışkanlıklar." 
    }
  },
  {
    id: "fixture-thinking",
    category: "wip",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/159298/pexels-photo-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Mar 2026",
    readTime: { en: "5 min read", tr: "5 dk" },
    status: { en: "Work in Progress", tr: "Çalışma Aşamasında" },
    statusClass: "status-wip",
    tags: ["SolidWorks", "DFM", "Fixtures"],
    en: {
      title: "Designing Fixtures for Small-Batch Reality",
      excerpt: "A checklist-style approach to fixture design: repeatability, quick changeovers, tolerance stack-ups, and what usually breaks first." 
    },
    tr: {
      title: "Küçük Parti Gerçeğine Uygun Fikstür Tasarlamak",
      excerpt: "Fikstür tasarımına kontrol listesi gibi yaklaşmak: tekrarlanabilirlik, hızlı değişim, tolerans zinciri ve genelde ilk neyin koptuğu." 
    }
  },
  {
    id: "scheduling-heuristics",
    category: "idea",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/1181296/pexels-photo-1181296.jpeg",
    date: "Feb 2026",
    readTime: { en: "6 min read", tr: "6 dk" },
    status: { en: "Idea", tr: "Fikir" },
    statusClass: "status-idea",
    tags: ["Scheduling", "FCFS", "SPT", "ATC"],
    en: {
      title: "Scheduling Heuristics That Work on Monday Morning",
      excerpt: "A pragmatic look at what matters in real production scheduling: constraints, data quality, and when ‘optimal’ is the wrong goal." 
    },
    tr: {
      title: "Pazartesi Sabahı İşe Yaran Çizelgeleme Yaklaşımları",
      excerpt: "Gerçek üretim planlamasında neyin önemli olduğuna pratik bir bakış: kısıtlar, veri kalitesi ve ‘optimum’un yanlış hedef olduğu anlar." 
    }
  },
  {
    id: "appsheets-toolkits",
    category: "update",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Feb 2026",
    readTime: { en: "3 min read", tr: "3 dk" },
    status: { en: "Update", tr: "Güncelleme" },
    statusClass: "status-update",
    tags: ["AppSheet", "Data", "Reporting"],
    en: {
      title: "Internal Apps That People Actually Use",
      excerpt: "Notes on building simple internal tools: clear ownership, minimal friction, and reporting that matches how teams work." 
    },
    tr: {
      title: "Ekiplerin Gerçekten Kullandığı İç Uygulamalar",
      excerpt: "Basit iç araçlar geliştirmeye dair notlar: net sahiplik, minimum sürtünme ve ekibin çalışma biçimine uyan raporlama." 
    }
  },
  {
    id: "quality-ai-assist",
    category: "idea",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "Jan 2026",
    readTime: { en: "5 min read", tr: "5 dk" },
    status: { en: "Idea", tr: "Fikir" },
    statusClass: "status-idea",
    tags: ["Quality", "FMEA", "AI"],
    en: {
      title: "AI as a Quality Assistant (Not a Decision Maker)",
      excerpt: "Where AI helps in quality workflows: drafting, brainstorming, and consistency checks — and where human judgment stays non-negotiable." 
    },
    tr: {
      title: "Kalitede Yapay Zekâ: Asistan Evet, Karar Verici Hayır",
      excerpt: "Kalite işlerinde yapay zekânın faydalı olduğu yerler: taslak, beyin fırtınası, tutarlılık kontrolü — ve insan muhakemesinin vazgeçilmez olduğu noktalar." 
    }
  }
];

