import type { Metadata } from 'next';
import { INSIGHTS } from '@/data/insights';
import InsightsClient from '@/components/layout/InsightsClient';

export const metadata: Metadata = {
  title: 'Insights | Vyuhon',
  description:
    'Research and perspectives on enterprise AI, product strategy, experience design, and engineering — from the Vyuhon team.',
};

export default function InsightsPage() {
  return (
    <>
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
