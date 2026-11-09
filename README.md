# Maxine Kho portfolio

Existing React portfolio, prepared for incremental implementation from a forthcoming Figma specification. The current site is the visual baseline; the Figma specification will be the design source of truth once supplied. Do not infer new layouts, styles, typography, or content from the preparation structure.

## Local development

Use Node 24 and npm 10 (see `.nvmrc` and `package.json`). With nvm installed:

```sh
nvm install
nvm use
npm install --global npm@10
npm ci
npm start
```

The development server uses http://127.0.0.1:3000. No Firebase credentials or environment variables are required to render the current site.

```sh
npm run build
```

The production output is `dist/`. This command only creates local files; it does not publish the website. Run `npm run preview` to inspect the production output at http://127.0.0.1:4173. `npm run dev` is an alias for `npm start`.

There are currently no committed automated tests. The unused CRA `test`/`eject` scripts and implicit build-time ESLint integration are removed. Vite does not run linting or tests as part of a build.

## Source organization

- `src/index.jsx`: React root and the single global CSS import.
- `src/App.jsx`: composition of the existing site.
- `src/components/layout/`: the current header (including sticker groups) and footer, extracted without changing markup or copy.
- `src/components/`: existing reusable React components (`Sticker`, `AnimatedText`, `Image`, `Separator`, `Title`). These are retained capabilities, not a specification for the future design.
- `src/utils/`: compatibility exports for the former component locations; new UI components belong in `components/`.
- `src/index.css`: existing global styles, preserved as the visual baseline.
- `src/fonts/`: existing Bespoke font.
- `public/assets/`: existing images, including historical project artwork retained for review.
- `index.html`: Vite's HTML entry point.
- `vite.config.js`: React plugin and loopback-only development/preview settings.

Add components and styling only as the Figma specification requires them. Keep `App` focused on composition and place reusable UI in `components/`; introduce further structure when actual implementation needs it.

## Hosting and intended domain

- Intended domain reference: **https://maxine-kho.com/** (`package.json` `homepage`).
- Firebase project: **maxkho-website** (`.firebaserc`, preserved).
- Firebase Hosting public directory: **dist** (`firebase.json`, preserved).
- Existing catch-all rewrite to `/index.html` is preserved.

The domain reference does not provision a custom domain, change DNS, or configure redirects. Domain connection must be handled separately when explicitly authorized. No deployment or live configuration change is part of this preparation. There is no deployment script or automatic deployment workflow in this snapshot.

See [the Vite migration report](docs/vite-migration.md) for verification, dependency audit results, and tooling changes. The [preparation audit](docs/implementation-preparation.md) remains as historical context.
