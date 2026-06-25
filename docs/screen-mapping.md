# Screen to Next.js Route Mapping

This document provides a complete audit, mapping inventory, and navigation architecture for the TechSupportSites application based on the `/stitch design` exports.

---

## 1. Screen Audit & Inventory

We have audited the `stitch design` directory and identified **52 total entries**. 50 of these are unique design screens, 1 is a design system stylesheet/style guide, and 1 is a duplicate screen directory.

### Design System Configuration Folder
* **`architectural_precision`**: Contains `DESIGN.md` which defines the brand colors (`#EEEEEE` background, `#000000` primary, `#CB2957` accent, `#DDDDDD` neutral), typography (Manrope for display, Inter for body/UI), orthogonal shape constraints (0px sharp corners), and spacing constants. This is not a web screen but serves as our global design system source of truth.

### Duplicate Consolidation Strategy
* **`app_services_digital_marketing_page.tsx`** and **`digital_marketing_services_tech_support_sites`** are 100% identical in code and layout, representing the same screen. We consolidate both into the single route `/services/digital-marketing`.

### Screen Inventory Table

| Stitch Screen Folder Name | Next.js Target Route | Primary Content Focus | Status |
| :--- | :--- | :--- | :--- |
| `about_us_tech_support_sites` | `/about` | Company history, mission, vision, core values | Mapped |
| `ai_business_automation_case_study` | `/case-studies/ai-business-automation` | Deep dive into multi-agent LLM orchestration | Mapped |
| `ai_machine_learning_solutions_tech_support_sites` | `/services/ai-machine-learning` | Enterprise AI/ML consulting and capabilities | Mapped |
| `ai_machine_learning_technology_tech_support_sites` | `/technologies/ai-machine-learning` | Python, TensorFlow, PyTorch, LLM stack | Mapped |
| `app_services_digital_marketing_page.tsx` | `/services/digital-marketing` | Growth strategy and performance marketing | Mapped (Duplicate) |
| `backend_engineering_tech_support_sites` | `/technologies/backend` | Node.js, Go, Python, microservices architecture | Mapped |
| `blog_detail_tech_support_sites` | `/blog/[slug]` | Individual research article view | Mapped |
| `book_a_consultation_tech_support_sites` | `/consultation/book-consultation` | Interactive booking form for tech reviews | Mapped |
| `branding_services_tech_support_sites` | `/services/branding` | Corporate identity and tech positioning | Mapped |
| `careers_tech_support_sites` | `/careers` | Working principles, careers info, job listings | Mapped |
| `case_studies_hub_tech_support_sites` | `/case-studies` | Directory of client transformations | Mapped |
| `client_testimonials_tech_support_sites` | `/trust/testimonials` | Executive reviews, video galleries, testimonials | Mapped |
| `cloud_computing_infrastructure_tech_support_sites` | `/services/cloud-infrastructure` | Hybrid, multi-cloud strategy and migration | Mapped |
| `cloud_technologies_tech_support_sites` | `/technologies/cloud` | AWS, GCP, Azure, Kubernetes stack | Mapped |
| `contact_us_tech_support_sites` | `/contact` | Global offices, departmental contact, map | Mapped |
| `custom_crm_development_tech_support_sites` | `/services/custom-crm` | Customer relationship management systems | Mapped |
| `custom_erp_development_tech_support_sites` | `/services/custom-erp` | Resource planning, supply chain, and warehouse systems | Mapped |
| `cybersecurity_engineering_tech_support_sites` | `/technologies/cybersecurity` | IAM, Cloud security, threat detection tech stack | Mapped |
| `cybersecurity_services_tech_support_sites` | `/services/cybersecurity` | Zero-Trust architecture security auditing | Mapped |
| `data_analytics_bi_tech_support_sites` | `/services/data-analytics-bi` | Data pipelines, warehousing, and BI services | Mapped |
| `database_engineering_tech_support_sites` | `/technologies/databases` | PostgreSQL, Redis, MongoDB, Cassandra stack | Mapped |
| `devops_ci_cd_tech_support_sites` | `/services/devops-cicd` | CI/CD automation pipelines | Mapped |
| `devops_platform_engineering_tech_support_sites` | `/technologies/devops` | Terraform, Ansible, Docker, Prometheus stack | Mapped |
| `digital_marketing_services_tech_support_sites` | `/services/digital-marketing` | Growth strategy and performance marketing | Mapped (Duplicate) |
| `engineering_insights_tech_support_sites` | `/blog` | Blog archive, filters, and list | Mapped |
| `fintech_analytics_platform_case_study` | `/case-studies/fintech-analytics-platform` | Real-time risk engine fraud detection | Mapped |
| `fintech_analytics_platform_tech_support_sites` | `/industries/fintech` | Financial sector software solutions | Mapped |
| `frontend_engineering_tech_support_sites` | `/technologies/frontend` | Next.js, React, TypeScript, tailwind stack | Mapped |
| `google_ads_management_tech_support_sites` | `/services/google-ads` | Paid advertising optimization, wasted spend audit | Mapped |
| `healthcare_digital_platform_case_study` | `/case-studies/healthcare-digital-platform` | Secure data lake for healthcare compliance | Mapped |
| `healthcare_management_platform_tech_support_sites` | `/industries/healthcare` | HIPAA compliant data systems | Mapped |
| `home_tech_support_sites` | `/` | Main corporate gateway page | Mapped |
| `hosting_gateway_solutions_tech_support_sites` | `/services/hosting-gateway` | Content delivery networks & edge hosting | Mapped |
| `industry_solutions_tech_support_sites` | `/industries` | Overview of target market verticals | Mapped |
| `it_consulting_strategy_tech_support_sites` | `/services/it-consulting` | Digital transformation advisory services | Mapped |
| `life_at_tech_support_sites` | `/careers/life-at-tech-support-sites` | Culture, remote setups, and team profiles | Mapped |
| `logistics_automation_system_case_study` | `/case-studies/logistics-automation-system` | Supply chain visibility automation | Mapped |
| `logistics_tracking_platform_tech_support_sites` | `/industries/logistics` | Supply chain and fleet telemetry solutions | Mapped |
| `manufacturing_erp_platform_tech_support_sites` | `/industries/manufacturing` | Factory automation, inventory, OEE dashboards | Mapped |
| `manufacturing_erp_transformation_case_study` | `/case-studies/manufacturing-erp-transformation` | Enterprise ERP rollout for manufacturing | Mapped |
| `mobile_application_development_tech_support_sites` | `/services/mobile-app-development` | iOS, Android, cross-platform apps | Mapped |
| `privacy_policy_tech_support_sites` | `/legal/privacy-policy` | Compliance text and user rights documentation | Mapped |
| `project_cost_calculator_tech_support_sites` | `/calculator` | Interactive budget, timeline, stack selector | Mapped |
| `request_a_proposal_tech_support_sites` | `/consultation/request-proposal` | Detailed scoping questionnaire / proposal request | Mapped |
| `resource_center_tech_support_sites` | `/resources` | Filterable download center for whitepapers/guides | Mapped |
| `seo_services_tech_support_sites` | `/services/seo` | SEO audits, architecture alignment, core web vitals | Mapped |
| `services_overview_tech_support_sites` | `/services` | Technical solutions directory | Mapped |
| `technology_hub_tech_support_sites` | `/technologies` | Domain index of our engineering stack | Mapped |
| `thank_you_tech_support_sites` | `/thank-you` | Contact/booking confirmation page | Mapped |
| `ui_ux_design_services_tech_support_sites` | `/services/ui-ux-design` | Design systems, research, prototyping | Mapped |
| `website_development_designing_tech_support_sites` | `/services/website-development` | Full-stack corporate websites | Mapped |

