'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

            {/* LOGO */}
            <Link href="/" className="navbar-logo" aria-label="B&B Accounting Dubai Home">
              {/* <div className="logo-img-wrap">
                <Image
                  src="/images/logo.png"
                  alt="B&B Accounting Logo"
                  width={48}
                  height={44}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  priority
                />
              </div> */}
              <div className="logo-img-wrap">
  <img
    src="/images/logo (1).png"
    alt="B&B Accounting Logo"
    style={{ width: '55px', height: '55px', objectFit: 'contain' }}
  />
</div>

              <div className="logo-text">
                <span className="logo-name">B &amp; B Accounting</span>
                <span className="logo-sub">Dubai · UAE</span>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
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

            {/* DESKTOP CTA */}
            <div className="navbar-cta">
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.75rem' }}
              >
                Free Consultation
              </Link>
            </div>

            {/* HAMBURGER */}
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

      {/* MOBILE MENU */}
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

        {/* Mobile Logo */}
        <div className="mobile-menu-logo">
          <div className="logo-img-wrap">
            <Image
              src="/images/logo.png"
              alt="B&B Accounting Logo"
              width={48}
              height={44}
              style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            />
          </div>
          <div className="logo-text">
            <span className="logo-name">B &amp; B Accounting</span>
            <span className="logo-sub">Dubai · UAE</span>
          </div>
        </div>

        {/* Mobile Nav Links */}
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

        {/* Mobile Footer */}
        <div className="mobile-menu-footer">
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
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