# 🤖 **AUTOMATED WEBSITE GENERATOR PROMPT — Next.js Static Sites**

---

## 🎯 **PROMPT EXECUTION INSTRUCTIONS**

**This is an expert-level automation prompt for creating 100% final, SEO-optimized, modern websites. Input project JSON data below and execute to generate complete website specifications with full team coordination.**

### INPUT REQUIRED (MINIMAL - ONLY 2 FIELDS!):
```json
{
  "domain": "trinitywebsolutions.com",
  "industry": "Web Development & Digital Solutions",
  "domainRegistered": "2000-10-13", // Real date from WHOIS lookup

}
```

### OPTIONAL ENHANCED INPUT (All Auto-Generated if Not Provided):
```json
{
  "domain": "trinitywebsolutions.com",
  "industry": "Web Development & Digital Solutions",
  
  // AUTO-GENERATED (Override if needed)
  "brandName": "Auto-generated from domain",
  "primaryContact": "Auto-generated from domain (info@domain.com)",
  "keyServices": ["Auto-generated from industry + competitor analysis"],
  "brandColors": ["Auto-generated from industry psychology"],
  "domainRegistered": "2000-10-13", // Real date from WHOIS lookup
  "establishedYear": "Auto-calculated from domain + industry",
  "businessType": "Corporate",
  "targetAudience": "students, B2C",
  "targetCountries": ["IN"],
  "seoKeywords": ["Auto-generated from industry + competitors"],
  "competitorUrls": ["Auto-discovered via search analysis"],
  "designStyle": "Auto-selected based on industry + modern trends",
  
  // OPTIONAL CUSTOMIZATIONS
  "allocatedTo": "Developer Name",
  "companySize": "Small/Medium/Large/Enterprise",
  "logoPath": "path/to/logo.svg",
  "contactDetails": {
    "phone": "+1-555-123-4567",
    "whatsapp": "+1-555-123-4567",
    "officeAddress": {
      "street": "123 Business Street",
      "city": "Mumbai",
      "state": "Maharashtra", 
      "country": "India",
      "zipCode": "400001"
    }
  },
  "socialMediaHandles": {
    "instagram": "@company",
    "twitter": "@company",
    "facebook": "@company",
    "linkedin": "@company",
    "youtube": "@company"
  },
  "additionalFeatures": {
    "newsletter": false,
    "testimonials": true,
    "faq": true,
    "blog": true,
    "portfolio": false,
    "teamPage": false,
    "chatWidget": false,
    "multiLanguage": false
  },
  "analytics": {
    "googleAnalytics": "GA-XXXXXXXXX",
    "googleTagManager": "GTM-XXXXXXX",
    "facebookPixel": "",
    "hotjar": ""
  }
}
```

### OPTIONAL FIELDS LOGIC:
```javascript
// Only include contact details and social media if provided
const CONDITIONAL_CONTENT = {
  logo: {
    customLogo: "Use provided logoPath if available, otherwise generate default logo",
    fallback: "Create text-based logo using brandName if no logoPath provided",
    formats: "Support SVG, PNG, JPG formats with automatic optimization"
  },
  contactDetails: {
    phone: "Include phone section only if contactDetails.phone is provided",
    whatsapp: "Include WhatsApp only if contactDetails.whatsapp is provided", 
    officeAddress: "Include address section only if contactDetails.officeAddress is provided"
  },
  socialMedia: {
    instagram: "Include Instagram icon/link only if socialMediaHandles.instagram is provided",
    twitter: "Include Twitter icon/link only if socialMediaHandles.twitter is provided",
    facebook: "Include Facebook icon/link only if socialMediaHandles.facebook is provided",
    linkedin: "Include LinkedIn icon/link only if socialMediaHandles.linkedin is provided",
    youtube: "Include YouTube icon/link only if socialMediaHandles.youtube is provided"
  },
  additionalFeatures: {
    newsletter: "Include newsletter signup if additionalFeatures.newsletter is true",
    testimonials: "Include testimonials section if additionalFeatures.testimonials is true",
    faq: "Include FAQ section if additionalFeatures.faq is true",
    blog: "Include blog/news section if additionalFeatures.blog is true",
    portfolio: "Include portfolio/case studies if additionalFeatures.portfolio is true",
    teamPage: "Include team/about us page if additionalFeatures.teamPage is true",
    chatWidget: "Include live chat widget if additionalFeatures.chatWidget is true",
    multiLanguage: "Include language switcher if additionalFeatures.multiLanguage is true"
  },
  analytics: {
    googleAnalytics: "Include GA tracking if analytics.googleAnalytics is provided",
    googleTagManager: "Include GTM if analytics.googleTagManager is provided",
    facebookPixel: "Include FB Pixel if analytics.facebookPixel is provided",
    hotjar: "Include Hotjar tracking if analytics.hotjar is provided"
  }
};
```

## 🤖 **AUTO-DISCOVERABLE INFORMATION**

### 📊 **Information That Can Be Automatically Found/Generated:**

#### **1. Domain & Technical Information (100% Automated via Online Research)**
```javascript
const AUTO_DISCOVERABLE_DOMAIN = {
  // Real WHOIS data discovery using online tools
  domainRegistered: "Actual registration date from WHOIS lookup (e.g., '2010-07-16')",
  domainAge: "Calculate from real domainRegistered date",
  domainExpiry: "Extract actual expiry date from WHOIS data",
  registrar: "Identify registrar (GoDaddy, Namecheap, Cloudflare, etc.)",
  nameservers: "Current nameserver configuration",
  
  // Technical analysis via web search
  currentWebsite: "Analyze if domain has active website or is parked",
  sslCertificate: "Check SSL certificate status and expiry date",
  hostingProvider: "Identify current hosting (Cloudflare, AWS, etc.)",
  currentDNSSettings: "Query A, MX, CNAME records",
  domainAuthority: "Check domain authority and SEO metrics",
  
  // Automated research methods
  whoisLookup: "Use online WHOIS tools (whois.net, whoisxml.com)",
  dnsAnalysis: "DNS propagation and record analysis tools",
  sslCheck: "SSL certificate validation tools",
  websiteAnalysis: "Technology stack detection and analysis"
};

// Example of real discovered data
const EXAMPLE_DISCOVERED_DATA = {
  domain: "chartspot.net",
  domainRegistered: "2010-07-16", // Real WHOIS data
  domainAge: "14 years, 3 months",
  domainExpiry: "2025-07-16",
  registrar: "GoDaddy LLC",
  nameservers: ["ns1.cloudflare.com", "ns2.cloudflare.com"],
  hostingProvider: "Cloudflare",
  sslCertificate: "Valid until 2024-12-31",
  currentWebsite: "Active trading platform",
  industry: "Financial Technology" // Inferred from domain analysis
};
```

#### **2. Company Foundation Date (Automated Calculation)**
```javascript
const AUTO_CALCULATE_FOUNDATION = {
  establishedYear: "Auto-calculate using domain registration + industry offset",
  calculation: {
    "Technology": "domainRegistered - 1 year",
    "Finance": "domainRegistered - 2 years", 
    "Healthcare": "domainRegistered - 2 years",
    "Manufacturing": "domainRegistered - 3 years",
    "Startup": "domainRegistered (same year)",
    "Default": "domainRegistered - 1 year"
  }
};
```

#### **3. SEO & Competitor Research (Automated)**
```javascript
const AUTO_SEO_RESEARCH = {
  keywordSuggestions: "Generate from industry + services using SEO APIs",
  competitorAnalysis: "Find top competitors via Google Search API",
  industryKeywords: "Extract relevant keywords for the industry",
  localSEOData: "Generate based on targetCountries",
  searchVolume: "Get keyword search volumes via SEO tools",
  competitorKeywords: "Analyze competitor websites for keyword gaps"
};
```

#### **4. Content Generation (AI-Powered)**
```javascript
const AUTO_CONTENT_GENERATION = {
  industryDescription: "Generate industry-specific content",
  serviceDescriptions: "Create detailed descriptions for each keyService",
  aboutUsContent: "Generate company story based on industry + businessType",
  metaDescriptions: "Create SEO-optimized meta descriptions",
  headingStructure: "Generate H1-H6 hierarchy for each page",
  callToActions: "Industry-appropriate CTA text and placement"
};
```

#### **5. Design & Visual Elements (Automated)**
```javascript
const AUTO_DESIGN_GENERATION = {
  colorPalette: "Generate full color scale from provided brandColors",
  typography: "Select optimal font combinations for industry",
  iconSet: "Generate/select icons for each keyService",
  imageRequirements: "Define image needs based on industry + services",
  layoutStructure: "Determine optimal layout for businessType",
  componentLibrary: "Select UI components based on designStyle"
};
```

#### **6. Technical Configuration (Automated)**
```javascript
const AUTO_TECHNICAL_CONFIG = {
  nextjsConfig: "Generate optimal Next.js configuration",
  tailwindConfig: "Create Tailwind config with brand colors",
  seoConfig: "Generate complete SEO setup",
  performanceConfig: "Optimize for Core Web Vitals",
  deploymentConfig: "Create Vercel/Netlify deployment settings",
  analyticsSetup: "Configure tracking based on provided IDs"
};
```

#### **7. Legal & Compliance (Template Generation)**
```javascript
const AUTO_LEGAL_CONTENT = {
  privacyPolicy: "Generate GDPR/CCPA compliant privacy policy",
  termsOfService: "Create terms based on businessType + industry",
  cookiePolicy: "Generate cookie consent based on targetCountries",
  disclaimers: "Industry-appropriate legal disclaimers",
  copyrightNotice: "Auto-generate with establishedYear + brandName"
};
```

