import type { Metadata } from 'next';
import { Montserrat, Inter, Public_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-headline',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
});
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-label',
});

const SITE_URL = 'https://sprayfoaminsurance.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Spray Foam Insurance | Specialized SPF Contractor Coverage',
    template: '%s | Spray Foam Insurance',
  },
  description:
    'Specialized insurance for spray foam contractors — general liability, workers comp, commercial auto, environmental liability, surety bonds, and rig & equipment coverage in all 50 states. A-rated carriers. Same-day certificates.',
  keywords: [
    'spray foam insurance',
    'SPF contractor insurance',
    'spray foam general liability',
    'spray foam workers compensation',
    'spray polyurethane foam insurance',
    'spray foam rig equipment insurance',
    'overspray liability insurance',
    'spray foam surety bonds',
    'spray foam environmental liability',
  ],
  authors: [{ name: 'Josh Cotner', url: `${SITE_URL}/about-us` }],
  creator: 'Spray Foam Insurance',
  publisher: 'Spray Foam Insurance',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Spray Foam Insurance',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Spray Foam Insurance | Specialized SPF Contractor Coverage',
    description:
      'Specialized insurance for spray foam contractors. A-rated carriers, same-day certificates, all 50 states. General liability, workers comp, commercial auto, environmental liability, surety bonds, and rig & equipment.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Spray Foam Insurance — Specialized Coverage for SPF Contractors',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sprayfoamins',
    creator: '@sprayfoamins',
    title: 'Spray Foam Insurance | Specialized SPF Contractor Coverage',
    description:
      'Specialized insurance for spray foam contractors. A-rated carriers, same-day certificates, all 50 states.',
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${montserrat.variable} ${inter.variable} ${publicSans.variable}`}>
      <body className="bg-background text-text font-body antialiased">
        <JsonLd />
        <Nav />
        <main className="pt-[160px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
