// data/resources.js
// Engineering templates and tools. Set `status: "ready"` and add `file`
// (a path under /public/downloads/) once a resource can be downloaded.

const resourcesData = [
  {
    id: "solidworks-macros", type: "tool", formats: ["VBA", "SolidWorks"], status: "draft",
    en: { title: "SolidWorks automation macro pack", desc: "VBA macros that extract the BOM from an assembly tree and automate drawing revision workflows." },
    tr: { title: "SolidWorks otomasyon makro paketi", desc: "Montaj ağacından BOM çıkaran ve teknik resim revizyon akışını otomatikleştiren VBA makroları." }
  },
  {
    id: "ims-audit-toolkit", type: "checklist", formats: ["Excel", "PDF"], status: "draft",
    en: { title: "Integrated management system audit toolkit", desc: "Internal audit checklists and a risk matrix covering ISO 9001, 14001 and 45001 together." },
    tr: { title: "Entegre yönetim sistemi denetim seti", desc: "ISO 9001, 14001 ve 45001'i birlikte kapsayan iç denetim kontrol listeleri ve risk matrisi." }
  },
  {
    id: "bom-costing-lite", type: "template", formats: ["Excel"], status: "draft",
    en: { title: "BOM costing and carbon footprint (lite)", desc: "Calculates project cost and an ISO 14064-aligned carbon footprint from the same bill of materials." },
    tr: { title: "BOM maliyet ve karbon ayak izi (lite)", desc: "Aynı malzeme listesinden proje maliyetini ve ISO 14064 uyumlu karbon ayak izini hesaplar." }
  },
  {
    id: "fmea-template", type: "template", formats: ["Excel"], status: "draft",
    en: { title: "AIAG-VDA FMEA template", desc: "DFMEA and PFMEA worksheets with an action tracker." },
    tr: { title: "AIAG-VDA FMEA şablonu", desc: "Aksiyon takipli DFMEA ve PFMEA çalışma sayfaları." }
  },
  {
    id: "8d-template", type: "template", formats: ["Excel", "Word"], status: "draft",
    en: { title: "8D problem-solving template", desc: "Eight-discipline corrective action report, from team and containment to prevention." },
    tr: { title: "8D problem çözme şablonu", desc: "Ekip ve geçici önlemden kalıcı önlemeye kadar sekiz disiplinli düzeltici faaliyet raporu." }
  },
  {
    id: "ppap-checklist", type: "checklist", formats: ["Excel"], status: "draft",
    en: { title: "PPAP submission checklist", desc: "The 18 PPAP elements with owner, status and evidence columns." },
    tr: { title: "PPAP sunum kontrol listesi", desc: "Sorumlu, durum ve kanıt sütunlarıyla 18 PPAP elemanı." }
  },
  {
    id: "vsm-toolkit", type: "tool", formats: ["Excel"], status: "draft",
    en: { title: "Lean VSM toolkit", desc: "Value stream mapping sheet with a takt time calculator." },
    tr: { title: "Yalın VSM araç seti", desc: "Takt süresi hesaplayıcılı değer akışı haritalama sayfası." }
  },
  {
    id: "gdt-workbook", type: "guide", formats: ["PDF"], status: "draft",
    en: { title: "GD&T reference workbook", desc: "Quick reference for geometric dimensioning and tolerancing symbols and datums." },
    tr: { title: "GD&T başvuru kitapçığı", desc: "Geometrik boyutlandırma ve toleranslandırma sembolleri ve referansları için hızlı başvuru." }
  },
  {
    id: "appsheet-framework", type: "template", formats: ["AppSheet"], status: "draft",
    en: { title: "AppSheet production tracking template", desc: "Starter app for daily output, scrap and efficiency tracking, based on one in daily use." },
    tr: { title: "AppSheet üretim takip şablonu", desc: "Günlük çıktı, fire ve verimlilik takibi için başlangıç uygulaması; sahada kullanılan bir uygulamadan türetildi." }
  },
  {
    id: "matlab-guide", type: "guide", formats: ["MATLAB"], status: "draft",
    en: { title: "MATLAB for manufacturing engineers", desc: "Scripts for production data analysis and simple optimisation problems." },
    tr: { title: "İmalat mühendisleri için MATLAB", desc: "Üretim verisi analizi ve basit optimizasyon problemleri için betikler." }
  },
  {
    id: "market-scraping-kit", type: "tool", formats: ["Python"], status: "draft",
    en: { title: "Industrial price monitoring kit", desc: "BeautifulSoup and Selenium scripts for tracking supplier and raw material prices." },
    tr: { title: "Endüstriyel fiyat izleme kiti", desc: "Tedarikçi ve hammadde fiyatlarını takip etmek için BeautifulSoup ve Selenium betikleri." }
  }
];

window.resourcesData = resourcesData;
