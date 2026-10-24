(function () {
  const STORAGE_KEY = "portfolio_lang";

  /* Shared strings: navigation, header, footer --------------------------- */
  const SHARED = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_portfolio: "Portfolio",
      nav_solutions: "Solutions",
      nav_resources: "Resources",
      nav_contact: "Contact",
      nav_menu: "Menu",
      brand_tag: "MFG ENG · IST",
      footer_role: "Manufacturing engineer · R&D, production systems and industrial software",
      footer_location: "Istanbul, Türkiye",
      footer_rights: "All rights reserved.",
      footer_top: "Back to top",
      view_project: "View project",
      lang_label: "Language",
      // Employer names are kept generic on the public site.
      org_now: "Metal fabrication · urban furniture",
      org_luggage: "Luggage manufacturing · thermoforming",
      org_roller: "Machining · industrial rollers"
    },
    tr: {
      nav_home: "Ana Sayfa",
      nav_about: "Hakkımda",
      nav_projects: "Projeler",
      nav_portfolio: "Portföy",
      nav_solutions: "Çözümler",
      nav_resources: "Kaynaklar",
      nav_contact: "İletişim",
      nav_menu: "Menü",
      brand_tag: "İMALAT MÜH · IST",
      footer_role: "İmalat mühendisi · Ar-Ge, üretim sistemleri ve endüstriyel yazılım",
      footer_location: "İstanbul, Türkiye",
      footer_rights: "Tüm hakları saklıdır.",
      footer_top: "Başa dön",
      view_project: "Projeyi incele",
      lang_label: "Dil",
      org_now: "Metal işleme · kent mobilyası",
      org_luggage: "Bavul üretimi · termoform",
      org_roller: "Talaşlı imalat · endüstriyel merdane"
    }
  };

  const NAV_ITEMS = [
    { key: "home", href: "home.html" },
    { key: "about", href: "about.html" },
    { key: "portfolio", href: "portfolio.html" },
    { key: "solutions", href: "engineering-solutions.html" },
    { key: "resources", href: "resources_value_added_downloads.html" }
  ];

  let pageTranslations = { en: {}, tr: {} };
  let currentLang = loadInitialLang();
  const listeners = new Set();

  /* Storage (can throw in private windows) -------------------------------- */
  function readStorage(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStorage(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  function loadInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    if (fromUrl === "tr" || fromUrl === "en") return fromUrl;
    const saved = readStorage(STORAGE_KEY);
    if (saved === "tr" || saved === "en") return saved;
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("tr") ? "tr" : "en";
  }

  function getTranslations(lang = currentLang) {
    return { ...SHARED[lang], ...(pageTranslations[lang] || {}) };
  }

  function t(key) {
    const all = getTranslations();
    return Object.prototype.hasOwnProperty.call(all, key) ? all[key] : key;
  }

  /* Translation pass ------------------------------------------------------ */
  function applyTranslations() {
    const translations = getTranslations();
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) el.textContent = translations[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) el.innerHTML = translations[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) el.setAttribute("placeholder", translations[key]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) el.setAttribute("content", translations[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) el.setAttribute("aria-label", translations[key]);
    });

    const titleKey = document.body && document.body.getAttribute("data-title-key");
    if (titleKey && translations[titleKey]) document.title = translations[titleKey];

    updateLanguageButtons();
  }

  function updateLanguageButtons() {
    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === currentLang));
    });
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "tr") return;
    currentLang = lang;
    writeStorage(STORAGE_KEY, lang);
    applyTranslations();
    const translations = getTranslations();
    listeners.forEach((cb) => cb(currentLang, translations));
    document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { lang: currentLang, translations } }));
  }

  function getLang() { return currentLang; }

  function registerPageTranslations(translations) {
    pageTranslations = translations || { en: {}, tr: {} };
    applyTranslations();
  }

  function onLanguageChange(callback, options = {}) {
    if (typeof callback !== "function") return () => {};
    listeners.add(callback);
    if (options.immediate !== false) callback(currentLang, getTranslations());
    return () => listeners.delete(callback);
  }

  /* Shared chrome (v2 pages) --------------------------------------------- */
  const ICON_MENU = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  function langSwitch() {
    return `<div class="lang-switch" role="group" data-i18n-aria="lang_label" aria-label="Language">
      <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
      <button type="button" data-set-lang="tr" aria-pressed="false">TR</button>
    </div>`;
  }

  function renderHeader(host) {
    const active = document.body.getAttribute("data-page") || "";
    const links = NAV_ITEMS.map((item) =>
      `<a class="nav__link" href="${item.href}" data-i18n="nav_${item.key}"${item.key === active ? ' aria-current="page"' : ""}>${t("nav_" + item.key)}</a>`
    ).join("");
    const mobileLinks = NAV_ITEMS.concat([{ key: "contact", href: "contact.html" }]).map((item) =>
      `<a href="${item.href}" data-i18n="nav_${item.key}"${item.key === active ? ' aria-current="page"' : ""}>${t("nav_" + item.key)}</a>`
    ).join("");

    host.classList.add("site-header");
    host.innerHTML = `
      <div class="wrap">
        <div class="site-header__inner">
          <a class="brand" href="home.html" aria-label="Ege Şengöz — home">
            <span class="brand__name">Ege Şengöz</span>
            <span class="brand__tag" data-i18n="brand_tag">${t("brand_tag")}</span>
          </a>
          <nav class="nav" aria-label="Primary">${links}</nav>
          <div class="header-actions">
            ${langSwitch()}
            <a class="btn btn--primary btn--sm" href="contact.html" data-i18n="nav_contact">${t("nav_contact")}</a>
            <button type="button" class="menu-btn" aria-expanded="false" aria-controls="mobile-nav" data-i18n-aria="nav_menu" aria-label="Menu">${ICON_MENU}</button>
          </div>
        </div>
        <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile" hidden>
          ${mobileLinks}
          ${langSwitch()}
        </nav>
      </div>`;

    const btn = host.querySelector(".menu-btn");
    const panel = host.querySelector("#mobile-nav");
    btn.addEventListener("click", () => {
      const open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  function renderFooter(host) {
    const year = new Date().getFullYear();
    host.classList.add("site-footer");
    host.innerHTML = `
      <div class="wrap">
        <div class="site-footer__grid">
          <div class="stack-sm" style="max-width:420px">
            <a class="brand" href="home.html"><span class="brand__name">Ege Şengöz</span></a>
            <p data-i18n="footer_role">${t("footer_role")}</p>
            <p data-i18n="footer_location">${t("footer_location")}</p>
          </div>
          <nav class="site-footer__links" aria-label="Footer">
            <a href="about.html" data-i18n="nav_about">${t("nav_about")}</a>
            <a href="portfolio.html" data-i18n="nav_portfolio">${t("nav_portfolio")}</a>
            <a href="engineering-solutions.html" data-i18n="nav_solutions">${t("nav_solutions")}</a>
            <a href="resources_value_added_downloads.html" data-i18n="nav_resources">${t("nav_resources")}</a>
            <a href="contact.html" data-i18n="nav_contact">${t("nav_contact")}</a>
            <a href="https://www.linkedin.com/in/ege-sengoz-a92713226/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/sngzege" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
        <div class="site-footer__base">
          <span>© ${year} Ege Şengöz. <span data-i18n="footer_rights">${t("footer_rights")}</span></span>
          <a href="#top" data-i18n="footer_top">${t("footer_top")}</a>
        </div>
      </div>`;
  }

  function renderChrome() {
    const header = document.querySelector("[data-site-header]");
    const footer = document.querySelector("[data-site-footer]");
    if (header) renderHeader(header);
    if (footer) renderFooter(footer);
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-set-lang]");
      if (btn) setLang(btn.getAttribute("data-set-lang"));
    });
  }

  /* Project cards (shared by home and projects pages) --------------------- */
  const GLYPHS = {
    wave: '<path d="M4 40h8l4-14 6 28 6-34 6 24 4-4h22"/><circle cx="56" cy="40" r="3"/><path d="M8 52h48" stroke-dasharray="2 4" opacity=".5"/>',
    gantt: '<path d="M10 12v44M10 56h48"/><rect x="14" y="16" width="18" height="6"/><rect x="26" y="27" width="22" height="6"/><rect x="20" y="38" width="12" height="6"/><rect x="36" y="38" width="16" height="6"/><path d="M44 12v44" stroke-dasharray="2 3" opacity=".6"/>',
    roller: '<path d="M8 40c12-10 36-10 48 0"/><path d="M8 28c12-10 36-10 48 0"/><path d="M8 28v12M56 28v12"/><path d="M2 34h60" stroke-dasharray="6 2 1 2" opacity=".6"/><circle cx="32" cy="34" r="2"/>',
    gear: '<circle cx="32" cy="32" r="10"/><circle cx="32" cy="32" r="3"/><path d="M32 12v6M32 46v6M12 32h6M46 32h6M18 18l4 4M42 42l4 4M46 18l-4 4M18 46l4-4"/>',
    bars: '<path d="M10 56h46"/><rect x="14" y="36" width="7" height="20"/><rect x="26" y="26" width="7" height="30"/><rect x="38" y="30" width="7" height="26"/><path d="M12 30l14-12 12 6 16-12"/>',
    stack: '<rect x="12" y="10" width="40" height="10"/><rect x="18" y="26" width="28" height="10"/><rect x="24" y="42" width="16" height="10"/><path d="M32 20v6M32 36v6"/>',
    graph: '<circle cx="14" cy="18" r="4"/><circle cx="50" cy="14" r="4"/><circle cx="32" cy="34" r="5"/><circle cx="16" cy="50" r="4"/><circle cx="50" cy="48" r="4"/><path d="M17 21l11 10M47 17L35 31M19 47l9-10M46 45l-10-8"/>',
    doc: '<path d="M16 8h22l10 10v38H16z"/><path d="M38 8v10h10"/><path d="M22 30h20M22 38h20M22 46h12"/>',
    lock: '<rect x="14" y="28" width="36" height="26" rx="2"/><path d="M22 28v-8a10 10 0 0 1 20 0v8"/><circle cx="32" cy="40" r="3"/><path d="M32 43v5"/>',
    kanban: '<rect x="8" y="10" width="14" height="44"/><rect x="25" y="10" width="14" height="44"/><rect x="42" y="10" width="14" height="44"/><path d="M11 16h8M11 22h8M28 16h8M45 16h8M45 22h8M45 28h8"/>',
    diff: '<rect x="8" y="12" width="20" height="28"/><rect x="36" y="24" width="20" height="28"/><path d="M28 26h8M32 22l4 4-4 4"/><path d="M12 20h12M12 26h8M40 32h12M40 38h8"/>',
    link: '<rect x="8" y="22" width="18" height="20" rx="2"/><rect x="38" y="22" width="18" height="20" rx="2"/><path d="M26 28h12M26 36h12"/><path d="M14 30h6M44 30h6M44 36h6"/>'
  };

  function glyphSvg(name) {
    const body = GLYPHS[name] || GLYPHS.gear;
    return `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${body}</svg>`;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function projectCard(project, lang) {
    const data = project[lang] || project.en;
    const metric = project.metric || {};
    const domainLabel = (window.projectDomains && window.projectDomains[project.domain]) ? window.projectDomains[project.domain][lang] : data.categoryLabel;
    const org = data.company && data.company !== "-" ? data.company : "";
    const meta = [org, project.year].filter(Boolean).join(" · ");
    const tags = (project.tags || []).slice(0, 3).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("");
    const photo = project.photo ? `<img src="${escapeHtml(project.photo)}" alt="" loading="lazy" />` : "";
    return `
      <a class="pcard" href="project-detail.html?id=${encodeURIComponent(project.id)}">
        <div class="pcard__cover">
          ${photo}
          <span class="pcard__domain">${escapeHtml(domainLabel)}</span>
          <div class="pcard__metric">
            <span class="pcard__metric-value">${escapeHtml(metric.value || "")}</span>
            <span class="pcard__metric-label">${escapeHtml(metric[lang] || "")}</span>
          </div>
          <div class="pcard__glyph">${glyphSvg(project.glyph)}</div>
        </div>
        <div class="pcard__body">
          <h3 class="h-card">${escapeHtml(data.title)}</h3>
          <p class="pcard__summary">${escapeHtml(data.description)}</p>
          <div class="chips">${tags}</div>
          <div class="pcard__foot">
            <span class="pcard__meta">${escapeHtml(meta)}</span>
            <span class="link-arrow">${escapeHtml(SHARED[lang].view_project)} ${ICON_ARROW}</span>
          </div>
        </div>
      </a>`;
  }

  /* Contact helpers -------------------------------------------------------- */
  const CONTACT_EMAIL = "info@egesengoz.com";

  function mailtoHref(subject, body) {
    const q = [];
    if (subject) q.push("subject=" + encodeURIComponent(subject));
    if (body) q.push("body=" + encodeURIComponent(body));
    return "mailto:" + CONTACT_EMAIL + (q.length ? "?" + q.join("&") : "");
  }

  // Forms on this static site don't post anywhere: they compose an email in
  // the visitor's mail app. `build(form)` returns { subject, body }.
  function bindMailForm(form, build) {
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const { subject, body } = build(form);
      window.location.href = mailtoHref(subject, body);
    });
  }

  function bindCopyButtons(root = document) {
    root.querySelectorAll("[data-copy]").forEach((btn) => {
      if (btn.dataset.bound) return;
      btn.dataset.bound = "1";
      btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-copy");
        const done = () => {
          const label = btn.textContent;
          btn.textContent = currentLang === "tr" ? "Kopyalandı" : "Copied";
          window.setTimeout(() => { btn.textContent = label; }, 1600);
        };
        const fallback = () => {
          const target = document.getElementById(btn.getAttribute("data-copy-target") || "");
          if (target) {
            const range = document.createRange();
            range.selectNodeContents(target);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, fallback);
        } else {
          fallback();
        }
      });
    });
  }

  // Content stays visible at rest; reveal only adds a short entrance for
  // elements that start below the fold.
  function setupScrollReveal(options = {}) {
    const selector = options.selector || ".scroll-reveal";
    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: options.threshold ?? 0.12 });
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("visible");
      else observer.observe(el);
    });
    // Safety net: never leave content hidden.
    window.setTimeout(() => elements.forEach((el) => el.classList.add("visible")), 2500);
  }

  function setupSkillBars(selector = ".skill-fill") {
    const fills = Array.from(document.querySelectorAll(selector));
    fills.forEach((fill) => { fill.style.width = fill.dataset.width || "0%"; });
  }

  /* Boot ------------------------------------------------------------------ */
  function boot() {
    renderChrome();
    applyTranslations();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  window.PortfolioApp = {
    getLang,
    getTranslations,
    setLang,
    registerPageTranslations,
    onLanguageChange,
    setupScrollReveal,
    setupSkillBars,
    projectCard,
    glyphSvg,
    escapeHtml,
    CONTACT_EMAIL,
    mailtoHref,
    bindMailForm,
    bindCopyButtons
  };
  window.setLang = setLang;
})();
