
# 🚀 Next.js Multi‑Page Universal UI Replica & Animation Master Prompts

A **GitHub‑ready prompt system** for building **multi‑page static websites** with **Next.js App Router**, **pixel‑perfect UI replication from screenshots**, and **Wix Studio–level animations using Framer Motion**.

---

## 📦 What This Is For
- Multi‑page SaaS websites
- Agency websites
- Marketing sites
- Product sites
- Content‑driven static sites

Includes:
- Prompt **V1 (Basic – Multi‑Page)**
- Prompt **V2 (Pro – Multi‑Page UI Replica)**
- Prompt **V3 (Agency – Multi‑Page + Animations)**
- Screenshot → UI workflow
- Wix Studio → Framer Motion mapping

---

## 🟢 PROMPT V1 — BASIC (Multi‑Page Static Website)

### Use Case
Simple multi‑page websites (Home, About, Services, Contact, Blog).

### Prompt
```
You are a Senior Frontend Developer.

Build a multi-page static website using:
- Next.js (Latest App Router)
- Tailwind CSS
- Static Site Generation (SSG)

Requirements:
- Multiple pages using App Router routing
- Shared layout (Navbar, Footer)
- SEO metadata per page
- Mobile-first responsive design
- Reusable layout & UI components
- Clean folder structure

Pages:
- Home
- About
- Services
- Contact
- Blog (static)

No advanced animations.
Deliver production-ready code.
```

---

## 🔵 PROMPT V2 — PRO (Multi‑Page UI Replica)

### Use Case
Client work, SaaS websites, screenshot-to-code projects.

### Prompt
```
You are a Senior Frontend Architect.

Build a multi-page static website using:
- Next.js (App Router + TypeScript)
- Tailwind CSS
- Component-driven architecture

Requirements:
- Pixel-perfect UI replication from webpage screenshots
- Each page implemented as a separate route
- Shared layouts using nested layouts
- Fully responsive (mobile, tablet, desktop, XL)
- Consistent design system across pages
- SEO metadata per page

Pages must visually match provided screenshots.
Convert UI into reusable Tailwind components.
Avoid hardcoding values unless necessary.
```

---

## 🔴 PROMPT V3 — AGENCY (Multi‑Page Ultimate Master Prompt)

### Use Case
High-end agencies, premium SaaS, motion-heavy multi-page websites.

### Prompt
```
You are a Senior Frontend Architect + UI/UX Engineer + Motion Designer.

Build a production-ready multi-page Universal Static Website using:
- Next.js (Latest App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

Core Objectives:
- Multi-page routing with App Router
- Shared layouts & nested layouts
- Pixel-perfect UI replication from screenshots
- Fully responsive pages
- Wix Studio–level advanced UI/UX animations
- SEO-optimized static export

Pages:
- Home
- About
- Services
- Features
- Pricing
- Blog
- Contact
- Legal pages

Animations:
- Page transition animations between routes
- Scroll-based section reveals
- Staggered text & card animations
- Parallax effects
- Hover & micro-interactions

Follow:
- Accessibility standards
- Performance best practices
- Clean, scalable architecture

Write agency-level production code.
```

---

## 🖼️ Screenshot → UI (Multi‑Page Workflow)

1. Group screenshots by page
2. Identify shared components (Navbar, Footer, CTA)
3. Create layout wrappers for reuse
4. Extract spacing & typography tokens
5. Convert designs into Tailwind components
6. Maintain design consistency across pages
7. Verify responsive behavior per page

Rules:
- No inline CSS
- No duplicated components
- Semantic HTML only

---

--------------------------------------------------
TECH STACK (MANDATORY)
--------------------------------------------------
- Next.js (Latest App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Static Site Generation (SSG)

--------------------------------------------------
DESIGN SYSTEM (MANDATORY)
--------------------------------------------------
- Create separate reusable UI files for:
  - Button
  - Link
  - Card
  - Badge
  - Input
- Pages must ONLY consume these components
- Variants handled via props
- Tailwind classes live inside UI components

---

## 🎞️ Wix Studio → Framer Motion Mapping

| Wix Studio Feature | Framer Motion |
|--------------------|--------------|
| Page Transitions | AnimatePresence |
| Scroll Reveal | whileInView |
| Timeline Animations | Variants + stagger |
| Parallax Scroll | useScroll + useTransform |
| Hover Effects | whileHover |
| Text Reveal | Y-axis stagger |
| Section Animations | Motion sections |
| Micro-interactions | Motion buttons/cards |

---

--------------------------------------------------
PAGES (MANDATORY)
--------------------------------------------------

HOME PAGE (DETAILED)

The Home page is the PRIMARY conversion page and must include the following sections IN ORDER:

1. Hero Section
- Project-specific headline
- Clear value proposition
- Primary CTA aligned with project goal
- Secondary CTA (optional)
- Visual element
- No generic slogans

2. Trust / Social Proof
- Client logos OR
- Metrics OR
- Certifications
- Reusable components only

3. Problem → Solution
- 2–4 industry-specific problems
- Clear mapping to solutions
- Icons or visuals per item

4. Features / Services Preview
- Data from services.ts
- Limited items only
- Each item links to /services/[slug]
- Reuse same card component as Services page

5. How It Works / Process
- 3–5 steps
- Simple, clear flow
- Reusable step component

6. Key Benefits
- Outcome-focused benefits
- No feature repetition
- Directly tied to user pain points

7. Use Cases / Industries (if applicable)
- Different audiences or industries
- Short explanation per use case

8. Testimonials
- Data from testimonials.ts
- Outcome-driven quotes
- Reusable testimonial cards

9. Blog / Content Preview
- Latest posts from blogs.ts
- Title, excerpt, date
- Links to /blog/[slug]
- Same card used on Blog listing page

10. Final CTA
- Strong conversion-focused CTA
- Different from Hero CTA
- Minimal distractions

11. Footer
- Global footer component
- Navigation, contact, legal, social links

---

## 🧱 Recommended Multi‑Page Structure
```
app/
  (site)/
    layout.tsx
    page.tsx
    about/page.tsx
    services/page.tsx
    pricing/page.tsx
    blog/page.tsx
    contact/page.tsx
components/
  ui/
  layout/
  sections/
lib/
hooks/
styles/
public/
```

---

## ⚙️ Best Practices
- Nested layouts for reuse
- Page-level SEO metadata
- Consistent design tokens
- Minimal JS for static pages
- High Lighthouse scores

---

## ✅ Ideal For
- Multi-page Next.js sites
- Agencies & freelancers
- Screenshot-based UI replication
- Wix Studio–style motion design

---
--------------------------------------------------
OTHER PAGES
--------------------------------------------------
- About
- Services (listing) → /services
- Service Detail → /services/[slug]
- Blog (listing) → /blog
- Blog Detail → /blog/[slug]
- Contact

--------------------------------------------------
ANIMATION RULES
--------------------------------------------------
- Use Framer Motion
- Page transitions at layout level
- Section reveal animations
- Card hover micro-interactions
- Respect prefers-reduced-motion
- No animation logic inside pages

--------------------------------------------------
FINAL EXPECTATION
--------------------------------------------------
- Multi-page static Next.js website
- Reusable UI system
- Mock-data-driven content
- Listing + detail pages
- SEO-ready
- CMS-ready architecture
- Agency-quality codebase

---

🔥 **This prompt is optimized for MULTI‑PAGE Next.js websites**
