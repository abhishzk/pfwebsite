<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import { getCaseStudy } from '$lib/data/portfolio';

	const study = getCaseStudy('bill-reader');
	const description =
		'How Abhishek Kumar rebuilt an unreliable energy bill workflow using AWS Textract extraction, OpenAI validation, and focused human review.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/bill-reader',
		image: `https://abhishzk.com${study.image}`,
		author: { '@type': 'Person', name: 'Abhishek Kumar', url: 'https://abhishzk.com' },
		dateModified: '2026-09-01',
		about: ['Product Management', 'AI Product', 'Energy Billing', 'Human Review']
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Bill Reader Product Case Study | Abhishek Kumar</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/work/bill-reader" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{study.title} | Product Case Study" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/work/bill-reader" />
	<meta property="og:image" content="https://abhishzk.com/images/social/bill-reader.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Bill Reader product case study by Abhishek Kumar" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{study.title} | Product Case Study" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/bill-reader.png" />
	<meta name="twitter:image:alt" content="Bill Reader product case study by Abhishek Kumar" />
	{@html structuredDataHtml}
</svelte:head>

<Header />
<main id="main-content">
	<CaseStudyHero {study} />

	<CaseStudySection title="The system extracted data quickly, but nobody trusted it.">
		<p>
			When I joined Watt Footprint, energy bills were processed through a direct model call and
			written into the platform. Spot checks exposed recurring errors in account numbers, unit
			rates, standing charges, VAT, and totals.
		</p>
		<p>
			The immediate cost was manual validation. Ten bills could take 60 to 90 minutes to read,
			cross-check, calculate, and correct. The larger cost was product trust. Incorrect financial
			data could slow onboarding and undermine the dashboard before customers saw its value.
		</p>
		<DecisionBlock title="Define success around trusted fields, not successful model responses.">
			<p>
				The product needed field-level accuracy, logical consistency, controlled human review, and a
				clear route for failures. A completed extraction was not a successful outcome.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection title="The input was inconsistent by design." tone="soft">
		<p>
			The platform supported electricity, gas, and water bills across Ireland, the UK, and the UAE.
			Inputs ranged from clean digital PDFs to scanned images with skew, blur, missing fields, and
			provider-specific layouts.
		</p>
		<div class="constraint-grid">
			<article>
				<strong>Document quality</strong><span>Digital PDFs, scans, photos, blur, and rotation</span
				>
			</article>
			<article>
				<strong>Billing logic</strong><span
					>Day and night tariffs, levies, VAT, and standing charges</span
				>
			</article>
			<article>
				<strong>Regional formats</strong><span
					>EUR, GBP, AED, and different supplier conventions</span
				>
			</article>
			<article>
				<strong>Business risk</strong><span
					>Incorrect financial fields damage customer confidence</span
				>
			</article>
		</div>
		<p>
			I worked with operations, engineering, and data to make the technical trade-offs
			understandable. That included explaining why OCR accuracy and financial correctness were
			related but different product measures.
		</p>
	</CaseStudySection>

	<CaseStudySection title="Three releases clarified what each technology should do.">
		<div class="version-list">
			<article>
				<span class="mono">First release</span>
				<h3>Direct model extraction</h3>
				<p>
					Fast to build, but values could be invented or misread without a dependable error check.
				</p>
			</article>
			<article>
				<span class="mono">Second release</span>
				<h3>AWS Textract extraction</h3>
				<p>
					Improved printed-text recognition, but brittle parsing still failed on financial edge
					cases.
				</p>
			</article>
			<article>
				<span class="mono">Third release</span>
				<h3>Extraction plus structured validation</h3>
				<p>
					Textract extracted the document. OpenAI checked structured output and financial
					consistency.
				</p>
			</article>
		</div>
		<DecisionBlock title="Use the model as a validator, not the source of truth.">
			<p>
				AWS Textract handled document extraction. OpenAI validated structured fields and
				relationships. Any bill below the 75% confidence threshold moved to human review instead of
				the database.
			</p>
		</DecisionBlock>
		<div class="pipeline" aria-label="Bill Reader processing flow">
			<span>Upload</span><b aria-hidden="true">→</b><span>Extract</span><b aria-hidden="true">→</b
			><span>Structure</span><b aria-hidden="true">→</b><span>Validate</span><b aria-hidden="true"
				>→</b
			><span>Review or save</span>
		</div>
	</CaseStudySection>

	<CaseStudySection title="Accuracy needed a repeatable evaluation method." tone="soft">
		<p>
			Before committing to the extraction approach, the team tested a deliberate mix of clean PDFs,
			scanned documents, blurry images, and difficult layouts. We compared extracted fields against
			manually verified ground truth.
		</p>
		<div class="score-grid">
			<article><strong class="mono">1.0</strong><span>Exact field match</span></article>
			<article>
				<strong class="mono">0.5</strong><span>Correct value with a minor format difference</span>
			</article>
			<article><strong class="mono">0.0</strong><span>Incorrect or missing value</span></article>
		</div>
		<p>
			For financial fields, we also compared extracted totals with verified totals across each test
			batch. This caught small errors that could compound across an enterprise account.
		</p>
		<h3>My responsibility</h3>
		<ul>
			<li>Defined accuracy and processing-time success criteria.</li>
			<li>Translated billing rules into requirements and acceptance criteria.</li>
			<li>Prioritized failure modes from production evidence.</li>
			<li>Aligned operations and engineering on the human-review threshold.</li>
			<li>Coordinated rollout across regional billing formats.</li>
		</ul>
	</CaseStudySection>

	<CaseStudySection title="Automation changed the work, not only the duration.">
		<div class="before-after">
			<div>
				<span class="mono">Before</span>
				<strong>60 to 90 minutes</strong>
				<p>Read, type, calculate, and verify ten bills with sustained concentration.</p>
			</div>
			<div>
				<span class="mono">After</span>
				<strong>12 to 18 minutes</strong>
				<p>Review flagged fields, confirm or correct the value, and save.</p>
			</div>
		</div>
		<p>
			The result was 95% accuracy for PDF bills, 80% for image-based bills, and roughly 80% less
			processing time. The human role shifted from data entry and calculation to focused
			verification.
		</p>
	</CaseStudySection>

	<CaseStudySection title="What I learned, and what I would change." tone="soft">
		<h3>Test diverse inputs before production</h3>
		<p>
			The first migration was reactive. A structured bill set covering providers, regions,
			utilities, and image quality should have been part of the release gate from the start.
		</p>
		<h3>Use risk-weighted thresholds</h3>
		<p>
			A single confidence score treats every field equally. The next iteration should assign
			stricter thresholds to totals, VAT, and unit rates than to lower-risk descriptive fields.
		</p>
		<h3>Next experiment</h3>
		<p>
			Measure correction rates by field and document type, then route reviews using both confidence
			and business impact. That would reduce manual effort without weakening protection around
			financial data.
		</p>
	</CaseStudySection>

	<CaseStudyNav current="bill-reader" />
	<Contact />
