// data/projects.js
// Centralized project data for Ege Şengöz's portfolio
// To add a new project: duplicate an object block and modify the fields.

const projectsData = [
  {
    id: "edgepulse-iot",
    category: "software",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["ESP32", "Arduino", "MQTT", "IoT", "Cloud"],
    year: "2024",
    en: {
      title: "EdgePulse: IoT-Based Non-Invasive Current Monitoring",
      subtitle: "Real-time machine efficiency monitoring via cloud",
      company: "-",
      description: "Designed a system using ESP32/Arduino and current transformers to monitor machine energy consumption and operational status without any hardware modification to existing equipment. Sensor data is transmitted to a cloud interface via MQTT/HTTP protocols, enabling real-time cycle time digitalization and efficiency tracking.",
      highlights: [
        "Non-invasive current sensing — no machine modification required",
        "ESP32 + current transformer hardware stack",
        "MQTT/HTTP cloud data pipeline",
        "Real-time machine cycle time digitalization",
        "Cloud dashboard for efficiency monitoring"
      ],
      categoryLabel: "Software / IoT"
    },
    tr: {
      title: "EdgePulse: IoT Tabanlı İnvazif Olmayan Akım İzleme",
      subtitle: "Bulut üzerinden gerçek zamanlı makine verimliliği izleme",
      company: "-",
      description: "Mevcut ekipmanlarda herhangi bir donanım değişikliği yapmadan makine enerji tüketimini ve çalışma durumunu izlemek için ESP32/Arduino ve akım transformatörleri kullanılarak tasarlanmış bir sistem. Sensör verileri MQTT/HTTP protokolleri aracılığıyla bulut arayüzüne iletilerek gerçek zamanlı çevrim süresi dijitalleştirmesi ve verimlilik takibi sağlanmaktadır.",
      highlights: [
        "İnvazif olmayan akım ölçümü — makine değişikliği gerektirmez",
        "ESP32 + akım transformatörü donanım yığını",
        "MQTT/HTTP bulut veri hattı",
        "Gerçek zamanlı makine çevrim süresi dijitalleştirme",
        "Verimlilik izleme için bulut panosu"
      ],
      categoryLabel: "Yazılım / IoT"
    }
  },
  {
    id: "ai-production-planning",
    category: "software",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "AI", "FCFS", "SPT", "ATC", "Scheduling"],
    year: "2023",
    en: {
      title: "AI-Based Production Planning System",
      subtitle: "Hybrid scheduling algorithm reducing delays by 55%",
      company: "-",
      description: "Created a hybrid production scheduling system combining FCFS (First Come First Serve), SPT (Shortest Processing Time), and ATC (Apparent Tardiness Cost) algorithms for dynamic job scheduling. Deployed at the production line, achieving a 55% improvement in delay times and reducing average delay from 3.25 days to 1.4 days. Delay costs were reduced by 30%.",
      highlights: [
        "Hybrid FCFS + SPT + ATC scheduling algorithm",
        "55% improvement in production delay times",
        "Average delay reduced from 3.25 days to 1.4 days",
        "30% reduction in delay-related costs",
        "Dynamic real-time rescheduling capability"
      ],
      categoryLabel: "Software / Industrial"
    },
    tr: {
      title: "Yapay Zeka Tabanlı Üretim Planlama Sistemi",
      subtitle: "Gecikmeleri %55 azaltan hibrit çizelgeleme algoritması",
      company: "-",
      description: "Dinamik iş çizelgeleme için FCFS (İlk Gelen İlk Hizmet), SPT (En Kısa İşlem Süresi) ve ATC (Görünür Gecikme Maliyeti) algoritmalarını birleştiren hibrit bir üretim çizelgeleme sistemi oluşturuldu. Üretim hattında devreye alınan sistem, gecikme sürelerinde %55 iyileşme sağladı ve ortalama gecikmeyi 3,25 günden 1,4 güne düşürdü. Gecikme maliyetleri %30 azaltıldı.",
      highlights: [
        "Hibrit FCFS + SPT + ATC çizelgeleme algoritması",
        "Üretim gecikme sürelerinde %55 iyileşme",
        "Ortalama gecikme 3,25 günden 1,4 güne düşürüldü",
        "Gecikme kaynaklı maliyetlerde %30 azalma",
        "Dinamik gerçek zamanlı yeniden çizelgeleme kapasitesi"
      ],
      categoryLabel: "Yazılım / Endüstriyel"
    }
  },
  {
    id: "adjustable-curved-roller",
    category: "mechanical",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["SolidWorks", "Ansys", "FEA", "Mechanical Design", "R&D"],
    year: "2022",
    en: {
      title: "Adjustable Curved Roller Design",
      subtitle: "Turkey's first original adjustable curved roller / sprinkle remover",
      company: "-",
      description: "Developed Turkey's first original adjustable curved roller design using SolidWorks and Ansys FEA. The design provided an innovative solution by reducing the need of spare parts in the plastic film industry ",
      highlights: [
        "First original design of its kind in Turkey",
        "SolidWorks 3D modeling + Ansys FEA validation",
      ],
      categoryLabel: "Mechanical Design"
    },
    tr: {
      title: "Ayarlanabilir Açıcı Merdane Tasarımı",
      subtitle: "Özgün Tasarıma sahip ayarlanabilir ",
      company: "-",
      description: "SolidWorks ve Ansys FEA kullanılarak Türkiye'de ilk orijinal ayarlanabilir kavisli merdane tasarımı geliştirildi. Tasarım, plastik film sektöründe yedek parça ihtiyacını azaltarak yenilikçi bir çözüm sağladı.",
      highlights: [
        "Türkiye'de türünün ilk orijinal tasarımı",
        "SolidWorks 3D modelleme + Ansys FEA doğrulama",
      ],
      categoryLabel: "Mekanik Tasarım"
    }
  },
  {
    id: "suitcase-assembly-machines",
    category: "mechanical",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["SolidWorks", "Ansys", "Assembly Line", "Thermoforming", "DFM"],
    year: "2025",
    en: {
      title: "Custom Machine Designs for Suitcase Assembly Line",
      subtitle: "3 mechanical systems targeting 12–18% labor time reduction",
      company: "-",
      description: "Designed 3 different mechanical systems specifically for suitcase assembly and thermoforming production lines. All designs were developed using SolidWorks and validated with Ansys FEA. The systems are currently in prototype testing phase, targeting a 12–18% reduction in labor time across the assembly process.",
      highlights: [
        "3 custom mechanical system designs",
        "Suitcase assembly + thermoforming line applications",
        "SolidWorks design + Ansys FEA validation",
        "Targeting 12–18% labor time reduction",
        "Currently in prototype testing phase"
      ],
      categoryLabel: "Mechanical Design"
    },
    tr: {
      title: "Montaj Hattı için Özel Makine Tasarımları",
      subtitle: "İşçilik süresini %12–18 azaltmayı sağlayan mekanik sistemler",
      company: "-",
      description: "Montaj ve termoform üretim hatları için özel olarak 3 farklı mekanik sistem tasarlandı. Tüm tasarımlar SolidWorks kullanılarak geliştirildi ve Ansys FEA ile doğrulandı. Sistemler şu anda prototip test aşamasında olup montaj sürecinde %12–18 işçilik süresi azaltımı hedeflenmektedir.",
      highlights: [
        "3 özel mekanik sistem tasarımı",
        "SolidWorks tasarım + Ansys FEA doğrulama",
        "%12–18 işçilik süresi azaltımı hedefi",
      ],
      categoryLabel: "Mekanik Tasarım"
    }
  },
  {
    id: "production-data-app",
    category: "software",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["AppSheet", "Excel VBA", "Mobile App", "Production Analytics"],
    year: "2025",
    en: {
      title: "Daily Production Data Analysis & Reporting Mobile App",
      subtitle: "AppSheet-based mobile app for real-time production analytics",
      company: "-",
      description: "Developed a prototype mobile application using AppSheet and Excel-based logic for daily production data analysis and reporting. The app provides real-time graphical reports for daily production output, scrap rates, and efficiency metrics. Currently in active use; future updates will include logistics tracking and production planning modules.",
      highlights: [
        "AppSheet + Excel VBA mobile application",
        "Real-time graphical production reports",
        "Daily output, scrap rate, and efficiency tracking",
        "Currently in active production use",
        "Planned: logistics tracking + planning modules"
      ],
      categoryLabel: "Software / Industrial"
    },
    tr: {
      title: "Günlük Üretim Verisi Analiz ve Raporlama Mobil Uygulaması",
      subtitle: "Gerçek zamanlı üretim analitiği için AppSheet tabanlı mobil uygulama",
      company: "-",
      description: "Günlük üretim verisi analizi ve raporlaması için AppSheet ve Excel tabanlı mantık kullanılarak prototip bir mobil uygulama geliştirildi. Uygulama, günlük üretim çıktısı, hurda oranları ve verimlilik metrikleri için gerçek zamanlı grafiksel raporlar sunmaktadır. Şu anda aktif kullanımda; gelecek güncellemeler lojistik takip ve üretim planlama modüllerini içerecek.",
      highlights: [
        "AppSheet + Excel VBA mobil uygulaması",
        "Gerçek zamanlı grafiksel üretim raporları",
        "Günlük çıktı, hurda oranı ve verimlilik takibi",
        "Şu anda aktif üretim kullanımında",
        "Planlanan: lojistik takip + planlama modülleri"
      ],
      categoryLabel: "Yazılım / Endüstriyel"
    }
  },
  {
    id: "maliyetanaliiz",
    category: "software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Excel VBA", "Sustainability", "Cost Analysis", "BOM", "Carbon Footprint"],
    year: "2024",
    en: {
      title: "BOM-Based Costing & Sustainability App (MaliyetAnaliz)",
      subtitle: "Automated project costing and carbon footprint tracking",
      company: "-",
      description: "Calculates total project and subcontractor costs by systematically extracting and processing components directly from BOM (Bill of Materials) lists. Analyzes and reports on raw material weight percentages and project carbon footprints to actively support sustainable manufacturing practices.",
      highlights: [
        "BOM-based automatic cost extraction",
        "Raw material weight percentage analysis",
        "Carbon footprint calculation per project",
        "Subcontractor cost tracking",
        "Sustainability reporting for manufacturing"
      ],
      categoryLabel: "Software / Industrial"
    },
    tr: {
      title: "BOM Tabanlı Maliyet & Sürdürülebilirlik Uygulaması (MaliyetAnaliz)",
      subtitle: "Otomatik proje maliyetlendirme ve karbon ayak izi takibi",
      company: "-",
      description: "BOM (Malzeme Listesi) listelerinden bileşenleri sistematik olarak çıkararak ve işleyerek toplam proje ve alt yüklenici maliyetlerini hesaplar. Ham madde ağırlık yüzdelerini ve proje karbon ayak izlerini analiz ederek sürdürülebilir imalat uygulamalarını aktif olarak destekler.",
      highlights: [
        "BOM tabanlı otomatik maliyet çıkarımı",
        "Ham madde ağırlık yüzdesi analizi",
        "Proje başına karbon ayak izi hesaplama",
        "Alt yüklenici maliyet takibi",
        "İmalat için sürdürülebilirlik raporlaması"
      ],
      categoryLabel: "Yazılım / Endüstriyel"
    }
  },
  {
    id: "hermetic-librarian",
    category: "software",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "RAG", "AI", "NLP", "LangChain"],
    year: "2024",
    en: {
      title: "RAG-Powered Historical AI Persona (Hermetic Librarian)",
      subtitle: "Philosophical text processing AI chatbot",
      company: "-",
      description: "Utilizes Retrieval-Augmented Generation (RAG) models to accurately emulate the conversational styles and philosophies of historical writers and thinkers. Processes complex philosophical texts to provide in-depth, persona-driven responses to user inquiries.",
      highlights: [
        "RAG-based historical persona emulation",
        "Philosophical text processing",
        "Context-aware conversational AI",
        "Deep analysis of classical texts",
        "Custom knowledge base integration"
      ],
      categoryLabel: "Software / AI"
    },
    tr: {
      title: "RAG Destekli Tarihsel Yapay Zeka Kişiliği (Hermetic Librarian)",
      subtitle: "Felsefi metin işleme AI sohbet robotu",
      company: "-",
      description: "Tarihsel yazarların ve düşünürlerin konuşma tarzlarını ve felsefelerini doğru bir şekilde taklit etmek için Retrieval-Augmented Generation (RAG) modellerini kullanır. Kullanıcı sorularına kişilik odaklı derin yanıtlar sağlamak için karmaşık felsefi metinleri işler.",
      highlights: [
        "RAG tabanlı tarihsel kişilik taklidi",
        "Felsefi metin işleme",
        "Bağlam duyarlı konuşmacı AI",
        "Klasik metinlerin derin analizi",
        "Özel bilgi tabanı entegrasyonu"
      ],
      categoryLabel: "Yazılım / Yapay Zeka"
    }
  },
  {
    id: "file-organizer",
    category: "software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "Google Drive API", "Enterprise", "PDF Management", "Automation"],
    year: "2024",
    en: {
      title: "Enterprise PDF & File Organization System (FileOrganizer)",
      subtitle: "Automated enterprise document management",
      company: "-",
      description: "Manages and organizes PDF files across local directories and cloud-based Google Drive environments at an enterprise scale. Automates document sorting and categorization to significantly streamline corporate file management workflows.",
      highlights: [
        "Local + Google Drive integration",
        "Automated PDF categorization",
        "Enterprise-scale document management",
        "Custom sorting rules",
        "Workflow automation"
      ],
      categoryLabel: "Software / Enterprise"
    },
    tr: {
      title: "Kurumsal PDF & Dosya Organizasyon Sistemi (FileOrganizer)",
      subtitle: "Otomatik kurumsal doküman yönetimi",
      company: "-",
      description: "Kurumsal ölçekte yerel dizinlerde ve bulut tabanlı Google Drive ortamlarında PDF dosyalarını yönetir ve düzenler. Doküman sınıflandırma ve kategorilendirmeyi otomatikleştirerek kurumsal dosya yönetimi iş akışlarını önemli ölçüde kolaylaştırır.",
      highlights: [
        "Yerel + Google Drive entegrasyonu",
        "Otomatik PDF kategorilendirme",
        "Kurumsal ölçekte doküman yönetimi",
        "Özel sınıflandırma kuralları",
        "İş akışı otomasyonu"
      ],
      categoryLabel: "Yazılım / Kurumsal"
    }
  },
  {
    id: "drive-assist",
    category: "software",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "LangChain", "LangGraph", "AES Encryption", "Local AI"],
    year: "2024",
    en: {
      title: "AI-Powered Secure Local File Organization (Drive Assist)",
      subtitle: "Privacy-first intelligent file management",
      company: "-",
      description: "Leverages LangChain and LangGraph for natural language-driven file and folder organization locally, ensuring complete privacy with no cloud dependency. Features AES encryption at rest, secure audit logging, and a stateful architecture requiring strict human-in-the-loop approval for destructive operations.",
      highlights: [
        "LangChain + LangGraph integration",
        "Complete local privacy (no cloud)",
        "AES encryption at rest",
        "Secure audit logging",
        "Human-in-the-loop approval workflow"
      ],
      categoryLabel: "Software / Security"
    },
    tr: {
      title: "Yapay Zeka Destekli Güvenli Yerel Dosya Organizasyonu (Drive Assist)",
      subtitle: "Gizlilik öncelikli akıllı dosya yönetimi",
      company: "-",
      description: "Yerel olarak doğal dil tabanlı dosya ve klasör organizasyonu için LangChain ve LangGraph'u kullanır, bulut bağımlılığı olmadan tam gizlilik sağlar. AES şifreleme, güvenli denetim günlüğü ve yıkıcı işlemler için katı insan-döngü onayı gerektiren durumlu mimari özellikleri içerir.",
      highlights: [
        "LangChain + LangGraph entegrasyonu",
        "Tam yerel gizlilik (bulut yok)",
        "AES şifreleme",
        "Güvenli denetim günlüğü",
        "İnsan-döngü onay iş akışı"
      ],
      categoryLabel: "Yazılım / Güvenlik"
    }
  },
  {
    id: "arge-kanban",
    category: "software",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "Flask", "Kanban", "R&D", "Enterprise"],
    year: "2023",
    en: {
      title: "Enterprise R&D Task Distribution (ArGe Kanban)",
      subtitle: "Engineering team workload management",
      company: "-",
      description: "Local-hosted Kanban application designed specifically for enterprise-level tracking and management of internal R&D team workloads. Facilitates transparent task assignment, workflow observation, and agile project execution for engineering teams.",
      highlights: [
        "Local-hosted enterprise Kanban",
        "R&D team workload management",
        "Transparent task assignment",
        "Agile workflow support",
        "Engineering team optimization"
      ],
      categoryLabel: "Software / Enterprise"
    },
    tr: {
      title: "Kurumsal Ar-Ge Görev Dağılımı (ArGe Kanban)",
      subtitle: "Mühendislik ekibi iş yükü yönetimi",
      company: "-",
      description: "Dahili Ar-Ge ekibi iş yüklerinin kurumsal düzeyde izlenmesi ve yönetimi için özel olarak tasarlanmış yerel barındırılan Kanban uygulaması. Mühendislik ekipleri için şeffaf görev ataması, iş akışı gözlemi ve çevik proje yürütmesini kolaylaştırır.",
      highlights: [
        "Yerel barındırılan kurumsal Kanban",
        "Ar-Ge ekibi iş yükü yönetimi",
        "Şeffaf görev ataması",
        "Çevik iş akışı desteği",
        "Mühendislik ekibi optimizasyonu"
      ],
      categoryLabel: "Yazılım / Kurumsal"
    }
  },
  {
    id: "synccore",
    category: "software",
    image: "https://images.unsplash.com/photo-1555949963-aa9d8c4a9fb4?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Python", "OpenCV", "SHA-256", "Version Control", "Manufacturing"],
    year: "2023",
    en: {
      title: "Manufacturing Revision Control Engine (SyncCore)",
      subtitle: "Visual version verification for production",
      company: "-",
      description: "Addresses enterprise data discrepancies by comparing files via SHA-256 hash identity and OpenCV/PyMuPDF visual pixel-to-pixel analysis. Operates under a strict human-in-the-loop constraint, identifying version clusters and visually highlighting discrepancies with red bounding boxes.",
      highlights: [
        "SHA-256 hash-based comparison",
        "OpenCV pixel-to-pixel analysis",
        "Visual discrepancy highlighting",
        "Human-in-the-loop verification",
        "Version cluster identification"
      ],
      categoryLabel: "Software / Industrial"
    },
    tr: {
      title: "İmalat Revizyon Kontrol Motoru (SyncCore)",
      subtitle: "Üretim için görsel sürüm doğrulama",
      company: "-",
      description: "Dosyaları SHA-256 karma kimlik ve OpenCV/PyMuPDF görsel piksel-piksel analiz ile karşılaştırarak kurumsal veri tutarsızlıklarını giderir. Sürüm kümelerini belirleyen ve tutarsızlıkları kırmızı sınırlayıcı kutularla görsel olarak vurgulayan katı insan-döngü kısıtlaması altında çalışır.",
      highlights: [
        "SHA-256 karma tabanlı karşılaştırma",
        "OpenCV piksel-piksel analiz",
        "Görsel tutarsızlık vurgulama",
        "İnsan-döngü doğrulama",
        "Sürüm kümesi tanımlama"
      ],
      categoryLabel: "Yazılım / Endüstriyel"
    }
  },
  {
    id: "ai-erp-assistant",
    category: "software",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    fallbackImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["FastAPI", "Python", "Odoo", "OneDrive", "Docker", "AI"],
    year: "2023",
    en: {
      title: "Enterprise AI Assistant & ERP Integration",
      subtitle: "AI-powered business process automation",
      company: "-",
      description: "An advanced AI assistant built on FastAPI, integrating Odoo (via XML-RPC), Microsoft OneDrive, and PageIndex (Vectorless RAG). Features a fully dockerized architecture, allowing for seamless deployment, environment consistency, and hot-reloading.",
      highlights: [
        "FastAPI-based AI assistant",
        "Odoo ERP integration (XML-RPC)",
        "Microsoft OneDrive integration",
        "PageIndex Vectorless RAG",
        "Fully dockerized deployment"
      ],
      categoryLabel: "Software / Enterprise"
    },
    tr: {
      title: "Kurumsal Yapay Zeka Asistanı & ERP Entegrasyonu",
      subtitle: "AI destekli iş süreci otomasyonu",
      company: "-",
      description: "Odoo (XML-RPC aracılığıyla), Microsoft OneDrive ve PageIndex (Vectorless RAG) entegrasyonu ile FastAPI üzerine inşa edilmiş gelişmiş bir AI asistanı. Sorunsuz dağıtım, ortam tutarlılığı ve hot-reloading'e izin veren tam dockerize mimari özellikleri içerir.",
      highlights: [
        "FastAPI tabanlı AI asistanı",
        "Odoo ERP entegrasyonu (XML-RPC)",
        "Microsoft OneDrive entegrasyonu",
        "PageIndex Vectorless RAG",
        "Tam dockerize dağıtım"
      ],
      categoryLabel: "Yazılım / Kurumsal"
    }
  }
];
