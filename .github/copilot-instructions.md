# Project Context
This is a Monorepo portfolio project.
- **Frontend:** Next.js 15 (App Router), Tailwind CSS, Shadcn UI, TypeScript.
- **Backend:** FastAPI, Python 3.12+, Pydantic v2.
- **Database:** Supabase (PostgreSQL).
- **Package Managers:** `npm` (frontend), `uv` (backend).

# Coding Rules

## Frontend
- **Components:** Default to **Server Components**. Only use `'use client'` for interactivity (state, listeners).
- **UI:** ALWAYS use `shadcn` components (`@/components/ui`) and `lucide-react` icons.
- **Styling:** Use Tailwind. Use the `cn()` utility for class merging.
- **Data Fetching:** - **Server Components:** Use `await fetch('http://127.0.0.1:8000/...')`.
  - **Client Components:** Use `useEffect` or `SWR` to call the FastAPI backend.

## Backend
- **Schema:** Use Pydantic v2 `BaseModel` (use `model_config`, not `class Config`).
- **Handlers:** Use `async def` for all routes.
- **Responses:** Return Pydantic models directly (not raw dictionaries).
- **Docs:** Google Style docstrings.

## Global
- **Formatting (Crucial):** - Python: **Black** formatting (line length **79**) + **Isort**.
  - TS: Prettier defaults.
- **Output:** If I ask for a feature, provide both the Backend Pydantic schema AND the Frontend interface.