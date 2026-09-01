<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import { getCaseStudy } from '$lib/data/portfolio';

	const study = getCaseStudy('platform-delivery');
	const description =
		'How Abhishek Kumar introduced product delivery structure, used Amplitude evidence, and increased engagement across an enterprise energy platform.';
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/platform-delivery',
		image: `https://abhishzk.com${study.image}`,
		author: { '@type': 'Person', name: 'Abhishek Kumar', url: 'https://abhishzk.com' },
		dateModified: '2026-09-01',
		about: ['Product Management', 'B2B SaaS', 'Energy Analytics', 'Platform Adoption']
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Watt Footprint Platform Case Study | Abhishek Kumar</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/work/platform-delivery" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{study.title} | Product Case Study" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/work/platform-delivery" />
	<meta property="og:image" content="https://abhishzk.com/images/social/platform-delivery.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Watt Footprint platform case study by Abhishek Kumar" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{study.title} | Product Case Study" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://abhishzk.com/images/social/platform-delivery.png" />
	<meta name="twitter:image:alt" content="Watt Footprint platform case study by Abhishek Kumar" />
	{@html structuredDataHtml}
</svelte:head>

<Header />
<main id="main-content">
	<CaseStudyHero {study} />

	<CaseStudySection title="The platform had customers, but product delivery lacked a system.">
		<p>
			Watt Footprint operated across energy studies, physical project implementation, and software.
			The software team was the newest group. When I joined, its backlog sat in a shared workspace
			with other departments, external delivery happened through Slack, and there was no consistent
			sprint or release structure.
		</p>
		<p>
			At the same time, customers were moving beyond pilots. New accounts, international markets,
			and larger IoT deployments increased the cost of unclear priorities and unstable releases.
		</p>
		<DecisionBlock title="Create one product cadence across internal and external teams.">
			<p>
				I separated the software backlog, introduced two-week delivery cycles, and brought
				engineering, data, design, QA, and operations into the same review and prioritization
				rhythm.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection
		title="Adoption was the goal. Sprint completion was a supporting signal."
		tone="soft"
	>
		<p>
			The product served two enterprise experiences. Energy Snapshot customers used bills for
			analytics, reporting, CO2 tracking, and a familiar rating model. Energy Pro customers used
			live meters for real-time electricity, gas, water, and solar monitoring.
		</p>
		<div class="tier-grid">
			<article>
				<h3>Energy Snapshot</h3>
				<p>Bill-led analytics, reporting, CO2 tracking, and a clear energy-performance rating.</p>
			</article>
			<article>
				<h3>Energy Pro</h3>
				<p>
					Live utility data, site trends, bill management, sensors, gateways, and operational
					alerts.
				</p>
			</article>
		</div>
		<p>
			The roadmap needed to support both experiences while improving the shared platform foundation.
			That meant balancing visible customer value with identity, performance, data quality, and
			release stability.
		</p>
	</CaseStudySection>

	<CaseStudySection title="Evidence changed what belonged in the roadmap.">
		<p>
			I reviewed Amplitude weekly to understand how external customers used the platform. The useful
			question was not whether someone logged in. It was whether accounts were using the workflows
			that turned energy data into operational decisions.
		</p>
		<div class="adoption-grid">
			<article>
				<strong class="mono">+84%</strong><span>total sessions from H1 to H2 2025</span>
			</article>
			<article>
				<strong class="mono">100%</strong><span>logo retention across the engagement</span>
			</article>
		</div>
		<DecisionBlock title="Prioritize depth of use, not surface-level login frequency.">
			<p>
				The same small set of energy managers could create much more account value without a large
				rise in individual users. Account-level workflow adoption became the more useful product
				signal.
			</p>
		</DecisionBlock>
	</CaseStudySection>

	<CaseStudySection
		title="Delivery covered customer value and platform resilience together."
		tone="soft"
	>
		<p>
			Across seven completed sprints, the team delivered a redesigned dashboard, analytics and
			bills, multi-currency support, budgets, alerts, reporting, role-based administration, mobile
			work, and performance improvements.
		</p>
		<div class="delivery-groups">
			<div>
				<h3>Customer workflows</h3>
				<p>
					Budget tracking, configurable alerts, reporting, notes, and multi-site administration.
				</p>
			</div>
			<div>
				<h3>International readiness</h3>
				<p>
					GBP and AED support, regional bill formats, customer onboarding, and compliance
					coordination.
				</p>
			</div>
			<div>
				<h3>Platform foundation</h3>
				<p>
					Identity and access, technical debt, release quality, data performance, and mobile
					experience.
				</p>
			</div>
		</div>
		<h3>My responsibility</h3>
		<ul>
			<li>Owned prioritization and delivery across web and mobile.</li>
			<li>Managed an external group of two engineers, QA, and UX design.</li>
			<li>Aligned internal engineering, data, operations, and commercial stakeholders.</li>
			<li>Introduced refinement, regression testing, and release quality gates.</li>
			<li>Reported product performance, risk, and roadmap recommendations to senior leaders.</li>
		</ul>
	</CaseStudySection>

	<CaseStudySection title="Stability became a product priority when heavy users felt the cost.">
		<p>
			Some established customer accounts experienced infographic load times above two minutes
			because of larger data volumes and under-sized compute. The issue affected the customers using
			the platform most deeply, so it could not be treated as invisible technical work.
		</p>
		<DecisionBlock title="Treat performance as part of enterprise adoption.">
			<p>
				The team increased compute capacity and introduced continuous aggregates for expensive
				queries. Heavy-client responses moved to roughly 300 to 400 milliseconds, while standard
				responses moved to roughly 40 to 50 milliseconds.
			</p>
		</DecisionBlock>
		<p>
			That change protected the workflows generating the strongest adoption signal and reduced the
			gap between product promise and daily customer experience.
		</p>
	</CaseStudySection>

	<CaseStudySection title="The result was deeper use across the same customer base." tone="soft">
		<p>
			External sessions grew by 84%, repeat use increased, and core reporting and energy-management
			actions grew substantially. All seven completed sprints reached their committed scope, while
			logo retention remained at 100% across the engagement.
		</p>
		<p>
			The important outcome was not a longer feature list. Customers moved from passive access
			toward budgets, reporting, live monitoring, alerts, and multi-site management as operational
			workflows.
		</p>
		<h3>What I would change</h3>
		<p>
			I would segment analytics by persona earlier. Sustainability leads, site managers, and account
			administrators use the platform differently. Role-based cohorts would have made prioritization
			more precise.
		</p>
		<h3>Next experiment</h3>
		<p>
			Connect account-level adoption to renewal and expansion signals, then test whether quarterly
			value summaries can create the same customer engagement as the annual energy report.
		</p>
	</CaseStudySection>

	<CaseStudyNav current="platform-delivery" />
	<Contact />
