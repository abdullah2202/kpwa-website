# KPWA Website (kpwa.co.uk)

Static website for Khyber Pukhtoon Welfare Association (KPWA).
Built with React + Vite + Tailwind CSS.

## Local development

1) Install dependencies:
   npm install

2) Run dev server:
   npm run dev

3) Build for production:
   npm run build

4) Preview the production build locally:
   npm run preview

## Adding PDFs

Place PDF files in:
public/pdfs/

Then update the links in:
src/data/documents.js

Example link format:
href: "/pdfs/your-file.pdf"

## Branching workflow (as requested)

- `main`: production-ready
- `dev`: integration branch

New work:
- create: `feature/<feature-name>` from `dev`
- merge: `feature/<feature-name>` -> `dev`
- release: `dev` -> `main`

## Future API integration

When a backend exists, set:
VITE_API_BASE_URL=https://api.kpwa.co.uk (example)

and implement API calls in a dedicated /src/api layer.
