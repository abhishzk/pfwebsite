import type {
	Capability,
	CaseStudy,
	CaseStudyMetric,
	Credential,
	Experience,
	ExternalLink
} from '$lib/types';

export const externalLinks = {
	email: {
		label: 'Start a conversation',
		href: 'mailto:abhishzk.ie@gmail.com?subject=Product conversation',
		event: 'contact_click'
	},
	linkedin: {
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/abhishzk/',
		event: 'linkedin_click'
	},
	github: {
		label: 'GitHub',
		href: 'https://github.com/abhishzk',
		event: 'github_click'
	},
	resume: {
		label: 'Resume',
		href: '/abhishek-kumar-resume.pdf',
		event: 'resume_download'
	},
	visaJobsCandidate: {
		label: 'Visit candidate product',
		href: 'https://www.visajobs.ie/',
		event: 'product_visit'
	},
	visaJobsEmployer: {
		label: 'Visit employer product',
		href: 'https://employers.visajobs.ie/',
		event: 'product_visit'
	},
	visaJobsExtension: {
		label: 'Add Job Check to Chrome',
		href: 'https://chromewebstore.google.com/detail/visajobsie-%E2%80%94-job-check/mjhcgjigopcgpfnoekggmfhhfngekmec',
		event: 'product_visit'
	}
} satisfies Record<string, ExternalLink>;

export const visaJobsPublicMetrics: CaseStudyMetric[] = [
	{
		value: '3,500+',
		label: 'candidates',
		verifiedAt: 'September 2026',
		sourceNote: 'Founder-confirmed public product figure'
	},
	{
		value: '204,612',
		label: 'permit records',
		verifiedAt: 'September 2026',
		sourceNote: 'VisaJobs public product data'
	},
	{
		value: '22,800+',
		label: 'employers',
		verifiedAt: 'September 2026',
		sourceNote: 'VisaJobs public product data'
	},
	{
		value: '4,400+',
		label: 'live jobs',
		verifiedAt: 'September 2026',
		sourceNote: 'VisaJobs public product data'
	},
	{
		value: '142',
		label: 'nationalities',
		verifiedAt: 'September 2026',
		sourceNote: 'VisaJobs public product data'
	},
	{
		value: '51,000+',
		label: 'launch-post views',
		sourceNote: 'Founder-confirmed launch distribution figure'
	},
	{
		value: '1,400+',
		label: 'launch-post click-throughs',
		sourceNote: 'Founder-confirmed launch distribution figure'
	}
];

export const visaJobsMetrics = visaJobsPublicMetrics.slice(0, 4);