#### **8. Brand Identity Generation (AI-Powered)**
```javascript
const AUTO_BRAND_GENERATION = {
  brandName: {
    source: "Extract from domain name with intelligent formatting",
    methods: [
      "Remove TLD (.com, .net, etc.)",
      "Convert to proper case (mycorp → MyCorp)",
      "Handle common patterns (techsolutions → Tech Solutions)",
      "Add industry context if needed (webdev → WebDev Solutions)"
    ],
    examples: {
      "techcorp.com": "TechCorp",
      "digitalmarketing.net": "Digital Marketing",
      "healthcareplus.org": "HealthCare Plus",
      "innovatesoftware.io": "Innovate Software"
    }
  },
  
  primaryContactEmail: {
    source: "Generate professional email from domain",
    patterns: [
      "info@{domain}",
      "contact@{domain}", 
      "hello@{domain}",
      "support@{domain}"
    ],
    selection: "Choose based on industry standards and domain analysis"
  },
  
  keyServices: {
    source: "Generate from industry + competitor analysis",
    methods: [
      "Analyze top 10 competitors in the industry",
      "Extract common service offerings",
      "Generate 3-5 core services based on industry standards",
      "Customize based on business type (Corporate/Agency/Startup)"
    ],
    examples: {
      "Technology": ["Software Development", "IT Consulting", "Digital Transformation"],
      "Marketing": ["Digital Marketing", "SEO Services", "Social Media Management"],
      "Healthcare": ["Patient Care", "Medical Consulting", "Health Technology"],
      "Finance": ["Financial Planning", "Investment Advisory", "Risk Management"]
    }
  },
  
  brandColors: {
    source: "Generate based on industry psychology + modern trends",
    methods: [
      "Industry-appropriate color psychology",
      "Modern 2024+ color trends",
      "Accessibility compliance (contrast ratios)",
      "Competitor differentiation analysis"
    ],
    industryPalettes: {
      "Technology": ["#2563eb", "#1e40af", "#3b82f6"], // Professional blues
      "Finance": ["#1e3a8a", "#fbbf24", "#374151"], // Navy + gold + gray
      "Healthcare": ["#059669", "#0d9488", "#06b6d4"], // Calming greens/teals
      "Creative": ["#7c3aed", "#ec4899", "#f59e0b"], // Vibrant purples/pinks
      "Corporate": ["#1f2937", "#4f46e5", "#6b7280"] // Professional grays/blues
    }
  }
};
```

### ✅ **NEWLY AUTO-DISCOVERABLE (Previously Manual):**

#### **Now Fully Automated:**
- ✅ **Brand Name** - Auto-generate from domain name with intelligent formatting
- ✅ **Primary Contact Email** - Generate professional email from domain
- ✅ **Key Services** - Generate from industry + competitor analysis
- ✅ **Brand Colors** - Generate based on industry psychology + modern trends

### 🔍 **Information That Still Requires Manual Input (Optional):**

#### **Optional Manual Input (Has Smart Defaults):**
- 🔄 **Logo Path** - Custom brand asset (fallback: auto-generate text logo)
- 🔄 **Contact Details** - Phone, WhatsApp, office address (optional sections)
- 🔄 **Social Media Handles** - Business social accounts (optional sections)
- 🔄 **Additional Features** - Newsletter, blog, chat, etc. (smart defaults based on industry)
- 🔄 **Analytics IDs** - Tracking codes (optional, can be added later)

#### **Minimal Required Input:**
- ✅ **Domain** - The only truly required field
- ✅ **Industry** - For intelligent content and design generation
- 🔄 **Business Type** - Corporate/Agency/Startup (can be inferred from domain/industry)
- 🔄 **Target Audience** - B2B/B2C/Enterprise (can be inferred from industry)
- 🔄 **Target Countries** - Geographic focus (can default to domain registration country)

### 🚀 **Enhanced Auto-Discovery Integration with Real Domain Research:**

```javascript
const ENHANCED_INPUT_PROCESSING = {
  step1_MinimalInput: "Collect only domain + industry (2 required fields)",
  step2_DomainResearch: "Perform real WHOIS lookup and domain analysis using online tools",
  step3_AutoDiscovery: "Research and generate all discoverable information",
  step4_BrandGeneration: "Auto-generate brand name, email, services, colors",
  step5_CompetitorAnalysis: "Analyze competitors for services and differentiation",
  step6_Validation: "Verify auto-discovered data accuracy", 
  step7_Integration: "Merge minimal input + researched data for complete profile",
  step8_Generation: "Generate complete website with full data set"
};

// Detailed Domain Research Process
const DOMAIN_RESEARCH_PROCESS = {
  step1_WhoisLookup: {
    tools: ["whois.net", "whoisxml.com", "domaintools.com"],
    dataExtracted: [
      "Registration date (domainRegistered)",
      "Expiry date (domainExpiry)", 
      "Registrar information",
      "Nameserver configuration",
      "Domain status and locks"
    ],
    example: {
      input: "chartspot.net",
      output: {
        domainRegistered: "2010-07-16",
        domainExpiry: "2025-07-16", 
        registrar: "GoDaddy LLC",
        nameservers: ["ns1.cloudflare.com", "ns2.cloudflare.com"]
      }
    }
  },
  
  step2_TechnicalAnalysis: {
    tools: ["builtwith.com", "wappalyzer.com", "securityheaders.com"],
    dataExtracted: [
      "Current website technology stack",
      "SSL certificate status and expiry",
      "Hosting provider identification",
      "CDN and security services",
      "CMS and framework detection"
    ]
  },
  
  step3_IndustryInference: {
    methods: [
      "Analyze domain name for industry keywords",
      "Examine current website content (if active)",
      "Research company information online",
      "Cross-reference with business directories"
    ],
    examples: {
      "chartspot.net": "Financial Technology (trading/forex)",
      "healthcareplus.com": "Healthcare Services",
      "techsolutions.io": "Technology Consulting"
    }
  }
};

// Real-world example with actual researched data
const REAL_RESEARCH_EXAMPLE = {
  input: {
    domain: "chartspot.net",
    industry: "Finance" // Optional - can be auto-inferred
  },
  
  researchedData: {
    // Real WHOIS data discovered online
    domainRegistered: "2010-07-16", // Actual registration date from WHOIS
    domainExpiry: "2025-07-16", // Actual expiry date
    registrar: "GoDaddy LLC", // Real registrar information
    nameservers: ["ns1.cloudflare.com", "ns2.cloudflare.com"],
    hostingProvider: "Cloudflare", // Identified from DNS analysis
    sslCertificate: "Valid until 2024-12-31", // SSL check results
    currentWebsite: "Active forex/trading platform", // Website analysis
    
    // Auto-generated from research
    brandName: "ChartSpot", // Extracted from domain
    primaryContact: "info@chartspot.net", // Generated from domain
    industry: "Financial Technology", // Inferred from domain + content analysis
    establishedYear: "2008", // Calculated: 2010 registration - 2 years (Finance industry)
    businessType: "Corporate", // Inferred from domain + industry
    targetAudience: "B2B", // Inferred from financial services
    targetCountries: ["US"], // From domain registration data
    
    // Industry-specific generation
    keyServices: [
      "Forex Trading Platform", 
      "CFD Analytics", 
      "Trading Tools & Indicators"
    ], // Generated from finance industry + competitor analysis
    brandColors: ["#1e3a8a", "#fbbf24", "#374151"], // Finance industry palette
    seoKeywords: [
      "forex trading", 
      "CFD analytics", 
      "trading platform", 
      "financial charts"
    ] // Generated from industry analysis
  }
};

// Demonstration of minimal input → complete output
const AUTOMATION_DEMONSTRATION = {
  userProvides: {
    domain: "example.com" // Just the domain name!
  },
  
  systemResearches: {
    whoisData: "Real registration date, registrar, nameservers",
    technicalAnalysis: "SSL status, hosting provider, current website",
    industryInference: "Analyze domain name and content for industry classification",
    competitorAnalysis: "Find similar businesses and extract common services"
  },
  
  systemGenerates: {
    completeProjectJSON: "Full project specification with 20+ data points",
    nextjsWebsite: "Complete website with all components and pages",
    deploymentPackage: "Ready-to-deploy static files and documentation"
  }
};
```

### EXECUTION COMMAND:
**"Generate complete Next.js website specifications using the project data above and following automation rules below."**

---

## 👥 **COMPLETE TEAM STRUCTURE & ROLES**

### 🏢 **Core Project Team**

#### **1. Project Manager** 
- **Primary Contact & Coordination**
- Project timeline management
- Client communication and approvals
- Team coordination and resource allocation
- Final delivery confirmation

#### **2. Senior Developer / Technical Lead**
- **Code Architecture & Implementation**
- Next.js development and optimization
- Technical validation and code review
- Performance optimization (90+ Lighthouse score)
- Static export configuration and deployment

#### **3. Creative Director / UI/UX Designer**
- **Visual Design & User Experience**
- Modern design system creation
- Brand consistency and visual guidelines
- Responsive design specifications
- Design mockup approval and sign-off

#### **4. SEO Specialist**
- **Search Engine Optimization**
- Technical SEO implementation
- Meta tags and structured data
- Site speed and Core Web Vitals optimization
- Local SEO and international targeting

#### **5. Content Strategist / Marketing Manager**
- **Content Creation & Copy Approval**
- Industry-specific content development
- Brand voice and messaging consistency
- Call-to-action optimization
- Content marketing integration

