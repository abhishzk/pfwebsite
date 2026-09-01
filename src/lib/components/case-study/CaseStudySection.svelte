<script lang="ts">
	export let title: string;
	export let tone: 'default' | 'soft' = 'default';
</script>

<section class:soft={tone === 'soft'} class="case-section">
	<div class="case-section-inner page-shell">
		<div class="case-heading">
			<h2>{title}</h2>
		</div>
		<div class="case-body">
			<slot />
		</div>
	</div>
</section>

<style>
	.case-section {
		padding-block: clamp(80px, 10vw, 128px);
		border-top: 1px solid var(--line);
	}

	.case-section.soft {
		background: var(--surface-soft);
	}

	.case-section-inner {
		display: grid;
		grid-template-columns: minmax(240px, 0.52fr) minmax(0, 1fr);
		align-items: start;
		gap: clamp(48px, 10vw, 140px);
	}

	.case-heading {
		position: sticky;
		top: 110px;
	}

	h2 {
		max-width: 11ch;
		margin-bottom: 0;
		font-size: clamp(2rem, 3.8vw, 3.5rem);
	}

	.case-body {
		max-width: var(--reading);
	}

	.case-body :global(p) {
		margin-bottom: 22px;
		color: var(--muted);
		font-size: 1.02rem;
		line-height: 1.75;
	}

	.case-body :global(p:last-child) {
		margin-bottom: 0;
	}

	.case-body :global(h3) {
		margin-top: 42px;
		margin-bottom: 14px;
		font-size: 1.45rem;
		letter-spacing: -0.025em;
	}

	.case-body :global(ul) {
		display: grid;
		gap: 12px;
		padding-left: 20px;
		margin: 26px 0;
		color: var(--muted);
	}

	.case-body :global(strong) {
		color: var(--ink);
	}

	@media (max-width: 800px) {
		.case-section-inner {
			grid-template-columns: 1fr;
			gap: 34px;
		}

		.case-heading {
			position: static;
		}

		h2 {
			max-width: 16ch;
		}
	}
</style>
