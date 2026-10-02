# dayarathna-apps

<p>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firebase Hosting" />
</p>

Static application catalogue website for Shashika Dayarathna, deployed at [apps.dayarathna.com](https://apps.dayarathna.com).

## Scope

This repository contains only the catalogue, documentation, and discovery pages. Each featured application source code lives in its own standalone repository (e.g., `power-plan-switcher`, `SystemMate`, `GameBooster`, `DevAtlas`, `ai-companion`, `wife-passwords`). This repository does not commit compiled binaries or installer packages.

## Stack

| Area | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Static site generation and routing |
| Language | TypeScript 5.8 | Strict type checking and data contracts |
| Styling | Tailwind CSS v4 & custom CSS | Celestial styling matching dayarathna.com |
| Output | Static HTML (`output: 'export'`) | Static asset export to `out/` |
| Hosting | Firebase Hosting | Targeted deployment to `shashika-dev-apps` |

## Run locally

Prerequisites: Node.js 20+ and npm.

```sh
# Clone repository
git clone https://github.com/shashika-mora/dayarathna-apps.git
cd dayarathna-apps

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open `http://localhost:3000` in your browser.

## Validate

```sh
# Run TypeScript compilation check
npm run typecheck

# Run ESLint validation
npm run lint

# Generate production static export
npm run build
```

The static site export will be generated in the `out/` directory.

## Catalogue data

All application records are managed strictly in `src/data/apps.ts` through the typed `AppItem` contract defined in `src/data/types.ts`.

To add or update an application:
1. Open `src/data/apps.ts`.
2. Add a new entry conforming to `AppItem` (specifying `id`, `slug`, `name`, `tagline`, `description`, `category`, `platforms`, `status`, `techStack`, `features`, `installation`, `requirements`, and `sourceUrl`).
3. If release binaries exist, set `downloadAvailable: true` and specify `downloadUrl`. Otherwise, set `downloadAvailable: false` and describe the release status in `downloadNote`.
4. Run `npm run typecheck && npm run build` to verify route generation at build time.

## Deployment

Deployments target only the dedicated `apps` hosting site on project `shashika-dev`:

```sh
npx firebase-tools deploy --only hosting:apps --project shashika-dev
```

## About the maintainer

Maintained by Shashika Dayarathna. Main portfolio: [https://dayarathna.com](https://dayarathna.com).
