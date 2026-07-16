'use client';
import type { Metadata } from 'next';
import { useState, useEffect, useRef, useCallback } from 'react';


import Link from 'next/link';
import { SERVICES, JOURNEY_STEPS } from '@/data/services';
import { INSIGHTS } from '@/data/insights';
import CTABanner from '@/components/ui/CTABanner';
import DisciplineVisual from '@/components/ui/DisciplineVisual';

const JOURNEY_DESC: Record<string, string> = {
  Understand: 'Deep discovery across business, data, and people to find the highest-leverage opportunities.',
  Discover: "Research, stakeholder mapping, and technical assessment to define what's actually possible.",
  Strategize: 'A clear roadmap and prioritised initiatives executives can fund and teams can execute.',
  Design: 'UX research, product design, and design systems that make complex systems feel effortless.',
  Build: 'Full-stack engineering, AI integration, and QA — built to ship on time and stay maintainable.',
  Implement: 'Enterprise systems deployed with the change management that makes adoption stick.',
  Adopt: 'Training, feedback loops, and iteration so the technology gets used — not just installed.',
  Optimize: 'Continuous monitoring, model improvement, and performance tuning after go-live.',
  Scale: 'Expand across functions, geographies, and use cases with a team who knows your business.',
};

const PILLARS_DARK = [
  { title: 'Strategy first, technology second', body: 'We start with your business problem, not a tool recommendation. Every engagement begins with honest scoping — AI only where it genuinely adds value.' },
  { title: 'AI built into every engagement', body: "AI isn't an add-on we bolt on at the end. It's woven into strategy, design, and engineering from week one — so you get transformation, not automation." },
  { title: 'One team from start to scale', body: 'The same people who scoped your strategy build the product, deploy it, and support it after launch. No re-briefing. No context lost. No handoffs.' },
];

const STATS = [
  { v: '7', l: 'Service disciplines under one roof' },
  { v: '9', l: 'Stage transformation journey' },
  { v: '100', suffix: '%', l: 'AI-first across every engagement' },
  { v: '24', suffix: 'h', l: 'Average first response time' },
];

const TAB_SCROLL_STEP = 680; // px of scroll per discipline