#### **6. Graphic Designer** *(when applicable)*
- **Brand Assets & Visual Elements**
- Logo variations and brand guidelines
- Custom icons and illustrations
- Image optimization and asset creation
- Print and digital asset coordination

#### **7. Social Media Specialist** *(when applicable)*
- **Social Integration & Strategy**
- Social media integration setup
- Social proof and testimonials
- Share optimization and Open Graph tags
- Social media content alignment

#### **8. QA Tester**
- **Quality Assurance & Testing**
- Cross-browser compatibility testing
- Mobile responsiveness validation
- Form functionality and user journey testing
- Performance and accessibility auditing

### 📋 **Team Coordination Workflow**

```javascript
const TEAM_WORKFLOW = {
  "Phase 1 - Planning": [
    "Project Manager: Client briefing and requirements gathering",
    "Creative Director: Design strategy and mood board creation",
    "SEO Specialist: Keyword research and competitor analysis",
    "Content Strategist: Content audit and strategy development"
  ],
  "Phase 2 - Design": [
    "Creative Director: Wireframes and design mockups",
    "Graphic Designer: Brand assets and visual elements",
    "SEO Specialist: SEO-friendly design recommendations",
    "Project Manager: Design approval coordination"
  ],
  "Phase 3 - Development": [
    "Senior Developer: Next.js implementation and optimization",
    "SEO Specialist: Technical SEO implementation",
    "Content Strategist: Content integration and optimization",
    "Social Media Specialist: Social integration setup"
  ],
  "Phase 4 - Testing & Launch": [
    "QA Tester: Comprehensive testing and validation",
    "SEO Specialist: Final SEO audit and optimization",
    "Project Manager: Client approval and launch coordination",
    "Senior Developer: Deployment and post-launch monitoring"
  ]
};
```

---

## ⚙️ **AUTOMATED GENERATION RULES**

### 🏢 **Company Foundation Logic (AUTO-CALCULATE)**
```javascript
// Automatic foundation date calculation
const domainDate = new Date(projectData.domainRegistered);
const industryOffset = {
  "Technology": -1, // 1 year before domain
  "Finance": -2,    // 2 years before domain  
  "Healthcare": -2, // 2 years before domain
  "Manufacturing": -3, // 3 years before domain
  "Startup": 0,     // Same year as domain
  "Default": -1     // 1 year before domain
};

const foundationYear = domainDate.getFullYear() + (industryOffset[industry] || -1);
const establishedDate = `Established ${foundationYear}`;
```

---

## 🏗️ **AUTO-GENERATED TECHNICAL SPECIFICATIONS**

### 📋 **TEMPLATE VARIABLES (AUTO-POPULATED)**
```javascript
// These variables are automatically populated from JSON input
const PROJECT_VARS = {
  BRAND_NAME: "{{brandName}}",
  DOMAIN: "{{domain}}",
  INDUSTRY: "{{industry}}",
  ESTABLISHED_YEAR: "{{calculatedFoundationYear}}",
  PRIMARY_COLOR: "{{brandColors[0]}}",
  SECONDARY_COLOR: "{{brandColors[1]}}",
  SERVICES_COUNT: "{{keyServices.length}}",
  BUSINESS_TYPE: "{{businessType}}",
  TARGET_AUDIENCE: "{{targetAudience}}",
  PRIMARY_CONTACT: "{{primaryContact}}",
  
  // Logo configuration - use provided or generate fallback
  LOGO_PATH: "{{logoPath || null}}",
  LOGO_ALT: "{{brandName}} Logo",
  USE_CUSTOM_LOGO: "{{logoPath ? true : false}}",
  
  // Conditional contact details - only include if provided
  PHONE: "{{contactDetails.phone || null}}",
  WHATSAPP: "{{contactDetails.whatsapp || null}}",
  OFFICE_ADDRESS: "{{contactDetails.officeAddress || null}}",
  
  // Conditional social media - only include if provided
  SOCIAL_INSTAGRAM: "{{socialMediaHandles.instagram || null}}",
  SOCIAL_TWITTER: "{{socialMediaHandles.twitter || null}}",
  SOCIAL_FACEBOOK: "{{socialMediaHandles.facebook || null}}",
  SOCIAL_LINKEDIN: "{{socialMediaHandles.linkedin || null}}",
  SOCIAL_YOUTUBE: "{{socialMediaHandles.youtube || null}}",
  
  // Additional features - conditional rendering
  SHOW_NEWSLETTER: "{{additionalFeatures.newsletter || false}}",
  SHOW_TESTIMONIALS: "{{additionalFeatures.testimonials || false}}",
  SHOW_FAQ: "{{additionalFeatures.faq || false}}",
  SHOW_BLOG: "{{additionalFeatures.blog || false}}",
  SHOW_PORTFOLIO: "{{additionalFeatures.portfolio || false}}",
  SHOW_TEAM_PAGE: "{{additionalFeatures.teamPage || false}}",
  SHOW_CHAT_WIDGET: "{{additionalFeatures.chatWidget || false}}",
  SHOW_MULTI_LANGUAGE: "{{additionalFeatures.multiLanguage || false}}",
  
  // Analytics tracking IDs
  GOOGLE_ANALYTICS_ID: "{{analytics.googleAnalytics || null}}",
  GOOGLE_TAG_MANAGER_ID: "{{analytics.googleTagManager || null}}",
  FACEBOOK_PIXEL_ID: "{{analytics.facebookPixel || null}}",
  HOTJAR_ID: "{{analytics.hotjar || null}}"
};

// Conditional rendering logic
const CONDITIONAL_RENDERING = {
  showPhone: "{{contactDetails.phone ? true : false}}",
  showWhatsApp: "{{contactDetails.whatsapp ? true : false}}",
  showAddress: "{{contactDetails.officeAddress ? true : false}}",
  showSocialMedia: "{{Object.keys(socialMediaHandles).length > 0 ? true : false}}",
  socialMediaCount: "{{Object.keys(socialMediaHandles).filter(key => socialMediaHandles[key]).length}}",
  
  // Logo rendering
  hasCustomLogo: "{{logoPath ? true : false}}",
  logoFormat: "{{logoPath ? logoPath.split('.').pop() : 'svg'}}",
  
  // Additional features rendering
  showNewsletter: "{{additionalFeatures.newsletter}}",
  showTestimonials: "{{additionalFeatures.testimonials}}",
  showFAQ: "{{additionalFeatures.faq}}",
  showBlog: "{{additionalFeatures.blog}}",
  showPortfolio: "{{additionalFeatures.portfolio}}",
  showTeamPage: "{{additionalFeatures.teamPage}}",
  showChatWidget: "{{additionalFeatures.chatWidget}}",
  showMultiLanguage: "{{additionalFeatures.multiLanguage}}",
  
  // Analytics rendering
  hasAnalytics: "{{analytics.googleAnalytics || analytics.googleTagManager || analytics.facebookPixel || analytics.hotjar ? true : false}}"
};
```

### 🛠️ **ADVANCED TECHNICAL STACK & SEO OPTIMIZATION**

#### **Core Framework & Performance**
* **Framework:** Next.js 14+ (App Router) with React 18+
* **Styling:** Tailwind CSS v3+ with CSS Modules for component isolation
* **Animations:** Framer Motion + CSS transitions for smooth interactions
* **Images:** Next.js Image component with WebP/AVIF optimization
* **Fonts:** Google Fonts with font-display: swap for performance
* **Build:** Static export with ISR capabilities (`next build && next export`)

#### **SEO & Performance Optimization**
* **Meta Management:** Next.js Metadata API for dynamic SEO tags
* **Structured Data:** JSON-LD schema markup for rich snippets
* **Sitemap:** Auto-generated XML sitemap with priority and changefreq
* **Robots.txt:** Optimized for search engine crawling
* **Core Web Vitals:** Target LCP < 2.5s, FID < 100ms, CLS < 0.1
* **Lighthouse Score:** 95+ across Performance, Accessibility, Best Practices, SEO

#### **Advanced SEO Features**
```javascript
const SEO_OPTIMIZATION = {
  technicalSEO: {
    metaTags: "Dynamic meta titles, descriptions, and keywords",
    openGraph: "Facebook, Twitter, LinkedIn social sharing optimization",
    canonicalUrls: "Proper canonical URL structure",
    hreflang: "International targeting with hreflang tags",
    structuredData: "Organization, WebSite, BreadcrumbList schemas"
  },
  performance: {
    imageOptimization: "WebP/AVIF with lazy loading and blur placeholders",
    codesplitting: "Route-based and component-based code splitting",
    bundleAnalysis: "Webpack bundle analyzer for optimization",
    caching: "Static asset caching with proper cache headers",
    compression: "Gzip/Brotli compression for all assets"
  },
  accessibility: {
    wcagCompliance: "WCAG 2.1 AA compliance",
    ariaLabels: "Proper ARIA labels and semantic HTML",
    keyboardNavigation: "Full keyboard navigation support",
    screenReader: "Screen reader optimization",
    colorContrast: "4.5:1 minimum color contrast ratio"
  }
};
```

#### **Modern Development Tools**
* **TypeScript:** Optional type safety for larger projects
* **ESLint + Prettier:** Code quality and formatting
* **Husky:** Pre-commit hooks for code quality
* **Deployment:** Vercel with automatic deployments and preview URLs

