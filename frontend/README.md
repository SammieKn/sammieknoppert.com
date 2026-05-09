This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Content Management

### MDX Projects

This project uses MDX files for project content located in `src/content/projects/`. To make the content compatible with Cloudflare Workers (which don't support Node.js `fs` module), the project uses a build-time approach:

1. **MDX Files**: Project content is stored as MDX files in `src/content/projects/`
2. **Build-Time Generation**: Before building, a script (`scripts/generate-projects-manifest.mjs`) reads all MDX files and generates a static JSON manifest at `src/data/projects.json`
3. **Runtime Loading**: The application imports and uses the JSON manifest instead of reading files at runtime

This approach ensures that:
- No filesystem access is needed at runtime
- The site works on Cloudflare Workers and other edge platforms
- Projects are bundled statically at build time
- Changes to MDX files are automatically included in the next build

### Adding New Projects

1. Create a new MDX file in `src/content/projects/` with frontmatter (the filename determines the slug):

```mdx
---
title: Your Project Title
date: "2025-01-30"
summary: A brief summary of your project
cover: /images/projects/your-image.svg
featured: false
tags:
  - Tag1
  - Tag2
links:
  code: https://github.com/...
  demo: https://example.com/
---

Your project content goes here...
```

**Note**: The slug is automatically derived from the filename. For example, `my-awesome-project.mdx` will have the slug `my-awesome-project`.

2. Run the build or dev command (manifest generation happens automatically)
3. The new project will appear on the projects page

## Deployment

This project is designed to be deployed on Cloudflare Workers using OpenNext for Cloudflare:

```bash
npm run deploy
```

The deployment process automatically:
1. Generates the projects manifest from MDX files
2. Builds the Next.js application
3. Deploys to Cloudflare Workers

### Pull request previews

Pull requests that change `frontend/**` trigger the
`.github/workflows/deploy-pr-preview.yml` workflow. It deploys a PR-specific
Cloudflare Worker preview and comments the preview URL on the pull request.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
