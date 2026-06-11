export interface FAQItem {
  q: string;
  a: string;
}

// ── Homepage (10-12 AI/featured-snippet targets) ──────────────────────────

export const homepageFaqs: FAQItem[] = [
  {
    q: 'How much does spray foam insurance cost?',
    a: 'Most spray foam contractors pay $2,500–$8,000 per year for a basic GL + workers\' comp package. Rates depend on annual revenue, crew size, states of operation, claims history, and the specific coverages you carry. Larger commercial operations or those with prior claims may pay more.',
  },
  {
    q: 'What insurance does a spray foam contractor need?',
    a: 'At minimum, every SPF contractor needs General Liability Insurance (covering overspray, property damage, and bodily injury) and Workers\' Compensation if you have employees. Most contractors also need Commercial Auto, Inland Marine / Rig Insurance, and Environmental Liability. Surety bonds are required for licensed contractor work in many states.',
  },
  {
    q: 'Does standard GL cover spray foam overspray incidents?',
    a: 'Most standard General Liability policies either exclude overspray damage or severely sub-limit it. Our SPF-specific GL policies include overspray coverage as standard, protecting you when wind-borne foam particles damage neighboring vehicles, siding, or landscaping.',
  },
  {
    q: 'How fast can I get a certificate of insurance (COI)?',
    a: 'Once your policy is bound and payment is processed, we typically issue certificates the same day — often within a few hours. We know contractors lose work waiting on paperwork, so fast COI service is a core part of what we do.',
  },
  {
    q: 'Is workers\' compensation required for spray foam contractors in every state?',
    a: 'Workers\' comp is mandatory in virtually every state as soon as you have one employee. The specific rules — including whether sole proprietors must cover themselves — vary by state. Operating without it can result in fines, stop-work orders, and direct personal liability for injured workers\' medical bills and lost wages.',
  },
  {
    q: 'Does my general liability policy cover pollution and chemical exposure claims?',
    a: 'Standard GL policies contain a "pollution exclusion" that can bar coverage for chemical-related claims involving isocyanates and off-gassing. Environmental Liability Insurance fills this critical gap for SPF contractors. We recommend all spray foam contractors carry both GL and a pollution/environmental liability policy.',
  },
  {
    q: 'How is my spray foam rig and equipment covered?',
    a: 'Your spray foam rig — proportioner, heated hoses, generator, trailer, and tools — is covered under Inland Marine (also called Rig & Equipment Insurance). This coverage follows your equipment on the road, at job sites, and in storage. Commercial auto covers the vehicle itself but not the equipment inside.',
  },
  {
    q: 'Do spray foam contractors need a surety bond?',
    a: 'Many states require a contractor license bond as part of the licensing process. Commercial projects and general contractors may also require performance or payment bonds. Bonds guarantee your contractual performance — they are not insurance but work alongside it.',
  },
  {
    q: 'Do my subcontractors need their own insurance?',
    a: 'Yes. If your subcontractors lack their own GL or workers\' comp coverage, you may be held liable as the statutory employer for their claims. Always verify current certificates of insurance from every subcontractor before work begins.',
  },
  {
    q: 'Am I covered if I work in multiple states?',
    a: 'Yes — we place coverage for spray foam contractors operating across all 50 states. Workers\' comp must be endorsed for each state where you have employees, and we handle that coordination. Your GL and inland marine coverage typically follows you nationwide under a single policy.',
  },
  {
    q: 'How quickly can I get insured?',
    a: 'Most contractors can be quoted within 1 business day and fully bound within 2–3 business days. For straightforward GL or commercial auto risks, same-day binding is often possible. Call 844-967-5247 to start the process.',
  },
  {
    q: 'What coverage protects against isocyanate exposure claims?',
    a: 'Isocyanate-related claims — occupational asthma, sensitization, chemical exposure from MDI or TDI — are covered under a combination of Workers\' Compensation (for employees), Environmental Liability (for third-party bodily injury and property damage), and General Liability (for bodily injury claims from building occupants).',
  },
];

// ── Per-service FAQ sets ───────────────────────────────────────────────────

