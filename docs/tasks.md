# Task List: Portfolio Website Implementation

**Project:** sammieknoppert.com
**Status:** Not Started
**Date:** January 4, 2026

---

## Phase 1: Static Data Structure

- [x] 1.1 Create `frontend/src/data/` directory
- [x] 1.2 Create TypeScript interfaces for WorkExperience in `profile.ts`
- [x] 1.3 Create TypeScript interfaces for Education in `profile.ts`
- [x] 1.4 Create TypeScript interfaces for Certification in `profile.ts`
- [x] 1.5 Create TypeScript interfaces for Skill in `profile.ts`
- [x] 1.6 Export sample WorkExperience data array
- [x] 1.7 Export sample Education data array
- [x] 1.8 Export sample Certification data array
- [x] 1.9 Export sample Skill data array
- [x] 1.10 Create TypeScript interface for Project in `projects.ts`
- [x] 1.11 Export sample Project data array with at least 2-3 projects
- [x] 1.12 Ensure all slugs are URL-safe and unique
- [x] 1.13 Verify image paths reference `/public/images/` correctly

Developer note: Keep the frontend “static-first” by avoiding any required backend fetch() in Server Components until the backend is intentionally introduced (otherwise next build will fail during prerender).

---

## Phase 2: Layout & Navigation

- [x] 2.1 Create `frontend/src/components/layout/` directory
- [x] 2.2 Create `Header.tsx` component with sticky header styling
- [x] 2.3 Add name/logo to Header on the left side
- [x] 2.4 Add navigation links (Home, About, Contact, Projects) to Header
- [x] 2.5 Implement navigation logic placeholders (to be completed in Phase 5)
- [x] 2.6 Use Shadcn NavigationMenu component in Header

Developer note: Installed shadcn/ui `navigation-menu` via CLI and created `Header.tsx` using the stock component with basic link hrefs; Phase 5 will add route-aware scroll behavior.
- [x] 2.7 Create `Footer.tsx` component
- [x] 2.8 Add social icons (LinkedIn, GitHub) to Footer using lucide-react
- [x] 2.9 Add email address to Footer
- [x] 2.10 Add "Open Source" message with GitHub repository link to Footer
- [x] 2.11 Update `frontend/src/app/layout.tsx` to import Header component
- [x] 2.12 Update `frontend/src/app/layout.tsx` to import Footer component
- [x] 2.13 Configure metadata (title, description, OG tags) in layout.tsx
- [x] 2.14 Apply global styles from `globals.css`

Developer note: Added `Footer.tsx` (lucide icons + email + open-source link) and wired both `<Header />` and `<Footer />` into the root layout so the header/footer render on every page; updated basic site metadata while keeping global styles via `globals.css`.

---

## Phase 3: Home Page (Single Page Flow)

### Hero Section
- [x] 3.1.1 Create `frontend/src/components/sections/` directory
- [x] 3.1.2 Create `Hero.tsx` component
- [x] 3.1.3 Add welcome message to Hero
- [x] 3.1.4 Add headline to Hero
- [x] 3.1.5 Add elevator pitch (1-2 sentences) to Hero
- [x] 3.1.6 Add placeholder for hero image
- [x] 3.1.7 Add CTA button using Shadcn Button component
- [x] 3.1.8 Style Hero section as full-screen or prominent top section

Developer note: Installed the stock shadcn `Button` component, created a server `Hero` section with Next `Image` + two CTA buttons, and rendered it on the home page for immediate verification.

### About Section
- [x] 3.2.1 Create `About.tsx` component
- [x] 3.2.2 Add `id="about"` to About section for scroll navigation
- [x] 3.2.3 Create Work Experience subsection
- [x] 3.2.4 Import WorkExperience data from `profile.ts`
- [x] 3.2.5 Display work experience using Shadcn Card component
- [x] 3.2.6 Create Education subsection
- [x] 3.2.7 Import Education data from `profile.ts`
- [x] 3.2.8 Display education using card layout
- [x] 3.2.9 Create Certifications subsection
- [x] 3.2.10 Use Shadcn Accordion or Dialog for certifications
- [x] 3.2.11 Import Certification data from `profile.ts`
- [x] 3.2.12 Display certification details on interaction
- [x] 3.2.13 Create Skills subsection
- [x] 3.2.14 Use Shadcn Carousel for skills display
- [x] 3.2.15 Import Skill data from `profile.ts`
- [x] 3.2.16 Display skills with lucide-react icons
- [x] 3.2.17 Add Resume Download button with Download icon
- [x] 3.2.18 Link Resume button to `/cv/sammie-knoppert-cv.pdf`
- [x] 3.2.19 Optimize all images using `next/image`