---

## 2. Detailed Route Mapping

Here is the exact mapping of each exported screen to its route, detailing its components, shared layouts, and required incoming/outgoing link profiles.

### home_tech_support_sites
→ `/`
* **Components Used:**
  * `HeroSection` (with interactive technology buttons)
  * `TrustIndicators` (monochromatic partner logos)
  * `FeaturedServicesGrid` (bento grid layout detailing core service categories)
  * `CTASection` (enterprise infrastructure optimization call)
* **Shared Sections Used:**
  * `TopNavBar` (active link: None)
  * `Footer`
* **Internal Links:**
  * Services: `/services`
  * Industries: `/industries`
  * Technologies: `/technologies`
  * Case Studies: `/case-studies`
  * Contact: `/contact`
  * Call to Action: `/consultation/book-consultation`

### about_us_tech_support_sites
→ `/about`
* **Components Used:**
  * `AboutHero` (with typographic bold header)
  * `MissionVision` (side-by-side statements with neutral border)
  * `ValuesBentoGrid` (orthogonal cards for technical value pillars)
* **Shared Sections Used:**
  * `TopNavBar` (active link: About)
  * `Footer`
  * `CTASection`
* **Internal Links:**
  * Careers: `/careers`
  * Contact Us: `/contact`

### careers_tech_support_sites
→ `/careers`
* **Components Used:**
  * `CareersHero`
  * `OperatingPrinciples` (bento grid representing values and metrics)
  * `HiringBlueprint` (stepper indicating technical hiring gates)
  * `JobListingsingsTable` (tabular job list with filters)
