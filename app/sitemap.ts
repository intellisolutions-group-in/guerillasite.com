import { MetadataRoute } from "next";
import { allPosts } from "./blog/blogData";
import { jobRequisitions } from "./careers/careersData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://guerillasite.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/calculator",
    "/careers",
    "/careers/internships",
    "/careers/jobs",
    "/careers/life-at-guerillasite",
    "/case-studies",
    "/case-studies/ai-business-automation",
    "/case-studies/cloud-migration-program",
    "/case-studies/customer-crm-modernization",
    "/case-studies/cybersecurity-hardening",
    "/case-studies/devops-transformation",
    "/case-studies/ecommerce-growth-platform",
    "/case-studies/fintech-analytics-platform",
    "/case-studies/healthcare-digital-platform",
    "/case-studies/logistics-automation-system",
    "/case-studies/manufacturing-erp-transformation",
    "/consultation/get-quote",
    "/consultation/request-proposal",
    "/consultation/schedule-discovery-call",
    "/consultation/start-project",
    "/contact",
    "/industries",
    "/industries/fintech",
    "/industries/healthcare",
    "/industries/logistics",
    "/industries/manufacturing",
    "/legal/cookie-policy",
    "/legal/disclaimer",
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/resources",
    "/resources/guides",
    "/resources/webinars",
    "/resources/whitepapers",
    "/services",
    "/services/ai-machine-learning",
    "/services/branding",
    "/services/cloud-infrastructure",
    "/services/custom-crm",
    "/services/custom-erp",
    "/services/cybersecurity",
    "/services/data-analytics-bi",
    "/services/devops-cicd",
    "/services/digital-marketing",
    "/services/google-ads",
    "/services/hosting-gateway",
    "/services/it-consulting",
    "/services/mobile-app-development",
    "/services/seo",
    "/services/ui-ux-design",
    "/services/website-development",
    "/support/contact-support",
    "/support/faq",
    "/support/help-center",
    "/technologies",
    "/technologies/ai-machine-learning",
    "/technologies/backend",
    "/technologies/cloud",
    "/technologies/cybersecurity",
    "/technologies/databases",
    "/technologies/devops",
    "/technologies/frontend",
    "/thank-you",
    "/trust/success-stories",
    "/trust/technology-partners",
    "/trust/testimonials"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/legal") ? 0.3 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const jobEntries: MetadataRoute.Sitemap = jobRequisitions.map((job) => ({
    url: `${baseUrl}/careers/jobs/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...jobEntries];
}
