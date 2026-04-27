(function () {
  const STORAGE_KEY = "portfolio_lang";
  const NAV_TRANSLATIONS = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_blog: "Blog",
      nav_solutions: "Solutions",
      nav_resources: "Resources",
      nav_contact: "Contact"
    },
    tr: {
      nav_home: "Ana Sayfa",
      nav_about: "Hakkımda",
      nav_projects: "Projeler",
      nav_blog: "Blog",
      nav_solutions: "Çözümler",
      nav_resources: "Kaynaklar",
      nav_contact: "İletişim"
    }
  };

  let pageTranslations = { en: {}, tr: {} };
  let currentLang = loadInitialLang();
  const listeners = new Set();
  let revealObserver = null;
  let skillObserver = null;

  function loadInitialLang() {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "tr" ? "tr" : "en";
  }

  function getTranslations(lang = currentLang) {
    return {
      ...NAV_TRANSLATIONS[lang],
      ...(pageTranslations[lang] || {})
    };
  }

  function updateLanguageButtons() {
    const activeStyles = {
      background: "var(--brand-accent)",
      color: "#0b0d10",
      boxShadow: "0 10px 24px rgba(198, 167, 106, 0.28)"
    };
    const passiveStyles = {
      background: "transparent",
      color: "var(--color-text-muted)",
      boxShadow: "none"
    };

    ["btn-en", "btn-tr", "btn-en-mob", "btn-tr-mob"].forEach((id) => {
      const button = document.getElementById(id);
      if (!button) {
        return;
      }

      const isActive = id.includes(currentLang);
      button.style.background = isActive ? activeStyles.background : passiveStyles.background;
      button.style.color = isActive ? activeStyles.color : passiveStyles.color;
      button.style.boxShadow = isActive ? activeStyles.boxShadow : passiveStyles.boxShadow;
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyTranslations() {
    const translations = getTranslations();
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
        element.textContent = translations[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.getAttribute("data-i18n-html");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
        element.innerHTML = translations[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
        element.setAttribute("placeholder", translations[key]);
      }
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const key = element.getAttribute("data-i18n-content");
      if (key && Object.prototype.hasOwnProperty.call(translations, key)) {
        element.setAttribute("content", translations[key]);
      }
    });

    updateLanguageButtons();
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "tr") {
      return;
    }

    currentLang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();

    const translations = getTranslations();
    listeners.forEach((callback) => callback(currentLang, translations));
    document.dispatchEvent(
      new CustomEvent("portfolio:languagechange", {
        detail: { lang: currentLang, translations }
      })
    );
  }

  function getLang() {
    return currentLang;
  }

  function registerPageTranslations(translations) {
    pageTranslations = translations || { en: {}, tr: {} };
    applyTranslations();
  }

  function onLanguageChange(callback, options = {}) {
    if (typeof callback !== "function") {
      return () => {};
    }

    listeners.add(callback);

    if (options.immediate !== false) {
      callback(currentLang, getTranslations());
    }

    return () => listeners.delete(callback);
  }

  function createResourcesLink(isMobile) {
    const link = document.createElement("a");
    const isActive = window.location.pathname.endsWith("resources_value_added_downloads.html");

    link.href = "resources_value_added_downloads.html";
    link.setAttribute("data-i18n", "nav_resources");
    link.textContent = currentLang === "tr" ? "Kaynaklar" : "Resources";

    if (isMobile) {
      link.className = isActive ? "text-primary font-medium" : "text-secondary font-medium";
    } else {
      link.className = isActive
        ? "text-primary font-medium border-b-2"
        : "text-secondary font-medium hover:text-primary transition-colors";
      if (isActive) {
        link.style.borderColor = "var(--brand-accent)";
      }
    }

    return link;
  }

  function ensureResourcesLink() {
    const nav = document.querySelector("nav");
    if (!nav) {
      return;
    }

    const desktopContact = nav.querySelector(".hidden.md\\:flex a[href='contact.html']");
    if (desktopContact) {
      const existingDesktopLink = nav.querySelector(".hidden.md\\:flex a[href='resources_value_added_downloads.html']");
      if (!existingDesktopLink) {
        desktopContact.before(createResourcesLink(false));
      }
    }

    const mobileMenu = document.getElementById("mobile-menu");
    const mobileContact = mobileMenu ? mobileMenu.querySelector("a[href='contact.html']") : null;
    if (mobileContact && !mobileMenu.querySelector("a[href='resources_value_added_downloads.html']")) {
      mobileContact.before(createResourcesLink(true));
    }
  }

  function setupMobileMenu() {
    const menuButton = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuButton || !mobileMenu || menuButton.dataset.bound === "true") {
      return;
    }

    menuButton.dataset.bound = "true";
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  function setupScrollReveal(options = {}) {
    const selector = options.selector || ".scroll-reveal";
    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) {
      return;
    }

    if (revealObserver) {
      revealObserver.disconnect();
    }

    const threshold = options.threshold ?? 0.12;
    const stagger = options.stagger ?? 70;

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const delay = Number(entry.target.dataset.revealDelay || 0);
          window.setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);

          revealObserver.unobserve(entry.target);
        });
      },
      { threshold }
    );

    elements.forEach((element, index) => {
      if (!element.dataset.revealDelay) {
        element.dataset.revealDelay = String(index * stagger);
      }
      revealObserver.observe(element);
    });
  }

  function setupSkillBars(selector = ".skill-fill") {
    const fills = Array.from(document.querySelectorAll(selector));
    if (!fills.length) {
      return;
    }

    if (skillObserver) {
      skillObserver.disconnect();
    }

    skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const targetWidth = entry.target.dataset.width || "0%";
          entry.target.style.width = targetWidth;
          skillObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );

    fills.forEach((fill) => {
      fill.style.width = "0%";
      skillObserver.observe(fill);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    ensureResourcesLink();
    setupMobileMenu();
    applyTranslations();
  });

  window.PortfolioApp = {
    getLang,
    getTranslations,
    setLang,
    registerPageTranslations,
    onLanguageChange,
    setupMobileMenu,
    setupScrollReveal,
    setupSkillBars
  };

  window.setLang = setLang;
})();
