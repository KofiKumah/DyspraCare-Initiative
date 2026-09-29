# DyspraCare

DyspraCare is an educational, preliminary screening experience for families and educators exploring developmental coordination disorder (DCD/dyspraxia). It does not diagnose DCD and is not a substitute for a professional assessment.

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project structure

- `src/app/` contains the App Router pages and global styles.
- `src/components/` contains reusable layout, homepage, and shadcn/ui-compatible primitives.
- `src/lib/data/` holds milestone examples, educational resources, FAQs, and screening configuration separately from presentation.

The screening questionnaire, activities, scoring, and report routes are intentionally placeholders until their content and behavior are ready for implementation.