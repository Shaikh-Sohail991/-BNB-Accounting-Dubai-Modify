# BNB Accounting Dubai — Next.js Website

A premium, professional website for BNB Accounting Dubai, built with Next.js 14 (App Router) and Custom CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Custom CSS (no Tailwind) with CSS Variables
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Language:** JavaScript (React)

## Color Palette

| Token | Hex |
|-------|-----|
| Primary Navy | `#0B1F3A` |
| Accent Gold | `#C8A96A` |
| Background | `#FFFFFF` |
| Soft Gray | `#F5F7FA` |
| Text Dark | `#1A1A1A` |
| Text Muted | `#6B7280` |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home (Hero, Services, Why Us, Process, Testimonials, CTA) |
| `/about` | Company story, Mission & Vision, Values |
| `/services` | 6 service cards with feature lists |
| `/team` | 8 team member profiles |
| `/clients` | Testimonials, Case Studies, Industries |
| `/contact` | Contact form, info cards, map placeholder |

## Project Structure

```
bnb-accounting/
├── app/
│   ├── layout.js          # Root layout + metadata
│   ├── globals.css        # All custom CSS
│   ├── page.js            # Home page
│   ├── about/page.js
│   ├── services/page.js
│   ├── team/page.js
│   ├── clients/page.js
│   └── contact/page.js    # Client component (form)
├── components/
│   ├── Navbar.js          # Sticky nav with scroll effect
│   ├── Footer.js          # Multi-column footer
│   └── TestimonialSlider.js
├── public/
├── jsconfig.json
├── next.config.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Customisation Notes

- **Logo:** Replace the `BNB` text mark in `components/Navbar.js` and `Footer.js` with an actual SVG logo
- **Google Maps:** In `app/contact/page.js`, replace the map placeholder `<div>` with a real Google Maps `<iframe>` embed
- **Images:** Add real photography to the team cards and About page hero visual
- **Partner Logos:** Replace placeholder text partners with real client logos in SVG format
- **Contact Form:** Wire the `handleSubmit` function to an email API (e.g., Resend, EmailJS, or a custom backend endpoint)
- **Google Fonts:** The fonts are loaded via CSS `@import`. In production, use `next/font` for better performance

## SEO

Each page exports a `metadata` object for Next.js App Router's built-in SEO support. Update titles, descriptions, and Open Graph images in each `page.js` file.
