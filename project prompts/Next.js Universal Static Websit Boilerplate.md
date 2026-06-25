�� Next.js Universal Static Websit
Boilerplate

Overview
This document provides a scalable and reusable Next.js project structure for building
multiple static websites such as educational portals, visa consultancy, portfolios, healthcare
services, and more. It supports modern frontend development standards, SEO, accessibility,
and deployment best practices.

�� Recommended Folder Structure
Use the following project layout for each topic-based static site:

my-static-site/
├── public/
│ ├── assets/ → Images, icons, PDFs, etc.
│ ├── favicon.ico
│ ├── robots.txt
│ └── sitemap.xml
│
├── src/
│ ├── app/
│ │ ├── layout.tsx → Root layout with Header/Footer
│ │ ├── page.tsx → Home page
│ │ ├── about/
│ │ ├── services/
│ │ ├── contact/
│ │ ├── login/
│ │ ├── signup/
│ │ ├── privacy/
│ │ └── terms/
│ ├── components/
│ │ ├── common/ → Header, Footer, SEO, etc.
│ │ ├── forms/ → Contact, Login, Signup
│ │ └── ui/ → Button, Input, etc.
│ ├── styles/ → Tailwind and global CSS
│ ├── utils/ → Validations, constants
│ └── lib/ → Google Analytics, utilities
│

├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md
└── package.json

⚙️ Tech Stack
Feature Technology Used
Frontend Next.js App Router
Styling Tailwind CSS
Forms React Hook Form (+ Yup optional)
SEO Dynamic via Head tag
Accessibility ARIA, keyboard navigation
Analytics Google Analytics 4 Setup

�� Steps to Reuse for Any New Topic
1. Duplicate the base folder and rename (e.g., visa-site, doctor-site).
2. Update `constants.ts` for title, tagline, contact info.
3. Edit SEO details in `SeoHead.tsx` on each page.
4. Replace images in `public/assets/`.
5. Customize page.tsx content according to topic.

�� robots.txt &amp; sitemap.xml
Place both files inside the `public/` directory.

robots.txt

User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml

�� Installation Commands
npx create-next-app my-static-site --app --ts

cd my-static-site
# Tailwind Setup
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Forms
npm install react-hook-form
# Optional: Schema Validation
npm install yup @hookform/resolvers