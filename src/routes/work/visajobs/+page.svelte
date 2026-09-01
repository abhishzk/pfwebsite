<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import MediaFigure from '$lib/components/case-study/MediaFigure.svelte';
	import { externalLinks, getCaseStudy, visaJobsPublicMetrics } from '$lib/data/portfolio';
	import { trackEvent } from '$lib/analytics';

	const study = getCaseStudy('visajobs');
	const description =
		'How Abhishek Kumar built VisaJobs Ireland from a personal job-search problem into a data product for 3,500+ candidates and Irish employers.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/visajobs',
		image: `https://abhishzk.com${study.image}`,
		author: { '@type': 'Person', name: 'Abhishek Kumar', url: 'https://abhishzk.com' },
		dateModified: '2026-09-01',
		about: ['Product Management', 'Data Product', 'Visa Sponsorship', 'Two-sided Marketplace']
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>VisaJobs Product Case Study | Abhishek Kumar</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/work/visajobs" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{study.title} | Product Case Study" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/work/visajobs" />
	<meta property="og:image" content="https://abhishzk.com/images/social/visajobs.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="VisaJobs Ireland product case study by Abhishek Kumar" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{study.title} | Product Case Study" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/visajobs.png" />
	<meta name="twitter:image:alt" content="VisaJobs Ireland product case study by Abhishek Kumar" />
	{@html structuredDataHtml}
</svelte:head>