export const generalLiabilityFaqs: FAQItem[] = [
  {
    q: 'Does standard GL cover spray foam overspray?',
    a: 'Most standard GL policies either exclude or severely limit coverage for overspray incidents. Our SPF-specific GL policies include overspray coverage as standard, protecting you when foam drifts to neighboring properties or vehicles.',
  },
  {
    q: 'What GL limits do I need as a spray foam contractor?',
    a: 'Most general contractors require subcontractors to carry at least $1M per occurrence / $2M aggregate. If you work on large commercial projects, $2M/$4M or higher may be required. We\'ll help you meet whatever certificate requirements your clients demand.',
  },
  {
    q: 'What is Products & Completed Operations coverage?',
    a: 'This extends your GL coverage after a job is completed. If a client later claims the foam you installed caused property damage or health issues, Products & Completed Ops coverage responds — protecting you from long-tail claims.',
  },
  {
    q: 'Does GL cover damage to my own equipment or property?',
    a: 'No. General Liability covers third-party claims only. Your own equipment, tools, and materials in transit are covered by Inland Marine / Rig Insurance. Property you\'re working on may be covered under Builder\'s Risk or Installation Floater.',
  },
  {
    q: 'Can I get GL coverage if I\'ve had claims?',
    a: 'Yes, in most cases. We work with multiple carriers and specialty markets that understand SPF contractors. Prior claims don\'t automatically disqualify you, though they may affect pricing. Share your claims history with us and we\'ll find the best available options.',
  },
  {
    q: 'How quickly can I get a certificate of insurance?',
    a: 'Once your policy is bound and payment is processed, we can issue certificates the same day — often within a few hours. We know contractors can\'t afford to lose jobs over paperwork delays.',
  },
];

export const workersCompFaqs: FAQItem[] = [
  {
    q: 'Is workers\' comp required for spray foam contractors?',
    a: "In almost every state, yes. Workers' comp is mandatory as soon as you have one employee. The specific requirements — including whether owners must cover themselves — vary by state. Operating without it can result in fines, stop-work orders, and personal liability for injured workers' medical bills.",
  },
  {
    q: "How are workers' comp rates calculated for spray foam contractors?",
    a: "Rates are based on your payroll (per $100 of payroll), the classification codes assigned to your workers (SPF work typically carries higher rates than general construction), your experience modification rate (EMR), and the state you operate in. A lower EMR means lower premiums — and we can help you achieve that with safety programs.",
  },
  {
    q: 'What is an experience modification rate (EMR)?',
    a: "Your EMR is a factor that adjusts your workers' comp premium based on your actual claims history compared to businesses of similar size and industry. An EMR of 1.0 is average. Below 1.0 means lower premiums; above 1.0 means higher premiums. Maintaining good safety practices directly saves you money.",
  },
  {
    q: 'Do I need workers\' comp if I only use subcontractors?',
    a: "Possibly. If your subcontractors don't have their own workers' comp coverage, many states will hold you responsible as the employer of record. We recommend verifying certificates of insurance from all subs and consulting us about your exposure.",
  },
  {
    q: 'What happens if I have a claim?',
    a: "Report the injury immediately, provide appropriate medical care, and notify us or your insurer right away. Timely reporting leads to better outcomes — injured workers who get prompt care return to work faster. We'll guide you through the claims process from start to finish.",
  },
];

export const commercialAutoFaqs: FAQItem[] = [
  {
    q: 'Do I need commercial auto if I only use my personal truck?',
    a: 'Yes, if you use your personal vehicle for business purposes — like hauling equipment or driving between job sites — you need commercial auto coverage. Personal auto policies typically exclude business use, meaning a claim could be denied if you\'re driving for work.',
  },
  {
    q: 'What is hired and non-owned auto coverage?',
    a: 'Hired auto covers vehicles your business rents or leases. Non-owned auto covers vehicles owned personally by your employees when used for business purposes. Both are important for spray foam contractors who may use rental trucks or have employees running business errands in their personal vehicles.',
  },
  {
    q: 'Does commercial auto cover my spray foam equipment inside the rig?',
    a: 'The vehicle itself is covered, but the spray equipment inside it — proportioners, generators, hoses — is typically covered under a separate Inland Marine / Rig Insurance policy. We can bundle both coverages together for comprehensive protection.',
  },
  {
    q: 'How are commercial auto rates calculated?',
    a: 'Rates depend on the number and type of vehicles, drivers\' MVR records, annual mileage, radius of operations, and your claims history. Spray foam rigs are rated differently than regular commercial trucks due to the hazardous materials they carry.',
  },
  {
    q: 'Can I add drivers mid-policy?',
    a: 'Yes. We can add or remove drivers from your policy as your team changes. New drivers are typically subject to an MVR check. It\'s important to list all regular drivers on the policy — unlisted drivers may not be covered in an accident.',
  },
];

