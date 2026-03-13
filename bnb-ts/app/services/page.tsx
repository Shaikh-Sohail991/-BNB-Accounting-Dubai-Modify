import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: "BNB Accounting Dubai's full suite of financial services: bookkeeping, VAT, corporate tax, payroll, and business advisory.",
};

interface Service {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: '📒',
    title: 'Bookkeeping',
    desc: 'Meticulous recording of every financial transaction, maintaining clean and accurate ledgers that form the foundation of sound financial management.',
    features: ['Cloud-based bookkeeping (Xero, QuickBooks, Zoho)', 'Bank reconciliation & statements', 'Accounts payable & receivable', 'Real-time financial dashboard access', 'Monthly management accounts'],
  },
  {
    icon: '📊',
    title: 'Accounting Services',
    desc: 'Full-scale financial accounting aligned with IFRS and UAE standards, giving stakeholders the transparent picture they need to make confident decisions.',
    features: ['Financial statements (P&L, Balance Sheet)', 'Cash flow management & forecasting', 'Year-end accounts preparation', 'External audit support', 'IFRS compliance reporting'],
  },
  {
    icon: '🧾',
    title: 'VAT Consultancy',
    desc: 'Comprehensive UAE VAT advisory from registration through to filing, ensuring full FTA compliance and minimising risk at every step.',
    features: ['VAT registration with FTA', 'Quarterly VAT return preparation', 'Input tax recovery optimisation', 'VAT audit representation', 'Voluntary disclosure support'],
  },
  {
    icon: '🏛️',
    title: 'Corporate Tax Services',
    desc: 'Strategic UAE Corporate Tax planning and compliance support, tailored to your business structure and designed to optimise your effective tax rate.',
    features: ['Corporate Tax registration & filing', 'Transfer pricing documentation', 'Tax group structuring advice', 'Free zone tax benefit analysis', 'Cross-border tax advisory'],
  },
  {
    icon: '👥',
    title: 'Payroll Management',
    desc: 'End-to-end payroll solutions that keep your employees paid accurately and on time while ensuring full compliance with UAE labour law and WPS.',
    features: ['WPS (Wages Protection System) compliance', 'SIF file generation & submission', 'Gratuity & leave calculation', 'Payslip generation & distribution', 'DEWS & GPSSA contributions'],
  },
  {
    icon: '💼',
    title: 'Business Advisory',
    desc: 'High-level strategic financial consulting — from business planning and restructuring to investment analysis and performance optimisation.',
    features: ['Business plan & financial modelling', 'Company restructuring advisory', 'Mergers & acquisitions support', 'KPI reporting & board packs', 'Cash flow & working capital management'],
  },
];

interface ApproachItem {
  icon: string;
  step: string;
  title: string;
  desc: string;
}

const approachItems: ApproachItem[] = [
  { icon: '🔍', step: '01', title: 'Assess', desc: 'We thoroughly analyse your current financial situation, compliance status, and business objectives.' },
  { icon: '🗺️', step: '02', title: 'Design', desc: 'A bespoke service package is crafted that precisely addresses your needs — nothing more, nothing less.' },
  { icon: '⚙️', step: '03', title: 'Execute', desc: 'Our qualified team delivers with precision, communicating transparently at every milestone.' },
  { icon: '📈', step: '04', title: 'Optimise', desc: 'We continuously review and refine, ensuring your financial operations evolve with your business.' },
];

export default function ServicesPage(): JSX.Element {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="container">
          <div className="page-hero-content">
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-item">Home</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-item active-crumb">Services</span>
            </div>
            <div className="gold-line" />
            <h1 className="display-lg">Our Services</h1>
            <p>A comprehensive suite of financial services, each delivered to international standards by qualified UAE specialists.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Full Spectrum Coverage</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">What We Deliver</h2>
            <p className="section-subtitle">Every service is built on deep UAE regulatory knowledge and delivered by experienced professionals committed to your financial success.</p>
          </div>
          <div className="services-page-grid">
            {services.map((s: Service) => (
              <div key={s.title} className="service-page-card">
                <div className="service-page-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-features">
                  {s.features.map((f: string) => (
                    <div key={f} className="service-feature-item">{f}</div>
                  ))}
                </div>
                <Link href="/contact" className="service-card-link" style={{ marginTop: '1.5rem' }}>Get Started →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">How We Do It</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg" style={{ color: 'var(--white)' }}>Our Service Approach</h2>
          </div>
          <div className="approach-grid">
            {approachItems.map((item: ApproachItem) => (
              <div key={item.title} className="approach-card">
                <div className="approach-step">{item.step}</div>
                <div className="approach-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-soft)' }}>
        <div className="container">
          <div className="pricing-banner">
            <div className="pricing-banner-text">
              <p className="label-gold">Transparent Pricing</p>
              <div className="gold-line" />
              <h2 className="display-md">Tailored Packages for Every Business Size</h2>
              <p>Whether you are a sole trader, SME, or large enterprise — flexible monthly retainer and project-based pricing with no hidden fees.</p>
            </div>
            <div className="pricing-banner-cta">
              <Link href="/contact" className="btn btn-navy">Request a Quote →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg">Need a Custom Solution?</h2>
            <p>Our advisors will design a service package precisely suited to your business size, industry, and ambitions.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Get a Custom Quote →</Link>
              <Link href="/about" className="btn btn-outline">About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