export default function Home() {
  const [tab, setTab] = useState(0);
  const svc = SERVICES[tab];
  const N = SERVICES.length;

  const pinRef = useRef<HTMLElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stRef = useRef<any>(null);
  const suppressRef = useRef(false); // true while a direct tab click is repositioning scroll

  // Pin the section and drive the active discipline from scroll progress.
  useEffect(() => {
    let killed = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mmCtx: any;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      if (killed || !pinRef.current) return;

      mmCtx = gsap.matchMedia();

      mmCtx.add('(min-width: 821px)', () => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const st = ScrollTrigger.create({
          trigger: pinRef.current!,
          // React-owned spacer: prevents GSAP from re-parenting the section,
          // which corrupts React's DOM and crashes route navigation.
          pinSpacer: spacerRef.current!,
          start: 'top 72px', // below fixed navbar
          end: () => `+=${(N - 1) * TAB_SCROLL_STEP}`,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (N - 1),
            duration: { min: 0.25, max: 0.6 },
            delay: 0.05,
            ease: 'power2.out',
          },
          onUpdate: self => {
            if (suppressRef.current) return; // direct click in progress
            const idx = Math.min(N - 1, Math.round(self.progress * (N - 1)));
            setTab(t => (t === idx ? t : idx));
          },
        });

        stRef.current = st;

        return () => {
          stRef.current = null;
        };
      });

      ScrollTrigger.refresh();
    })();

    return () => {
      killed = true;
      if (mmCtx) {
        mmCtx.revert();
      }
      stRef.current = null;
    };
  }, [N]);

  // Tab click: jump scroll position to that discipline inside the pinned range,
  // keeping scroll state and tab state in sync. Falls back to plain setTab.
  const goToTab = useCallback((i: number) => {
    const st = stRef.current;
    if (st) {
      suppressRef.current = true;
      setTab(i);
      // While the section is pinned, an instant scroll jump within the pin range
      // is visually static — only the panel animates. This is what makes the
      // transition go straight to the target tab without flipping through others.
      const y = st.start + (i / (N - 1)) * (st.end - st.start);
      window.scrollTo({ top: Math.round(y) + 2, behavior: 'auto' });
      window.setTimeout(() => { suppressRef.current = false; }, 250);
    } else {
      setTab(i);
    }
  }, [N]);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-badge reveal">
            <span className="dot" aria-hidden="true"></span>
            AI-first business transformation partner
          </div>
          <h1 className="display-xl reveal corner-frame" style={{ display: 'inline-block', padding: '0 6px' }}>
            Intelligent businesses,<br />
            <span className="display-it accent-purple">built end to end.</span>
          </h1>
          <p className="hero-sub reveal">
            Vyuhon partners with organisations to imagine, design, build, implement,
            and continuously optimise intelligent businesses — from strategy to scale,
            with one trusted partner.
          </p>
          <div className="hero-ctas reveal">
            <Link href="/contact" className="btn btn-ink btn-lg">Start a project</Link>
            <Link href="/services" className="btn btn-ghost btn-lg">Explore services</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICE TABS ===== */}
      <div ref={spacerRef}>
        <section className="sec sec-rule-top" ref={pinRef}>
          <div className="container">
            <div className="sec-head reveal">
              <div className="eyebrow">What we do</div>
              <h2 className="display-lg">One studio.<br /><span className="display-it">Seven disciplines.</span></h2>
              <p className="body-md">Everything an intelligent business needs — strategy, product, design, AI, engineering, implementation, and operations — delivered by one team.</p>
            </div>

            <div className="tabs-rail reveal" role="tablist" aria-label="Services">
              {SERVICES.map((s, i) => (
                <button
                  key={s.num}
                  role="tab"
                  aria-selected={tab === i}
                  className={`tab-btn ${tab === i ? 'active' : ''}`}
                  onClick={() => goToTab(i)}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* SEO: Visually hidden list of all services for crawlers */}
            <div className="sr-only">
              <h2>All Service Disciplines</h2>
              <ul>
                {SERVICES.map(s => (
                  <li key={s.num}>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a href="/services">See all services in {s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-panel reveal" role="tabpanel">
              <div key={svc.num} className="tab-content-anim">
                <div className="eyebrow plain" style={{ marginBottom: 16 }}>Discipline {svc.num} — of 07</div>
                <h3 className="display-md" style={{ marginBottom: 16 }}>{svc.title}</h3>
                <p className="body-md" style={{ marginBottom: 24 }}>{svc.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 30 }}>
                  {svc.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
                <Link href="/services" className="tlink">See all services <span aria-hidden="true">→</span></Link>
              </div>
              <div className="tab-visual" aria-hidden="true">
                <div key={svc.num} className="dv-wrap">
                  <DisciplineVisual num={svc.num} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== DARK PANEL — WHY VYUHON ===== */}
      <section className="sec-tight">
        <div className="container">
          <div className="night-panel reveal">
            <div style={{ maxWidth: 560, marginBottom: 48 }}>
              <div className="eyebrow on-dark" style={{ marginBottom: 18 }}>Why Vyuhon</div>
              <h2 className="night-title display-lg">Powering the AI-first enterprise</h2>
              <p className="night-body" style={{ marginTop: 16, fontSize: '1.05rem', lineHeight: 1.7 }}>
                We are not a software development company or a traditional IT services
                provider. We are a transformation partner.
              </p>
            </div>
            <div className="grid-3">
              {PILLARS_DARK.map(p => (
                <div key={p.title} className="night-card">
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 44 }}>
              <Link href="/about" className="btn btn-on-dark">About Vyuhon</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">How we work</div>
            <h2 className="display-lg">The nine-stage journey</h2>
            <p className="body-md">A sequence, not a menu. Each stage hands cleanly into the next — carried by the same team from first conversation to long-term scale.</p>
          </div>
          <div className="journey reveal">
            {JOURNEY_STEPS.map((name, i) => (
              <div key={name} className="journey-cell">
                <div className="journey-num">Stage {String(i + 1).padStart(2, '0')}</div>
                <div className="journey-name">{name}</div>
                <p className="body-sm">{JOURNEY_DESC[name]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="sec-tight">
        <div className="container">
          <div className="stat-row reveal">
            {STATS.map(s => (
              <div key={s.l} className="stat-cell">
                <div className="stat-v">{s.v}<em>{s.suffix ?? ''}</em></div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="sec sec-alt sec-rule-top">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 48 }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 16 }}>Insights</div>
              <h2 className="display-lg">Research &amp; perspectives</h2>
            </div>
            <Link href="/insights" className="btn btn-ghost reveal">View all insights</Link>
          </div>
          <div className="grid-3">
            {INSIGHTS.slice(0, 3).map(ins => (
              <Link key={ins.slug} href={`/insights/${ins.slug}`} className="insight-card reveal" aria-label={`Read insight: ${ins.title}`}>
                <div className="insight-meta">
                  <span className="cat">{ins.cat}</span>
                  <span>·</span>
                  <span>{ins.date}</span>
                  <span>·</span>
                  <span>{ins.rt}</span>
                </div>
                <div className="insight-title">{ins.title}</div>
                <p className="body-sm">{ins.excerpt.length > 150 ? ins.excerpt.slice(0, 148).trimEnd() + '…' : ins.excerpt}</p>
                <span className="tlink">Read insight <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <CTABanner
        title="Build the intelligent enterprise with Vyuhon"
        subtitle="Tell us about your business, your challenges, and where you want to be."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="Book a discovery call"
        secondaryHref="/contact"
      />
    </>
  );
}
