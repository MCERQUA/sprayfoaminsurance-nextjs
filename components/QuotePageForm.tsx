'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import FormCard from '@/components/FormCard';

// Delivered via Netlify Forms (form registered in public/__forms.html as
// "quote-detailed"). Netlify's submission-created function
// (netlify/functions/submission-created.js) forwards the flattened submission
// into Josh's lead pipeline. Deliberately NO client-side webhook fetch here —
// a second fire-and-forget POST duplicated every lead and swallowed its own
// failures. Netlify Forms + the function is the single supported path.

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const GL_AMOUNTS = ['$500,000/$1,000,000', '$1,000,000/$1,000,000', '$1,000,000/$2,000,000', 'Not Needed'];
const WC_AMOUNTS = ['$100,000', '$500,000', '$1,000,000', 'Not Needed'];
const AUTO_AMOUNTS = ['$100,000', '$500,000', '$1,000,000', 'Not Needed'];
const SURETY_AMOUNTS = ['$5,000', '$10,000', '$100,000'];

interface FormState {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  message: string;
  fein: string;
  grossSales: string;
  employeeCount: string;
  employeePayroll: string;
  subcontractorExpenses: string;
  materialCosts: string;
  gl_amount: string;
  wc_amount: string;
  auto_amount: string;
  surety_amount: string;
  effective_date: string;
  years_in_business: string;
  current_carrier: string;
  losses_3yr_count: string;
  losses_3yr_details: string;
  // ACORD-core-gap additions (2026-11-13, joshdesk-2 audit — see gap table in
  // the mesh report). All optional, matching this form's existing low-friction
  // pattern. No #1301 fields (DL/DOB/SSN/policy-number) — none added, none
  // pre-existing.
  entityType: string;
  businessDescription: string;
  statesOfOperation: string;
  usesSubcontractors: string;
  largestProjectValue: string;
  currentlyInsured: string;
  currentPolicyExpiration: string;
  currentLimits: string;
  lossesLast3Years: string;
  additionalInsuredNeeded: string;

  // ── ACORD 125/126/140 full gap-fill (2026-11-14, joshmac/desk-1 audit
  // against ~/josh-desk-1/_shared/ACORD-125-126-140-FIELDS.md, the literal
  // 924-field PDF spec — supersedes the lighter ACORD-CORE-WEB-SPEC pass
  // above). All optional, same low-friction convention as the rest of this
  // form. Deliberately NOT added: Applicant Signature, Applicant Date,
  // Applicant Initials — those are part of the formal application
  // e-signature step, not a marketing quote-intake form; see mesh report.

  // Required-from-client gaps (9)
  sic: string;
  naics: string;
  expirationDate: string;
  county: string;
  fullTimeEmployees: string;
  partTimeEmployees: string;
  locationDescription: string;
  businessStartDate: string;
  workSubcontractedPercent: string;

  // Required selections (5 new groups; entityType above gets new options)
  glTrigger: string;
  glAggregateAppliesTo: string;
  premisesCityLimits: string;
  premisesInterest: string;
  billingPlan: string;

  // 57 Yes/No underwriting questions — see YES_NO_QUESTIONS below for the
  // field->label->ACORD-field mapping. Declared as a single indexable record
  // so the interface doesn't need 57 repeated lines.
  yn: Record<string, string>;

  // 35 "explain if Yes" follow-ups — see FOLLOWUP_MAP below.
  ynExplain: Record<string, string>;

  // Conditional selections (only meaningful when their trigger question is Yes)
  safetyProgramElements: string[];
  athleticTeamAgeGroup: string;
  poolConstruction: string;
  poolSafetyFeatures: string[];

  // Loss history — required tick (None vs a detail row); kept separate from
  // the existing lossesLast3Years/losses_3yr_count/losses_3yr_details fields
  // above, which predate this audit and are left untouched.
  lossHistoryStatus: string;
  lossDate: string;
  lossDescription: string;
  lossAmountPaid: string;
  lossAmountReserved: string;

  // Strongly recommended (15 of 16 — Applicant Initials excluded, see note above)
  paymentPlan: string;
  paymentMethod: string;
  auditRequired: string;
  workSubcontractedDescription: string;
  publicAreaSqFt: string;
  installationServiceRepairPercent: string;
  retailPercent: string;
  glCode: string;
  numberOfMembers: string;
  isContractor: string;
  offPremisesInstallPercent: string;
  buildingAreaSqFt: string;
  occupiedAreaSqFt: string;
  namedInsuredWebsite: string;
  generalRemarks: string;
}

const EMPTY_FORM: FormState = {
  businessName: '', name: '', email: '', phone: '',
  address: '', city: '', state: '', zip: '',
  message: '', fein: '', grossSales: '', employeeCount: '',
  employeePayroll: '', subcontractorExpenses: '', materialCosts: '',
  gl_amount: '', wc_amount: '', auto_amount: '', surety_amount: '',
  effective_date: '', years_in_business: '', current_carrier: '',
  losses_3yr_count: '', losses_3yr_details: '',
  entityType: '', businessDescription: '', statesOfOperation: '',
  usesSubcontractors: '', largestProjectValue: '', currentlyInsured: '',
  currentPolicyExpiration: '', currentLimits: '', lossesLast3Years: '',
  additionalInsuredNeeded: '',

  sic: '', naics: '', expirationDate: '', county: '',
  fullTimeEmployees: '', partTimeEmployees: '', locationDescription: '',
  businessStartDate: '', workSubcontractedPercent: '',

  glTrigger: '', glAggregateAppliesTo: '', premisesCityLimits: '',
  premisesInterest: '', billingPlan: '',

  yn: {},
  ynExplain: {},

  safetyProgramElements: [], athleticTeamAgeGroup: '',
  poolConstruction: '', poolSafetyFeatures: [],

  lossHistoryStatus: '', lossDate: '', lossDescription: '',
  lossAmountPaid: '', lossAmountReserved: '',

  paymentPlan: '', paymentMethod: '', auditRequired: '',
  workSubcontractedDescription: '', publicAreaSqFt: '',
  installationServiceRepairPercent: '', retailPercent: '', glCode: '',
  numberOfMembers: '', isContractor: '', offPremisesInstallPercent: '',
  buildingAreaSqFt: '', occupiedAreaSqFt: '', namedInsuredWebsite: '',
  generalRemarks: '',
};

