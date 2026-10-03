import type { Metadata } from 'next';
import { OG_IMAGES, SITE_URL } from '@/lib/seo';

const title = 'SPF Application Work Record Form';
const description =
  'Document jobsite conditions, ambient and substrate temperatures, moisture, and ISO/resin lot data with our spray foam application work record form.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/spf-resources/work-record-form/` },
  openGraph: { title, description, url: `${SITE_URL}/spf-resources/work-record-form/`, images: OG_IMAGES },
  robots: { index: false, follow: false },
};

export default function WorkRecordFormLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