* **Shared Sections Used:**
  * `TopNavBar` (active link: Careers)
  * `Footer`
* **Internal Links:**
  * Life at Tech Support Sites: `/careers/life-at-tech-support-sites`
  * Internships: `/careers/internships` (standard form / careers page)
  * Individual Jobs: `/careers/jobs/[slug]`

### life_at_tech_support_sites
→ `/careers/life-at-tech-support-sites`
* **Components Used:**
  * `LifeHero`
  * `PrinciplesGrid` (bento grid of working styles)
  * `CultureGallery` (grayscale image layout)
* **Shared Sections Used:**
  * `TopNavBar` (active link: Careers)
  * `Footer`
* **Internal Links:**
  * View Openings: `/careers`

### contact_us_tech_support_sites
→ `/contact`
* **Components Used:**
  * `ContactHero`
  * `DepartmentContacts` (grid of mail/phone options)
  * `MainContactForm` (stepped interface for query submission)
  * `FAQSection` (accordion list of frequent inquiries)
* **Shared Sections Used:**
  * `TopNavBar` (active: Contact)
  * `Footer`
* **Internal Links:**
  * Book Consultation: `/consultation/book-consultation`
  * Request Proposal: `/consultation/request-proposal`

### services_overview_tech_support_sites
→ `/services`
* **Components Used:**
  * `ServicesHero`
  * `ServiceCategories` (high-density list of major capabilities)
  * `DirectoryGrid` (exhaustive typographic matrix of 16 services)
* **Shared Sections Used:**
  * `TopNavBar` (active: Services)
  * `Footer`
  * `CTASection`
* **Internal Links:**
  * Individual Services: `/services/website-development`, `/services/mobile-app-development`, `/services/ui-ux-design`, `/services/custom-erp`, `/services/custom-crm`, `/services/ai-machine-learning`, `/services/cloud-infrastructure`, `/services/devops-cicd`, `/services/cybersecurity`, `/services/hosting-gateway`, `/services/data-analytics-bi`, `/services/seo`, `/services/google-ads`, `/services/digital-marketing`, `/services/branding`, `/services/it-consulting`

### individual_service_pages
→ `/services/[slug]`
*(Mapped to individual folders like `website_development_designing_tech_support_sites`, `mobile_application_development_tech_support_sites`, `ui_ux_design_services_tech_support_sites`, etc.)*
* **Components Used:**
  * `ServiceHero`
  * `BusinessProblemsList` (identifies client pain points)
  * `SolutionBentoGrid` (how we solve it with features)
  * `TechStackLedger` (detailed technology list for that specific service)
* **Shared Sections Used:**
  * `TopNavBar` (active: Services)
  * `Footer`
  * `CTASection`
  * `FAQSection` (present on select pages like Devops, Cybersecurity, Google Ads, SEO)
* **Internal Links:**
  * Book Consultation: `/consultation/book-consultation`
  * Related Case Study (e.g. `/case-studies/manufacturing-erp-transformation` for custom-erp)

### industry_solutions_tech_support_sites
→ `/industries`
* **Components Used:**
  * `IndustriesHero`
  * `CoreSectorsGrid` (4 large columns representing Manufacturing, Fintech, Logistics, Healthcare)
* **Shared Sections Used:**
  * `TopNavBar` (active: Industries)
  * `Footer`
* **Internal Links:**
  * Sector detail: `/industries/manufacturing`, `/industries/fintech`, `/industries/logistics`, `/industries/healthcare`

### individual_industry_pages
→ `/industries/[slug]`
*(Mapped to folders like `manufacturing_erp_platform_tech_support_sites`, `fintech_analytics_platform_tech_support_sites`, etc.)*
* **Components Used:**
  * `IndustryHero`
  * `IndustryChallenges` (points out bottlenecks)
  * `SolutionArchitecture` (pure HTML/CSS nodes and connections representing blueprints)
  * `PlatformModules` (grid of product features)
