# Project MDX Template

Copy this template to `frontend/src/content/projects/your-slug.mdx` and fill in your content.

---

## Frontmatter (Required)

```yaml
---
title: Your Project Title
slug: your-project-slug
date: "2025-01-15"
summary: A one-sentence description for cards and meta.
cover: /images/projects/your-cover.png
tags:
  - Tag1
  - Tag2
  - Tag3
links:
  code: https://github.com/your/repo
  demo: https://your-demo.com
---
```

### Frontmatter Fields

| Field     | Required | Description                                      |
|-----------|----------|--------------------------------------------------|
| `title`   | ✅       | Project title (shown in header and cards)        |
| `slug`    | ✅       | URL slug (must match filename without `.mdx`)    |
| `date`    | ✅       | Publication date in `YYYY-MM-DD` format          |
| `summary` | ✅       | Short description for project cards and SEO      |
| `cover`   | ✅       | Path to cover image (under `/public`)            |
| `tags`    | ✅       | Array of technology/category tags                |
| `links`   | ❌       | Object with optional `code` and `demo` URLs      |

---

## Content Structure (Flexible)

Write your content in Markdown. Use the custom components below for richer layouts.

```mdx
<Lead>
A longer intro paragraph that stands out from regular text.
</Lead>

## Section Heading

Regular paragraph text goes here. Use **bold** and *italic* for emphasis.

<Callout title="Key Insight">
Highlight important information or lessons learned.
</Callout>

## Another Section

- Bullet point one
- Bullet point two
- Bullet point three

<Gallery>
![Screenshot 1](/images/projects/screenshot1.png)
![Screenshot 2](/images/projects/screenshot2.png)
</Gallery>

## Results

Wrap up with outcomes, metrics, or next steps.
```

---

## Available Components

### `<Lead>`
A larger, muted paragraph for introductions.

### `<Callout title="Optional Title">`
A card-style callout for tips, warnings, or key insights.

### `<Gallery>`
A responsive 2-column grid for grouping images.

### Standard Markdown
- Headings (`## H2`, `### H3`)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes (`>`)
- Images (`![alt](/path)`)

---

## Example: Full Project

```mdx
---
title: Data Pipeline Automation
slug: data-pipeline-automation
date: "2025-03-20"
summary: Automated ETL pipeline reducing manual processing by 80%.
cover: /images/projects/pipeline-cover.png
tags:
  - Python
  - Apache Airflow
  - Data Engineering
links:
  code: https://github.com/example/pipeline
---

<Lead>
A production ETL pipeline that transformed our data team's workflow.
</Lead>

## The Challenge

Manual data processing took 8+ hours daily and was error-prone.

## Approach

Design an idempotent, observable pipeline with clear failure modes.

<Callout title="Design Principle">
Every step should be retryable without side effects.
</Callout>

## Implementation

Built with Apache Airflow and Python:

- **Extraction** – Incremental pulls from 5 source systems
- **Transformation** – dbt models for business logic
- **Loading** – Upserts to Snowflake warehouse

<Gallery>
![DAG Overview](/images/projects/dag.png)
![Monitoring Dashboard](/images/projects/monitoring.png)
</Gallery>

## Results

- Processing time: 8 hours → 45 minutes
- Error rate: 12% → <1%
- Team freed for higher-value analysis work
```

---

## Tips

1. **Keep summaries short** – They appear on cards; 10-15 words max.
2. **Use meaningful slugs** – Readable URLs are better for SEO.
3. **Optimize images** – Use WebP/PNG, keep under 500KB.
4. **Date ordering** – Newer dates appear first in the project list.
5. **Test locally** – Run `npm run dev` and visit `/projects/your-slug`.
