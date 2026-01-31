# Frontend Refactoring Plan

> **Goal:** Reduce technical debt by extracting reusable components, centralizing shared logic, and establishing clear patterns.
> **Approach:** Phase-by-phase refactoring—each phase is self-contained and can be merged independently.

---

## Summary of Current Issues

| Issue | Where | Impact |
|-------|-------|--------|
| Duplicated "floating shapes" / background orbs | Hero, About, Contact, Projects pages | Hard to maintain; inconsistent styling |
| Hardcoded social links in multiple places | Contact.tsx, Footer.tsx, constants/links.ts | Single source of truth doesn't exist everywhere |
| Duplicated tag/badge rendering | Projects list, Project detail, About | Copy-paste styling; prone to drift |
| Inline Markdown component overrides | `[slug]/page.tsx` | 60+ lines of JSX in render; not reusable |
| Duplicated project card patterns | Featured card vs. regular card in `projects/page.tsx` | Same structure, different sizes—should share base |
| No TypeScript interfaces for shared props | Various components | Implicit contracts; refactoring is risky |
| Mixed animation definitions | globals.css + inline `style={{ animationDelay }}` | Animation logic scattered |
| Typing effect hook lives inside Hero.tsx | Hero.tsx | Not reusable; bloats component file |
| "Section header" pattern repeated | Hero, About, Contact, Projects | Same heading + description markup copied |
| Theme toggle logic lives in Header | Header.tsx | Not easily reusable; could be a hook |
| CollapsibleExperienceCard is local to About | About.tsx | Could be a generic `<Collapsible>` pattern |

---

## Phase 1 — Extract Shared UI Primitives

**Objective:** Create low-level reusable building blocks.

### 1.1 Create `<BackgroundOrbs />` component
- **Current state:** Each section (Hero, About, Contact, Projects list, Project detail) defines its own `<div className="pointer-events-none absolute inset-0 overflow-hidden">` with gradient orbs and dots.
- **Action:**
  1. Create `src/components/ui/background-orbs.tsx`
  2. Accept props: `variant?: 'hero' | 'section' | 'page'` or `orbs: OrbConfig[]`
  3. Replace all 5 occurrences

### 1.2 Create `<SectionHeader />` component
- **Current state:** Repeated pattern:
  ```tsx
  <header className="space-y-3">
    <h2 className="...gradient text...">Title</h2>
    <p className="text-muted-foreground">Subtitle</p>
  </header>
  ```
- **Action:**
  1. Create `src/components/ui/section-header.tsx`
  2. Props: `title`, `subtitle`, `as?: 'h1' | 'h2'`, `className?`
  3. Replace in About, Contact, Projects list, Project detail

### 1.3 Create `<Tag />` / `<TagList />` component
- **Current state:** Tag rendering copied in:
  - `projects/page.tsx` (featured card, regular cards)
  - `projects/[slug]/page.tsx`
  - Same Tailwind classes repeated
- **Action:**
  1. Create `src/components/ui/tag.tsx`
  2. Props: `children`, `size?: 'sm' | 'md'`
  3. Export `<TagList tags={[]} />` convenience wrapper

### 1.4 Create `<IconButton />` variant or pattern
- **Current state:** Code/Demo buttons with icons duplicated across featured card, regular cards, and project detail.
- **Action:**
  1. Standardize via existing `<Button>` + consistent icon slot
  2. Or create thin wrapper `<IconLink icon={Code2} href="..." label="Code" />`

---

## Phase 2 — Extract Hooks & Utilities

**Objective:** Move stateful/logic concerns out of components.

### 2.1 Extract `useTypingEffect` hook
- **Current state:** Defined inside `Hero.tsx` (~30 lines).
- **Action:**
  1. Move to `src/hooks/use-typing-effect.ts`
  2. Export and import in Hero

### 2.2 Extract `useTheme` hook
- **Current state:** Theme toggle logic (localStorage, class manipulation) lives directly in `Header.tsx`.
- **Action:**
  1. Create `src/hooks/use-theme.ts`
  2. Expose `{ isDark, toggleTheme }`
  3. Header becomes a thin consumer

