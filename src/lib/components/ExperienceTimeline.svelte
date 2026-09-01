<script lang="ts">
	import { experience } from '$lib/data/portfolio';
	import { reveal } from '$lib/actions/reveal';
</script>

<section id="experience" class="section experience-section">
	<div class="page-shell">
		<div class="section-heading">
			<h2>Experience built across products and systems.</h2>
			<p>
				My product work spans 0-to-1 discovery, enterprise adoption, AI workflows, and regulated
				payment infrastructure.
			</p>
		</div>

		<div class="timeline">
			{#each experience as item, index}
				<article class="timeline-item reveal" use:reveal={index * 70}>
					<div class="timeline-meta">
						<span class="mono">{item.period}</span>
						<span>{item.location}</span>
					</div>
					<div class="timeline-copy">
						<p class="company">{item.company}</p>
						<h3>{item.role}</h3>
						<p class="summary">{item.summary}</p>
						<ul>
							{#each item.outcomes as outcome}
								<li>{outcome}</li>
							{/each}
						</ul>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.experience-section {
		background: var(--surface-soft);
	}

	.timeline {
		border-top: 1px solid var(--line);
	}

	.timeline-item {
		display: grid;
		grid-template-columns: minmax(190px, 0.38fr) minmax(0, 1fr);
		gap: clamp(32px, 7vw, 100px);
		padding-block: clamp(40px, 6vw, 68px);
		border-bottom: 1px solid var(--line);
	}

	.timeline-meta {
		display: grid;
		align-content: start;
		gap: 8px;
		color: var(--faint);
		font-size: 0.82rem;
	}

	.timeline-meta .mono {
		color: var(--ink);
		font-size: 0.78rem;
		text-transform: uppercase;
	}

	.company {
		margin-bottom: 6px;
		color: var(--accent-strong);
		font-size: 1rem;
		font-weight: 700;
	}

	.timeline-copy h3 {
		margin-bottom: 16px;
		font-size: clamp(1.8rem, 3vw, 2.8rem);
	}

	.summary {
		max-width: 62ch;
		margin-bottom: 22px;
		color: var(--muted);
	}

	.timeline-copy ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 18px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.timeline-copy li {
		padding-top: 14px;
		border-top: 2px solid var(--line);
		font-size: 0.9rem;
		line-height: 1.55;
	}

	@media (max-width: 800px) {
		.timeline-item {
			grid-template-columns: 1fr;
			gap: 24px;
		}
	}

	@media (max-width: 600px) {
		.timeline-copy ul {
			grid-template-columns: 1fr;
		}
	}
</style>
