import type { Metadata } from 'next';
import { INSIGHTS } from '@/data/insights';
import InsightsClient from '@/components/layout/InsightsClient';

import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'AI & Digital Transformation Insights | Vyuhon',
  description: 'Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team.',
  alternates: {
    canonical: 'https://vyuhon.com/insights',
  },
  openGraph: {
    title: 'AI & Digital Transformation Insights | Vyuhon',
    description: 'Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team.',
    url: 'https://vyuhon.com/insights',
  },
  twitter: {
    title: 'AI & Digital Transformation Insights | Vyuhon',
    description: 'Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team.',
  },
};

export default function InsightsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://vyuhon.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Insights",
                "item": "https://vyuhon.com/insights"
              }
            ]
          },
          {
            "@type": "Blog",
            "@id": "https://vyuhon.com/insights/#blog",
            "url": "https://vyuhon.com/insights",
            "name": "Vyuhon Insights",
            "publisher": {
              "@id": "https://vyuhon.com/#organization"
            }
          }
        ]
      }} />
      {/* Page hero */}
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">Insights</div>
          <h1 className="display-lg reveal">
            Research &amp; <span className="display-it accent-purple">perspectives</span>
          </h1>
          <p className="body-lg reveal">
            What we&apos;re learning from enterprise AI engagements — strategy, product,
            design, and engineering, written by the people doing the work.
          </p>
        </div>
      </section>

      {/* Interactive content */}
      <section className="sec">
        <div className="container">
          <InsightsClient insights={INSIGHTS} />
        </div>
      </section>
    </>
  );
}