Developer note: Installed shadcn `card`, `accordion`, and `carousel`; built a data-driven `About` section rendering Work/Education as Cards, Certifications as an Accordion with images, Skills as a Carousel with lucide icons, and a resume download CTA, then wired it into the home page.

### Contact Section
- [x] 3.3.1 Create `Contact.tsx` component
- [x] 3.3.2 Add `id="contact"` to Contact section for scroll navigation
- [x] 3.3.3 Add contact message text
- [x] 3.3.4 Display email address prominently
- [x] 3.3.5 Add social icons (LinkedIn, GitHub) using lucide-react
- [x] 3.3.6 Add placeholder for pointing-down icon image
- [x] 3.3.7 Style Contact section with clean, minimal design

Developer note: Created a shadcn Card/Button-based `Contact` section with a prominent mailto email, lucide social buttons (LinkedIn/GitHub) matching the footer links, added a lightweight placeholder pointing-down SVG in `public/images/icons/`, and rendered the section on the home page for immediate verification.

### Assemble Home Page
- [x] 3.4.1 Update `frontend/src/app/page.tsx` to import Hero component
- [x] 3.4.2 Update `frontend/src/app/page.tsx` to import About component
- [x] 3.4.3 Update `frontend/src/app/page.tsx` to import Contact component
- [x] 3.4.4 Render Hero, About, Contact in vertical flow
- [x] 3.4.5 Add smooth scrolling CSS (`html { scroll-behavior: smooth; }`)

Developer note: Assembled the full home page by rendering the existing shadcn-based `Hero`, `About`, and `Contact` sections in a single vertical flow and enabled smooth scrolling globally via `globals.css` so header/CTA hash links scroll cleanly.


---

## Phase 4: Projects Section

### Projects Grid Page
- [x] 4.1.1 Create `frontend/src/app/projects/` directory
- [x] 4.1.2 Create `frontend/src/app/projects/page.tsx`
- [x] 4.1.3 Import projects data from `projects.ts`
- [x] 4.1.4 Create responsive grid layout using Tailwind grid
- [x] 4.1.5 Display project cards with Shadcn Card component
- [x] 4.1.6 Add project title to each card
- [x] 4.1.7 Add short description to each card
- [x] 4.1.8 Add thumbnail image to each card using `next/image`
- [x] 4.1.9 Add "Code" link button to each card
- [x] 4.1.10 Add "Try" link button to each card
- [x] 4.1.11 Add "Read More" button that routes to `/projects/[slug]`
- [x] 4.1.12 Style cards with hover effects
- [x] 4.1.13 Ensure responsive grid: 1 column (mobile), 2 (tablet), 3 (desktop)

### Project Detail Page
- [x] 4.2.1 Create `frontend/src/app/projects/[slug]/` directory
- [x] 4.2.2 Create `frontend/src/app/projects/[slug]/page.tsx`
- [x] 4.2.3 Implement dynamic route using slug parameter
- [x] 4.2.4 Fetch project data from `projects.ts` by matching slug
- [x] 4.2.5 Implement 404 handling for invalid slugs
- [x] 4.2.6 Display project title in header
- [x] 4.2.7 Display hero image in header
- [x] 4.2.8 Add "Problem" section with description
- [x] 4.2.9 Add "Approach" section with description
- [x] 4.2.10 Add "Execution" section with implementation details
- [x] 4.2.11 Add "Business Value" section with outcome description
- [x] 4.2.12 Add visuals gallery/screenshots using `next/image`
- [x] 4.2.13 Add back button or breadcrumb navigation
- [x] 4.2.14 Implement `generateStaticParams` for static generation
- [x] 4.2.15 Configure dynamic metadata (title, description) per project
- [x] 4.2.16 Apply consistent Shadcn component styling

