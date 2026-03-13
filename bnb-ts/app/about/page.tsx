import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn about BNB Accounting Dubai — our history, mission, values, and the experienced leadership team behind our financial expertise.',
};

const values = [
  { icon: '🏆', title: 'Excellence', desc: 'We hold ourselves to the highest professional standards, mirroring the best global accounting practices.' },
  { icon: '🤝', title: 'Integrity', desc: 'Complete transparency and ethical conduct in every client engagement, without exception.' },
  { icon: '💡', title: 'Innovation', desc: 'We leverage modern financial tools and methodologies to deliver smarter, faster insights.' },
  { icon: '🌍', title: 'Partnership', desc: "We build long-term relationships, becoming a trusted extension of our clients' financial teams." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-item">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active-crumb">About</span>
            </div>
            <div className="gold-line" />
            <h1 className="display-lg">About BNB Accounting</h1>
            <p>A trusted financial partner built on expertise, integrity, and a deep understanding of the UAE business environment.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-visual">
              <div className="about-image-box" style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=750&fit=crop"
                  alt="BNB Accounting Dubai Office"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
              </div>
              <div className="about-experience-badge">
                <span className="number">12+</span>
                <span className="label">Years in UAE</span>
              </div>
            </div>
            <div>
              <p className="label-gold">Our Story</p>
              <div className="gold-line" />
              <h2 className="display-md" style={{ marginBottom: '1.25rem' }}>
                Established in the Heart of Dubai&rsquo;s Financial District
              </h2>
              <p className="about-body-text">
                Founded over a decade ago, BNB Accounting Dubai was established with a singular mission: to provide UAE businesses with the calibre of financial expertise typically reserved for multinational corporations. We recognised that the rapid growth of Dubai&rsquo;s economy demanded accounting partners who could operate with international precision while navigating local complexity.
              </p>
              <p className="about-body-text">
                Today, we serve over 500 businesses across a breadth of sectors — from free zone start-ups to listed conglomerates — delivering end-to-end financial management that empowers leadership teams to focus on growth, not compliance.
              </p>
              <div className="about-cta-row">
                <Link href="/contact" className="btn btn-navy">Get in Touch</Link>
                <Link href="/services" className="btn btn-ghost">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-soft)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Purpose & Direction</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Mission &amp; Vision</h2>
          </div>
          <div className="mission-vision">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower UAE businesses with world-class financial management, delivering accurate, compliant, and strategically insightful accounting services that drive informed decisions and sustainable growth.</p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the UAE&rsquo;s most trusted and respected financial advisory firm — recognised for our integrity, expertise, and the transformative value we create for every client we serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">What Drives Us</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Our Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">By the Numbers</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg" style={{ color: 'var(--white)' }}>Our Track Record</h2>
          </div>
          <div className="about-stats-grid">
            {[
              { value: '500+', label: 'Businesses Served', icon: '🏢' },
              { value: '12+', label: 'Years of Excellence', icon: '📅' },
              { value: 'AED 2B+', label: 'Taxes Managed', icon: '💰' },
              { value: '50+', label: 'Industries Covered', icon: '🌐' },
              { value: '98%', label: 'Client Retention', icon: '🤝' },
              { value: '100%', label: 'FTA Compliant', icon: '✅' },
            ].map(s => (
              <div key={s.label} className="about-stat-card">
                <div className="about-stat-icon">{s.icon}</div>
                <div className="about-stat-value">{s.value}</div>
                <div className="about-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg">Ready to Work Together?</h2>
            <p>Join over 500 businesses that trust BNB Accounting for their financial excellence.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Book a Consultation →</Link>
              <Link href="/team" className="btn btn-outline">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
