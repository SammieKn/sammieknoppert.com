# sammieknoppert.com

> A modern, performant portfolio website showcasing professional experience, projects, and technical expertise — built with Next.js 16 and designed for speed.

[INSERT SCREENSHOT HERE]

---

## 📖 Project Overview

**sammieknoppert.com** is a personal portfolio website designed to highlight professional capabilities, work history, and side projects. The application follows a **static-first architecture**, ensuring blazing-fast load times and excellent SEO while maintaining a clean, modern design.

### Key Highlights

- **Single-page landing** with animated Hero, About, and Contact sections
- **Projects showcase** featuring MDX-powered case studies with a dedicated detail page for each
- **Glass-morphism UI** with subtle animations and gradient accents
- **Fully responsive** design optimized for mobile, tablet, and desktop
- **Static Site Generation (SSG)** for optimal performance

---

## 🛠 Tech Stack

| Layer       | Technology                                                                                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework   | ![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js) ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)                                                         |
| Language    | ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)                                                                                                      |
| Styling     | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)                                                                                                 |
| UI Library  | ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?logo=shadcnui) ![Radix UI](https://img.shields.io/badge/Radix_UI-latest-161618?logo=radixui)                                       |
| Content     | ![MDX](https://img.shields.io/badge/MDX-3-F9AC00?logo=mdx) with `next-mdx-remote` and `gray-matter`                                                                                                   |
| Icons       | ![Lucide](https://img.shields.io/badge/Lucide_React-latest-F56565)                                                                                                                                   |
| Database    | ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase&logoColor=white) *(prepared for future expansion)*                                                                 |
| Backend     | ![FastAPI](https://img.shields.io/badge/FastAPI-Python_3.12+-009688?logo=fastapi&logoColor=white) *(planned)*                                                                                        |

---

## 📋 Prerequisites

Ensure you have the following installed before proceeding:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

Optional (for future backend development):
- **Python** ≥ 3.12
- **uv** (Python package manager)

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sammieknoppert/sammieknoppert.com.git
cd sammieknoppert.com
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```bash
cp .env.example .env.local  # if example exists, otherwise create manually
```

Add the following variables (optional for basic functionality):

```env
# Supabase Configuration (optional - for future features)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note:** The site runs fully static without Supabase configuration. These variables are only needed for future dynamic features.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Usage

### Available Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Start the development server with hot reload     |
| `npm run build` | Create an optimized production build             |
| `npm run start` | Start the production server (run `build` first)  |
| `npm run lint`  | Run ESLint to check for code quality issues      |

### Building for Production

```bash
npm run build
npm run start
```

The build output will show all statically generated routes:

```
Route (app)
├ ○ /                    (Static)
├ ○ /projects            (Static)
├ ● /projects/[slug]     (SSG - generateStaticParams)
```

---

## ✨ Key Features

- **🎨 Animated Hero Section** — Typing effect, floating geometric shapes, gradient orbs, and smooth entrance animations
- **📄 MDX-Powered Projects** — Write project case studies in Markdown with custom React components (`<Lead>`, `<Callout>`)
- **⭐ Featured Project Showcase** — Highlight your best work with a prominent card and glow effects
- **🗂 Dynamic Project Grid** — Responsive grid that adjusts columns based on the number of projects
- **🌙 Dark Mode Design** — Glass-morphism cards with subtle transparency and blur effects
- **📱 Mobile-First Responsive** — Hamburger menu, optimized layouts for all screen sizes
- **⚡ Static Site Generation** — Pre-rendered pages for instant load times
- **🔗 External Links** — Code repository and live demo links for each project

---

## 📁 Folder Structure

```
sammieknoppert.com/
├── frontend/                    # Next.js application
│   ├── public/
│   │   └── images/              # Static assets (avatars, icons, project covers)
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── page.tsx         # Home (Hero, About, Contact)
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx     # Projects listing
│   │   │   │   └── [slug]/      # Dynamic project detail pages
│   │   │   └── layout.tsx       # Root layout with Header/Footer
│   │   ├── components/
│   │   │   ├── layout/          # Header, Footer, ScrollManager
│   │   │   ├── sections/        # Hero, About, Contact sections
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── content/
│   │   │   └── projects/        # MDX project files
│   │   ├── data/
│   │   │   └── profile.ts       # Work experience, education, certifications
│   │   ├── lib/
│   │   │   ├── mdx.ts           # MDX parsing utilities
│   │   │   ├── supabase.ts      # Supabase client (future use)
│   │   │   └── utils.ts         # Helper functions (cn, etc.)
│   │   └── constants/
│   │       └── links.ts         # Navigation and social links
│   ├── package.json
│   └── tsconfig.json
├── backend/                     # FastAPI application (planned)
│   ├── app/
│   │   └── main.py
│   └── pyproject.toml
├── docs/                        # Project documentation
│   ├── plan.md                  # Development roadmap
│   ├── requirements.md
│   └── tasks.md
└── README.md
```

---

## 🔮 Future Improvements

Based on the current architecture and roadmap:

1. **Backend API Integration** — Activate the FastAPI backend to serve dynamic content (blog posts, project analytics, contact form submissions)

2. **Blog Section** — Add a `/blog` route with MDX-powered articles, categories, and reading time estimates

3. **Analytics Dashboard** — Track project views and visitor engagement using Supabase with a private admin panel

4. **Internationalization (i18n)** — Add multi-language support for Dutch and English content

---

## 📄 License

This project is licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Sammie Knoppert**

- Website: [sammieknoppert.com](https://sammieknoppert.com)
- GitHub: [@sammieknoppert](https://github.com/sammieknoppert)
- LinkedIn: [Sammie Knoppert](https://linkedin.com/in/sammieknoppert)