### 2.3 Centralize date formatting utility
- **Current state:** `new Date(project.date).toLocaleDateString(...)` inlined in `[slug]/page.tsx`.
- **Action:**
  1. Add `formatDate(dateStr: string, opts?)` to `src/lib/utils.ts`
  2. Reuse across project pages

---

## Phase 3 — Consolidate Data & Constants

**Objective:** Single source of truth for all static data.

### 3.1 Unify social/contact links
- **Current state:**
  - `constants/links.ts` exports `GITHUB`, `LINKEDIN`, `EMAIL`, `WEBSITE`
  - `Contact.tsx` defines its own local `links` object
- **Action:**
  1. Delete local `links` in Contact.tsx
  2. Import from `@/constants/links`
  3. Consider exporting a typed `SocialLinks` object for iteration

### 3.2 Co-locate profile TypeScript interfaces
- **Current state:** Interfaces (`WorkExperience`, `Education`, etc.) exported from `data/profile.ts`.
- **Action:**
  1. Move interfaces to `src/types/profile.ts`
  2. Re-export from `data/profile.ts` for convenience
  3. Enables reuse without importing data

### 3.3 Create a `src/types/index.ts` barrel export
- **Action:**
  1. Re-export all shared types (`ProjectFrontmatter`, `WorkExperience`, `Skill`, etc.)
  2. Simplify imports across codebase

---

## Phase 4 — Modularize Complex Components

**Objective:** Break down large files; improve testability.

### 4.1 Refactor `About.tsx` (392 lines)
- **Current state:** Contains:
  - `AboutFloatingShapes` (local)
  - `SkillIcon` (local)
  - `CollapsibleExperienceCard` (local, 40+ lines)
  - Large render with Work, Education, Certifications, Skills
- **Action:**
  1. Extract `CollapsibleExperienceCard` → `src/components/ui/collapsible-card.tsx` (generic)
  2. Extract `SkillIcon` → `src/components/ui/skill-icon.tsx`
  3. Replace `AboutFloatingShapes` with `<BackgroundOrbs variant="section" />`
  4. Consider splitting into sub-components: `<WorkExperienceSection />`, `<EducationSection />`, `<CertificationsCarousel />`, `<SkillsSection />`

### 4.2 Refactor `Hero.tsx` (276 lines)
- **Current state:** Contains:
  - `FloatingShapes` (local)
  - `useTypingEffect` (local hook)
  - Large render with stats, image, decorations
- **Action:**
  1. Replace `FloatingShapes` with `<BackgroundOrbs variant="hero" />`
  2. Move `useTypingEffect` to hooks (see 2.1)
  3. Extract `<HeroStats />` sub-component
  4. Extract `<HeroImage />` sub-component (decorative rings, floating cards)

### 4.3 Refactor `projects/page.tsx` (254 lines)
- **Current state:**
  - Featured project card (~80 lines inline)
  - Regular project cards (~60 lines each, in map)
  - Duplicated link buttons
- **Action:**
  1. Extract `<FeaturedProjectCard project={...} />`
  2. Extract `<ProjectCard project={...} />`
  3. Both can share: `<Tag />`, `<ProjectLinks />`, cover image pattern
  4. Page becomes ~50 lines

### 4.4 Refactor `projects/[slug]/page.tsx` (212 lines)
- **Current state:**
  - 60+ lines of inline ReactMarkdown component overrides
  - Duplicated link buttons
- **Action:**
  1. Extract `<MarkdownRenderer content={...} />` with pre-configured components
  2. Move to `src/components/content/markdown-renderer.tsx`
  3. Reuse `<Tag />`, `<ProjectLinks />`

---

## Phase 5 — Standardize Animation Patterns

**Objective:** Make animations consistent and maintainable.

### 5.1 Create animation variant system
- **Current state:**
  - `globals.css` defines keyframes + utility classes
  - Components use inline `style={{ animationDelay: '0.3s' }}`
