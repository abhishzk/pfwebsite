<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/analytics';
	import { capabilities } from '$lib/data/portfolio';
</script>

<section id="capabilities" class="section capabilities-section">
	<div class="page-shell">
		<div class="section-heading">
			<span class="eyebrow">Product capabilities</span>
			<h2>What I bring to the product decision.</h2>
			<p>
				A compact view of the product work I am strongest at, with evidence from the portfolio
				rather than a long technology inventory.
			</p>
		</div>

		<div class="capability-list">
			{#each capabilities as capability, index}
				<article class="capability reveal" use:reveal={index * 70}>
					<div class="capability-number mono">0{index + 1}</div>
					<div>
						<h3>{capability.title}</h3>
						<p>{capability.description}</p>
						<a
							class="text-link"
							href={capability.href}
							on:click={() =>
								trackEvent('case_study_open', {
									case_study: capability.href.split('/').pop() ?? 'experience',
									placement: 'capabilities'
								})}
						>
							{capability.proof} <span aria-hidden="true">→</span>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.capabilities-section {
		background: var(--surface);
	}

	.capability-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		border-top: 1px solid var(--line);
	}

	.capability {
		display: grid;
		grid-template-columns: 46px 1fr;
		gap: 20px;
		padding: 28px 26px 30px 0;
		border-bottom: 1px solid var(--line);
	}

	.capability:nth-child(odd) {
		padding-right: 34px;
		border-right: 1px solid var(--line);
	}

	.capability:nth-child(even) {
		padding-left: 34px;
	}

	.capability-number {
		color: var(--accent-strong);
		font-size: 0.74rem;
	}

	.capability h3 {
		margin-bottom: 9px;
		font-size: clamp(1.2rem, 2vw, 1.65rem);
	}

	.capability p {
		max-width: 46ch;
		margin-bottom: 12px;
		color: var(--muted);
		font-size: 0.92rem;
		line-height: 1.55;
	}

	.capability .text-link {
		font-size: 0.8rem;
	}

	@media (max-width: 700px) {
		.capability-list {
			grid-template-columns: 1fr;
		}

		.capability,
		.capability:nth-child(odd),
		.capability:nth-child(even) {
			padding: 26px 0;
			border-right: 0;
		}
	}
</style>