const YES_NO = ['Yes', 'No'];

// ── 57 Yes/No underwriting questions (ACORD-125-126-140-FIELDS.md "Yes/No
// questions the client must answer"). `kind: 'checkbox'` = tick for Yes,
// leave clear for No (a clear box IS a valid No on these specific items,
// per the spec's own "How to answer" column). `kind: 'radio'` = write the
// literal Y/N string; both must be explicitly answered.
interface YnQuestion {
  key: string;
  label: string;
  kind: 'checkbox' | 'radio';
  acordField: string;
}

const YES_NO_QUESTIONS: YnQuestion[] = [
  { key: 'buildingLeasedToOthers', label: 'Is Building Leased to Others?', kind: 'radio', acordField: 'ACORD_Location1_LeasedToOthers' },
  { key: 'applicantSubsidiary', label: 'Is Applicant a Subsidiary?', kind: 'checkbox', acordField: 'ACORD_General_Subsidiary' },
  { key: 'applicantHasSubsidiaries', label: 'Does Applicant Have Subsidiaries?', kind: 'checkbox', acordField: 'ACORD_General_Parent' },
  { key: 'safetyProgramsExist', label: 'Do Safety Programs Exist?', kind: 'checkbox', acordField: 'ACORD_General_Safety' },
  { key: 'exposureFlammables', label: 'Any Exposure to Flammables, Explosives, Chemicals?', kind: 'checkbox', acordField: 'ACORD_General_Exposure' },
  { key: 'otherInsurance', label: 'Any Other Insurance with This Company?', kind: 'checkbox', acordField: 'ACORD_General_OtherInsurance' },
  { key: 'coverageTerminated', label: 'Has a Policy Coverage Ever Been Terminated?', kind: 'checkbox', acordField: 'ACORD_General_CoverageTerminated' },
  { key: 'pastAllegations', label: 'Past Allegations of Abuse, Molestation, or Discrimination?', kind: 'checkbox', acordField: 'ACORD_General_PastAllegations' },
  { key: 'indictedOrConvicted', label: 'Any Indictments or Convictions?', kind: 'checkbox', acordField: 'ACORD_General_IndictedOrConvicted' },
  { key: 'safetyViolations', label: 'Any Uncorrected Fire and/or Safety Violations?', kind: 'checkbox', acordField: 'ACORD_General_SafetyViolations' },
  { key: 'negativeFinancialAction', label: 'Any Past Negative Financial Action?', kind: 'checkbox', acordField: 'ACORD_General_NegativeFinancialAction' },
  { key: 'judgementOrLien', label: 'Any Judgement or Lien?', kind: 'checkbox', acordField: 'ACORD_General_JudgementLien' },
  { key: 'businessInTrust', label: 'Has the Business Been Placed in a Trust?', kind: 'checkbox', acordField: 'ACORD_General_Trust' },
  { key: 'foreignOperations', label: 'Any Foreign Operations or Products?', kind: 'checkbox', acordField: 'ACORD_General_Foreign' },
  { key: 'otherVentures', label: 'Do Other Ventures Exist?', kind: 'checkbox', acordField: 'ACORD_General_OtherVentures' },
  { key: 'possessDrones', label: 'Does Applicant Possess Drones?', kind: 'checkbox', acordField: 'ACORD_General_PossessDrones' },
  { key: 'hireDroneOperators', label: 'Does Applicant Hire Drone Operators?', kind: 'checkbox', acordField: 'ACORD_General_HireDrones' },
  { key: 'priorExclusionUninsured', label: 'Has Any Product, Work, Accident or Location Been Excluded, Uninsured or Self-Insured from Any Previous Coverage?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAHCode_A' },
  { key: 'tailCoveragePurchased', label: 'Was Tail Coverage Purchased Under Any Previous Policy?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAICode_A' },
  { key: 'drawsPlansForOthers', label: 'Does Applicant Draw Plans, Designs or Specifications for Others?', kind: 'radio', acordField: 'Contractors_Question_AABCode_A' },
  { key: 'blastingOrExplosives', label: 'Do Any Operations Include Blasting, or Utilize/Store Explosive Material?', kind: 'radio', acordField: 'Contractors_Question_AAICode_A' },
  { key: 'excavationOrEarthMoving', label: 'Does Any Operation Involve Excavation, Tunneling, Underground Work or Earth Moving?', kind: 'radio', acordField: 'Contractors_Question_AACCode_A' },
  { key: 'subsRequireLowerLimits', label: 'Do Subcontractors Carry Coverages or Limits Less Than Applicant?', kind: 'radio', acordField: 'Contractors_Question_ABBCode_A' },
  { key: 'subsWorkWithoutCOI', label: 'Are Subcontractors Allowed to Work Without Providing a Certificate of Insurance?', kind: 'radio', acordField: 'Contractors_Question_AADCode_A' },
  { key: 'leaseEquipmentToOthers', label: 'Does Applicant Lease Equipment to Others, With or Without Operators?', kind: 'radio', acordField: 'Contractors_Question_AAECode_A' },
  { key: 'installServiceDemoProducts', label: 'Does Applicant Install, Service or Demonstrate Products?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAJCode_A' },
  { key: 'foreignProducts', label: 'Foreign Products Sold, Distributed, or Used as Components?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABACode_A' },
  { key: 'researchAndDevelopment', label: 'Research and Development Conducted, or New Products Planned?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABBCode_A' },
  { key: 'guaranteesWarranties', label: 'Guarantees, Warranties, or Hold Harmless Agreements?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABCCode_A' },
  { key: 'aircraftSpaceProducts', label: 'Products Related to the Aircraft/Space Industry?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABDCode_A' },
  { key: 'productsRecalled', label: 'Products Recalled, Discontinued, or Changed?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABECode_A' },
  { key: 'productsRepackagedUnderLabel', label: 'Products of Others Sold or Repackaged Under Applicant Label?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABFCode_A' },
  { key: 'productsUnderOthersLabel', label: 'Products Sold Under the Label of Others?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABGCode_A' },
  { key: 'vendorsCoverageRequired', label: 'Vendors Coverage Required?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABHCode_A' },
  { key: 'sellsToOtherNamedInsured', label: 'Does Any Named Insured Sell to Another Named Insured?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABICode_A' },
  { key: 'medicalFacilities', label: 'Any Medical Facilities Provided, or Medical Professionals Employed/Contracted?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ABJCode_A' },
  { key: 'radioactiveExposure', label: 'Any Exposure to Radioactive/Nuclear Materials?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACACode_A' },
  { key: 'hazardousMaterialOps', label: 'Do/Have Past, Present or Discontinued Operations Involved Storing, Treating, Discharging, Applying, Disposing or Transporting Hazardous Material?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACJCode_A' },
  { key: 'operationsSoldAcquired', label: 'Any Operations Sold, Acquired or Discontinued in the Last 5 Years?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACBCode_A' },
  { key: 'rentOrLoanEquipment', label: 'Do You Rent or Loan Equipment to Others?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACCCode_A' },
  { key: 'watercraftDocksFloats', label: 'Any Watercraft, Docks or Floats Owned, Hired or Leased?', kind: 'radio', acordField: 'Contractors_Question_AAHCode_A' },
  { key: 'parkingFacilities', label: 'Any Parking Facilities Owned or Rented?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACDCode_A' },
  { key: 'parkingFeeCharged', label: 'Is a Fee Charged for Parking?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_KAGCode_A' },
  { key: 'recreationFacilities', label: 'Recreation Facilities Provided?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACECode_A' },
  { key: 'lodgingOperations', label: 'Are There Any Lodging Operations, Including Apartments?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_KAACode_A' },
  { key: 'swimmingPool', label: 'Is There a Swimming Pool on the Premises?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_KAHCode_A' },
  { key: 'socialEvents', label: 'Are Social Events Sponsored?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACFCode_A' },
  { key: 'athleticTeams', label: 'Are Athletic Teams Sponsored?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_KABCode_A' },
  { key: 'structuralAlterations', label: 'Any Structural Alterations Contemplated?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACGCode_A' },
  { key: 'demolitionExposure', label: 'Any Demolition Exposure Contemplated?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_ACHCode_A' },
  { key: 'activeJointVentures', label: 'Has Applicant Been Active in, or Is Currently Active in, Joint Ventures?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AABCode_A' },
  { key: 'leaseEmployees', label: 'Do You Lease Employees to or from Other Employers?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AACCode_A' },
  { key: 'laborInterchange', label: 'Is There a Labor Interchange with Any Other Business or Subsidiaries?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AADCode_A' },
  { key: 'dayCareFacilities', label: 'Are Day Care Facilities Operated or Controlled?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAECode_A' },
  { key: 'crimesOnPremises', label: 'Have Any Crimes Occurred or Been Attempted on Your Premises Within the Last 3 Years?', kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAFCode_A' },
  { key: 'formalSafetyPolicy', label: 'Is There a Formal, Written Safety and Security Policy in Effect?', kind: 'radio', acordField: 'Contractors_Question_AAGCode_A' },
  { key: 'promotionalSafetyClaims', label: "Does the Business' Promotional Literature Make Any Representation About the Safety or Security of the Premises?", kind: 'radio', acordField: 'GeneralLiabilityLineOfBusiness_Question_AAGCode_A' },
];

// ── 35 "explain if Yes" follow-ups (ACORD-125-126-140-FIELDS.md "Follow-ups
// required when a question is answered Yes"). Keyed by the YES_NO_QUESTIONS
// key above whose answer triggers it. maxLength matches the PDF box's real
// display limit (136 chars for all but one 72-char box) so nothing silently
// clips mid-word on the printed form later.
const FOLLOWUP_MAP: Record<string, { label: string; maxLength: number }> = {
  priorExclusionUninsured: { label: 'Please explain', maxLength: 136 },
  tailCoveragePurchased: { label: 'Please explain', maxLength: 136 },
  drawsPlansForOthers: { label: 'Please explain', maxLength: 136 },
  blastingOrExplosives: { label: 'Please explain', maxLength: 136 },
  excavationOrEarthMoving: { label: 'Please explain', maxLength: 136 },
  subsRequireLowerLimits: { label: 'Please explain', maxLength: 136 },
  subsWorkWithoutCOI: { label: 'Please explain', maxLength: 136 },
  leaseEquipmentToOthers: { label: 'Please explain', maxLength: 136 },
  watercraftDocksFloats: { label: 'Please explain', maxLength: 136 },
  formalSafetyPolicy: { label: 'Please explain', maxLength: 136 },
  installServiceDemoProducts: { label: 'Please explain', maxLength: 136 },
  researchAndDevelopment: { label: 'Please explain', maxLength: 136 },
  guaranteesWarranties: { label: 'Please explain', maxLength: 136 },
  aircraftSpaceProducts: { label: 'Please explain', maxLength: 136 },
  productsRecalled: { label: 'Please explain', maxLength: 136 },
  productsRepackagedUnderLabel: { label: 'Please explain', maxLength: 136 },
  productsUnderOthersLabel: { label: 'Please explain', maxLength: 136 },
  vendorsCoverageRequired: { label: 'Please explain', maxLength: 136 },
  sellsToOtherNamedInsured: { label: 'Please explain', maxLength: 136 },
  medicalFacilities: { label: 'Please explain', maxLength: 136 },
  radioactiveExposure: { label: 'Please explain', maxLength: 136 },
  hazardousMaterialOps: { label: 'Please explain', maxLength: 136 },
  operationsSoldAcquired: { label: 'Please explain', maxLength: 136 },
  rentOrLoanEquipment: { label: 'Please explain', maxLength: 72 },
  parkingFacilities: { label: 'Please explain', maxLength: 136 },
  parkingFeeCharged: { label: 'Please explain', maxLength: 136 },
  recreationFacilities: { label: 'Please explain', maxLength: 136 },
  socialEvents: { label: 'Please explain', maxLength: 136 },
  structuralAlterations: { label: 'Please explain', maxLength: 136 },
  demolitionExposure: { label: 'Please explain', maxLength: 136 },
  activeJointVentures: { label: 'Please explain', maxLength: 136 },
  laborInterchange: { label: 'Please explain', maxLength: 136 },
  dayCareFacilities: { label: 'Please explain', maxLength: 136 },
  crimesOnPremises: { label: 'Please explain', maxLength: 136 },
  promotionalSafetyClaims: { label: 'Please explain', maxLength: 136 },
};

const inputBase =
  'w-full bg-background border border-primary/20 rounded-lg px-4 py-2.5 text-text text-sm focus:outline-none focus:border-primary/50 placeholder:text-muted';

const labelBase = 'block text-sm font-label font-semibold text-text mb-1.5';

export default function QuotePageForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function handleField(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Answer to one of the 57 Yes/No questions — 'Yes'/'No' for radio-kind,
  // 'Yes'/'' for checkbox-kind (clear box = valid, unanswered No).
  function handleYn(key: string, value: string) {
    setForm((prev) => ({ ...prev, yn: { ...prev.yn, [key]: value } }));
  }

  function handleYnExplain(key: string, value: string) {
    setForm((prev) => ({ ...prev, ynExplain: { ...prev.ynExplain, [key]: value } }));
  }

  // Multi-select checkbox groups (safetyProgramElements, poolSafetyFeatures) —
  // only ever string[] fields on FormState.
  function handleCheckboxArray(
    field: 'safetyProgramElements' | 'poolSafetyFeatures',
    value: string,
    checked: boolean,
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((v) => v !== value),
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 2026-08-27: these forms carry `noValidate`, and nothing replaced the native
    // checks — a submission with no name, email or phone could be sent, producing a
    // lead nobody can contact back. Run the browser's own constraint validation
    // before building the payload.
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setSubmitting(true);
    setError(false);

    const body = new URLSearchParams();
    body.append('form-name', 'quote-detailed');
    // Flat string fields: every FormState key except the nested/array ones,
    // which are flattened separately below with their own flat field names
    // (Netlify Forms — and public/__forms.html's static detection — need one
    // flat name per field, not a nested object).
    const NESTED_KEYS = new Set(['yn', 'ynExplain', 'safetyProgramElements', 'poolSafetyFeatures']);
    (Object.keys(form) as (keyof FormState)[])
      .filter((k) => !NESTED_KEYS.has(k as string))
      .forEach((k) => body.append(k, form[k] as string));

    YES_NO_QUESTIONS.forEach((q) => body.append(`yn_${q.key}`, form.yn[q.key] ?? ''));
    Object.keys(FOLLOWUP_MAP).forEach((key) =>
      body.append(`ynExplain_${key}`, form.ynExplain[key] ?? ''),
    );
    body.append('safetyProgramElements', form.safetyProgramElements.join(', '));
    body.append('poolSafetyFeatures', form.poolSafetyFeatures.join(', '));

    body.append('form_type', 'quote-request');
    body.append('source_site', 'sprayfoaminsurance');

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <FormCard title="Request Received">
        <div className="flex flex-col items-center text-center py-8 gap-4">
          <CheckCircle className="w-14 h-14 text-accent" />
          <p className="text-muted text-sm leading-relaxed max-w-sm">
            Thanks — we&apos;ll review your information and get back to you within one
            business day with your personalized quote.
          </p>
          <button
            onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); }}
            className="mt-2 text-xs text-muted hover:text-text underline transition-colors"
          >
            Submit another request
          </button>
        </div>
      </FormCard>
    );
  }

  function radioGroup(
    field: keyof FormState,
    options: string[],
  ) {
    return (
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
            <input
              type="radio"
              name={field}
              value={opt}
              checked={form[field] === opt}
              onChange={handleField}
              className="accent-primary"
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  // One Yes/No underwriting question, rendered per its spec `kind`, plus its
  // conditional "explain if Yes" follow-up when FOLLOWUP_MAP has one and the
  // answer is actually Yes/checked.
  function ynQuestion(q: YnQuestion) {
    const follow = FOLLOWUP_MAP[q.key];
    const answer = form.yn[q.key] ?? '';
    const isYes = q.kind === 'checkbox' ? answer === 'Yes' : answer === 'Yes';

    return (
      <div key={q.key} className="mb-4">
        {q.kind === 'checkbox' ? (
          <label className="flex items-center gap-2 text-sm text-muted cursor-pointer">
            <input
              type="checkbox"
              name={`yn_${q.key}`}
              checked={isYes}
              onChange={(e) => handleYn(q.key, e.target.checked ? 'Yes' : '')}
              className="w-4 h-4 accent-primary"
            />
            {q.label}
          </label>
        ) : (
          <>
            <p className="text-sm text-muted mb-1.5">{q.label}</p>
            <div className="flex gap-5">
              {YES_NO.map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
                  <input
                    type="radio"
                    name={`yn_${q.key}`}
                    value={opt}
                    checked={answer === opt}
                    onChange={() => handleYn(q.key, opt)}
                    className="accent-primary"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </>
        )}

        {follow && isYes && (
          <div className="mt-2">
            <textarea
              name={`ynExplain_${q.key}`}
              rows={2}
              maxLength={follow.maxLength}
              placeholder={follow.label}
              value={form.ynExplain[q.key] ?? ''}
              onChange={(e) => handleYnExplain(q.key, e.target.value)}
              className={inputBase + ' resize-none'}
            />
          </div>
        )}
      </div>
    );
  }

  function checkboxArrayGroup(
    field: 'safetyProgramElements' | 'poolSafetyFeatures',
    options: string[],
  ) {
    return (
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm text-muted cursor-pointer">
            <input
              type="checkbox"
              name={field}
              value={opt}
              checked={form[field].includes(opt)}
              onChange={(e) => handleCheckboxArray(field, opt, e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            {opt}
          </label>
        ))}
      </div>
    );
  }

  return (
    <FormCard title="Sign Up Form">
      <form
        onSubmit={handleSubmit}
        name="quote-detailed"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
      >
        {/* Netlify form-name + honeypot (hidden) */}
        <input type="hidden" name="form-name" value="quote-detailed" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" onChange={handleField} />
          </label>
        </p>

        <div className="mb-4">
          <label htmlFor="qp-businessName" className={labelBase}>Business Name *</label>
          <input
            id="qp-businessName" name="businessName" type="text"
            autoComplete="organization"
            placeholder="E.g. Smith Spray Foam LLC"
            value={form.businessName} onChange={handleField} className={inputBase}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-entityType" className={labelBase}>Business Entity Type</label>
          <select
            id="qp-entityType" name="entityType"
            value={form.entityType} onChange={handleField}
            className={inputBase + ' appearance-none cursor-pointer'}
          >
            {/* Options match the PDF's own single-select list exactly (ACORD_Policy_Insured1_Type_*)
                so a pick here always ticks a real box later — "Other" was dropped because it
                doesn't map to any of the 8. */}
            <option value="">Select…</option>
            <option value="Individual">Individual / Sole Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="Corporation">Corporation</option>
            <option value="LLC">LLC</option>
            <option value="Joint Venture">Joint Venture</option>
            <option value="Not For Profit">Not For Profit</option>
            <option value="S Corporation">S Corporation</option>
            <option value="Trust">Trust</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-name" className={labelBase}>Full Name *</label>
          <input
            id="qp-name" name="name" type="text" required
            autoComplete="name"
            placeholder="E.g. Jane Smith"
            value={form.name} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-email" className={labelBase}>Email Address *</label>
            <input
              id="qp-email" name="email" type="email" required
              autoComplete="email"
              placeholder="E.g. jane@smithfoam.com"
              value={form.email} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-phone" className={labelBase}>Phone Number *</label>
            <input
              id="qp-phone" name="phone" type="tel" required
              autoComplete="tel"
              placeholder="E.g. (480) 555-0142"
              value={form.phone} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-address" className={labelBase}>Street Address *</label>
          <input
            id="qp-address" name="address" type="text" required
            autoComplete="street-address"
            placeholder="E.g. 1200 W Chandler Blvd"
            value={form.address} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-city" className={labelBase}>City *</label>
            <input
              id="qp-city" name="city" type="text" required
              autoComplete="address-level2"
              placeholder="E.g. Chandler"
              value={form.city} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-state" className={labelBase}>State *</label>
            <select
              id="qp-state" name="state" required
              value={form.state} onChange={handleField}
              className={inputBase + ' appearance-none cursor-pointer'}
            >
              <option value="" disabled>Select…</option>
              {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="qp-zip" className={labelBase}>ZIP Code *</label>
            <input
              id="qp-zip" name="zip" type="text" required
              autoComplete="postal-code"
              placeholder="E.g. 85249"
              value={form.zip} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-message" className={labelBase}>Message</label>
          <textarea
            id="qp-message" name="message" rows={3} maxLength={180}
            placeholder="Please let us know how we can help you best. Tell us about your business-are you only doing spray foam insulation, roofing, slab jacking? What percent new versus remodel? What percent commercial versus residential? What price do we need to beat?"
            value={form.message} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-businessDescription" className={labelBase}>Business Description</label>
          <textarea
            id="qp-businessDescription" name="businessDescription" rows={2}
            placeholder="What does your business do day to day? (e.g. new construction spray foam insulation, foam concrete lifting, SPF roofing)"
            value={form.businessDescription} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-statesOfOperation" className={labelBase}>States Where You Perform Work</label>
          <input
            id="qp-statesOfOperation" name="statesOfOperation" type="text"
            placeholder="E.g. AZ, NV, CA (if different from your business address state)"
            value={form.statesOfOperation} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qp-fein" className={labelBase}>FEIN</label>
          <input
            id="qp-fein" name="fein" type="text"
            placeholder="Helps us shop more carriers. Required for Workers Compensation Insurance quotes."
            value={form.fein} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-grossSales" className={labelBase}>Gross Sales</label>
            <input
              id="qp-grossSales" name="grossSales" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.grossSales} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-employeeCount" className={labelBase}>Employee count</label>
            <input
              id="qp-employeeCount" name="employeeCount" type="text"
              placeholder="E.g. 10"
              value={form.employeeCount} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-employeePayroll" className={labelBase}>Employee Payroll</label>
            <input
              id="qp-employeePayroll" name="employeePayroll" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.employeePayroll} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-subcontractorExpenses" className={labelBase}>Subcontractor expenses</label>
            <input
              id="qp-subcontractorExpenses" name="subcontractorExpenses" type="text"
              placeholder="Estimate Next 12 Months"
              value={form.subcontractorExpenses} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-materialCosts" className={labelBase}>Material Costs</label>
          <input
            id="qp-materialCosts" name="materialCosts" type="text"
            placeholder="Estimate Next 12 Months"
            value={form.materialCosts} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="mb-4">
          <p className={labelBase}>Do you use subcontractors?</p>
          {radioGroup('usesSubcontractors', YES_NO)}
        </div>

        <div className="mb-6">
          <label htmlFor="qp-largestProjectValue" className={labelBase}>Largest Single Project Value</label>
          <input
            id="qp-largestProjectValue" name="largestProjectValue" type="text"
            placeholder="E.g. $250,000"
            value={form.largestProjectValue} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-effective_date" className={labelBase}>Requested Coverage Start Date</label>
            <input
              id="qp-effective_date" name="effective_date" type="date"
              value={form.effective_date} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-years_in_business" className={labelBase}>Years in Business</label>
            <input
              id="qp-years_in_business" name="years_in_business" type="number"
              value={form.years_in_business} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className={labelBase}>Are you currently insured?</p>
          {radioGroup('currentlyInsured', YES_NO)}
        </div>

        <div className="mb-4">
          <label htmlFor="qp-current_carrier" className={labelBase}>Current or Most Recent Insurance Carrier</label>
          <input
            id="qp-current_carrier" name="current_carrier" type="text"
            value={form.current_carrier} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-currentPolicyExpiration" className={labelBase}>Current Policy Expiration Date</label>
            <input
              id="qp-currentPolicyExpiration" name="currentPolicyExpiration" type="date"
              value={form.currentPolicyExpiration} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-currentLimits" className={labelBase}>Current Limits Held</label>
            <input
              id="qp-currentLimits" name="currentLimits" type="text"
              placeholder="E.g. $1M/$2M"
              value={form.currentLimits} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className={labelBase}>Any claims/losses in the last 3 years?</p>
          {radioGroup('lossesLast3Years', YES_NO)}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-losses_3yr_count" className={labelBase}>Claims in the Last 3 Years</label>
            <input
              id="qp-losses_3yr_count" name="losses_3yr_count" type="number"
              value={form.losses_3yr_count} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="qp-losses_3yr_details" className={labelBase}>Claim Details: Dates, What Happened, Amounts</label>
          <textarea
            id="qp-losses_3yr_details" name="losses_3yr_details" rows={3}
            value={form.losses_3yr_details} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <div className="mb-6">
          <p className={labelBase}>Do you need an Additional Insured added to your policy?</p>
          {radioGroup('additionalInsuredNeeded', YES_NO)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            How much Spray Foam General Liability Insurance coverage?
          </p>
          <p className="text-xs text-muted mb-2">
            Select the amount of spray foam insurance coverage you are looking for.
          </p>
          {radioGroup('gl_amount', GL_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            Workers Compensation Insurance for Your Spray Foam Installers and Other Employees
          </p>
          <p className="text-xs text-muted mb-2">
            Select the amount of spray foam workers comp coverage you would like quoted.
          </p>
          {radioGroup('wc_amount', WC_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">
            Commercial Auto Insurance for Your Spray Rig
          </p>
          <p className="text-xs text-muted mb-2">
            Please email a picture of your drivers license, current auto policy info, and vin
            number/registration to Josh@sprayfoaminsurance.com, or call 844-967-5247.
          </p>
          {radioGroup('auto_amount', AUTO_AMOUNTS)}
        </div>

        <div className="mb-6">
          <p className="text-sm font-label font-semibold text-text mb-1">Spray Foam Surety Bond</p>
          <p className="text-xs text-muted mb-2">
            There are many different surety amounts if you don&apos;t see what you need call or email.
          </p>
          {radioGroup('surety_amount', SURETY_AMOUNTS)}
        </div>

        {/* ══════════════════════════════════════════════════════════════
            ACORD 125/126/140 FULL GAP-FILL (2026-11-14, joshmac/desk-1)
            Everything below is additional to the form above — nothing
            existing was removed or renamed. See FormState comments for
            what was deliberately left out (signature/initials) and why.
            ══════════════════════════════════════════════════════════════ */}

        <div className="mt-2 mb-6 pt-6 border-t border-black/10">
          <p className="font-headline font-bold text-text text-base mb-1">
            A Few More Underwriting Details
          </p>
          <p className="text-xs text-muted">
            Everything below is optional, but the more you fill in now, the fewer follow-up
            calls we need before we can get your application to carriers.
          </p>
        </div>

        {/* ── Required-from-client gaps ── */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-county" className={labelBase}>County</label>
            <input
              id="qp-county" name="county" type="text" maxLength={19}
              value={form.county} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-businessStartDate" className={labelBase}>Date Business Started</label>
            <input
              id="qp-businessStartDate" name="businessStartDate" type="date"
              value={form.businessStartDate} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-locationDescription" className={labelBase}>
            Description of Operations at This Location
          </label>
          <input
            id="qp-locationDescription" name="locationDescription" type="text" maxLength={54}
            placeholder="Brief — e.g. office + foam storage, no on-site mixing"
            value={form.locationDescription} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-expirationDate" className={labelBase}>Requested Coverage Expiration Date</label>
            <input
              id="qp-expirationDate" name="expirationDate" type="date"
              value={form.expirationDate} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-workSubcontractedPercent" className={labelBase}>
              % of Work Subcontracted Out
            </label>
            <input
              id="qp-workSubcontractedPercent" name="workSubcontractedPercent" type="text"
              placeholder="E.g. 20%"
              value={form.workSubcontractedPercent} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-fullTimeEmployees" className={labelBase}>Full-Time Employees</label>
            <input
              id="qp-fullTimeEmployees" name="fullTimeEmployees" type="number"
              value={form.fullTimeEmployees} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-partTimeEmployees" className={labelBase}>Part-Time Employees</label>
            <input
              id="qp-partTimeEmployees" name="partTimeEmployees" type="number"
              value={form.partTimeEmployees} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-sic" className={labelBase}>SIC Code (if known)</label>
            <input
              id="qp-sic" name="sic" type="text"
              value={form.sic} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="qp-naics" className={labelBase}>NAICS Code (if known)</label>
            <input
              id="qp-naics" name="naics" type="text"
              value={form.naics} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        {/* ── Required selections ── */}
        <div className="mb-4">
          <p className={labelBase}>General Liability Coverage Trigger</p>
          {radioGroup('glTrigger', ['Occurrence', 'Claims Made'])}
        </div>

        <div className="mb-4">
          <p className={labelBase}>How the General Aggregate Limit Applies</p>
          {radioGroup('glAggregateAppliesTo', ['Per Policy', 'Per Project', 'Per Location', 'Other'])}
        </div>

        <div className="mb-4">
          <p className={labelBase}>Is the Premises Inside or Outside City Limits?</p>
          {radioGroup('premisesCityLimits', ['Inside City Limits', 'Outside City Limits'])}
        </div>

        <div className="mb-4">
          <p className={labelBase}>Do You Own or Rent (Tenant) This Location?</p>
          {radioGroup('premisesInterest', ['Owner', 'Tenant'])}
        </div>

        <div className="mb-6">
          <p className={labelBase}>Preferred Billing Plan</p>
          {radioGroup('billingPlan', ['Direct Bill', 'Agency Bill'])}
        </div>

        {/* ── 57 Yes/No underwriting questions, with their 35 conditional
              "explain if Yes" follow-ups wired inline per question. ── */}
        <div className="mb-2 pt-4 border-t border-black/10">
          <p className="font-headline font-bold text-text text-sm mb-1">
            General Underwriting Questions
          </p>
          <p className="text-xs text-muted mb-4">
            Every question below needs an answer — a blank box reads as unanswered, not &quot;No.&quot;
          </p>
        </div>

        {YES_NO_QUESTIONS.map((q) => ynQuestion(q))}

        {/* ── Selections required only when their trigger question is Yes ── */}
        {form.yn.safetyProgramsExist === 'Yes' && (
          <div className="mb-4">
            <p className={labelBase}>Safety Program Elements (check all that apply)</p>
            {checkboxArrayGroup('safetyProgramElements', [
              'Safety Manual', 'Safety Position', 'Monthly Meetings', 'OSHA Compliance', 'Other',
            ])}
          </div>
        )}

        {form.yn.athleticTeams === 'Yes' && (
          <div className="mb-4">
            <p className={labelBase}>Sponsored Athletic Team Age Group</p>
            {radioGroup('athleticTeamAgeGroup', ['12 and Under', '13 Through 18', 'Over 18'])}
          </div>
        )}

        {form.yn.swimmingPool === 'Yes' && (
          <>
            <div className="mb-4">
              <p className={labelBase}>Pool Construction</p>
              {radioGroup('poolConstruction', ['Above Ground', 'In Ground'])}
            </div>
            <div className="mb-4">
              <p className={labelBase}>Pool Safety Features (check all that apply)</p>
              {checkboxArrayGroup('poolSafetyFeatures', [
                'Approved Fence', 'Limited Access', 'Diving Board', 'Slide', 'Life Guard',
              ])}
            </div>
          </>
        )}

        {/* ── Loss history — required tick, kept separate from the existing
              lossesLast3Years/losses_3yr_count/losses_3yr_details fields
              above so neither mechanism contradicts the other. ── */}
        <div className="mb-4 pt-4 border-t border-black/10">
          <p className={labelBase}>Loss History</p>
          {radioGroup('lossHistoryStatus', ['No Losses to Report', 'Report a Loss'])}
        </div>

        {form.lossHistoryStatus === 'Report a Loss' && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label htmlFor="qp-lossDate" className={labelBase}>Date of Occurrence</label>
              <input
                id="qp-lossDate" name="lossDate" type="date"
                value={form.lossDate} onChange={handleField} className={inputBase}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="qp-lossDescription" className={labelBase}>Description</label>
              <input
                id="qp-lossDescription" name="lossDescription" type="text"
                value={form.lossDescription} onChange={handleField} className={inputBase}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="qp-lossAmountPaid" className={labelBase}>Amount Paid</label>
              <input
                id="qp-lossAmountPaid" name="lossAmountPaid" type="text"
                value={form.lossAmountPaid} onChange={handleField} className={inputBase}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="qp-lossAmountReserved" className={labelBase}>Amount Reserved</label>
              <input
                id="qp-lossAmountReserved" name="lossAmountReserved" type="text"
                value={form.lossAmountReserved} onChange={handleField} className={inputBase}
              />
            </div>
          </div>
        )}

        {/* ── Strongly recommended (15 of 16 — Applicant Initials excluded,
              it's a signature-adjacent field; see FormState comment) ── */}
        <div className="mb-2 pt-4 border-t border-black/10">
          <p className="font-headline font-bold text-text text-sm mb-1">
            Strongly Recommended (helps us quote faster)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-paymentPlan" className={labelBase}>Payment Plan</label>
            <select
              id="qp-paymentPlan" name="paymentPlan"
              value={form.paymentPlan} onChange={handleField}
              className={inputBase + ' appearance-none cursor-pointer'}
            >
              <option value="">Select…</option>
              <option value="Annual">Annual</option>
              <option value="Semi-Annual">Semi-Annual</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="qp-paymentMethod" className={labelBase}>Method of Payment</label>
            <select
              id="qp-paymentMethod" name="paymentMethod"
              value={form.paymentMethod} onChange={handleField}
              className={inputBase + ' appearance-none cursor-pointer'}
            >
              <option value="">Select…</option>
              <option value="EFT">EFT / Bank Draft</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Check">Check</option>
              <option value="Agency Bill">Agency Bill</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <p className={labelBase}>Is This Policy Subject to a Premium Audit?</p>
          {radioGroup('auditRequired', YES_NO)}
        </div>

        <div className="mb-4">
          <label htmlFor="qp-workSubcontractedDescription" className={labelBase}>
            Describe the Type of Work Subcontracted
          </label>
          <textarea
            id="qp-workSubcontractedDescription" name="workSubcontractedDescription" rows={2}
            value={form.workSubcontractedDescription} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-publicAreaSqFt" className={labelBase}>Area Open to Public (sq ft)</label>
            <input
              id="qp-publicAreaSqFt" name="publicAreaSqFt" type="number"
              value={form.publicAreaSqFt} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-glCode" className={labelBase}>GL Classification Code (if known)</label>
            <input
              id="qp-glCode" name="glCode" type="text"
              value={form.glCode} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-installationServiceRepairPercent" className={labelBase}>
              Installation / Service / Repair Work %
            </label>
            <input
              id="qp-installationServiceRepairPercent" name="installationServiceRepairPercent" type="text"
              placeholder="E.g. 30%"
              value={form.installationServiceRepairPercent} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-offPremisesInstallPercent" className={labelBase}>
              Off-Premises Installation / Service / Repair %
            </label>
            <input
              id="qp-offPremisesInstallPercent" name="offPremisesInstallPercent" type="text"
              placeholder="E.g. 70%"
              value={form.offPremisesInstallPercent} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-retailPercent" className={labelBase}>
              Retail / Service Operations % of Total Sales
            </label>
            <input
              id="qp-retailPercent" name="retailPercent" type="text"
              placeholder="E.g. 5%"
              value={form.retailPercent} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-numberOfMembers" className={labelBase}>
              Number of Members (LLC / Joint Venture)
            </label>
            <input
              id="qp-numberOfMembers" name="numberOfMembers" type="number"
              value={form.numberOfMembers} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <p className={labelBase}>Is the Applicant a Contractor?</p>
          {radioGroup('isContractor', YES_NO)}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="qp-buildingAreaSqFt" className={labelBase}>Total Building Area (sq ft)</label>
            <input
              id="qp-buildingAreaSqFt" name="buildingAreaSqFt" type="number"
              value={form.buildingAreaSqFt} onChange={handleField} className={inputBase}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qp-occupiedAreaSqFt" className={labelBase}>Occupied Area (sq ft)</label>
            <input
              id="qp-occupiedAreaSqFt" name="occupiedAreaSqFt" type="number"
              value={form.occupiedAreaSqFt} onChange={handleField} className={inputBase}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="qp-namedInsuredWebsite" className={labelBase}>Business Website</label>
          <input
            id="qp-namedInsuredWebsite" name="namedInsuredWebsite" type="text"
            placeholder="E.g. www.smithsprayfoam.com"
            value={form.namedInsuredWebsite} onChange={handleField} className={inputBase}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="qp-generalRemarks" className={labelBase}>Anything Else We Should Know</label>
          <textarea
            id="qp-generalRemarks" name="generalRemarks" rows={2}
            value={form.generalRemarks} onChange={handleField}
            className={inputBase + ' resize-none'}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="amber-cta w-full py-4 rounded-full font-label font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending…' : 'Send Message'}
          {!submitting && <ArrowRight className="w-5 h-5" />}
        </button>

        {error && (
          <p className="text-center text-xs text-red-400 mt-3">
            Something went wrong sending your request. Please call{' '}
            <a href="tel:844-967-5247" className="underline">844-967-5247</a> or email{' '}
            <a href="mailto:josh@sprayfoaminsurance.com" className="underline">josh@sprayfoaminsurance.com</a>.
          </p>
        )}
      </form>
    </FormCard>
  );
}
