<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { trackEvent } from '$lib/analytics';
	import { externalLinks } from '$lib/data/portfolio';
</script>

<section id="snapshot" class="snapshot section-tight">
	<div class="page-shell snapshot-grid">
		<div class="snapshot-intro reveal" use:reveal>
			<span class="eyebrow">At a glance</span>
			<h2>Product decisions grounded in evidence.</h2>
			<p>I work at the seam between customer need, business value, and engineering reality.</p>
			<div class="snapshot-actions">
				<a
					class="button button-primary"
					href={externalLinks.resume.href}
					target="_blank"
					rel="noreferrer"
					on:click={() => trackEvent('resume_download', { placement: 'snapshot' })}
				>
					Download resume
				</a>
				<a class="text-link" href="#capabilities"
					>See product capabilities <span aria-hidden="true">→</span></a
				>
			</div>
		</div>

		<div class="snapshot-facts reveal" use:reveal={100}>
			<div>
				<span class="fact-label">Based in</span>
				<strong>Dublin, Ireland</strong>
			</div>
			<div>
				<span class="fact-label">Role fit</span>
				<strong>Product Manager and Product Owner roles</strong>
			</div>
			<div>
				<span class="fact-label">Product stages</span>
				<strong>0-to-1 discovery through enterprise adoption</strong>
			</div>
			<div>
				<span class="fact-label">Working style</span>
				<strong>Technical, evidence-led, and collaborative</strong>
			</div>
		</div>
	</div>
</section>

<style>
	.snapshot {
		background: var(--surface);
	}

	.snapshot-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
		align-items: start;
		gap: clamp(56px, 10vw, 140px);
		padding-block: 48px 56px;
		border-top: 1px solid var(--line);
	}

	.snapshot-intro h2 {
		max-width: 20ch;
		margin-bottom: 20px;
		font-size: clamp(2rem, 3.6vw, 3.4rem);
	}

	.snapshot-intro p {
		max-width: 52ch;
		margin-bottom: 26px;
		color: var(--muted);
	}

	.snapshot-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 18px;
	}

	.snapshot-facts {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.snapshot-facts > div {
		display: grid;
		align-content: start;
		gap: 8px;
		min-height: 138px;
		padding: 28px 18px 28px 0;
		border-bottom: 1px solid var(--line);
	}

	.snapshot-facts > div:nth-child(odd) {
		padding-right: 24px;
		border-right: 1px solid var(--line);
	}

	.snapshot-facts > div:nth-child(even) {
		padding-left: 24px;
	}

	.fact-label {
		color: var(--accent-strong);
		font-family: 'IBM Plex Mono', ui-monospace, monospace;
		font-size: 0.7rem;
		text-transform: uppercase;
	}

	.snapshot-facts strong {
		font-size: 0.98rem;
		line-height: 1.45;
	}

	@media (max-width: 850px) {
		.snapshot-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}

	@media (max-width: 520px) {
		.snapshot-facts {
			grid-template-columns: 1fr;
		}

		.snapshot-facts > div,
		.snapshot-facts > div:nth-child(odd),
		.snapshot-facts > div:nth-child(even) {
			min-height: 0;
			padding: 18px 0;
			border-right: 0;
		}
	}
</style>