</main>
<Footer />

<style>
	.constraint-grid,
	.score-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-block: 34px;
	}

	.constraint-grid article,
	.score-grid article {
		display: grid;
		gap: 8px;
		padding: 22px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.constraint-grid strong {
		font-size: 0.9rem;
	}

	.constraint-grid span,
	.score-grid span {
		color: var(--muted);
		font-size: 0.72rem;
		line-height: 1.5;
	}

	.version-list {
		display: grid;
		gap: 2px;
		margin-block: 34px;
		background: var(--line);
	}

	.version-list article {
		padding: 26px;
		background: var(--surface);
	}

	.version-list span,
	.before-after span {
		display: block;
		margin-bottom: 8px;
		color: var(--accent-strong);
		font-size: 0.62rem;
		text-transform: uppercase;
	}

	.version-list h3 {
		margin: 0 0 8px !important;
		font-size: 1.15rem !important;
	}

	.version-list p {
		margin: 0 !important;
		font-size: 0.8rem !important;
	}

	.pipeline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 24px;
		margin-block: 34px;
		border-radius: var(--radius);
		background: var(--ink);
		color: var(--page);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.68rem;
	}

	.pipeline b {
		opacity: 0.35;
	}

	.score-grid {
		grid-template-columns: repeat(3, 1fr);
	}

	.score-grid strong {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.before-after {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		margin-block: 34px;
		background: var(--line);
	}

	.before-after > div {
		padding: 28px;
		background: var(--surface);
	}

	.before-after strong {
		display: block;
		margin-bottom: 10px;
		font-size: clamp(1.5rem, 3vw, 2.4rem);
	}

	.before-after p {
		margin: 0 !important;
		font-size: 0.8rem !important;
	}

	@media (max-width: 650px) {
		.constraint-grid,
		.score-grid,
		.before-after {
			grid-template-columns: 1fr;
		}

		.pipeline {
			align-items: stretch;
			flex-direction: column;
			text-align: center;
		}

		.pipeline b {
			transform: rotate(90deg);
		}
	}
</style>
