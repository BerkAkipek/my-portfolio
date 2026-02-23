# My Portfolio

Personal portfolio website for **Berk Akipek**, built with Next.js App Router and Tailwind CSS.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Features

- Responsive, single-page portfolio layout
- Sticky navigation with desktop/mobile variants
- Project, skills, about, and contact sections
- Resume page at `/resume`
- Downloadable PDF resume from `public/BerkAkipekResume.pdf`

## Local Development

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Run

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Makefile Shortcuts

- `make install`
- `make dev`
- `make build`
- `make start`
- `make lint`

## Project Structure

```text
app/
  layout.tsx         # Root layout and metadata
  globals.css        # Global styles and design tokens
  page.tsx           # Main portfolio page
  resume/page.tsx    # Resume page
components/
  Navbar.tsx
sections/
  HeroSection.tsx
public/
  BerkAkipekResume.pdf
```

## Deployment

This project is ready for Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Deploy with default Next.js settings

## Troubleshooting

- `next build` may fail in restricted/offline environments because `next/font/google` fetches Geist fonts from Google Fonts during build.
- In normal internet-connected environments this works automatically.
