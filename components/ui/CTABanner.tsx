import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({ title, subtitle, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTABannerProps) {
  return (
    <section className="cta-final">
      <div className="hero-wash" aria-hidden="true"></div>
      <div className="container">
        <h2 className="cta-final-title reveal">{title}</h2>
        {subtitle && <p className="body-lg reveal" style={{ maxWidth: 540, margin: '0 auto' }}>{subtitle}</p>}
        <div className="hero-ctas reveal">
          <Link href={primaryHref} className="btn btn-ink btn-lg">{primaryLabel}</Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn btn-ghost btn-lg">{secondaryLabel}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
