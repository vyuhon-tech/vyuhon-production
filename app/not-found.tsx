import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Vyuhon',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="hero-wash" aria-hidden="true"></div>
      <div className="container page-hero-inner">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>404 Error</div>
        <h1 className="display-lg">
          Page not found.
        </h1>
        <p className="body-md" style={{ margin: '20px auto 40px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn btn-ink">
          Return to homepage
        </Link>
      </div>
    </section>
  );
}
