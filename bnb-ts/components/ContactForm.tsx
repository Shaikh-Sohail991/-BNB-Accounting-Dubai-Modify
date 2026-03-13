'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

export default function ContactForm(): JSX.Element {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = (): void => {
    setSubmitted(false);
    setForm(initialState);
  };

  return (
    <div className="contact-form-wrapper">
      {submitted ? (
        <div className="form-success">
          <div className="form-success-icon">✅</div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. One of our senior advisors will contact you within one business day.</p>
          <button onClick={reset} className="btn btn-navy">Send Another Message</button>
        </div>
      ) : (
        <>
          <h3>Book a Free Consultation</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input className="form-input" type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Ahmed" required />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input className="form-input" type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Al Rashidi" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="ahmed@company.ae" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Company Name</label>
              <input className="form-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your Company LLC" />
            </div>
            <div className="form-group">
              <label className="form-label">Service of Interest *</label>
              <select className="form-select" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option>Bookkeeping</option>
                <option>Accounting Services</option>
                <option>VAT Consultancy</option>
                <option>Corporate Tax Services</option>
                <option>Payroll Management</option>
                <option>Business Advisory</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your business and how we can help..." />
            </div>
            <button type="submit" className="btn btn-navy form-submit-btn">
              Send Message →
            </button>
            <p className="form-disclaimer">
              By submitting this form you agree to our Privacy Policy. We respond within 1 business day.
            </p>
          </form>
        </>
      )}
    </div>
  );
}
