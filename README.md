# Charan Ramagiri Portfolio

A responsive developer portfolio presenting my skills, projects, certifications, and contact information as a 2026 Computer Science graduate pursuing Software Developer and Full Stack Developer opportunities.

**Live portfolio:** [https://charanramagiri.vercel.app/](https://charanramagiri.vercel.app/)

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

For Vercel, add `VITE_FORMSPREE_ENDPOINT` under **Project Settings → Environment Variables** and enable it for **Production**. Vite injects environment variables at build time, so redeploy the project after adding or changing this value. Preview and Development environments may be enabled separately if needed.

## Production Build

```bash
npm run build
```

The generated `dist/` directory can be deployed to any static hosting provider that supports Vite applications.
