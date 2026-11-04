const navigationEntry = performance.getEntriesByType("navigation")[0];

if (navigationEntry?.type === "reload") {
  if (window.location.hash === "#contact") {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  window.history.scrollRestoration = "manual";
  window.addEventListener(
    "pageshow",
    () => {
      const root = document.documentElement;
      const scrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = scrollBehavior;
    },
    { once: true }
  );
  window.addEventListener(
    "pagehide",
    () => {
      window.history.scrollRestoration = "auto";
    },
    { once: true }
  );
}

// --- HAMBURGERMENY (mobil) ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("is-open");
  hamburger.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
}

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  hamburger.classList.toggle("is-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
});


navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// --- AKTIV LÄNK BASERAT PÅ SCROLL-POSITION ---
const sections = document.querySelectorAll("main section[id]");
const navLinkList = document.querySelectorAll(".nav-link");

function setActiveLink(id) {
  navLinkList.forEach((link) => {
    const isMatch = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isMatch);
  });
}

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  },
  {
    
    rootMargin: "-40% 0px -50% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => navObserver.observe(section));

// --- SCROLL REVEAL ---

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ---  HEADER-SKUGGA VID SCROLL (litet extra) ---
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.style.borderBottomColor =
    window.scrollY > 10 ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)";
});

//---  IMAGE CAROUSEL ---

document.querySelectorAll(".project-carousel").forEach((carousel) => {

    const image = carousel.querySelector(".project-image");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    const images = [
        {
            src: "assets/images/seb-first-page.png",
            alt: "SEB Corporate Banking – Dashboard"
        },
        {
            src: "assets/images/seb-initiator-dash.png",
            alt: "SEB – Betalningshantering"
        },
        {
            src: "assets/images/seb-bank.png",
            alt: "SEB – Attestflöde"
        },
        {
            src: "assets/images/seb-attest.png",
            alt: "SEB – Användarinställningar"
        },
        {
            src: "assets/images/seb-history.png",
            alt: "SEB – Användarinställningar"
        }
    ];

    let currentIndex = 0;

    function showImage(index) {

        currentIndex = (index + images.length) % images.length;

        image.src = images[currentIndex].src;
        image.alt = images[currentIndex].alt;

    }

    // Previous image
    prevBtn.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    // Next image
    nextBtn.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

});