</main>
<Footer />

<style>
	.tier-grid,
	.adoption-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-block: 34px;
	}

	.tier-grid article,
	.adoption-grid article {
		padding: 24px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.tier-grid h3 {
		margin: 0 0 10px !important;
		font-size: 1.15rem !important;
	}

	.tier-grid p {
		margin: 0 !important;
		font-size: 0.9rem !important;
	}

	.adoption-grid article {
		display: grid;
		gap: 8px;
	}

	.adoption-grid strong {
		font-size: clamp(1.5rem, 3vw, 2.4rem);
		font-weight: 500;
	}

	.adoption-grid span {
		color: var(--muted);
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.delivery-groups {
		display: grid;
		gap: 2px;
		margin-block: 34px;
		background: var(--line);
	}

	.delivery-groups > div {
		display: grid;
		grid-template-columns: 190px 1fr;
		gap: 24px;
		padding: 24px;
		background: var(--surface);
	}

	.delivery-groups h3 {
		margin: 0 !important;
		font-size: 1rem !important;
	}

	.delivery-groups p {
		margin: 0 !important;
		font-size: 0.9rem !important;
	}

	@media (max-width: 650px) {
		.tier-grid,
		.adoption-grid {
			grid-template-columns: 1fr;
		}

		.delivery-groups > div {
			grid-template-columns: 1fr;
			gap: 8px;
		}
	}
</style>
