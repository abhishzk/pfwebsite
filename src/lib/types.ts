export interface CaseStudyMetric {
	value: string;
	label: string;
	verifiedAt?: string;
	sourceNote?: string;
}

export interface CaseStudy {
	slug: 'visajobs' | 'bill-reader' | 'platform-delivery';
	title: string;
	shortTitle: string;
	description: string;
	role: string;
	period: string;
	domains: string[];
	image: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	imageSrcset?: string;
	decision: string;
	result: string;
	metrics: CaseStudyMetric[];
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	outcomes: string[];
}

export interface Credential {
	name: string;
	institution: string;
	detail: string;
}

export interface ExternalLink {
	label: string;
	href: string;
	event: 'contact_click' | 'resume_download' | 'linkedin_click' | 'github_click' | 'product_visit';
}