<Header />
<main id="main-content">
	<CaseStudyHero {study} />

	<CaseStudySection title="The problem was visible. The answer was buried.">
		<p>
			While job hunting in Ireland, I kept reaching the same late-stage failure: a strong role and a
			promising interview process would stop when visa sponsorship came up. The information existed,
			but it was spread across government PDFs, spreadsheets, job boards, and company claims that
			were difficult to verify.
		</p>
		<p>
			The candidate job was not simply to find more vacancies. It was to know which opportunities
			were worth the time before applying. The employer job was different: reach candidates who
			already understood their eligibility and could have a more informed sponsorship conversation.
		</p>
		<DecisionBlock title="Treat permit history as product infrastructure, not editorial content.">
			<p>
				Official permit records became the trust layer beneath company discovery, live jobs, sponsor
				scores, comparison tools, and the employer verification flow.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="A useful product needed more than a searchable database." tone="soft">
		<p>
			The first product question was how to convert raw public records into a decision. A company
			name and permit count were useful, but candidates also needed recency, consistency, direction
			of travel, relevant jobs, salary eligibility, and a way to manage applications.
		</p>
		<div class="jobs-grid">
			<article>
				<h3>Candidate job</h3>
				<p>
					Find employers with evidence of sponsorship and decide where an application is viable.
				</p>
			</article>
			<article>
				<h3>Employer job</h3>
				<p>
					Reach visa-ready candidates and prove sponsorship history without repeating manual checks.
				</p>
			</article>
			<article>
				<h3>Trust job</h3>
				<p>
					Show the public source, verification logic, and limits behind every product conclusion.
				</p>
			</article>
		</div>
		<h3>Constraints that shaped the roadmap</h3>
		<ul>
			<li>Employer names in government data do not always match consumer-facing brands.</li>
			<li>
				Live job availability changes daily while permit history changes on a different cadence.
			</li>
			<li>Eligibility depends on salary, occupation, permit type, and personal circumstances.</li>
			<li>The product must clarify evidence without presenting legal advice.</li>
		</ul>
	</CaseStudySection>

	<CaseStudySection title="The product expanded when demand revealed a second side.">
		<p>
			The candidate launch produced more than candidate interest. Recruiters and employers began
			asking whether they could post roles directly. That signal changed the product from a
			candidate research tool into a two-sided system.
		</p>
		<DecisionBlock title="Verify the company before giving its jobs a trusted badge.">
			<p>
				Employers claim an existing permit record, verify a work-domain email, and complete a
				one-time account review before their first role goes live. Later roles inherit the verified
				company relationship without repeating the full process.
			</p>
		</DecisionBlock>
		<p>
			This protected the core promise. A sponsor label should represent evidence and a verified
			company relationship, not a self-reported checkbox.
		</p>
		<div class="product-link-wrap">
			<a
				class="button button-secondary"
				href={externalLinks.visaJobsCandidate.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('product_visit', { product: 'visajobs_candidate' })}
			>
				Visit candidate product
			</a>
			<a
				class="button button-secondary"
				href={externalLinks.visaJobsEmployer.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('product_visit', { product: 'visajobs_employer' })}
			>
				Visit employer product
			</a>
			<a
				class="button button-secondary"
				href={externalLinks.visaJobsExtension.href}
				target="_blank"
				rel="noreferrer"
				on:click={() => trackEvent('product_visit', { product: 'visajobs_extension' })}
			>
				Add Job Check extension
			</a>
		</div>
	</CaseStudySection>

	<CaseStudySection title="I owned the product from signal to release." tone="soft">
		<p>
			As Founder and Product Manager, I framed the problem, shaped the roadmap, defined the data
			model, designed the core journeys, and coordinated implementation and launch. Product
			decisions covered candidate discovery, employer verification, job publishing, trust language,
			and the boundary between helpful guidance and legal advice.
		</p>
		<h3>Delivery and collaboration</h3>
		<ul>
			<li>
				Translated government permit records into product definitions and acceptance criteria.
			</li>
			<li>
				Prioritized candidate and employer workflows from search behavior and direct feedback.
			</li>
			<li>Reviewed production data quality, company matching, and verification edge cases.</li>
			<li>Connected launch distribution to the next discovery cycle.</li>
		</ul>
		<h3>Measurement</h3>
		<p>
			I tracked public demand, product scope, search behavior, employer requests, and qualitative
			feedback. The next measurement layer is activation and repeat-use cohorts that connect product
			behavior to better-informed candidate and employer decisions.
		</p>
		<MediaFigure
			src="/images/casestudies/visajobs-extension.webp"
			alt="VisaJobs Job Check browser extension evaluating a live LinkedIn job"
			width={640}
			height={400}
			caption="A real VisaJobs Job Check product capture. The extension brings sponsorship evidence into the candidate's existing job-search workflow."
		/>
	</CaseStudySection>

	<CaseStudySection title="Distribution became a product feedback channel." tone="soft">
		<p>
			The launch story reached {visaJobsPublicMetrics[5].value} people and generated {visaJobsPublicMetrics[6]
				.value} click-throughs. The distribution mattered because it exposed the product to people who
			had already experienced the same problem.
		</p>
		<p>
			Comments, direct messages, search behavior, and employer requests became discovery inputs.
			They helped prioritize comparison tools, permit explainers, salary checks, application
			tracking, and the separate employer workflow.
		</p>
		<div class="public-facts">
			<div>
				<strong class="mono">{visaJobsPublicMetrics[4].value}</strong><span
					>nationalities represented in the public data</span
				>
			</div>
			<div>
				<strong class="mono">{visaJobsPublicMetrics[1].value}</strong><span
					>official permit records</span
				>
			</div>
			<div>
				<strong class="mono">{visaJobsPublicMetrics[2].value}</strong><span
					>employers in the searchable data</span
				>
			</div>
		</div>
		<p class="verification-note mono">Changing product figures verified September 2026.</p>
	</CaseStudySection>

	<CaseStudySection title="What I learned, and what comes next.">
		<h3>What worked</h3>
		<p>
			Starting from a personal problem made the user need clear, but the product became credible
			only when the evidence model was stronger than a typical job-board filter. Public provenance
			and transparent definitions are part of the user experience.
		</p>
		<h3>What I would improve</h3>
		<p>
			I would formalize activation and repeat-use cohorts earlier. Growth and public reach show
			demand, but the next product questions require clearer evidence about which tools change
			application behavior and which employer actions produce useful candidate outcomes.
		</p>
		<h3>Next experiment</h3>
		<p>
			Connect employer verification, candidate fit signals, and application progress into a
			measurable quality loop. The goal is not more listings. It is fewer wasted applications and
			better-informed hiring conversations.
		</p>
	</CaseStudySection>

	<CaseStudyNav current="visajobs" />
	<Contact />
</main>
<Footer />

<style>
	.jobs-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin-block: 34px;
	}

	.jobs-grid article {
		padding: 22px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.jobs-grid h3 {
		margin: 0 0 10px !important;
		font-size: 1rem !important;
	}

	.jobs-grid p {
		margin: 0 !important;
		font-size: 0.88rem !important;
		line-height: 1.55 !important;
	}

	.product-link-wrap {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 30px;
	}

	.public-facts {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		margin-block: 34px;
		background: var(--line);
	}

	.public-facts div {
		display: grid;
		gap: 8px;
		padding: 22px;
		background: var(--surface);
	}

	.public-facts strong {
		font-size: 1.35rem;
		font-weight: 500;
	}

	.public-facts span {
		color: var(--muted);
		font-size: 0.78rem;
		line-height: 1.45;
	}

	.verification-note {
		font-size: 0.74rem !important;
		text-transform: uppercase;
	}

	@media (max-width: 700px) {
		.jobs-grid,
		.public-facts {
			grid-template-columns: 1fr;
		}
	}
</style>