* **Shared Sections Used:**
  * `TopNavBar` (active: Industries)
  * `Footer`
  * `TechStackLedger`
* **Internal Links:**
  * Related Services: `/services/custom-erp`
  * Related Case Study: `/case-studies/logistics-automation-system`

### technology_hub_tech_support_sites
→ `/technologies`
* **Components Used:**
  * `TechnologyHero`
  * `TechnologyDomainsGrid` (bento grid of Frontend, Backend, Databases, Devops, Cloud, AI/ML, Security)
* **Shared Sections Used:**
  * `TopNavBar` (active: Technologies)
  * `Footer`
  * `CTASection`
* **Internal Links:**
  * Technology domains: `/technologies/frontend`, `/technologies/backend`, `/technologies/cloud`, `/technologies/databases`, `/technologies/ai-machine-learning`, `/technologies/devops`, `/technologies/cybersecurity`

### individual_technology_pages
→ `/technologies/[slug]`
*(Mapped to folders like `frontend_engineering_tech_support_sites`, `backend_engineering_tech_support_sites`, etc.)*
* **Components Used:**
  * `TechHero`
  * `CoreMethodologiesGrid` (structural cards on code style, scaling)
  * `TechStackLedger` (detailed library lists)
* **Shared Sections Used:**
  * `TopNavBar` (active: Technologies)
  * `Footer`
* **Internal Links:**
  * Services matching stack: `/services/website-development`, `/services/ai-machine-learning`

### case_studies_hub_tech_support_sites
→ `/case-studies`
* **Components Used:**
  * `CaseStudiesHero`
  * `FeaturedCaseGrid` (bento grid layout with 1 large lead card and 2 smaller cards)
  * `MasonryArchive` (chronological list of case studies with filtering)
* **Shared Sections Used:**
  * `TopNavBar` (active: Insights / Case Studies)
  * `Footer`
* **Internal Links:**
  * Detailed Case Studies: `/case-studies/manufacturing-erp-transformation`, `/case-studies/healthcare-digital-platform`, `/case-studies/logistics-automation-system`, `/case-studies/fintech-analytics-platform`, `/case-studies/ai-business-automation`

### individual_case_studies
→ `/case-studies/[slug]`
*(Mapped to folders like `ai_business_automation_case_study`, `fintech_analytics_platform_case_study`, `healthcare_digital_platform_case_study`, etc.)*
* **Components Used:**
  * `CaseHero` (with metrics overlay)
  * `NarrativeFlow` (problem, architecture blueprint, implementation checkpoints, and outcomes)
  * `DashboardMock` (mock browser/app UI showing telemetry graphs and tables using standard HTML/CSS)
* **Shared Sections Used:**
  * `TopNavBar` (active: Insights)
  * `Footer`
  * `CTASection`
* **Internal Links:**
  * Related service page: `/services/ai-machine-learning`
  * Proposal request: `/consultation/request-proposal`

### engineering_insights_tech_support_sites (Blog Archive)
→ `/blog`
* **Components Used:**
  * `BlogHero`
  * `ArticleGrid` (tabular-feel list of posts with reading times)
  * `NewsletterCTA` (input with bottom crimson focus ring)
* **Shared Sections Used:**
  * `TopNavBar` (active: Insights)
  * `Footer`
* **Internal Links:**
  * Read article: `/blog/architecting-resilient-microservices`

### blog_detail_tech_support_sites
→ `/blog/[slug]`
* **Components Used:**
  * `ArticleHeader` (with category badges)
  * `ReadingProgressBar` (fixed sticky top bar reading height)
  * `ArticleBody` (styled with sharp, readable typographic grid)
  * `RelatedReadingGrid` (bento layout of alternate posts)
* **Shared Sections Used:**
  * `TopNavBar` (active: Insights)
  * `Footer`
* **Internal Links:**
  * Read related: `/blog/another-article`

### book_a_consultation_tech_support_sites
→ `/consultation/book-consultation`
* **Components Used:**
  * `ConsultationContext` (value proposition, trust badges, key steps)
  * `InteractiveFormCanvas` (multi-step registration form: Identity -> Tech -> Timeline)
