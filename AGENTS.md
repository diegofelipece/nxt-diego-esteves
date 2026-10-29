# Repository instructions

- This is a Next.js 12 portfolio exported as a static site. Run `npm run lint` and `npm run build` when changing the site.
- `npm run build` exports the site to `out/`, including the root `404.html` and `.nojekyll` required for GitHub Pages; Pages serves files without Apache rewrite rules.
- Use `sitePath()` from `utils/sitePath.ts` for public assets and browser-history URLs so both the GitHub Pages preview path and the production domain root work.
- The Pages workflow deploys pushes to `feat/github-pages-migration` as a repository-path preview and pushes to `develop` as the production root build for `diegoesteves.ink`.
- Never add hosting credentials or change DNS records as part of a code change. Verify the Pages preview before the domain cutover.
