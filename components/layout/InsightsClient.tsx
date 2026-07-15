'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { type Insight } from '@/data/insights';
import InsightVisual from '@/components/ui/InsightVisual';

const PER_PAGE = 6;

const CAT_COLOR: Record<string, string> = {
  purple: 'var(--purple-deep)',
  teal:   'var(--teal-deep)',
  blue:   'var(--blue-deep)',
  amber:  'var(--amber-deep)',
  red:    '#DC2626',
};

export default function InsightsClient({ insights }: { insights: Insight[] }) {
  const featured = insights.find(i => i.featured) ?? insights[0];
  const rest      = insights.filter(i => i.slug !== featured.slug);

  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(rest.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paged = rest.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  function handlePage(p: number) {
    setPage(p);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* ── Featured Article ─────────────────────────────────────── */}
      <Link href={`/insights/${featured.slug}`} className="insights-featured reveal">
        <div className="insights-featured-visual">
          <InsightVisual slug={featured.slug} catClass={featured.catClass} />
        </div>
        <div className="insights-featured-body">
          <div className="insights-featured-badge">
            Featured &nbsp;·&nbsp; {featured.cat}
          </div>
          <div className="insights-featured-title">{featured.title}</div>
          <p className="insights-featured-excerpt">
            {featured.excerpt.length > 220
              ? featured.excerpt.slice(0, 218).trimEnd() + '…'
              : featured.excerpt}
          </p>
          <div className="insights-featured-meta">
            <span>{featured.date}</span>
            <span>·</span>
            <span>{featured.rt} read</span>
          </div>
        </div>
      </Link>

      {/* ── Card Grid ─────────────────────────────────────────────── */}
      <div className="insights-grid" ref={gridRef}>
        {paged.map((ins, i) => (
          <Link
            key={ins.slug}
            href={`/insights/${ins.slug}`}
            className="insight-card-v2"
          >
            {/* Visual */}
            <div className="insight-card-visual">
              <InsightVisual slug={ins.slug} catClass={ins.catClass} />
            </div>

            {/* Body */}
            <div className="insight-card-body">
              <div
                className="insight-card-cat"
                style={{ color: CAT_COLOR[ins.catClass] ?? 'var(--purple-deep)' }}
              >
                {ins.cat}
              </div>
              <div className="insight-card-title">{ins.title}</div>
              <p className="insight-card-excerpt">{ins.excerpt}</p>
              <div className="insight-card-footer">
                <span>{ins.date}</span>
                <span style={{ color: CAT_COLOR[ins.catClass] ?? 'var(--purple-deep)' }}>
                  {ins.rt} read →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Pagination ────────────────────────────────────────────── */}
      {totalPages > 1 && (
        <nav className="insights-pagination" aria-label="Pagination">
          <button
            className="pagination-arrow"
            onClick={() => handlePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M10 12L6 8l4-4" />
            </svg>
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`pagination-btn ${p === currentPage ? 'active' : ''}`}
              onClick={() => handlePage(p)}
              aria-label={`Page ${p}`}
              aria-current={p === currentPage ? 'page' : undefined}
            >
              {p}
            </button>
          ))}

          <button
            className="pagination-arrow"
            onClick={() => handlePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </nav>
      )}
    </>
  );
}
