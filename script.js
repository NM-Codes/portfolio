const translations = window.portfolioTranslations;
const sectionTargets = {
  home: document.querySelector(".hero"),
  projects: document.querySelector(".projects-section"),
  experience: document.querySelector(".experience-section"),
  about: document.querySelector(".experience-intro"),
  contact: document.querySelector(".contact-section"),
};
const navLinks = document.getElementById("navLinks");
const navLinkList = [...document.querySelectorAll(".nav-link")];
const hamburger = document.getElementById("hamburger");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("span");
const themeColor = document.querySelector('meta[name="theme-color"]');
const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = [...document.querySelectorAll("[data-language-option]")];
const languageLabel = document.getElementById("languageLabel");
const cvDownload = document.getElementById("cvDownload");
const descriptionMeta = document.querySelector('meta[name="description"]');
const languageForSlug = new Map(
  Object.entries(translations).flatMap(([language, content]) =>
    Object.values(content.slugs).map((slug) => [slug, language])
  )
);
const legacySectionKeys = {
  hero: "home",
  projectGrid: "projects",
  experience: "experience",
  about: "about",
  contact: "contact",
};

let currentLanguage = window.localStorage.getItem("portfolio-language");
if (currentLanguage !== "sv" && currentLanguage !== "en") {
  currentLanguage = languageForSlug.get(window.location.hash.slice(1)) || "sv";
}

function getSectionKeyFromHash() {
  const hash = window.location.hash.slice(1);
  return Object.keys(sectionTargets).find((key) => translations[currentLanguage].slugs[key] === hash)
    || legacySectionKeys[hash]
    || "home";
}

function setTheme(theme) {
  const isDark = theme === "dark";
  const labels = translations[currentLanguage];
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? labels.themeLight : labels.themeDark);
  themeToggle.title = isDark ? labels.themeLight : labels.themeDark;
  themeIcon.textContent = isDark ? "☼" : "☾";
  themeColor.content = isDark ? "#11100f" : "#f7eee7";
}

function updateActiveSection(key, updateHash = false) {
  navLinkList.forEach((link) => {
    link.classList.toggle("active", link.dataset.sectionKey === key);
  });
  document.title = `ENEM | ${translations[currentLanguage].sectionTitles[key]}`;
  if (updateHash) {
    const slug = translations[currentLanguage].slugs[key];
    if (window.location.hash !== `#${slug}`) {
      window.history.replaceState(null, "", `#${slug}`);
    }
  }
}

function setLanguage(language, updateHash = true) {
  const activeSection = navLinkList.find((link) => link.classList.contains("active"))?.dataset.sectionKey
    || getSectionKeyFromHash();
  currentLanguage = language;
  const labels = translations[language];

  document.documentElement.lang = language === "en" ? "en-GB" : "sv";
  document.documentElement.dataset.language = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = labels[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = labels[element.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", labels[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = labels[element.dataset.i18nAlt];
  });

  Object.entries(sectionTargets).forEach(([key, target]) => {
    target.id = labels.slugs[key];
  });
  navLinkList.forEach((link) => {
    link.href = `#${labels.slugs[link.dataset.sectionKey]}`;
  });
  document.querySelectorAll(".logo, .footer-brand").forEach((link) => {
    link.href = `#${labels.slugs.home}`;
  });

  languageLabel.textContent = language === "sv" ? "SV" : "EN";
  languageToggle.querySelector("[aria-hidden='true']").textContent = language === "sv" ? "🇸🇪" : "🇬🇧";
  languageToggle.setAttribute("aria-label", labels.languageSelectorLabel);
  cvDownload.href = labels.cvPath;
  cvDownload.download = labels.cvFilename;
  languageOptions.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.languageOption === language));
  });
  descriptionMeta.content = labels.description;
  setTheme(document.documentElement.dataset.theme);
  updateActiveSection(activeSection, updateHash);
  window.localStorage.setItem("portfolio-language", language);
}

setLanguage(currentLanguage, false);
setTheme(window.localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light");

function setLanguageMenuOpen(isOpen) {
  languageToggle.setAttribute("aria-expanded", String(isOpen));
  languageMenu.hidden = !isOpen;
}

languageToggle.addEventListener("click", () => {
  setLanguageMenuOpen(languageMenu.hidden);
});
languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setLanguage(option.dataset.languageOption);
    setLanguageMenuOpen(false);
    languageToggle.focus();
  });
});
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem("portfolio-theme", nextTheme);
  setTheme(nextTheme);
});

navLinks.setAttribute("aria-hidden", String(window.innerWidth <= 680));
function setMenuOpen(isOpen) {
  navLinks.classList.toggle("is-open", isOpen);
  hamburger.classList.toggle("is-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? translations[currentLanguage].closeMenu : translations[currentLanguage].openMenu);
  navLinks.setAttribute("aria-hidden", String(!isOpen && window.innerWidth <= 680));
}

hamburger.addEventListener("click", () => {
  setMenuOpen(hamburger.getAttribute("aria-expanded") !== "true");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
    updateActiveSection(link.dataset.sectionKey);
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    if (!languageMenu.hidden) {
      setLanguageMenuOpen(false);
      languageToggle.focus();
    }
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-selector")) setLanguageMenuOpen(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    navLinks.setAttribute("aria-hidden", "false");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.classList.remove("is-open");
    navLinks.classList.remove("is-open");
  } else {
    navLinks.setAttribute("aria-hidden", String(hamburger.getAttribute("aria-expanded") !== "true"));
  }
});
window.addEventListener("hashchange", () => updateActiveSection(getSectionKeyFromHash()));

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveSection(entry.target.dataset.section, true);
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );
  Object.entries(sectionTargets).forEach(([key, section]) => {
    section.dataset.section = key;
    navObserver.observe(section);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}
