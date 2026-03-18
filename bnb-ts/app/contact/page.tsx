import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with BNB Accounting Dubai. Book a free consultation with our senior financial advisors today.',
};

export default function ContactPage(): React.ReactElement {
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
              <span className="breadcrumb-item active-crumb">Contact</span>
            </div>
            <div className="gold-line" />
            <h1 className="display-lg">Get in Touch</h1>
            <p>Speak with our senior advisors today. Book a free consultation and discover how we can elevate your financial operations.</p>
          </div>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* LEFT: INFO */}
            <div>
              <p className="label-gold">Our Office</p>
              <div className="gold-line" />
              <h2 className="display-md" style={{ marginBottom: '0.75rem' }}>
                We&rsquo;d Love to Hear From You
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.9rem' }}>
                Whether you&rsquo;re looking for ongoing accounting support, a VAT health check, or strategic tax advisory, our team is ready to help.
              </p>

              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <FiMapPin size={20} color="#fff" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Office Address</h4>
                    <p>Office 2401, Level 24<br />Boulevard Plaza Tower 1<br />Downtown Dubai, UAE</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <FiPhone size={20} color="#fff" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <a href="tel:+97142000000">+971 4 200 0000</a><br />
                    <a href="tel:+971501234567" >971 50 123 4567</a>
                    {/* style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>+ */}
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <FiMail size={20} color="#fff" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <a href="mailto:info@bnbaccounting.ae">info@bnbaccounting.ae</a><br />
                    <a href="mailto:tax@bnbaccounting.ae" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>tax@bnbaccounting.ae</a>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <FiClock size={20} color="#fff" />
                  </div>
                  <div className="contact-info-content">
                    <h4>Working Hours</h4>
                    <p>Mon – Fri: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178557345398!2d55.27262!3d25.19773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b4b88f6ad%3A0x8e2e7da33b9e90b0!2sBoulevard%20Plaza%20Tower%201%2C%20Downtown%20Dubai!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BNB Accounting Dubai Office Location"
                />
              </div>
            </div>

            {/* RIGHT: FORM */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}