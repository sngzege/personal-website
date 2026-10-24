// data/credentials.js
// Certifications shown on the home page (and later a dedicated section).
// To add one: append an object to `credentials` (or an ISO code to `isoLeadAuditor`).

const isoLeadAuditor = [
  { code: "9001", en: "Quality", tr: "Kalite" },
  { code: "14001", en: "Environment", tr: "Çevre" },
  { code: "45001", en: "Health & safety", tr: "İSG" },
  { code: "50001", en: "Energy", tr: "Enerji" },
  { code: "22000", en: "Food safety", tr: "Gıda güvenliği" },
  { code: "27001", en: "Information security", tr: "Bilgi güvenliği" }
];

const credentials = [
  {
    standard: "IATF 16949",
    en: { name: "Automotive quality management system", note: "" },
    tr: { name: "Otomotiv kalite yönetim sistemi", note: "" }
  },
  {
    standard: "ISO 14064-1",
    en: { name: "Greenhouse gas / carbon footprint verification", note: "" },
    tr: { name: "Sera gazı / karbon ayak izi doğrulama", note: "" }
  },
  {
    standard: "ISO 14046",
    en: { name: "Water footprint assessment", note: "" },
    tr: { name: "Su ayak izi değerlendirmesi", note: "" }
  },
  {
    standard: "",
    en: { name: "Manufacturing & production planning management", note: "" },
    tr: { name: "İmalat ve üretim planlama yönetimi", note: "" }
  }
];

window.isoLeadAuditor = isoLeadAuditor;
window.credentials = credentials;
