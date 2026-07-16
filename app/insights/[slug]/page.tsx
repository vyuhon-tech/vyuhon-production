import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INSIGHTS, getAllSlugs, getInsightBySlug } from '@/data/insights';
import { INSIGHT_BODIES } from '@/data/insightBodies';
import JsonLd from '@/components/seo/JsonLd';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: 'Insight Not Found | Vyuhon' };

  let publishedTime = '';
  try {
    publishedTime = new Date(insight.date).toISOString();
  } catch (e) {
    // fallback if date parsing fails
  }

  return {
    title: `${insight.title} | Vyuhon`,
    description: insight.excerpt,
    alternates: {
      canonical: `https://vyuhon.com/insights/${slug}`,
    },
    openGraph: {
      title: `${insight.title} | Vyuhon`,
      description: insight.excerpt,
      url: `https://vyuhon.com/insights/${slug}`,
      type: 'article',
      publishedTime: publishedTime || undefined,
      section: insight.cat,
      authors: ['Vyuhon'],
    },
    twitter: {
      title: `${insight.title} | Vyuhon`,
      description: insight.excerpt,
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const body = INSIGHT_BODIES[slug] || '<p>Article content coming soon.</p>';
  const related = INSIGHTS.filter(i => i.slug !== slug && i.cat === insight.cat).slice(0, 3);

  let publishedTime = '';
  try {
    publishedTime = new Date(insight.date).toISOString();
  } catch (e) {
    // fallback if date parsing fails
  }

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": insight.title,
                "item": `https://vyuhon.com/insights/${slug}`
              }
            ]
          },
          {
            "@type": "Article",
            "@id": `https://vyuhon.com/insights/${slug}/#article`,
            "url": `https://vyuhon.com/insights/${slug}`,
            "headline": insight.title,
            "description": insight.excerpt,
            "datePublished": publishedTime || undefined,
            "articleSection": insight.cat,
            "author": {
              "@id": "https://vyuhon.com/#organization"
            },
            "publisher": {
              "@id": "https://vyuhon.com/#organization"
            }
          }
        ]
      }} />
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
          <Link href="/insights" className="tlink" style={{ marginBottom: 32, display: 'inline-flex' }}>
            <span aria-hidden="true">←</span> All insights
          </Link>
          <div className="insight-meta" style={{ marginTop: 24 }}>
            <span className="cat">{insight.cat}</span>
            <span>·</span>
            <span>{insight.date}</span>
            <span>·</span>
            <span>{insight.rt} read</span>
            <span>·</span>
            <span>Vyuhon Team</span>
          </div>
          <h1 className="display-lg" style={{ maxWidth: 780 }}>{insight.title}</h1>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="article" dangerouslySetInnerHTML={{ __html: body }} />

          <div className="article article-actions" style={{ marginTop: 52, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
            <Link href="/insights" className="btn btn-ghost btn-sm">← Back to insights</Link>
            <Link href="/contact" className="btn btn-ink btn-sm">Talk to Vyuhon</Link>
          </div>

          {related.length > 0 && (
            <div style={{ maxWidth: 700, margin: '64px auto 0' }}>
              <h2 className="display-sm" style={{ marginBottom: 24 }}>Related insights</h2>
              <div style={{ display: 'grid', gap: 14 }}>
                {related.map(r => (
                  <Link key={r.slug} href={`/insights/${r.slug}`} className="card" style={{ padding: 24 }}>
                    <div className="insight-meta" style={{ marginBottom: 8 }}>
                      <span className="cat">{r.cat}</span>
                      <span>·</span>
                      <span>{r.rt} read</span>
                    </div>
                    <div className="insight-title" style={{ fontSize: '1.1rem', marginBottom: 0 }}>{r.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
