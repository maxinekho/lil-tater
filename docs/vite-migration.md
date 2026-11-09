# Create React App → Vite migration

Based on merged `main` at `46c5ad93c99d86c0cc3a165e1822428acc2c6277`, on branch `chore/migrate-cra-to-vite`. This is a tooling migration; the upcoming Figma specification remains the design source of truth.

## Changes

- Replace `react-scripts` 5.0.1 with Vite 8.3.7 and the official `@vitejs/plugin-react` 6.3.0. Retain Node 24/npm 10 requirements.
- Keep React/ReactDOM 18.3.1, Framer Motion 7.10.3, and Day.js 1.11.13 at the exact versions locked on main. Pin these runtime versions to keep unrelated upgrades out of the migration.
- Rename files containing JSX from `.js` to `.jsx`, retaining the component architecture and compatibility exports in `src/utils/`. Component bodies are unchanged except root-relative sticker asset paths.
- Move the HTML entry from `public/index.html` to root `index.html`, replace CRA's `%PUBLIC_URL%` tokens with root-relative references, and load `/src/index.jsx` as a module. Preserve the existing HTML metadata and Google Fonts links.
- Keep all 13 public PNGs, manifest, robots file, Bespoke font, and global CSS byte for byte. Vite bundles the CSS-referenced font and copies public assets into `dist/`. Root-relative sticker paths also work when opening a nested SPA URL directly.
- Change only `hosting.public` from `build` to `dist` in `firebase.json`. Preserve `.firebaserc` project `maxkho-website`, the `/index.html` catch-all rewrite, and intended domain metadata `https://maxine-kho.com/`. Vite serves from `/`; `homepage` is informational metadata, not a Vite base setting.
- Remove the unused testing-library packages and CRA-only TypeScript peer pin. No test files or TypeScript source exist. Remove obsolete CRA ESLint/Browserslist configuration and `test`/`eject` scripts.
- Keep `npm start`, add equivalent `npm run dev`, use `npm run build` for production output, and add `npm run preview` for local production inspection. Development and preview bind to loopback and fail if their ports are occupied.

## Audit results

The merged CRA preparation snapshot reported **34 findings: 13 high, 5 moderate, 16 low**. The Vite dependency graph reports **0 vulnerabilities across all severities**, including development dependencies, with `npm audit` on November 9, 2026. The lockfile shrinks from 1,434 package entries to 58, including optional platform packages. A clean install on this Mac installs 34 packages.

The removed findings belonged to CRA's webpack/Jest/Workbox/SVGO and related dependency chains. No forced audit fixes, broad overrides, or runtime-library major upgrades are used. The latest [audit snapshot](dependency-audit.json) records the current graph; the [CRA snapshot](archive/cra-dependency-audit.json) is preserved separately as historical evidence. Audit results reflect the advisories known at verification time.

## Verification

Verified with official Node 24.22.2 and npm 10.9.4 on macOS arm64:

- Fresh lockfile resolution followed by `npm ci`: pass without peer-dependency bypass flags.
- `npm run build`: pass; `dist/` contains HTML, JS, CSS, local font, manifest, robots file, and all public images.
- `npm start`: pass on `127.0.0.1:3000`; `npm run preview`: pass on `127.0.0.1:4173`.
- Production CRA baseline rebuilt from the exact merged main commit. Headless Chrome full-page screenshots compared against Vite production at **1440×1000**, **390×844**, and **320×740**: **0 differing pixels at each size**. Desktop and mobile screenshots were also inspected visually.
- Both Vite development and production preview: direct visits to `/` and `/migration-check/nested` render successfully; all four sticker images and original external link URLs are preserved; every hover rotation works; all 13 public PNGs and the manifest/favicon return successfully; no console errors or uncaught runtime errors observed.
- Runtime dependency versions, CSS, font bytes, public assets, manifest, Firebase project, and SPA rewrite checked against main. No UI copy, styling rules, or animation props were changed.
- `git diff --check`: pass.

The [browser verification results](vite-verification.json) record the viewport sizes and outcomes. Verification scripts/screenshots are task artifacts rather than a new application test framework. Chrome mobile emulation does not claim real-device Safari coverage.

The Codex app-bundled Node executable rejected native Vite modules because of its signing restrictions. An isolated official Node runtime was used for verification; no system security setting or credential was changed. Standard Node installations should be used for local development.

## Tooling changes to know

- Production output is now **`dist/`**. Any future deployment must build this branch and serve that directory. Existing `build/` output is obsolete; nothing was deployed during migration.
- The HTML entry is at repository root and files containing JSX use `.jsx`. The package is explicitly ESM (`"type": "module"`). Future CommonJS config/scripts should use `.cjs` or be converted to ESM.
- `npm test` and `npm run eject` are removed. Vite does not implicitly lint, type-check, or run tests during a build. No test suite was removed; add lint/test tooling separately when needed.
- CRA's Browserslist is no longer used. Vite 8's default production target covers Chrome/Edge 111+, Firefox 114+, Safari 16.4+. No legacy-browser plugin or automatic polyfills are added. See [Vite production build documentation](https://vite.dev/guide/build) for browser compatibility.
- No CRA environment-variable references existed in the app. Future client variables use `VITE_*` and `import.meta.env`, rather than `REACT_APP_*` and `process.env`; client variables are public build inputs.
- The domain reference does not configure Firebase custom domains or DNS. The existing Firebase project, provider, and route fallback are preserved.

No merge, deployment, DNS change, hosting-provider change, new portfolio content, or visual redesign is part of this migration.
