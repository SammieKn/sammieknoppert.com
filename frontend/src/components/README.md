# Components

This directory contains all React components for the portfolio project, organized into logical folders with barrel exports for cleaner imports.

## Structure

```
components/
├── ui/              # Reusable UI components (shadcn/ui based)
├── layout/          # Layout components (Header, Footer, etc.)
├── sections/        # Page section components
└── projects/        # Project-specific components
```

## Barrel Exports

Each component folder includes an `index.ts` barrel export file that re-exports all components from that folder. This allows for cleaner, more concise imports.

### Usage

Instead of importing components individually:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tag, TagList } from "@/components/ui/tag";
```

You can import them together from the barrel export:

```tsx
import { Button, Card, CardContent, CardHeader, Tag, TagList } from "@/components/ui";
```

### Available Barrel Exports

- **`@/components/ui`** - All UI components including Button, Card, Tag, Accordion, Carousel, Navigation, Sheet, etc.
- **`@/components/layout`** - Layout components: Header, Footer, ScrollManager
- **`@/components/sections`** - Section components: Hero, About, Contact
- **`@/components/projects`** - Project components: ProjectLinks
- **`@/hooks`** - Custom hooks: useTheme, useTypingEffect

### Benefits

1. **Cleaner imports**: Group related imports together
2. **Easier refactoring**: Change internal file structure without breaking imports
3. **Better discoverability**: IDE autocomplete shows all available exports
4. **Consistent import patterns**: Standardized across the codebase

### Notes

- All components maintain their original exports (types, variants, sub-components)
- No circular dependencies - barrel exports only re-export, never import
- Individual imports (e.g., `from "@/components/ui/button"`) still work for tree-shaking concerns
- Both named exports and type exports are supported

## Component Guidelines

### UI Components

These are reusable, presentational components based on shadcn/ui and Radix UI:
- Always use TypeScript for type safety
- Use Tailwind CSS for styling with the `cn()` utility for class merging
- Default to Server Components unless interactivity is needed
- Use `'use client'` directive only when necessary (state, event handlers, etc.)

### Layout Components

Structural components that define the page layout:
- Header: Navigation and branding
- Footer: Site footer with links and copyright
- ScrollManager: Handles scroll behavior and animations

### Section Components

Large page sections that compose multiple UI components:
- Hero: Landing section with introduction
- About: Skills and experience showcase
- Contact: Contact form and information

## Example Component

```tsx
// components/ui/my-component.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface MyComponentProps {
  className?: string;
  children: React.ReactNode;
}

export function MyComponent({ className, children }: MyComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  );
}

// Export in components/ui/index.ts
export { MyComponent, type MyComponentProps } from "./my-component";
```

## Adding New Components

When creating new components:

1. Create the component file in the appropriate folder
2. Export the component and any related types/variants
3. Add the export to the folder's `index.ts` barrel export
4. Document any special usage patterns or props
5. Verify TypeScript compilation passes: `npx tsc --noEmit`

## Migration

Existing imports using individual file paths will continue to work. Migration to barrel exports is optional and can be done gradually as files are updated.
