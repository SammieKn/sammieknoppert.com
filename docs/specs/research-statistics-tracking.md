# Research statistics tracking

**Status:** Research / Proposed
**Priority:** Medium
**Date:** 2026-05-10

---

## 1. Goal

Define a Cloudflare-first approach for tracking usage of:

- the website in general
- the `/projects` area
- the planned `/lab` area from issue/PR #58

This issue is intentionally documentation-only. No code is proposed in this
document.

## 2. What should be tracked

The recommendation is to start with a small, privacy-conscious event model:

### Core page-level metrics

- home page views
- projects index views
- individual project detail views
- lab index views
- future individual lab item views

### Interaction metrics

- project card click-throughs
- project outbound clicks (`code`, `demo`, `read more`)
- lab filter usage
- lab card click-throughs
- lab outbound clicks

### Useful dimensions

- date
- route
- content type (`site`, `project`, `lab`)
- content slug
- referrer host
- device class
- country / region derived at the edge

### Non-goals for V1

- user fingerprinting
- full IP storage
- cross-site ad tracking
- session replay / heatmaps
- complex user identity graphs

---

## 3. Recommended stack

### Recommended answer

Use a **Cloudflare-first tracking stack centered on the existing frontend**:

1. **Next.js route handler on Cloudflare Workers** for event ingestion
2. **D1** as the primary analytics store for low-volume portfolio traffic
3. **A private Next.js admin dashboard** rendered from the same frontend app
4. **Cloudflare Access** in front of the dashboard
5. **Simple client instrumentation** from the frontend using first-party events

This keeps the solution inside the current deployment model and avoids adding a
separate analytics vendor or a new backend service too early.

### Why this is the best fit

- The frontend already deploys to **Cloudflare Workers**.
- The website is a portfolio, so traffic is likely moderate enough for D1.
- D1 keeps storage and querying simple with SQL.
- A first-party endpoint avoids third-party analytics scripts.
- The dashboard can live in the same monorepo and reuse the existing UI stack.

### Services considered

### Option A — D1 only (**recommended starting point**)

**Use when:** you want the simplest implementation with the fewest moving
parts.

**Pros**

- simplest architecture
- SQL is enough for dashboard queries
- easy to keep inside the repo
- likely sufficient for portfolio-scale traffic

**Cons**

- raw event volume can grow over time
- less ideal than specialized analytics storage for very high write volume

### Option B — Workers Analytics Engine + D1

**Use when:** traffic grows and you want more event-oriented time-series
storage.

**Recommended split**

- **Analytics Engine** stores raw events
- **D1** stores content metadata, rollups, and dashboard configuration

**Pros**

- better fit for larger event streams
- less pressure on D1 write/query patterns

**Cons**

- more moving parts
- more operational complexity for a first version

### Recommendation

Start with **Option A (D1 only)**, but design the event contract so that the
write target can later be swapped to Analytics Engine if traffic justifies it.

---

## 4. Where should the dashboard live

### Recommended answer

Build the dashboard inside the existing **Next.js frontend**.

### Recommended location

- route: `/admin/analytics` or `/dashboard/analytics`
- hosted by the same Cloudflare deployment as the site
- built with existing shadcn UI components and charts/tables only if needed

### Why keep it in the frontend

- fastest path to implementation
- no additional deployment surface
- consistent styling with the rest of the site
- server-rendered dashboard pages can query D1 directly from the Worker runtime

### Alternative

If you want stronger separation, use a dedicated hostname such as:

- `admin.sammieknoppert.com`

This is the cleanest option if you want private-only access without exposing an
admin route on the public site.

---

## 5. Can authentication restrict the dashboard to only you

### Recommended answer

**Yes.** The cleanest Cloudflare-native option is **Cloudflare Access**.

### Recommended auth model

- protect `admin.sammieknoppert.com` or `/admin/*` with Cloudflare Access
- allow only your identity provider account or email
- let the application trust Access headers / JWT after Cloudflare verifies the
  user

### Why Access is a good fit

- no custom username/password flow to build
- no separate auth database required
- sits at the edge before the app is reached
- aligned with the “keep as much as possible in Cloudflare” requirement

### Practical recommendation

For simplicity, prefer:

- **public site:** `sammieknoppert.com`
- **private dashboard:** `admin.sammieknoppert.com`

That avoids mixing public and private concerns in the same route tree.

### Fallback option

If a separate hostname is not desired:

- protect `/admin/*` with Access
- optionally add Next.js middleware/server-side checks that validate Access
  identity headers before rendering the page

---

## 6. Recommended data model

The model should support both site-wide statistics and content-specific
statistics.

### Minimal D1 schema

### `tracked_content`

Registry of content that can receive views or interactions.

| Column | Type | Notes |
| :--- | :--- | :--- |
| `id` | integer | Primary key |
| `content_type` | text | `site`, `project`, `lab` |
| `slug` | text | Nullable for global pages |
| `route` | text | `/`, `/projects`, `/projects/[slug]`, `/lab` |
| `title` | text | Human-readable label |
| `is_active` | integer | Soft enable/disable |
| `created_at` | text | ISO timestamp |

### `analytics_events`

Append-only event table for raw analytics events.