export const suretyBondsFaqs: FAQItem[] = [
  {
    q: 'Is a surety bond the same as insurance?',
    a: 'No. Insurance protects you from losses. A surety bond protects the project owner or the public — and if a claim is paid, the surety has the right to seek reimbursement from you (the principal). Think of a bond as a credit product that guarantees your performance.',
  },
  {
    q: 'How much does a surety bond cost?',
    a: 'Bond premiums are typically 1–5% of the bond amount, depending on your credit score, financial history, and the type of bond. A $10,000 license bond might cost $75–$200/year. Performance bonds on large contracts are priced differently based on project risk.',
  },
  {
    q: 'Do I need good credit to get bonded?',
    a: 'Good credit makes bonding easier and cheaper, but many contractors with less-than-perfect credit can still get bonded through specialty markets. We work with multiple surety companies to find options for all credit profiles.',
  },
  {
    q: 'How long does it take to get a surety bond?',
    a: 'Small license and permit bonds can often be issued same-day or next-day. Larger contract bonds (performance and payment) may take a few days to a week, depending on the underwriting requirements and bond amount.',
  },
  {
    q: 'What happens if a bond claim is filed against me?',
    a: 'The surety will investigate the claim. If valid, the surety may pay the obligee and then seek reimbursement from you. This is why it\'s critical to fulfill your contractual obligations — bond claims can be very costly and affect your ability to get bonded in the future.',
  },
  {
    q: 'Do I need a surety bond and general liability insurance?',
    a: 'Yes — they serve different purposes. GL insurance protects you from accident claims. A surety bond guarantees your contractual performance. Most contractors need both. We can help you get both in a coordinated package.',
  },
];

export const environmentalFaqs: FAQItem[] = [
  {
    q: "Doesn't my general liability cover pollution?",
    a: "Standard GL policies contain a 'pollution exclusion' that can bar coverage for chemical-related claims. Environmental Liability Insurance fills this gap. For spray foam contractors who work with reactive chemicals daily, this exclusion is a significant exposure. We recommend all SPF contractors carry both GL and environmental liability.",
  },
  {
    q: 'What are isocyanates and why do they matter for insurance?',
    a: "Isocyanates (the A-side of SPF) are among the leading causes of occupational asthma. They're classified as potential carcinogens and are tightly regulated by OSHA and EPA. A single claim from a building occupant or worker alleging isocyanate-related illness can result in six-figure legal costs — exactly what environmental liability insurance is designed to cover.",
  },
  {
    q: 'Does environmental liability cover off-ratio foam?',
    a: 'Off-ratio foam (where the A and B components aren\'t properly mixed) can off-gas excessively and fail structurally. Environmental liability can cover third-party claims arising from off-ratio installations, including relocation costs, remediation, and property damage.',
  },
  {
    q: 'How much environmental liability coverage do I need?',
    a: 'Coverage needs vary by project type and location. A minimum of $1M per occurrence is common, with $2M+ for commercial projects or work near sensitive environments. Some project owners and GCs require $5M or more for large commercial work.',
  },
  {
    q: 'Can I bundle environmental liability with my GL policy?',
    a: "In many cases, yes. Depending on the carrier, we can add pollution liability as an endorsement to your GL policy or as a separate standalone policy. We'll evaluate your operations and recommend the most cost-effective approach.",
  },
];

export const rigEquipmentFaqs: FAQItem[] = [
  {
    q: 'Does my policy follow my rig to different states?',
    a: 'Yes — inland marine/rig insurance follows your equipment anywhere in the continental US. If you work in multiple states, your coverage travels with you.',
  },
  {
    q: 'What if my rig is stolen overnight on a job site?',
    a: 'Theft is a covered peril. File a police report immediately, document serial numbers and photos, and contact us. Most theft claims are processed within 24–48 hours.',
  },
  {
    q: 'Is my rig covered while being transported on a trailer?',
    a: 'Yes — inland marine insurance covers your equipment during transit, including while loaded on a trailer being towed.',
  },
  {
    q: 'Can I insure a used rig I just purchased?',
    a: 'Absolutely. Used rigs are insured at current market value or agreed value. We recommend a professional appraisal for rigs over $50K.',
  },
  {
    q: 'How does a claim affect my premium?',
    a: 'Filing a claim can affect your renewal premium, typically by 5–20% for a single claim. Contractors with 3+ years of claim-free history often qualify for experience credits.',
  },
  {
    q: 'What documentation do I need to insure my rig?',
    a: 'Serial numbers, purchase receipts or appraisals, photos, and current values for each major component. Manufacturer invoices work for newer equipment.',
  },
];

