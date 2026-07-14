import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'AI Platform | Vyuhon',
  description: 'The complete AI solution — infrastructure, deployment, and everything in between. Built to transform organisations from first proof-of-concept to full-scale operation.',
};

const FEATURES = [
  { chip: 'AI Agents', title: 'Intelligent agent orchestration', body: 'Deploy, manage and monitor AI agents across your business processes. Multi-agent coordination, tool calling, memory management and human-in-the-loop workflows — built for enterprise reliability.', tags: ['LangChain', 'AutoGen', 'RAG', 'Custom Agents'] },
  { chip: 'Observability', title: 'Real-time AI monitoring', body: 'Track model performance, data drift, latency and business KPIs with automated alerting before issues reach production.', tags: ['Drift detection', 'Alerting', 'KPIs'] },
  { chip: 'Data', title: 'Unified data layer', body: 'Consistent data pipelines from ingestion through feature serving. Point-in-time correct retrieval across training and production environments.', tags: ['Pipelines', 'Feature store'] },
  { chip: 'Evaluation', title: 'LLM evaluation suite', body: 'Automated benchmarking for RAG pipelines, factual accuracy, safety and domain-specific quality metrics — at scale, before and after deployment.', tags: ['Benchmarks', 'Safety', 'Accuracy'] },
  { chip: 'Deployment', title: 'One-click inference serving', body: 'Optimised inference containers with auto-scaling, model caching and request batching — consistent throughput from day one.', tags: ['Auto-scaling', 'Caching', 'Batching'] },
];

const DELIVERY_STAGES = [
  { n: '01', name: 'Assess & Plan', desc: 'AI readiness, data audit, phased roadmap' },
  { n: '02', name: 'Architect & Design', desc: 'AI architecture, pipelines, integration layer' },
  { n: '03', name: 'Build & Integrate', desc: 'Models, workflows, tested against live systems' },
  { n: '04', name: 'Deploy & Adopt', desc: 'Production rollout, change management, enablement' },
  { n: '05', name: 'Optimise & Scale', desc: 'Monitoring, model improvement, expansion' },
];

const CAPABILITIES = [
  'LLM & GenAI Integration', 'AI Agent Deployment', 'Process Automation',
  'Enterprise AI Augmentation', 'AI-Powered Analytics', 'Custom Model Fine-Tuning',
  'RAG Pipeline Architecture', 'AI Governance & Compliance',
];

export default function AIPlatformPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">AI Platform</div>
          <h1 className="display-lg reveal">
            From proof-of-concept<br />
            <span className="display-it accent-purple">to full-scale operation.</span>
          </h1>
          <p className="body-lg reveal">
            The complete AI solution — infrastructure, deployment, and everything in
            between. Built so your teams focus on outcomes, not plumbing.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Platform capabilities</div>
            <h2 className="display-lg">Everything an AI initiative needs to reach production</h2>
          </div>
          <div className="grid-2" style={{ gap: 24 }}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className="card reveal" style={i === 0 ? { gridColumn: '1 / -1' } : undefined}>
                <span className="chip" style={{ marginBottom: 20, color: 'var(--purple-deep)' }}>{f.chip}</span>
                <h3 className="card-title" style={{ fontSize: i === 0 ? '1.6rem' : undefined }}>{f.title}</h3>
                <p className="body-md" style={{ marginBottom: 22, maxWidth: i === 0 ? 640 : undefined }}>{f.body}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {f.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="container">
          <div className="night-panel reveal">
            <div style={{ maxWidth: 560, marginBottom: 44 }}>
              <div className="eyebrow on-dark" style={{ marginBottom: 18 }}>Delivery model</div>
              <h2 className="night-title display-lg">Five stages to production AI</h2>
              <p className="night-body" style={{ marginTop: 14 }}>
                A sequence carried by one team — from readiness assessment to
                continuous optimisation after go-live.
              </p>
            </div>
            <div className="grid-3" style={{ gap: 16 }}>
              {DELIVERY_STAGES.map(s => (
                <div key={s.n} className="night-card">
                  <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--teal)', marginBottom: 12, fontSize: '0.95rem' }}>
                    Stage {s.n}
                  </div>
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-alt sec-rule-top">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Capabilities</div>
            <h2 className="display-lg">What we build with</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 760, margin: '0 auto' }}>
            {CAPABILITIES.map(c => (
              <span key={c} className="chip" style={{ padding: '11px 20px', fontSize: '0.875rem', background: 'var(--card)' }}>{c}</span>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/insights" className="tlink">Read our AI engineering insights <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to take AI to production?"
        subtitle="Start with an honest readiness assessment — we'll tell you what's possible and what's premature."
        primaryLabel="Start a project"
        primaryHref="/contact"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
    </>
  );
}
