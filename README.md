# Portfolio

> *"I didn't replace my problem-solving. I just got new tools."*

My personal portfolio, built from scratch with plain HTML, CSS and vanilla JavaScript. It tells the story of my move from several years in customer service and technical support into fullstack JavaScript development, and shows the projects I've built along the way.

The site content is in Swedish. This repository is set up as a monorepo that will evolve toward React, TypeScript and React Native.

## Sections

- **Hero**: introduction and call to action
- **About**: background, studies and what drives me
- **Tech stack**: HTML, CSS, JavaScript, TypeScript, React, React Native, Node.js, Express, MongoDB, Git, GitHub, UX/UI and Figma
- **Projects**: selected work with live demos and source code
- **Experience**: a timeline from education and earlier jobs to my current studies
- **Contact**: email, LinkedIn and GitHub

## Featured projects

| Project | Description | Stack | Links |
| --- | --- | --- | --- |
| **Virebo** | Responsive real-estate website with property listings, services and information pages | React, TypeScript, Tailwind, Node.js, Vite | [Demo](https://nm-codes.github.io/virebo-property/) · [Code](https://github.com/NM-Codes/virebo-property) |
| **Productivity system** | Task planning, focused Pomodoro sessions, and work history with statistics | React, CSS, JavaScript, Vite | [Demo](https://nm-codes.github.io/prod-system/) · [Code](https://github.com/NM-Codes/prod-system/tree/dev) |

## Features

- Dark theme with navy background, purple details and a warm peach accent, defined as CSS custom properties
- Responsive layout with breakpoints for tablet and mobile, including a hamburger menu
- Active navigation link that follows the scroll position (`IntersectionObserver`)
- Scroll-reveal animations, with `prefers-reduced-motion` respected
- Header border that adjusts on scroll
- Semantic HTML, ARIA labels and descriptive alt text
- Fonts: Fraunces (headings) and Inter (body text) from Google Fonts

## Tech stack

- **HTML5** for structure
- **CSS3** for styling (custom properties, grid, flexbox, media queries)
- **Vanilla JavaScript** for interactivity (no frameworks or libraries)

## Project structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── icons/     # social icons
│   ├── images/    # hero illustration, monogram, favicon, project previews
│   └── logos/     # employer and school logos for the timeline
└── README.md
```

## Getting started

No build step is needed.

```bash
git clone https://github.com/NM-Codes/portfolio.git
cd portfolio
```

Open `index.html` in your browser, or serve the folder with a static server such as the VS Code Live Server extension.

## Roadmap

- [x] Page structure and styling
- [x] Interactivity with vanilla JavaScript (mobile menu, active links, scroll reveal)
- [ ] Language toggle (Swedish / English)
- [ ] Migrate to React and TypeScript
- [ ] Extract reusable components
- [ ] Add a React Native version in the same monorepo