export const caseStudies: CaseStudy[] = [
	{
		slug: 'visajobs',
		shortTitle: 'VisaJobs Ireland',
		title: 'Making visa sponsorship searchable in Ireland',
		description:
			'A 0-to-1 product that turns fragmented government permit records and live jobs into practical decisions for candidates and employers.',
		role: 'Founder and Product Manager',
		period: '2026 to present',
		domains: ['0-to-1 product', 'Data product', 'Two-sided marketplace'],
		image: '/images/casestudies/visajobs-product.webp',
		imageAlt: 'VisaJobs Ireland search experience showing sponsor-backed job discovery',
		imageWidth: 1440,
		imageHeight: 1100,
		imageSrcset:
			'/images/casestudies/visajobs-product-720.webp 720w, /images/casestudies/visajobs-product-1200.webp 1200w, /images/casestudies/visajobs-product.webp 1440w',
		decision:
			'Use official permit history as the trust layer, then connect it to live jobs and decision tools.',
		result: '3,500+ candidates and a new verified employer product.',
		imageCaption:
			'Real VisaJobs product capture showing the search experience built around public permit evidence.',
		context: {
			team: 'Founder-led product',
			stage: '0-to-1, live product',
			customer: 'Candidates and employers',
			ownership: 'Product, data, discovery, delivery',
			constraint: 'Fragmented records and trust risk'
		},
		metrics: visaJobsMetrics
	},
	{
		slug: 'bill-reader',
		shortTitle: 'Bill Reader',
		title: 'Rebuilding an energy bill pipeline people could trust',
		description:
			'A production AI workflow that separated extraction from validation and sent uncertain results to focused human review.',
		role: 'Product Owner',
		period: 'July to December 2025',
		domains: ['AI product', 'Energy SaaS', 'Human review'],
		image: '/images/casestudies/bill-reader-system.svg',
		imageAlt:
			'Bill Reader workflow from upload through extraction, validation, review, and storage',
		imageWidth: 1600,
		imageHeight: 900,
		decision:
			'Use AWS Textract for extraction, OpenAI for structured validation, and human review below the confidence threshold.',
		result: '95% accurate document processing and 80% less processing time.',
		imageCaption:
			'Product-system artefact showing the extraction, validation, and human-review decisions behind the workflow.',
		context: {
			team: 'Cross-functional energy team',
			stage: 'Production workflow',
			customer: 'Enterprise energy teams',
			ownership: 'Success criteria, evaluation, rollout',
			constraint: 'Variable formats and financial accuracy'
		},
		metrics: [
			{ value: '95%', label: 'accurate document processing' },
			{ value: '80%', label: 'image accuracy' },
			{ value: '80%', label: 'less processing time' }
		]
	},
	{
		slug: 'platform-delivery',
		shortTitle: 'Watt Footprint Platform',
		title: 'Turning passive pilots into active energy management',
		description:
			'A platform redesign and delivery system that moved enterprise customers toward deeper operational use across web and mobile.',
		role: 'Product Owner',
		period: 'July to December 2025',
		domains: ['B2B SaaS', 'Analytics', 'Platform adoption'],
		image: '/images/casestudies/wfp-evidence-map.svg',
		imageAlt:
			'Watt Footprint product evidence map connecting customer behavior, roadmap decisions, and outcomes',
		imageWidth: 1600,
		imageHeight: 900,
		decision:
			'Prioritize adoption and stability together, using Amplitude evidence and structured release gates to guide delivery.',
		result: '84% session growth with 100% logo retention.',
		imageCaption:
			'Product evidence map connecting customer behaviour, analytics signals, roadmap choices, and outcomes.',
		context: {
			team: 'Nine-person internal and external team',
			stage: 'Enterprise platform',
			customer: 'Energy managers and account admins',
			ownership: 'Roadmap, sprint cadence, analytics',
			constraint: 'Move pilots into repeatable adoption'
		},
		metrics: [
			{ value: '84%', label: 'session growth' },
			{ value: '100%', label: 'logo retention' }
		]
	},
	{
		slug: 'digital-bau-operating-model',
		shortTitle: 'Digital BAU Operating Model',
		title: 'Designing a digital BAU operating model',
		description:
			'A research-backed product case study that turns an omnichannel retail strategy into a practical system for prioritisation, delivery, measurement, and continuous improvement.',
		role: 'Product Manager',
		period: 'June 2026',
		domains: ['Product strategy', 'Operating model', 'Omnichannel retail'],
		image: '/images/casestudies/bau-operating-model.webp',
		imageAlt:
			'Digital BAU operating model connecting intake, prioritisation, delivery, quality control, measurement, and continuous improvement',
		imageWidth: 1440,
		imageHeight: 810,
		imageSrcset:
			'/images/casestudies/bau-operating-model-720.webp 720w, /images/casestudies/bau-operating-model-960.webp 960w, /images/casestudies/bau-operating-model.webp 1440w',
		imageFit: 'contain',
		decision:
			'Protect capacity for strategic change inside one transparent BAU cycle, with a separate fast lane for genuine live incidents.',
		result:
			'A complete operating model covering prioritisation, release governance, measurement, and a 90-day adoption plan.',
		resultLabel: 'Work produced',
		metricsLabel: 'Case study scope',
		imageCaption:
			'Operating-model artefact from the Woodie’s product case study, connecting intake, prioritisation, delivery, and learning.',
		context: {
			team: 'Cross-functional retail stakeholders',
			stage: 'Strategy and operating model',
			customer: 'Retail customers and internal teams',
			ownership: 'Research, model, measures, adoption plan',
			constraint: 'Protect run while funding change'
		},
		metrics: [
			{ value: '4', label: 'operating principles' },
			{ value: '3', label: 'stakeholder groups' },
			{ value: '4-week', label: 'proposed release cadence' },
			{ value: '90-day', label: 'adoption plan' }
		]
	}
];

