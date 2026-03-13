import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'BNB Accounting Dubai | Expert Financial & Tax Consultancy',
    template: '%s | BNB Accounting Dubai',
  },
  description: 'BNB Accounting Dubai offers premium accounting, bookkeeping, VAT consultancy, corporate tax, and business advisory services tailored for the UAE market.',
  keywords: ['accounting Dubai', 'VAT consultancy UAE', 'corporate tax Dubai', 'bookkeeping UAE'],
  openGraph: {
    title: 'BNB Accounting Dubai',
    description: 'Premium accounting and financial consultancy for businesses in Dubai and the UAE.',
    type: 'website',
    locale: 'en_AE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
