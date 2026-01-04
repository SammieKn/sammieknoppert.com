# Task List: Portfolio Website Implementation

**Project:** sammieknoppert.com
**Status:** Not Started
**Date:** January 4, 2026

---

## Phase 1: Static Data Structure

- [ ] Create `frontend/src/data/` directory
- [ ] Create TypeScript interfaces for WorkExperience in `profile.ts`
- [ ] Create TypeScript interfaces for Education in `profile.ts`
- [ ] Create TypeScript interfaces for Certification in `profile.ts`
- [ ] Create TypeScript interfaces for Skill in `profile.ts`
- [ ] Export sample WorkExperience data array
- [ ] Export sample Education data array
- [ ] Export sample Certification data array
- [ ] Export sample Skill data array
- [ ] Create TypeScript interface for Project in `projects.ts`
- [ ] Export sample Project data array with at least 2-3 projects
- [ ] Ensure all slugs are URL-safe and unique
- [ ] Verify image paths reference `/public/images/` correctly

---

## Phase 2: Layout & Navigation

- [ ] Create `frontend/src/components/layout/` directory
- [ ] Create `Header.tsx` component with sticky header styling
- [ ] Add name/logo to Header on the left side
- [ ] Add navigation links (Home, About, Contact, Projects) to Header
- [ ] Implement navigation logic placeholders (to be completed in Phase 5)
- [ ] Use Shadcn NavigationMenu component in Header
- [ ] Create `Footer.tsx` component
- [ ] Add social icons (LinkedIn, GitHub) to Footer using lucide-react
- [ ] Add email address to Footer
- [ ] Add "Open Source" message with GitHub repository link to Footer
- [ ] Update `frontend/src/app/layout.tsx` to import Header component
- [ ] Update `frontend/src/app/layout.tsx` to import Footer component
- [ ] Configure metadata (title, description, OG tags) in layout.tsx
- [ ] Apply global styles from `globals.css`

---

## Phase 3: Home Page (Single Page Flow)

### Hero Section
- [ ] Create `frontend/src/components/sections/` directory
- [ ] Create `Hero.tsx` component
- [ ] Add welcome message to Hero
- [ ] Add headline to Hero
- [ ] Add elevator pitch (1-2 sentences) to Hero
- [ ] Add placeholder for hero image
- [ ] Add CTA button using Shadcn Button component
- [ ] Style Hero section as full-screen or prominent top section

### About Section
- [ ] Create `About.tsx` component
- [ ] Add `id="about"` to About section for scroll navigation
- [ ] Create Work Experience subsection
- [ ] Import WorkExperience data from `profile.ts`
- [ ] Display work experience using Shadcn Card component
- [ ] Create Education subsection
- [ ] Import Education data from `profile.ts`
- [ ] Display education using card layout
- [ ] Create Certifications subsection
- [ ] Use Shadcn Accordion or Dialog for certifications
- [ ] Import Certification data from `profile.ts`
- [ ] Display certification details on interaction
- [ ] Create Skills subsection
- [ ] Use Shadcn Carousel for skills display
- [ ] Import Skill data from `profile.ts`
- [ ] Display skills with lucide-react icons
- [ ] Add Resume Download button with Download icon
- [ ] Link Resume button to `/cv/sammie-knoppert-cv.pdf`
- [ ] Optimize all images using `next/image`

### Contact Section
- [ ] Create `Contact.tsx` component
- [ ] Add `id="contact"` to Contact section for scroll navigation
- [ ] Add contact message text
- [ ] Display email address prominently
- [ ] Add social icons (LinkedIn, GitHub) using lucide-react
- [ ] Add placeholder for pointing-down icon image
- [ ] Style Contact section with clean, minimal design

### Assemble Home Page
- [ ] Update `frontend/src/app/page.tsx` to import Hero component
- [ ] Update `frontend/src/app/page.tsx` to import About component
- [ ] Update `frontend/src/app/page.tsx` to import Contact component
- [ ] Render Hero, About, Contact in vertical flow
- [ ] Add smooth scrolling CSS (`html { scroll-behavior: smooth; }`)

---

## Phase 4: Projects Section

### Projects Grid Page
- [ ] Create `frontend/src/app/projects/` directory
- [ ] Create `frontend/src/app/projects/page.tsx`
- [ ] Import projects data from `projects.ts`
- [ ] Create responsive grid layout using Tailwind grid
- [ ] Display project cards with Shadcn Card component
- [ ] Add project title to each card
- [ ] Add short description to each card
- [ ] Add thumbnail image to each card using `next/image`
- [ ] Add "Code" link button to each card
- [ ] Add "Try" link button to each card
- [ ] Add "Read More" button that routes to `/projects/[slug]`
- [ ] Style cards with hover effects
- [ ] Ensure responsive grid: 1 column (mobile), 2 (tablet), 3 (desktop)