#### **Analytics & Tracking Integration**
```javascript
const ANALYTICS_INTEGRATION = {
  googleAnalytics: {
    implementation: "Google Analytics 4 (GA4) with Next.js",
    features: ["Page views", "Events", "Conversions", "E-commerce tracking"],
    gdprCompliant: "Cookie consent integration"
  },
  googleTagManager: {
    implementation: "GTM container with Next.js Script component",
    features: ["Tag management", "Custom events", "Conversion tracking"],
    benefits: "Easy tag management without code changes"
  },
  facebookPixel: {
    implementation: "Meta Pixel with Next.js",
    features: ["Conversion tracking", "Audience building", "Retargeting"],
    compliance: "GDPR/CCPA compliant implementation"
  },
  hotjar: {
    implementation: "Hotjar tracking script",
    features: ["Heatmaps", "Session recordings", "User feedback"],
    privacy: "Privacy-compliant user behavior analysis"
  }
};
```

#### **Additional Features Implementation**
```javascript
const ADDITIONAL_FEATURES = {
  newsletter: {
    implementation: "Email signup form with validation",
    integration: "Mailchimp/ConvertKit API or simple form submission",
    placement: "Footer, sidebar, or dedicated section"
  },
  testimonials: {
    implementation: "Dynamic testimonials carousel/grid",
    features: ["Star ratings", "Client photos", "Company logos"],
    seoImpact: "Rich snippets with review schema"
  },
  faq: {
    implementation: "Accordion-style FAQ section",
    features: ["Searchable", "Categorized", "Expandable sections"],
    seoImpact: "FAQ schema markup for rich snippets"
  },
  blog: {
    implementation: "Static blog with markdown/MDX",
    features: ["Categories", "Tags", "Search", "RSS feed"],
    seoImpact: "Content marketing and SEO boost"
  },
  portfolio: {
    implementation: "Project showcase with case studies",
    features: ["Image galleries", "Project details", "Client testimonials"],
    filtering: "Category and technology filters"
  },
  teamPage: {
    implementation: "Team member profiles and bios",
    features: ["Photos", "Roles", "Social links", "Expertise areas"],
    seoImpact: "Person schema markup"
  },
  chatWidget: {
    implementation: "Live chat integration (Intercom/Zendesk)",
    features: ["Real-time chat", "Offline messages", "Mobile responsive"],
    placement: "Floating widget with customizable positioning"
  },
  multiLanguage: {
    implementation: "Next.js i18n with language switcher",
    features: ["Multiple language support", "SEO-friendly URLs", "RTL support"],
    seoImpact: "Hreflang tags and international SEO"
  }
};
```

### 🎨 **AUTO-GENERATED FEATURES BASED ON BUSINESS TYPE**
```javascript
const FEATURES_BY_TYPE = {
  "Corporate": [
    "Executive team section",
    "Company timeline",
    "Professional services grid",
    "Corporate contact form",
    "Investor relations page"
  ],
  "Startup": [
    "Founder story section",
    "Product showcase",
    "Early adopter signup",
    "Pitch deck download",
    "Beta access form"
  ],
  "Agency": [
    "Portfolio showcase",
    "Case study modals",
    "Service packages",
    "Client testimonials",
    "Project inquiry form"
  ],
  "Default": [
    "About us section",
    "Services overview",
    "Contact form",
    "Company information",
    "Privacy policy"
  ]
};
```

---

## 🎨 **MODERN DESIGN PRINCIPLES & UI/UX STANDARDS**

### 🎯 **Design Philosophy**
```javascript
const MODERN_DESIGN_PRINCIPLES = {
  visualHierarchy: {
    typography: "Clear type scale with proper heading hierarchy (H1-H6)",
    spacing: "Consistent 8px grid system for all spacing",
    contrast: "High contrast for readability (4.5:1 minimum)",
    whitespace: "Generous whitespace for clean, uncluttered layouts"
  },
  userExperience: {
    navigation: "Intuitive navigation with clear user paths",
    loading: "Smooth loading states and skeleton screens",
    feedback: "Immediate visual feedback for all interactions",
    accessibility: "Keyboard navigation and screen reader support"
  },
  modernAesthetics: {
    colorPalette: "Sophisticated color schemes with proper color theory",
    gradients: "Subtle gradients and shadows for depth",
    animations: "Micro-interactions that enhance user experience",
    responsiveness: "Mobile-first responsive design approach"
  }
};
```

### 📱 **Responsive Design Standards**
```javascript
const RESPONSIVE_BREAKPOINTS = {
  mobile: "320px - 767px (Mobile-first approach)",
  tablet: "768px - 1023px (Touch-optimized)",
  desktop: "1024px - 1439px (Standard desktop)",
  largeDesktop: "1440px+ (Large screens and 4K displays)",
  
  designPrinciples: {
    mobile: [
      "Single column layouts",
      "Touch-friendly button sizes (44px minimum)",
      "Simplified navigation (hamburger menu)",
      "Optimized images for mobile bandwidth"
    ],
    tablet: [
      "Two-column layouts where appropriate",
      "Touch and mouse interaction support",
      "Adaptive navigation systems",
      "Optimized for both portrait and landscape"
    ],
    desktop: [
      "Multi-column layouts with proper grid systems",
      "Hover states and micro-interactions",
      "Full navigation menus",
      "High-resolution images and graphics"
    ]
  }
};
```

### 🎭 **Design System Components**
```javascript
const DESIGN_SYSTEM = {
  typography: {
    primaryFont: "Inter, system-ui, sans-serif",
    headingFont: "Poppins, Inter, sans-serif", 
    codeFont: "JetBrains Mono, Consolas, monospace",
    fontSizes: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px  
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem"  // 36px
    }
  },
  
  colorSystem: {
    primary: "{{brandColors[0]}} with 9 shade variations",
    secondary: "{{brandColors[1]}} with 9 shade variations", 
    neutral: "Gray scale from 50 to 900",
    semantic: {
      success: "#10B981 (Green)",
      warning: "#F59E0B (Amber)", 
      error: "#EF4444 (Red)",
      info: "#3B82F6 (Blue)"
    }
  },
  
  spacing: {
    scale: "0, 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 5rem, 6rem, 8rem",
    components: {
      buttonPadding: "0.75rem 1.5rem",
      cardPadding: "1.5rem",
      sectionPadding: "4rem 0",
      containerMaxWidth: "1200px"
    }
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
  }
};
```

### ✨ **Modern UI Components & Interactions**
```javascript
const UI_COMPONENTS = {
  navigation: {
    desktop: "Horizontal navigation with dropdown menus",
    mobile: "Hamburger menu with slide-out navigation",
    sticky: "Sticky header with scroll-based styling changes",
    breadcrumbs: "Breadcrumb navigation for deep pages"
  },
  
  buttons: {
    primary: "Solid background with hover and focus states",
    secondary: "Outline style with hover fill animation", 
    ghost: "Text-only with subtle hover background",
    sizes: ["sm", "md", "lg", "xl"] with consistent padding
  },
  
  cards: {
    serviceCards: "Hover effects with subtle lift and shadow",
    testimonialCards: "Quote styling with author attribution",
    blogCards: "Image, title, excerpt, and CTA structure",
    pricingCards: "Feature comparison with highlight effects"
  },
  
  forms: {
    inputs: "Clean styling with focus states and validation",
    labels: "Floating labels or clear positioning",
    validation: "Real-time validation with helpful error messages",
    submission: "Loading states and success/error feedback"
  },
  
  animations: {
    pageTransitions: "Smooth page transitions between routes",
    scrollAnimations: "Reveal animations on scroll (Intersection Observer)",
    microInteractions: "Button hovers, form focus, loading states",
    parallax: "Subtle parallax effects for hero sections"
  }
};
```

### 🎪 **Industry-Specific Design Adaptations**
```javascript
const DESIGN_BY_INDUSTRY = {
  "Technology": {
    aesthetic: "Clean, minimal, futuristic",
    colors: "Blues, teals, modern gradients",
    typography: "Sans-serif, geometric fonts",
    imagery: "Abstract tech graphics, code snippets, devices"
  },
  "Finance": {
    aesthetic: "Professional, trustworthy, stable",
    colors: "Navy, gold, conservative palette",
    typography: "Traditional serif for headings, clean sans-serif for body",
    imagery: "Professional photography, charts, corporate imagery"
  },
  "Healthcare": {
    aesthetic: "Clean, calming, professional",
    colors: "Blues, greens, whites with medical associations",
    typography: "Readable, accessible fonts",
    imagery: "Medical professionals, facilities, caring imagery"
  },
  "Creative/Agency": {
    aesthetic: "Bold, artistic, innovative",
    colors: "Vibrant, creative color combinations",
    typography: "Creative font pairings, display fonts",
    imagery: "Portfolio work, creative processes, team culture"
  }
};
```

---

## 📁 **AUTO-GENERATED PROJECT STRUCTURE**

