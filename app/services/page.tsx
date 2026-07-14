import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, JOURNEY_STEPS } from '@/data/services';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'Services | Vyuhon',
  description: 'Seven disciplines under one roof — strategy, product, design, AI & data, engineering, enterprise implementation, and managed services.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">Services</div>
          <h1 className="display-lg reveal">
            Seven disciplines.<br />
            <span className="display-it accent-purple">One accountable team.</span>
          </h1>
          <p className="body-lg reveal">
            Most transformations fail in the handoffs — between the strategy firm, the design
            agency, the dev shop, and the support vendor. We removed the handoffs.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="grid-2" style={{ gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.num} className="card reveal">
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '1.05rem', color: s.color }}>
                    {s.num}
                  </span>
                  <span className="eyebrow plain" style={{ fontSize: 10.5 }}>Discipline</span>
                </div>
                <h2 className="card-title" style={{ fontSize: '1.5rem' }}>{s.title}</h2>
                <p className="body-md" style={{ marginBottom: 22 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt sec-rule-top">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Engagement model</div>
            <h2 className="display-lg">Carried through nine stages</h2>
            <p className="body-md">Every discipline plugs into the same journey — so strategy flows into design, design into build, and build into adoption without losing context.</p>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {JOURNEY_STEPS.map((s, i) => (
              <span key={s} className="chip" style={{ padding: '10px 18px', fontSize: '0.875rem', background: 'var(--card)' }}>
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--purple-deep)', marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</span>
                {s}
              </span>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 36 }}>
            <Link href="/ai-platform" className="tlink">See how AI runs through every stage <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure which discipline you need?"
        subtitle="Start with a conversation. We'll scope it honestly — including telling you when a simpler solution wins."
        primaryLabel="Get in touch"
        primaryHref="/contact"
        secondaryLabel="About Vyuhon"
        secondaryHref="/about"
      />
    </>
  );
}