### Project Detail Page
- [ ] Create `frontend/src/app/projects/[slug]/` directory
- [ ] Create `frontend/src/app/projects/[slug]/page.tsx`
- [ ] Implement dynamic route using slug parameter
- [ ] Fetch project data from `projects.ts` by matching slug
- [ ] Implement 404 handling for invalid slugs
- [ ] Display project title in header
- [ ] Display hero image in header
- [ ] Add "Problem" section with description
- [ ] Add "Approach" section with description
- [ ] Add "Execution" section with implementation details
- [ ] Add "Business Value" section with outcome description
- [ ] Add visuals gallery/screenshots using `next/image`
- [ ] Add back button or breadcrumb navigation
- [ ] Implement `generateStaticParams` for static generation
- [ ] Configure dynamic metadata (title, description) per project
- [ ] Apply consistent Shadcn component styling

---

## Phase 5: Navigation & Scroll Behavior

- [ ] Add `'use client'` directive to Header component
- [ ] Detect current page using `usePathname()` from `next/navigation`
- [ ] Import `useRouter()` from `next/navigation`
- [ ] Implement scroll-to-section logic for Home, About, Contact when on `/`
- [ ] Use `document.getElementById().scrollIntoView()` for smooth scrolling
- [ ] Implement route-to-home logic for Home, About, Contact when on `/projects/*`
- [ ] Handle hash fragment routing (`/#about`, `/#contact`)
- [ ] Ensure Projects link always routes to `/projects`
- [ ] Test smooth scrolling behavior
- [ ] Test navigation from projects page to home sections
- [ ] Implement mobile menu (hamburger) if needed
- [ ] Test mobile menu functionality

---

## Phase 6: Styling & Responsiveness

### Global Styles
- [ ] Configure Tailwind theme in `globals.css` (colors)
- [ ] Configure Tailwind theme in `globals.css` (fonts)
- [ ] Configure Tailwind theme in `globals.css` (spacing)
- [ ] Add custom Tailwind utilities if needed
- [ ] Ensure consistent spacing across components
- [ ] Ensure consistent typography across components

### Responsive Design
- [ ] Test Home page on mobile viewport
- [ ] Test Home page on tablet viewport
- [ ] Test Home page on desktop viewport
- [ ] Test Projects page on mobile viewport
- [ ] Test Projects page on tablet viewport
- [ ] Test Projects page on desktop viewport
- [ ] Test Project detail page on mobile viewport
- [ ] Test Project detail page on tablet viewport
- [ ] Test Project detail page on desktop viewport
- [ ] Apply Tailwind responsive prefixes where needed (`sm:`, `md:`, `lg:`)
- [ ] Ensure all images scale appropriately
- [ ] Test Header navigation on mobile
- [ ] Verify hamburger menu functionality (if implemented)

### Accessibility
- [ ] Add `alt` text to all images
- [ ] Ensure semantic HTML for Header (`<nav>`)
- [ ] Ensure semantic HTML for main content (`<main>`)
- [ ] Ensure semantic HTML for sections (`<section>`)
- [ ] Ensure semantic HTML for Footer (`<footer>`)
- [ ] Test keyboard navigation through site
- [ ] Add ARIA labels where needed
- [ ] Test with screen reader (if possible)

---

## Phase 7: Content & Assets

### Gather Assets
- [ ] Prepare professional photo for Hero section
- [ ] Prepare AI-edited image for Hero (Gemini Nano Banana style)
- [ ] Prepare work experience images
- [ ] Prepare education images
- [ ] Prepare certification images
- [ ] Prepare certification logos
- [ ] Prepare project thumbnails
- [ ] Prepare project screenshots/visuals
- [ ] Prepare skill icons (or confirm lucide-react coverage)
- [ ] Finalize CV and export as PDF
- [ ] Create `frontend/public/images/avatar/` directory
- [ ] Create `frontend/public/images/projects/` directory
- [ ] Create `frontend/public/cv/` directory
- [ ] Store avatar images in `public/images/avatar/`
- [ ] Store project images in `public/images/projects/`
- [ ] Store CV in `public/cv/sammie-knoppert-cv.pdf`

### Populate Data Files
- [ ] Fill real work experience data in `profile.ts`
- [ ] Fill real education data in `profile.ts`
- [ ] Fill real certification data in `profile.ts`
- [ ] Fill real skills data in `profile.ts`
- [ ] Add real contact information (email, LinkedIn, GitHub)
- [ ] Fill real project data in `projects.ts`
- [ ] Write project descriptions (problem, approach, execution, value)
- [ ] Add project tags in `projects.ts`
- [ ] Add project links (code, demo) in `projects.ts`
- [ ] Review and polish all text content for professionalism

---

## Final Testing & Deployment

- [ ] Run `npm run build` and verify no errors
- [ ] Test all navigation flows
- [ ] Verify smooth scrolling works
- [ ] Test all external links (GitHub, LinkedIn, email)
- [ ] Test CV download
- [ ] Run Lighthouse audit
- [ ] Optimize performance if Lighthouse score < 90
- [ ] Test on Chrome browser
- [ ] Test on Firefox browser
- [ ] Test on Safari browser
- [ ] Test on mobile device (iOS)
- [ ] Test on mobile device (Android)
- [ ] Deploy to Vercel/Netlify
- [ ] Configure custom domain (sammieknoppert.com)
- [ ] Configure DNS settings
- [ ] Enable HTTPS/SSL
- [ ] Verify production site is accessible
- [ ] Create Git repository and push code
- [ ] Write README.md with project description

---

**Total Tasks:** 161
**Completed:** 0
**Progress:** 0%
