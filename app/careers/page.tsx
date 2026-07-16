import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'Careers | Vyuhon',
  description: "We're looking for consultants, engineers, designers, and AI practitioners who believe in transformation through technology.",
  alternates: {
    canonical: 'https://vyuhon.com/careers',
  },
  openGraph: {
    title: 'Careers | Vyuhon',
    description: "We're looking for consultants, engineers, designers, and AI practitioners who believe in transformation through technology.",
    url: 'https://vyuhon.com/careers',
  },
  twitter: {
    title: 'Careers | Vyuhon',
    description: "We're looking for consultants, engineers, designers, and AI practitioners who believe in transformation through technology.",
  },
};

const PERKS = [
  { label: 'Remote-first', sub: 'Work from anywhere globally' },
  { label: 'Equity for all', sub: 'Every team member is an owner' },
  { label: 'Learning budget', sub: 'Annual learning & conference budget' },
  { label: 'Build from day one', sub: 'Ship real things immediately' },
  { label: 'Direct access', sub: 'Work with founders daily' },
  { label: 'Real impact', sub: 'Your work drives transformation' },
];

const ROLES = [
  'Consultants', 'Product Managers', 'Product Designers',
  'AI Engineers', 'Full-Stack Engineers', 'Implementation Specialists',
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">Careers</div>
          <h1 className="display-lg reveal">
            Help organisations<br />
            <span className="display-it accent-purple">transform with AI.</span>
          </h1>
          <p className="body-lg reveal">
            We&apos;re building a team of consultants, engineers, designers, and AI practitioners
            who believe in transformation — and want to do the work that makes it real.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Why join</div>
            <h2 className="display-lg">How we work together</h2>
          </div>
          <div className="grid-3">
            {PERKS.map(p => (
              <div key={p.label} className="card reveal">
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>{p.label}</h3>
                <p className="body-sm">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt sec-rule-top">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Open to</div>
            <h2 className="display-lg">Who we&apos;re looking for</h2>
            <p className="body-md">We hire for judgment and craft. If your discipline is below and transformation is your interest, we&apos;d like to hear from you.</p>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 680, margin: '0 auto' }}>
            {ROLES.map(r => (
              <span key={r} className="chip" style={{ padding: '11px 20px', fontSize: '0.875rem', background: 'var(--card)' }}>{r}</span>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="mailto:hello@vyuhon.com" className="btn btn-ink">Send us your work</Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Do work that transforms businesses"
        subtitle="Introduce yourself — tell us what you've built and what you want to build next."
        primaryLabel="hello@vyuhon.com"
        primaryHref="mailto:hello@vyuhon.com"
        secondaryLabel="About Vyuhon"
        secondaryHref="/about"
      />
    </>
  );
}
