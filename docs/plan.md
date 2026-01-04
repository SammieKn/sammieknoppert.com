# Development Plan: Portfolio Website (Monorepo)

**Project:** sammieknoppert.com
**Status:** Planning Phase
**Date:** January 4, 2026

---

## Overview

This plan outlines the step-by-step implementation of a portfolio website designed to promote professional capabilities and host side projects. The architecture is a monorepo containing:

- **Frontend:** Next.js 15 with App Router, Tailwind CSS, Shadcn UI, TypeScript
- **Backend:** FastAPI with Python 3.12+, Pydantic v2 (for future dynamic content)
- **Database:** Supabase (PostgreSQL) (for future expansion)
- **Initial Implementation:** Static V1 using local TypeScript data files

The primary goal for V1 is a fully functional static portfolio with:
1. Single-page layout (Hero → About → Contact sections)
2. Separate Projects page with grid view and detail pages
3. Smooth navigation with intelligent scroll/routing behavior
4. Professional, responsive design using Shadcn UI components


## Phase 1: Static Data Structure

### 1.1 Create Data Models (TypeScript)

**File: `frontend/src/data/profile.ts`**

Export the following interfaces and data:
- `WorkExperience[]`: company, role, startDate, endDate, description
- `Education[]`: title, level, year, university, grade, description
- `Certification[]`: logo, title, date, details
- `Skill[]`: name, iconName (for lucide-react)

**File: `frontend/src/data/projects.ts`**

Export:
- `Project[]`: id, slug, title, shortDescription, fullDescription (object with problem, approach, execution, businessValue), tags, thumbnail, images[], links (code, demo, etc.)

**Considerations:**
- Use proper TypeScript interfaces for type safety
- Ensure slugs are URL-safe and unique
- Image paths should reference `/public/images/` correctly
- Keep descriptions concise initially (can expand later)

**Deliverable:** Fully typed, importable data files.

---


## Phase 2: Layout & Navigation

### 2.1 Global Layout Components

**File: `frontend/src/components/layout/Header.tsx`**

**Requirements:**
- Sticky header with name/logo on the left
- Navigation links: Home, About, Contact, Projects
- **Navigation Logic:**
  - If on Home (`/`): "Home", "About", "Contact" scroll to section IDs
  - If on Projects (`/projects/*`): "Home", "About", "Contact" route to `/#section`
  - "Projects" always routes to `/projects`
- Use Shadcn `NavigationMenu`

**File: `frontend/src/components/layout/Footer.tsx`**

**Requirements:**
- Social icons (LinkedIn, GitHub) with links
- Email address
- "Open Source" message with link to repository
- Use `lucide-react` icons

**Deliverable:** Reusable Header and Footer components.

---


### 2.2 Root Layout Integration

**File: `frontend/src/app/layout.tsx`**

- Import and render `<Header />` and `<Footer />`
- Apply global styles from `globals.css`
- Configure metadata (title, description, OG tags)

**Deliverable:** Consistent layout across all pages.

---


## Phase 3: Home Page (Single Page Flow)

### 3.1 Hero Section

**File: `frontend/src/components/sections/Hero.tsx`**

**Content:**
- Welcome message: "Hi, I'm Sammie Knoppert 👋"
- Headline: "Bridge between Civil Engineering and AI"
- Elevator pitch (1-2 sentences)
- Professional/playful AI-edited image (Gemini Nano Banana style)

**Styling:**
- Full-screen or prominent top section
- Centered text with hero image to the side or background
- Use Shadcn `Button` for CTA (e.g., "View Projects", "Contact Me")

**Deliverable:** Eye-catching, professional hero component.

---


### 3.2 About Me Section

**File: `frontend/src/components/sections/About.tsx`**

**Sub-Components:**
1. **Work Experience**
   - Import from `profile.ts`
   - Timeline or card layout
   - Display: company, role, dates, description, image
   - Use Shadcn `Card`

2. **Education**
   - Similar layout to work experience
   - Display: title, level, year, university, grade, description, image

3. **Certifications**
   - Use Shadcn `Accordion` or `Dialog`
   - Clicking opens details (logo, title, date, description)
   - Display certification image

4. **Skills**
   - Use Shadcn `Carousel`
   - Horizontal scroll with icons + labels
   - Use `lucide-react` icons or custom logos

5. **Resume Download**
   - Prominent `Button` linking to `/cv/sammie-knoppert-cv.pdf`
   - Icon: `Download` from lucide-react

**Considerations:**
- Ensure section has `id="about"` for scroll navigation
- Responsive design (mobile-first)
- Images should be optimized using `next/image`

**Deliverable:** Complete, data-driven About section.

---


### 3.3 Contact Section

**File: `frontend/src/components/sections/Contact.tsx`**

**Content:**
- Text: "Would love to connect to share ideas, provide help or to brainstorm. Use the links below"
- Email prominently displayed
- Social icons: LinkedIn, GitHub (using `lucide-react`)
- Image: Icon pointing downwards (to the right side)

**Styling:**
- Clean, minimal design
- Use Shadcn `Button` or `Link` styled components
- Ensure section has `id="contact"` for scroll navigation

**Deliverable:** Professional contact section.

---


### 3.4 Assemble Home Page

**File: `frontend/src/app/page.tsx`**

- Import and render: `<Hero />`, `<About />`, `<Contact />`
- Ensure sections flow vertically
- Implement smooth scrolling (CSS or library)

**Deliverable:** Fully functional single-page home.

---


## Phase 4: Projects Section

### 4.1 Projects Grid Page