Developer note: Implemented a complete Projects section with a responsive `/projects` grid (shadcn Cards + Buttons, `next/image` thumbnails, and external Code/Try links) and a statically generated `/projects/[slug]` detail page (404 handling, dynamic metadata, Problem/Approach/Execution/Business Value Cards, and a visuals gallery), all backed by the existing `projects.ts` data.

---

## Phase 5: Navigation & Scroll Behavior

- [x] 5.1 Add `'use client'` directive to Header component
- [x] 5.2 Detect current page using `usePathname()` from `next/navigation`
- [x] 5.3 Import `useRouter()` from `next/navigation`
- [x] 5.4 Implement scroll-to-section logic for Home, About, Contact when on `/`
- [x] 5.5 Use `document.getElementById().scrollIntoView()` for smooth scrolling
- [x] 5.6 Implement route-to-home logic for Home, About, Contact when on `/projects/*`
- [x] 5.7 Handle hash fragment routing (`/#about`, `/#contact`)
- [x] 5.8 Ensure Projects link always routes to `/projects`
- [x] 5.9 Test smooth scrolling behavior
- [x] 5.10 Test navigation from projects page to home sections
- [x] 5.11 Implement mobile menu (hamburger) if needed
- [x] 5.12 Test mobile menu functionality

Developer note: Updated the header navigation to be route-aware: on `/` it smoothly scrolls to the section IDs via `scrollIntoView({ behavior: "smooth" })`, and from `/projects/*` it routes to `/#section` but forces a one-time non-smooth jump so it doesn’t “fake scroll” from the previous page position. Mobile menu tasks were evaluated; the current nav stays as a single-row `NavigationMenu` for now.

---

## Phase 6: Styling & Responsiveness

### Global Styles
 [x] 6.1.1 Configure Tailwind theme in `globals.css` (colors)
 [x] 6.1.2 Configure Tailwind theme in `globals.css` (fonts)
 [x] 6.1.3 Configure Tailwind theme in `globals.css` (spacing)
 [x] 6.1.4 Add custom Tailwind utilities if needed
 [x] 6.1.5 Ensure consistent spacing across components
 [x] 6.1.6 Ensure consistent typography across components

 Developer note: Updated `globals.css` to add heading typography scales, section rhythm, container gutters/max-width (fixing the left-edge flush issue), and anchor offset for the sticky header. Also added a shadcn-style `Avatar` component in `src/components/ui/avatar.tsx` (no new deps) to standardize avatar usage going forward.

### Overhaul About section

-

- I do not think the `avatar.tsx` component is used. If not, please delete it.

### Responsive Design
- [ ] 6.2.1 Test Home page on mobile viewport
- [ ] 6.2.2 Test Home page on tablet viewport
- [ ] 6.2.3 Test Home page on desktop viewport
- [ ] 6.2.4 Test Projects page on mobile viewport
- [ ] 6.2.5 Test Projects page on tablet viewport
- [ ] 6.2.6 Test Projects page on desktop viewport
- [ ] 6.2.7 Test Project detail page on mobile viewport
- [ ] 6.2.8 Test Project detail page on tablet viewport
- [ ] 6.2.9 Test Project detail page on desktop viewport
- [ ] 6.2.10 Apply Tailwind responsive prefixes where needed (`sm:`, `md:`, `lg:`)
- [ ] 6.2.11 Ensure all images scale appropriately
- [ ] 6.2.12 Test Header navigation on mobile
- [ ] 6.2.13 Verify hamburger menu functionality (if implemented)

### Accessibility
- [ ] 6.3.1 Add `alt` text to all images
- [ ] 6.3.2 Ensure semantic HTML for Header (`<nav>`)
- [ ] 6.3.3 Ensure semantic HTML for main content (`<main>`)
- [ ] 6.3.4 Ensure semantic HTML for sections (`<section>`)
- [ ] 6.3.5 Ensure semantic HTML for Footer (`<footer>`)
- [ ] 6.3.6 Test keyboard navigation through site
- [ ] 6.3.7 Add ARIA labels where needed
- [ ] 6.3.8 Test with screen reader (if possible)