- **Action:**
  1. Define delay utilities in CSS: `.animation-delay-100`, `.animation-delay-200`, etc.
  2. Or create `<AnimatedElement delay={0.3}>` wrapper
  3. Remove inline style props

### 5.2 Consolidate scroll-triggered animations
- **Current state:** `.animate-on-scroll` in CSS uses `animation-timeline: view()` (modern CSS).
- **Action:**
  1. Ensure fallback for unsupported browsers
  2. Consider Intersection Observer hook as progressive enhancement

---

## Phase 6 — Establish Component Patterns & Documentation

**Objective:** Prevent future drift; onboard contributors.

### 6.1 Create component folder structure conventions
- **Proposed structure:**
  ```
  src/components/
    ui/           # shadcn primitives + custom primitives
    layout/       # Header, Footer, etc.
    sections/     # Page sections (Hero, About, Contact)
    content/      # Content rendering (MarkdownRenderer)
    projects/     # Project-specific (ProjectCard, FeaturedProjectCard)
  ```

### 6.2 Add `README.md` to components folder
- Document:
  - When to add to `ui/` vs. create new folder
  - Prop conventions (e.g., `className` always supported)
  - Server vs. Client component guidelines

### 6.3 Add barrel exports (`index.ts`) per folder
- Simplify imports:
  ```tsx
  import { Tag, SectionHeader, BackgroundOrbs } from "@/components/ui";
  ```

---

## Phase 7 — Testing & Validation

**Objective:** Ensure refactoring doesn't break functionality.

### 7.1 Visual regression baseline
- **Action:**
  1. Screenshot key pages before refactoring
  2. Compare after each phase

### 7.2 Add component smoke tests (optional)
- **Action:**
  1. Set up basic render tests for extracted components
  2. Focus on components with props/variants

---

## Execution Order

| Phase | Effort | Risk | Dependencies |
|-------|--------|------|--------------|
| Phase 1 | Medium | Low | None |
| Phase 2 | Low | Low | None |
| Phase 3 | Low | Low | None |
| Phase 4 | High | Medium | Phase 1, 2, 3 |
| Phase 5 | Low | Low | Phase 1, 4 |
| Phase 6 | Low | None | Phase 4 |
| Phase 7 | Medium | None | All phases |

**Recommended order:** 1 → 2 → 3 → 4 → 5 → 6 → 7

Each phase can be a separate PR. Phase 4 is the largest and can be split into sub-PRs (4.1, 4.2, 4.3, 4.4).

---

## Files to Create (Summary)

| New File | Purpose |
|----------|---------|
| `src/components/ui/background-orbs.tsx` | Reusable floating gradient orbs |
| `src/components/ui/section-header.tsx` | Consistent section headings |
| `src/components/ui/tag.tsx` | Tag/badge component |
| `src/components/ui/collapsible-card.tsx` | Generic collapsible card |
| `src/components/ui/skill-icon.tsx` | Dynamic Lucide icon renderer |
| `src/components/content/markdown-renderer.tsx` | Pre-styled MDX/Markdown |
| `src/components/projects/project-card.tsx` | Regular project card |
| `src/components/projects/featured-project-card.tsx` | Featured project card |
| `src/components/projects/project-links.tsx` | Code/Demo link buttons |
| `src/hooks/use-typing-effect.ts` | Typing animation hook |
| `src/hooks/use-theme.ts` | Theme toggle hook |
| `src/types/index.ts` | Barrel export for types |
| `src/types/profile.ts` | Profile-related interfaces |

---

## Success Metrics

- [ ] No component file exceeds 150 lines
- [ ] Zero duplicated "orb" markup
- [ ] All social links sourced from `constants/links.ts`
- [ ] Tags rendered via single `<Tag />` component
- [ ] Markdown styling defined in one place
- [ ] Hooks extracted to `/hooks` folder
- [ ] Types co-located in `/types` folder

---

*Last updated: 2026-01-31*
