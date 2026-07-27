# AGENTS.md

## Project Overview

Personal portfolio/resume site for Alex Alan Nunes.

- **Stack**: Next.js 16.2, React 19, TypeScript, Tailwind CSS
- **Type**: Single-page app (App Router)
- **Entry**: `src/app/page.tsx` → `src/app/layout.tsx`

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint (flat config, eslint src/)
```

No test, typecheck, or format commands configured.

## Gotchas

- `next lint` was removed in Next.js 16 — lint script uses `eslint src/` directly
- ESLint uses flat config (`eslint.config.mjs`), not `.eslintrc.json`
- Layout includes Google Analytics scripts (gtag)
- Middleware only matches `/redirect-to-corpodemae`
- Path alias: `@/*` maps to `./src/*`
