# lagunite-web — Claude context

## Project identity

- **Site:** Lagunite documentation and demo site
- **Framework:** Astro 5 + MDX + React
- **Version:** 0.0.4
- **Dev server:** `npm run dev` → localhost:4321
- **Build:** `npm run build` → `./dist/`
- **Key commands:**
  - `npm run dev` — Astro dev server
  - `npm run build` — production build
  - `npm run docs:sync` — sync JSON docs from parent framework (`../docs/asJson/` → `src/docs/json/`)

## Relationship with the lagunite framework

- **CSS source:** `src/layouts/Layout.astro` imports `../../../dist/lagunite.css` (compiled from the parent `lagunite/` project)
- **After CSS changes in lagunite:** run `npm run build` in lagunite/ → then `npm run docs:sync` here to update documentation data
- **Parent project:** `../` (i.e. `lagunite/`) — see its `CLAUDE.md` for the full framework context and validate rules

## Framework quick reference

@../.claude/FRAMEWORK-QUICKREF.md

## Project structure

```
src/
  pages/
    index.astro           — Homepage / framework showcase
    dashboard/            — Dashboard demo (Astro pages)
    dashboard-alt/        — Alternative dashboard layout
    docs/                 — Documentation pages
      00-config/          — Palette, typography, theme, measures
      01-text/            — Fonts, typography
      02-colors/          — Text, background, border colors
      03-layout/          — Layout, sizing
      04-decorators/      — Effects, shadows, borders, etc.
  components/
    dashboard/            — Navbar, Sidebar for dashboard demo
    dashboard-alt/        — Alt dashboard components
    docs/                 — Documentation UI components
    Footer.astro
    Header.astro          — Includes dark/light theme toggle
    Navbar.astro
  layouts/
    Layout.astro          — Main layout (imports lagunite.css)
    DocLayout.astro       — Documentation layout
    DashboardLayout.astro — Dashboard layout
  docs/json/              — Synced from lagunite/docs/asJson/ via docs:sync
```

## Validate rules (inherited from lagunite)

All Lagunite CSS rules apply here. This site is built entirely with Lagunite classes.
See full validate rules in the parent's CLAUDE.md or `.cursor/skills/lagunite-validate/SKILL.md` (relative to `../`).

- **Class order:** base → `x*` (mobile ≤639px) → `d*` (desktop ≥640px)
- **Layout first:** flex/grid/position → spacing → typography/colors → decorators
- **Do not invent classes** — use only documented Lagunite utilities
- **Mark gaps:** `<!-- GAP: needs .utility-name -->`

## Astro-specific notes

- **Component files:** `.astro` (prefer for page structure), `.jsx`/`.tsx` (for interactive islands)
- **MDX pages** in `docs/` can use Lagunite classes directly in JSX/HTML blocks
- **Dark mode:** toggle `.night` class on `<body>` or a root ancestor; the `Header.astro` already wires the toggle
- **No Tailwind in production** — Tailwind is listed as a devDependency but Lagunite is the production CSS; do not mix class systems

## Working with the docs

Documentation pages mirror the framework layer structure. When adding a new CSS utility to lagunite:
1. Run `npm run build` + `npm run docs:generate` in `../` (lagunite)
2. Run `npm run docs:sync` here to pull updated JSON
3. Add or update the corresponding `src/pages/docs/<layer>/` page if needed