export const safetyComplianceFaqs: FAQItem[] = [
  {
    q: 'What respirator does OSHA require for spray foam application?',
    a: 'OSHA requires at minimum a supplied-air respirator (SAR) type CE with full-face piece during spray application. Standard N95 masks are NOT sufficient for isocyanate exposure. After the resin cures (typically 24 hours), workers may re-enter with appropriate half-mask respirators with organic vapor/P100 cartridges.',
  },
  {
    q: 'Do I need OSHA training certificates for my crew?',
    a: 'OSHA HazCom training is required for all workers handling isocyanate chemicals. Manufacturer application certification is typically required for product warranties. Document all training for every crew member.',
  },
  {
    q: 'Is spray foam considered hazardous by OSHA?',
    a: 'The isocyanate component (B-side) is regulated as a hazardous chemical under OSHA HazCom. It can cause occupational asthma with repeated exposure. Proper PPE, ventilation, and training are non-negotiable.',
  },
  {
    q: 'What insurance covers OSHA fines?',
    a: "Standard liability insurance does not cover OSHA fines, which are civil penalties. However, proper safety protocols reduce accident risk, keeping your Workers' Compensation and GL premiums lower and helping avoid claims.",
  },
  {
    q: 'How does safety compliance affect my premiums?',
    a: 'Insurers review your safety record, OSHA violation history, and training documentation when pricing policies. Contractors with documented safety programs and clean records typically receive better rates.',
  },
];

// ── Non-service secondary pages ───────────────────────────────────────────

export const aboutFaqs: FAQItem[] = [
  {
    q: 'What makes Spray Foam Insurance different from a general agent?',
    a: 'We focus exclusively on spray polyurethane foam contractors. That means we know the specific exclusions that trip up SPF contractors in standard policies, the carriers that price this risk fairly, and the coverage structures that actually protect you — not just check a box.',
  },
  {
    q: 'Are you licensed to write coverage in my state?',
    a: 'Yes. We place coverage for spray foam contractors in all 50 states. State licensing requirements, workers\' comp rules, and bond requirements vary — we handle that complexity so you don\'t have to.',
  },
  {
    q: 'How quickly can I get a quote?',
    a: 'Most contractors receive quote options within 24 hours of submitting their application. For straightforward GL or auto policies, same-day quotes are often possible. Complex bundled programs may take an extra day for underwriting.',
  },
  {
    q: 'What carriers do you work with?',
    a: 'We work with multiple A-rated carriers who specialize in contractor and specialty trade insurance. We shop your risk across several markets to find you the best combination of coverage and price — and we\'re not captive to any single carrier.',
  },
  {
    q: 'What if I already have insurance — can you review my existing coverage?',
    a: 'Absolutely. We offer free policy reviews for spray foam contractors who want a second opinion. We\'ll identify any coverage gaps, exclusions, or misclassifications in your current program and let you know if we can do better.',
  },
];

export const contactFaqs: FAQItem[] = [
  {
    q: 'How quickly can I get a quote?',
    a: 'Most spray foam contractors receive a quote within 1 business day. Call 844-967-5247 for same-day quotes on straightforward risks.',
  },
  {
    q: 'Do you work in all 50 states?',
    a: 'Yes — we provide spray foam insurance across all 50 states. Contact us to confirm availability of specialty coverages in your area.',
  },
  {
    q: 'Can I get a certificate of insurance same day?',
    a: 'Certificates for existing policies are typically issued within 1–2 hours during business hours. New policy certificates may take 1 business day.',
  },
  {
    q: 'Do you insure new contractors with no prior coverage?',
    a: "Yes — we work with contractors at all stages. New contractors may face slightly higher initial premiums but we'll find the best available rate.",
  },
  {
    q: 'What information do I need to get a quote?',
    a: 'Basic info needed: years in business, number of employees, annual revenue, states where you operate, and any prior claims history.',
  },
];

