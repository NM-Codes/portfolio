const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

navLinks.setAttribute("aria-hidden", String(window.innerWidth <= 680));

function setMenuOpen(isOpen) {
  navLinks.classList.toggle("is-open", isOpen);
  hamburger.classList.toggle("is-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute("aria-label", isOpen ? "Stäng meny" : "Öppna meny");
  navLinks.setAttribute("aria-hidden", String(!isOpen && window.innerWidth <= 680));
}

hamburger.addEventListener("click", () => {
  setMenuOpen(hamburger.getAttribute("aria-expanded") !== "true");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
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

const navLinkList = [...document.querySelectorAll(".nav-link")];
const observedSections = navLinkList
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinkList.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  observedSections.forEach((section) => navObserver.observe(section));

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