* **Shared Sections Used:**
  * `TopNavBar` (suppressed or minimal option depending on screen space, uses TopNavBar)
  * `Footer`
* **Internal Links:**
  * Confirm: `/thank-you`

### request_a_proposal_tech_support_sites
→ `/consultation/request-proposal`
* **Components Used:**
  * `ProposalContext` (client validation notes, logos)
  * `ProposalFormCanvas` (stepped scope builder form)
* **Shared Sections Used:**
  * `TopNavBar`
  * `Footer`
* **Internal Links:**
  * Confirm: `/thank-you`

### project_cost_calculator_tech_support_sites
→ `/calculator`
* **Components Used:**
  * `CalculatorHero`
  * `CalculatorForm` (sliders, select boxes, and checkboxes for scope, timeline, stack selection)
  * `CostStickySidebar` (实时 budget updates with absolute values based on options)
* **Shared Sections Used:**
  * `TopNavBar` (active: Calculator)
  * `Footer`
* **Internal Links:**
  * Submit Proposal: `/consultation/request-proposal`

### resource_center_tech_support_sites
→ `/resources`
* **Components Used:**
  * `ResourceHero`
  * `ResourceFilters` (topics: Cloud, Security, AI; types: Whitepapers, Guides)
  * `ResourceGrid` (bento layout of downloadable assets)
* **Shared Sections Used:**
  * `TopNavBar` (active: Insights)
  * `Footer`
* **Internal Links:**
  * Download: `/resources/downloads`

### thank_you_tech_support_sites
→ `/thank-you`
* **Components Used:**
  * `ThankYouHero`
  * `NextStepsCard` (what happens after submission)
  * `SuccessHighlights` (sidebar showing testimonials)
* **Shared Sections Used:**
  * `TopNavBar` (minimal variant)
  * `Footer`
* **Internal Links:**
  * Return Home: `/`

### privacy_policy_tech_support_sites
→ `/legal/privacy-policy`
* **Components Used:**
  * `PolicyHeader`
  * `StickySidebarNav` (contents listing)
  * `PolicyTextBody`
* **Shared Sections Used:**
  * `TopNavBar`
  * `Footer`
* **Internal Links:**
  * Terms: `/legal/terms-and-conditions`

---

## 3. Navigation Architecture & Internal Linking Matrix

To satisfy the navigation flow requirement and maximize indexability, pages follow this structured navigation linking matrix.

```mermaid
graph TD
    Home[/] --> Services[/services]
    Home --> Industries[/industries]
    Home --> Technologies[/technologies]
    Home --> CaseStudies[/case-studies]
    Home --> Contact[/contact]
    
    Services --> IndivServices[/services/slug]
    Services --> Consultation[/consultation/book-consultation]
    
    IndivServices --> RelatedCases[/case-studies/slug]
    
    Industries --> IndivIndustries[/industries/slug]
    IndivIndustries --> RelatedServices[/services/slug]
    IndivIndustries --> RelatedTech[/technologies/slug]
    IndivIndustries --> RelatedCases
    
    Technologies --> IndivTech[/technologies/slug]
    IndivTech --> RelatedServices
    IndivTech --> RelatedIndustries[/industries/slug]
    
    CaseStudies --> IndivCases[/case-studies/slug]
    IndivCases --> RelatedServices
    IndivCases --> Consultation
    
    Blog[/blog] --> IndivBlog[/blog/slug]
    IndivBlog --> Services
    IndivBlog --> Technologies
    IndivBlog --> Resources[/resources]
```

### Complete Internal Linking Matrix

| Page Type | Outgoing Targets | Incoming Targets | Purpose |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | `/services`, `/industries`, `/technologies`, `/case-studies`, `/contact` | Global footer, logo | Application entryway |
| **Services Index (`/services`)** | Individual service pages, `/consultation/book-consultation` | Header menu, Home | Directory of services |
| **Individual Services (`/services/[slug]`)** | Related case studies, `/consultation/book-consultation`, `/technologies/[slug]` | Services index, related industries, related technologies | Detailed capabilities breakdown |
| **Industries Index (`/industries`)** | Individual industry pages | Header menu, Home | Verticals directory |
| **Individual Industries (`/industries/[slug]`)** | Related services, related technologies, related case studies | Industries index, related case studies | Domain specific solutions |
| **Technologies Index (`/technologies`)** | Individual technology pages | Header menu, Home | Stack overview |
| **Individual Technologies (`/technologies/[slug]`)** | Related services, related industries | Technologies index, related services, related industries | Engineering stack details |
| **Case Studies Index (`/case-studies`)** | Individual case studies | Header menu, Home | Validation ledger |
| **Individual Case Studies (`/case-studies/[slug]`)** | Related services, `/consultation/request-proposal` | Case studies index, related industries, related services | Technical transformation proof |
| **Blog Index (`/blog`)** | Individual blog posts | Header menu, Footer | Thoughts and guides archive |
| **Individual Blog (`/blog/[slug]`)** | Related services, related technologies, `/resources` | Blog index | Deep technical writing |
| **Resource Center (`/resources`)** | Downloads, webinars, guides, whitepapers | Blog, Footer | Gated lead assets |