### 🗂️ **DYNAMIC FOLDER TEMPLATE**
```bash
# Auto-generated based on {{brandName}}
/{{brandName-kebab-case}}/
  /app/                    # Next.js 13+ App Router
    layout.js             # Root layout with {{brandName}} metadata
    page.js               # Home page with {{industry}} focus
    /about/
      page.js             # About with {{establishedYear}} timeline
    /services/
      page.js             # Services grid ({{keyServices.length}} items)
    /contact/
      page.js             # Contact form with {{primaryContact}}
    /privacy/
      page.js             # Legal pages
  /public/
    /images/
      logo.svg            # Custom logo from {{logoPath}} or generated fallback
      logo-light.svg      # Light version for dark backgrounds (if provided)
      logo-dark.svg       # Dark version for light backgrounds (if provided)
      hero-{{industry}}.webp
      /services/          # Auto-generate {{keyServices.length}} images
      /team/              # Based on {{companySize}}
    favicon.ico           # Generated from logo or {{brandColors[0]}}
    apple-touch-icon.png  # Generated from logo for iOS devices
    sitemap.xml           # Auto-populated with {{domain}}
    robots.txt            # Configured for {{domain}}
  /components/
    /layout/
      Header.js           # With {{brandName}} logo
      Footer.js           # With {{establishedYear}} copyright and conditional contact info
      Navigation.js       # Menu items based on {{businessType}}
    /ui/
      Logo.js             # Smart logo component (custom or fallback)
      ServiceCard.js      # Template for {{keyServices}}
      ContactForm.js      # Sends to {{primaryContact}}
      ContactInfo.js      # Conditional contact details (phone, address, social)
      SocialMediaLinks.js # Conditional social media icons
      Newsletter.js       # Conditional newsletter signup
      Testimonials.js     # Conditional testimonials carousel
      FAQ.js              # Conditional FAQ accordion
      ChatWidget.js       # Conditional live chat integration
      LanguageSwitcher.js # Conditional multi-language support
      Modal.js            # Reusable modal system
    /sections/
      Hero.js             # {{industry}}-specific hero content
      About.js            # {{businessType}}-tailored about section
      Services.js         # Dynamic {{keyServices}} rendering
      ContactSection.js   # Conditional contact information display
  /styles/
    globals.css           # {{brandColors}} CSS variables
    components.css        # Component-specific styles
  /utils/
    constants.js          # All {{PROJECT_VARS}} exported
    seo.js               # {{domain}} and {{brandName}} SEO config
  /data/
    company.json          # All project data centralized
    services.json         # {{keyServices}} detailed data
    contact.json          # Conditional contact details and social media
    testimonials.json     # Client testimonials data (if enabled)
    faq.json              # FAQ content (if enabled)
    team.json             # Team member data (if team page enabled)
    blog/                 # Blog posts directory (if blog enabled)
    portfolio.json        # Portfolio/case studies data (if enabled)
  next.config.js          # Optimized for {{domain}} deployment
  package.json            # {{brandName}} project metadata
  tailwind.config.js      # {{brandColors}} theme configuration
```

---

## 📄 **AUTO-GENERATED PAGE CONTENT TEMPLATES**

### 🏠 **HOME PAGE TEMPLATE**
```javascript
// Auto-generated content based on input data
const HOME_CONTENT = {
  hero: {
    title: `Welcome to {{brandName}}`,
    subtitle: `Leading {{industry}} solutions since {{establishedYear}}`,
    cta: `Discover Our {{keyServices[0]}}`,
    backgroundImage: `hero-{{industry}}.webp`
  },
  services: {
    title: `Our {{keyServices.length}} Core Services`,
    items: `{{keyServices}}`, // Auto-mapped to service cards
    cta: `Learn More About Our Services`
  },
  about: {
    title: `About {{brandName}}`,
    content: `{{brandName}} has been serving the {{industry}} industry since {{establishedYear}}. We specialize in {{keyServices.join(', ')}} for {{targetAudience}} clients.`,
    cta: `Our Story`
  }
};
```

### 🏢 **ABOUT PAGE TEMPLATE**
```javascript
const ABOUT_CONTENT = {
  hero: `{{brandName}} - Established {{establishedYear}}`,
  mission: `Auto-generated mission statement for {{industry}} {{businessType}}`,
  timeline: [
    {
      year: `{{establishedYear}}`,
      event: `{{brandName}} founded`
    },
    {
      year: `{{domainRegistered.year}}`,
      event: `Launched {{domain}} website`
    }
  ],
  values: `Auto-generated based on {{industry}} and {{businessType}}`,
  team: `Team size: {{companySize}} organization`
};
```

### 🛠️ **SERVICES PAGE TEMPLATE**
```javascript
const SERVICES_CONTENT = {
  title: `{{brandName}} {{industry}} Services`,
  services: `{{keyServices}}`.map(service => ({
    name: service,
    description: `Professional ${service} services for {{targetAudience}}`,
    icon: `${service.toLowerCase()}-icon.svg`,
    features: [`Auto-generated feature list based on ${service}`]
  }))
};
```

### 📞 **CONTACT PAGE TEMPLATE**
```javascript
const CONTACT_CONTENT = {
  title: `Contact {{brandName}}`,
  email: `{{primaryContact}}`,
  
  // Conditional contact information - only include if provided
  phone: `{{contactDetails.phone || null}}`,
  whatsapp: `{{contactDetails.whatsapp || null}}`,
  
  // Conditional office address - only include if provided
  address: contactDetails.officeAddress ? {
    street: `{{contactDetails.officeAddress.street}}`,
    city: `{{contactDetails.officeAddress.city}}`,
    state: `{{contactDetails.officeAddress.state}}`,
    country: `{{contactDetails.officeAddress.country}}`,
    zipCode: `{{contactDetails.officeAddress.zipCode}}`,
    fullAddress: `{{contactDetails.officeAddress.street}}, {{contactDetails.officeAddress.city}}, {{contactDetails.officeAddress.state}} {{contactDetails.officeAddress.zipCode}}, {{contactDetails.officeAddress.country}}`
  } : null,
  
  // Contact form configuration
  form: {
    fields: ['name', 'email', 'company', 'service', 'message'],
    submitTo: `{{primaryContact}}`,
    thankYou: `Thank you for contacting {{brandName}}. We'll respond within 24 hours.`
  },
  
  // Social media links - only include if provided
  socialMedia: {
    instagram: `{{socialMediaHandles.instagram || null}}`,
    twitter: `{{socialMediaHandles.twitter || null}}`,
    facebook: `{{socialMediaHandles.facebook || null}}`,
    linkedin: `{{socialMediaHandles.linkedin || null}}`,
    youtube: `{{socialMediaHandles.youtube || null}}`
  }
};

