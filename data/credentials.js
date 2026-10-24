// data/credentials.js
// Certifications. Rendered on the home page (summary) and the portfolio page (full list).
// To add one: append to `isoLeadAuditor` or `credentials`.

const isoLeadAuditor = [
  { code: "9001", year: "2015", en: "Quality", tr: "Kalite" },
  { code: "14001", year: "2015", en: "Environment", tr: "Çevre" },
  { code: "45001", year: "2018", en: "Health & safety", tr: "İSG" },
  { code: "50001", year: "2018", en: "Energy", tr: "Enerji" },
  { code: "22000", year: "2018", en: "Food safety", tr: "Gıda güvenliği" },
  { code: "27001", year: "2022", en: "Information security", tr: "Bilgi güvenliği" }
];

// group: "quality" | "management" | "security"
const credentials = [
  {
    group: "quality", standard: "IATF 16949", issuer: "",
    en: { name: "Automotive quality management system" },
    tr: { name: "Otomotiv kalite yönetim sistemi" }
  },
  {
    group: "management", standard: "", issuer: "",
    en: { name: "Production planning and manufacturing engineering management" },
    tr: { name: "Üretim planlama ve imalat mühendisliği yöneticiliği" }
  },
  {
    group: "security", standard: "", issuer: "BTK Akademi",
    en: { name: "Introduction to cyber security" },
    tr: { name: "Siber güvenliğe giriş" }
  },
  {
    group: "security", standard: "", issuer: "BTK Akademi",
    en: { name: "Web application security and penetration testing" },
    tr: { name: "Web uygulama güvenliği ve sızma testi" }
  },
  {
    group: "security", standard: "", issuer: "BTK Akademi",
    en: { name: "Kali Linux" },
    tr: { name: "Kali Linux" }
  },
  {
    group: "security", standard: "", issuer: "Cisco Networking Academy",
    en: { name: "Introduction to Cybersecurity" },
    tr: { name: "Introduction to Cybersecurity" }
  }
];

const credentialGroups = {
  quality: { en: "Quality", tr: "Kalite" },
  management: { en: "Management", tr: "Yönetim" },
  security: { en: "Cyber security", tr: "Siber güvenlik" }
};

function renderCredentials(isoHost, listHost, lang) {
  const esc = window.PortfolioApp.escapeHtml;
  if (isoHost) {
    isoHost.innerHTML = isoLeadAuditor.map((iso) =>
      `<div class="iso"><span class="iso__code num">ISO ${iso.code}<span class="iso__year">:${iso.year}</span></span><span class="iso__area">${esc(iso[lang] || iso.en)}</span></div>`
    ).join("");
  }
  if (listHost) {
    listHost.innerHTML = credentials.map((c) => {
      const d = c[lang] || c.en;
      const group = credentialGroups[c.group] ? credentialGroups[c.group][lang] : "";
      const right = c.standard || c.issuer || group;
      return `<li class="cred"><span class="cred__name">${esc(d.name)}</span><span class="cred__std">${esc(right)}</span></li>`;
    }).join("");
  }
}

function renderCredentialGroups(host, lang) {
  const esc = window.PortfolioApp.escapeHtml;
  host.innerHTML = Object.keys(credentialGroups).map((g) => {
    const items = credentials.filter((c) => c.group === g);
    if (!items.length) return "";
    const rows = items.map((c) => {
      const d = c[lang] || c.en;
      const sub = [c.standard, c.issuer].filter(Boolean).join(" · ");
      return `<li class="cred"><span class="cred__name">${esc(d.name)}</span>${sub ? `<span class="cred__std">${esc(sub)}</span>` : ""}</li>`;
    }).join("");
    return `<div class="cred-group"><h3 class="h-card">${esc(credentialGroups[g][lang])}</h3><ul class="cred-list">${rows}</ul></div>`;
  }).join("");
}

window.renderCredentialGroups = renderCredentialGroups;
window.isoLeadAuditor = isoLeadAuditor;
window.credentials = credentials;
window.credentialGroups = credentialGroups;
window.renderCredentials = renderCredentials;