---

## 4. Component Architecture & Reusability Matrix

Every page is reconstructed from reusable, modular elements styled strictly in accordance with **Swiss Modernism (0px corners, high contrast line work, accent crimson #CB2957, #EEEEEE background)**.

### Folder Structure for Components

```txt
components/
├── layout/
│   ├── TopNavBar.tsx            # Global navigation bar
│   ├── Footer.tsx               # Global link ledger footer
│   └── SectionContainer.tsx     # Handles padding, max-width bounds
├── navigation/
│   ├── TabFilters.tsx           # Category tab selector
│   └── Stepper.tsx              # Form / hiring gates timeline
├── sections/
│   ├── HeroSection.tsx          # General page banner
│   ├── ProblemSection.tsx       # Asymmetrical diagnostic grid
│   ├── FAQSection.tsx           # Accordion questions
│   └── CTASection.tsx           # Red accent banner
├── cards/
│   ├── BentoCard.tsx            # Multi-span bento layouts
│   ├── StatCard.tsx             # Typographic KPI visualizer
│   └── QuoteCard.tsx            # Minimalist testemonial card
├── forms/
│   ├── ContactForm.tsx          # Basic request form
│   ├── BookingForm.tsx          # Stepped scheduler form
│   └── ProposalForm.tsx         # Detailed scoping form
├── ui/
│   ├── Button.tsx               # Standard / Accent / Ghost buttons
│   ├── Table.tsx                # Data-sheet/ledger rows
│   └── ImageCanvas.tsx          # Abstract image framing
└── animations/
    └── FadeIn.tsx               # Micro-interaction transition container
```

### Component Reusability breakdown

No page contains more than 25% unique code. All content is structured from the following building blocks:

1. **`layout/TopNavBar`** (used in 50 pages): High-contrast sticky header with desktop hover effects and responsive side drawer.
2. **`layout/Footer`** (used in 50 pages): High-density links list, typographic logo, copyright notice.
3. **`sections/CTASection`** (used in 16 pages): Crimson block accentuating proposal requests.
4. **`sections/FAQSection`** (used in 12 pages): Standard accordion list using `details` tags with solid outlines.
5. **`ui/Table`** (used in 10 pages): Used for job lists, technology tables, and implementation parameters.
6. **`cards/BentoCard`** (used in 32 pages): Flexibly configures span-size (col-span-4, col-span-8) for dynamic bento grids.
7. **`ui/Button`** (used in 50 pages): Renders in primary (black), secondary (crimson accent), or ghost (transparent outline) states.

---

## 5. Implementation Roadmap & Checklist

Once approved, implementation will proceed through the following milestones:

### Phase 1: Shared Architecture Setup
- Create design token mappings in `app/globals.css`.
- Implement `layout/TopNavBar` and `layout/Footer`.
- Build basic UI components (`Button`, `Table`, `BentoCard`, `SectionContainer`).

### Phase 2: Route Generation & Template Mapping
- Implement standard routes `/about`, `/contact`, `/thank-you`, `/calculator`.
- Implement Dynamic route layout shells (`/services/[slug]`, `/industries/[slug]`, `/technologies/[slug]`, `/case-studies/[slug]`, `/blog/[slug]`).

### Phase 3: Content Loading & Mapping
- Load HTML details from Stitch directories into Next.js components.
- Connect all internal links according to the linking matrix.
- Ensure all forms hook up to mock transaction pipelines.

### Phase 4: Quality & Performance Checks
- Run build diagnostics (`npm run build`).
- Verify styling consistency across all 15 template modules.
