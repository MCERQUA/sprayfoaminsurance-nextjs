export interface BlogPost {
  href: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    href: '/2023/09/24/can-i-get-coverage-for-mold-and-mildew-claims',
    title: 'Can I Get Coverage for Mold & Mildew Claims?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'Mold and mildew pose real risks for spray foam contractors. Learn how specialized insurance coverage protects your business from moisture-related liability claims.',
    image: '/assets/images/blog-feature-1.jpg',
  },
  {
    href: '/2023/09/24/do-i-need-insurance-if-i-subcontract-work',
    title: 'Do I Need Insurance If I Subcontract Work?',
    date: 'Sep 24, 2023',
    category: 'Business',
    excerpt:
      'Subcontracting introduces unique insurance responsibilities for both general contractors and subcontractors. Understand your obligations before your next project.',
    image: '/assets/images/blog-meeting.jpg',
  },
  {
    href: '/2023/09/24/do-i-need-special-coverage-for-roofing-projects',
    title: 'Do I Need Special Coverage for Roofing Projects?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'When spray foam contractors work alongside roofers, special insurance considerations come into play. Know your coverage before combined operations.',
    image: '/assets/images/blog-feature-2.jpg',
  },
  {
    href: '/2023/09/24/does-insurance-cover-overspray-damage',
    title: 'Does Insurance Cover Overspray Damage?',
    date: 'Sep 24, 2023',
    category: 'Claims',
    excerpt:
      'Overspray is an inherent risk in spray foam applications. Discover how liability and specialized policies protect you from unintended foam dispersion claims.',
    image: '/assets/images/blog-feature-3.jpg',
  },
  {
    href: '/2023/09/24/how-does-insurance-protect-my-clients',
    title: 'How Does Insurance Protect My Clients?',
    date: 'Sep 24, 2023',
    category: 'Business',
    excerpt:
      'Your insurance coverage does more than protect your business — it gives clients peace of mind and financial protection throughout every project.',
    image: '/assets/images/blog-team-laptop.jpg',
  },
  {
    href: '/2023/09/24/is-my-equipment-covered',
    title: 'Is My Spray Foam Equipment Covered?',
    date: 'Sep 24, 2023',
    category: 'Equipment',
    excerpt:
      'Your proportioner, hoses, and rig represent a massive investment. Find out which policies actually cover your equipment and how to avoid coverage gaps.',
    image: '/assets/images/rig-equipment.webp',
  },
  {
    href: '/2023/09/24/is-retrofitting-insurance-available-for-spray-foam-contractors',
    title: 'Is Retrofitting Insurance Available for SPF Contractors?',
    date: 'Sep 24, 2023',
    category: 'Coverage',
    excerpt:
      'As energy efficiency demands grow, spray foam contractors are doing more retrofit work. Learn how your insurance can adapt to protect these projects.',
    image: '/assets/images/blog-team-3.jpg',
  },
  {
    href: '/2023/09/24/what-are-the-insurance-requirements-for-large-commercial-projects',
    title: 'Insurance Requirements for Large Commercial Projects',
    date: 'Sep 24, 2023',
    category: 'Commercial',
    excerpt:
      'Commercial spray foam projects come with elevated insurance requirements. This guide covers the policies needed to win bids and stay compliant.',
    image: '/assets/images/blog-meeting.jpg',
  },
  {
    href: '/2023/09/24/what-factors-affect-insurance-premiums',
    title: 'What Factors Affect My Insurance Premiums?',
    date: 'Sep 24, 2023',
    category: 'Pricing',
    excerpt:
      'From claims history to crew size and revenue, many factors shape your spray foam insurance premiums. Understand what drives costs to manage them.',
    image: '/assets/images/blog-feature-3.jpg',
  },
  {
    href: '/2025/07/04/spray-foam-equipment-financing-building-strong-banking-relationships',
    title: 'Spray Foam Equipment Financing: Building Strong Banking Relationships',
    date: 'Jul 4, 2025',
    category: 'Business',
    excerpt:
      'Spray foam rigs cost $40k–$150k+. Building strong banking relationships is key to financing your equipment and scaling your business.',
    image: '/assets/images/wireframe-handshake.webp',
  },
];

export const blogCategories = ['All', 'Coverage', 'Business', 'Equipment', 'Claims', 'Commercial', 'Pricing'];
