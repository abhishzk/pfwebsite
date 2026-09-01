import type { CaseStudy, CaseStudyMetric, Credential, Experience, ExternalLink } from '$lib/types';

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
		metrics: [
			{ value: '84%', label: 'session growth' },
			{ value: '100%', label: 'logo retention' }
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
