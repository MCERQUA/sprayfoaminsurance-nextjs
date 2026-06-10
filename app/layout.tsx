export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Spray Foam Insurance | Call 844-967-5247',
    template: '%s | Spray Foam Insurance',
  },
  description:
    'Specialized insurance solutions for spray foam contractors. General liability, workers comp, commercial auto, environmental liability, surety bonds, and more.',
  metadataBase: new URL('https://sprayfoaminsurance.com'),
  openGraph: {
    type: 'website',
    siteName: 'Spray Foam Insurance',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&family=Public+Sans:wght@500;600;700&display=swap"
          />
        </head>
        <body className="bg-background text-text font-body antialiased">
          <Nav />
          <main className="pt-16">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
