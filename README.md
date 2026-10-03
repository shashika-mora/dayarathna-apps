# dayarathna-apps

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase Hosting" />
</p>

Static application catalogue website for Shashika Dayarathna, deployed at [apps.dayarathna.com](https://apps.dayarathna.com).

## Scope

This repository contains only the catalogue, documentation, and discovery pages. Each featured application source code lives in its own standalone repository (e.g., `power-plan-switcher`, `SystemMate`, `GameBooster`, `DevAtlas`, `ai-companion`, `wife-passwords`). This repository does not commit compiled binaries or installer packages.

## Stack

| Area | Technology | Purpose |
| --- | --- | --- |
| Markup | Semantic HTML5 | Clean, fast, dependency-free static structure |
| Styling | Pure CSS3 (`style.css`) | Celestial design system matching `dayarathna.com` |
| Interactivity | Vanilla JavaScript (`script.js`) | Search, filtering, modal dialog, and canvas particle physics |
| Graphics | HTML5 Canvas | 5-arm pinwheel galaxy and starfield physics |
| Hosting | Firebase Hosting | Targeted deployment to `shashika-dev-apps` (`hosting:apps`) |

## Run locally

Zero build tools or npm dependencies are required. Any local static server or file preview can be used:

```sh
# Using python built-in server
python -m http.server 8000

# Or using npx serve
npx serve .
```

Open `http://localhost:8000` in your browser.

## Catalogue data

Application catalogue records are structured cleanly in `index.html` and the rich data dictionary inside `script.js`. Dedicated standalone deep-link pages are maintained in `apps/<slug>/index.html`.

## Deployment

Deployments target only the dedicated `apps` hosting site on project `shashika-dev`:

```sh
npx firebase-tools deploy --only hosting:apps --project shashika-dev
```

## About the maintainer

Maintained by Shashika Dayarathna. Main portfolio: [https://dayarathna.com](https://dayarathna.com).
