import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const services: string[] = [
  'Bookkeeping',
  'Accounting Services',
  'VAT Consultancy',
  'Corporate Tax',
  'Payroll Management',
  'Business Advisory',
];

interface QuickLink {
  href: string;
  label: string;
}

const quickLinks: QuickLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Our Team' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="logo-mark">BNB</div>
              <div className="logo-text">
                <span className="logo-name">BNB Accounting</span>
                <span className="logo-sub">Dubai · UAE</span>
              </div>
            </div>
            <p>
              Trusted financial consultancy delivering precision accounting, tax compliance,
              and business advisory services for enterprises across the UAE.
            </p>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><FiMapPin size={15} /></span>
              <span>Office 2401, Level 24, Boulevard Plaza Tower 1, Downtown Dubai, UAE</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><FiPhone size={15} /></span>
              <a href="tel:+97142000000">+971 4 200 0000</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><FiMail size={15} /></span>
              <a href="mailto:info@bnbaccounting.ae">info@bnbaccounting.ae</a>
            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              {services.map((s: string) => (
                <li key={s}>
                  <Link href="/services" className="footer-link">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {quickLinks.map((l: QuickLink) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WORKING HOURS */}
          <div className="footer-col">
            <h5>Working Hours</h5>
            <ul className="footer-links">
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem' }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Monday – Friday</strong><br />
                9:00 AM – 6:00 PM
              </li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginTop: '0.75rem' }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Saturday</strong><br />
                10:00 AM – 2:00 PM
              </li>
              <li style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', marginTop: '0.75rem' }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>Sunday</strong><br />
                Closed
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <div
                className="cert-label"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                Certified By
              </div>
              <div className="cert-tags">
                {['FTA Registered', 'ICAEW', 'ACCA'].map((cert: string) => (
                  <span key={cert} className="cert-tag">{cert}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} BNB Accounting Dubai. All rights reserved.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">Privacy Policy</span>
            <span className="footer-badge">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}