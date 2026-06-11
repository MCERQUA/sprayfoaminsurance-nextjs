const BASE_URL = 'https://sprayfoaminsurance.com';

const insuranceAgencySchema = {
  '@context': 'https://schema.org',
  '@type': ['InsuranceAgency', 'LocalBusiness'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Spray Foam Insurance',
  alternateName: 'SprayFoamInsurance.com',
  url: BASE_URL,
  telephone: '+18449675247',
  email: 'josh@sprayfoaminsurance.com',
  description:
    'Specialized insurance for spray foam contractors — general liability, workers comp, commercial auto, environmental liability, surety bonds, and rig & equipment coverage in all 50 US states.',
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: [
    'General Liability Insurance',
    "Workers' Compensation Insurance",
    'Commercial Auto Insurance',
    'Environmental Liability Insurance',
    'Surety Bonds',
    'Inland Marine / Rig & Equipment Insurance',
  ],
  founder: {
    '@type': 'Person',
    name: 'Josh Cotner',
    jobTitle: 'Founder & Lead Specialist',
    url: `${BASE_URL}/about-us`,
  },
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/assets/icons/logo.webp`,
    width: 180,
    height: 180,
  },
  image: `${BASE_URL}/og-image.png`,
  sameAs: [BASE_URL],
  knowsAbout: [
    'Spray Foam Insulation Contractor Insurance',
    'SPF Overspray Liability Coverage',
    'Isocyanate Chemical Exposure Insurance',
    'Spray Foam Rig Equipment Coverage',
    'Spray Polyurethane Foam Contractor Bonds',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Spray Foam Insurance',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
