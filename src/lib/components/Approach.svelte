<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/analytics';

	const steps = [
		{
			title: 'Discover the real constraint',
			body: 'Start with observed friction, production evidence, and the people closest to the problem.',
			proof: 'VisaJobs started with a repeated job-search failure, not a feature idea.',
			href: '/work/visajobs'
		},
		{
			title: 'Prioritize measurable value',
			body: 'Define the user and business change before deciding what belongs in the roadmap.',
			proof:
				'Bill Reader success was defined through accuracy, time saved, and trusted financial fields.',
			href: '/work/bill-reader'
		},
		{
			title: 'Align product and engineering',
			body: 'Translate customer needs into clear decisions, acceptance criteria, and technical trade-offs.',
			proof:
				'Extraction, validation, and human review were separated by what each method did best.',
			href: '/work/bill-reader'
		},
		{
			title: 'Instrument adoption',
			body: 'Measure whether customers are moving beyond access into meaningful product behavior.',
			proof: 'Amplitude evidence shifted Watt Footprint priorities toward depth of enterprise use.',
			href: '/work/platform-delivery'
		},
		{
			title: 'Iterate from production evidence',
			body: 'Treat real failure modes, support signals, and adoption patterns as inputs to the next release.',
			proof:
				'VisaJobs expanded into an employer product after inbound demand exposed the second side.',
			href: '/work/visajobs'
		}
	];
</script>

<section id="approach" class="section">
	<div class="page-shell approach-grid">
		<div class="approach-intro">
			<h2>How I work when the path is unclear.</h2>
			<p>
				Product management is a decision system. I use evidence to narrow ambiguity, make the
				trade-off visible, and give teams a clear reason to build.
			</p>
		</div>

		<div class="approach-list">
			{#each steps as step, index}
				<article class="approach-item reveal" use:reveal={index * 70}>
					<div>
						<h3>{step.title}</h3>
						<p>{step.body}</p>
						<a
							href={step.href}
							on:click={() =>
								trackEvent('case_study_open', {
									case_study: step.href.split('/').pop() ?? 'unknown',
									placement: 'approach'
								})}>{step.proof} <span aria-hidden="true">→</span></a
						>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.approach-grid {
		display: grid;
		grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
		align-items: start;
		gap: clamp(56px, 9vw, 120px);
	}

	.approach-intro {
		position: sticky;
		top: 116px;
	}

	.approach-intro h2 {
		margin-bottom: 20px;
		font-size: clamp(2.4rem, 4.6vw, 4.6rem);
	}

	.approach-intro p {
		max-width: 44ch;
		margin-bottom: 0;
		color: var(--muted);
	}

	.approach-list {
		border-top: 1px solid var(--line);
	}

	.approach-item {
		display: block;
		padding-block: 32px;
		border-bottom: 1px solid var(--line);
	}

	.approach-item h3 {
		margin-bottom: 10px;
		font-size: clamp(1.35rem, 2.2vw, 1.85rem);
	}

	.approach-item p {
		max-width: 56ch;
		margin-bottom: 10px;
		color: var(--muted);
	}

	.approach-item a {
		color: var(--accent-strong);
		font-size: 0.82rem;
		font-weight: 650;
	}

	@media (max-width: 850px) {
		.approach-grid {
			grid-template-columns: 1fr;
		}

		.approach-intro {
			position: static;
		}
	}
</style>