// Contact page conditional rendering
const CONTACT_SECTIONS = {
  showPhoneSection: `{{contactDetails.phone ? true : false}}`,
  showWhatsAppSection: `{{contactDetails.whatsapp ? true : false}}`,
  showAddressSection: `{{contactDetails.officeAddress ? true : false}}`,
  showSocialMediaSection: `{{Object.values(socialMediaHandles).some(handle => handle) ? true : false}}`,
  showMapSection: `{{contactDetails.officeAddress ? true : false}}`
};
```

---

## 🔧 **CONDITIONAL CONTENT RENDERING SYSTEM**

### 📞 **Contact Information Logic**
```javascript
const CONTACT_RENDERING = {
  // Phone number section
  phoneSection: {
    condition: "contactDetails.phone !== null && contactDetails.phone !== ''",
    components: [
      "Phone icon in header/footer",
      "Click-to-call functionality", 
      "Phone number display in contact page",
      "Phone field in contact forms"
    ]
  },
  
  // WhatsApp integration
  whatsappSection: {
    condition: "contactDetails.whatsapp !== null && contactDetails.whatsapp !== ''",
    components: [
      "WhatsApp floating button",
      "WhatsApp icon in contact section",
      "Click-to-WhatsApp functionality",
      "WhatsApp business integration"
    ]
  },
  
  // Office address section
  addressSection: {
    condition: "contactDetails.officeAddress !== null",
    components: [
      "Address display in contact page",
      "Google Maps integration (if address provided)",
      "Location icon in footer",
      "Directions link functionality",
      "Local SEO schema markup with address"
    ]
  }
};
```

### 📱 **Social Media Integration Logic**
```javascript
const SOCIAL_MEDIA_RENDERING = {
  // Individual social platform logic
  platforms: {
    instagram: {
      condition: "socialMediaHandles.instagram !== null && socialMediaHandles.instagram !== ''",
      components: ["Instagram icon", "Instagram feed widget (optional)", "Instagram link in footer"]
    },
    twitter: {
      condition: "socialMediaHandles.twitter !== null && socialMediaHandles.twitter !== ''", 
      components: ["Twitter icon", "Twitter timeline widget (optional)", "Twitter share buttons"]
    },
    facebook: {
      condition: "socialMediaHandles.facebook !== null && socialMediaHandles.facebook !== ''",
      components: ["Facebook icon", "Facebook page plugin (optional)", "Facebook share buttons"]
    },
    linkedin: {
      condition: "socialMediaHandles.linkedin !== null && socialMediaHandles.linkedin !== ''",
      components: ["LinkedIn icon", "LinkedIn company page link", "LinkedIn share buttons"]
    },
    youtube: {
      condition: "socialMediaHandles.youtube !== null && socialMediaHandles.youtube !== ''",
      components: ["YouTube icon", "YouTube channel link", "Video embeds (if applicable)"]
    }
  },
  
  // Social media section visibility
  socialSection: {
    condition: "Object.values(socialMediaHandles).some(handle => handle !== null && handle !== '')",
    components: [
      "Social media icons section in footer",
      "Follow us section on about page", 
      "Social sharing buttons on blog/news (if applicable)",
      "Social proof indicators"
    ]
  }
};
```

### 🎯 **Implementation Guidelines**
```javascript
const IMPLEMENTATION_RULES = {
  defaultBehavior: {
    missingContactInfo: "Do not show empty contact sections or placeholder text",
    missingSocialMedia: "Do not display social media section if no handles provided",
    gracefulDegradation: "Website functions perfectly without optional contact/social info"
  },
  
  conditionalComponents: {
    contactPage: "Dynamically adjust layout based on available contact information",
    footer: "Show only provided contact methods and social links",
    header: "Include phone/WhatsApp only if provided",
    forms: "Contact form adapts based on available contact methods"
  },
  
  seoConsiderations: {
    localSEO: "Include address in schema markup only if office address provided",
    socialSignals: "Add social media schema only for provided platforms",
    contactSchema: "Include phone/address in Organization schema only if available"
  }
};
```

### 🎨 **Logo Configuration & Validation**
```javascript
const LOGO_CONFIGURATION = {
  logoPath: {
    supportedFormats: ["SVG", "PNG", "JPG", "JPEG", "WEBP"],
    preferredFormat: "SVG for scalability and performance",
    validation: "Valid file path or URL to logo asset",
    fallbackBehavior: "Generate text-based logo using brandName if not provided"
  },
  
  logoImplementation: {
    customLogo: {
      condition: "logoPath is provided and valid",
      implementation: "Use provided logo with Next.js Image optimization",
      responsive: "Multiple sizes generated for different screen densities",
      accessibility: "Alt text using brandName + 'Logo'"
    },
    
    fallbackLogo: {
      condition: "logoPath is null, empty, or invalid",
      implementation: "Generate text-based logo using brandName",
      styling: "Modern typography with brand colors",
      responsive: "Scalable text logo for all screen sizes"
    }
  },
  
  logoOptimization: {
    formats: "Convert to WebP/AVIF for performance",
    sizes: "Generate multiple sizes (32px, 64px, 128px, 256px)",
    lazyLoading: "Eager loading for above-the-fold logo placement",
    caching: "Proper cache headers for logo assets"
  },
  
  logoPlacement: {
    header: "Primary logo in navigation header",
    footer: "Secondary logo or text version in footer",
    favicon: "Generate favicon from logo or use brand colors",
    socialSharing: "Use logo in Open Graph and Twitter Card images"
  }
};
```

### 📋 **Contact Information Validation**
```javascript
const CONTACT_VALIDATION = {
  phoneNumber: {
    format: "International format preferred (+country-code-number)",
    validation: "Valid phone number format required",
    display: "Format for local display (e.g., +91 98765 43210)"
  },
  
  whatsappNumber: {
    format: "International format required for WhatsApp API",
    validation: "Must be valid WhatsApp business number",
    functionality: "Direct WhatsApp chat integration"
  },
  
  officeAddress: {
    required: ["street", "city", "country"],
    optional: ["state", "zipCode"],
    validation: "Valid address for Google Maps integration",
    seoImpact: "Improves local SEO when provided"
  },
  
  socialMediaHandles: {
    format: "Handle format (@username) or full URL",
    validation: "Valid social media profile URLs",
    verification: "Verify social profiles exist and are active"
  }
};
```

---

## 🎨 **Design & Asset Requirements**

### Image Specifications:
* **Format:** WebP primary, JPG fallback
* **Hero Banner:** 1920×700 (desktop), 1080×1350 (mobile)
* **Service Cards:** 400×300 consistent sizing
* **Icons:** SVG format only
* **Optimization:** Lazy loading with placeholder

### Typography & Styling:
* **Fonts:** Inter, Poppins, or Montserrat (Google Fonts)
* **Grid System:** CSS Grid or Flexbox
* **Responsive:** Mobile-first approach
* **Color Palette:** Follow brand guidelines
* **Spacing:** Consistent padding/margin system

---

## 🏢 **Company Foundation Date Guidelines**

When determining company establishment dates:

### Domain Registration Reference:
* Use domain registration date as baseline
* Add **1-3 years before** domain registration for realistic company foundation
* Consider industry standards:
  - **Tech companies:** 1-2 years before domain
  - **Traditional businesses:** 2-3 years before domain
  - **Startups:** Same year or 1 year before domain

### Example Logic:
```
Domain Registered: July 16, 2010
Realistic Foundation: 2008-2009
Display: "Established 2008" or "Founded in 2009"
```

### Content Integration:
* Use in About page hero section
* Include in footer copyright
* Reference in company story/history
* Maintain consistency across all pages

---

## ✅ **AUTOMATED QA VALIDATION CHECKLIST**

### 🤖 **AUTO-VALIDATION RULES**
```javascript
// Automated checks that must pass before deployment
const QA_AUTOMATION = {
  brandConsistency: {
    logoPresent: `Check for {{brandName}} logo on all pages`,
    colorScheme: `Validate {{brandColors}} usage throughout`,
    typography: `Consistent font usage across all components`,
    establishedYear: `{{establishedYear}} appears in footer copyright`
  },
  
  contentValidation: {
    servicesCount: `Exactly {{keyServices.length}} services displayed`,
    contactEmail: `{{primaryContact}} appears in contact forms`,
    domainLinks: `All internal links use {{domain}}`,
    industryKeywords: `{{industry}} terminology used appropriately`
  },
  
  technicalChecks: {
    nextjsBuild: `next build && next export completes successfully`,
    staticExport: `All pages generate static HTML`,
    noApiCalls: `Zero external API dependencies`,
    seoTags: `Meta tags include {{brandName}} and {{industry}}`
  }
};
```

### 📱 **RESPONSIVE VALIDATION (AUTO-TEST)**
```javascript
const RESPONSIVE_TESTS = [
  { device: 'Mobile', width: '375px', tests: [
    `{{brandName}} logo scales properly`,
    `Navigation menu collapses correctly`,
    `Contact form fits screen width`,
    `Service cards stack vertically`
  ]},
  { device: 'Tablet', width: '768px', tests: [
    `Services grid shows 2 columns`,
    `Hero text remains readable`,
    `Footer layout adapts properly`
  ]},
  { device: 'Desktop', width: '1200px', tests: [
    `Full navigation menu visible`,
    `Hero section fills viewport`,
    `Services show {{keyServices.length}} per row`
  ]}
];
```

### 🚀 **PERFORMANCE BENCHMARKS (AUTO-MEASURED)**
```javascript
const PERFORMANCE_TARGETS = {
  loadTime: `< 2 seconds for {{domain}}`,
  firstContentfulPaint: `< 1.5 seconds`,
  largestContentfulPaint: `< 2.5 seconds`,
  cumulativeLayoutShift: `< 0.1`,
  imageOptimization: `All {{industry}} images WebP format`,
  bundleSize: `< 500KB total JavaScript`,
  seoScore: `> 95 Lighthouse SEO score`
};
```

### 🔍 **CONTENT QUALITY CHECKS**
```javascript
const CONTENT_VALIDATION = {
  brandMentions: `{{brandName}} appears minimum 3 times per page`,
  servicesCoverage: `Each {{keyServices}} item has dedicated section`,
  contactInfo: `{{primaryContact}} accessible on every page`,
  establishedCredibility: `{{establishedYear}} mentioned in about section`,
  industryRelevance: `{{industry}} keywords naturally integrated`,
  targetAudience: `Content speaks to {{targetAudience}} needs`
};
```

### ✅ **100% FINAL DELIVERY CHECKLIST & QUALITY STANDARDS**

#### 🎯 **COMPLETION CRITERIA - MUST ACHIEVE 100%**

##### **Brand & Design Excellence**
- [ ] **Brand Consistency:** {{brandName}} logo, colors, and messaging consistent across all pages
- [ ] **Logo Implementation:** Custom logo from {{logoPath}} or professional fallback text logo
- [ ] **Logo Optimization:** Multiple formats and sizes for optimal performance
- [ ] **Favicon Generation:** Custom favicon generated from logo or brand colors
- [ ] **Modern Design:** Contemporary UI/UX following 2024+ design trends
- [ ] **Visual Hierarchy:** Clear typography scale and proper heading structure (H1-H6)
- [ ] **Color System:** Professional color palette with proper contrast ratios (4.5:1+)
- [ ] **Responsive Design:** Pixel-perfect display on all device sizes (320px to 4K)
- [ ] **Design System:** Consistent spacing, shadows, and component styling
- [ ] **Industry Alignment:** Design aesthetic matches {{industry}} {{businessType}} standards

##### **Technical Excellence & Performance**
- [ ] **Lighthouse Score:** 95+ across all metrics (Performance, Accessibility, Best Practices, SEO)
- [ ] **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- [ ] **Page Load Speed:** < 2 seconds on 3G connection
- [ ] **Image Optimization:** All images WebP/AVIF with proper lazy loading
- [ ] **Code Quality:** Clean, maintainable code with proper commenting
- [ ] **Static Export:** `next build && next export` generates optimized static files
- [ ] **Cross-Browser:** Perfect functionality in Chrome, Firefox, Safari, Edge
- [ ] **Mobile Performance:** 90+ mobile Lighthouse score

##### **SEO & Content Optimization**
- [ ] **Technical SEO:** Complete meta tags, structured data, sitemap, robots.txt
- [ ] **Content Quality:** All {{keyServices}} properly described with industry keywords
- [ ] **SEO Keywords:** {{seoKeywords}} naturally integrated throughout content
- [ ] **Local SEO:** Proper NAP (Name, Address, Phone) consistency if applicable
- [ ] **Social Media:** Open Graph and Twitter Card optimization
- [ ] **Schema Markup:** Organization, WebSite, and BreadcrumbList schemas implemented
- [ ] **International:** Hreflang tags for {{targetCountries}} if applicable
- [ ] **Content Strategy:** Compelling copy that converts visitors to leads

##### **Functionality & User Experience**
- [ ] **Contact Integration:** {{primaryContact}} functional across all forms with validation
- [ ] **Conditional Contact Info:** Phone, WhatsApp, and address only displayed if provided
- [ ] **Social Media Integration:** Social icons only shown for provided social media handles
- [ ] **Additional Features:** Newsletter, testimonials, FAQ, blog, portfolio only if enabled
- [ ] **Analytics Integration:** GA4, GTM, Facebook Pixel, Hotjar only if tracking IDs provided
- [ ] **Form Functionality:** Real-time validation, success/error states, spam protection
- [ ] **Navigation:** Intuitive menu structure with clear user paths
- [ ] **Accessibility:** WCAG 2.1 AA compliance with keyboard navigation
- [ ] **Loading States:** Smooth loading animations and skeleton screens
- [ ] **Error Handling:** Custom 404 page and graceful error handling
- [ ] **User Journey:** Clear conversion paths and call-to-action placement
- [ ] **Interactive Elements:** Hover states, animations, and micro-interactions
- [ ] **Multi-language Support:** Language switcher and i18n only if enabled
- [ ] **Chat Integration:** Live chat widget only if enabled in features

##### **Security & Compliance**
- [ ] **HTTPS:** SSL certificate properly configured
- [ ] **Privacy Policy:** GDPR/CCPA compliant privacy policy included
- [ ] **Terms of Service:** Legal terms and conditions page
- [ ] **Cookie Consent:** Cookie banner if required by jurisdiction
- [ ] **Security Headers:** Proper security headers configured
- [ ] **No Vulnerabilities:** Zero security vulnerabilities in dependencies
- [ ] **Data Protection:** No sensitive data exposure or insecure practices

#### 📊 **QUALITY ASSURANCE METRICS**

```javascript
const QUALITY_STANDARDS = {
  performance: {
    lighthouseScore: ">= 95",
    pageLoadTime: "< 2 seconds",
    firstContentfulPaint: "< 1.5 seconds",
    largestContentfulPaint: "< 2.5 seconds",
    cumulativeLayoutShift: "< 0.1",
    firstInputDelay: "< 100ms"
  },
  
  seo: {
    lighthouseSEO: ">= 95",
    metaTagsComplete: "100%",
    structuredDataValid: "100%",
    internalLinksWorking: "100%",
    imageAltTags: "100%",
    headingStructure: "Proper H1-H6 hierarchy"
  },
  
  accessibility: {
    wcagCompliance: "AA Level",
    colorContrast: ">= 4.5:1",
    keyboardNavigation: "100% functional",
    screenReaderSupport: "Full compatibility",
    focusManagement: "Proper focus indicators"
  },
  
  design: {
    responsiveBreakpoints: "All devices 320px-4K",
    brandConsistency: "100% across all pages",
    visualHierarchy: "Clear and logical",
    userExperience: "Intuitive and conversion-focused"
  }
};
```

#### 🏆 **FINAL APPROVAL PROCESS**

1. **Technical Lead Review:** Code quality, performance, and functionality validation
2. **Creative Director Approval:** Design consistency and visual excellence sign-off  
3. **SEO Specialist Audit:** Complete SEO optimization and technical validation
4. **QA Tester Verification:** Cross-browser testing and user journey validation
5. **Content Strategist Review:** Copy quality and conversion optimization approval
6. **Project Manager Coordination:** Final client presentation and approval
7. **Client Sign-Off:** Complete satisfaction confirmation before delivery

#### 📦 **100% COMPLETE DELIVERABLE PACKAGE**

```bash
/{{brandName}}-Final-Website-Package/
  /live-website/
    /build/                     # Production-ready static files
    deployment-instructions.md   # Step-by-step deployment guide
    performance-report.pdf      # Lighthouse and Core Web Vitals report
  /source-code/
    /{{brandName-kebab-case}}/  # Complete Next.js project with documentation
    code-documentation.md       # Technical documentation and maintenance guide
  /design-assets/
    /brand-guidelines/          # Logo files, color palettes, typography guide
    /mockups/                   # Design files and wireframes
    /images/                    # Optimized images and graphics
  /seo-package/
    seo-audit-report.pdf        # Complete SEO analysis and recommendations
    keyword-research.xlsx       # Keyword analysis and strategy
    competitor-analysis.pdf     # Industry competitor analysis
  /documentation/
    project-specifications.pdf   # Complete project requirements and features
    user-manual.pdf             # Client guide for content updates
    maintenance-guide.pdf       # Ongoing maintenance recommendations
  /quality-assurance/
    testing-report.pdf          # Complete QA testing results
    browser-compatibility.pdf   # Cross-browser testing results
    accessibility-audit.pdf     # WCAG compliance verification
