import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vyuhon | Start Your Transformation',
  description: "Whether you're exploring your first AI initiative or planning a full business transformation — let's start with a conversation.",
};

const CONTACT_PATHS = [
  {
    title: 'Start a project',
    body: "Tell us what you're building and where you want to go. We'll respond with an honest assessment within 48 hours.",
    cta: 'Send a brief',
    href: 'mailto:hello@vyuhon.com',
  },
  {
    title: 'Book a discovery call',
    body: 'A free 60-minute conversation to explore your opportunities — no obligation, just an honest conversation.',
    cta: 'Schedule a call',
    href: 'https://calendar.app.google/Xfnc45qzXofR5Z4Z9',
    external: true,
  },
  {
    title: 'Email us directly',
    body: 'hello@vyuhon.com — we respond to every message personally, usually within a few hours.',
    cta: 'Open email',
    href: 'mailto:hello@vyuhon.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-wash" aria-hidden="true"></div>
        <div className="container page-hero-inner">
          <div className="eyebrow reveal">Contact</div>
          <h1 className="display-lg reveal">
            Let&apos;s start your<br />
            <span className="display-it accent-purple">transformation journey.</span>
          </h1>
          <p className="body-lg reveal">
            Whether you&apos;re exploring your first AI initiative or planning a full business
            transformation — we&apos;re ready to listen, advise, and partner with you for the
            long term.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ display: 'grid', gap: 16 }}>
            {CONTACT_PATHS.map(p => (
              <a
                key={p.title}
                className="card reveal"
                href={p.href}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noopener noreferrer' : undefined}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}
              >
                <div style={{ flex: 1, minWidth: 260 }}>
                  <h2 className="card-title" style={{ fontSize: '1.3rem' }}>{p.title}</h2>
                  <p className="body-sm" style={{ marginBottom: 0 }}>{p.body}</p>
                </div>
                <span className="tlink">{p.cta} <span aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>

          <div className="reveal contact-info-banner">
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Bengaluru, India</div>
              <div className="body-sm">Headquartered · Remote-first globally</div>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Responds within 24h</div>
              <div className="body-sm">hello@vyuhon.com</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
