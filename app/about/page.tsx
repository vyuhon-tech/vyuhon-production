import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/ui/CTABanner';

import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'About Vyuhon | AI-First Business Transformation Partner',
  description: 'Vyuhon was founded on the belief that strategy without execution creates no impact, and software without adoption creates no value.',
  alternates: {
    canonical: 'https://vyuhon.com/about',
  },
  openGraph: {
    title: 'About Vyuhon | AI-First Business Transformation Partner',
    description: 'Vyuhon was founded on the belief that strategy without execution creates no impact, and software without adoption creates no value.',
    url: 'https://vyuhon.com/about',
  },
  twitter: {
    title: 'About Vyuhon | AI-First Business Transformation Partner',
    description: 'Vyuhon was founded on the belief that strategy without execution creates no impact, and software without adoption creates no value.',
  },
};

const STATS = [
  { v: '7',   suffix: '',  l: 'Service disciplines' },
  { v: '9',   suffix: '',  l: 'Stage transformation journey' },
  { v: '1',   suffix: '',  l: 'Accountable team throughout' },
  { v: '100', suffix: '%', l: 'AI-first across every engagement' },
];

const VALUES = [
  { title: 'Outcomes over outputs', body: 'We measure success by business impact — revenue, costs reduced, decisions improved.' },
  { title: 'One team, full journey', body: 'The same people carry the work from first conversation to long-term optimisation.' },
  { title: 'Intellectual honesty', body: "We tell you when AI isn't right, when data isn't ready, or when a simpler solution wins." },
  { title: 'AI-first by design', body: 'Every engagement is designed around what AI makes newly possible — not retrofitted after.' },
  { title: 'Human-centered engineering', body: 'Design thinking and engineering precision working as one discipline.' },
  { title: 'Long-term partnership', body: 'We stay after launch through managed services — adoption is the goal, not the delivery.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@id": "https://vyuhon.com/#organization"
        }
      }} />
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">About Vyuhon</div>
          <h1 className="display-lg reveal">
            We partner with organisations<br />
            <span className="display-it accent-purple">to transform with confidence.</span>
          </h1>
          <p className="body-lg reveal">
            We don&apos;t build software — we transform businesses. Strategy without execution
            creates no impact, and software without adoption creates no value.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">What we are</div>
            <h2 className="display-lg">An AI-first business transformation partner</h2>
            <p className="body-lg">
              Vyuhon helps organisations solve complex business challenges through consulting,
              product strategy, design, engineering, AI, enterprise implementation, and managed
              services — all under one roof, delivered by one team.
            </p>
            <p className="body-md">
              We are not a software development company or a traditional IT services provider.
              We partner with organisations to imagine, design, build, implement, operate, and
              continuously optimise intelligent businesses. Our promise:{' '}
              <strong style={{ color: 'var(--ink)' }}>From Strategy to Scale. One Trusted Partner.</strong>
            </p>
            <div style={{ marginTop: 28 }}>
              <Link href="/services" className="btn btn-ink">Our services</Link>
            </div>
          </div>

          <div className="stat-row reveal">
            {STATS.map(s => (
              <div key={s.l} className="stat-cell">
                <div className="stat-v">{s.v}<em>{s.suffix}</em></div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt sec-rule-top">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Our principles</div>
            <h2 className="display-lg">What we stand for</h2>
          </div>
          <div className="grid-3">
            {VALUES.map(v => (
              <div key={v.title} className="card reveal">
                <h3 className="card-title">{v.title}</h3>
                <p className="body-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="container">
          <div className="night-panel reveal" style={{ textAlign: 'center' }}>
            <div className="eyebrow on-dark" style={{ marginBottom: 18 }}>Where we work</div>
            <h2 className="night-title display-md" style={{ maxWidth: 560, margin: '0 auto 14px' }}>
              Headquartered in Bengaluru. Remote-first, globally.
            </h2>
            <p className="night-body" style={{ maxWidth: 480, margin: '0 auto' }}>
              We work with enterprises across India and beyond — with an average first
              response time of 24 hours.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's start a conversation"
        subtitle="Tell us about your business, your challenges, and where you want to be."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="Our services"
        secondaryHref="/services"
      />
    </>
  );
}