```

---

## 📝 **Content Guidelines for Developers**

### Text Content Requirements:
* **Tone:** Corporate, professional, confident
* **Length:** Concise paragraphs (2-4 sentences)
* **Voice:** Third person only
* **Style:** Human-written, not AI-generated feel

### Dynamic Content Handling:
* Use React state for client-side interactions
* Implement loading states for better UX
* Handle empty states gracefully
* Provide fallback content for missing data

### Form Handling:
```javascript
// Example contact form validation
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const validateForm = () => {
  const newErrors = {};
  if (!formData.name.trim()) newErrors.name = 'Name is required';
  if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
  if (!formData.message.trim()) newErrors.message = 'Message is required';
  return newErrors;
};
```

---

## 🚫 **Strict Exclusions (Do Not Implement)**

* ❌ Blog/News sections
* ❌ User authentication systems
* ❌ Database connections
* ❌ API integrations
* ❌ Admin dashboards
* ❌ Dynamic content management
* ❌ Search functionality requiring backend
* ❌ User-generated content
* ❌ Payment processing
* ❌ Real-time features

---

## 🚀 **Deployment & Build Process**

### Build Commands:
```bash
# Development
npm run dev

# Production build
npm run build
npm run export

# Static file generation
next build && next export
```

### Deployment Checklist:
* [ ] Environment variables configured
* [ ] Static export successful
* [ ] All assets properly linked
* [ ] Domain configuration complete
* [ ] SSL certificate active
* [ ] CDN optimization enabled

### File Naming Convention:
* Lowercase, hyphen-separated
* Component files: `PascalCase.js`
* Utility files: `kebab-case.js`
* Final build: `{brandname}-final-build.zip`

---

## 🚀 **ENHANCED AUTOMATED EXECUTION WORKFLOW WITH TEAM COORDINATION**

### 📋 **COMPREHENSIVE STEP-BY-STEP AUTOMATION PROCESS**

#### **Phase 1: Project Initialization & Team Setup**
```javascript
const PHASE_1_INITIALIZATION = {
  duration: "Day 1-2",
  teamInvolved: ["Project Manager", "Creative Director", "SEO Specialist", "Content Strategist"],
  
  steps: [
    {
      step: "1.1 - Domain Research & Data Discovery",
      owner: "Project Manager + SEO Specialist",
      tasks: [
        "Perform real WHOIS lookup using online tools (whois.net, domaintools.com)",
        "Extract actual domain registration date and expiry information",
        "Identify registrar, nameservers, and hosting provider",
        "Analyze current website and technology stack (if active)",
        "Infer industry from domain name and content analysis",
        "Research competitor landscape and common services"
      ],
      tools: [
        "WHOIS lookup services (whois.net, whoisxml.com)",
        "DNS analysis tools (dnschecker.org, mxtoolbox.com)", 
        "SSL certificate checkers (ssllabs.com, sslshopper.com)",
        "Website analysis tools (builtwith.com, wappalyzer.com)",
        "Industry research and competitor analysis"
      ],
      output: {
        domainData: "Real registration date, expiry, registrar, nameservers",
        technicalData: "SSL status, hosting provider, current website analysis",
        industryData: "Inferred industry, business type, target audience",
        competitorData: "Similar businesses, common services, market positioning"
      }
    },
    {
      step: "1.2 - Input Validation & Enhancement",
      owner: "Project Manager",
      tasks: [
        "Validate discovered domain data accuracy",
        "Enhance input with researched SEO keywords and competitor analysis", 
        "Generate brand colors based on industry psychology",
        "Confirm target countries from domain registration data",
        "Auto-generate brand name and primary contact email"
      ],
      validation: {
        discovered: ["domainRegistered", "domainExpiry", "registrar", "hostingProvider"],
        generated: ["brandName", "primaryContact", "industry", "keyServices", "brandColors"],
        enhanced: ["seoKeywords", "competitorUrls", "designStyle", "targetCountries"]
      }
    },
    {
      step: "1.3 - SEO & Competitor Research",
      owner: "SEO Specialist", 
      tasks: [
        "Keyword research and analysis for {{seoKeywords}}",
        "Competitor website analysis for {{competitorUrls}}",
        "Local SEO setup for {{targetCountries}}",
        "Technical SEO strategy development"
      ]
    },
    {
      step: "1.4 - Design Strategy & Brand Guidelines",
      owner: "Creative Director",
      tasks: [
        "Analyze {{designStyle}} and {{industry}} design trends",
        "Create comprehensive brand guidelines from {{brandColors}}",
        "Develop responsive design strategy",
        "Plan modern UI/UX component system"
      ]
    },
    {
      step: "1.5 - Content Strategy Development", 
      owner: "Content Strategist",
      tasks: [
        "Develop content strategy for {{keyServices}}",
        "Create conversion-focused copy framework",
        "Plan {{targetAudience}} messaging approach",
        "Integrate {{seoKeywords}} into content strategy"
      ]
    }
  ]
};
```

#### **Phase 2: Design & Development Automation**
   ```javascript
