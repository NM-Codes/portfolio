# ENEM — My Portfolio

> *“I didn't replace my problem-solving. I just got new tools.”*

My personal portfolio, redesigned and rebuilt from my first version. It tells the story of my move from several years in customer service and technical support into full-stack JavaScript development, and presents the projects and skills I have developed along the way.

This new version is more than a visual refresh. I rethought the experience to make it clearer, more spacious and easier to use across devices, while giving visitors a choice of Swedish or English and light or dark mode.

## The story behind the redesign

My first portfolio was an important starting point. As I gained experience and built more projects, I wanted a portfolio that better reflected how I approach problems and the direction I am taking as a developer. I rebuilt the site around the work I want to show: the projects, the decisions behind them, and the experience I bring from working directly with customers.

I chose plain HTML, CSS and vanilla JavaScript for this portfolio because it is a focused, static website. Those tools let me build the complete experience without adding a framework or build system that the project does not need. The result is lightweight, quick to load and straightforward to understand, while still giving me room to create responsive layouts, themes, language switching and interactive navigation.

## What you will find here

- **Hero:** An introduction, location, current studies, availability, CV download and contact link.
- **Projects:** Selected work with a short description, technologies and a live demo or source-code link.
- **Tech stack:** A visual overview of tools and technologies I use, including HTML, CSS, JavaScript, TypeScript, React, React Native, Tailwind, Node.js, Express, MongoDB and Git.
- **Experience:** My studies at Chas Academy, my LIA placement at Mentoris Solutions AB, and my customer-facing work at Teleperformance on assignments for Telia and IKEA.
- **About me:** More about my move into development, interest in frontend and UX/UI, and ongoing cybersecurity studies.
- **Contact:** A direct email link and links to GitHub and LinkedIn.

## Featured projects

| Project | What it is | Stack | Links |
|---|---|---|---|
| **SEB Corporate Banking** | Business banking experience for payments, dashboards and approval workflows. | React, TypeScript, .NET | [Code](https://github.com/chas-challenge-2026/seb-net-team1) |
| **Virebo Property** | Responsive property platform with listings and services. | React, TypeScript, Node.js | [Demo](https://nm-codes.github.io/virebo-property/) · [Code](https://github.com/NM-Codes/virebo-property) |
| **Productivity System** | Task planning, Pomodoro focus sessions and progress tracking. | React, JavaScript, CSS | [Demo](https://nm-codes.github.io/prod-system/) · [Code](https://github.com/NM-Codes/prod-system/tree/dev) |
| **Nexora** | Recruitment platform with candidate workflows and dedicated workspaces. | React, TypeScript, Supabase | [Demo](https://nm-codes.github.io/nexora/inloggning) |

## Design and experience

- **Light and dark themes:** Separate visual palettes and artwork, with the selected theme remembered in the browser.
- **Swedish and English:** Language selection updates page content, accessibility labels, section names, browser-tab title and URL fragments. The selected language also determines which CV is downloaded.
- **Responsive layouts:** Navigation, project cards, experience and the technology row are designed to work across desktop and mobile screens.
- **Section-aware navigation:** The active navigation link follows the section in view; the tab title and readable URL fragment update to match.
- **Motion with care:** Smooth scrolling and reveal animations are balanced with support for `prefers-reduced-motion`.
- **Accessibility:** Semantic page structure, descriptive image text, labelled controls and accessible menu states.
- **Visual identity:** Fraunces for headings and Inter for body text, with fonts served by Google Fonts.

## How I built it

- **HTML5** provides the semantic page structure and project content.
- **CSS3** handles the visual system, responsive layouts, reusable custom properties and light/dark themes using Grid, Flexbox and media queries.
- **Vanilla JavaScript** powers language and theme selection, browser preference persistence, section-aware navigation, dynamic page titles and scroll-reveal effects.

Translations live in separate Swedish and English files rather than being duplicated throughout the page markup. This keeps the content organised and lets the site update visible copy and related page details together when a visitor changes language.
