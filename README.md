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

The development server uses http://localhost:3000. No Firebase credentials or environment variables are required to render the current site.

```sh
npm run build
```

The production output is `build/`. This command only creates local files; it does not publish the website. `npm test` starts CRA's Jest runner; there are currently no committed automated tests.

## Source organization

- `src/index.js`: React root and the single global CSS import.
- `src/App.js`: composition of the existing site.
- `src/components/layout/`: the current header (including sticker groups) and footer, extracted without changing markup or copy.
- `src/components/`: existing reusable React components (`Sticker`, `AnimatedText`, `Image`, `Separator`, `Title`). These are retained capabilities, not a specification for the future design.
- `src/utils/`: compatibility exports for the former component locations; new UI components belong in `components/`.
- `src/index.css`: existing global styles, preserved as the visual baseline.
- `src/fonts/`: existing Bespoke font.
- `public/assets/`: existing images, including historical project artwork retained for review.
- `public/index.html`: the only CRA HTML template.

Add components and styling only as the Figma specification requires them. Keep `App` focused on composition and place reusable UI in `components/`; introduce further structure when actual implementation needs it.

## Hosting and intended domain

- Intended domain reference: **https://maxine-kho.com/** (`package.json` `homepage`).
- Firebase project: **maxkho-website** (`.firebaserc`, preserved).
- Firebase Hosting public directory: **build** (`firebase.json`, preserved).
- Existing catch-all rewrite to `/index.html` is preserved.

The domain reference does not provision a custom domain, change DNS, or configure redirects. Domain connection must be handled separately when explicitly authorized. No deployment or live configuration change is part of this preparation. There is no deployment script or automatic deployment workflow in this snapshot.

See [the preparation audit](docs/implementation-preparation.md) for dependency risks, asset inventory, and verification results.