const PHASE_2_DEVELOPMENT = {
  duration: "Day 3-5",
  teamInvolved: ["Senior Developer", "Creative Director", "Graphic Designer", "SEO Specialist"],
  
  steps: [
    {
      step: "2.1 - Auto-Calculate Variables & Setup",
      owner: "Senior Developer",
      automation: [
        "Run foundation date calculation using industry offset",
        "Generate kebab-case folder names from {{brandName}}",
        "Create comprehensive color palette CSS variables",
        "Build service templates from {{keyServices}}",
        "Setup Next.js 14+ project with advanced configuration"
      ]
    },
    {
      step: "2.2 - Modern Design System Implementation",
      owner: "Creative Director + Senior Developer",
      tasks: [
        "Implement responsive design system with Tailwind CSS",
        "Create modern UI components with proper animations",
        "Setup typography scale and spacing system",
        "Implement {{designStyle}} aesthetic for {{industry}}"
      ]
    },
    {
      step: "2.3 - Advanced Project Structure Generation",
      owner: "Senior Developer",
      automation: [
        "Generate complete Next.js App Router structure",
        "Create all component files with modern patterns",
        "Setup SEO optimization with Metadata API",
        "Configure performance optimization settings",
        "Implement accessibility features (WCAG 2.1 AA)"
      ]
    },
    {
      step: "2.4 - Brand Assets & Graphics Creation",
      owner: "Graphic Designer",
      tasks: [
        "Create logo variations and brand assets",
        "Design custom icons and illustrations",
        "Optimize all images for web performance",
        "Create industry-specific visual elements"
      ]
    }
  ]
};
```

#### **Phase 3: Content Integration & SEO Implementation**
```javascript
const PHASE_3_CONTENT_SEO = {
  duration: "Day 6-7", 
  teamInvolved: ["Content Strategist", "SEO Specialist", "Senior Developer", "Social Media Specialist"],
  
  steps: [
    {
      step: "3.1 - Dynamic Content Population",
      owner: "Senior Developer + Content Strategist",
      automation: [
        "Replace all {{variables}} with actual project data",
        "Generate industry-specific content for {{industry}}",
        "Create detailed service descriptions for {{keyServices}}",
        "Build conversion-optimized contact forms",
        "Implement dynamic meta tags and structured data"
      ]
    },
    {
      step: "3.2 - Advanced SEO Implementation",
      owner: "SEO Specialist + Senior Developer",
      tasks: [
        "Implement technical SEO with Next.js Metadata API",
        "Create XML sitemap with proper priority and changefreq",
        "Setup structured data (Organization, WebSite, BreadcrumbList)",
        "Optimize for Core Web Vitals and performance",
        "Configure international SEO for {{targetCountries}}"
      ]
    },
    {
      step: "3.3 - Social Media Integration",
      owner: "Social Media Specialist",
      tasks: [
        "Setup Open Graph and Twitter Card optimization",
        "Conditionally integrate provided {{socialMediaHandles}} across the site",
        "Create social proof and testimonial sections",
        "Optimize content for social sharing"
      ]
    }
  ]
};
```

#### **Phase 4: Quality Assurance & Testing**
   ```javascript
const PHASE_4_QA_TESTING = {
  duration: "Day 8-9",
  teamInvolved: ["QA Tester", "SEO Specialist", "Senior Developer", "Creative Director"],
  
  steps: [
    {
      step: "4.1 - Comprehensive QA Automation",
      owner: "QA Tester + Senior Developer",
      automation: [
        "Execute all validation checks from quality standards",
        "Test responsive breakpoints (320px to 4K)",
        "Validate cross-browser compatibility",
        "Test form functionality and user journeys",
        "Verify accessibility compliance (WCAG 2.1 AA)"
      ]
    },
    {
      step: "4.2 - Performance & SEO Auditing",
      owner: "SEO Specialist + Senior Developer", 
      tasks: [
        "Run Lighthouse audits (target 95+ all metrics)",
        "Measure Core Web Vitals performance",
        "Validate all SEO implementations",
        "Test international targeting and hreflang",
        "Verify structured data and meta tags"
      ]
    },
    {
      step: "4.3 - Design & UX Validation",
      owner: "Creative Director + QA Tester",
      tasks: [
        "Validate design consistency across all pages",
        "Test modern UI interactions and animations", 
        "Verify brand guidelines implementation",
        "Validate user experience and conversion paths"
      ]
    }
  ]
};
```

#### **Phase 5: Final Delivery & Documentation**
```javascript
const PHASE_5_DELIVERY = {
  duration: "Day 10",
  teamInvolved: ["Project Manager", "All Team Members"],
  
  steps: [
    {
      step: "5.1 - Final Build & Export",
      owner: "Senior Developer",
      automation: [
        "Generate optimized static export (`next build && next export`)",
        "Create deployment-ready files",
        "Generate performance and SEO reports",
        "Package source code with documentation"
      ]
    },
    {
      step: "5.2 - Complete Documentation Package",
      owner: "Project Manager + All Team Members",
      deliverables: [
        "Technical documentation and maintenance guide",
        "SEO audit report and keyword strategy",
        "Design assets and brand guidelines",
        "QA testing results and browser compatibility",
        "User manual and deployment instructions"
      ]
    },
    {
      step: "5.3 - Team Approval & Client Handoff",
      owner: "Project Manager",
      process: [
        "Technical Lead final code review and approval",
        "Creative Director design excellence sign-off",
        "SEO Specialist final optimization audit",
        "QA Tester comprehensive validation",
        "Content Strategist copy and conversion approval",
        "Client presentation and final approval",
        "Complete deliverable package handoff"
      ]
    }
  ]
};
```

### 🎯 **AUTOMATED TEAM COORDINATION SYSTEM**
```javascript
const TEAM_COORDINATION = {
  communication: {
    dailyStandups: "15-minute daily progress sync",
    slackChannels: "Dedicated project channels for each phase",
    progressTracking: "Real-time project dashboard with completion status",
    approvalWorkflow: "Digital approval system with timestamps"
  },
  
  qualityGates: {
    phase1Gate: "All research and strategy approved before development",
    phase2Gate: "Design system and technical setup validated",
    phase3Gate: "Content and SEO implementation verified", 
    phase4Gate: "All QA standards met before final delivery",
    finalGate: "100% completion criteria achieved"
  },
  
  riskMitigation: {
    bufferTime: "20% buffer built into each phase",
    backupPlans: "Alternative approaches for technical challenges",
    escalationPath: "Clear escalation to senior team members",
    qualityAssurance: "Continuous validation throughout process"
  }
};
   ```

---

## 🎯 **SUCCESS CRITERIA & AUTOMATION TARGETS**

### ✅ **AUTOMATED SUCCESS METRICS**
```javascript
const SUCCESS_CRITERIA = {
  brandIntegration: `{{brandName}} appears consistently across all pages`,
  servicesCoverage: `All {{keyServices.length}} services properly showcased`,
  performanceScore: `Lighthouse score > 95 for {{domain}}`,
  responsiveDesign: `Perfect display on all device sizes`,
  contentQuality: `Industry-appropriate {{industry}} terminology`,
  contactFunctionality: `Forms submit to {{primaryContact}}`,
  seoOptimization: `Meta tags optimized for {{brandName}} {{industry}}`,
  staticExport: `Zero external dependencies, fully static`,
  establishedCredibility: `{{establishedYear}} prominently displayed`,
  visualConsistency: `{{brandColors}} theme applied throughout`
};
```

### 🏆 **FINAL DELIVERABLE PACKAGE**
```bash
# Auto-generated deliverable structure
/{{brandName}}-Website-Package/
  /source-code/
    /{{brandName-kebab-case}}/     # Complete Next.js project
  /documentation/
    project-specifications.md      # Auto-generated specs
    deployment-guide.md           # {{domain}} deployment instructions
    content-guidelines.md         # {{industry}} content standards
  /assets/
    /images/                      # Optimized {{industry}} images
    /branding/                    # {{brandColors}} palette files
  /deployment/
    static-export/                # Ready-to-deploy files
    vercel-config.json           # {{domain}} deployment config
  README.md                       # {{brandName}} project overview
```

---

## 🔄 **PROMPT EXECUTION COMMAND**

**To execute this automation with real domain research, use the following command:**

```
GENERATE COMPLETE NEXT.JS WEBSITE WITH AUTOMATED DOMAIN RESEARCH:

DOMAIN: [INSERT DOMAIN NAME HERE]
INDUSTRY: [INSERT INDUSTRY OR "AUTO-DETECT"]

RESEARCH AND GENERATE:
1. Perform real WHOIS lookup and domain analysis
2. Auto-discover registration date, registrar, hosting provider
3. Infer industry, business type, and target audience
4. Generate brand name, services, and color palette
5. Create complete project JSON with researched data
6. Build complete Next.js website with all components
7. Generate deployment-ready static export
8. Provide comprehensive documentation package

Follow all automation rules above and deliver complete website specifications.
```

**Alternative: Minimal Input Execution**
```
INPUT: 
{
  "domain": "example.com"
}

AUTO-RESEARCH & GENERATE:
- Real WHOIS data (registration date, registrar, etc.)
- Industry inference and business analysis
- Complete brand identity and services
- Full Next.js website with modern design
- SEO optimization and performance tuning
- Deployment package with documentation

Execute automated website generation now.
```

---

**🎯 ENHANCED AUTOMATION GOAL:** Input domain name → Automated research & discovery → Output 100% complete, SEO-optimized, modern Next.js static website with real domain data, full team coordination, advanced performance optimization, and deployment-ready deliverables.

### 🏆 **FINAL SUCCESS METRICS**
- **Performance:** 95+ Lighthouse score across all metrics
- **SEO:** Complete technical SEO with structured data and international targeting  
- **Design:** Modern, responsive UI/UX following 2024+ design standards
- **Accessibility:** WCAG 2.1 AA compliance with full keyboard navigation
- **Team Coordination:** 8-person team workflow with quality gates and approvals
- **Deliverables:** Complete package with documentation, reports, and maintenance guides
- **Client Satisfaction:** 100% completion criteria met with professional handoff
