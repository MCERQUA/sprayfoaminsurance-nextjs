import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sprayfoaminsurance.com';
  const now = new Date('2026-06-10');
  const post2023 = new Date('2023-09-24');
  const post2025 = new Date('2025-07-04');

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/quote/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact-us/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/general-liability-insurance/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/commercial-auto/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/environmental-liability/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/surety-bonds/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/workers-compensation-insurance-for-spray-foam-contractors/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/inland-marine/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/inland-marine/spray_foam_rig_insurance/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spf-resources/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/spf-resources/work-record-form/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/attic-insulation-certificate/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/safety-and-compliance-support/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/category/insurance-insights/`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/do-i-need-insurance-if-i-subcontract-work/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/do-i-need-special-coverage-for-roofing-projects/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/does-insurance-cover-overspray-damage/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/how-does-insurance-protect-my-clients/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/is-my-equipment-covered/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2023/09/24/what-factors-affect-insurance-premiums/`, lastModified: post2023, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships/`, lastModified: post2025, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/about-us/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/vegas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