export function getCaseStudy(slug: CaseStudy['slug']): CaseStudy {
	const study = caseStudies.find((item) => item.slug === slug);
	if (!study) throw new Error(`Unknown case study: ${slug}`);
	return study;
}

export const homeMetrics: CaseStudyMetric[] = [
	{ value: '3,500+', label: 'VisaJobs candidates' },
	{ value: '84%', label: 'platform session growth' },
	{ value: '95%', label: 'accurate document processing' },
	{ value: '28+', label: 'AI product integrations' }
];

export const capabilities: Capability[] = [
	{
		title: '0-to-1 product discovery',
		description:
			'Turn an observed problem into a focused product, a trust model, and a path to adoption.',
		proof: 'VisaJobs Ireland',
		href: '/work/visajobs'
	},
	{
		title: 'AI product evaluation',
		description:
			'Define where AI helps, where it fails, and where human judgement belongs in production.',
		proof: 'Bill Reader',
		href: '/work/bill-reader'
	},
	{
		title: 'Enterprise adoption',
		description:
			'Move customers from access and pilots toward repeatable workflows that create operational value.',
		proof: 'Watt Footprint',
		href: '/work/platform-delivery'
	},
	{
		title: 'Product operating systems',
		description:
			'Make prioritisation, capacity, release quality, and learning visible across teams.',
		proof: 'Digital BAU model',
		href: '/work/digital-bau-operating-model'
	},
	{
		title: 'Technical product decisions',
		description:
			'Work fluently with engineering on architecture, data quality, risk, and delivery trade-offs.',
		proof: 'Bill Reader and platform delivery',
		href: '/work/bill-reader'
	}
];

export const experience: Experience[] = [
	{
		company: 'VisaJobs Ireland',
		role: 'Founder and Product Manager',
		period: 'January 2026 to present',
		location: 'Dublin, Ireland',
		summary:
			'Building a data product that helps international candidates and Irish employers make visa-sponsorship decisions with evidence.',
		outcomes: [
			'Grew the candidate product to 3,500+ candidates.',
			'Expanded into verified employer claiming and job posting.',
			'Turned official permit data into search, comparison, scoring, and planning tools.'
		]
	},
	{
		company: 'Watt Footprint',
		role: 'Product Owner',
		period: 'July 2025 to December 2025',
		location: 'Dublin, Ireland',
		summary:
			'Owned product delivery for an enterprise energy platform across billing, analytics, onboarding, and international expansion.',
		outcomes: [
			'Increased external sessions by 84% through instrumented product iteration.',
			'Shipped bill automation with 95% accurate document processing.',
			'Coordinated a nine-person internal and external delivery group.'
		]
	},
	{
		company: 'Speeir',
		role: 'Product Manager',
		period: 'September 2024 to June 2025',
		location: 'Athlone, Ireland',
		summary:
			'Led two early-stage products from concept to production across AI search and multi-tenant fitness management.',
		outcomes: [
			'Integrated 28+ external services into an AI search product.',
			'Delivered a multi-tenant fitness platform across web and mobile.',
			'Owned product strategy, prioritization, pricing, and delivery in a lean team.'
		]
	},
	{
		company: 'Mastercard',
		role: 'Software Engineer, Payments Network',
		period: 'June 2022 to January 2023',
		location: 'Dublin, Ireland',
		summary:
			'Built event-driven payment systems and developed the technical depth I now use to make better product trade-offs.',
		outcomes: [
			'Supported production-like testing for 300+ merchants.',
			'Raised automated test coverage to 97%.',
			'Worked in a regulated environment with strict PCI and PII controls.'
		]
	}
];

export const credentials: Credential[] = [
	{
		name: 'Professional Scrum Product Owner I',
		institution: 'Scrum.org',
		detail: '93.8% score, March 2026'
	},
	{
		name: 'MEng Engineering Management',
		institution: 'Technological University of the Shannon',
		detail: 'First Class Honours, 2024'
	},
	{
		name: 'BEng Software Engineering',
		institution: 'Technological University of the Shannon',
		detail: 'Honours degree, 2021'
	}
];