---

## Phase 7: Content & Assets

### Gather Assets
- [ ] 7.1.1 Prepare professional photo for Hero section
- [ ] 7.1.2 Prepare AI-edited image for Hero (Gemini Nano Banana style)
- [ ] 7.1.3 Prepare work experience images
- [ ] 7.1.4 Prepare education images
- [ ] 7.1.5 Prepare certification images
- [ ] 7.1.6 Prepare certification logos
- [ ] 7.1.7 Prepare project thumbnails
- [ ] 7.1.8 Prepare project screenshots/visuals
- [ ] 7.1.9 Prepare skill icons (or confirm lucide-react coverage)
- [ ] 7.1.10 Finalize CV and export as PDF
- [ ] 7.1.11 Create `frontend/public/images/avatar/` directory
- [ ] 7.1.12 Create `frontend/public/images/projects/` directory
- [ ] 7.1.13 Create `frontend/public/cv/` directory
- [ ] 7.1.14 Store avatar images in `public/images/avatar/`
- [ ] 7.1.15 Store project images in `public/images/projects/`
- [ ] 7.1.16 Store CV in `public/cv/sammie-knoppert-cv.pdf`

### Populate Data Files
- [ ] 7.2.1 Fill real work experience data in `profile.ts`
- [ ] 7.2.2 Fill real education data in `profile.ts`
- [ ] 7.2.3 Fill real certification data in `profile.ts`
- [ ] 7.2.4 Fill real skills data in `profile.ts`
- [ ] 7.2.5 Add real contact information (email, LinkedIn, GitHub)
- [ ] 7.2.6 Fill real project data in `projects.ts`
- [ ] 7.2.7 Write project descriptions (problem, approach, execution, value)
- [ ] 7.2.8 Add project tags in `projects.ts`
- [ ] 7.2.9 Add project links (code, demo) in `projects.ts`
- [ ] 7.2.10 Review and polish all text content for professionalism

---

## Final Testing & Deployment

- [ ] 8.1 Run `npm run build` and verify no errors
- [ ] 8.2 Test all navigation flows
- [ ] 8.3 Verify smooth scrolling works
- [ ] 8.4 Test all external links (GitHub, LinkedIn, email)
- [ ] 8.5 Test CV download
- [ ] 8.6 Run Lighthouse audit
- [ ] 8.7 Optimize performance if Lighthouse score < 90
- [ ] 8.8 Test on Chrome browser
- [ ] 8.9 Test on Firefox browser
- [ ] 8.10 Test on Safari browser
- [ ] 8.11 Test on mobile device (iOS)
- [ ] 8.12 Test on mobile device (Android)
- [ ] 8.13 Deploy to Vercel/Netlify
- [ ] 8.14 Configure custom domain (sammieknoppert.com)
- [ ] 8.15 Configure DNS settings
- [ ] 8.16 Enable HTTPS/SSL
- [ ] 8.17 Verify production site is accessible
- [ ] 8.18 Create Git repository and push code
- [ ] 8.19 Write README.md with project description

---

## Todo's
TODO:
- Review the look and feel of the home page.
- Why do we need to make an interface export and a workexperience export in profile.ts?
- There are no margins on the left-hand side of the website. be seen by all of the text of the hero section and my name of the header being completely on the left side.
- I want the page to be in dark mode, not in light mode. Preferably there should also be a toggle.
- Work experience should be on it s own row, not next to education.
- The images of work experience education should be smaller, most likely.
- For skills, the arrows are too close on the elements.
- Each of work experience, skills, certifications, and education should be on its own row.
- Include the images i want to use
- Given I am on a project page in read more, when I click on the Contact section, Then I see a fluent scroll that looks weird.
- More details about a project should be a .mdx file to make it user friendly to do the editing. No need to define the sections of a project, this is just something for me to keep in mind.

**Total Tasks:** 161
**Completed:** 0
**Progress:** 0%
