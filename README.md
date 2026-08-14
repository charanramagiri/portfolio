# Charan Ramagiri Portfolio

A responsive developer portfolio presenting my skills, projects, certifications, and contact information as a 2026 Computer Science graduate pursuing Software Developer and Full Stack Developer opportunities.

## Tech Stack

- React
- Vite
- Framer Motion
- Swiper
- React Icons
- Formspree

## Features

- Responsive desktop and mobile navigation
- Animated Hero with rotating role titles
- About and Skills sections
- Project showcases with screenshot carousels
- Certifications grid
- Accessible Formspree contact form
- Reduced-motion support

## Local Setup

```bash
git clone https://github.com/charanramagiri/portfolio.git
cd portfolio
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` and configure your Formspree endpoint:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Do not commit real environment values.

## Production Build

```bash
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider that supports Vite applications.
