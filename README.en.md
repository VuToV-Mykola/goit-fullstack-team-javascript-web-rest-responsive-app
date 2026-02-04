# ArtistsHub

### 🌐 Choose your language

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) | [🇩🇪 Deutsch](README.de.md)

<!-- AUTOGEN:STATS -->
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) [![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-fullstack-team-javascript-web-rest-responsive-app/blob/main/LICENSE)

## 📸 Project screenshot
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

---

## 📌 Project name

**ArtistsHub** — responsive web app (landing page) based on the Figma design. GoIT Fullstack team project (JavaScript, REST, responsive).

---

## 🎯 About the project and what problem it solves

- **About:** Single-page responsive site built from HTML partials and modular CSS files, following the [ArtistsHub (Figma)](https://www.figma.com/design/knhOfrwUVhgwEznVU8lTKL/ArtistsHub--Copy-?node-id=5999-10563) mockup.
- **Purpose:** Presenting a platform (hub) for artists: info blocks, gallery, advantages, testimonials, contacts. Implemented with mobile-first approach, semantic markup, valid HTML/CSS/JS, and convenient run/build via Vite.

---

## 🛠 Technologies

| Category | Stack |
|----------|-------|
| Markup | HTML5, semantic tags |
| Styles | CSS3, modern-normalize, mobile-first, [Stylelint](https://stylelint.io/user-guide/rules) |
| Scripts | JavaScript (ES modules) |
| Build | Vite, PostCSS (sort media queries), vite-plugin-html-inject, vite-plugin-full-reload |
| Other | [Code Guide](https://codeguide.co/), W3C / JSHint validators |

---

## 🚀 How to run and deploy

1. **Clone the repo and go to the project folder:**
   ```bash
   cd goit-fullstack-team-javascript-web-rest-responsive-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Browser will open (e.g. `http://localhost:5173/`).

4. **Build for production:**
   ```bash
   npm run build
   ```
   Output is in the `dist/` folder.

5. **Preview the build locally:**
   ```bash
   npm run preview
   ```

---

## 📁 Project structure (partials and CSS according to ArtistsHub mockup)

Sections and files are aligned with the [ArtistsHub (Figma)](https://www.figma.com/design/knhOfrwUVhgwEznVU8lTKL/ArtistsHub--Copy-?node-id=5999-10563) design:

```
goit-fullstack-team-javascript-web-rest-responsive-app/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── css/
│   │   ├── styles.css      # main entry, imports all partials
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── container.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── advantages.css
│   │   ├── assortment.css
│   │   ├── gallery.css
│   │   ├── feedbacks.css
│   │   ├── support.css
│   │   └── footer.css
│   ├── partials/
│   │   ├── header.html
│   │   ├── hero.html
│   │   ├── about.html
│   │   ├── advantages.html
│   │   ├── assortment.html
│   │   ├── gallery.html
│   │   ├── feedbacks.html
│   │   ├── support.html
│   │   └── footer.html
│   ├── js/
│   │   └── modal.js
│   └── img/
├── assets/
├── package.json
├── vite.config.js
├── README.md
├── README.en.md
└── README.de.md
```

**Mockup section mapping:**

| Mockup section | Partial | CSS |
|----------------|---------|-----|
| Header | `header.html` | `header.css` |
| Hero | `hero.html` | `hero.css` |
| About | `about.html` | `about.css` |
| Advantages | `advantages.html` | `advantages.css` |
| Assortment | `assortment.html` | `assortment.css` |
| Gallery | `gallery.html` | `gallery.css` |
| Feedbacks | `feedbacks.html` | `feedbacks.css` |
| Support | `support.html` | `support.css` |
| Footer | `footer.html` | `footer.css` |

---

## ✅ Validation and code quality

- HTML: [validator.w3.org](https://validator.w3.org/)
- CSS: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
- JavaScript: [jshint.com](https://jshint.com/)

---

## 🔗 Related links

- **Project mockup:** [ArtistsHub (Figma)](https://www.figma.com/design/knhOfrwUVhgwEznVU8lTKL/ArtistsHub--Copy-?node-id=5999-10563)
- **Task spec:** [Google Sheets — tasks and links](https://docs.google.com/spreadsheets/d/1Uvu-7uy1_HQ4jsMbWwIXgQjs5-V_K20vWAkZrS13QIE/edit?usp=sharing)
- **Team project materials (JS Fullstack):** [Google Slides presentation](https://docs.google.com/presentation/d/1t0l_qImtmiewNc0ZY3J5ll5_ySuybEDZ/edit?usp=sharing)

**Links from the team project presentation:**

- **Team workflow:** [Trello screencast](https://youtu.be/dm89LgP2I9M), [Trello guide](https://docs.google.com/document/d/1wR1uYEhxoSm43gW45d57Zv76eR0poCK435Ghe28oo8A/edit?usp=sharing), [team principles playlist](https://youtube.com/playlist?list=PLViULGko0FdhgRVatH8770k3zRG3Ke5t7), [principles presentation](https://docs.google.com/presentation/d/1umIvCoRwtW_TIc4s3bpzYd9nn1VCdfGUBYsOwC84cPg/edit?usp=sharing), [Scrum Poker](https://www.scrumpoker-online.org/)
- **Planning:** [project work plan](https://docs.google.com/document/d/1H1BlZAyJJZfjchq9EC2ry34y42dt6sxl3jg7fP_RRLQ/edit)
- **GitHub and repo:** [project template (vanilla-app-template)](https://github.com/goitacademy/vanilla-app-template), [“GitHub + terminal” screencast](https://www.loom.com/share/f85971ae4a5d43f7b5e5ad7b2ba9c6bc), [“Working with the repo” playlist](https://www.youtube.com/playlist?list=PLViULGko0FdhZ99yYnqB64F_4nVyvOPH5)
- **Technical requirements:** [requirements doc](https://docs.google.com/document/d/13GKky-k-pcfEhhFWO4SjyitzPBat258rJEkfj6mivjc/edit), [how to submit in LMS](https://youtu.be/9Ts2LBsdQfU)
- **Project defense:** [presentation checklist and templates](https://docs.google.com/document/d/1cboEr4YJlNMf7ZXdGUqnUIuCSa5jrDTDxbK2vdfOv9o/edit)

- **README editors:** [readme.so](https://readme.so/editor), [dillinger.io](https://dillinger.io/)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)  
- [Code Guide](https://codeguide.co/)
