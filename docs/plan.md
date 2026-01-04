# 📍 Phase 2: From Setup to "First Feature"

## 1. The Connection (Infrastructure)
*Goal: Enable the Backend to save data and the Frontend to read it.*
- [ ] **Supabase Setup:** Create a new project in the Supabase Dashboard.
- [ ] **Environment Keys:**
    - [ ] Create `backend/.env` (Database URL + Service Key).
    - [ ] Create `frontend/.env.local` (Database URL + Anon Key).
- [ ] **Client Initialization:**
    - [ ] Write `backend/app/core/supabase.py` (Python Client).
    - [ ] Write `frontend/src/lib/supabase.ts` (TypeScript Client).
- [ ] **The "Smoke Test":** Create a temporary table (e.g., `test_table`) and successfully fetch a row from it on the homepage.

## 2. The Definition (Project Specs)
*Goal: Create clear instructions that the AI can use to write code for us.*
- [ ] **Core Feature List:** Decide exactly what modules we need (e.g., "Hero Section", "Bento Grid Portfolio", "Tech Blog").
- [ ] **Write Spec 01: The Portfolio Grid:**
    - Define User Story ("As a recruiter...").
    - Define Data Schema (Title, Image, Tech Stack, Link).
    - Define UI Components (Card, Badge, Grid).
- [ ] **Write Spec 02: The Blog:**
    - Define User Story ("As a reader...").
    - Define Data Schema (Slug, Title, Content, Published Date).
    - Define UI Components (Typography, Markdown Viewer).

## 3. The Design (Visuals & Inspiration)
*Goal: Map our features to Shadcn components so the site looks professional.*
- [ ] **Inspiration Phase:** Browse *BentoGrids* or *Godly* to find a layout for the "Portfolio Grid."
- [ ] **Component Selection:**
    - Choose a Shadcn "Card" style for projects.
    - Choose a "Navigation" layout (Sidebar vs. Top Bar).
- [ ] **Mockup:** Create a rough "wireframe" (mental or drawn) of the Homepage structure.