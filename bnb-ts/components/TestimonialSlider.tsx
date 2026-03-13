'use client';

import { useState } from 'react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    text: "BNB Accounting has transformed the way we handle our finances. Their VAT consultancy expertise saved us significant time and money during the UAE VAT implementation. Highly professional, responsive, and thorough — they feel like a true extension of our team.",
    author: 'Rashid Al Mansouri',
    role: 'CEO, Al Mansouri Group',
    initials: 'RM',
  },
  {
    text: "We've worked with many accounting firms across the GCC, and BNB stands out for its meticulous attention to detail and deep understanding of UAE corporate tax regulations. Their professionalism is on par with the Big Four.",
    author: 'Priya Sharma',
    role: 'CFO, Nexus Trading LLC',
    initials: 'PS',
  },
  {
    text: 'From bookkeeping to full-scale business advisory, BNB Accounting has been instrumental in our growth. They streamlined our payroll operations across three Emirates with absolute precision.',
    author: 'James Whitmore',
    role: 'Managing Director, Whitmore Consulting',
    initials: 'JW',
  },
  {
    text: 'The corporate tax advisory provided by BNB was exceptional. They navigated complex cross-border structures with ease and ensured full compliance. I recommend them without reservation.',
    author: 'Maria Gonzalez',
    role: 'Finance Director, EuroGulf Industries',
    initials: 'MG',
  },
];

export default function TestimonialSlider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const prev = (): void => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = (): void => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((t: Testimonial, i: number) => (
          <div key={i} className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-quote-mark">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button className="slider-btn" onClick={prev} aria-label="Previous testimonial">←</button>
        <div className="slider-dots">
          {testimonials.map((_: Testimonial, i: number) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className="slider-btn" onClick={next} aria-label="Next testimonial">→</button>
      </div>
    </div>
  );
}
