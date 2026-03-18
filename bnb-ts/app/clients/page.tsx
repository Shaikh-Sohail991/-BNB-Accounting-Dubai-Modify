import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import TestimonialSlider from '@/components/TestimonialSlider';
import {
  FiTool, FiHeart, FiShoppingCart, FiCoffee, FiMonitor,
  FiTruck, FiBook, FiZap, FiDollarSign, FiNavigation,
  FiPackage, FiStar
} from 'react-icons/fi';
import { JSX } from 'react';

export const metadata: Metadata = {
  title: 'Clients & Testimonials',
  description: "Discover what BNB Accounting Dubai's clients say and see the industries we proudly serve across the UAE.",
};

interface Stat { value: string; label: string; }
interface Industry { icon: JSX.Element; name: string; }
interface CaseStudy { company: string; sector: string; challenge: string; result: string; icon: JSX.Element; }
interface StaticTestimonial { text: string; author: string; role: string; initials: string; }

const stats: Stat[] = [
  { value: '500+', label: 'Businesses Served' },
  { value: '50+', label: 'Industries' },
  { value: '98%', label: 'Retention Rate' },
  { value: '12+', label: 'Years of Excellence' },
];

const industries: Industry[] = [
  { icon: <FiTool size={28} />, name: 'Real Estate & Construction' },
  { icon: <FiHeart size={28} />, name: 'Healthcare & Pharma' },
  { icon: <FiShoppingCart size={28} />, name: 'Retail & E-Commerce' },
  { icon: <FiCoffee size={28} />, name: 'Hospitality & Tourism' },
  { icon: <FiMonitor size={28} />, name: 'Technology & IT' },
  { icon: <FiTruck size={28} />, name: 'Logistics & Shipping' },
  { icon: <FiBook size={28} />, name: 'Education & Training' },
  { icon: <FiZap size={28} />, name: 'Energy & Utilities' },
  { icon: <FiDollarSign size={28} />, name: 'Financial Services' },
  { icon: <FiCoffee size={28} />, name: 'Food & Beverage' },
  { icon: <FiNavigation size={28} />, name: 'Aviation & Travel' },
  { icon: <FiPackage size={28} />, name: 'Manufacturing' },
];

const caseStudies: CaseStudy[] = [
  {
    company: 'AlNoor Real Estate',
    sector: 'Real Estate',
    icon: <FiTool size={32} color="#1BAFF0" />,
    challenge: 'Complex VAT obligations across multiple residential and commercial developments with unclear input tax recovery position.',
    result: 'Achieved AED 1.4M in input tax recovery, full FTA compliance, and a streamlined quarterly reporting process that reduced admin time by 60%.',
  },
  {
    company: 'TechNexus FZCO',
    sector: 'Technology',
    icon: <FiMonitor size={32} color="#1BAFF0" />,
    challenge: 'UAE Corporate Tax registration and qualifying income analysis for a DMCC free zone technology company with international revenue streams.',
    result: 'Secured qualifying free zone person status and structured income streams to maximise zero-rate CT benefits under the new regime.',
  },
  {
    company: 'GulfMed Healthcare',
    sector: 'Healthcare',
    icon: <FiHeart size={32} color="#1BAFF0" />,
    challenge: 'Multi-entity payroll management across 3 clinic branches with WPS compliance requirements and complex end-of-service gratuity calculations.',
    result: 'Fully automated WPS-compliant payroll for 350+ employees with zero FTA penalties and a 40% reduction in HR administration time.',
  },
];

const staticTestimonials: StaticTestimonial[] = [
  { text: 'BNB Accounting has transformed the way we handle our finances. Their VAT consultancy expertise saved us significant time and money. Highly professional and thorough.', author: 'Rashid Al Mansouri', role: 'CEO, Al Mansouri Group', initials: 'RM' },
  { text: 'BNB stands out for its meticulous attention to detail and deep understanding of UAE corporate tax regulations. Their professionalism is on par with the Big Four.', author: 'Priya Sharma', role: 'CFO, Nexus Trading LLC', initials: 'PS' },
  { text: 'From bookkeeping to full-scale business advisory, BNB has been instrumental in our growth. They streamlined our payroll across three Emirates with absolute precision.', author: 'James Whitmore', role: 'Managing Director, Whitmore Consulting', initials: 'JW' },
  { text: 'The corporate tax advisory was exceptional. They navigated complex cross-border structures with ease and ensured full compliance. I recommend them without reservation.', author: 'Maria Gonzalez', role: 'Finance Director, EuroGulf Industries', initials: 'MG' },
];

export default function ClientsPage(): JSX.Element {
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
              <span className="breadcrumb-item active-crumb">Clients</span>
            </div>
            <div className="gold-line" />
            <h1 className="display-lg">Our Clients</h1>
            <p>Trusted by over 500 businesses across the UAE — from ambitious start-ups to established conglomerates.</p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--navy)', padding: '3.5rem 0' }}>
        <div className="container">
          <div className="clients-stats-bar">
            {stats.map((s: Stat) => (
              <div key={s.label}>
                <div className="clients-stat-value">{s.value}</div>
                <div className="clients-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Client Feedback</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">What Our Clients Say</h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* STATIC TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--gray-soft)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">More Reviews</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Client Voices</h2>
          </div>
          <div className="testimonial-cards-grid">
            {staticTestimonials.map((t: StaticTestimonial, i: number) => (
              <div key={i} className="testimonial-static-card">
                <div className="testimonial-stars-top">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} size={14} fill="#1BAFF0" stroke="#1BAFF0" />
                  ))}
                </div>
                <p className="testimonial-static-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-static-author">
                  <div className="testimonial-avatar-sm">{t.initials}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Results That Matter</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Client Success Stories</h2>
          </div>
          <div className="case-studies-list">
            {caseStudies.map((cs: CaseStudy) => (
              <div key={cs.company} className="case-study-card">
                <div className="case-study-icon">{cs.icon}</div>
                <div className="case-study-challenge">
                  <div className="case-study-sector">{cs.sector}</div>
                  <h4>{cs.company}</h4>
                  <p><strong>Challenge: </strong>{cs.challenge}</p>
                </div>
                <div className="case-study-result">
                  <p className="case-study-result-label">Result</p>
                  <p>{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ background: 'var(--gray-soft)' }}>
        <div className="container">
          <div className="section-header centered">
            <p className="label-gold">Sector Experience</p>
            <div className="gold-line gold-line-center" />
            <h2 className="display-lg">Industries We Serve</h2>
          </div>
          <div className="industries-grid">
            {industries.map((ind: Industry) => (
              <div key={ind.name} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2 className="display-lg">Join 500+ Satisfied Clients</h2>
            <p>Experience the BNB difference — precision, compliance, and advisory excellence.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Start Today</Link>
              <Link href="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}