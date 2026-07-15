import type { Metadata } from 'next';
import Link from 'next/link';
import { INSIGHTS } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights | Vyuhon',
  description: 'Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team.',
};

export default function InsightsPage() {
  const featured = INSIGHTS.find(i => i.featured) ?? INSIGHTS[0];
  const rest = INSIGHTS.filter(i => i.slug !== featured.slug);

  return (
    <>
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
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

      <section className="sec">
        <div className="container">
          <Link href={`/insights/${featured.slug}`} className="card reveal featured-insight-card">
            <div className="insight-meta">
              <span className="cat">Featured · {featured.cat}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.rt}</span>
            </div>
            <h2 className="display-md corner-frame" style={{ display: 'inline-block', padding: '0 4px', maxWidth: 720, marginBottom: 16 }}>
              {featured.title}
            </h2>
            <p className="body-md" style={{ maxWidth: 640, marginBottom: 24 }}>{featured.excerpt}</p>
            <span className="tlink">Read insight <span aria-hidden="true">→</span></span>
          </Link>

          <div className="grid-3">
            {rest.map(ins => (
              <Link key={ins.slug} href={`/insights/${ins.slug}`} className="insight-card reveal">
                <div className="insight-meta">
                  <span className="cat">{ins.cat}</span>
                  <span>·</span>
                  <span>{ins.date}</span>
                  <span>·</span>
                  <span>{ins.rt}</span>
                </div>
                <div className="insight-title">{ins.title}</div>
                <p className="body-sm">{ins.excerpt.length > 160 ? ins.excerpt.slice(0, 158).trimEnd() + '…' : ins.excerpt}</p>
                <span className="tlink">Read insight <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
