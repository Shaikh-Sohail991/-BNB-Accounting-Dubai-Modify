'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo" aria-label="BNB Accounting Dubai Home">
              <div className="logo-mark">BNB</div>
              <div className="logo-text">
                <span className="logo-name">BNB Accounting </span>
                <span className="logo-sub">Dubai · UAE</span>
              </div>
            </Link>

            <div className="navbar-links">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="navbar-cta">
              <Link href="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.75rem' }}>
                Free Consultation
              </Link>
            </div>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation menu"
        >
          ×
        </button>

        <div className="mobile-menu-logo">
          <div className="logo-mark">BNB</div>
          <div className="logo-text">
            <span className="logo-name">BNB Accounting</span>
            <span className="logo-sub">Dubai · UAE</span>
          </div>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
              {pathname === link.href && <span className="mobile-active-dot" />}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Book Free Consultation →
          </Link>
          <div className="mobile-contact-strip">
            <a href="tel:+97142000000">📞 +971 4 200 0000</a>
            <a href="mailto:info@bnbaccounting.ae">✉️ info@bnbaccounting.ae</a>
          </div>
        </div>
      </div>
    </>
  );
}