| Column | Type | Notes |
| :--- | :--- | :--- |
| `id` | text | UUID / event id |
| `event_name` | text | `page_view`, `outbound_click`, `filter_used` |
| `content_id` | integer | FK to `tracked_content`, nullable for global events |
| `route` | text | Final route seen by the server |
| `content_type` | text | Duplicated for easier querying |
| `content_slug` | text | Nullable |
| `session_hash` | text | First-party pseudonymous session identifier |
| `referrer_host` | text | Store host only, not full URL |
| `device_class` | text | `mobile`, `tablet`, `desktop`, `bot`, `unknown` |
| `country_code` | text | Derived at the edge |
| `occurred_at` | text | ISO timestamp |
| `event_date` | text | `YYYY-MM-DD` for easier rollups |

### `analytics_daily_rollups`

Pre-aggregated daily numbers for cheap dashboard queries.

| Column | Type | Notes |
| :--- | :--- | :--- |
| `metric_date` | text | `YYYY-MM-DD` |
| `content_id` | integer | FK to `tracked_content` |
| `event_name` | text | `page_view`, `outbound_click`, etc. |
| `total_events` | integer | Count of events |
| `unique_sessions` | integer | Count by `session_hash` |
| `updated_at` | text | ISO timestamp |

### Why this model works

- `tracked_content` gives one place to map pages, projects, and lab items.
- `analytics_events` keeps raw detail for debugging and future flexibility.
- `analytics_daily_rollups` keeps the dashboard fast and inexpensive.

### Retention recommendation

- keep raw events for a limited period (for example 30 to 90 days)
- keep daily rollups long term

This prevents the database from growing unnecessarily while preserving the
historical dashboard.

### Privacy recommendation

- do not store raw IP addresses
- store referrer host, not full referrer URL
- use a short-lived first-party session id
- optionally respect `Do Not Track`

---

## 7. Where the code should live in this repository

### Recommended answer

Keep analytics implementation in the **frontend package**, not the FastAPI
backend, for V1.

### Why

- the frontend already runs on Cloudflare Workers
- analytics ingestion is closely tied to page navigation and click events
- routing through FastAPI adds another runtime without clear benefit yet

### Suggested placement

### Frontend

- `frontend/src/lib/analytics/`
  - event types
  - payload validation
  - shared dashboard query helpers
- `frontend/src/app/api/track/route.ts`
  - first-party ingestion endpoint
- `frontend/src/app/admin/analytics/page.tsx`
  - private dashboard page
- `frontend/src/app/admin/analytics/_components/`
  - dashboard cards, filters, charts, tables
- `frontend/src/components/projects/`
  - emit project interaction events
- `frontend/src/components/lab/`
  - emit lab interaction events once the lab feature lands
- `frontend/middleware.ts`
  - optional Access-aware route protection

### Infrastructure/config

- Cloudflare bindings/config for D1
- environment typing for D1 access inside the Worker runtime

### Backend

No backend analytics code is recommended for the first version.

Only introduce backend involvement later if:

- you want exports or reporting APIs shared with other systems
- the FastAPI service becomes the main application API

---

## 8. How it should interact with the frontend

### Event flow

1. User lands on a page or clicks a tracked UI element
2. Frontend emits a small first-party analytics payload
3. The request goes to the app’s own tracking endpoint on Cloudflare Workers
4. The Worker validates and writes the event to D1
5. A scheduled aggregation step or write-time upsert updates daily rollups
6. The private dashboard reads rollups directly from D1

### Frontend tracking boundaries

### Track automatically

- page views for `/`
- page views for `/projects`
- page views for `/projects/[slug]`
- page views for `/lab`

### Track explicitly

- clicks on project links
- clicks on lab links
- lab filter selections
- CTA clicks that matter for understanding engagement

### Important implementation note

Keep the client payload small and stable. The frontend should send identifiers
like `content_type`, `content_slug`, `route`, and `event_name`, while edge code
can enrich the record with country or user-agent-derived data.

---

## 9. Proposed implementation plan

### Phase 1 — Define the contract

- decide the exact list of tracked events
- define payload shape and naming conventions
- define privacy boundaries and retention policy

### Phase 2 — Provision Cloudflare resources

- create the D1 database
- add Worker bindings
- confirm local/dev strategy for D1 access

### Phase 3 — Add ingestion

- implement a first-party tracking endpoint
- validate payloads
- write to `analytics_events`
- update or schedule rollups

### Phase 4 — Add instrumentation

- home page views
- projects page/detail views
- project outbound click events
- lab views and lab interactions after the lab section is merged

### Phase 5 — Add private dashboard

- build summary cards
- add date filtering
- add per-project and per-lab views
- protect the route/hostname with Cloudflare Access

### Phase 6 — Harden and tune

- apply retention rules
- add bot filtering
- optionally respect Do Not Track
- decide whether D1 remains enough or whether Analytics Engine is needed

---

## 10. Final recommendation

If the goal is to stay inside Cloudflare and keep the first version lean,
implement:

- **Next.js tracking endpoint on Cloudflare Workers**
- **D1 for storage**
- **private dashboard in the frontend**
- **Cloudflare Access for authentication**

This is the smallest architecture that satisfies:

- general website tracking
- project page tracking
- future lab tracking
- a private dashboard
- Cloudflare-first hosting and operations

It also leaves a clean upgrade path to Workers Analytics Engine later if event
volume or query needs outgrow a D1-only design.
