# shortbusmenace.xyz

Personal site. Astro + Tailwind + React islands. Deploys to Cloudflare Pages.

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — utility styling
- [React](https://react.dev) — tab switcher island only
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting + CI/CD

## Getting started

```bash
npm install
npm run dev       # localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the build locally
```

## Content

All site content lives in one place:

```
src/data/site.ts
```

Edit your bio, links, projects, now page, and contact info there. No need to touch component files.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. In Cloudflare Pages → Create project → Connect to Git
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Done — every push to main triggers a deploy

## Structure

```
src/
  components/
    Header.astro        # topbar, hero, bio, links
    TabSwitcher.tsx     # React island — projects / now / contact tabs
  data/
    site.ts             # all content lives here
  layouts/
    Base.astro          # HTML shell, meta, font imports
  pages/
    index.astro         # main page
  styles/
    global.css          # base styles, font imports, animations
public/
  favicon.svg
```
