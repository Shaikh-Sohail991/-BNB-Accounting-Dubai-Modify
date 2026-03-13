import Link from 'next/link';
import TestimonialSlider from '@/components/TestimonialSlider';

const services = [
  { icon: '📒', title: 'Bookkeeping', text: 'Accurate, real-time recording of all financial transactions ensuring clarity and control over your business finances.' },
  { icon: '📊', title: 'Accounting Services', text: 'Comprehensive financial statements, analysis, and reporting in full compliance with UAE accounting standards.' },
  { icon: '🧾', title: 'VAT Consultancy', text: 'Expert VAT registration, filing, and advisory tailored to the specific requirements of the UAE Federal Tax Authority.' },
  { icon: '🏛️', title: 'Corporate Tax', text: 'Strategic planning and full compliance support for UAE Corporate Tax, minimising liability and maximising efficiency.' },
  { icon: '👥', title: 'Payroll Management', text: 'End-to-end payroll processing across the UAE, ensuring WPS compliance, timely SIF submissions, and accuracy.' },
  { icon: '💼', title: 'Business Advisory', text: 'High-level financial strategy, performance optimisation, and growth planning for businesses of all sizes.' },
];

const whyFeatures = [
  {
    icon: '🎯',
    title: 'UAE Market Expertise',
    text: 'Over a decade of deep-rooted knowledge of the UAE business regulatory landscape.',
  },
  {
    icon: '⚖️',
    title: 'Full Regulatory Compliance',
    text: 'FTA-registered professionals ensuring 100% compliance with every UAE financial regulation.',
  },
  {
    icon: '🔒',
    title: 'Confidential & Secure',
    text: 'Strict data governance protocols safeguarding your sensitive financial information at all times.',
  },
  {
    icon: '🌐',
    title: 'Multilingual Team',
    text: 'Serving clients in English, Arabic, and Urdu — bridging language and business cultures seamlessly.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-overlay" />
        <div className="hero-accent-line" />

        <div className="container" style={{ paddingTop: '6rem', paddingBottom: '8rem' }}>
          <div className="hero-content">
            <div className="hero-label">
              <span className="hero-label-dot" />
              <span className="label-gold">Trusted by 500+ UAE Businesses</span>
            </div>

            <h1 className="display-xl">
              Financial Clarity.<br />
              <span className="gold-word">Built for Dubai.</span>
            </h1>

            <p className="hero-subtitle">
              Premium accounting, tax consultancy, and business advisory services — designed for the ambition of the UAE market and the standards of global finance.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Book Free Consultation →
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="container">
            <div className="hero-stats-inner">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '12+', label: 'Years in UAE' },
                { value: '98%', label: 'Client Retention' },
                { value: '100%', label: 'FTA Compliant' },
              ].map(stat => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── PARTNERS STRIP ── */}
      <div className="partners-strip">
        <div className="container">
          <p className="partners-label">Trusted by leading enterprises across the UAE</p>
          <div className="partners-logos">
            {['Emaar Group', 'DMCC', 'Dubai Holdings', 'Al Futtaim', 'Majid Al Futtaim', 'ENOC'].map(p => (
              <span key={p} className="partner-logo">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">What We Offer</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Comprehensive Financial Services</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
              From day-to-day bookkeeping to complex corporate tax strategy, we provide the full spectrum of financial services your business needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-card-icon">{s.icon}</div>
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-text">{s.text}</p>
                <Link href="/services" className="service-card-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="section-header">
                <p className="label-gold">Why BNB Accounting</p>
                <div className="gold-line" />
                <h2 className="display-lg" style={{ color: 'var(--white)' }}>
                  The Standard of Excellence in UAE Finance
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '1rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  We combine international accounting standards with intimate knowledge of the UAE regulatory environment, delivering financial clarity that drives confident business decisions.
                </p>
              </div>

              <div className="why-features">
                {whyFeatures.map(f => (
                  <div key={f.title} className="why-feature">
                    <div className="why-feature-icon">{f.icon}</div>
                    <div className="why-feature-content">
                      <h4>{f.title}</h4>
                      <p>{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-visual">
              <div className="why-image-card">
                <div className="why-stat-grid">
                  {[
                    { value: '500+', label: 'Active Clients' },
                    { value: '12+', label: 'Years Experience' },
                    { value: 'AED 2B+', label: 'Tax Managed' },
                    { value: '50+', label: 'Industries' },
                  ].map(s => (
                    <div key={s.label} className="why-stat-item">
                      <div className="why-stat-value">{s.value}</div>
                      <div className="why-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="certifications">
                  <div className="cert-label">Our Certifications & Memberships</div>
                  <div className="cert-tags">
                    {['FTA Registered', 'ACCA Member', 'ICAEW', 'CPA Certified', 'ISO 9001'].map(c => (
                      <span key={c} className="cert-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">How We Work</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Our Proven Approach</h2>
          </div>

          <div className="process-steps">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We assess your business needs, current financial position, and objectives in a free consultation.' },
              { step: '02', title: 'Tailored Proposal', desc: 'A customised service plan is designed specifically for your industry, size, and goals.' },
              { step: '03', title: 'Onboarding & Setup', desc: 'Seamless integration with your existing systems and a structured handover process.' },
              { step: '04', title: 'Ongoing Excellence', desc: 'Continuous support, regular reporting, and proactive advisory to keep you always ahead.' },
            ].map(p => (
              <div key={p.step} className="process-step">
                <div className="process-step-number">{p.step}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Client Stories</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">What Our Clients Say</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <p className="label-gold" style={{ marginBottom: '1rem' }}>Ready to Get Started?</p>
            <h2 className="display-lg">
              Let&rsquo;s Elevate Your<br />Financial Operations
            </h2>
            <p>
              Schedule a complimentary consultation with our senior advisors and discover how BNB Accounting can transform your financial management.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Book Free Consultation →
              </Link>
              <Link href="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
