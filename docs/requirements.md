
# Requirements & Technical Specifications

**Status:** Approved for Implementation (Static V1)
**Project:** Portfolio Monorepo (Next.js + FastAPI)

---

## 1. Goal of the Website
The website will be used for two main purposes:
1. To promote myself to future employers or clients.
2. To learn new skills, and as a place where I can host my side projects.

---

## 2. Directory Structure & Architecture
To ensure a clean separation of content and code (allowing for easy updates), the frontend will containt atleast these elements:

```text
frontend/
├── public/
│   ├── images/
│   │   ├── avatar/          # avatar images of myself
│   │   └── projects/        # project-thumbnails/
│   └── cv/                  # sammie-knoppert-cv.pdf
├── src/
│   ├── app/
│   │   ├── page.tsx         # SINGLE PAGE: Contains Hero, About, Contact sections
│   │   ├── projects/
│   │   │   ├── page.tsx     # The Grid View of all projects
│   │   │   └── [slug]/      # Dynamic Route for Project Details
│   │   │       └── page.tsx
│   ├── components/
│   │   ├── layout/          # Header.tsx, Footer.tsx
│   │   ├── sections/        # Hero.tsx, About.tsx, Contact.tsx
│   │   └── ui/              # Shadcn reusable components
│   └── data/                # THE "STATIC DB" (Source of Truth)
│       ├── profile.ts       # Exports: workExperience, education, certifications, skills
│       └── projects.ts      # Exports: projects array (slug, content, tags)

```

---

## 3. Global Layout

### Header (Navigation Logic)

The header must be sticky and contain my name and the navigation links.
**Crucial Navigation Behavior:**

* **"Home", "About", "Contact"**: These are sections on the main landing page.
* *If on Home:* Clicking these scrolls smoothly to the section ID (e.g., `#about`).
* *If on Projects:* Clicking these routes to `/#about` (redirects to home then scrolls).


* **"Projects"**: This is a separate page. Clicking it always routes to `/projects`.

### Footer

* Small icons with links to my socials and email.
* A message stating the website is open source, with a hyperlink to the GitHub repository.

---

## 4. Page Content Requirements

### A. Home Section (The Single Page)

The Home page (`src/app/page.tsx`) flows vertically: **Hero -> About -> Contact**.

#### 1. Hero Section

* **Layout:** Dedicated top section.
* **Content:**
* Welcome message: "Hi, I'm Sammie Knoppert 👋"
* Headline: "Bridge between Civil Engineering and AI"
* Elevator pitch: "1-2 sentence summary describing my role as a business professional in taking business problems in civil engineering and translating them to AI solutions."
* **Visual:** A professional/playful picture of myself edited by AI (using a consistent "Gemini Nano Banana" character style).



#### 2. About Me Section

This section reads data from `src/data/profile.ts`.

* **Work Experience:**
* List items: Company, Start/End Date, Role, Description (2-3 sentences),
* Small image of me working.


* **Education:**
* List items: Title, Level, Year, University, Grade, Description,
* Small image of me studying.


* **Certifications:**
* Interactive Menu (Accordion or Modal): Clicking opens details.
* Content: Logo, Title, Date.
* Visual: Small image of me holding a certification.


* **Skills:**
* Carousel: Icons with text (e.g., Python logo + "Python") scrolling horizontally.


* **Resume:**
* Action: A prominent download button for my CV.



#### 3. Contact Section

* **Text:** "Would love to connect to share ideas, provide help or to brainstorm. Use the links below".
* **Visual:** An image to the right side with my icon pointing downwards.
* **Details:**
* Email address promptly displayed.
* Row of icons: LinkedIn, GitHub.



---

### B. Projects Section (Separate Page)

#### 1. Projects Grid (`/projects`)

* **View:** A responsive grid of project cards.
* **Card Content:**
* Title
* One-sentence description
* Image of the project
* Links: "Code", "Try", or "Read More" (Links to Detail Page).



#### 2. Project Detail Page (`/projects/[slug]`)

* **Data Source:** `src/data/projects.ts` (matched by slug).
* **Content Structure:**
* **Header:** Title & Image.
* **Problem:** What was solved?
* **Approach:** How did I think about it?
* **Execution:** Implementation details.
* **Business Value:** What was the outcome?
* **Visuals:** Gallery or screenshots.