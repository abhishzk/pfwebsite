<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import CaseStudyHero from '$lib/components/case-study/CaseStudyHero.svelte';
	import CaseStudySection from '$lib/components/case-study/CaseStudySection.svelte';
	import DecisionBlock from '$lib/components/case-study/DecisionBlock.svelte';
	import CaseStudyNav from '$lib/components/case-study/CaseStudyNav.svelte';
	import MediaFigure from '$lib/components/case-study/MediaFigure.svelte';
	import { getCaseStudy } from '$lib/data/portfolio';

	const study = getCaseStudy('digital-bau-operating-model');
	const description =
		'How Abhishek Kumar researched Woodie’s digital strategy and designed a BAU operating model for reliable delivery, strategic progress, and measurable learning.';
	const sources = [
		{
			label: 'Grafton Group Capital Markets Event 2026',
			href: 'https://www.graftonplc.com/investors/capital-markets-event'
		},
		{
			label: 'Woodie’s and Virtualstock partnership',
			href: 'https://www.graftonplc.com/media-centre/our-stories/2025/woodies-virtualstock'
		}
	];
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: study.title,
		description,
		url: 'https://abhishzk.com/work/digital-bau-operating-model',
		image: 'https://abhishzk.com/images/social/digital-bau-operating-model.png',
		author: { '@type': 'Person', name: 'Abhishek Kumar', url: 'https://abhishzk.com' },
		dateCreated: '2026-06-15',
		dateModified: '2026-09-09',
		learningResourceType: 'Product management case study',
		about: ['Product Management', 'BAU Operating Model', 'Omnichannel Retail', 'Digital Strategy'],
		citation: sources.map((source) => source.href)
	};
	const structuredDataHtml = `<script type="application/ld+json">${JSON.stringify(
		structuredData
	).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>Digital BAU Operating Model Case Study | Abhishek Kumar</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="https://abhishzk.com/work/digital-bau-operating-model" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{study.title} | Product Case Study" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://abhishzk.com/work/digital-bau-operating-model" />
	<meta
		property="og:image"
		content="https://abhishzk.com/images/social/digital-bau-operating-model.png"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Digital BAU operating model product case study by Abhishek Kumar"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{study.title} | Product Case Study" />
	<meta name="twitter:description" content={description} />
	<meta
		name="twitter:image"
		content="https://abhishzk.com/images/social/digital-bau-operating-model.png"
	/>
	<meta
		name="twitter:image:alt"
		content="Digital BAU operating model product case study by Abhishek Kumar"
	/>
	{@html structuredDataHtml}
</svelte:head>

<Header />
<main id="main-content">
	<CaseStudyHero {study} />

	<CaseStudySection title="The brief was operational. The real challenge was strategic.">
		<p>
			The Woodie’s brief asked for an effective business-as-usual operating model that could support
			reliable day-to-day delivery and long-term strategic objectives. I treated that as a product
			design problem: how should work enter the system, earn priority, move safely into production,
			and create evidence for the next decision?
		</p>
		<p>
			My research connected the brief to Woodie’s published digital ambition. The business was
			planning to triple digital’s share by 2030, grow the digital channel by 130%, and advance four
			growth drivers across range expansion, loyalty, retail media, and mobile commerce.
		</p>
		<DecisionBlock title="Design one operating system for run and change.">
			<p>
				The model had to keep the live platform dependable without letting incidents and daily
				requests consume every unit of capacity intended for strategic growth.
			</p>
		</DecisionBlock>
		<p class="context-note">
			This work was created in response to a Digital Product Executive case brief. The research,
			prioritisation choices, operating model, measures, and implementation plan are my own.
		</p>
	</CaseStudySection>

	<CaseStudySection title="Research turned strategy into operating constraints." tone="soft">
		<p>
			I reviewed Woodie’s public strategy, omnichannel customer evidence, delivery context, and
			seasonal retail cycle. Four constraints shaped the model.
		</p>
		<div class="research-grid">
			<article class="research-lead">
				<h3>Omnichannel value</h3>
				<p>
					Customers using stores, home delivery, and Click & Collect spend five times more than
					in-store-only customers. BAU must protect the full journey, not only the website.
				</p>
			</article>
			<article>
				<h3>Seasonal demand</h3>
				<p>Garden, decorating, and Christmas peaks change the acceptable level of release risk.</p>
			</article>
			<article>
				<h3>Shared capacity</h3>
				<p>
					Campaigns, incidents, supplier onboarding, and strategic work compete for the same team.
				</p>
			</article>
			<article>
				<h3>Cross-team delivery</h3>
				<p>
					Commercial, technical, and retail operations must make one coordinated product decision.
				</p>
			</article>
		</div>
		<div class="source-links" aria-label="Public research sources">
			{#each sources as source}
				<a href={source.href} target="_blank" rel="noreferrer">
					{source.label}<span aria-hidden="true">↗</span>
				</a>
			{/each}
		</div>
	</CaseStudySection>

	<CaseStudySection title="One intake protects both stability and progress.">
		<p>
			Every request enters one visible intake. Work is ranked by customer value, commercial impact,
			urgency and risk, then effort. A separate fast lane is reserved for genuine live incidents so
			that an emergency does not distort normal prioritisation.
		</p>
		<MediaFigure
			src="/images/casestudies/bau-prioritisation.png"
			alt="Prioritisation model showing one intake and a proposed split between operational and strategic work"
			width={1440}
			height={810}
			caption="The 65/35 run and change split is a starting hypothesis. I would validate it against real demand, capacity, incident volume, and the trading calendar."
		/>
		<DecisionBlock title="Ring-fence change capacity, then validate the ratio.">
			<p>
				I proposed roughly 65% for operational work and 35% for strategic change. The important
				decision is protection, not the initial percentage. The ratio should evolve from evidence.
			</p>
		</DecisionBlock>
		<h3>Four principles govern the queue</h3>
		<ol class="principles">
			<li>
				<strong>Protect stability</strong><span>Improve the platform and the delivery process.</span
				>
			</li>
			<li><strong>Prioritise value</strong><span>Rank impact instead of request volume.</span></li>
			<li>
				<strong>Protect run and change</strong><span>Serve today without sacrificing tomorrow.</span
				>
			</li>
			<li>
				<strong>Follow the journey</strong><span
					>Improve the experience across online and store.</span
				>
			</li>
		</ol>
	</CaseStudySection>

	<CaseStudySection
		title="A four-week release needs stronger control, not more ceremony."
		tone="soft"
	>
		<p>
			A longer release cadence concentrates more change into each production event. I designed a
			light delivery engine with explicit readiness, testing, release ownership, rollback planning,
			and post-launch monitoring.
		</p>
		<div class="delivery-flow" aria-label="Proposed delivery flow">
			<div>
				<strong>Define ready</strong><span>Stories, acceptance criteria, and dependencies</span>
			</div>
			<div>
				<strong>Build together</strong><span>Clear handoff, change control, and review</span>
			</div>
			<div><strong>Pass the gate</strong><span>Functional testing and business UAT</span></div>
			<div><strong>Release and learn</strong><span>Rollback readiness and analytics</span></div>
		</div>
		<p>
			My quality decisions were informed by prior delivery evidence: 95% accurate document
			processing on Bill Reader and 97% automated test coverage at Mastercard. Those are examples
			from my earlier work, not Woodie’s outcomes.
		</p>
		<a class="text-link" href="/work/bill-reader">
			See the Bill Reader evidence <span aria-hidden="true">→</span>
		</a>
	</CaseStudySection>

	<CaseStudySection title="Measurement makes the model accountable.">
		<p>
			The operating model uses two layers of evidence. Operational health shows whether delivery is
			dependable. Strategic progress shows whether protected change capacity is moving the business
			toward its published ambition.
		</p>
		<MediaFigure
			src="/images/casestudies/bau-measurement.png"
			alt="Measurement framework separating operational health from strategic progress"
			width={1440}
			height={810}
			caption="The upper measures are proposed for Woodie’s. The lower figures are clearly separated examples from my previous product work."
		/>
		<div class="measurement-columns">
			<div>
				<h3>Operational health</h3>
				<ul>
					<li>Release success and rollback frequency</li>
					<li>Defects reaching production</li>
					<li>Time to resolve critical issues</li>
					<li>Backlog readiness and blocked work</li>
				</ul>
			</div>
			<div>
				<h3>Strategic progress</h3>
				<ul>
					<li>Conversion and average order value</li>
					<li>App activation and loyalty sign-ups</li>
					<li>Extended catalogue coverage</li>
					<li>Digital share of total sales</li>
				</ul>
			</div>
		</div>
		<p class="context-note">
			These measures define how I would evaluate the model. They are not presented as achieved
			results.
		</p>
	</CaseStudySection>

	<CaseStudySection title="The model flexes with the retail calendar." tone="soft">
		<p>
			A useful BAU system cannot allocate capacity identically throughout the year. Release risk
			should tighten around major trading peaks, while quieter windows create room for strategic
			change and platform improvement.
		</p>
		<div class="season-grid">
			<article class="season-main">
				<h3>Spring and summer</h3>
				<p>Protect garden trading and schedule larger changes around peak demand.</p>
			</article>
			<article>
				<h3>Autumn</h3>
				<p>Support decorating demand and prepare the Christmas release plan.</p>
			</article>
			<article>
				<h3>Winter</h3>
				<p>Use a Christmas code freeze, then reset priorities for the new year.</p>
			</article>
		</div>
		<h3>Strategy enters the same machine</h3>
		<p>
			An app and loyalty launch enters as a 0-to-1 change initiative. Supplier onboarding becomes
			repeatable BAU work. Retail media depends on a performant, measurable digital estate. The
			model provides one decision path without pretending that every type of work is identical.
		</p>
	</CaseStudySection>

	<CaseStudySection title="Implementation begins with evidence from the real team.">
		<p>
			I designed the first 90 days to strengthen the existing system before changing it. The plan
			moves from observing real work, to improving ticket and measurement quality, to owning the BAU
			stream and supporting a strategic initiative.
		</p>
		<MediaFigure
			src="/images/casestudies/bau-90-day-plan.png"
			alt="Thirty, sixty, and ninety-day implementation plan for adopting the operating model"
			width={1440}
			height={810}
			caption="The adoption plan starts with workflow observation, stakeholder interviews, analytics review, and a store visit before proposing wider process change."
		/>
		<h3>What I would validate first</h3>
		<ul>
			<li>Where work currently enters and where decisions stall.</li>
			<li>Actual team capacity, incident demand, and release constraints.</li>
			<li>Which metrics are trusted and which require a new baseline.</li>
			<li>How trading, marketing, technology, and stores define a successful release.</li>
		</ul>
	</CaseStudySection>

	<CaseStudySection title="The proof is the quality of the decisions." tone="soft">
		<p>
			This case study demonstrates how I research a business, identify the operating tension, turn
			strategy into prioritisation rules, make capacity trade-offs explicit, define success
			measures, and plan adoption with the people who will use the system. The result is a complete,
			testable operating model with clear criteria for future validation.
		</p>
		<h3>What I would improve next</h3>
		<p>
			I would test the model against six months of real requests and incidents. That evidence would
			show whether the initial capacity split is realistic, where work waits longest, and which
			quality checks prevent the most expensive failures.
		</p>
		<h3>Next experiment</h3>
		<p>
			Run a four-week shadow cycle without changing the current process. Compare intake age,
			priority changes, blocked work, release defects, and strategic capacity against the proposed
			model before adopting it.
		</p>
	</CaseStudySection>

	<CaseStudyNav current="digital-bau-operating-model" />
	<Contact />
</main>
<Footer />

<style>
	.context-note {
		padding: 20px 22px;
		border-left: 3px solid var(--accent);
		background: var(--surface);
		color: var(--ink) !important;
		font-size: 0.96rem !important;
	}

	.research-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 12px;
		margin-block: 34px;
	}

	.research-grid article {
		padding: 24px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.research-grid .research-lead {
		grid-row: span 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 300px;
		background: var(--accent-soft);
	}

	.research-grid h3,
	.season-grid h3 {
		margin: 0 0 10px !important;
		font-size: 1.18rem !important;
	}

	.research-grid p,
	.season-grid p {
		margin: 0 !important;
		font-size: 0.92rem !important;
		line-height: 1.6 !important;
	}

	.source-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-top: 30px;
	}

	.source-links a {
		display: flex;
		min-height: 54px;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		padding: 14px 16px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
		color: var(--accent-strong);
		font-size: 0.92rem;
		font-weight: 650;
	}

	.source-links a:hover {
		border-color: var(--accent);
	}

	.principles {
		list-style: none;
		counter-reset: principles;
		display: grid !important;
		grid-template-columns: 1fr 1fr;
		gap: 2px !important;
		padding: 0 !important;
		margin-block: 26px 0 !important;
		background: var(--line);
	}

	.principles li {
		counter-increment: principles;
		display: grid;
		grid-template-columns: 42px 1fr;
		gap: 4px 14px;
		padding: 22px;
		background: var(--surface);
	}

	.principles li::before {
		content: counter(principles, decimal-leading-zero);
		grid-row: span 2;
		color: var(--accent-strong);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.82rem;
	}

	.principles strong {
		font-size: 0.96rem;
	}

	.principles span {
		color: var(--muted);
		font-size: 0.84rem;
		line-height: 1.5;
	}

	.delivery-flow {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2px;
		margin-block: 34px;
		background: var(--line);
	}

	.delivery-flow div {
		display: grid;
		align-content: space-between;
		min-height: 180px;
		gap: 24px;
		padding: 22px;
		background: var(--surface);
	}

	.delivery-flow strong {
		font-size: 0.95rem;
	}

	.delivery-flow span {
		color: var(--muted);
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.measurement-columns {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-block: 34px;
	}

	.measurement-columns > div {
		padding: 26px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.measurement-columns h3 {
		margin: 0 0 18px !important;
		font-size: 1.18rem !important;
	}

	.measurement-columns ul {
		margin: 0 !important;
		font-size: 0.92rem;
	}

	.season-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 12px;
		margin-block: 34px;
	}

	.season-grid article {
		padding: 24px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--surface);
	}

	.season-grid .season-main {
		grid-row: span 2;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		min-height: 250px;
		background: var(--accent-soft);
	}

	@media (max-width: 700px) {
		.research-grid,
		.source-links,
		.principles,
		.delivery-flow,
		.measurement-columns,
		.season-grid {
			grid-template-columns: 1fr;
		}

		.research-grid .research-lead,
		.season-grid .season-main {
			grid-row: auto;
			min-height: 220px;
		}

		.delivery-flow div {
			min-height: 140px;
		}
	}
</style>
