# Vyuhon Technical SEO Implementation Notes

## Route Map & Schema

| Route | Title | Description | JSON-LD Types |
|-------|-------|-------------|---------------|
| `/` (Homepage) | AI-First Business Transformation Partner \| Vyuhon | Vyuhon partners with organisations to imagine, design, build, implement, and continuously optimise intelligent businesses. | `Organization`, `WebSite` |
| `/services` | AI Consulting & Product Engineering Services \| Vyuhon | Seven disciplines under one roof — strategy, product, design, AI & data, engineering, enterprise implementation, and managed services. | `BreadcrumbList`, `Service` (x7) |
| `/ai-platform` | Enterprise AI Implementation Platform \| Vyuhon | The complete AI solution — infrastructure, deployment, and everything in between. Built to transform organisations from first proof-of-concept to full-scale operation. | N/A |
| `/about` | About Vyuhon \| AI-First Business Transformation Partner | Vyuhon was founded on the belief that strategy without execution creates no impact, and software without adoption creates no value. | `AboutPage` |
| `/insights` | AI & Digital Transformation Insights \| Vyuhon | Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team. | `BreadcrumbList`, `Blog` |
| `/insights/[slug]` | [Insight Title] \| Vyuhon | [Insight Excerpt] | `BreadcrumbList`, `Article` |
| `/careers` | Careers \| Vyuhon | We're looking for consultants, engineers, designers, and AI practitioners who believe in transformation through technology. | N/A |
| `/contact` | Contact \| Vyuhon | Whether you're exploring your first AI initiative or planning a full business transformation — let's start with a conversation. | `ContactPage`, `ProfessionalService` |

## Post-Launch Checklist

- **Google Search Console Verification & Sitemap Submission**
  - Verify domain ownership in Google Search Console.
  - Submit the dynamic sitemap URL: `https://vyuhon.com/sitemap.xml`.
- **Google Business Profile (Bengaluru)**
  - Ensure the Google Business Profile for the Bengaluru office is claimed and verified.
- **Update JSON-LD Placeholders**
  - Replace the `TODO` placeholders in the `sameAs` array in `app/layout.tsx` with actual social media URLs (LinkedIn, Twitter, etc.).
- **Font Preloads**
  - Once licensed fonts (Season Mix and Matter woff2 files) land in `/public/fonts/`, uncomment the `<link rel="preload">` tags in `app/layout.tsx` to optimize Largest Contentful Paint (LCP) and avoid Cumulative Layout Shift (CLS).
