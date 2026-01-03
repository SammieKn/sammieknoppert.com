# sammieknoppert.com
A personal website for sammieknoppert.com

# 🚀 Project Status: Portfolio Monorepo

## ✅ What We Have Done So Far

### 1. Environment & Tooling

- **Version Management:** Configured `fnm` for Node.js (v24+) and `uv` for Python (3.12+).
- **VS Code Optimization:**
    - Set up `.vscode/settings.json` with **Black** (79 chars) and **Isort** for Python, and **Prettier** for Frontend.
    - Configured `extensions.json` to ensure consistent tooling.
    - Linked the **Python Interpreter** to the `uv` virtual environment (`backend/.venv`) to fix linting errors.
- **AI Orchestration:** Created `.github/copilot-instructions.md` with rules for Next.js 15, FastAPI, and Pydantic v2.

### 2. Frontend Architecture (Next.js 15)

- **Framework:** Initialized Next.js 15 with App Router and TypeScript.
- **Styling:** Implemented **Tailwind CSS v4** (CSS-first engine).
- **UI System:** Initialized **Shadcn UI** and migrated to a **`src/` directory** layout.
- **Path Aliases:** Configured `tsconfig.json` so `@/*` correctly maps to the `src/` folder.

### 3. Backend Architecture (FastAPI)

- **Engine:** Set up FastAPI managed by `uv`.
- **Middleware:** Configured **CORS** to allow communication with the frontend (`localhost:3000`).
- **Success:** Verified a "Heartbeat" connection where the frontend successfully fetches and displays JSON data from the backend API.

---

## 🛠️ Next Steps (Where We Left Off)

### 1. Supabase Integration

- [ ] Create a project in the Supabase Dashboard.
- [ ] Populate `frontend/.env.local` and `backend/.env` with API keys.
- [ ] Initialize the Supabase Client in both the Python backend and Next.js frontend.

### 2. Database Design

- [ ] Define the **Projects** table (for the App Testing gallery).
- [ ] Define the **Blog** table (for articles).
- [ ] Create Pydantic schemas in the backend to match these tables.

### 3. Feature Development

- [ ] **Project Gallery:** Build a "Bento Grid" component to display apps.
- [ ] **Blog Engine:** Set up Markdown rendering for technical posts.

---

## 💡 Quick Start Commands (in separate terminals)

**Backend:**
```powershell
cd backend
uv run uvicorn app.main:app --reload
```

**Frontend:**
```powershell
cd frontend
npm run dev
```