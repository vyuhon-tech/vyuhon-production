'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import VyuhonLogo from '@/components/ui/VyuhonLogo';

const NAV_LINKS = [
  { label: 'Services',    href: '/services' },
  { label: 'AI Platform', href: '/ai-platform' },
  { label: 'About',       href: '/about' },
  { label: 'Insights',    href: '/insights' },
  { label: 'Careers',     href: '/careers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" aria-label="Vyuhon home" style={{ display: 'flex', alignItems: 'center' }}>
            <VyuhonLogo variant="light" width={112} />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname.startsWith(l.href) ? 'active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-ghost btn-sm">Contact us</Link>
            <Link href="/contact" className="btn btn-ink btn-sm">Start a project</Link>
          </div>

          <button
            className="nav-burger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(o => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round">
              {mobileOpen
                ? <><path d="M3 3l12 12" /><path d="M15 3L3 15" /></>
                : <><path d="M2 5h14" /><path d="M2 9h14" /><path d="M2 13h14" /></>}
            </svg>
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <div className="mm-cta">
            <Link href="/contact" className="btn btn-ink btn-sm" style={{ flex: 1 }}>Start a project</Link>
          </div>
        </div>
      )}
    </>
  );
}