**File: `frontend/src/app/projects/page.tsx`**

**Requirements:**
- Import projects from `projects.ts`
- Display as responsive grid (CSS Grid or Tailwind grid)
- Each card shows:
  - Title
  - Short description (1 sentence)
  - Thumbnail image
  - Links: "Code", "Try", "Read More" (routes to `/projects/[slug]`)
- Use Shadcn `Card` and `Button`

**Considerations:**
- Cards should be clickable and hover-styled
- Images optimized with `next/image`
- Responsive: 1 column (mobile), 2 (tablet), 3 (desktop)

**Deliverable:** Functional projects grid page.

---


### 4.2 Project Detail Page

**File: `frontend/src/app/projects/[slug]/page.tsx`**

**Requirements:**
- Dynamic route using slug parameter
- Fetch project data from `projects.ts` by matching slug
- If slug not found, show 404 or redirect
- Display:
  - **Header:** Title & Hero Image
  - **Problem:** Description of the challenge
  - **Approach:** How you thought about it
  - **Execution:** Implementation details
  - **Business Value:** Outcome/impact
  - **Visuals:** Gallery or screenshots (use `next/image`)
- Back button or breadcrumb navigation

**Considerations:**
- Use `generateStaticParams` for static generation of all project pages
- Ensure metadata (title, description) is dynamic per project
- Use Shadcn components for consistent styling

**Deliverable:** Fully functional project detail pages.

---


## Phase 5: Navigation & Scroll Behavior

### 5.1 Implement Smart Navigation

**Requirements:**
- Detect current page (use `usePathname()` from `next/navigation`)
- **On Home Page:**
  - "Home", "About", "Contact" trigger smooth scroll to section IDs
  - Use `document.getElementById().scrollIntoView()` or a scroll library
- **On Projects Page:**
  - "Home", "About", "Contact" route to `/#section`
  - Use `useRouter()` to handle navigation

**File: Update `Header.tsx`**
- Make Header a Client Component (`'use client'`)
- Implement conditional click handlers based on current route

**Considerations:**
- Smooth scrolling CSS: `html { scroll-behavior: smooth; }`
- Test routing with hash fragments (`/#about`)
- Ensure mobile menu works correctly

**Deliverable:** Intuitive, working navigation.

---


## Phase 6: Styling & Responsiveness

### 6.1 Apply Global Styles

**File: `frontend/src/app/globals.css`**

- Configure Tailwind theme (colors, fonts, spacing)
- Add custom utilities if needed
- Ensure consistent spacing and typography


### 6.2 Responsive Design

- Test all components on mobile, tablet, desktop
- Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Ensure images scale appropriately
- Test navigation menu on mobile (hamburger menu if needed)


### 6.3 Accessibility

- Add `alt` text to all images
- Ensure semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Test keyboard navigation
- Add ARIA labels where needed

**Deliverable:** Polished, responsive, accessible design.

---


## Phase 7: Content & Assets

### 7.1 Gather Assets

**Required:**
- Professional/AI-edited photos of yourself (hero, about sections)
- Project thumbnails and screenshots
- Company/university logos (if applicable)
- Certification logos
- Skill icons (or use lucide-react)
- CV PDF

**Location:** Store in `frontend/public/images/` and `frontend/public/cv/`


### 7.2 Populate Data Files

- Fill `profile.ts` with real work experience, education, certifications, skills
- Fill `projects.ts` with real project data
- Ensure all descriptions are polished and professional

**Deliverable:** Complete, real content.

## Dependencies & Risks

### Dependencies

1. **Shadcn UI Components:** Must be installed and configured correctly
2. **Image Assets:** Need professional photos and project screenshots before content population
3. **CV:** Must be finalized and exported as PDF
4. **Supabase:** For V2, ensure database schema is planned early

### Risks

1. **Navigation Complexity:** Hash-based routing with smooth scrolling can be tricky
   - **Mitigation:** Test thoroughly, use proven scroll libraries if native behavior fails

2. **Image Optimization:** Large images can hurt performance
   - **Mitigation:** Use Next.js `Image` component, compress assets, use WebP format

3. **Responsive Design:** Carousel and grid layouts can break on mobile
   - **Mitigation:** Test on real devices, use Tailwind responsive utilities

4. **Content Delays:** Waiting for real content can block progress
   - **Mitigation:** Use placeholder content (Lorem Ipsum, stock images) initially

5. **Scope Creep:** Temptation to add features before V1 is complete
   - **Mitigation:** Stick to the plan, defer enhancements to V2

---

## Considerations

### Code Quality

- **TypeScript:** Use strict typing, avoid `any`
- **Components:** Keep components small and reusable
- **Formatting:** Run Prettier (TS) and Black (Python) before commits
- **Git:** Use meaningful commit messages, create feature branches

## Success Criteria

### V1 (Static)

- [ ] Home page loads with Hero, About, Contact sections
- [ ] Navigation scrolls to sections on home page
- [ ] Projects grid displays all projects
- [ ] Project detail pages render correctly for all slugs
- [ ] Navigation from projects page routes to home sections
- [ ] All images are optimized and load quickly
- [ ] Site is responsive on mobile, tablet, desktop
- [ ] CV downloads successfully
- [ ] All external links work (socials, GitHub)
- [ ] Site is deployed and accessible via custom domain

## Conclusion

This plan provides a structured, phase-by-phase approach to building a professional portfolio website. By starting with a static V1 using TypeScript data files, we can iterate quickly and validate the design before introducing backend complexity. The modular architecture ensures easy expansion for V2 features like dynamic content management and additional project hosting.