export const resourcesFaqs: FAQItem[] = [
  {
    q: 'Are these resources free?',
    a: 'Yes — all downloadable forms and guides are completely free for spray foam contractors. No sign-up required for most resources.',
  },
  {
    q: 'Do I need the work record form on every job?',
    a: 'While not legally required in all states, maintaining detailed work records is strongly recommended for warranty documentation, insurance claims, and client trust.',
  },
  {
    q: 'What is an attic insulation certificate?',
    a: 'An official document recording the type, depth, and R-value of insulation installed in an attic. Many energy rebate programs and home sales require them.',
  },
  {
    q: 'How do I stay OSHA compliant as a spray foam contractor?',
    a: 'OSHA requires proper PPE including supplied-air respirators during application, ventilation standards, and chemical handling procedures for isocyanate products. Our safety guide covers all key requirements.',
  },
];

export const inlandMarineFaqs: FAQItem[] = [
  {
    q: 'Is my equipment covered while in transit?',
    a: 'Yes — inland marine insurance covers your equipment on the road, at job sites, in storage, and at your shop. Unlike commercial property insurance limited to a fixed location, inland marine follows your equipment everywhere.',
  },
  {
    q: 'Does my commercial auto policy cover my rig?',
    a: 'Commercial auto covers the vehicle for collision and liability, but typically does NOT cover the equipment inside the trailer. You need a separate inland marine policy to cover the proportioner, hoses, and tools.',
  },
  {
    q: 'What if my equipment is stolen from a job site?',
    a: 'Theft is a covered peril under most inland marine policies. File a police report immediately and document serial numbers. Most theft claims are processed within 24–48 hours.',
  },
  {
    q: 'How much does inland marine insurance cost for a spray foam contractor?',
    a: 'Most spray foam contractors pay between $1,200 and $4,000 annually for a comprehensive inland marine policy, depending on total equipment value, deductible, and claims history.',
  },
];

export const rigInsuranceFaqs: FAQItem[] = [
  {
    q: 'Do I need to list every piece of equipment separately?',
    a: 'For high-value items like proportioners (over $10K), we recommend scheduling them individually. Smaller tools can often be covered under a blanket inland marine limit.',
  },
  {
    q: 'What deductible should I choose for my rig?',
    a: 'Most spray foam contractors choose $1,000–$2,500 deductibles. Higher deductibles reduce your annual premium but mean more out-of-pocket costs if you file a claim.',
  },
  {
    q: 'Does inland marine cover breakdowns from normal wear and tear?',
    a: 'No — inland marine covers sudden accidental physical loss (theft, fire, collision, vandalism). Mechanical breakdown insurance is a separate product.',
  },
  {
    q: 'Can I add my rig to an existing business policy?',
    a: 'In some cases inland marine can be added as an endorsement to your commercial package policy. We will review your current coverage and find the most cost-effective structure.',
  },
  {
    q: 'What documentation do I need to insure my rig?',
    a: 'Serial numbers, purchase receipts or appraisals, photos, and current values. Manufacturer invoices work for newer equipment.',
  },
];

export const blogFaqs: FAQItem[] = [
  {
    q: 'How often is the blog updated?',
    a: 'We publish new articles regularly covering coverage updates, industry regulations, safety guidance, and risk management tips for spray foam contractors. Bookmark this page to stay current.',
  },
  {
    q: 'Can blog articles help me choose the right insurance?',
    a: 'Our guides explain the differences between coverage types, what exclusions to watch for, and how to evaluate your total insurance program. They\'re written to help SPF contractors make informed decisions — not to replace a direct conversation with our specialists.',
  },
  {
    q: 'Are these articles specific to spray foam contractors?',
    a: 'Yes. Every article is written from the perspective of spray polyurethane foam operations, not generic construction insurance. Topics include overspray liability, isocyanate exposure, rig coverage gaps, state workers\' comp requirements, and more.',
  },
  {
    q: 'How do I get insurance advice beyond the blog?',
    a: 'Call 844-967-5247 or fill out the quote form. Our specialists are available Monday–Friday 8am–6pm CST and can answer coverage questions specific to your operation at no charge.',
  },
];
