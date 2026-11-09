# Implementation preparation audit

Audited source: `maxinekho/lil-tater`, `main` at `bc02d358d4983f5dd24228c56a34f5b2179d7c4e`.

## Existing application

The entry point mounts React 18 in StrictMode. The rendered page consists of two introductory headings, four external sticker links, and a footer with a dynamic copyright year. There is no router, Firebase client SDK, backend, or runtime environment configuration. Preserve the existing copy pending the Figma specification, including employer/location references and external destinations.

`Sticker` is actively used. `AnimatedText`, `Image`, `Separator`, and `Title` are retained historical components. They move into `components/` with compatibility exports at their original paths. No new visual abstractions, tokens, routes, or page layouts are introduced.

The unused scroll state/listener in `App` did not affect rendered output. Removing it avoids unnecessary listener replacement and state updates. CSS is loaded once from the entry point rather than twice. Header/footer extraction retains the DOM structure, attributes, content, links, and sticker animation values.

## Assets and metadata

All 13 PNG assets and `src/fonts/Bespoke.ttf` are retained. Current use: `figma.png`, `arena.png`, `linkedin.png`, `resume.png`, and `favicon.png`. Historical assets: `calls-tab_1.png`, `creator-studio_2.png`, `design-system_3.png`, `design-system_4.png`, `scroll-button.png`, and `sticker_1.png` through `sticker_3.png`. Their presence does not imply future design requirements.

The Bespoke font is local; Roboto Mono is requested from Google Fonts by the existing HTML for historical styles. Existing CSS, font files, and image bytes are preserved. External profile/resume links and Google Fonts require network access; their continued availability is outside the build check.

The manifest referenced a nonexistent root `favicon.png` and mislabeled the PNG as an ICO. It now references `assets/favicon.png` with its actual 80×80 size and PNG MIME type. The unused `src/index.html` duplicate is removed to avoid editing a template CRA does not load. `public/index.html` retains the current metadata, fonts, and title.

## Dependencies and maintenance risks

- Original toolchain: `react-scripts` 4.0.3 / webpack 4.44.2. The locked React and ReactDOM versions are 18.3.1. This old toolchain predates modern Node/OpenSSL compatibility and React 18 support in CRA.
- Move to `react-scripts` 5.0.1 within the existing CRA toolchain, using webpack 5. No framework migration, eject, or OpenSSL legacy-provider workaround is introduced.
- Pin the development runtime to Node 24/npm 10. Pin TypeScript 4.9.5 as a development dependency to satisfy CRA's optional peer dependency: without that pin, npm selected TypeScript 7 and a subsequent clean install rejected the lockfile. This does not convert the JavaScript app to TypeScript.
- Move testing libraries to development dependencies. Update React Testing Library from 11 (legacy rendering API) to 14 (React 18 support). No tests existed in the audited source.
- Remove packages with no source imports: Bootstrap, Reactstrap, clsx, react-scroll, styled-components, and web-vitals. Reactstrap 8 pulls react-popper 1.3.11, whose React peer range excludes React 18. Keep dayjs and Framer Motion, which are used by retained components.
- Replace private `framer-motion/dist/framer-motion` imports with the public `framer-motion` entry point, preserving all animation props.
- React 18, Framer Motion 7, and the testing packages remain older major versions. Major UI dependency upgrades are deferred to avoid unnecessary behavior changes before the specification.
- CRA is deprecated and remains a maintenance risk even at 5.0.1. This preparation is a bounded compatibility update; a future toolchain migration should be a separate, explicitly scoped change. Sources: [React announcement](https://react.dev/blog/2025/02/14/sunsetting-create-react-app), [CRA 5.0.1 release](https://github.com/facebook/create-react-app/releases/tag/v5.0.1).
- Do not use `npm audit fix --force`: it may break the retained toolchain. Review security findings by dependency path and whether code runs in the browser, development server, or build process.

## Firebase and domain

`.firebaserc` and `firebase.json` are preserved byte for byte. Hosting still uses project `maxkho-website`, serves `build/`, ignores hidden files/node_modules, and rewrites unmatched paths to `/index.html`. These files do not establish the live custom-domain binding or DNS state; neither was modified. The package homepage changes from `https://maxinekho.com/` to `https://maxine-kho.com/`.

Generated `.firebase/hosting.*.cache` and `firepit-log.txt` are removed from tracked source and ignored going forward. They are CLI state/diagnostics, not application assets or deployment configuration. No Firebase CLI command, deployment, DNS change, or live-site modification is part of this work.

## Validation

Verified November 9, 2026 with Node 24.22.1 and npm 10.9.4:

- `npm ci` succeeds from the final lockfile without `--legacy-peer-deps`.
- `CI=true npm run build` compiles successfully. Output remains `build/` with root-relative asset paths, compatible with the preserved Firebase configuration.
- `npm start` compiles and serves the app locally at `127.0.0.1:3000`.
- Headless Chrome at 1440×1000 and 390×844: both headings, all four sticker links/images, footer/year, manifest favicon, and sticker hover animation work; no uncaught runtime errors were observed. Screenshots were inspected at both sizes.
- Rendering the original and prepared App with the retained React/Framer Motion versions produces byte-identical static HTML. This checks DOM/content preservation, not a cross-version screenshot comparison.
- Source comparisons confirm identical global CSS, root entry, HTML template, Firebase files, font bytes, and all 13 images. Retained component animation props are unchanged.
- There are no preexisting automated tests. Validation scripts and screenshots used for this audit are task artifacts, not speculative tests added to the application.

### Security findings

The first resolved CRA 5 lockfile reported 39 findings. A single non-forced `npm audit fix` reduced this to **34: 13 high, 5 moderate, 16 low, 0 critical**. These counts include parent packages affected by vulnerable descendants, so they are not 34 independent defects. See the dated [machine-readable audit snapshot](dependency-audit.json) for exact dependency paths and advisory URLs. Counts can change as advisories are published.

Remaining findings are in the CRA build, test, asset-processing, and development-server dependency chains. Examples include webpack-dev-server/webpack-dev-middleware, SVGO/nth-check, resolve-url-loader/PostCSS, and Workbox/serialize-javascript. The current application has no runtime imports of these packages and Firebase serves static output; this does not eliminate risks when running development tooling or processing untrusted inputs. Use the development server on loopback while preparing the design implementation. Do not treat the retained CRA toolchain as fully maintained or security-clean. A dedicated tooling maintenance/migration task is needed to resolve findings that cannot be fixed within supported dependency ranges.

CRA also emits Node deprecation warnings (`fs.F_OK` and older dev-server middleware hooks). They do not prevent the verified startup/build but reinforce the maintenance risk. Forced audit recommendations include replacing `react-scripts` with `0.0.0`, which is not a usable remediation.

### Repository handoff

Work is isolated on local branch `chore/portfolio-implementation-prep`, based on the audited commit. The source archive did not include Git metadata and native Git was unavailable, so a shallow local checkout was reconstructed and verified against the original Git tree and commit hashes; the branch and index were independently read using isomorphic-git. The shallow boundary is the audited commit; older history can be fetched normally later.

The connected GitHub integration returned HTTP 403 (`Resource not accessible by integration`) when creating a remote branch. The local checkout and review patch are the handoff; nothing was pushed, merged, deployed, or changed in Firebase/DNS. A full-history local clone can apply the supplied patch on a new branch if preferred.
