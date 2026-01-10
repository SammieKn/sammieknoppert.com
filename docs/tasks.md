
# Phased Execution Plan (Review + Checkboxes)

1) Projects in MDX (authoring-first)

- [x] Decide MDX approach for App Router (next-mdx or built-in `@next/mdx`).
- [x] Configure MDX in `next.config.ts` and `tsconfig.json` typings.
- [x] Create `src/content/projects/` with MDX files (one per project).
- [x] Define frontmatter schema (title, slug, date, tech, summary, cover, links).
- [x] Build MDX UI primitives (Heading, Lead, Callout, Image, Code) using shadcn.
- [x] Implement `projects/[slug]/page.tsx` to load + render MDX by slug.
- [x] Add `generateStaticParams` to pre-render slugs from MDX filenames.
- [x] Provide an example MDX template in `docs/content/projects.md` for copying.

> **Developer Notes (Phase 1 Complete – 2026-01-08)**
>
> **Packages installed:** `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`, `gray-matter`, `next-mdx-remote`, `@types/mdx`
>
> **Files created:**
> - `frontend/next.config.ts` – MDX loader via `@next/mdx` with `pageExtensions`
> - `frontend/mdx-components.tsx` – Custom MDX components (Lead, Callout, Gallery, typography)
> - `frontend/src/lib/mdx.ts` – Helper functions: `getProjectSlugs()`, `getProjectBySlug()`, `getAllProjects()`
> - `frontend/src/content/projects/*.mdx` – Three sample projects with frontmatter
> - `docs/content/projects.md` – Authoring template with field docs and examples
>
> **Files deleted:**
> - `frontend/src/data/projects.ts` – Old static array replaced by MDX content
>
> **Files rewritten:**
> - `frontend/src/app/projects/page.tsx` – Now uses `getAllProjects()` from MDX
> - `frontend/src/app/projects/[slug]/page.tsx` – Compiles MDX via `next-mdx-remote/rsc`
>
> **Build verified:** All routes prerender successfully including dynamic `/projects/[slug]` pages.

2) Data and constants refactor

- [ ] Replace inline URLs with `src/constants/links.ts` across components.
- [ ] Normalize TypeScript interfaces for profile/projects to match usage.
- [ ] Migrate any remaining hardcoded content into `src/data` or MDX frontmatter.

3) UI/UX polish and responsiveness

- [ ] Responsive audit for Home, Projects grid, Project detail (MDX).
- [ ] Accessibility pass (alt text, landmarks, keyboard focus order).
- [ ] Extract `CollapsibleExperienceCard` into `src/components/sections/`.
- [ ] Mobile navigation: decide pattern (sheet/menu) and implement.

4) Images and Next config

- [ ] Fix certification image 404s (add assets or correct paths under `public/images`).
- [ ] Update Next image settings (dev origins/domains) if needed.
- [ ] Add `sizes` and responsive `Image` usage for LCP-friendly images.

5) Content population

- [ ] Populate real profile + projects content in MDX/frontmatter.
- [ ] Add missing assets (project images, certification icons, CV PDF).

6) Performance and QA

- [ ] Production build check and Lighthouse (desktop + mobile) baseline.
- [ ] Optimize critical render (fonts, images, MDX components) to hit targets.
- [ ] Cross-browser/device smoke tests (Chrome, Safari, Firefox; iOS/Android).

7) Deploy

- [ ] Deploy to hosting (e.g., Vercel) with preview environments.
- [ ] Configure custom domain + HTTPS + redirects.
- [ ] Post-deploy sanity checks and Lighthouse re-run.

Notes

- MDX replaces rigid templates with flexible authoring; frontmatter drives cards and metadata.
- shadcn components, lucide icons, and Tailwind remain the UI foundation.
- Keep Server Components by default; only use `'use client'` where interactivity is needed.
