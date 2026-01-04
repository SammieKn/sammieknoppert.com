# [Feature Name]

**Status:** Draft | Approved | Implemented
**Priority:** High | Medium | Low
**Date:** YYYY-MM-DD

---

## 1. User Story
> As a **[User Role]**, I want to **[Action]** so that **[Benefit]**.

## 2. Core Requirements (The "What")
* [ ] Requirement 1
* [ ] Requirement 2
* [ ] Requirement 3

## 3. Acceptance Criteria (The "Definition of Done")
* [ ] When a user clicks X, Y happens.
* [ ] If the API fails, an error message is shown.

---

## 4. Data Model (Backend)
**Table:** `table_name`
| Field Name | Type | Required? | Notes |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Yes | Primary Key |
| `created_at` | Timestamp | Yes | Default now() |
| ... | ... | ... | ... |

**API Endpoints:**
* `GET /api/resource` - Description
* `POST /api/resource` - Description

## 5. UI/UX Design (Frontend)
**Components:**
* List key components (e.g., `ProjectCard.tsx`, `FilterBar.tsx`).
* Mention Shadcn components to use (e.g., `Card`, `Badge`, `Button`).

**Visual Layout:**
* *Describe the layout (e.g., "A 3-column grid that turns into 1 column on mobile").*

## 6. Implementation Plan (AI Prompts)
*Step-by-step instructions for the AI:*
1.  Backend: Create DB migration and Pydantic schema.
2.  Backend: Create API router and endpoints.
3.  Frontend: Create Types matching Pydantic schema.
4.  Frontend: Build UI components and connect to API.