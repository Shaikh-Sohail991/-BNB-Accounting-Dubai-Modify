import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Team',
  description: 'Meet the qualified accountants, tax advisors, and financial consultants at BNB Accounting Dubai.',
};

const team = [
  {
    name: 'Ahmed Al Rashidi',
    role: 'Managing Partner',
    bio: 'ACCA-qualified with 18 years of UAE financial leadership. Former Big Four senior manager, specialising in corporate structuring and tax strategy across the GCC.',
    specialties: ['Corporate Tax', 'Audit', 'M&A'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Sarah Thompson',
    role: 'Head of Tax & Compliance',
    bio: 'CPA and FTA-certified VAT specialist with extensive experience in UAE VAT implementation, dispute resolution, and voluntary disclosure programmes.',
    specialties: ['VAT', 'Corporate Tax', 'FTA'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Rajesh Nair',
    role: 'Director of Accounting',
    bio: 'ICAI member with 15 years of accounting excellence. Expert in IFRS financial reporting and consolidation for multinational entities in the MENA region.',
    specialties: ['IFRS', 'Reporting', 'Consolidation'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Fatima Al Zaabi',
    role: 'Senior VAT Consultant',
    bio: 'UAE national with deep FTA relationships and expert knowledge of Emirati business practices. Delivers bilingual (Arabic/English) advisory to a wide range of clients.',
    specialties: ['VAT', 'FTA Liaison', 'Arabic'],
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Payroll & HR',
    bio: 'Specialises in UAE WPS compliance and cross-border payroll structures for companies operating across multiple GCC jurisdictions with complex workforce arrangements.',
    specialties: ['Payroll', 'WPS', 'HR Advisory'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Priya Kapoor',
    role: 'Business Advisory Manager',
    bio: 'MBA from London Business School with 12 years in financial modelling, business planning, and strategic advisory across the MENA region and South Asia.',
    specialties: ['Modelling', 'Strategy', 'MENA'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Omar Hassan',
    role: 'Senior Accountant',
    bio: 'ACCA part-qualified specialist in cloud accounting platforms — Xero, QuickBooks, and Zoho Books — serving a growing portfolio of Dubai SME clients.',
    specialties: ['Cloud Acc.', 'SME', 'Bookkeeping'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
  },
  {
    name: 'Ananya Menon',
    role: 'Corporate Tax Specialist',
    bio: 'Expert in UAE Corporate Tax law, focusing on free zone entities and qualifying income analysis under the new CT regime introduced in 2023.',
    specialties: ['Corp. Tax', 'Free Zones', 'Planning'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
  },
];

const certs = [
  { short: 'ACCA', full: 'Association of Chartered Certified Accountants' },
  { short: 'CPA', full: 'Certified Public Accountant (US)' },
  { short: 'ICAI', full: 'Institute of Chartered Accountants of India' },
  { short: 'ICAEW', full: 'Institute of Chartered Accountants in England & Wales' },
  { short: 'FTA', full: 'UAE Federal Tax Authority Registered' },
];

export default function TeamPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-item">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active-crumb">Team</span>
            </div>
            <div className="gold-line" />
            <h1 className="display-lg">Meet Our Team</h1>
            <p>Qualified professionals who bring international standards and deep local expertise to every client engagement.</p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--gray-soft)', padding: '3rem 0', borderBottom: '1px solid var(--gray-border)' }}>
        <div className="container">
          <div className="team-intro-bar">
            {[
              { value: '8+', label: 'Senior Professionals' },
              { value: '150+', label: 'Years Combined Experience' },
              { value: '5', label: 'Professional Certifications' },
              { value: '6', label: 'Languages Spoken' },
            ].map(s => (
              <div key={s.label} className="team-intro-stat">
                <div className="team-intro-value">{s.value}</div>
                <div className="team-intro-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Our People</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Experience You Can Trust</h2>
            <p className="section-subtitle">
              Our team combines ACCA, CPA, ICAI, and FTA-certified professionals with a collective experience of over 150 years in UAE and international finance.
            </p>
          </div>
          <div className="team-grid">
            {team.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-card-image">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    width={400}
                    height={500}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className="team-card-overlay" />
                  <div className="team-card-overlay-info">
                    <span className="team-card-overlay-name">{member.name}</span>
                  </div>
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                  <div className="team-tags">
                    {member.specialties.map(s => (
                      <span key={s} className="team-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" style={{ background: 'var(--gray-soft)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Credentials &amp; Qualifications</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-md">Professional Certifications We Hold</h2>
          </div>
          <div className="certs-grid">
            {certs.map(cert => (
              <div key={cert.short} className="cert-card">
                <div className="cert-card-short">{cert.short}</div>
                <p className="cert-card-full">{cert.full}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="section why-section">
        <div className="container">
          <div className="join-us-layout">
            <div>
              <p className="label-gold">Careers at BNB</p>
              <div className="gold-line" />
              <h2 className="display-lg" style={{ color: 'var(--white)' }}>Join a Team That Sets the Standard</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginTop: '1rem', fontSize: '0.95rem', maxWidth: 500 }}>
                We are always looking for exceptional accounting professionals who share our commitment to excellence, integrity, and client service. If you want to grow your career in one of Dubai&rsquo;s most respected financial consultancies, we&rsquo;d love to hear from you.
              </p>
            </div>
            <div className="join-us-cta">
              <Link href="/contact" className="btn btn-primary">Send Your CV</Link>
            </div>
          </div>
        </div>     
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg">Work With Our Experts</h2>
            <p>Schedule a consultation with the right specialist for your financial needs.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Book a Consultation</Link>
              <Link href="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}